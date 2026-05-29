<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import DvWidgetDraftCard from './copilot/DvWidgetDraftCard.vue'
import DvHistoryDrawer from './copilot/DvHistoryDrawer.vue'
import DvToastStack from './copilot/DvToastStack.vue'
import DvInsightCard from './copilot/DvInsightCard.vue'
import AssistantActionChips from '@/features/ai-assistant/components/AssistantActionChips.vue'
import { useAccountsStore } from '@/stores/useAccounts'
import { useCopilotStore } from '@/stores/useCopilot'
import { useDashboardsStore } from '@/stores/useDashboards'
import { getMetricDescriptor } from '@/stores/dashboards/metricCatalog'
import type { DashboardWidgetDraft } from '@/stores/dashboards/types'
import { useDaVinciHistory } from '@/composables/useDaVinciHistory'
import { useDaVinciToasts } from '@/composables/useDaVinciToasts'
import { useAssistantContext } from '@/features/ai-assistant/composables/useAssistantContext'
import { useSpeechRecognition } from '@/features/ai-assistant/composables/useSpeechRecognition'
import { sendAssistantMessage, type AssistantAction } from '@/features/ai-assistant/services/assistantChat'

interface DraftSetProps {
  drafts: DashboardWidgetDraft[]
  rationale: string
  conversationId: string
}

interface ChatComponent {
  type: 'widgetDraftSet' | 'insight'
  props: DraftSetProps | { headline: string; description: string; severity?: string }
}

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  text: string
  actions?: AssistantAction[]
  componentData?: ChatComponent[]
}

interface MpDaVinciBotProps {
  initialChatMode?: boolean
  initialMessages?: ChatMessage[]
  subtitle?: string
  headerless?: boolean
}

const props = withDefaults(defineProps<MpDaVinciBotProps>(), {
  initialChatMode: false,
  initialMessages: () => [],
  subtitle: 'Intelligent AI assistant',
  headerless: false,
})

const emit = defineEmits<{
  close: []
  expand: []
}>()

const route = useRoute()
const router = useRouter()
const accountsStore = useAccountsStore()
const copilot = useCopilotStore()
const dashboardsStore = useDashboardsStore()
const { context: assistantContext } = useAssistantContext()
const speechRecognition = useSpeechRecognition()
const { addItem, incrementAdded, clearAll } = useDaVinciHistory()
const { pushToast } = useDaVinciToasts()

const inputText = ref('')
const chatMode = ref(props.initialChatMode || props.initialMessages.length > 0)
const isTyping = ref(false)
const generatingStatus = ref('')
const messages = ref<ChatMessage[]>([...props.initialMessages])
const bodyEl = ref<HTMLElement | null>(null)
const historyOpen = ref(false)
const currentConversationId = ref<string | null>(null)

const routeAccountId = computed(() => {
  const accountId = Array.isArray(route.params.accountId) ? route.params.accountId[0] : route.params.accountId
  return accountId
})

const routeDashboardId = computed(() => {
  const dashboardId = Array.isArray(route.params.dashboardId) ? route.params.dashboardId[0] : route.params.dashboardId
  return dashboardId
})

const isDashboardRoute = computed(() => route.name === 'Dashboard' || route.name === 'DashboardDetail')

const activeAccount = computed(() => {
  if (!routeAccountId.value) return accountsStore.activeAccount
  return accountsStore.accounts.find((account) => account.id === routeAccountId.value) ?? accountsStore.activeAccount
})

const activeDashboard = computed(() => {
  if (!isDashboardRoute.value || !routeAccountId.value) return null
  return dashboardsStore.getDashboardById(routeAccountId.value, routeDashboardId.value) ?? null
})

const targetAccountId = computed(() => routeAccountId.value ?? activeAccount.value?.id ?? null)

const targetDashboard = computed(() => {
  if (activeDashboard.value) return activeDashboard.value
  if (!targetAccountId.value) return null
  return dashboardsStore.getDefaultDashboard(targetAccountId.value) ?? null
})

const headerStatus = computed(() => {
  if (isTyping.value) return generatingStatus.value || 'Checking for your changes…'
  return `${assistantContext.value.pageLabel} assistant`
})

