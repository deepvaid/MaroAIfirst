<script setup lang="ts">
defineProps<{
  accountName: string
}>()

const emit = defineEmits<{
  guide: []
  classic: []
}>()
</script>

<template>
  <section class="welcome-mode" aria-labelledby="jarvis-title">
    <div class="eyebrow">AI-first onboarding</div>
    <h1 id="jarvis-title">Hi, I'm Jarvis for Maropost.</h1>
    <p>
      I can help set up {{ accountName }} with a focused plan, or you can open the classic app.
      I only make changes after you approve them.
    </p>

    <div class="actions">
      <v-btn color="primary" size="large" rounded="pill" class="text-none" @click="emit('guide')">
        Guide me
      </v-btn>
      <v-btn variant="outlined" size="large" rounded="pill" class="text-none" @click="emit('classic')">
        Open classic UI
      </v-btn>
    </div>
  </section>
</template>

<style scoped>
.welcome-mode {
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
}

.eyebrow {
  margin-bottom: 12px;
  color: rgba(146, 215, 255, 0.82);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  color: white;
  font-size: clamp(2rem, 5vw, 4.6rem);
  font-weight: 750;
  letter-spacing: -0.06em;
}

p {
  max-width: 620px;
  margin: 18px auto 0;
  color: rgba(226, 238, 255, 0.74);
  font-size: 1rem;
  line-height: 1.7;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 28px;
  flex-wrap: wrap;
}
</style>
