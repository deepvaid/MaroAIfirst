<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type {
  BufferAttribute,
  BufferGeometry,
  Group,
  LineLoop,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  Sprite,
  Vector3,
  WebGLRenderer,
} from 'three'

type AISentientOrbState = 'idle' | 'listening' | 'thinking' | 'speaking'

const props = withDefaults(
  defineProps<{
    state?: AISentientOrbState
    audioLevel?: number
  }>(),
  {
    state: 'idle',
    audioLevel: 0,
  },
)

const container = ref<HTMLElement | null>(null)

// Hoisted only for teardown / pause-resume; the scene graph lives in onMounted.
let renderer: WebGLRenderer | null = null
let frame = 0
let resizeObserver: ResizeObserver | null = null
let onVisibility: (() => void) | null = null
let disposables: Array<{ dispose: () => void }> = []

interface RingRef {
  loop: LineLoop
  axis: Vector3
  speed: number
  radius: number
}

// A small bright energy core that glows additively through the glass shell.
const CORE_VERT = `
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vPos;
  void main() {
    vPos = position;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`

const CORE_FRAG = `
  uniform float uTime;
  uniform float uIntensity;
  uniform vec3 uDeep;
  uniform vec3 uBright;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vPos;
  void main() {
    float facing = clamp(dot(normalize(vNormal), normalize(vView)), 0.0, 1.0);
    float center = pow(facing, 1.6);
    // A slow flowing band evokes the swirling "thinking" energy in the core.
    float flow = 0.5 + 0.5 * sin(vPos.y * 3.2 + sin(vPos.x * 2.0 + uTime * 0.8) + uTime * 1.1);
    vec3 col = mix(uDeep, uBright, center);
    col += uBright * flow * 0.18 * center;
    float alpha = center * uIntensity;
    gl_FragColor = vec4(col * uIntensity, alpha);
  }
`

// Glass-like shell: subtle translucent body + a bright Fresnel rim (the white shell).
const GLASS_FRAG = `
  uniform float uTime;
  uniform float uRim;
  uniform vec3 uBody;
  uniform vec3 uEdge;
  varying vec3 vNormal;
  varying vec3 vView;
  varying vec3 vPos;
  void main() {
    float fres = pow(1.0 - clamp(dot(normalize(vNormal), normalize(vView)), 0.0, 1.0), 2.6);
    float body = 0.08 + 0.05 * (0.5 + 0.5 * sin(vPos.y * 2.0 + uTime * 0.5));
    vec3 col = mix(uBody, uEdge, fres);
    float alpha = body + fres * 0.9 * uRim;
    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`

// Soft round additive points with per-particle twinkle + colour mix.
const PARTICLE_VERT = `
  attribute float aScale;
  attribute float aPhase;
  attribute float aMix;
  uniform float uTime;
  uniform float uSizeScale;
  uniform float uViewHeight;
  varying float vTw;
  varying float vMix;
  void main() {
    vMix = aMix;
    float tw = 0.55 + 0.45 * sin(uTime * 1.8 + aPhase);
    vTw = tw;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aScale * uSizeScale * tw * (uViewHeight / max(-mv.z, 0.001));
    gl_Position = projectionMatrix * mv;
  }
`

const PARTICLE_FRAG = `
  uniform float uOpacity;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vTw;
  varying float vMix;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    vec3 col = mix(uColorA, uColorB, vMix);
    gl_FragColor = vec4(col, a * vTw * uOpacity);
  }
`

const SPARKLE_VERT = `
  attribute float aScale;
  attribute float aPhase;
  uniform float uTime;
  uniform float uSizeScale;
  uniform float uViewHeight;
  varying float vTw;
  void main() {
    float tw = pow(0.5 + 0.5 * sin(uTime * 3.0 + aPhase), 2.0);
    vTw = tw;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aScale * uSizeScale * (0.4 + tw) * (uViewHeight / max(-mv.z, 0.001));
    gl_Position = projectionMatrix * mv;
  }
`

const SPARKLE_FRAG = `
  uniform float uOpacity;
  uniform vec3 uColor;
  varying float vTw;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(uColor, a * vTw * uOpacity);
  }
`

function rand(min: number, max: number): number {
  return min + Math.random() * (max - min)
}