const suggestionPills = computed(() => {
  return assistantContext.value.nextSteps.slice(0, 3).map(step => ({
    text: step.label,
    icon: step.kind === 'write' ? 'wand-sparkles' : 'search',
  }))
})

const landingSuggestions = computed(() => {
  return assistantContext.value.suggestedPrompts.slice(0, 4)
})

function makeId(prefix = 'm') {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
}

function scrollToBottom() {
  nextTick(() => {
    if (bodyEl.value) {
      bodyEl.value.scrollTo({ top: bodyEl.value.scrollHeight, behavior: 'smooth' })
    }
  })
}

function buildRationale(prompt: string, base: DashboardWidgetDraft): string {
  const metric = getMetricDescriptor(base.metricId)
  const metricLabel = metric?.label ?? 'these metrics'
  const sourceLabel = metric?.dataSource ?? base.dataSource
  void prompt
  return `You asked about ${metricLabel.toLowerCase()} · last 30 days. I pulled from ${capitalize(sourceLabel)} and picked the visualisation that best surfaces the headline numbers. Refine it to change the chart type or rename before adding.`
}

function buildIntro(count: number): string {
  const dashName = targetDashboard.value?.name ?? 'this dashboard'
  const noun = count === 1 ? 'widget' : 'widgets'
  return `Here&rsquo;s <strong>${count} ${noun}</strong> I drafted for <strong>${dashName}</strong>. Click <em>Add widget</em> to review and confirm.`
}


function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

async function processQuery(text: string) {
  if (!text || isTyping.value) return
  const conversationId = currentConversationId.value ?? makeId('c')
  const isFirstPrompt = !currentConversationId.value
  currentConversationId.value = conversationId

  messages.value.push({ id: makeId('u'), role: 'user', text })
  chatMode.value = true
  inputText.value = ''
  isTyping.value = true
  generatingStatus.value = 'Working on it…'
  scrollToBottom()

  let drafts: DashboardWidgetDraft[] | null = null
  let rationale = ''

  if (targetAccountId.value && targetDashboard.value) {
    const base = dashboardsStore.buildAiWidgetDraft(targetAccountId.value, targetDashboard.value.id, text)
    if (base) {
      drafts = [base]
      rationale = buildRationale(text, base)
      const metricLabel = getMetricDescriptor(base.metricId)?.label ?? base.title ?? 'data'
      generatingStatus.value = `Pulling ${metricLabel.toLowerCase()} from the last 30 days`
    }
  }

  await new Promise(resolve => window.setTimeout(resolve, drafts ? 900 : 200))
  isTyping.value = false

  if (drafts && drafts.length > 0) {
    messages.value.push({
      id: makeId('a'),
      role: 'assistant',
      text: buildIntro(drafts.length),
      componentData: [
        {
          type: 'widgetDraftSet',
          props: {
            drafts,
            rationale,
            conversationId,
          },
        },
      ],
    })

    if (isFirstPrompt) {
      addItem({
        title: text,
        draftedCount: drafts.length,
      })
    }
    scrollToBottom()
    return
  }

  generatingStatus.value = 'Checking workspace context…'
  isTyping.value = true

  try {
    const result = await sendAssistantMessage({
      prompt: text,
      history: messages.value.map(message => ({ role: message.role, text: message.text })),
      context: assistantContext.value,
    })
    messages.value.push({
      id: makeId('a'),
      role: 'assistant',
      text: result.text,
      actions: result.actions,
    })
  } catch {
    messages.value.push({
      id: makeId('a'),
      role: 'assistant',
      text: "I couldn't complete that request yet, but I can still guide the next reviewable step from this page.",
      actions: assistantContext.value.nextSteps.slice(0, 3),
      componentData: [
        {
          type: 'insight',
          props: {
            headline: 'Try a reviewable action',
            description: 'Use one of the suggested actions below and Da Vinci will keep changes behind an approval step.',
            severity: 'info',
          },
        },
      ],
    })
  } finally {
    isTyping.value = false
    generatingStatus.value = ''
    scrollToBottom()
  }
}

function sendQuery() {
  void processQuery(inputText.value.trim())
}

function sendSuggestion(text: string) {
  void processQuery(text)
}

