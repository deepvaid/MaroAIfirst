<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useAccountsStore } from '@/stores/useAccounts'
import { useCopilotStore } from '@/stores/useCopilot'
import AssistantConversationPanel from '../components/AssistantConversationPanel.vue'
import ClarificationCards from '../components/ClarificationCards.vue'
import HandoffBanner from '../components/HandoffBanner.vue'
import OnboardingIntentCards from '../components/OnboardingIntentCards.vue'
import SiriOrb from '../components/SiriOrb.vue'
import TaskPlanPanel from '../components/TaskPlanPanel.vue'
import TrustChips from '../components/TrustChips.vue'
import VoiceInputController from '../components/VoiceInputController.vue'
import WelcomeModeChooser from '../components/WelcomeModeChooser.vue'
import { useAiStateManager } from '../composables/useAiStateManager'
import { useAudioLevel } from '../composables/useAudioLevel'
import { useOnboardingSession } from '../composables/useOnboardingSession'
import { useSpeechSynthesis } from '../composables/useSpeechSynthesis'
import type { AssistantAction } from '../services/assistantChat'

const ONBOARDING_COMPLETE_KEY = 'maropost_onboarding_complete'

const router = useRouter()
const route = useRoute()
const accountsStore = useAccountsStore()
const copilot = useCopilotStore()
const session = useOnboardingSession()
const {
  phase,
  intents,
  activeQuestions,
  answers,
  plan,
  result,
  isBusy,
  error,
  conversation,
} = storeToRefs(session)

const aiState = useAiStateManager()
const audioLevel = useAudioLevel()
const speech = useSpeechSynthesis()
let lastSpokenId = ''

const accountId = computed(() => {
  const value = Array.isArray(route.params.accountId) ? route.params.accountId[0] : route.params.accountId
  return value || accountsStore.activeId
})

const trustSources = computed(() => plan.value?.sources ?? ['Workspace data', 'Help docs'])
const writeCount = computed(() => plan.value?.steps.filter(step => step.mode === 'write').length)
const readinessPercent = 60

const readinessLabel = computed(() => 'Da Vinci can guide the rest.')

const heroInput = computed(() => phase.value === 'welcome' || phase.value === 'intent')
const orbSize = computed(() => (heroInput.value ? 168 : 120))

const stateMarkerLabel = computed(() => {
  if (aiState.state.value === 'error') return 'Attention'
  return aiState.stateLabel.value
})

const stateMarkerDetail = computed(() => {
  if (aiState.state.value === 'listening') return 'Voice active'
  if (aiState.state.value === 'thinking') return 'Building plan'
  if (aiState.state.value === 'speaking') return 'Responding'
  if (aiState.state.value === 'error') return 'Check input'
  return `${readinessPercent}% ready`
})

function markOnboardingComplete() {
  try {
    window.sessionStorage.setItem(ONBOARDING_COMPLETE_KEY, '1')
  } catch {
    // Storage can be disabled; routing still works for the current session.
  }
}

function openClassicUi() {
  markOnboardingComplete()
  copilot.seedPrompt('Continue from Jarvis and tell me the next best launch step.', {
    openPanel: true,
    pinned: true,
    autoSubmit: true,
  })
  router.push({ name: 'Dashboard', params: { accountId: accountId.value } })
}

function openHandoff() {
  if (!result.value) return
  markOnboardingComplete()
  copilot.seedPrompt(`Continue from Jarvis: ${result.value.description}`, {
    openPanel: true,
    pinned: true,
    autoSubmit: true,
  })
  if (result.value.handoff.path) {
    router.push({
      path: result.value.handoff.path,
      query: result.value.handoff.query,
    })
  } else {
    router.push({
      name: result.value.handoff.routeName,
      params: {
        accountId: accountId.value,
        ...(result.value.handoff.params ?? {}),
      },
      query: result.value.handoff.query,
    })
  }
}

function onListeningChange(listening: boolean) {
  if (listening) {
    aiState.setState('listening')
    void audioLevel.start()
  } else {
    audioLevel.stop()
    if (!isBusy.value && phase.value !== 'handoff') aiState.setState('idle')
  }
}

function onVoiceSubmit(text: string) {
  if (!text.trim()) return
  aiState.setState('thinking')
  session.submitFreeTextIntent(text)
}

function handleConversationAction(action: AssistantAction) {
  if (action.id === 'guide') {
    session.startGuidedMode()
    return
  }
  if (action.id === 'classic') {
    openClassicUi()
    return
  }
  session.submitFreeTextIntent(action.prompt)
}

watch(isBusy, (busy) => {
  if (busy) aiState.setState('thinking')
  else if (aiState.state.value === 'thinking') aiState.setState('idle')
})

watch(error, (message) => {
  if (message) aiState.setError(message)
})

