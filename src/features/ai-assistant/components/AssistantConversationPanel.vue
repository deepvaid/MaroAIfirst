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
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  background: rgba(15, 21, 35, 0.82);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
  color: #d6d8d8;
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
  color: rgba(214, 216, 216, 0.65);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.09375rem;
  text-transform: uppercase;
}

.message {
  margin-top: 0;
  color: #eff0f0;
  font-size: 1rem;
  line-height: 1.5;
  white-space: pre-line;
}

.message-user {
  color: rgba(214, 216, 216, 0.78);
}

.message-error {
  color: #f87171;
}

.message-actions {
  margin-top: 14px;
}

.message-actions :deep(.v-chip) {
  border: 1px solid rgba(66, 164, 254, 0.35);
  background: rgba(66, 164, 254, 0.12) !important;
  color: #9ecfff !important;
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
