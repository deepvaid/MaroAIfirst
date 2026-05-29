<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type {
  BufferGeometry,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from 'three'
import type { AiVisualState } from '../composables/useAiStateManager'

const props = defineProps<{
  state: AiVisualState
  audioLevel: number
}>()

const container = ref<HTMLElement | null>(null)
let renderer: WebGLRenderer | null = null
let scene: Scene | null = null
let camera: PerspectiveCamera | null = null
let particles: Points<BufferGeometry, ShaderMaterial> | null = null
let frame = 0
let resizeObserver: ResizeObserver | null = null

const stateValue: Record<AiVisualState, number> = {
  idle: 0,
  listening: 1,
  thinking: 2,
  speaking: 3,
  error: 4,
}

function updateUniforms() {
  if (!particles) return
  const { uState, uAudioLevel } = particles.material.uniforms
  if (uState) uState.value = stateValue[props.state]
  if (uAudioLevel) uAudioLevel.value = props.audioLevel
}

onMounted(async () => {
  if (!container.value) return
  const THREE = await import('three')
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100)
  camera.position.z = 4.2

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)
  container.value.appendChild(renderer.domElement)

  const count = reduceMotion ? 1200 : 2600
  const positions = new Float32Array(count * 3)
  const seeds = new Float32Array(count)

  for (let index = 0; index < count; index += 1) {
    const radius = 1.08 + Math.random() * 0.42
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[index * 3 + 2] = radius * Math.cos(phi)
    seeds[index] = Math.random()
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1))

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uState: { value: stateValue[props.state] },
      uAudioLevel: { value: props.audioLevel },
      uReduceMotion: { value: reduceMotion ? 1 : 0 },
    },
    vertexShader: `
      attribute float aSeed;
      uniform float uTime;
      uniform float uState;
      uniform float uAudioLevel;
      uniform float uReduceMotion;
      varying float vSeed;
      varying float vIntensity;

      void main() {
        vSeed = aSeed;
        vec3 p = position;
        float activity = 0.12 + uAudioLevel * 0.38;
        activity += uState == 2.0 ? 0.12 : 0.0;
        activity += uState == 3.0 ? 0.2 : 0.0;
        activity -= uReduceMotion * 0.18;
        float wave = sin(uTime * (0.7 + uState * 0.18) + aSeed * 18.0) * activity;
        p *= 1.0 + wave;
        p.x += sin(uTime * 0.35 + p.y * 3.2) * activity * 0.18;
        p.y += cos(uTime * 0.28 + p.z * 3.8) * activity * 0.14;
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = (2.0 + activity * 8.0) * (1.0 / -mvPosition.z);
        vIntensity = activity;
      }
    `,
    fragmentShader: `
      uniform float uState;
      varying float vSeed;
      varying float vIntensity;

      void main() {
        vec2 c = gl_PointCoord - vec2(0.5);
        float d = length(c);
        float alpha = smoothstep(0.5, 0.04, d) * (0.42 + vIntensity);
        vec3 idleColor = vec3(0.34, 0.78, 1.0);
        vec3 warmColor = vec3(0.68, 0.92, 1.0);
        vec3 errorColor = vec3(1.0, 0.28, 0.32);
        vec3 color = mix(idleColor, warmColor, clamp(vIntensity + vSeed * 0.24, 0.0, 1.0));
        if (uState == 4.0) color = errorColor;
        gl_FragColor = vec4(color, alpha);
      }
    `,
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  function resize() {
    if (!container.value || !renderer || !camera) return
    const { width, height } = container.value.getBoundingClientRect()
    renderer.setSize(width, height)
    camera.aspect = width / Math.max(height, 1)
    camera.updateProjectionMatrix()
  }

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container.value)
  resize()

  const animate = () => {
    if (!renderer || !scene || !camera || !particles) return
    const timeUniform = particles.material.uniforms.uTime
    if (!timeUniform) return
    timeUniform.value += reduceMotion ? 0.006 : 0.018
    particles.rotation.y += reduceMotion ? 0.0008 : 0.002 + props.audioLevel * 0.004
    particles.rotation.x = Math.sin(timeUniform.value * 0.22) * 0.08
    renderer.render(scene, camera)
    frame = window.requestAnimationFrame(animate)
  }

  animate()
})

watch(() => [props.state, props.audioLevel] as const, updateUniforms)

onBeforeUnmount(() => {
  if (frame) window.cancelAnimationFrame(frame)
  resizeObserver?.disconnect()
  particles?.geometry.dispose()
  particles?.material.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()
})
</script>

<template>
  <div ref="container" class="jarvis-orb" aria-hidden="true" />
</template>

<style scoped>
.jarvis-orb {
  width: min(64vh, 680px);
  height: min(64vh, 680px);
  min-width: 280px;
  min-height: 280px;
  margin: 0 auto;
  opacity: 0.95;
  filter: drop-shadow(0 0 44px rgba(74, 185, 255, 0.22));
}
</style>
