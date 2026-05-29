<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type {
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  TorusGeometry,
  WebGLRenderer,
} from 'three'
import type { AiVisualState } from '../composables/useAiStateManager'

const props = defineProps<{
  state: AiVisualState
  audioLevel: number
  size?: number | string
}>()

const orbStyle = computed(() => {
  if (props.size == null) return {}
  const value = typeof props.size === 'number' ? `${props.size}px` : props.size
  return { width: value, height: value, minWidth: value, minHeight: value }
})

const container = ref<HTMLElement | null>(null)
const meshCanvas = ref<HTMLCanvasElement | null>(null)
let renderer: WebGLRenderer | null = null
let scene: Scene | null = null
let camera: PerspectiveCamera | null = null
let torus: Mesh<TorusGeometry, MeshStandardMaterial> | null = null
let ghost: Mesh<BufferGeometry, MeshBasicMaterial> | null = null
let lightBlue: PointLight | null = null
let lightTeal: PointLight | null = null
let lightRim: PointLight | null = null
let basePositions: Float32Array | null = null
let frame = 0
let meshFrame = 0
let resizeObserver: ResizeObserver | null = null
let meshParticles: MeshParticle[] = []

interface MeshParticle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  twinkle: number
}

function organicNoise(x: number, y: number, z: number): number {
  const a = Math.sin(x * 1.6 + y * 0.7 + z * 0.9)
  const b = Math.sin(x * 0.8 - y * 1.3 + z * 1.7)
  const c = Math.sin((x + y) * 0.55 + Math.cos(z * 1.2))
  return (a + b + c) / 3
}

function energyForState(): number {
  const baseline: Record<AiVisualState, number> = {
    idle: 0.05,
    listening: 0.32,
    thinking: 0.26,
    speaking: 0.5,
    error: 0.42,
  }

  return Math.min(1, baseline[props.state] + props.audioLevel * 0.72)
}

function resizeRenderer() {
  if (!container.value || !renderer || !camera) return
  const { width, height } = container.value.getBoundingClientRect()
  renderer.setSize(width, height)
  camera.aspect = width / Math.max(height, 1)

  const aspect = camera.aspect
  const objectRadius = 13.8
  const fill = 0.78
  const tan = Math.tan((camera.fov * Math.PI / 180) / 2)
  camera.position.z = aspect < 1
    ? objectRadius / (fill * tan * aspect)
    : objectRadius / (fill * tan)
  camera.updateProjectionMatrix()
}

function resizeMeshCanvas() {
  const canvas = meshCanvas.value
  const host = container.value
  if (!canvas || !host) return

  const { width, height } = host.getBoundingClientRect()
  const ratio = Math.min(window.devicePixelRatio, 2)
  canvas.width = Math.max(1, Math.floor(width * ratio))
  canvas.height = Math.max(1, Math.floor(height * ratio))
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  const count = Math.min(72, Math.max(32, Math.floor(width * height / 8200)))
  meshParticles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.24,
    vy: (Math.random() - 0.5) * 0.24,
    size: 0.7 + Math.random() * 1.1,
    twinkle: Math.random() * Math.PI * 2,
  }))
}