watch(conversation, (messages) => {
  const latest = messages[messages.length - 1]
  if (!latest || latest.role !== 'assistant' || latest.id === lastSpokenId || latest.id === 'welcome') return
  lastSpokenId = latest.id
  speech.speak(latest.text, {
    onStart: () => aiState.setState('speaking'),
    onEnd: () => {
      if (!isBusy.value && aiState.state.value === 'speaking') aiState.setState('idle')
    },
  })
}, { deep: true })

onBeforeUnmount(() => {
  speech.cancel()
  audioLevel.stop()
})
</script>

<template>
  <div class="ai-first-layer">
    <div class="aurora" aria-hidden="true">
      <span class="aurora-field aurora-field-1" />
      <span class="aurora-field aurora-field-2" />
      <span class="aurora-field aurora-field-3" />
    </div>

    <header class="assistant-topbar">
      <div class="brand-lockup">
        <span class="brand-orb" />
        <span>Jarvis for Maropost</span>
      </div>
      <TrustChips :sources="trustSources" memory-scope="session" :write-count="writeCount" />
      <v-btn variant="outlined" rounded="pill" class="text-none" @click="openClassicUi">
        Open classic UI
      </v-btn>
    </header>

    <main class="assistant-main">
      <div class="hero">
        <div class="hero-orb-wrap">
          <SiriOrb
            class="hero-orb"
            :size="orbSize"
            :state="aiState.state.value"
            :audio-level="audioLevel.level.value"
          />
          <p
            class="jarvis-state-marker"
            :class="`jarvis-state-marker--${aiState.state.value}`"
            aria-live="polite"
          >
            <span class="jarvis-state-marker__value">{{ stateMarkerLabel }}</span>
            <span class="jarvis-state-marker__detail">{{ stateMarkerDetail }}</span>
          </p>
        </div>

        <div class="assistant-phase" aria-live="polite">
          <template v-if="phase === 'welcome'">
            <WelcomeModeChooser
              :account-name="accountsStore.activeAccount?.name ?? 'this workspace'"
              :readiness-label="readinessLabel"
            />
            <VoiceInputController
              class="hero-input"
              :disabled="isBusy"
              @submit="onVoiceSubmit"
              @listening-change="onListeningChange"
            />
            <div class="starter-chips">
              <button
                v-for="intent in intents"
                :key="intent.id"
                type="button"
                class="starter-chip"
                @click="session.selectIntent(intent.id)"
              >
                <v-icon size="18" class="starter-chip-icon">{{ intent.icon }}</v-icon>
                <span class="starter-chip-label">{{ intent.title }}</span>
                <v-icon size="15" class="starter-chip-chevron">chevron-right</v-icon>
              </button>
            </div>
          </template>

          <template v-else-if="phase === 'intent'">
            <h1 class="phase-title">What do you want to work on?</h1>
            <VoiceInputController
              class="hero-input"
              :disabled="isBusy"
              @submit="onVoiceSubmit"
              @listening-change="onListeningChange"
            />
            <OnboardingIntentCards :intents="intents" @select="session.selectIntent" />
          </template>

          <ClarificationCards
            v-else-if="phase === 'clarify'"
            :questions="activeQuestions"
            :answers="answers"
            :busy="isBusy"
            @answer="session.answerQuestion"
            @continue="session.buildPlan"
          />

          <TaskPlanPanel
            v-else-if="phase === 'plan' && plan"
            :plan="plan"
            :busy="isBusy"
            @approve="session.approvePlan"
            @edit="session.editPlan"
            @classic="openClassicUi"
          />

          <section v-else-if="phase === 'execute'" class="thinking-card">
            <v-progress-circular indeterminate color="primary" size="28" />
            <div>
              <strong>Running the approved prototype tools...</strong>
              <p>Writes are simulated and remain reviewable.</p>
            </div>
          </section>

          <HandoffBanner
            v-else-if="phase === 'handoff' && result"
            :result="result"
            @open="openHandoff"
          />
        </div>
      </div>
    </main>

    <footer class="assistant-footer">
      <VoiceInputController
        v-if="!heroInput"
        :disabled="isBusy"
        @submit="onVoiceSubmit"
        @listening-change="onListeningChange"
      />
      <AssistantConversationPanel
        :messages="conversation"
        :state-label="aiState.stateLabel.value"
        :error="error || aiState.errorMessage.value"
        @select-action="handleConversationAction"
      />
    </footer>
  </div>
</template>

