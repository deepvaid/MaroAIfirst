import{M as r}from"./MpEmptyState-lme62np-.js";import"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Feedback/MpEmptyState",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
The \`MpEmptyState\` component is used when a container (like a table, list, or dashboard widget) has no data to display.

### 🟢 Do's
- **Do** provide a helpful, action-oriented description explaining *why* it's empty and *what* to do next.
- **Do** include a primary action button (\`action-label\` and \`@action\`) if the user has permission to create the missing item.
- **Do** select an appropriate Material Design icon (\`icon\` prop) that semantically relates to the missing content (e.g., \`users\` for missing contacts).

### 🔴 Don'ts
- **Don't** leave users dead-ended. Always provide a path forward, even if it's just "Clear filters" or a link to documentation.
- **Don't** blame the user. Say "No orders found for this search" rather than "You searched wrong."
- **Don't** use overly large or complex custom illustrations if the standard icon + text format suffices, to maintain consistency.

### 💡 Best Practices
- **Context:** If the empty state is caused by active search/filters yielding zero results, the action button should clear those filters.
- **First Use:** For "first use" scenarios (zero data ever created), the action button should be the primary "Create New" workflow.
        `}}},argTypes:{icon:{control:"text"},title:{control:"text"},description:{control:"text"},actionLabel:{control:"text"},actionIcon:{control:"text"}}},e={args:{icon:"package",title:"No orders yet",description:"Once customers start placing orders, they will appear here.",actionLabel:"Create Draft Order",actionIcon:"plus"}},t={args:{icon:"mail",title:"No campaigns yet",description:"Create your first email campaign to engage your audience.",actionLabel:"New Campaign",actionIcon:"plus"}},a={args:{icon:"search",title:"No results found",description:"Try adjusting your search or filter criteria."}},o={args:{icon:"users",title:"No contacts yet",description:"Import contacts or add them manually to start building your audience.",actionLabel:"Import Contacts",actionIcon:"upload"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'package',
    title: 'No orders yet',
    description: 'Once customers start placing orders, they will appear here.',
    actionLabel: 'Create Draft Order',
    actionIcon: 'plus'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'mail',
    title: 'No campaigns yet',
    description: 'Create your first email campaign to engage your audience.',
    actionLabel: 'New Campaign',
    actionIcon: 'plus'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    title: 'No results found',
    description: 'Try adjusting your search or filter criteria.'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'users',
    title: 'No contacts yet',
    description: 'Import contacts or add them manually to start building your audience.',
    actionLabel: 'Import Contacts',
    actionIcon: 'upload'
  }
}`,...o.parameters?.docs?.source}}};const p=["Default","Campaigns","SearchNoResults","Contacts"];export{t as Campaigns,o as Contacts,e as Default,a as SearchNoResults,p as __namedExportsOrder,l as default};
