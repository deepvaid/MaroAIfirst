import type { AiProvider } from './types'
import { createGeminiProvider } from './geminiProvider'
import { createMockProvider } from './mockProvider'

export function createAiProvider(): AiProvider {
  const mode = import.meta.env.VITE_AI_PROVIDER ?? 'mock'
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY
  const model = import.meta.env.VITE_GEMINI_MODEL ?? 'gemini-2.5-flash'

  if (mode === 'gemini' && apiKey) {
    return createGeminiProvider(apiKey, model)
  }

  // Production swap point:
  // Replace this factory with a Da Vinci provider that calls Maropost's
  // server-side agent orchestrator. The browser should send intent, answers,
  // and approved plan IDs; privileged Maropost API writes stay server-side.
  return createMockProvider()
}

export type { AiMessage, AiProvider, MerchantContext } from './types'