onMounted(async () => {
  if (!container.value) return
  const THREE = await import('three')
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)
  container.value.appendChild(renderer.domElement)

  const ambient: AmbientLight = new THREE.AmbientLight(0x8ba6ba, 0.95)
  scene.add(ambient)

  const lightWhite = new THREE.PointLight(0xffffff, 1.1, 200)
  lightWhite.position.set(0, 12, 18)
  scene.add(lightWhite)

  lightBlue = new THREE.PointLight(0x3fa9ff, 1.35, 200)
  lightBlue.position.set(-16, -6, 12)
  scene.add(lightBlue)

  lightTeal = new THREE.PointLight(0x2bf0d0, 1.2, 200)
  lightTeal.position.set(16, 6, 10)
  scene.add(lightTeal)

  lightRim = new THREE.PointLight(0xff5fae, 0, 200)
  lightRim.position.set(0, -14, 14)
  scene.add(lightRim)

  const geometry = new THREE.TorusGeometry(7, 2.2, reduceMotion ? 28 : 44, reduceMotion ? 128 : 200)
  const position = geometry.getAttribute('position') as BufferAttribute
  basePositions = Float32Array.from(position.array as ArrayLike<number>)
  const colors = new Float32Array(position.count * 3)
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const material = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.5,
    metalness: 0.25,
    emissive: new THREE.Color(0x0a7f8c),
    emissiveIntensity: 0.45,
  })

  torus = new THREE.Mesh(geometry, material)
  scene.add(torus)

  const ghostMaterial = new THREE.MeshBasicMaterial({
    color: 0x1a4a55,
    wireframe: true,
    transparent: true,
    opacity: 0.08,
  })
  ghost = new THREE.Mesh(geometry, ghostMaterial)
  ghost.scale.setScalar(1.04)
  torus.add(ghost)

  const normal = new THREE.Vector3()
  const baseColor = new THREE.Color(0x0a7f8c)
  const peakColor = new THREE.Color(0x6cf2e4)
  const hotColor = new THREE.Color(0xff5fae)
  const errorColor = new THREE.Color(0xff5f6c)
  const mixedColor = new THREE.Color()

  let time = 0

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container.value)
  resize()

  function resize() {
    resizeRenderer()
    resizeMeshCanvas()
  }

  const animate = () => {
    if (!renderer || !scene || !camera || !torus || !basePositions) return
    const geom = torus.geometry
    const positionAttr = geom.getAttribute('position') as BufferAttribute
    const normalAttr = geom.getAttribute('normal') as BufferAttribute
    const colorAttr = geom.getAttribute('color') as BufferAttribute
    const positions = positionAttr.array
    const normals = normalAttr.array
    const colorArray = colorAttr.array
    const energy = energyForState()

    time += reduceMotion ? 0.004 : 0.006 + energy * 0.022
    const amplitude = reduceMotion ? 0.42 : 0.7 + energy * 1.95
    const frequency = 0.18

    for (let index = 0; index < positionAttr.count; index += 1) {
      const ix = index * 3
      const bx = basePositions[ix] ?? 0
      const by = basePositions[ix + 1] ?? 0
      const bz = basePositions[ix + 2] ?? 0
      const noise = organicNoise(
        bx * frequency + time,
        by * frequency + time * 0.8,
        bz * frequency,
      )

      normal.set(
        Number(normals[ix] ?? 0),
        Number(normals[ix + 1] ?? 0),
        Number(normals[ix + 2] ?? 1),
      )

      const displacement = noise * amplitude
      positions[ix] = bx + normal.x * displacement
      positions[ix + 1] = by + normal.y * displacement
      positions[ix + 2] = bz + normal.z * displacement

      const colorMix = noise * 0.5 + 0.5
      mixedColor.copy(baseColor).lerp(peakColor, colorMix)
      if (props.state === 'error') mixedColor.lerp(errorColor, 0.8)
      else if (energy > 0.08) mixedColor.lerp(hotColor, Math.min(0.54, energy * 0.58) * colorMix)

      colorArray[ix] = mixedColor.r
      colorArray[ix + 1] = mixedColor.g
      colorArray[ix + 2] = mixedColor.b
    }

    positionAttr.needsUpdate = true
    colorAttr.needsUpdate = true
    geom.computeVertexNormals()

    torus.rotation.z += reduceMotion ? 0.0007 : 0.0016 + energy * 0.004
    torus.rotation.x = Math.sin(time * 0.18) * 0.06
    torus.rotation.y = Math.cos(time * 0.14) * 0.06

    if (lightRim) lightRim.intensity = energy * 1.6
    if (lightBlue) lightBlue.position.x = -16 + Math.sin(time * 0.5) * 4
    if (lightTeal) lightTeal.position.x = 16 + Math.cos(time * 0.4) * 4

    renderer.render(scene, camera)
    frame = window.requestAnimationFrame(animate)
  }

  const drawMesh = () => {
    const canvas = meshCanvas.value
    const host = container.value
    if (!canvas || !host) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { width, height } = host.getBoundingClientRect()
    const energy = energyForState()
    const cx = width / 2
    const cy = height / 2

    ctx.clearRect(0, 0, width, height)
    meshParticles.forEach(particle => {
      particle.x += particle.vx * (1 + energy * 1.4)
      particle.y += particle.vy * (1 + energy * 1.4)
      particle.twinkle += 0.028

      if (energy > 0.08) {
        const dx = cx - particle.x
        const dy = cy - particle.y
        const distance = Math.hypot(dx, dy)
        if (distance > 1) {
          particle.vx += (dx / distance) * energy * 0.0022
          particle.vy += (dy / distance) * energy * 0.0022
        }
      }

      particle.vx *= 0.993
      particle.vy *= 0.993

      if (particle.x < -5) particle.x = width + 5
      if (particle.x > width + 5) particle.x = -5
      if (particle.y < -5) particle.y = height + 5
      if (particle.y > height + 5) particle.y = -5
    })

    const threshold = Math.min(width, height) * 0.17 + energy * 48
    for (let left = 0; left < meshParticles.length; left += 1) {
      const particle = meshParticles[left]
      if (!particle) continue
      for (let right = left + 1; right < meshParticles.length; right += 1) {
        const next = meshParticles[right]
        if (!next) continue
        const distance = Math.hypot(particle.x - next.x, particle.y - next.y)
        if (distance < threshold) {
          const fade = 1 - distance / threshold
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(next.x, next.y)
          ctx.strokeStyle = `rgba(13, 140, 184, ${fade * (0.1 + energy * 0.22)})`
          ctx.lineWidth = 0.5 + fade * 0.3
          ctx.stroke()
        }
      }
    }

    meshParticles.forEach(particle => {
      const twinkle = Math.sin(particle.twinkle) * 0.2 + 0.8
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, (particle.size + energy * 0.5) * twinkle, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(13, 140, 184, ${0.22 + energy * 0.26})`
      ctx.fill()
    })

    meshFrame = window.requestAnimationFrame(drawMesh)
  }

  animate()
  drawMesh()
})

watch(() => [props.state, props.audioLevel] as const, () => {
  if (ghost) ghost.material.opacity = props.state === 'speaking' ? 0.14 : 0.08
})

onBeforeUnmount(() => {
  if (frame) window.cancelAnimationFrame(frame)
  if (meshFrame) window.cancelAnimationFrame(meshFrame)
  resizeObserver?.disconnect()
  torus?.geometry.dispose()
  torus?.material.dispose()
  ghost?.material.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()
})
</script>

<template>
  <div ref="container" class="jarvis-orb" :style="orbStyle" aria-hidden="true">
    <canvas ref="meshCanvas" class="jarvis-mesh" />
  </div>
</template>

<style scoped>
.jarvis-orb {
  position: relative;
  width: min(68vh, 720px);
  height: min(68vh, 720px);
  min-width: 280px;
  min-height: 280px;
  margin: 0 auto;
  opacity: 1;
  filter:
    drop-shadow(0 6px 18px rgba(0, 183, 244, 0.22))
    drop-shadow(0 2px 44px rgba(0, 183, 244, 0.1));
}

.jarvis-orb :deep(canvas:not(.jarvis-mesh)) {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.jarvis-mesh {
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 0.56;
  pointer-events: none;
}
</style>
