<script setup lang="ts">
import type { OnboardingIntent, OnboardingIntentId } from '../services/agent/agentOrchestrator.types'

defineProps<{
  intents: OnboardingIntent[]
}>()

const emit = defineEmits<{
  select: [intentId: OnboardingIntentId]
}>()
</script>

<template>
  <section class="intent-grid" aria-label="Starter tasks">
    <button
      v-for="intent in intents"
      :key="intent.id"
      type="button"
      class="intent-card"
      @click="emit('select', intent.id)"
    >
      <v-icon size="26" class="intent-icon">{{ intent.icon }}</v-icon>
      <span class="intent-title">{{ intent.title }}</span>
      <span class="intent-description">{{ intent.description }}</span>
    </button>
  </section>
</template>

<style scoped>
.intent-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  gap: 12px;
  max-width: 1080px;
  margin: 0 auto;
}

.intent-card {
  min-height: 162px;
  padding: 18px;
  border: 1px solid rgba(160, 204, 255, 0.18);
  border-radius: 24px;
  background: rgba(8, 14, 26, 0.72);
  color: white;
  text-align: left;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
  transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
}

.intent-card:hover,
.intent-card:focus-visible {
  border-color: rgba(90, 192, 255, 0.7);
  background: rgba(14, 25, 44, 0.88);
  transform: translateY(-3px);
  outline: none;
}

.intent-icon {
  color: rgba(109, 210, 255, 0.94);
}

.intent-title,
.intent-description {
  display: block;
}

.intent-title {
  margin-top: 18px;
  font-weight: 750;
  line-height: 1.25;
}

.intent-description {
  margin-top: 8px;
  color: rgba(225, 238, 255, 0.64);
  font-size: 0.84rem;
  line-height: 1.45;
}

@media (max-width: 1180px) {
  .intent-grid {
    grid-template-columns: repeat(3, minmax(180px, 1fr));
  }
}

@media (max-width: 720px) {
  .intent-grid {
    grid-template-columns: 1fr;
  }
}
</style>
