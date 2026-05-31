<script setup lang="ts">
import { computed } from 'vue'
import type { ClarificationQuestion, OnboardingAnswer } from '../services/agent/agentOrchestrator.types'

const props = defineProps<{
  questions: ClarificationQuestion[]
  answers: OnboardingAnswer[]
  busy?: boolean
}>()

const emit = defineEmits<{
  answer: [questionId: string, answer: string]
  continue: []
}>()

const answeredCount = computed(() => props.questions.filter(question =>
  props.answers.some(answer => answer.questionId === question.id && answer.answer),
).length)

const canContinue = computed(() => answeredCount.value === props.questions.length && props.questions.length > 0)

function currentAnswer(questionId: string) {
  return props.answers.find(answer => answer.questionId === questionId)?.answer
}
</script>

<template>
  <section class="clarify-panel" aria-label="Clarifying questions">
    <div class="panel-heading">
      <div>
        <div class="eyebrow">Step {{ answeredCount }} of {{ questions.length }}</div>
        <h2>Answer a few details before I plan.</h2>
      </div>
      <v-btn
        color="primary"
        rounded="pill"
        class="text-none"
        :disabled="!canContinue || busy"
        :loading="busy"
        @click="emit('continue')"
      >
        Show plan
      </v-btn>
    </div>

    <div class="question-grid">
      <v-card v-for="question in questions" :key="question.id" rounded="xl" class="question-card">
        <v-card-text>
          <div class="question-label">{{ question.label }}</div>
          <div class="option-list">
            <v-chip
              v-for="option in question.options"
              :key="option"
              :color="currentAnswer(question.id) === option ? 'primary' : undefined"
              :variant="currentAnswer(question.id) === option ? 'flat' : 'outlined'"
              class="option-chip"
              @click="emit('answer', question.id, option)"
            >
              {{ option }}
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </section>
</template>

<style scoped>
.clarify-panel {
  max-width: 980px;
  margin: 0 auto;
}

.panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 16px;
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
  font-size: 1.45rem;
}

.question-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.question-card {
  border: 1px solid rgba(255, 255, 255, 0.92) !important;
  background: rgba(255, 255, 255, 0.84) !important;
  box-shadow: 0 1px 3px rgba(58, 42, 36, 0.06);
  color: var(--ink);
}

.question-label {
  margin-bottom: 14px;
  font-weight: 700;
}

.option-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.option-chip {
  cursor: pointer;
}

@media (max-width: 900px) {
  .question-grid {
    grid-template-columns: 1fr;
  }
}
</style>
