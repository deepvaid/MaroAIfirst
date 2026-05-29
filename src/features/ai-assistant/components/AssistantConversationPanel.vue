<script setup lang="ts">
import AssistantActionChips from './AssistantActionChips.vue'
import type { ConversationEntry } from '../stores/onboardingSession'
import type { AssistantAction } from '../services/assistantChat'

defineProps<{
  messages: ConversationEntry[]
  stateLabel: string
  error?: string
}>()

const emit = defineEmits<{
  selectAction: [action: AssistantAction]
}>()
</script>

<template>
  <aside class="conversation-panel" aria-live="polite">
    <div class="status-dot" />
    <div class="conversation-body">
      <div class="status">{{ stateLabel }}</div>
      <template v-if="error">
        <div class="message message-error">{{ error }}</div>
      </template>
      <template v-else>
        <div
          v-for="message in messages.slice(-2)"
          :key="message.id"
          :class="['message', `message-${message.role}`]"
        >
          {{ message.text }}
          <AssistantActionChips
            v-if="message.actions?.length"
            class="message-actions"
            :actions="message.actions"
            @select="emit('selectAction', $event)"
          />
        </div>
      </template>
    </div>
  </aside>
</template>

<style scoped>
.conversation-panel {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: min(760px, calc(100vw - 32px));
  margin: 0 auto;
  padding: 14px 16px;
  border: 1px solid var(--hairline);
  border-radius: 16px;
  background: var(--surface-1);
  color: var(--ink);
}

.status-dot {
  width: 10px;
  height: 10px;
  margin-top: 7px;
  border-radius: 999px;
  background: rgb(var(--v-theme-primary));
  box-shadow: 0 0 0 4px var(--accent-soft);
}

.conversation-body {
  min-width: 0;
}

.status {
  color: var(--accent-ink);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.message {
  margin-top: 4px;
  color: var(--ink);
  font-size: 0.9rem;
  line-height: 1.45;
}

.message-user {
  color: var(--muted);
}

.message-error {
  color: rgb(var(--v-theme-error));
}

.message-actions {
  margin-top: 8px;
}
</style>