<style scoped>
.ai-first-layer {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 24px clamp(20px, 5vw, 48px) 32px;
  background:
    radial-gradient(
      72% 52% at 50% 28%,
      rgba(186, 224, 248, 0.28) 0%,
      rgba(186, 224, 248, 0) 58%
    ),
    linear-gradient(180deg, #fff6f4 0%, #fbf4f1 42%, #faf3f0 100%);
  color: var(--ink);
}

.aurora {
  position: fixed;
  inset: -18vh -8vw;
  z-index: 0;
  pointer-events: none;
  filter: blur(88px) saturate(108%);
  opacity: 0.42;
}

.aurora-field {
  position: absolute;
  border-radius: 999px;
  opacity: 0.38;
  will-change: transform;
}

.aurora-field-1 {
  top: 8%;
  left: 18%;
  width: 34vw;
  height: 34vw;
  background: radial-gradient(circle at 30% 30%, rgba(124, 198, 247, 0.55), rgba(124, 198, 247, 0) 72%);
  animation: aurora-drift-1 28s ease-in-out infinite;
}

.aurora-field-2 {
  top: 10%;
  right: 16%;
  width: 30vw;
  height: 30vw;
  background: radial-gradient(circle at 60% 40%, rgba(122, 140, 245, 0.32), rgba(122, 140, 245, 0) 72%);
  animation: aurora-drift-2 34s ease-in-out infinite;
}

.aurora-field-3 {
  top: 18%;
  left: 34%;
  width: 36vw;
  height: 36vw;
  background: radial-gradient(circle at 50% 50%, rgba(41, 212, 196, 0.22), rgba(41, 212, 196, 0) 72%);
  animation: aurora-drift-3 38s ease-in-out infinite;
}

@keyframes aurora-drift-1 {
  0%,
  100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(2vw, 1.5vh) scale(1.04); }
}

@keyframes aurora-drift-2 {
  0%,
  100% { transform: translate(0, 0) scale(1.02); }
  50% { transform: translate(-2vw, 1.5vh) scale(0.98); }
}

@keyframes aurora-drift-3 {
  0%,
  100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(1.5vw, -1vh) scale(1.03); }
}

@media (prefers-reduced-motion: reduce) {
  .aurora-field {
    animation: none !important;
  }
}

.assistant-topbar {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;
}

.brand-lockup {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--ink);
  font-weight: 700;
}

.brand-orb {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: rgb(var(--v-theme-primary));
  box-shadow: 0 0 0 4px var(--accent-soft);
}

.assistant-main {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px 0 32px;
}

.hero {
  display: grid;
  justify-items: center;
  gap: 36px;
  width: 100%;
  max-width: 820px;
}

.hero-orb-wrap {
  display: grid;
  justify-items: center;
  gap: 14px;
  margin-top: 8px;
}

.hero-orb {
  margin-bottom: 0;
}

.jarvis-state-marker {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin: 0;
  color: var(--muted);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.jarvis-state-marker__value {
  min-width: 4.5ch;
  color: #0e1b2a;
  font-variant-numeric: tabular-nums;
}

.jarvis-state-marker__detail {
  color: rgba(14, 27, 42, 0.45);
  font-weight: 500;
  letter-spacing: 0.08em;
}

.jarvis-state-marker--listening .jarvis-state-marker__value,
.jarvis-state-marker--thinking .jarvis-state-marker__value,
.jarvis-state-marker--speaking .jarvis-state-marker__value {
  color: rgb(var(--v-theme-primary));
}

.assistant-phase {
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 20px;
}

.hero-input {
  width: 100%;
}

.phase-title {
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  text-align: center;
}

.starter-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 700px;
  gap: 10px;
  margin-top: 2px;
}

.starter-chip {
  display: inline-flex;
  align-items: center;
  height: 44px;
  gap: 8px;
  padding: 0 16px;
  border: 1px solid rgba(255, 255, 255, 0.92);
  border-radius: var(--r-pill);
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 1px 2px rgba(58, 42, 36, 0.05);
  backdrop-filter: blur(8px);
  color: var(--ink);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.12s ease, transform 0.12s ease, box-shadow 0.12s ease;
}

.starter-chip:hover,
.starter-chip:focus-visible {
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 4px 14px -8px rgba(58, 42, 36, 0.18);
  transform: translateY(-1px);
  outline: none;
}

.starter-chip-icon {
  color: rgb(var(--v-theme-primary));
}

.starter-chip-chevron {
  color: var(--muted);
}

.assistant-footer {
  position: relative;
  z-index: 4;
  display: grid;
  gap: 12px;
  margin-top: 16px;
}

.thinking-card {
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 680px;
  margin: 0 auto;
  padding: 18px 20px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: var(--r-section);
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 1px 3px rgba(58, 42, 36, 0.06);
  backdrop-filter: blur(10px);
}

.thinking-card strong {
  color: var(--ink);
}

.thinking-card p {
  margin: 2px 0 0;
  color: var(--muted);
}

@media (max-width: 900px) {
  .assistant-topbar {
    grid-template-columns: 1fr;
    justify-items: stretch;
  }

  .assistant-topbar :deep(.trust-chips) {
    justify-content: flex-start;
  }

  .ai-first-layer {
    padding: 18px;
  }

  .starter-chips {
    justify-content: flex-start;
  }
}
</style>