function routeForAction(action: AssistantAction) {
  if (!action.routeName || !targetAccountId.value) return null
  return {
    name: action.routeName,
    params: { accountId: targetAccountId.value },
    query: action.kind === 'write' ? { jarvisHandoff: '1', focus: action.id } : undefined,
  }
}

function handleAssistantAction(action: AssistantAction) {
  if (action.kind === 'write') {
    const approved = window.confirm(`Da Vinci will prepare "${action.label}" for review before anything is finalized. Continue?`)
    if (!approved) return
  }

  const target = routeForAction(action)
  if (target) {
    router.push(target)
    return
  }

  void processQuery(action.prompt)
}

function toggleVoiceInput() {
  if (speechRecognition.isListening.value) {
    speechRecognition.stop()
    return
  }
  speechRecognition.start()
}

function newChat() {
  chatMode.value = false
  messages.value = []
  inputText.value = ''
  generatingStatus.value = ''
  currentConversationId.value = null
  historyOpen.value = false
  pushToast({ title: 'New chat started' })
}

function onWidgetSaved(payload: { title: string; dashboardName: string }, msg: ChatMessage) {
  const comp = msg.componentData?.[0]
  if (comp && comp.type === 'widgetDraftSet') {
    incrementAdded((comp.props as DraftSetProps).conversationId)
  }
  const dashId = targetDashboard.value?.id
  const accountId = targetAccountId.value
  pushToast({
    title: `Widget added to ${payload.dashboardName}`,
    sub: payload.title,
    action: dashId && accountId ? 'View' : undefined,
    onAction: () => {
      if (dashId && accountId) {
        router.push({ name: 'DashboardDetail', params: { accountId, dashboardId: dashId } })
      }
    },
  })
}

function onWidgetRefined() {
  pushToast({ title: 'Draft updated', sub: 'Da Vinci re-rendered with your changes' })
}

function isDraftSetMessage(msg: ChatMessage): msg is ChatMessage & { componentData: [{ type: 'widgetDraftSet'; props: DraftSetProps }] } {
  const comp = msg.componentData?.[0]
  return !!comp && comp.type === 'widgetDraftSet'
}

function isInsightMessage(msg: ChatMessage): boolean {
  const comp = msg.componentData?.[0]
  return !!comp && comp.type === 'insight'
}

function getDraftSetProps(msg: ChatMessage): DraftSetProps | null {
  const comp = msg.componentData?.[0]
  if (!comp || comp.type !== 'widgetDraftSet') return null
  return comp.props as DraftSetProps
}

function getInsightProps(msg: ChatMessage): { headline: string; description: string; severity?: string } | null {
  const comp = msg.componentData?.[0]
  if (!comp || comp.type !== 'insight') return null
  return comp.props as { headline: string; description: string; severity?: string }
}

function handleOpenInTab() {
  const snapshot = {
    conversationId: currentConversationId.value ?? makeId('c'),
    messages: messages.value,
    accountId: targetAccountId.value ?? accountsStore.activeId ?? '',
    dashboardId: targetDashboard.value?.id ?? null,
    snapshotAt: Date.now(),
  }
  try {
    window.localStorage.setItem(
      'davinci-active-conversation-v1',
      JSON.stringify(snapshot),
    )
  } catch {
    // localStorage quota / private mode — navigate anyway, full-screen view starts fresh
  }
  emit('close')
  router.push({
    name: 'DaVinciCopilot',
    params: {
      accountId: snapshot.accountId,
      conversationId: snapshot.conversationId,
    },
  })
}

function handleClearAll() {
  const confirmed = window.confirm('Delete all Da Vinci conversations? This cannot be undone.')
  if (!confirmed) return
  clearAll()
  pushToast({ title: 'All conversations deleted' })
}

function onComposerKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    sendQuery()
  }
}

watch(
  () => copilot.seededPrompt,
  (prompt) => {
    if (!prompt) return
    const shouldSubmit = copilot.seedAutoSubmit
    inputText.value = prompt
    chatMode.value = true
    copilot.clearSeedPrompt()
    if (shouldSubmit) void processQuery(prompt)
  },
  { immediate: true },
)

watch(
  speechRecognition.finalTranscript,
  (transcript) => {
    if (!transcript) return
    inputText.value = transcript
    chatMode.value = true
  },
)
</script>

