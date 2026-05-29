<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="classic-breadcrumb">
    <v-icon size="18">mdi-application-brackets-outline</v-icon>
    <span>This lives in {{ label }}</span>
  </div>
</template>

<style scoped>
.classic-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--hairline);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface-1);
  font-size: 0.86rem;
}
</style>
