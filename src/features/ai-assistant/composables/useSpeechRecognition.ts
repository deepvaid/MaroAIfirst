import { computed, ref } from 'vue'

interface SpeechRecognitionLike extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  start: () => void
  stop: () => void
  abort: () => void
  onresult: ((event: SpeechRecognitionEventLike) => void) | null
  onend: (() => void) | null
  onerror: ((event: { error?: string }) => void) | null
}

interface SpeechRecognitionEventLike {
  resultIndex: number
  results: {
    length: number
    [index: number]: {
      isFinal: boolean
      [index: number]: {
        transcript: string
      }
    }
  }
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike

function getRecognitionConstructor(): SpeechRecognitionConstructor | null {
  if (typeof window === 'undefined') return null
  const speechWindow = window as Window & {
    SpeechRecognition?: SpeechRecognitionConstructor
    webkitSpeechRecognition?: SpeechRecognitionConstructor
  }
  return speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition ?? null
}

export function useSpeechRecognition() {
  const isListening = ref(false)
  const interimTranscript = ref('')
  const finalTranscript = ref('')
  const error = ref('')
  const Recognition = getRecognitionConstructor()
  const isSupported = computed(() => !!Recognition)
  let recognition: SpeechRecognitionLike | null = null

  function createRecognition() {
    if (!Recognition) return null
    const instance = new Recognition()
    instance.continuous = false
    instance.interimResults = true
    instance.lang = 'en-US'

    instance.onresult = (event) => {
      let interim = ''
      let finalText = ''
      for (let index = event.resultIndex; index < event.results.length; index += 1) {
        const result = event.results[index]
        if (!result) continue
        const transcript = result[0]?.transcript ?? ''
        if (result.isFinal) finalText += transcript
        else interim += transcript
      }

      interimTranscript.value = interim.trim()
      if (finalText.trim()) finalTranscript.value = finalText.trim()
    }

    instance.onerror = (event) => {
      error.value = event.error || 'Speech recognition failed'
      isListening.value = false
    }

    instance.onend = () => {
      isListening.value = false
    }

    return instance
  }

  function start() {
    error.value = ''
    finalTranscript.value = ''
    interimTranscript.value = ''
    recognition = createRecognition()
    if (!recognition) {
      error.value = 'Voice input is not supported in this browser.'
      return
    }

    isListening.value = true
    recognition.start()
  }

  function stop() {
    recognition?.stop()
    isListening.value = false
  }

  function abort() {
    recognition?.abort()
    isListening.value = false
  }

  return {
    isSupported,
    isListening,
    interimTranscript,
    finalTranscript,
    error,
    start,
    stop,
    abort,
  }
}
