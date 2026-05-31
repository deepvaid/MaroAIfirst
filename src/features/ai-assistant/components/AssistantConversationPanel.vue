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
  gap: 14px;
  width: min(760px, calc(100vw - 32px));
  margin: 44px auto 0;
  padding: 22px 26px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: 0 1px 3px rgba(58, 42, 36, 0.05);
  backdrop-filter: blur(10px);
  color: var(--ink);
}

.status-dot {
  width: 11px;
  height: 11px;
  margin-top: 6px;
  border-radius: 999px;
  background: rgb(var(--v-theme-primary));
  box-shadow: 0 0 0 4px rgba(26, 183, 234, 0.16);
  animation: ready-pulse 2.4s ease-in-out infinite;
}

.conversation-body {
  min-width: 0;
}

.status {
  margin-bottom: 8px;
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.09375rem;
  text-transform: uppercase;
}

.message {
  margin-top: 0;
  color: var(--ink);
  font-size: 1rem;
  line-height: 1.5;
  white-space: pre-line;
}

.message-user {
  color: var(--muted);
}

.message-error {
  color: rgb(var(--v-theme-error));
}

.message-actions {
  margin-top: 14px;
}

@keyframes ready-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 3px rgba(26, 183, 234, 0.18);
  }

  50% {
    box-shadow: 0 0 0 7px rgba(26, 183, 234, 0.06);
  }
}

@media (prefers-reduced-motion: reduce) {
  .status-dot {
    animation: none !important;
  }
}
</style>
