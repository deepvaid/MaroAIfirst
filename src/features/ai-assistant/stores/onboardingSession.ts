import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useAccountsStore } from '@/stores/useAccounts'
import { buildOnboardingPlan, executeOnboardingPlan } from '../services/agent/agentOrchestrator.client'
import { ONBOARDING_INTENTS, getOnboardingIntent } from '../services/agent/onboardingIntents'
import type {
  OnboardingAnswer,
  OnboardingIntentId,
  OnboardingPhase,
  OnboardingPlan,
  ToolResult,
} from '../services/agent/agentOrchestrator.types'
import type { AssistantAction } from '../services/assistantChat'

export interface ConversationEntry {
  id: string
  role: 'user' | 'assistant'
  text: string
  actions?: AssistantAction[]
}

export const useOnboardingSessionStore = defineStore('jarvis-onboarding-session', () => {
  const accountsStore = useAccountsStore()
  const phase = ref<OnboardingPhase>('welcome')
  const selectedIntentId = ref<OnboardingIntentId | null>(null)
  const answers = ref<OnboardingAnswer[]>([])
  const plan = ref<OnboardingPlan | null>(null)
  const result = ref<ToolResult | null>(null)
  const isBusy = ref(false)
  const error = ref('')
  const conversation = ref<ConversationEntry[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: "Hi, I'm Jarvis for Maropost. I can set things up with you, or you can open the classic app.",
      actions: [
        { id: 'guide', label: 'Guide me', kind: 'read', prompt: 'Guide me through setup' },
        { id: 'classic', label: 'Open classic UI', kind: 'read', prompt: 'Open classic UI' },
      ],
    },
  ])

  const intents = computed(() => ONBOARDING_INTENTS)
  const selectedIntent = computed(() => getOnboardingIntent(selectedIntentId.value ?? undefined) ?? null)
  const activeQuestions = computed(() => selectedIntent.value?.questions ?? [])

  function addMessage(role: ConversationEntry['role'], text: string) {
    conversation.value.push({ id: `${Date.now()}-${conversation.value.length}`, role, text })
  }

  function startGuidedMode() {
    phase.value = 'intent'
    addMessage('assistant', "What do you want to do first? Choose a task or tell me in your own words.")
  }

  function selectIntent(intentId: OnboardingIntentId) {
    const intent = getOnboardingIntent(intentId)
    if (!intent) return
    selectedIntentId.value = intentId
    answers.value = []
    plan.value = null
    result.value = null
    phase.value = 'clarify'
    addMessage('user', intent.prompt)
    addMessage('assistant', `Good choice. I need a few details before I propose a plan for ${intent.title.toLowerCase()}.`)
  }

  function inferIntentFromText(text: string): OnboardingIntentId {
    const lower = text.toLowerCase()
    if (/import|contact|csv|list/.test(lower)) return 'contacts'
    if (/journey|automation|welcome|abandoned/.test(lower)) return 'journey'
    if (/performance|sales|revenue|analytics|dashboard|attention/.test(lower)) return 'performance'
    if (/connect|shopify|source|integration|store/.test(lower)) return 'datasource'
    return 'campaign'
  }

  function submitFreeTextIntent(text: string) {
    addMessage('user', text)
    const intentId = inferIntentFromText(text)
    const intent = getOnboardingIntent(intentId)
    selectedIntentId.value = intentId
    answers.value = []
    phase.value = 'clarify'
    addMessage('assistant', `I mapped that to ${intent?.title ?? 'an onboarding task'}. Answer these details and I will show the plan before anything changes.`)
  }

  function answerQuestion(questionId: string, answer: string) {
    const existing = answers.value.find(item => item.questionId === questionId)
    if (existing) existing.answer = answer
    else answers.value.push({ questionId, answer })
  }

  async function buildPlan() {
    if (!selectedIntentId.value) return
    isBusy.value = true
    error.value = ''
    try {
      plan.value = await buildOnboardingPlan({
        accountId: accountsStore.activeId,
        accountName: accountsStore.activeAccount?.name ?? 'this workspace',
        intentId: selectedIntentId.value,
        answers: answers.value,
      })
      phase.value = 'plan'
      addMessage('assistant', plan.value.summary)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unable to build an onboarding plan.'
    } finally {
      isBusy.value = false
    }
  }

  async function approvePlan() {
    if (!plan.value) return
    isBusy.value = true
    error.value = ''
    phase.value = 'execute'
    try {
      result.value = await executeOnboardingPlan(accountsStore.activeId, plan.value)
      phase.value = 'handoff'
      addMessage('assistant', result.value.description)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unable to execute the approved plan.'
      phase.value = 'plan'
    } finally {
      isBusy.value = false
    }
  }

  function editPlan() {
    phase.value = 'clarify'
  }

  function reset() {
    phase.value = 'welcome'
    selectedIntentId.value = null
    answers.value = []
    plan.value = null
    result.value = null
    error.value = ''
  }

  return {
    phase,
    selectedIntentId,
    selectedIntent,
    activeQuestions,
    answers,
    plan,
    result,
    isBusy,
    error,
    conversation,
    intents,
    startGuidedMode,
    selectIntent,
    submitFreeTextIntent,
    answerQuestion,
    buildPlan,
    approvePlan,
    editPlan,
    reset,
  }
})
