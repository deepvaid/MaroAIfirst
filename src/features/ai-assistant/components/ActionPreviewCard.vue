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
  border: 1px solid rgba(160, 204, 255, 0.16);
  background: rgba(255, 255, 255, 0.055) !important;
  color: white;
}

.preview-kicker {
  color: rgba(146, 215, 255, 0.78);
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
  color: rgba(225, 238, 255, 0.68);
  font-size: 0.9rem;
  line-height: 1.45;
}
</style>
