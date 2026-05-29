import { createAiProvider } from './aiProvider'
import type { AiMessage } from './aiProvider/types'

export type AssistantActionKind = 'read' | 'write'

export interface AssistantAction {
  id: string
  label: string
  kind: AssistantActionKind
  prompt: string
  routeName?: string
}

export interface AssistantPageContext {
  accountId: string
  accountName: string
  pageKey: string
  pageLabel: string
  readinessLabel: string
  sources: string[]
  suggestedPrompts: string[]
  nextSteps: AssistantAction[]
}

export interface AssistantChatMessage {
  role: 'user' | 'assistant'
  text: string
}

export interface AssistantChatResult {
  text: string
  actions: AssistantAction[]
}

function actionId(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function actionsFromLabels(labels: string[], context: AssistantPageContext): AssistantAction[] {
  return labels.map((label) => {
    const seed = context.nextSteps.find((step) => step.label.toLowerCase() === label.toLowerCase())
    return seed ?? {
      id: actionId(label),
      label,
      kind: 'read',
      prompt: label,
    }
  })
}

function parseActionBlock(text: string, context: AssistantPageContext): AssistantChatResult {
  const match = text.match(/:::actions\s+([\s\S]*?):::/i)
  if (!match) {
    return { text: text.trim(), actions: [] }
  }

  const labels = match[1]
    ?.split(/\s*(?:\||,|·|\n)\s*/)
    .map(label => label.trim())
    .filter(Boolean) ?? []

  return {
    text: text.replace(match[0], '').trim(),
    actions: actionsFromLabels(labels, context),
  }
}

function findNextStep(context: AssistantPageContext, pattern: RegExp) {
  return context.nextSteps.find(step => pattern.test(step.label))
}

function mockReply(prompt: string, context: AssistantPageContext): AssistantChatResult {
  const lower = prompt.toLowerCase()
  const productStep = findNextStep(context, /product|catalog|item/i)
  const paymentStep = findNextStep(context, /payment|checkout/i)
  const domainStep = findNextStep(context, /domain|dns/i)
  const campaignStep = findNextStep(context, /campaign|email/i)
  const contactStep = findNextStep(context, /contact|audience/i)
  const performanceStep = findNextStep(context, /performance|analytics|dashboard/i)

  if (/launch|first|start|ready|setup|store/.test(lower)) {
    const actions = [productStep, paymentStep, domainStep].filter(Boolean) as AssistantAction[]
    return {
      text: [
        `Here's where ${context.accountName} stands: ${context.readinessLabel}.`,
        'I would tackle this in order:',
        '<strong>1. Add or verify your catalog.</strong> Make sure products, pricing, and inventory are ready before traffic arrives.',
        '<strong>2. Confirm checkout and payments.</strong> This unlocks revenue capture and reduces launch risk.',
        '<strong>3. Connect a trustworthy path to the store.</strong> Domain, sender identity, and tracking should be clean before campaigns go live.',
        'Where would you like to start?',
      ].join('<br>'),
      actions: actions.length ? actions : context.nextSteps.slice(0, 3),
    }
  }

  if (/campaign|email|promotion|sale/.test(lower)) {
    const actions = [campaignStep, contactStep, performanceStep].filter(Boolean) as AssistantAction[]
    return {
      text: [
        `I can help prepare a campaign from the ${context.pageLabel} context.`,
        'I will check the audience, draft the message, and keep it reviewable before anything is sent.',
      ].join('<br>'),
      actions: actions.length ? actions : context.nextSteps.slice(0, 3),
    }
  }

  if (/performance|analytics|revenue|orders|drop|attention/.test(lower)) {
    return {
      text: [
        `I checked the available ${context.sources.join(', ').toLowerCase()} signals for ${context.pageLabel}.`,
        'The safest next move is to explain the headline trend first, then draft a dashboard view you can review.',
      ].join('<br>'),
      actions: [performanceStep, campaignStep].filter(Boolean) as AssistantAction[],
    }
  }

  return {
    text: [
      `I can help from here on ${context.pageLabel}.`,
      `I can read ${context.sources.join(', ').toLowerCase()} and propose changes for approval before anything is created.`,
    ].join('<br>'),
    actions: context.nextSteps.slice(0, 3),
  }
}

export async function sendAssistantMessage(params: {
  prompt: string
  history: AssistantChatMessage[]
  context: AssistantPageContext
}): Promise<AssistantChatResult> {
  const mode = import.meta.env.VITE_AI_PROVIDER ?? 'mock'
  if (mode === 'mock') {
    await new Promise(resolve => window.setTimeout(resolve, 700))
    return mockReply(params.prompt, params.context)
  }

  const provider = createAiProvider()
  const history: AiMessage[] = params.history.map(message => ({
    role: message.role,
    text: message.text,
  }))

  const prompt = [
    `Page: ${params.context.pageLabel}.`,
    `Readiness: ${params.context.readinessLabel}.`,
    `Allowed sources: ${params.context.sources.join(', ')}.`,
    'Answer like an embedded business assistant. Be concise, grounded, and action-oriented.',
    'If useful, end with an action block exactly like: :::actions Action one | Action two | Action three:::',
    `User: ${params.prompt}`,
  ].join('\n')

  try {
    const result = await provider.complete({
      prompt,
      history,
      context: {
        accountId: params.context.accountId,
        accountName: params.context.accountName,
        sources: params.context.sources,
      },
    })

    const parsed = parseActionBlock(result.text, params.context)
    return {
      text: parsed.text,
      actions: parsed.actions.length ? parsed.actions : params.context.nextSteps.slice(0, 2),
    }
  } catch {
    return mockReply(params.prompt, params.context)
  }
}
