import type { AiProvider } from './types'

const DEMO_REPLIES: Record<string, string> = {
  campaign: 'I can prepare a first campaign draft with audience, subject line, and content suggestions. I will keep it as a draft until you approve it in the classic campaign builder.',
  contacts: 'I can preview the import, map common fields, and flag anything ambiguous before contacts are added to your workspace.',
  journey: 'I can draft a welcome journey with a signup trigger, initial email, wait step, and follow-up branch so you can review it in Journeys.',
  performance: 'I can compare recent campaign and store signals, then open the dashboard with a suggested analytics widget for review.',
  datasource: 'I can guide the connection flow, validate readiness, and then open the relevant integration screen so you can confirm the sync settings.',
}

function inferReply(prompt: string, intentId?: string): string {
  const intentReply = intentId ? DEMO_REPLIES[intentId] : undefined
  if (intentReply) return intentReply

  const lower = prompt.toLowerCase()
  if (/campaign|email|sale|promotion/.test(lower)) return DEMO_REPLIES.campaign ?? ''
  if (/import|contact|csv|list/.test(lower)) return DEMO_REPLIES.contacts ?? ''
  if (/journey|automation|welcome|abandoned/.test(lower)) return DEMO_REPLIES.journey ?? ''
  if (/performance|sales|revenue|analytics|dashboard/.test(lower)) return DEMO_REPLIES.performance ?? ''
  if (/connect|shopify|store|data source|integration/.test(lower)) return DEMO_REPLIES.datasource ?? ''

  return 'I can help turn that into a short, reviewable plan. Choose one of the onboarding tasks and I will show what I need, what data I will use, and what will change before anything is created.'
}

export function createMockProvider(): AiProvider {
  return {
    async complete({ prompt, context }) {
      await new Promise(resolve => window.setTimeout(resolve, 450))
      return { text: inferReply(prompt, context.intentId) }
    },
  }
}
