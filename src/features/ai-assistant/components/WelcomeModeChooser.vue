<script setup lang="ts">
defineProps<{
  accountName: string
  readinessLabel?: string
}>()
</script>

<template>
  <section class="welcome-mode" aria-labelledby="jarvis-title">
    <h1 id="jarvis-title">What do you want to work on?</h1>
    <p v-if="readinessLabel" class="readiness">{{ readinessLabel }}</p>
  </section>
</template>

<style scoped>
.welcome-mode {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  margin: 0;
  color: #d6d8d8;
  font-size: clamp(1.75rem, 3.6vw, 2.625rem);
  font-weight: 700;
  letter-spacing: -0.055rem;
  line-height: 1.08;
}

.readiness {
  max-width: 520px;
  margin: 10px auto 0;
  color: rgba(214, 216, 216, 0.72);
  font-size: 0.9375rem;
  line-height: 1.5;
  font-weight: 400;
}
</style>
