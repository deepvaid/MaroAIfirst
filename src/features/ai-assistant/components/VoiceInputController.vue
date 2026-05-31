<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useSpeechRecognition } from '../composables/useSpeechRecognition'

const props = defineProps<{
  disabled?: boolean
}>()

const emit = defineEmits<{
  submit: [text: string]
  listeningChange: [listening: boolean]
}>()

const text = ref('')
const speech = useSpeechRecognition()
const transcriptPreview = computed(() => speech.interimTranscript.value || speech.finalTranscript.value)
const placeholder = computed(() =>
  speech.isSupported.value
    ? 'Ask Jarvis anything\u2026'
    : 'Voice is unavailable here \u2014 type your request\u2026',
)

watch(speech.isListening, listening => emit('listeningChange', listening))

watch(speech.finalTranscript, (transcript) => {
  if (!transcript) return
  emit('submit', transcript)
  speech.clearTranscripts()
})

function toggleMic() {
  if (props.disabled) return
  if (speech.isListening.value) speech.stop()
  else speech.start()
}

function submitText() {
  const trimmed = text.value.trim()
  if (!trimmed) return
  emit('submit', trimmed)
  text.value = ''
}
</script>

<template>
  <div class="voice-controller">
    <div class="composer" :class="{ 'composer--listening': speech.isListening.value }">
      <v-textarea
        v-model="text"
        class="composer-field"
        variant="plain"
        rows="1"
        max-rows="6"
        auto-grow
        hide-details
        :disabled="disabled"
        :placeholder="placeholder"
        @keydown.enter.exact.prevent="submitText"
      />

      <div class="composer-actions">
        <v-btn
          icon
          variant="text"
          size="small"
          :color="speech.isListening.value ? 'error' : undefined"
          :disabled="disabled || !speech.isSupported.value"
          :aria-label="speech.isListening.value ? 'Stop listening' : 'Start voice input'"
          class="mic-button"
          @click="toggleMic"
        >
          <v-icon size="20">{{ speech.isListening.value ? 'mic-off' : 'mic' }}</v-icon>
        </v-btn>

        <v-spacer />

        <v-btn
          icon
          size="small"
          color="primary"
          :disabled="disabled || !text.trim()"
          aria-label="Send"
          class="send-button"
          @click="submitText"
        >
          <v-icon size="18">arrow-up</v-icon>
        </v-btn>
      </div>
    </div>

    <div v-if="transcriptPreview || speech.error.value" class="speech-preview">
      {{ speech.error.value || transcriptPreview }}
    </div>
    <div v-else-if="!speech.isSupported.value" class="speech-preview">
      Voice input is not supported in this browser. Text mode is ready.
    </div>
  </div>
</template>

<style scoped>
.voice-controller {
  display: grid;
  gap: 6px;
  width: min(680px, 100%);
  margin: 0 auto;
}

.composer {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 18px 12px;
  border: 1px solid rgba(255, 255, 255, 0.92);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow:
    0 1px 3px rgba(58, 42, 36, 0.05),
    0 18px 44px -24px rgba(58, 42, 36, 0.16);
  backdrop-filter: blur(12px) saturate(115%);
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}

.composer:focus-within {
  border-color: rgba(26, 183, 234, 0.45);
  box-shadow:
    0 0 0 3px rgba(26, 183, 234, 0.12),
    0 18px 44px -24px rgba(58, 42, 36, 0.18);
}

.composer--listening {
  border-color: rgb(var(--v-theme-error));
}

.composer-field {
  width: 100%;
}

.composer-field :deep(.v-field__input) {
  padding: 2px 4px;
  min-height: 28px;
  font-size: clamp(0.9375rem, 1.8vw, 1.1875rem);
  color: var(--ink);
  line-height: 1.4;
}

.composer-field :deep(textarea)::placeholder {
  color: var(--muted);
  opacity: 1;
}

.composer-actions {
  display: flex;
  align-items: center;
  margin-top: 6px;
  gap: 8px;
}

.mic-button,
.send-button {
  width: 40px;
  height: 40px;
  border-radius: 999px;
}

.send-button {
  width: 42px;
  height: 42px;
  box-shadow: 0 4px 12px -4px rgba(26, 183, 234, 0.5);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

.send-button:not(:disabled):hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px -8px rgba(26, 183, 234, 0.75);
}

.speech-preview {
  color: var(--muted);
  font-size: 0.85rem;
  text-align: center;
}
</style>
