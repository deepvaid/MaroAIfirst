import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAccountsStore } from '@/stores/useAccounts'
import type { AssistantAction, AssistantPageContext } from '../services/assistantChat'

function action(id: string, label: string, kind: 'read' | 'write', prompt: string, routeName?: string): AssistantAction {
  return { id, label, kind, prompt, routeName }
}

function contextForRoute(routeName: string | undefined, accountName: string): Omit<AssistantPageContext, 'accountId' | 'accountName'> {
  if (routeName?.includes('Campaign')) {
    return {
      pageKey: 'campaigns',
      pageLabel: 'Campaigns',
      readinessLabel: `${accountName} has contacts and templates ready for a reviewable campaign draft.`,
      sources: ['Campaign metrics', 'Contact lists', 'Brand content'],
      suggestedPrompts: [
        'Draft a campaign for my most engaged contacts',
        'Explain which campaign needs attention',
        'Create three subject line options',
      ],
      nextSteps: [
        action('draft-campaign', 'Draft campaign', 'write', 'Draft a campaign I can review.', 'CreateCampaign'),
        action('review-audience', 'Review audience', 'read', 'Review the best audience for this campaign.', 'AllContacts'),
        action('explain-performance', 'Explain performance', 'read', 'Explain recent campaign performance.', 'CampaignReports'),
      ],
    }
  }

  if (routeName?.includes('Contact') || routeName === 'AllContacts' || routeName === 'Segments') {
    return {
      pageKey: 'contacts',
      pageLabel: 'Contacts',
      readinessLabel: `${accountName} can segment contacts before launching automations.`,
      sources: ['Contact profiles', 'Lists', 'Segments'],
      suggestedPrompts: [
        'Find my best first campaign audience',
        'Create a VIP segment draft',
        'Summarize contact growth',
      ],
      nextSteps: [
        action('review-audience', 'Review audience', 'read', 'Review my best first audience.', 'AllContacts'),
        action('create-segment', 'Create segment', 'write', 'Create a reviewable segment draft.', 'Segments'),
        action('import-contacts', 'Import contacts', 'write', 'Help me import contacts safely.', 'ContactLists'),
      ],
    }
  }

  if (routeName?.includes('Product') || routeName === 'Inventory') {
    return {
      pageKey: 'products',
      pageLabel: 'Products',
      readinessLabel: `${accountName} should verify catalog quality before commerce campaigns.`,
      sources: ['Products', 'Inventory', 'Recommendations'],
      suggestedPrompts: [
        'Find product gaps before launch',
        'Draft better product copy',
        'Create a bundle idea',
      ],
      nextSteps: [
        action('review-products', 'Review products', 'read', 'Review my catalog readiness.', 'Products'),
        action('draft-product-copy', 'Draft copy', 'write', 'Draft improved product copy for review.', 'Products'),
        action('create-bundle', 'Create bundle', 'write', 'Create a bundle idea I can review.', 'Coupons'),
      ],
    }
  }

  if (routeName?.includes('Order') || routeName === 'Fulfillments') {
    return {
      pageKey: 'orders',
      pageLabel: 'Orders',
      readinessLabel: `${accountName} can use order and fulfillment signals to prioritize service.`,
      sources: ['Orders', 'Fulfillments', 'Customer history'],
      suggestedPrompts: [
        'Summarize delayed orders',
        'Find orders needing attention',
        'Explain fulfillment bottlenecks',
      ],
      nextSteps: [
        action('summarize-orders', 'Summarize orders', 'read', 'Summarize orders that need attention.', 'SalesOrders'),
        action('review-fulfillment', 'Review fulfillment', 'read', 'Review fulfillment bottlenecks.', 'Fulfillments'),
        action('prepare-follow-up', 'Prepare follow-up', 'write', 'Prepare customer follow-up copy for review.', 'Tickets'),
      ],
    }
  }

  if (routeName?.includes('Dashboard') || routeName?.includes('Analytics') || routeName === 'Dashboard') {
    return {
      pageKey: 'dashboard',
      pageLabel: 'Dashboard',
      readinessLabel: `${accountName} is about 60% ready: reporting is live, but launch tasks still need review.`,
      sources: ['Workspace analytics', 'Campaign metrics', 'Commerce signals'],
      suggestedPrompts: [
        'What should I do first to launch?',
        'Explain what needs attention today',
        'Create a revenue by channel widget',
      ],
      nextSteps: [
        action('add-products', 'Add products', 'write', 'Help me add or verify products.', 'Products'),
        action('set-up-payments', 'Set up payments', 'write', 'Help me set up payments.', 'StoreSetup'),
        action('connect-domain', 'Connect domain', 'write', 'Help me connect my domain.', 'StoreSetup'),
        action('explain-performance', 'Explain performance', 'read', 'Explain recent performance.', 'Dashboard'),
      ],
    }
  }

  return {
    pageKey: 'workspace',
    pageLabel: 'Workspace',
    readinessLabel: `${accountName} is ready for a guided Da Vinci task.`,
    sources: ['Workspace data', 'Help docs'],
    suggestedPrompts: [
      'What should I do next?',
      'Create a campaign plan',
      'Explain what needs attention',
    ],
    nextSteps: [
      action('create-campaign', 'Create campaign', 'write', 'Create a campaign plan.', 'CreateCampaign'),
      action('import-contacts', 'Import contacts', 'write', 'Help me import contacts.', 'ContactLists'),
      action('explain-performance', 'Explain performance', 'read', 'Explain recent performance.', 'Dashboard'),
    ],
  }
}

export function useAssistantContext() {
  const route = useRoute()
  const accountsStore = useAccountsStore()

  const accountId = computed(() => {
    const routeAccountId = Array.isArray(route.params.accountId) ? route.params.accountId[0] : route.params.accountId
    return routeAccountId || accountsStore.activeId
  })

  const accountName = computed(() => accountsStore.activeAccount?.name ?? 'this workspace')

  const context = computed<AssistantPageContext>(() => ({
    accountId: accountId.value,
    accountName: accountName.value,
    ...contextForRoute(route.name?.toString(), accountName.value),
  }))

  return {
    context,
  }
}