<template>
  <div class="dv-panel">
    <!-- ═══ HEADER ═══ -->
    <header v-if="!headerless" class="dv-panel__header">
      <div class="dv-panel__avatar">
        <v-icon class="dv-on-accent-icon" size="22">sparkles</v-icon>
      </div>
      <div class="dv-panel__title">
        <div class="dv-panel__title-name">Da Vinci</div>
        <div class="dv-panel__title-sub">{{ headerStatus }}</div>
      </div>
      <v-btn icon size="34" variant="text" aria-label="Start a new chat" class="dv-panel__icon-btn" @click="newChat">
        <v-icon size="18">square-pen</v-icon>
        <v-tooltip activator="parent" location="bottom">New chat</v-tooltip>
      </v-btn>
      <v-btn
        icon
        size="34"
        variant="text"
        aria-label="Conversation history"
        class="dv-panel__icon-btn"
        @click="historyOpen = !historyOpen"
      >
        <v-icon size="18">history</v-icon>
        <v-tooltip activator="parent" location="bottom">Conversation history</v-tooltip>
      </v-btn>
      <v-menu offset="6" location="bottom end">
        <template #activator="{ props: menuProps }">
          <v-btn icon size="34" variant="text" aria-label="More" class="dv-panel__icon-btn" v-bind="menuProps">
            <v-icon size="18">more-vertical</v-icon>
          </v-btn>
        </template>
        <v-list density="compact" class="dv-panel__menu">
          <v-list-item @click="handleOpenInTab">
            <template #prepend><v-icon size="18">maximize-2</v-icon></template>
            <v-list-item-title>Open full screen</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item class="dv-panel__menu-danger" @click="handleClearAll">
            <template #prepend><v-icon size="18" color="error">trash-2</v-icon></template>
            <v-list-item-title>Delete all conversations</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon size="34" variant="text" aria-label="Close" class="dv-panel__icon-btn" @click="emit('close')">
        <v-icon size="18">x</v-icon>
      </v-btn>
    </header>

    <DvHistoryDrawer
      :open="historyOpen"
      :active-id="currentConversationId ?? undefined"
      @close="historyOpen = false"
      @select="(_id) => (historyOpen = false)"
      @new-chat="newChat"
    />

    <!-- ═══ BODY ═══ -->
    <div ref="bodyEl" class="dv-panel__body">
      <!-- Landing state -->
      <div v-if="!chatMode" class="dv-landing">
        <div class="dv-landing__avatar">
          <v-icon size="28" class="dv-on-accent-icon">sparkles</v-icon>
        </div>
        <h2 class="dv-landing__title">What should Da Vinci do on {{ assistantContext.pageLabel }}?</h2>
        <p class="dv-landing__sub">
          {{ assistantContext.readinessLabel }} I can read {{ assistantContext.sources.join(', ').toLowerCase() }} and keep changes reviewable.
        </p>
        <div class="dv-landing__suggestions">
          <button
            v-for="text in landingSuggestions"
            :key="text"
            type="button"
            class="dv-landing__pill"
            @click="sendSuggestion(text)"
          >
            <v-icon size="14" color="primary">sparkles</v-icon>
            {{ text }}
          </button>
        </div>
      </div>

      <!-- Conversation -->
      <template v-for="msg in messages" :key="msg.id">
        <div v-if="msg.role === 'user'" class="dv-msg-user">
          <div class="dv-msg-user__bubble">{{ msg.text }}</div>
        </div>
        <div v-else class="dv-msg-bot">
          <div class="dv-msg-bot__avatar">
            <v-icon class="dv-on-accent-icon" size="14">sparkles</v-icon>
          </div>
          <div class="dv-msg-bot__body">
            <div v-if="msg.text" class="dv-msg-bot__intro" v-html="msg.text"></div>
            <AssistantActionChips
              v-if="msg.actions?.length"
              :actions="msg.actions"
              @select="handleAssistantAction"
            />

            <template v-if="isDraftSetMessage(msg)">
              <div v-if="getDraftSetProps(msg)?.rationale" class="dv-msg-bot__rationale">
                <span class="dv-eyebrow">Why these</span>
                {{ getDraftSetProps(msg)?.rationale }}
              </div>

              <div class="dv-drafts">
                <div class="dv-drafts__meta">
                  <span class="dv-drafts__count">
                    <v-icon size="14" color="primary">sparkles</v-icon>
                    Draft
                  </span>
                </div>

                <DvWidgetDraftCard
                  v-for="(draft, idx) in getDraftSetProps(msg)?.drafts ?? []"
                  :key="`${msg.id}-${idx}`"
                  :account-id="targetAccountId ?? ''"
                  :dashboard-id="targetDashboard?.id ?? ''"
                  :draft="draft"
                  :filters="targetDashboard?.filters"
                  @saved="onWidgetSaved($event, msg)"
                  @refined="onWidgetRefined"
                />
              </div>
            </template>

            <DvInsightCard
              v-if="isInsightMessage(msg)"
              :headline="getInsightProps(msg)?.headline ?? ''"
              :description="getInsightProps(msg)?.description ?? ''"
              :severity="(getInsightProps(msg)?.severity as 'info' | 'success' | 'warning' | 'error' | undefined)"
            />
          </div>
        </div>
      </template>

      <!-- Generating skeleton -->
      <div v-if="isTyping" class="dv-msg-bot">
        <div class="dv-msg-bot__avatar">
          <v-icon class="dv-on-accent-icon" size="14">sparkles</v-icon>
        </div>
        <div class="dv-msg-bot__body">
          <div class="dv-status">
            <span class="dv-status__dot" aria-hidden="true"></span>
            {{ generatingStatus }}
          </div>
          <div class="dv-skeleton">
            <div class="dv-skeleton__top">
              <span class="dv-eyebrow">Drafting · last 30 days</span>
            </div>
            <div class="dv-skeleton__bars">
              <div class="dv-skeleton__bar"></div>
              <div class="dv-skeleton__bar dv-skeleton__bar--mid"></div>
              <div class="dv-skeleton__bar dv-skeleton__bar--narrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══ COMPOSER ═══ -->
    <footer class="dv-panel__composer">
      <div class="dv-next-steps">
        <div class="dv-next-steps__label">Next steps</div>
        <button
          v-for="step in assistantContext.nextSteps.slice(0, 3)"
          :key="step.id"
          type="button"
          class="dv-next-steps__item"
          @click="handleAssistantAction(step)"
        >
          {{ step.label }}
        </button>
      </div>
      <div v-if="chatMode" class="dv-composer__pills">
        <button
          v-for="pill in suggestionPills"
          :key="pill.text"
          type="button"
          class="dv-composer__pill"
          @click="sendSuggestion(pill.text)"
        >
          <v-icon size="13">{{ pill.icon }}</v-icon>
          {{ pill.text }}
        </button>
      </div>
      <div class="dv-composer__field">
        <v-btn icon size="32" variant="text" aria-label="Attach">
          <v-icon size="16">paperclip</v-icon>
        </v-btn>
        <input
          v-model="inputText"
          type="text"
          placeholder="Ask Da Vinci…"
          class="dv-composer__input"
          @keydown="onComposerKeydown"
        />
        <button
          type="button"
          class="dv-composer__voice"
          :class="{ 'dv-composer__voice--active': speechRecognition.isListening.value }"
          :aria-label="speechRecognition.isListening.value ? 'Stop voice input' : 'Voice input'"
          @click="toggleVoiceInput"
        >
          <v-icon size="16">{{ speechRecognition.isListening.value ? 'mic-off' : 'mic' }}</v-icon>
        </button>
        <button
          type="button"
          class="dv-composer__send"
          aria-label="Send"
          :disabled="!inputText.trim() || isTyping"
          @click="sendQuery"
        >
          <v-icon size="16" class="dv-on-accent-icon">arrow-up</v-icon>
        </button>
      </div>
    </footer>

    <DvToastStack />
  </div>
