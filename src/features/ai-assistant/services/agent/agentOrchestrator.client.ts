import { createAiProvider } from '../aiProvider'
import { createPlanFromTemplate, executeMockPlan } from './onboardingTools.mock'
import type { OnboardingPlan, PlanRequest, ToolResult } from './agentOrchestrator.types'

async function postToAgentApi<T>(path: string, body: unknown): Promise<T> {
  const baseUrl = import.meta.env.VITE_AGENT_API_URL
  const response = await fetch(`${baseUrl}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!response.ok) throw new Error(`Agent API failed: ${response.status}`)
  return await response.json() as T
}

export async function buildOnboardingPlan(request: PlanRequest): Promise<OnboardingPlan> {
  const apiUrl = import.meta.env.VITE_AGENT_API_URL
  if (apiUrl) {
    return postToAgentApi<OnboardingPlan>('/api/agent/plan', request)
  }

  const plan = createPlanFromTemplate(request.accountId, request.intentId, request.answers)
  const provider = createAiProvider()

  try {
    const narration = await provider.complete({
      prompt: `Summarize this onboarding plan in one concise sentence: ${plan.summary}`,
      context: {
        accountId: request.accountId,
        accountName: request.accountName,
        intentId: request.intentId,
        sources: plan.sources,
      },
    })

    return {
      ...plan,
      summary: narration.text,
    }
  } catch {
    return plan
  }
}

export async function executeOnboardingPlan(accountId: string, plan: OnboardingPlan): Promise<ToolResult> {
  const apiUrl = import.meta.env.VITE_AGENT_API_URL
  if (apiUrl) {
    return postToAgentApi<ToolResult>('/api/agent/execute', { accountId, plan })
  }

  // Prototype: execute against local mock tools only.
  // Production: this call moves to Maropost's server-side Da Vinci/agent
  // orchestrator, which owns permissions, Maropost API adapters, audit logs,
  // and rollback/confirmation rules.
  return executeMockPlan(accountId, plan)
}
