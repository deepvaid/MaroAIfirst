export type AiRole = 'user' | 'assistant' | 'system'

export interface AiMessage {
  role: AiRole
  text: string
}

export interface MerchantContext {
  accountId: string
  accountName?: string
  intentId?: string
  sources?: string[]
}

export interface AiCompletionParams {
  prompt: string
  history?: AiMessage[]
  context: MerchantContext
}

export interface AiCompletionResult {
  text: string
}

export interface AiProvider {
  complete(params: AiCompletionParams): Promise<AiCompletionResult>
}
