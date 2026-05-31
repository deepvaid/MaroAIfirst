<script setup lang="ts">
import { computed } from 'vue'
import ActionPreviewCard from './ActionPreviewCard.vue'
import ClassicUiBreadcrumb from './ClassicUiBreadcrumb.vue'
import TrustChips from './TrustChips.vue'
import type { OnboardingPlan } from '../services/agent/agentOrchestrator.types'

const props = defineProps<{
  plan: OnboardingPlan
  busy?: boolean
}>()

const emit = defineEmits<{
  approve: []
  edit: []
  classic: []
}>()

const writeCount = computed(() => props.plan.steps.filter(step => step.mode === 'write').length)
</script>

<template>
  <section class="plan-panel" aria-label="Jarvis onboarding plan">
    <div class="plan-header">
      <div>
        <div class="eyebrow">Approval required</div>
        <h2>Here's the plan I'll follow</h2>
      </div>
      <TrustChips :sources="plan.sources" :memory-scope="plan.memoryScope" :write-count="writeCount" />
    </div>

    <p class="summary">{{ plan.summary }}</p>

    <div class="plan-body">
      <div class="steps">
        <div v-for="(step, index) in plan.steps" :key="step.label" class="step-row">
          <div class="step-index">{{ index + 1 }}</div>
          <div>
            <div class="step-label">{{ step.label }}</div>
            <div class="step-tool">{{ step.tool }}</div>
          </div>
          <v-chip
            size="small"
            :color="step.mode === 'write' ? 'warning' : 'success'"
            variant="tonal"
            class="ml-auto"
          >
            {{ step.mode === 'write' ? 'Will make changes' : 'Read only' }}
          </v-chip>
        </div>
      </div>

      <div class="preview-stack">
        <ActionPreviewCard :preview="plan.preview" />
        <ClassicUiBreadcrumb :label="plan.classicPath" />
      </div>
    </div>

    <div class="plan-actions">
      <v-btn variant="text" rounded="pill" class="text-none" @click="emit('classic')">
        Open classic UI
      </v-btn>
      <v-spacer />
      <v-btn variant="outlined" rounded="pill" class="text-none" @click="emit('edit')">
        Edit plan
      </v-btn>
      <v-btn color="primary" rounded="pill" class="text-none" :loading="busy" @click="emit('approve')">
        Review and continue
      </v-btn>
    </div>
  </section>
</template>

<style scoped>
.plan-panel {
  max-width: 1080px;
  margin: 0 auto;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.92);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 1px 4px rgba(58, 42, 36, 0.06);
  backdrop-filter: blur(10px);
  color: var(--ink);
}

.plan-header,
.plan-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.plan-header {
  justify-content: space-between;
}

.eyebrow {
  color: var(--accent-ink);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h2 {
  margin: 4px 0 0;
  color: var(--ink);
  font-size: 1.55rem;
}

.summary {
  max-width: 760px;
  margin: 16px 0 22px;
  color: var(--muted);
  line-height: 1.6;
}

.plan-body {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.7fr);
  gap: 18px;
}

.steps,
.preview-stack {
  display: grid;
  gap: 12px;
}

.step-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.72);
}

.step-index {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-ink);
  font-weight: 800;
}

.step-label {
  font-weight: 700;
}

.step-tool {
  margin-top: 2px;
  color: var(--muted);
  font-size: 0.8rem;
}

.plan-actions {
  margin-top: 22px;
}

@media (max-width: 900px) {
  .plan-body {
    grid-template-columns: 1fr;
  }

  .plan-header,
  .plan-actions {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
