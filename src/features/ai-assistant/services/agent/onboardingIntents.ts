import type { OnboardingIntent } from './agentOrchestrator.types'

export const ONBOARDING_INTENTS: OnboardingIntent[] = [
  {
    id: 'campaign',
    title: 'Create my first campaign',
    description: 'Draft an email campaign with audience, message, and review handoff.',
    icon: 'mdi-email-fast-outline',
    prompt: 'I want to send my first email campaign.',
    breadcrumb: 'Marketing > Campaigns > New campaign',
    sources: ['Workspace data', 'Help docs'],
    questions: [
      { id: 'audience', label: 'Who should receive it?', options: ['New customers', 'VIP customers', 'Newsletter subscribers'] },
      { id: 'goal', label: 'What is the goal?', options: ['Welcome offer', 'Promote a sale', 'Announce a product'] },
      { id: 'tone', label: 'What tone should it use?', options: ['Friendly', 'Premium', 'Urgent'] },
    ],
  },
  {
    id: 'contacts',
    title: 'Import contacts',
    description: 'Preview a CSV-style import, map fields, and open contact lists.',
    icon: 'mdi-account-multiple-plus-outline',
    prompt: 'I have a contact list to import.',
    breadcrumb: 'Audience > Contact Lists',
    sources: ['Uploaded CSV preview', 'Workspace fields'],
    questions: [
      { id: 'source', label: 'Where are the contacts coming from?', options: ['CSV upload', 'Shopify export', 'Event signup list'] },
      { id: 'consent', label: 'Do these contacts include consent data?', options: ['Yes, consent date exists', 'Yes, but needs mapping', 'Not sure'] },
      { id: 'segment', label: 'Should I tag them?', options: ['New leads', 'Retail customers', 'VIP prospects'] },
    ],
  },
  {
    id: 'journey',
    title: 'Build a welcome journey',
    description: 'Create a reviewable welcome automation draft.',
    icon: 'mdi-transit-connection-variant',
    prompt: 'Set up a welcome automation for new signups.',
    breadcrumb: 'Journeys > Automations > Builder',
    sources: ['Workspace journeys', 'Help docs'],
    questions: [
      { id: 'trigger', label: 'What should trigger the journey?', options: ['Form submission', 'List join', 'First purchase'] },
      { id: 'channel', label: 'Which channel should start it?', options: ['Email', 'SMS', 'Email then SMS'] },
      { id: 'followup', label: 'When should follow-up happen?', options: ['After 1 day', 'After 3 days', 'After 7 days'] },
    ],
  },
  {
    id: 'performance',
    title: 'Explain recent performance',
    description: 'Review recent signals and open a suggested analytics view.',
    icon: 'mdi-chart-line-variant',
    prompt: 'Explain what needs attention today.',
    breadcrumb: 'Dashboards > Overview',
    sources: ['Workspace analytics', 'Campaign metrics'],
    questions: [
      { id: 'window', label: 'What time period should I inspect?', options: ['Today', 'Last 7 days', 'Last 30 days'] },
      { id: 'focus', label: 'What should I focus on?', options: ['Revenue', 'Campaign engagement', 'Orders and carts'] },
      { id: 'output', label: 'What output do you want?', options: ['Summary', 'Widget draft', 'Action plan'] },
    ],
  },
  {
    id: 'datasource',
    title: 'Connect a data source',
    description: 'Guide store connection and open the right setup screen.',
    icon: 'mdi-database-sync-outline',
    prompt: 'Help me connect Shopify.',
    breadcrumb: 'App Store > Integrations',
    sources: ['Account permissions', 'Integration docs'],
    questions: [
      { id: 'platform', label: 'Which source are you connecting?', options: ['Shopify', 'Commerce store', 'Custom data source'] },
      { id: 'sync', label: 'Which sync should be enabled?', options: ['Products only', 'Customers and events', 'Products, customers, and orders'] },
      { id: 'mode', label: 'How should we proceed?', options: ['Guided setup', 'Open classic setup', 'Validate existing setup'] },
    ],
  },
]

export function getOnboardingIntent(intentId: string | undefined): OnboardingIntent | undefined {
  return ONBOARDING_INTENTS.find(intent => intent.id === intentId)
}
