import { useAccountsStore } from '@/stores/useAccounts'
import { useCampaignsStore } from '@/stores/useCampaigns'
import { useDashboardsStore } from '@/stores/useDashboards'
import { getOnboardingIntent } from './onboardingIntents'
import type { OnboardingAnswer, OnboardingIntentId, OnboardingPlan, ToolResult } from './agentOrchestrator.types'

function answerText(answers: OnboardingAnswer[], questionId: string, fallback: string): string {
  return answers.find(answer => answer.questionId === questionId)?.answer ?? fallback
}

export function createPlanFromTemplate(
  _accountId: string,
  intentId: OnboardingIntentId,
  answers: OnboardingAnswer[],
): OnboardingPlan {
  const intent = getOnboardingIntent(intentId)
  if (!intent) throw new Error('Unsupported onboarding intent')

  const routeMap: Record<OnboardingIntentId, OnboardingPlan['handoff']> = {
    campaign: { routeName: 'CreateCampaign', label: intent.breadcrumb },
    contacts: { routeName: 'ContactLists', label: intent.breadcrumb },
    journey: { routeName: 'JourneyBuilder', params: { id: '7' }, label: intent.breadcrumb },
    performance: { routeName: 'Dashboard', label: intent.breadcrumb },
    datasource: { routeName: 'AppStore', label: intent.breadcrumb },
  }

  const plans: Record<OnboardingIntentId, Pick<OnboardingPlan, 'title' | 'summary' | 'steps' | 'preview'>> = {
    campaign: {
      title: 'Create a first campaign draft',
      summary: `I will draft a ${answerText(answers, 'goal', 'welcome offer')} for ${answerText(answers, 'audience', 'new customers')} and leave it unsent for review.`,
      steps: [
        { label: 'Read audience and list structure', mode: 'read', tool: 'audience.lookup' },
        { label: 'Draft campaign setup and subject line', mode: 'write', tool: 'campaign.createDraft' },
        { label: 'Open the campaign builder for approval', mode: 'read', tool: 'navigation.handoff' },
      ],
      preview: {
        kind: 'campaign',
        title: 'Welcome offer for new customers',
        description: 'Draft campaign with audience, subject line, preheader, and starter body copy.',
      },
    },
    contacts: {
      title: 'Preview and map a contact import',
      summary: `I will simulate mapping a ${answerText(answers, 'source', 'CSV upload')} and prepare the ${answerText(answers, 'segment', 'new leads')} tag before opening Contact Lists.`,
      steps: [
        { label: 'Read workspace contact fields', mode: 'read', tool: 'contacts.fields' },
        { label: 'Preview mappings and flag ambiguous columns', mode: 'read', tool: 'contacts.previewImport' },
        { label: 'Open Contact Lists for manual confirmation', mode: 'read', tool: 'navigation.handoff' },
      ],
      preview: {
        kind: 'contacts',
        title: '4,214 contacts ready for review',
        description: 'Email, first name, last name, company, phone, city, source, and consent date mapped.',
      },
    },
    journey: {
      title: 'Draft a welcome automation',
      summary: `I will prepare a ${answerText(answers, 'channel', 'email')} welcome path triggered by ${answerText(answers, 'trigger', 'form submission')}.`,
      steps: [
        { label: 'Read existing journey templates', mode: 'read', tool: 'journeys.templates' },
        { label: 'Draft welcome journey structure', mode: 'write', tool: 'journeys.createDraft' },
        { label: 'Open the journey builder for review', mode: 'read', tool: 'navigation.handoff' },
      ],
      preview: {
        kind: 'journey',
        title: 'New signup welcome journey',
        description: `Welcome message, wait step, and follow-up after ${answerText(answers, 'followup', '3 days')}.`,
      },
    },
    performance: {
      title: 'Explain what needs attention today',
      summary: `I will inspect ${answerText(answers, 'focus', 'revenue')} for ${answerText(answers, 'window', 'today')} and open the dashboard with a suggested widget draft.`,
      steps: [
        { label: 'Read recent dashboard and campaign signals', mode: 'read', tool: 'analytics.summary' },
        { label: 'Create a suggested dashboard widget draft', mode: 'write', tool: 'dashboard.widgetDraft' },
        { label: 'Open dashboard for verification', mode: 'read', tool: 'navigation.handoff' },
      ],
      preview: {
        kind: 'performance',
        title: 'Store attention summary',
        description: 'Revenue, engagement, and cart signals summarized with a dashboard widget draft.',
      },
    },
    datasource: {
      title: 'Prepare data source connection',
      summary: `I will guide a ${answerText(answers, 'platform', 'Shopify')} connection and validate ${answerText(answers, 'sync', 'products, customers, and orders')} readiness.`,
      steps: [
        { label: 'Read account subscription and integration access', mode: 'read', tool: 'account.permissions' },
        { label: 'Prepare connection checklist', mode: 'read', tool: 'integrations.checklist' },
        { label: 'Open the relevant setup screen', mode: 'read', tool: 'navigation.handoff' },
      ],
      preview: {
        kind: 'datasource',
        title: 'Connection checklist prepared',
        description: 'Credentials, permissions, sync scope, and validation steps ready for setup.',
      },
    },
  }

  return {
    intentId,
    memoryScope: 'session',
    sources: intent.sources,
    classicPath: intent.breadcrumb,
    handoff: routeMap[intentId],
    ...plans[intentId],
  }
}

