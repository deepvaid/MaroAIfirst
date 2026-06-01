import {
  BufferAttribute,
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  Vector3,
} from 'three'

const PALETTE = [
  { hex: '#EFF0F0', amount: 0.05 },
  { hex: '#02E8FF', amount: 0.3 },
  { hex: '#42A4FE', amount: 0.3 },
  { hex: '#8958FF', amount: 0.1 },
  { hex: '#D409FE', amount: 0.1 },
] as const

function getPointOnSphere(target: Vector3, radius: number): Vector3 {
  target.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1)
  if (target.length() > 1) return getPointOnSphere(target, radius)
  return target.normalize().multiplyScalar(radius)
}

function buildPalette() {
  const entries = PALETTE.map(({ hex, amount }) => {
    const color = new Color(hex)
    const hsl = { h: 0, s: 0, l: 0 }
    color.getHSL(hsl)
    return { hex, hsl, color, amount }
  })
  const total = entries.reduce((sum, entry) => sum + entry.amount, 0)
  let cursor = 0
  return entries.map((entry) => {
    const start = cursor
    cursor += entry.amount
    return { ...entry, start, end: cursor, total }
  })
}

const palette = buildPalette()

/** Sphere point cloud matching mazehq.com blob/sphere generator (16384 points). */
export function createMazeBlobGeometry(): BufferGeometry {
  const count = 16384
  const radius = 1
  const positions = new Float32Array(count * 3)
  const point = new Vector3()

  for (let i = 0; i < count * 3; i += 3) {
    getPointOnSphere(point, radius)
    positions[i] = point.x
    positions[i + 1] = point.y
    positions[i + 2] = point.z
  }

  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(positions, 3))
  addMazeParticleParams(geometry)
  geometry.center()
  return geometry
}

/** Attribute setup from mazehq.com jo.addParams. */
export function addMazeParticleParams(geometry: BufferGeometry): BufferGeometry {
  const position = geometry.getAttribute('position')
  const count = position.count

  const colors: number[] = []
  const indices: number[] = []
  const alphas: number[] = []
  const streamFreq: number[] = []
  const funnelNarrow: number[] = []
  const funnelThickness: number[] = []
  const funnelStartShift: number[] = []
  const funnelEndShift: number[] = []
  const selections: number[] = []
  const moves: number[] = []
  const speeds: number[] = []
  const randomness: number[] = []

  const lightRange = 0.01
  const lightSpread = 0.01
  const randomnessScale = { x: 0, y: 1, z: 0.5 }

  for (let i = 0; i < count; i++) {
    indices.push(i)

    const roll = Math.random()
    const isNotExploitable = roll > 0.3
    const isUrgent = !isNotExploitable && roll <= 0.15
    const isPatch = !isNotExploitable && !isUrgent && roll <= 0.4
    const category = isNotExploitable
      ? 'notExploitable'
      : isUrgent
        ? 'urgentFix'
        : isPatch
          ? 'patchInSLA'
          : 'ignore'

    streamFreq.push(
      { urgentFix: 0.1, patchInSLA: -0.2, ignore: -1.4, notExploitable: 0.5 }[category] ?? 0,
    )
    funnelThickness.push(
      { urgentFix: 0.1, patchInSLA: 0.14, ignore: 0.18, notExploitable: 0.55 }[category] ?? 0,
    )
    funnelNarrow.push(
      { urgentFix: 0.03, patchInSLA: 0.04, ignore: 0.05, notExploitable: 0.18 }[category] ?? 0,
    )
    funnelStartShift.push(
      { urgentFix: 0.42, patchInSLA: 0.28, ignore: 0.1, notExploitable: -0.25 }[category] ?? 0,
    )
    funnelEndShift.push(
      { urgentFix: 0.29, patchInSLA: -0.06, ignore: -0.29, notExploitable: -0.4 }[category] ?? 0,
    )

    alphas.push(0.2 + Math.random() * 0.8)

    const totalWeight = palette[palette.length - 1]?.end ?? 1
    const pick = Math.random() * totalWeight
    const entry = palette.find((item) => pick >= item.start && pick < item.end) ?? palette[2]!
    const nextColor = new Color().setHSL(
      entry.hsl.h,
      entry.hsl.s,
      Math.max(0, Math.min(1, entry.hsl.l - lightRange + Math.random() * (lightRange + lightSpread))),
    )
    colors.push(nextColor.r, nextColor.g, nextColor.b)

    moves.push(
      (Math.random() < 0.5 ? 1 : -1) * 30,
      (Math.random() < 0.5 ? 1 : -1) * 30,
      (Math.random() < 0.5 ? 1 : -1) * 30,
    )
    speeds.push(Math.random(), Math.random(), Math.random())
    randomness.push(
      (Math.random() - 0.5) * randomnessScale.x * 2,
      (Math.random() - 0.5) * randomnessScale.y * 2,
      (Math.random() - 0.5) * randomnessScale.z * 2,
    )
    selections.push(Math.random())
  }

  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3))
  geometry.setAttribute('aIndex', new Float32BufferAttribute(indices, 1))
  geometry.setAttribute('aAlpha', new Float32BufferAttribute(alphas, 1))
  geometry.setAttribute('aStreamFreq', new Float32BufferAttribute(streamFreq, 1))
  geometry.setAttribute('aFunnelNarrow', new Float32BufferAttribute(funnelNarrow, 1))
  geometry.setAttribute('aFunnelThickness', new Float32BufferAttribute(funnelThickness, 1))
  geometry.setAttribute('aFunnelStartShift', new Float32BufferAttribute(funnelStartShift, 1))
  geometry.setAttribute('aFunnelEndShift', new Float32BufferAttribute(funnelEndShift, 1))
  geometry.setAttribute('aSelection', new Float32BufferAttribute(selections, 1))
  geometry.setAttribute('aMove', new Float32BufferAttribute(moves, 3))
  geometry.setAttribute('aSpeed', new Float32BufferAttribute(speeds, 3))
  geometry.setAttribute('aRandomness', new Float32BufferAttribute(randomness, 3))

  return geometry
}
