<script setup lang="ts">
import type { ToolResult } from '../services/agent/agentOrchestrator.types'

defineProps<{
  result: ToolResult
  busy?: boolean
}>()

const emit = defineEmits<{
  open: []
}>()
</script>

<template>
  <section class="handoff-banner" aria-label="Jarvis handoff result">
    <v-avatar color="success" variant="tonal" size="44">
      <v-icon>mdi-check-decagram-outline</v-icon>
    </v-avatar>
    <div class="handoff-copy">
      <div class="eyebrow">{{ result.changedLabel }}</div>
      <h2>{{ result.title }}</h2>
      <p>{{ result.description }}</p>
    </div>
    <v-btn color="primary" rounded="pill" class="text-none" :loading="busy" @click="emit('open')">
      Open {{ result.handoff.label }}
    </v-btn>
  </section>
</template>

<style scoped>
.handoff-banner {
  display: flex;
  align-items: center;
  gap: 18px;
  max-width: 980px;
  margin: 0 auto;
  padding: 22px;
  border: 1px solid rgba(122, 255, 190, 0.2);
  border-radius: 28px;
  background: rgba(7, 20, 20, 0.84);
  color: white;
}

.handoff-copy {
  flex: 1;
}

.eyebrow {
  color: rgba(122, 255, 190, 0.82);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h2 {
  margin: 4px 0;
  font-size: 1.35rem;
}

p {
  margin: 0;
  color: rgba(225, 238, 255, 0.7);
}

@media (max-width: 760px) {
  .handoff-banner {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
