<script setup lang="ts">
defineProps<{
  sources?: string[]
  memoryScope?: 'session' | 'off'
  writeCount?: number
}>()
</script>

<template>
  <div class="trust-chips" aria-label="AI trust and source controls">
    <v-chip size="small" variant="tonal" color="info" prepend-icon="mdi-database-eye-outline">
      Using: {{ (sources?.length ? sources : ['Workspace data', 'Help docs']).join(' + ') }}
    </v-chip>
    <v-chip size="small" variant="tonal" color="secondary" prepend-icon="mdi-memory">
      Memory: {{ memoryScope === 'off' ? 'Off' : 'This session only' }}
    </v-chip>
    <v-chip
      v-if="typeof writeCount === 'number'"
      size="small"
      :color="writeCount > 0 ? 'warning' : 'success'"
      variant="tonal"
      prepend-icon="mdi-shield-check-outline"
    >
      {{ writeCount > 0 ? `${writeCount} approval-gated write${writeCount === 1 ? '' : 's'}` : 'Read only' }}
    </v-chip>
  </div>
</template>

<style scoped>
.trust-chips {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
