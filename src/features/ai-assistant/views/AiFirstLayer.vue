<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useAccountsStore } from '@/stores/useAccounts'
import { useCopilotStore } from '@/stores/useCopilot'
import AssistantConversationPanel from '../components/AssistantConversationPanel.vue'
import ClarificationCards from '../components/ClarificationCards.vue'
import HandoffBanner from '../components/HandoffBanner.vue'
import JarvisOrb from '../components/JarvisOrb.vue'
import OnboardingIntentCards from '../components/OnboardingIntentCards.vue'
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
const readinessLabel = computed(() => `${accountsStore.activeAccount?.name ?? 'This workspace'} is about 60% ready: analytics are visible, and Da Vinci can guide the remaining launch tasks.`)

const heroInput = computed(() => phase.value === 'welcome' || phase.value === 'intent')
const orbSize = computed(() => (heroInput.value ? 124 : 92))

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
    <div class="background-grid" />

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
        <JarvisOrb
          class="hero-orb"
          :size="orbSize"
          :state="aiState.state.value"
          :audio-level="audioLevel.level.value"
        />

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
  padding: 24px clamp(20px, 5vw, 48px) 32px;
  background: var(--surface-0);
  color: var(--ink);
}

.background-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(26, 24, 20, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 24, 20, 0.035) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(circle at 50% 32%, black, transparent 70%);
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
  padding: 16px 0 24px;
}

.hero {
  display: grid;
  justify-items: center;
  gap: 26px;
  width: 100%;
  max-width: 880px;
}

.hero-orb {
  margin-bottom: 0;
}

.assistant-phase {
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 24px;
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
  gap: 10px;
}

.starter-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  border: 1px solid var(--hairline);
  border-radius: var(--r-pill);
  background: var(--surface-1);
  color: var(--ink);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
}

.starter-chip:hover,
.starter-chip:focus-visible {
  border-color: color-mix(in oklch, rgb(var(--v-theme-primary)) 50%, var(--hairline));
  box-shadow: 0 0 0 3px var(--accent-soft);
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
  border: 1px solid var(--hairline);
  border-radius: var(--r-section);
  background: var(--surface-1);
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
  }

  .ai-first-layer {
    padding: 18px;
  }
}
</style>
