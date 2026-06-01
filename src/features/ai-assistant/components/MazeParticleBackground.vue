<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import {
  AdditiveBlending,
  Box3,
  Group,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  TextureLoader,
  Vector3,
  WebGLRenderer,
} from 'three'
import { createMazeBlobGeometry } from '../lib/maze-particle-geometry'
import {
  MAZE_PARTICLES_FRAGMENT_SHADER,
  MAZE_PARTICLES_VERTEX_SHADER,
} from '../lib/maze-particle-shaders'

const container = ref<HTMLElement | null>(null)

/** mazehq.com blob + default gfx params */
const BLOB_PARAMS = {
  scaleFactor: 0.75,
  scaleFactorMobile: 0.55,
  uDepth: 0.3,
  uAmplitude: 0.05,
  uFrequency: 0.5,
  uSize: 8,
  uDepthOut: 10,
  uAmplitudeOut: 4,
  position: { x: 0, y: -0.02, z: 0 },
  rotate: true,
}

let renderer: WebGLRenderer | null = null
let scene: Scene | null = null
let camera: PerspectiveCamera | null = null
let points: Points | null = null
type MazeUniforms = {
  uPixelRatio: { value: number }
  uIsMobile: { value: boolean }
  uScreen: { value: number }
  uAlpha: { value: number }
  uTime: { value: number }
  uScale: { value: number }
  uSize: { value: number }
  uSpeed: { value: number }
  pointTexture: { value: import('three').Texture }
  uDepth: { value: number }
  uAmplitude: { value: number }
  uFrequency: { value: number }
  uRcolor: { value: number }
  uGcolor: { value: number }
  uBcolor: { value: number }
  uRnoise: { value: number }
  uGnoise: { value: number }
  uBnoise: { value: number }
  uStream: { value: number }
  uSelection: { value: number }
  uWidth: { value: number }
  uHeight: { value: number }
  uFunnelStart: { value: number }
  uFunnelEnd: { value: number }
  uFunnelThick: { value: number }
  uFunnelNarrow: { value: number }
  uFunnelStartShift: { value: number }
  uFunnelEndShift: { value: number }
  uFunnelDistortion: { value: number }
}

let material: ShaderMaterial | null = null
let mazeUniforms: MazeUniforms | null = null
let wrapper: Group | null = null
let mouseWrapper: Group | null = null
let frameId = 0
let sceneUnits = 0
let modelScale = 1
let introStart = 0
let disposed = false

const pixelRatio = () => Math.min(window.devicePixelRatio, 2)
const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches

function setViewportUnits(cam: PerspectiveCamera) {
  const fovRad = (cam.fov * Math.PI) / 180
  sceneUnits = 2 * cam.position.z * Math.tan(fovRad / 2)
}

function updateScale() {
  if (!points || !material || !wrapper || !camera) return

  const scaleFactor = isDesktop() ? BLOB_PARAMS.scaleFactor : BLOB_PARAMS.scaleFactorMobile
  const box = new Box3().setFromObject(points)
  const size = new Vector3()
  box.getSize(size)

  modelScale = (sceneUnits / size.y) * scaleFactor
  points.scale.setScalar(modelScale)
  mazeUniforms!.uScale.value = 1 / modelScale

  const position = BLOB_PARAMS.position
  wrapper.position.x = sceneUnits * position.x
  wrapper.position.y = sceneUnits * position.y
  wrapper.position.z = position.z
}

function updateUniforms() {
  if (!mazeUniforms) return
  const pr = pixelRatio()
  mazeUniforms.uPixelRatio.value = pr
  mazeUniforms.uScreen.value = window.innerHeight / (1512 * pr)
  mazeUniforms.uIsMobile.value = !isDesktop()
}

function onMouseMove(event: MouseEvent) {
  if (!mouseWrapper) return
  const offsetX = event.clientX - window.innerWidth / 2
  const offsetY = event.clientY - window.innerHeight / 2
  mouseWrapper.rotation.y = offsetX * -0.0005
  mouseWrapper.rotation.x = offsetY * -0.0003
}

function resize() {
  if (!container.value || !renderer || !camera) return
  const { clientWidth, clientHeight } = container.value
  renderer.setPixelRatio(pixelRatio())
  renderer.setSize(clientWidth, clientHeight)
  camera.aspect = clientWidth / clientHeight
  camera.updateProjectionMatrix()
  setViewportUnits(camera)
  updateScale()
  updateUniforms()
}