</template>

<style scoped lang="scss">
.dv-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: rgb(var(--v-theme-surface));
  min-height: 0;
  overflow: hidden;
}

/* ─── Header ───────────────────────────────────────────────────────── */
.dv-panel__header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  height: 64px;
  background: var(--dv-header-grad);
  border-bottom: 1px solid rgb(var(--v-theme-outline-variant));
  flex-shrink: 0;
}

.dv-panel__avatar {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background: var(--dv-grad);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.dv-on-accent-icon :deep(.v-icon),
.dv-on-accent-icon :deep(svg) {
  color: var(--dv-on-accent) !important;
}

.dv-panel__title {
  flex: 1;
  min-width: 0;
}

.dv-panel__title-name {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2;
  color: rgb(var(--v-theme-on-surface));
}

.dv-panel__title-sub {
  font-size: 12.5px;
  font-weight: 400;
  color: rgb(var(--v-theme-on-surface-variant));
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dv-panel__icon-btn {
  flex-shrink: 0;
}

.dv-panel__icon-btn:focus-visible {
  outline: 2px solid color-mix(in oklch, var(--dv-accent) 40%, transparent);
  outline-offset: 2px;
}

.dv-panel__menu {
  min-width: 220px;
  border-radius: 12px !important;
  background: rgb(var(--v-theme-surface)) !important;
  border: 1px solid rgb(var(--v-theme-outline-variant));
}

.dv-panel__menu-danger :deep(.v-list-item-title) {
  color: rgb(var(--v-theme-error));
}

/* ─── Body ─────────────────────────────────────────────────────────── */
.dv-panel__body {
  flex: 1;
  overflow-y: auto;
  padding: 20px 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 0;
}

.dv-panel__body::-webkit-scrollbar {
  width: 6px;
}

.dv-panel__body::-webkit-scrollbar-thumb {
  background: rgb(var(--v-theme-outline-variant));
  border-radius: 9999px;
}

/* Landing */
.dv-landing {
  text-align: center;
  padding: 24px 8px 8px;
}

.dv-landing__avatar {
  width: 56px;
  height: 56px;
  border-radius: 9999px;
  background: var(--dv-grad);
  display: grid;
  place-items: center;
  margin: 0 auto 16px;
}

.dv-landing__title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.3px;
  color: rgb(var(--v-theme-on-surface));
  margin: 0 0 8px;
}

.dv-landing__sub {
  font-size: var(--mp-typography-fontSize-body);
  line-height: 1.45;
  color: var(--dv-text-secondary);
  max-width: 340px;
  margin: 0 auto 20px;
}

.dv-landing__suggestions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;
  text-align: left;
}

