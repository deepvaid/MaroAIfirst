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
  gap: 8px;
  width: min(720px, 100%);
  margin: 0 auto;
}

.composer {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 12px 8px;
  border: 1px solid var(--hairline);
  border-radius: 16px;
  background: var(--surface-1);
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}

.composer:focus-within {
  border-color: color-mix(in oklch, rgb(var(--v-theme-primary)) 55%, var(--hairline));
  box-shadow: 0 0 0 4px var(--accent-soft);
}

.composer--listening {
  border-color: rgb(var(--v-theme-error));
}

.composer-field {
  width: 100%;
}

.composer-field :deep(.v-field__input) {
  padding: 6px 4px;
  min-height: 30px;
  font-size: 1rem;
  color: var(--ink);
  line-height: 1.5;
}

.composer-field :deep(textarea)::placeholder {
  color: var(--muted);
  opacity: 1;
}

.composer-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.send-button {
  border-radius: 999px;
}

.speech-preview {
  color: var(--muted);
  font-size: 0.85rem;
  text-align: center;
}
</style>
