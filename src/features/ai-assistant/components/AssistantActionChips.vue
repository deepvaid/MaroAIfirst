<script setup lang="ts">
import type { AssistantAction } from '../services/assistantChat'

defineProps<{
  actions: AssistantAction[]
}>()

const emit = defineEmits<{
  select: [action: AssistantAction]
}>()
</script>

<template>
  <div v-if="actions.length" class="assistant-action-chips" aria-label="Suggested assistant actions">
    <v-chip
      v-for="action in actions"
      :key="action.id"
      :color="action.kind === 'write' ? 'warning' : 'primary'"
      :prepend-icon="action.kind === 'write' ? 'wand-sparkles' : 'search'"
      size="small"
      variant="tonal"
      class="assistant-action-chip"
      @click="emit('select', action)"
    >
      {{ action.label }}
    </v-chip>
  </div>
</template>

<style scoped>
.assistant-action-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.assistant-action-chip {
  cursor: pointer;
}
</style>
