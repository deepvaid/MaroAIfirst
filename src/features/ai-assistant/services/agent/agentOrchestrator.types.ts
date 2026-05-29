export type OnboardingPhase = 'welcome' | 'intent' | 'clarify' | 'plan' | 'execute' | 'handoff'

export type OnboardingIntentId =
  | 'campaign'
  | 'contacts'
  | 'journey'
  | 'performance'
  | 'datasource'

export interface ClarificationQuestion {
  id: string
  label: string
  options: string[]
}

export interface OnboardingIntent {
  id: OnboardingIntentId
  title: string
  description: string
  icon: string
  prompt: string
  breadcrumb: string
  sources: string[]
  questions: ClarificationQuestion[]
}

export interface OnboardingAnswer {
  questionId: string
  answer: string
}

export interface PlanStep {
  label: string
  mode: 'read' | 'write'
  tool?: string
}

export interface HandoffTarget {
  routeName: string
  path?: string
  params?: Record<string, string | number>
  query?: Record<string, string>
  label: string
}

export interface OnboardingPlan {
  intentId: OnboardingIntentId
  title: string
  summary: string
  steps: PlanStep[]
  sources: string[]
  memoryScope: 'session' | 'off'
  classicPath: string
  handoff: HandoffTarget
  preview: {
    title: string
    description: string
    kind: 'campaign' | 'contacts' | 'journey' | 'performance' | 'datasource'
  }
}

export interface ToolResult {
  title: string
  description: string
  changedLabel: string
  handoff: HandoffTarget
}

export interface PlanRequest {
  accountId: string
  accountName: string
  intentId: OnboardingIntentId
  answers: OnboardingAnswer[]
}
