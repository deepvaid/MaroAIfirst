<script setup lang="ts">
import type { ConversationEntry } from '../stores/onboardingSession'

defineProps<{
  messages: ConversationEntry[]
  stateLabel: string
  error?: string
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
  border: 1px solid rgba(160, 204, 255, 0.14);
  border-radius: 22px;
  background: rgba(5, 10, 20, 0.76);
  color: white;
  backdrop-filter: blur(18px);
}

.status-dot {
  width: 10px;
  height: 10px;
  margin-top: 7px;
  border-radius: 999px;
  background: rgb(var(--v-theme-primary));
  box-shadow: 0 0 22px rgba(75, 190, 255, 0.9);
}

.conversation-body {
  min-width: 0;
}

.status {
  color: rgba(146, 215, 255, 0.78);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.message {
  margin-top: 4px;
  color: rgba(225, 238, 255, 0.74);
  font-size: 0.9rem;
  line-height: 1.45;
}

.message-user {
  color: rgba(255, 255, 255, 0.92);
}

.message-error {
  color: rgb(var(--v-theme-error));
}
</style>
