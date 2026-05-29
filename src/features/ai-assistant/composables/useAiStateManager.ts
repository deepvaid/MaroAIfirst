import { computed, ref } from 'vue'

export type AiVisualState = 'idle' | 'listening' | 'thinking' | 'speaking' | 'error'

export function useAiStateManager() {
  const state = ref<AiVisualState>('idle')
  const errorMessage = ref('')

  const stateLabel = computed(() => {
    const labels: Record<AiVisualState, string> = {
      idle: 'Ready',
      listening: 'Listening',
      thinking: 'Thinking',
      speaking: 'Speaking',
      error: 'Needs attention',
    }
    return labels[state.value]
  })

  function setState(next: AiVisualState) {
    state.value = next
    if (next !== 'error') errorMessage.value = ''
  }

  function setError(message: string) {
    errorMessage.value = message
    state.value = 'error'
  }

  return {
    state,
    stateLabel,
    errorMessage,
    setState,
    setError,
  }
}