.dv-landing__pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 36px;
  padding: 10px 14px;
  border-radius: var(--mp-borderRadius-lg);
  border: 1px solid var(--dv-border);
  background: rgb(var(--v-theme-surface));
  font-size: var(--mp-typography-fontSize-sm);
  font-weight: 500;
  color: rgb(var(--v-theme-on-surface));
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease;
  text-align: left;
}

.dv-landing__pill:hover {
  background: var(--dv-accent-soft);
  border-color: var(--dv-accent);
}

/* User bubble */
.dv-msg-user {
  display: flex;
  justify-content: flex-end;
}

.dv-msg-user__bubble {
  max-width: 88%;
  padding: 10px 14px;
  background: var(--dv-accent);
  color: var(--dv-on-accent);
  border-radius: 16px 16px 4px 16px;
  font-size: var(--mp-typography-fontSize-body);
  font-weight: 500;
  line-height: 1.45;
}

/* Bot reply */
.dv-msg-bot {
  display: flex;
  gap: 10px;
}

.dv-msg-bot__avatar {
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  background: var(--dv-grad);
  display: grid;
  place-items: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.dv-msg-bot__body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dv-msg-bot__intro {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: rgb(var(--v-theme-on-surface));
}

.dv-msg-bot__intro :deep(strong) {
  font-weight: 600;
}

.dv-msg-bot__rationale {
  font-size: var(--mp-typography-fontSize-sm);
  font-weight: 400;
  line-height: 1.5;
  color: var(--dv-text-secondary);
  padding: 10px 12px;
  background: var(--dv-accent-soft);
  border-radius: var(--mp-borderRadius-md);
  border-left: 2px solid var(--dv-accent);
}

.dv-eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgb(var(--v-theme-on-surface));
  display: block;
  margin-bottom: 4px;
}

/* Drafts row */
.dv-drafts {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dv-drafts__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  color: rgb(var(--v-theme-on-surface-variant));
}

