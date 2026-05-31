<script setup lang="ts">
import { computed } from 'vue'
import type { AiVisualState } from '../composables/useAiStateManager'

const props = withDefaults(defineProps<{
  state?: AiVisualState
  audioLevel?: number
  size?: number | string
}>(), {
  state: 'idle',
  audioLevel: 0,
  size: 168,
})

const clampedAudioLevel = computed(() => Math.min(1, Math.max(0, props.audioLevel)))

const orbStyle = computed(() => {
  const size = typeof props.size === 'number' ? `${props.size}px` : props.size
  return {
    '--siri-orb-size': size,
    '--siri-audio-level': clampedAudioLevel.value,
  }
})
</script>

<template>
  <div
    class="siri-orb-stage"
    :class="`siri-orb-stage--${state}`"
    :style="orbStyle"
    aria-hidden="true"
  >
    <div class="siri-orb-float">
      <div class="siri-orb">
        <span class="rim" />
        <span class="blob blob-1" />
        <span class="blob blob-2" />
        <span class="blob blob-3" />
        <span class="blob blob-4" />
        <span class="core" />
        <span class="gloss" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.siri-orb-stage {
  --orb-cyan: #1ab7ea;
  --orb-blue: #4f8df9;
  --orb-teal: #29d4c4;
  --orb-violet: #7a8cf5;
  --orb-energy: 0;

  position: relative;
  display: grid;
  width: var(--siri-orb-size);
  height: var(--siri-orb-size);
  place-items: center;
  perspective: 900px;
  pointer-events: none;
}

.siri-orb-stage::before {
  position: absolute;
  inset: -22%;
  border-radius: 999px;
  background: radial-gradient(
    circle at 50% 58%,
    rgba(79, 141, 249, calc(0.28 + var(--orb-energy) * 0.12)) 0%,
    rgba(41, 212, 196, calc(0.14 + var(--orb-energy) * 0.1)) 42%,
    rgba(26, 183, 234, 0) 72%
  );
  content: "";
  filter: blur(18px);
  opacity: calc(0.62 + var(--siri-audio-level) * 0.2);
  animation: siri-halo 6.8s ease-in-out infinite;
}

.siri-orb-stage::after {
  position: absolute;
  top: 72%;
  left: 50%;
  width: 58%;
  height: 14%;
  border-radius: 999px;
  background: radial-gradient(ellipse at center, rgba(58, 42, 36, 0.14) 0%, rgba(58, 42, 36, 0) 72%);
  content: "";
  filter: blur(10px);
  transform: translateX(-50%);
}

.siri-orb-stage--listening,
.siri-orb-stage--speaking {
  --orb-energy: var(--siri-audio-level);
}

.siri-orb-stage--thinking {
  --orb-energy: 0.38;
}

.siri-orb-stage--error {
  --orb-violet: #e57266;
  --orb-energy: 0.28;
}

.siri-orb-float {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: siri-orb-float 9.5s ease-in-out infinite;
}

.siri-orb {
  position: relative;
  width: 76%;
  height: 76%;
  overflow: hidden;
  border-radius: 999px;
  background:
    radial-gradient(circle at 42% 32%, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0) 38%),
    radial-gradient(circle at 50% 52%, #edf7ff 0%, #d8ebf8 52%, #c5e0f2 100%);
  box-shadow:
    0 22px 48px -18px rgba(58, 42, 36, 0.22),
    0 8px 20px -10px rgba(31, 86, 140, 0.28),
    inset 0 0 28px rgba(255, 255, 255, 0.62),
    inset 0 -12px 28px rgba(26, 120, 180, 0.22);
  animation: siri-orb-breathe 6.2s ease-in-out infinite;
  transform: scale(calc(1 + var(--siri-audio-level) * 0.035));
}

.rim {
  position: absolute;
  inset: 0;
  z-index: 3;
  border-radius: 999px;
  box-shadow:
    inset 0 1px 2px rgba(255, 255, 255, 0.95),
    inset 0 0 0 1px rgba(255, 255, 255, 0.42),
    inset 0 -18px 24px rgba(26, 120, 180, 0.12);
  pointer-events: none;
}

.blob,
.core,
.gloss {
  position: absolute;
  pointer-events: none;
}

.blob {
  border-radius: 999px;
  filter: blur(9px);
  opacity: 0.92;
  will-change: transform;
}

