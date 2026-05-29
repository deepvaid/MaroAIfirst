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
  border: 1px solid rgba(160, 204, 255, 0.16);
  border-radius: 999px;
  color: rgba(225, 238, 255, 0.74);
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.86rem;
}
</style>
