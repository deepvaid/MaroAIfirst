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
    <v-btn
      icon
      size="x-large"
      :color="speech.isListening.value ? 'error' : 'primary'"
      :variant="speech.isListening.value ? 'flat' : 'tonal'"
      :disabled="disabled || !speech.isSupported.value"
      :aria-label="speech.isListening.value ? 'Stop listening' : 'Start voice input'"
      class="mic-button"
      @click="toggleMic"
    >
      <v-icon size="30">{{ speech.isListening.value ? 'mdi-microphone-off' : 'mdi-microphone' }}</v-icon>
    </v-btn>

    <div class="text-input-shell">
      <v-text-field
        v-model="text"
        density="comfortable"
        variant="solo-filled"
        rounded="pill"
        hide-details
        bg-color="rgba(255,255,255,0.08)"
        :disabled="disabled"
        :placeholder="speech.isSupported.value ? 'Type instead, or use the microphone...' : 'Voice is unavailable here. Type your request...'"
        @keyup.enter="submitText"
      />
      <v-btn color="primary" rounded="pill" class="text-none" :disabled="disabled || !text.trim()" @click="submitText">
        Send
      </v-btn>
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
  justify-items: center;
  gap: 12px;
  width: min(760px, calc(100vw - 32px));
  margin: 0 auto;
}

.mic-button {
  box-shadow: 0 0 44px rgba(72, 189, 255, 0.28);
}

.text-input-shell {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10px;
  width: 100%;
}

.speech-preview {
  color: rgba(225, 238, 255, 0.62);
  font-size: 0.85rem;
  text-align: center;
}

@media (max-width: 620px) {
  .text-input-shell {
    grid-template-columns: 1fr;
  }
}
</style>