.blob-1 {
  top: -22%;
  left: -28%;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle at 50% 50%, var(--orb-blue) 0%, rgba(79, 141, 249, 0) 62%);
  animation: siri-swirl-1 11s linear infinite;
}

.blob-2 {
  top: -16%;
  right: -34%;
  width: 115%;
  height: 115%;
  background: radial-gradient(circle at 50% 50%, var(--orb-teal) 0%, rgba(41, 212, 196, 0) 60%);
  animation: siri-swirl-2 14s linear infinite;
}

.blob-3 {
  bottom: -34%;
  left: -18%;
  width: 130%;
  height: 130%;
  background: radial-gradient(circle at 50% 50%, var(--orb-cyan) 0%, rgba(26, 183, 234, 0) 64%);
  animation: siri-swirl-3 12.5s linear infinite;
}

.blob-4 {
  right: -22%;
  bottom: -20%;
  width: 95%;
  height: 95%;
  background: radial-gradient(circle at 50% 50%, var(--orb-violet) 0%, rgba(122, 140, 245, 0) 60%);
  animation: siri-swirl-4 16s linear infinite;
}

.core {
  top: 48%;
  left: 50%;
  z-index: 2;
  width: 32%;
  height: 32%;
  border-radius: 999px;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.96) 0%,
    rgba(255, 255, 255, 0.5) 42%,
    rgba(255, 255, 255, 0) 74%
  );
  animation: siri-core 4.8s ease-in-out infinite;
  transform: translate(-50%, -50%);
}

.gloss {
  inset: 0;
  z-index: 2;
  border-radius: 999px;
  background:
    radial-gradient(38% 28% at 34% 24%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 58%),
    radial-gradient(55% 55% at 50% 118%, rgba(58, 42, 36, 0.1), rgba(58, 42, 36, 0) 62%);
}

.siri-orb-stage--thinking .blob-1,
.siri-orb-stage--thinking .blob-3 {
  animation-duration: 7.2s;
}

.siri-orb-stage--thinking .blob-2,
.siri-orb-stage--thinking .blob-4 {
  animation-duration: 9s;
}

.siri-orb-stage--listening .siri-orb-float,
.siri-orb-stage--speaking .siri-orb-float {
  animation-duration: 7.2s;
}

.siri-orb-stage--listening .core,
.siri-orb-stage--speaking .core {
  animation-duration: 3.2s;
}

.siri-orb-stage--speaking .core {
  animation-duration: 2.6s;
}

@keyframes siri-orb-float {
  0%,
  100% {
    transform: translateY(0) rotateX(0deg) rotateY(0deg);
  }

  35% {
    transform: translateY(-6px) rotateX(4deg) rotateY(-5deg);
  }

  70% {
    transform: translateY(4px) rotateX(-3deg) rotateY(4deg);
  }
}

@keyframes siri-halo {
  0%,
  100% {
    opacity: 0.58;
    transform: scale(0.94);
  }

  50% {
    opacity: 0.82;
    transform: scale(1.04);
  }
}

@keyframes siri-orb-breathe {
  0%,
  100% {
    transform: scale(calc(0.99 + var(--siri-audio-level) * 0.035));
  }

  50% {
    transform: scale(calc(1.015 + var(--siri-audio-level) * 0.05));
  }
}

@keyframes siri-swirl-1 {
  0% { transform: rotate(0deg) translate(7%, 3%); }
  100% { transform: rotate(360deg) translate(7%, 3%); }
}

@keyframes siri-swirl-2 {
  0% { transform: rotate(0deg) translate(-5%, 5%); }
  100% { transform: rotate(-360deg) translate(-5%, 5%); }
}

@keyframes siri-swirl-3 {
  0% { transform: rotate(0deg) translate(4%, -6%); }
  100% { transform: rotate(360deg) translate(4%, -6%); }
}

@keyframes siri-swirl-4 {
  0% { transform: rotate(0deg) translate(-6%, -4%); }
  100% { transform: rotate(-360deg) translate(-6%, -4%); }
}

@keyframes siri-core {
  0%,
  100% {
    opacity: calc(0.82 + var(--siri-audio-level) * 0.1);
    transform: translate(-50%, -50%) scale(0.84);
  }

  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(calc(1.12 + var(--siri-audio-level) * 0.14));
  }
}

@media (prefers-reduced-motion: reduce) {
  .siri-orb-stage::before,
  .siri-orb-float,
  .siri-orb,
  .blob,
  .core {
    animation: none !important;
  }
}
</style>
