import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCopilotStore = defineStore('copilot', () => {
  const isOpen = ref(false)
  const isExpanded = ref(false)
  const isPinned = ref(false)
  const seededPrompt = ref('')
  const seedAutoSubmit = ref(false)

  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  function toggle() {
    isOpen.value = !isOpen.value
  }

  function toggleExpanded() {
    isExpanded.value = !isExpanded.value
  }

  function pin() {
    isPinned.value = true
    isOpen.value = true
  }

  function unpin() {
    isPinned.value = false
  }

  function seedPrompt(prompt: string, options: { autoSubmit?: boolean; openPanel?: boolean; pinned?: boolean } = {}) {
    seededPrompt.value = prompt
    seedAutoSubmit.value = !!options.autoSubmit
    if (options.pinned) pin()
    else if (options.openPanel) open()
  }

  function clearSeedPrompt() {
    seededPrompt.value = ''
    seedAutoSubmit.value = false
  }

  return {
    isOpen,
    isExpanded,
    isPinned,
    seededPrompt,
    seedAutoSubmit,
    open,
    close,
    toggle,
    toggleExpanded,
    pin,
    unpin,
    seedPrompt,
    clearSeedPrompt,
  }
})
