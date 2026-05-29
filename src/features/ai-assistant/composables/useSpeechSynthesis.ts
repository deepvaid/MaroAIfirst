import { computed, ref } from 'vue'

export function useSpeechSynthesis() {
  const isSpeaking = ref(false)
  const isSupported = computed(() => typeof window !== 'undefined' && 'speechSynthesis' in window)

  function speak(text: string, callbacks?: { onStart?: () => void; onEnd?: () => void }) {
    if (!isSupported.value || !text.trim()) {
      callbacks?.onEnd?.()
      return
    }

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.95
    utterance.pitch = 0.85
    utterance.volume = 0.9

    utterance.onstart = () => {
      isSpeaking.value = true
      callbacks?.onStart?.()
    }
    utterance.onend = () => {
      isSpeaking.value = false
      callbacks?.onEnd?.()
    }
    utterance.onerror = () => {
      isSpeaking.value = false
      callbacks?.onEnd?.()
    }

    window.speechSynthesis.speak(utterance)
  }

  function cancel() {
    if (!isSupported.value) return
    window.speechSynthesis.cancel()
    isSpeaking.value = false
  }

  return {
    isSupported,
    isSpeaking,
    speak,
    cancel,
  }
}
