<script setup lang="ts">
import type { OnboardingPlan } from '../services/agent/agentOrchestrator.types'

const props = defineProps<{
  preview: OnboardingPlan['preview']
}>()

const iconByKind: Record<OnboardingPlan['preview']['kind'], string> = {
  campaign: 'mdi-email-edit-outline',
  contacts: 'mdi-account-arrow-up-outline',
  journey: 'mdi-source-branch',
  performance: 'mdi-chart-box-outline',
  datasource: 'mdi-database-cog-outline',
}
</script>

<template>
  <v-card rounded="xl" class="preview-card">
    <v-card-text class="d-flex align-start ga-3">
      <v-avatar color="primary" variant="tonal" size="38">
        <v-icon>{{ iconByKind[props.preview.kind] }}</v-icon>
      </v-avatar>
      <div>
        <div class="preview-kicker">Action preview</div>
        <div class="preview-title">{{ preview.title }}</div>
        <div class="preview-description">{{ preview.description }}</div>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.preview-card {
  border: 1px solid var(--hairline);
  background: var(--surface-0) !important;
  color: var(--ink);
}

.preview-kicker {
  color: var(--accent-ink);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.preview-title {
  margin-top: 4px;
  font-weight: 750;
}

.preview-description {
  margin-top: 4px;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.45;
}
</style>