function tick(now: number) {
  if (disposed || !mazeUniforms || !wrapper) return

  if (!introStart) introStart = now
  const introT = Math.min(1, (now - introStart) / 1400)
  const eased = 1 - (1 - introT) ** 3

  mazeUniforms.uTime.value += 0.002
  mazeUniforms.uAlpha.value = eased
  mazeUniforms.uDepth.value =
    BLOB_PARAMS.uDepthOut + (BLOB_PARAMS.uDepth - BLOB_PARAMS.uDepthOut) * eased
  mazeUniforms.uAmplitude.value =
    BLOB_PARAMS.uAmplitudeOut + (BLOB_PARAMS.uAmplitude - BLOB_PARAMS.uAmplitudeOut) * eased

  if (BLOB_PARAMS.rotate) {
    wrapper.rotation.y += 0.001
  }

  renderer?.render(scene!, camera!)
  frameId = window.requestAnimationFrame(tick)
}

onMounted(async () => {
  if (!container.value) return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  scene = new Scene()
  camera = new PerspectiveCamera(45, 1, 80, 10000)
  camera.position.set(0, 0, 400)
  camera.lookAt(scene.position)
  setViewportUnits(camera)

  renderer = new WebGLRenderer({ alpha: true, antialias: true })
  renderer.setClearColor(0x000000, 0)
  container.value.appendChild(renderer.domElement)

  const geometry = createMazeBlobGeometry()
  const texture = await new TextureLoader().loadAsync('/maze-particle.png')
  const pr = pixelRatio()

  mazeUniforms = {
    uPixelRatio: { value: pr },
    uIsMobile: { value: !isDesktop() },
    uScreen: { value: window.innerHeight / (1512 * pr) },
    uAlpha: { value: 0 },
    uTime: { value: 0 },
    uScale: { value: 1 },
    uSize: { value: BLOB_PARAMS.uSize },
    uSpeed: { value: 1 },
    pointTexture: { value: texture },
    uDepth: { value: BLOB_PARAMS.uDepthOut },
    uAmplitude: { value: BLOB_PARAMS.uAmplitudeOut },
    uFrequency: { value: BLOB_PARAMS.uFrequency },
    uRcolor: { value: 40 },
    uGcolor: { value: 197 },
    uBcolor: { value: 234 },
    uRnoise: { value: 202 },
    uGnoise: { value: 50 },
    uBnoise: { value: 223 },
    uStream: { value: 0 },
    uSelection: { value: 1 },
    uWidth: { value: 2 },
    uHeight: { value: 0.4 },
    uFunnelStart: { value: -0.18 },
    uFunnelEnd: { value: 0.3 },
    uFunnelThick: { value: 0 },
    uFunnelNarrow: { value: 0 },
    uFunnelStartShift: { value: 0 },
    uFunnelEndShift: { value: 0 },
    uFunnelDistortion: { value: 1 },
  }

  material = new ShaderMaterial({
    uniforms: mazeUniforms,
    vertexShader: MAZE_PARTICLES_VERTEX_SHADER,
    fragmentShader: MAZE_PARTICLES_FRAGMENT_SHADER,
    depthTest: false,
    transparent: true,
    vertexColors: true,
    blending: AdditiveBlending,
  })

  points = new Points(geometry, material)

  mouseWrapper = new Group()
  mouseWrapper.add(points)

  wrapper = new Group()
  wrapper.add(mouseWrapper)
  scene.add(wrapper)

  resize()
  window.addEventListener('resize', resize)
  if (!reduceMotion) {
    window.addEventListener('mousemove', onMouseMove)
    frameId = window.requestAnimationFrame(tick)
  } else {
    mazeUniforms.uAlpha.value = 1
    mazeUniforms.uDepth.value = BLOB_PARAMS.uDepth
    mazeUniforms.uAmplitude.value = BLOB_PARAMS.uAmplitude
    renderer.render(scene, camera)
  }
})

onBeforeUnmount(() => {
  disposed = true
  window.cancelAnimationFrame(frameId)
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', onMouseMove)

  points?.geometry.dispose()
  material?.dispose()
  mazeUniforms?.pointTexture.value.dispose()

  renderer?.dispose()
  renderer?.domElement.remove()
  renderer = null
  scene = null
  camera = null
  points = null
  material = null
  mazeUniforms = null
  wrapper = null
  mouseWrapper = null
})
</script>

<template>
  <div ref="container" class="maze-particle-bg" aria-hidden="true" />
</template>

<style scoped>
.maze-particle-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.maze-particle-bg :deep(canvas) {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
