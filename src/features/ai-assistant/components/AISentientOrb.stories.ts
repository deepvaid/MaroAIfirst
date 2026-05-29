import type { Meta, StoryObj } from '@storybook/vue3'
import AISentientOrb from './AISentientOrb.vue'

const PALE_BLUE_BG =
  'min-height: 420px; display: flex; align-items: center; justify-content: center; padding: 48px;' +
  ' background: radial-gradient(120% 120% at 50% 30%, #ffffff 0%, #eef4ff 45%, #dbe7ff 100%);'

const meta = {
  title: 'AI Assistant/AISentientOrb',
  component: AISentientOrb,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['idle', 'listening', 'thinking', 'speaking'],
      description: 'Drives the orb animation. Transitions are smoothly interpolated.',
    },
    audioLevel: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
      description: 'Audio amplitude (0–1). Pulses the halo/core during listening & speaking.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Overview
\`AISentientOrb\` is a lightweight, transparent Three.js orb for the AI assistant surface — a glowing blue core inside a glass-like Fresnel shell, with an inner particle flow, thin orbit rings, gentle sparkles, and a soft outer halo. It is built to blend into a pale-blue background.

### Layers
- **Glass shell** — Fresnel-rim \`ShaderMaterial\` (translucent body + bright white edge).
- **Blue core** — additive \`ShaderMaterial\` with a slow flowing energy band.
- **Particle core** — 360–620 additive points in coherent differential rotation.
- **Orbit rings** — three thin \`LineLoop\`s tumbling on different axes.
- **Halo** — additive radial-gradient sprite.

### States
- **idle** — slow breathing pulse + gentle drift.
- **listening** — scales up, faster particles, halo/rings pulse with \`audioLevel\`.
- **thinking** — particles swirl, rings spin faster, sparkles brighten.
- **speaking** — amplitude pulse from \`audioLevel\`, rings ripple outward, core flickers softly.

### Notes
- Canvas is transparent and \`pointer-events: none\`.
- Single \`requestAnimationFrame\` loop, paused when the tab is hidden, and respects \`prefers-reduced-motion\`.
        `,
      },
    },
  },
} satisfies Meta<typeof AISentientOrb>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    state: 'idle',
    audioLevel: 0.5,
  },
  render: (args) => ({
    components: { AISentientOrb },
    setup() {
      return { args }
    },
    template: `<div style="${PALE_BLUE_BG}"><AISentientOrb v-bind="args" /></div>`,
  }),
}

export const AllStates: Story = {
  render: () => ({
    components: { AISentientOrb },
    template: `
      <div style="${PALE_BLUE_BG} gap: 8px; flex-wrap: wrap;">
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
          <AISentientOrb state="idle" :audioLevel="0" />
          <span style="font: 600 13px/1 Inter, sans-serif; color:#475569;">idle</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
          <AISentientOrb state="listening" :audioLevel="0.6" />
          <span style="font: 600 13px/1 Inter, sans-serif; color:#475569;">listening</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
          <AISentientOrb state="thinking" :audioLevel="0" />
          <span style="font: 600 13px/1 Inter, sans-serif; color:#475569;">thinking</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
          <AISentientOrb state="speaking" :audioLevel="0.7" />
          <span style="font: 600 13px/1 Inter, sans-serif; color:#475569;">speaking</span>
        </div>
      </div>
    `,
  }),
}