onMounted(async () => {
  if (!container.value) return
  const THREE = await import('three')
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const motion = reduceMotion ? 0.4 : 1

  const scene: Scene = new THREE.Scene()
  const camera: PerspectiveCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
  camera.position.z = 6

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)
  container.value.appendChild(renderer.domElement)

  // --- Layer 4: outer energy halo (behind everything) ---
  const haloCanvas = document.createElement('canvas')
  haloCanvas.width = 256
  haloCanvas.height = 256
  const haloCtx = haloCanvas.getContext('2d')
  if (haloCtx) {
    const grad = haloCtx.createRadialGradient(128, 128, 0, 128, 128, 128)
    grad.addColorStop(0, 'rgba(160, 205, 255, 0.9)')
    grad.addColorStop(0.4, 'rgba(95, 150, 255, 0.32)')
    grad.addColorStop(1, 'rgba(95, 150, 255, 0)')
    haloCtx.fillStyle = grad
    haloCtx.fillRect(0, 0, 256, 256)
  }
  const haloTexture = new THREE.CanvasTexture(haloCanvas)
  haloTexture.colorSpace = THREE.SRGBColorSpace
  const haloMaterial = new THREE.SpriteMaterial({
    map: haloTexture,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    opacity: 0.2,
  })
  const halo: Sprite = new THREE.Sprite(haloMaterial)
  const BASE_HALO = 4.6
  halo.scale.setScalar(BASE_HALO)
  halo.position.z = -0.5
  halo.renderOrder = 0
  scene.add(halo)
  disposables.push(haloTexture, haloMaterial)

  // --- Orb group (scales with breathing / state) ---
  const coreGroup: Group = new THREE.Group()
  scene.add(coreGroup)

  // Layer 1a: glowing blue core.
  const coreUniforms = {
    uTime: { value: 0 },
    uIntensity: { value: 0.85 },
    uDeep: { value: new THREE.Color(0x1c6dff) },
    uBright: { value: new THREE.Color(0xc7e2ff) },
  }
  const coreGeometry = new THREE.SphereGeometry(0.62, reduceMotion ? 32 : 48, reduceMotion ? 32 : 48)
  const coreMaterial = new THREE.ShaderMaterial({
    uniforms: coreUniforms,
    vertexShader: CORE_VERT,
    fragmentShader: CORE_FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })
  const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial)
  coreMesh.renderOrder = 1
  coreGroup.add(coreMesh)
  disposables.push(coreGeometry, coreMaterial)

  // Layer 1b: transparent glass shell with Fresnel rim.
  const glassUniforms = {
    uTime: { value: 0 },
    uRim: { value: 0.8 },
    uBody: { value: new THREE.Color(0x6f9bff) },
    uEdge: { value: new THREE.Color(0xffffff) },
  }
  const glassGeometry = new THREE.SphereGeometry(1.0, reduceMotion ? 40 : 64, reduceMotion ? 40 : 64)
  const glassMaterial = new THREE.ShaderMaterial({
    uniforms: glassUniforms,
    vertexShader: CORE_VERT,
    fragmentShader: GLASS_FRAG,
    transparent: true,
    depthWrite: false,
  })
  const glassMesh = new THREE.Mesh(glassGeometry, glassMaterial)
  glassMesh.renderOrder = 3
  coreGroup.add(glassMesh)
  disposables.push(glassGeometry, glassMaterial)

  // --- Layer 2: inner particle core (coherent differential-rotation flow) ---
  const PARTICLE_COUNT = reduceMotion ? 360 : 620
  const particlePositions = new Float32Array(PARTICLE_COUNT * 3)
  const particleScales = new Float32Array(PARTICLE_COUNT)
  const particlePhases = new Float32Array(PARTICLE_COUNT)
  const particleMixes = new Float32Array(PARTICLE_COUNT)
  const PARTICLE_RADIUS = 0.92
  const particleData: Array<{ ang0: number; rxz: number; y0: number; ph: number; rNorm: number }> = []
  for (let i = 0; i < PARTICLE_COUNT; i += 1) {
    const r = PARTICLE_RADIUS * Math.cbrt(Math.random())
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const x = r * Math.sin(phi) * Math.cos(theta)
    const z = r * Math.sin(phi) * Math.sin(theta)
    const y = r * Math.cos(phi) * 0.6 // flatten into a swirl-disc
    particlePositions[i * 3] = x
    particlePositions[i * 3 + 1] = y
    particlePositions[i * 3 + 2] = z
    particleScales[i] = rand(0.5, 1.6)
    particlePhases[i] = Math.random() * Math.PI * 2
    particleMixes[i] = Math.random()
    particleData.push({
      ang0: Math.atan2(z, x),
      rxz: Math.hypot(x, z),
      y0: y,
      ph: particlePhases[i] ?? 0,
      rNorm: r / PARTICLE_RADIUS,
    })
  }
  const particleGeometry = new THREE.BufferGeometry()
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
  particleGeometry.setAttribute('aScale', new THREE.BufferAttribute(particleScales, 1))
  particleGeometry.setAttribute('aPhase', new THREE.BufferAttribute(particlePhases, 1))
  particleGeometry.setAttribute('aMix', new THREE.BufferAttribute(particleMixes, 1))
  const particleUniforms = {
    uTime: { value: 0 },
    uOpacity: { value: 0.5 },
    uSizeScale: { value: 0.085 },
    uViewHeight: { value: 600 },
    uColorA: { value: new THREE.Color(0xdaecff) },
    uColorB: { value: new THREE.Color(0x00b7f4) },
  }
  const particleMaterial = new THREE.ShaderMaterial({
    uniforms: particleUniforms,
    vertexShader: PARTICLE_VERT,
    fragmentShader: PARTICLE_FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })
  const particles: Points<BufferGeometry, ShaderMaterial> = new THREE.Points(particleGeometry, particleMaterial)
  particles.frustumCulled = false
  particles.renderOrder = 2
  coreGroup.add(particles)
  const particlePos = particleGeometry.getAttribute('position') as BufferAttribute
  disposables.push(particleGeometry, particleMaterial)

  // --- Layer 3: orbit rings (thin LineLoops tumbling on different axes) ---
  const ringGroup: Group = new THREE.Group()
  scene.add(ringGroup)
  const RING_SEGMENTS = reduceMotion ? 96 : 160
  const ringPositions = new Float32Array(RING_SEGMENTS * 3)
  for (let i = 0; i < RING_SEGMENTS; i += 1) {
    const a = (i / RING_SEGMENTS) * Math.PI * 2
    ringPositions[i * 3] = Math.cos(a)
    ringPositions[i * 3 + 1] = Math.sin(a)
    ringPositions[i * 3 + 2] = 0
  }
  const ringGeometry = new THREE.BufferGeometry()
  ringGeometry.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3))
  disposables.push(ringGeometry)
  const ringConfigs = [
    { color: 0xbfe6ff, opacity: 0.34, radius: 1.32, tilt: [1.2, 0.2, 0], axis: [1, 0, 0], speed: 0.0042 },
    { color: 0xeaf4ff, opacity: 0.22, radius: 1.5, tilt: [0.4, 0, 0.9], axis: [0, 1, 0], speed: 0.0028 },
    { color: 0x9fd8ff, opacity: 0.18, radius: 1.18, tilt: [-0.6, 0.5, 0.3], axis: [0.6, 0.6, 0], speed: 0.0035 },
  ]
  const rings: RingRef[] = ringConfigs.map((cfg) => {
    const material = new THREE.LineBasicMaterial({
      color: cfg.color,
      transparent: true,
      opacity: cfg.opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const loop = new THREE.LineLoop(ringGeometry, material)
    loop.rotation.set(cfg.tilt[0] ?? 0, cfg.tilt[1] ?? 0, cfg.tilt[2] ?? 0)
    loop.scale.setScalar(cfg.radius)
    loop.renderOrder = 3
    ringGroup.add(loop)
    disposables.push(material)
    return {
      loop,
      axis: new THREE.Vector3(cfg.axis[0], cfg.axis[1], cfg.axis[2]).normalize(),
      speed: cfg.speed,
      radius: cfg.radius,
    }
  })

  // --- Sparkles (faint glints; brighten during thinking) ---
  const SPARKLE_COUNT = reduceMotion ? 40 : 70
  const sparklePositions = new Float32Array(SPARKLE_COUNT * 3)
  const sparkleScales = new Float32Array(SPARKLE_COUNT)
  const sparklePhases = new Float32Array(SPARKLE_COUNT)
  for (let i = 0; i < SPARKLE_COUNT; i += 1) {
    const r = rand(1.05, 1.7)
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    sparklePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    sparklePositions[i * 3 + 1] = r * Math.cos(phi) * 0.7
    sparklePositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    sparkleScales[i] = rand(0.6, 1.4)
    sparklePhases[i] = Math.random() * Math.PI * 2
  }
  const sparkleGeometry = new THREE.BufferGeometry()
  sparkleGeometry.setAttribute('position', new THREE.BufferAttribute(sparklePositions, 3))
  sparkleGeometry.setAttribute('aScale', new THREE.BufferAttribute(sparkleScales, 1))
  sparkleGeometry.setAttribute('aPhase', new THREE.BufferAttribute(sparklePhases, 1))
  const sparkleUniforms = {
    uTime: { value: 0 },
    uOpacity: { value: 0.2 },
    uSizeScale: { value: 0.11 },
    uViewHeight: { value: 600 },
    uColor: { value: new THREE.Color(0xeaf6ff) },
  }
  const sparkleMaterial = new THREE.ShaderMaterial({
    uniforms: sparkleUniforms,
    vertexShader: SPARKLE_VERT,
    fragmentShader: SPARKLE_FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })
  const sparkles: Points<BufferGeometry, ShaderMaterial> = new THREE.Points(sparkleGeometry, sparkleMaterial)
  sparkles.frustumCulled = false
  sparkles.renderOrder = 4
  scene.add(sparkles)
  disposables.push(sparkleGeometry, sparkleMaterial)

  // --- Smoothly interpolated state parameters ---
  const cur = { scale: 1, core: 0.85, halo: 0.7, flow: 0.55, swirl: 0.18, ring: 0.5, sparkle: 0.18, ripple: 0 }
  const tgt = { ...cur }

  function setTargets() {
    const a = Math.min(Math.max(props.audioLevel, 0), 1)
    switch (props.state) {
      case 'listening':
        tgt.scale = 1.05 + a * 0.06
        tgt.core = 1.0 + a * 0.45
        tgt.halo = 0.95 + a * 0.5
        tgt.flow = 1.1 + a * 0.7
        tgt.swirl = 0.35
        tgt.ring = 0.85 + a * 0.4
        tgt.sparkle = 0.35
        tgt.ripple = 0
        break
      case 'thinking':
        tgt.scale = 1.02
        tgt.core = 1.05
        tgt.halo = 0.85
        tgt.flow = 1.6
        tgt.swirl = 1.0
        tgt.ring = 1.5
        tgt.sparkle = 0.95
        tgt.ripple = 0
        break
      case 'speaking':
        tgt.scale = 1.04 + a * 0.1
        tgt.core = 1.1 + a * 0.5
        tgt.halo = 1.0 + a * 0.5
        tgt.flow = 1.25 + a * 0.5
        tgt.swirl = 0.4
        tgt.ring = 1.05
        tgt.sparkle = 0.45
        tgt.ripple = 0.6 + a * 0.6
        break
      default:
        tgt.scale = 1.0
        tgt.core = 0.85
        tgt.halo = 0.7
        tgt.flow = 0.55
        tgt.swirl = 0.18
        tgt.ring = 0.5
        tgt.sparkle = 0.18
        tgt.ripple = 0
    }
  }

  function resize() {
    if (!container.value || !renderer) return
    const rect = container.value.getBoundingClientRect()
    const w = Math.max(1, rect.width)
    const h = Math.max(1, rect.height)
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    const fov = (camera.fov * Math.PI) / 180
    const tan = Math.tan(fov / 2)
    const objectRadius = 1.95
    const fill = 0.82
    camera.position.z = camera.aspect < 1 ? objectRadius / (fill * tan * camera.aspect) : objectRadius / (fill * tan)
    camera.updateProjectionMatrix()
    const viewHeight = h * renderer.getPixelRatio()
    particleUniforms.uViewHeight.value = viewHeight
    sparkleUniforms.uViewHeight.value = viewHeight
  }

  resizeObserver = new ResizeObserver(() => resize())
  resizeObserver.observe(container.value)
  resize()

  let time = 0
  let particleSpin = 0

  const animate = () => {
    if (!renderer) return
    time += 0.0166 * motion

    setTargets()
    const k = 0.06
    cur.scale += (tgt.scale - cur.scale) * k
    cur.core += (tgt.core - cur.core) * k
    cur.halo += (tgt.halo - cur.halo) * k
    cur.flow += (tgt.flow - cur.flow) * k
    cur.swirl += (tgt.swirl - cur.swirl) * k
    cur.ring += (tgt.ring - cur.ring) * k
    cur.sparkle += (tgt.sparkle - cur.sparkle) * k
    cur.ripple += (tgt.ripple - cur.ripple) * k

    const audio = Math.min(Math.max(props.audioLevel, 0), 1)
    const speaking = props.state === 'speaking'

    // Breathing + speaking amplitude pulse.
    let pulse = Math.sin(time * 0.6) * 0.018
    if (speaking) pulse += Math.sin(time * 7.5) * 0.05 * audio
    coreGroup.scale.setScalar(cur.scale * (1 + pulse * motion))

    // Core glow (+ soft flicker while speaking).
    const flicker = speaking ? Math.sin(time * 20) * 0.07 * audio * motion : 0
    coreUniforms.uTime.value = time
    coreUniforms.uIntensity.value = cur.core + flicker
    glassUniforms.uTime.value = time
    glassUniforms.uRim.value = 0.7 + cur.core * 0.25

    // Inner particle flow: differential rotation + breathing + vertical bob.
    particleSpin += (0.05 + cur.flow * 0.06 + cur.swirl * 0.12) * motion
    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const pd = particleData[i]
      if (!pd) continue
      const ang = pd.ang0 + particleSpin * (1.0 - 0.4 * pd.rNorm)
      const breath = 1 + Math.sin(time * 0.7 + pd.ph) * 0.05
      const px = Math.cos(ang) * pd.rxz * breath
      const pz = Math.sin(ang) * pd.rxz * breath
      const py = pd.y0 * breath + Math.sin(time * 0.9 + pd.ph) * 0.04
      particlePos.setXYZ(i, px, py, pz)
    }
    particlePos.needsUpdate = true
    particleUniforms.uTime.value = time
    particleUniforms.uOpacity.value = 0.4 + cur.core * 0.22

    // Sparkles fade in for thinking/listening/speaking.
    sparkleUniforms.uTime.value = time
    sparkleUniforms.uOpacity.value = cur.sparkle * 0.7

    // Rings tumble on their own axes; ripple outward while speaking.
    for (let i = 0; i < rings.length; i += 1) {
      const r = rings[i]
      if (!r) continue
      r.loop.rotateOnWorldAxis(r.axis, r.speed * cur.ring * motion)
      const ripple = 1 + Math.sin(time * 3.0 - i * 0.7) * 0.06 * cur.ripple
      r.loop.scale.setScalar(r.radius * ripple)
    }

    // Halo: soft glow that pulses with audio when listening/speaking.
    const haloPulse = props.state === 'listening' || speaking ? audio * 0.25 : 0
    haloMaterial.opacity = Math.min(0.55, 0.16 + cur.halo * 0.16 + haloPulse * motion)
    halo.scale.setScalar(BASE_HALO * (1 + (cur.halo - 0.7) * 0.08 + haloPulse * 0.15))

    renderer.render(scene, camera)
    frame = window.requestAnimationFrame(animate)
  }

  onVisibility = () => {
    if (document.hidden) {
      if (frame) window.cancelAnimationFrame(frame)
      frame = 0
    } else if (!frame && renderer) {
      frame = window.requestAnimationFrame(animate)
    }
  }
  document.addEventListener('visibilitychange', onVisibility)

  animate()
})

onBeforeUnmount(() => {
  if (frame) window.cancelAnimationFrame(frame)
  frame = 0
  if (onVisibility) document.removeEventListener('visibilitychange', onVisibility)
  onVisibility = null
  resizeObserver?.disconnect()
  resizeObserver = null
  for (const item of disposables) item.dispose()
  disposables = []
  renderer?.dispose()
  renderer?.domElement.remove()
  renderer = null
})
</script>

<template>
  <div ref="container" class="ai-sentient-orb" aria-hidden="true" />
</template>

<style scoped>
.ai-sentient-orb {
  position: relative;
  width: min(260px, 60vw);
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  pointer-events: none;
}

.ai-sentient-orb :deep(canvas) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
