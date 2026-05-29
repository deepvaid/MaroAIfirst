import type { AiProvider } from './types'

interface GeminiResponse {
  candidates?: {
    content?: {
      parts?: { text?: string }[]
    }
  }[]
  error?: {
    message?: string
  }
}

export function createGeminiProvider(apiKey: string, model: string): AiProvider {
  return {
    async complete({ prompt, history = [], context }) {
      const systemPrompt = [
        'You are Jarvis for Maropost, a conservative AI onboarding concierge for merchants.',
        'Help the user clarify goals, propose short reviewable plans, and never claim live writes unless a tool result says so.',
        'Be concise, business-focused, and explicit about simulated prototype data.',
        `Account: ${context.accountName ?? context.accountId}.`,
        `Intent: ${context.intentId ?? 'unspecified'}.`,
        `Sources allowed: ${(context.sources ?? ['Workspace data', 'Help docs']).join(', ')}.`,
      ].join('\n')

      const contents = [
        {
          role: 'user',
          parts: [{ text: systemPrompt }],
        },
        ...history.map(message => ({
          role: message.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: message.text }],
        })),
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ]

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 420,
            // gemini-2.5-flash is a thinking model; disable thinking so the token
            // budget produces visible reply text instead of internal reasoning.
            thinkingConfig: { thinkingBudget: 0 },
          },
        }),
      })

      const payload = await response.json() as GeminiResponse
      if (!response.ok) {
        throw new Error(payload.error?.message || 'Gemini request failed')
      }

      const text = payload.candidates?.[0]?.content?.parts
        ?.map(part => part.text)
        .filter(Boolean)
        .join('\n')
        .trim()

      if (!text) throw new Error('Gemini returned an empty response')
      return { text }
    },
  }
}