export async function executeMockPlan(accountId: string, plan: OnboardingPlan): Promise<ToolResult> {
  await new Promise(resolve => window.setTimeout(resolve, 700))

  const accountsStore = useAccountsStore()
  const campaignStore = useCampaignsStore()
  const dashboardsStore = useDashboardsStore()

  if (plan.intentId === 'campaign') {
    campaignStore.createCampaign(plan.preview.title)
    const draftId = String(campaignStore.campaigns[0]?.id ?? 'draft')
    return {
      title: 'Campaign draft created',
      description: 'A simulated draft campaign is ready in the campaign builder. Nothing has been sent.',
      changedLabel: 'Created draft campaign',
      handoff: {
        ...plan.handoff,
        path: `/accounts/${accountId}/campaigns/new`,
        query: { jarvisHandoff: '1', focus: draftId },
      },
    }
  }

  if (plan.intentId === 'performance') {
    const dashboard = dashboardsStore.getDefaultDashboard(accountId)
    const draft = dashboard
      ? dashboardsStore.buildAiWidgetDraft(accountId, dashboard.id, `${plan.title} revenue orders campaign trend`)
      : null

    return {
      title: draft ? 'Dashboard widget draft prepared' : 'Performance summary prepared',
      description: draft
        ? `${draft.aiProvenance?.summary ?? 'Da Vinci prepared a dashboard widget draft.'} This is a simulated onboarding tool result.`
        : 'I prepared a simulated performance summary and opened the dashboard for verification.',
      changedLabel: draft ? 'Prepared widget draft' : 'Prepared summary',
      handoff: {
        ...plan.handoff,
        path: `/accounts/${accountId}/dashboard`,
        query: { jarvisHandoff: '1', focus: draft?.metricId ?? 'performance-summary' },
      },
    }
  }

  if (plan.intentId === 'journey') {
    const journeyId = String(campaignStore.journeys.find(journey => journey.status === 'Draft')?.id ?? 7)
    return {
      title: 'Welcome journey draft prepared',
      description: 'A simulated journey structure is ready for review in the journey builder.',
      changedLabel: 'Prepared draft journey',
      handoff: {
        ...plan.handoff,
        path: `/accounts/${accountId}/journeys/${journeyId}/builder`,
        params: { id: journeyId },
        query: { jarvisHandoff: '1', focus: journeyId },
      },
    }
  }

  if (plan.intentId === 'datasource') {
    const hasCommerce = accountsStore.hasSubscription('commerce')
    return {
      title: 'Connection checklist prepared',
      description: hasCommerce
        ? 'Commerce access is available. I will open the store setup screen for connection details.'
        : 'Commerce access is not enabled on this account. I will open the App Store instead.',
      changedLabel: 'Prepared integration checklist',
      handoff: {
        routeName: hasCommerce ? 'SalesChannels' : 'AppStore',
        path: hasCommerce ? `/accounts/${accountId}/sales_channels` : `/accounts/${accountId}/app_store`,
        label: hasCommerce ? 'Commerce > Sales channels' : 'App Store > Integrations',
        query: { jarvisHandoff: '1', focus: 'datasource' },
      },
    }
  }

  return {
    title: 'Contact import preview prepared',
    description: 'A simulated field mapping is ready. No contacts were imported in this prototype.',
    changedLabel: 'Prepared import preview',
    handoff: {
      ...plan.handoff,
      path: `/accounts/${accountId}/lists`,
      query: { jarvisHandoff: '1', focus: 'contact-import' },
    },
  }
}