.dv-drafts__count {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* Generating status + skeleton */
.dv-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: rgb(var(--v-theme-on-surface-variant));
}

.dv-status__dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: rgb(var(--v-theme-primary));
  animation: dvPulse 1.4s ease-in-out infinite;
}

.dv-skeleton {
  border: 1px solid rgb(var(--v-theme-outline-variant));
  border-radius: 12px;
  background: rgb(var(--v-theme-surface));
  padding: 14px;
}

.dv-skeleton__top {
  margin-bottom: 12px;
}

.dv-skeleton__bars {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.dv-skeleton__bar {
  height: 14px;
  border-radius: 6px;
  background: rgb(var(--v-theme-surface-variant));
  width: 100%;
  animation: dvShimmer 1.4s ease-in-out infinite;
}

.dv-skeleton__bar--mid { width: 80%; }
.dv-skeleton__bar--narrow { width: 55%; }

@keyframes dvPulse {
  0%, 100% { opacity: 0.55; transform: scale(0.92); }
  50% { opacity: 1; transform: scale(1.08); }
}

@keyframes dvShimmer {
  0%, 100% { opacity: 0.65; }
  50% { opacity: 1; }
}

/* ─── Composer ─────────────────────────────────────────────────────── */
.dv-panel__composer {
  flex-shrink: 0;
  padding: 16px 16px 16px;
  background: rgb(var(--v-theme-background));
  border-top: 1px solid rgb(var(--v-theme-outline-variant));
}

.dv-next-steps {
  display: grid;
  gap: 6px;
  margin-bottom: 12px;
}

.dv-next-steps__label {
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.dv-next-steps__item {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid rgb(var(--v-theme-outline-variant));
  border-radius: var(--mp-borderRadius-md);
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
  cursor: pointer;
  font-size: var(--mp-typography-fontSize-sm);
  font-weight: 600;
  text-align: left;
  transition: background 120ms ease, border-color 120ms ease;
}

.dv-next-steps__item:hover {
  background: var(--dv-accent-soft);
  border-color: var(--dv-accent);
}

.dv-composer__pills {
  display: flex;
  gap: 6px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.dv-composer__pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 9999px;
  border: 1px solid rgb(var(--v-theme-outline-variant));
  background: rgb(var(--v-theme-surface));
  font-size: 12px;
  font-weight: 500;
  color: rgb(var(--v-theme-on-surface-variant));
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease, color 120ms ease;
}

.dv-composer__pill:hover {
  background: rgb(var(--v-theme-surface-variant));
  border-color: rgb(var(--v-theme-outline));
  color: rgb(var(--v-theme-on-surface));
}

.dv-composer__field {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px 6px 12px;
  background: rgb(var(--v-theme-surface));
  border: 1px solid rgb(var(--v-theme-outline-variant));
  border-radius: var(--mp-borderRadius-lg);
  box-shadow: inset 0 0 0 1px rgb(var(--v-theme-outline-variant));
  transition: border-color 120ms ease, box-shadow 120ms ease;
}

.dv-composer__field:focus-within {
  border-color: var(--dv-accent);
  box-shadow: inset 0 0 0 2px var(--dv-accent);
}

.dv-composer__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: var(--mp-typography-fontSize-body);
  line-height: 1.4;
  color: rgb(var(--v-theme-on-surface));
  padding: 8px 0;
  font-family: inherit;
}

.dv-composer__input::placeholder {
  color: var(--dv-text-secondary);
}

.dv-composer__send {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  border: none;
  background: var(--dv-grad);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: filter 120ms ease, opacity 120ms ease;
}

.dv-composer__voice {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 9999px;
  background: rgb(var(--v-theme-surface-variant));
  color: rgb(var(--v-theme-on-surface-variant));
  cursor: pointer;
  display: grid;
  place-items: center;
}

.dv-composer__voice--active {
  background: var(--dv-accent-soft);
  color: var(--dv-accent);
}

.dv-composer__send:hover {
  filter: brightness(1.05);
}

.dv-composer__send:focus-visible {
  outline: 2px solid color-mix(in oklch, var(--dv-accent) 40%, transparent);
  outline-offset: 2px;
}

.dv-composer__send:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
</style>
