<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useAccountsStore } from '@/stores/useAccounts'
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

const ONBOARDING_COMPLETE_KEY = 'maropost_onboarding_complete'

const router = useRouter()
const route = useRoute()
const accountsStore = useAccountsStore()
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

function markOnboardingComplete() {
  try {
    window.sessionStorage.setItem(ONBOARDING_COMPLETE_KEY, '1')
  } catch {
    // Storage can be disabled; routing still works for the current session.
  }
}

function openClassicUi() {
  markOnboardingComplete()
  router.push({ name: 'Dashboard', params: { accountId: accountId.value } })
}

function openHandoff() {
  if (!result.value) return
  markOnboardingComplete()
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
      <JarvisOrb :state="aiState.state.value" :audio-level="audioLevel.level.value" />

      <div class="assistant-phase" aria-live="polite">
        <WelcomeModeChooser
          v-if="phase === 'welcome'"
          :account-name="accountsStore.activeAccount?.name ?? 'this workspace'"
          @guide="session.startGuidedMode"
          @classic="openClassicUi"
        />

        <OnboardingIntentCards
          v-else-if="phase === 'intent'"
          :intents="intents"
          @select="session.selectIntent"
        />

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
    </main>

    <footer class="assistant-footer">
      <VoiceInputController :disabled="isBusy" @submit="onVoiceSubmit" @listening-change="onListeningChange" />
      <AssistantConversationPanel
        :messages="conversation"
        :state-label="aiState.stateLabel.value"
        :error="error || aiState.errorMessage.value"
      />
    </footer>
  </div>
</template>

<style scoped>
.ai-first-layer {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: 24px;
  background:
    radial-gradient(circle at 50% 32%, rgba(35, 123, 186, 0.26), transparent 34%),
    radial-gradient(circle at 50% 72%, rgba(18, 42, 86, 0.34), transparent 38%),
    linear-gradient(135deg, #050608 0%, #080d17 45%, #030407 100%);
  color: white;
}

.background-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(124, 208, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(124, 208, 255, 0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(circle at 50% 40%, black, transparent 75%);
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
  color: rgba(225, 238, 255, 0.86);
  font-weight: 750;
}

.brand-orb {
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: rgb(var(--v-theme-primary));
  box-shadow: 0 0 28px rgba(72, 189, 255, 0.9);
}

.assistant-main {
  position: relative;
  z-index: 1;
  display: grid;
  align-content: center;
  min-height: calc(100vh - 270px);
  padding: 10px 0 28px;
}

.assistant-phase {
  position: relative;
  z-index: 3;
  margin-top: -28px;
}

.assistant-footer {
  position: relative;
  z-index: 4;
  display: grid;
  gap: 12px;
}

.thinking-card {
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 680px;
  margin: 0 auto;
  padding: 18px;
  border: 1px solid rgba(160, 204, 255, 0.16);
  border-radius: 24px;
  background: rgba(6, 12, 24, 0.78);
}

.thinking-card p {
  margin: 2px 0 0;
  color: rgba(225, 238, 255, 0.64);
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
