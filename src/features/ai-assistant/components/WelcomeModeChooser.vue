<script setup lang="ts">
defineProps<{
  accountName: string
  readinessLabel?: string
}>()
</script>

<template>
  <section class="welcome-mode" aria-labelledby="jarvis-title">
    <div class="eyebrow">Jarvis for {{ accountName }}</div>
    <h1 id="jarvis-title">What do you want to work on?</h1>
    <p v-if="readinessLabel" class="readiness">{{ readinessLabel }}</p>
  </section>
</template>

<style scoped>
.welcome-mode {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.eyebrow {
  margin-bottom: 10px;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  color: var(--ink);
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.08;
}

.readiness {
  max-width: 600px;
  margin: 16px auto 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;
}
</style>
