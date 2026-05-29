import type { OnboardingPlan, PlanRequest, ToolResult } from './agentOrchestrator.types'

// Production contract sketch only. Do not call this from the browser prototype.
// The real implementation should live server-side and route through Maropost's
// Da Vinci service plus permission-checked REST/GraphQL adapters.

export interface ServerAgentOrchestrator {
  plan(request: PlanRequest): Promise<OnboardingPlan>
  execute(request: { accountId: string; plan: OnboardingPlan; approvedByUser: true }): Promise<ToolResult>
}
