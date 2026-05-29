import{M as t}from"./MpStatusChip-BAA3SA7M.js";import"./iframe-Dzs8NioN.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Data Display/MpStatusChip",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
The \`MpStatusChip\` displays the current state of an entity. It automatically applies appropriate Maropost semantic colors based on the text string matching known statuses in the business logic.

### 🟢 Do's
- **Do** always provide the specific \`type\` (e.g., 'order', 'fulfillment', 'campaign'). This is crucial because a 'Pending' status might mean different things (and need different colors) across different domains.
- **Do** use \`size="small"\` when placing chips inside Data Tables to conserve vertical space.
- **Do** use the \`showIcon\` prop explicitly for Fulfillment statuses, where the visual icon adds critical scanning speed for warehouse teams.

### 🔴 Don'ts
- **Don't** manually override colors via CSS or props. The component is deliberately rigid to enforce platform-wide color consistency for specific status terms.
- **Don't** use this component for generic tags (like "VIP Customer" or "New"). Use standard \`v-chip\` for general tagging; \`MpStatusChip\` is strictly for workflow states.

### 💡 Best Practices
- **Fallback:** If a status string is passed that the component doesn't recognize for the given \`type\`, it safely defaults to a neutral gray layout. 
- **Consistency:** If you are adding a new business status to the backend, ensure you also update the \`MpStatusChip\` logic maps to support it.
        `}}},argTypes:{status:{control:"text"},type:{control:"select",options:["order","fulfillment","payment","campaign","contact","ticket","coupon","general"]},size:{control:"select",options:["x-small","small","default"]},variant:{control:"select",options:["flat","tonal","outlined"]},showIcon:{control:"boolean"}}},e={args:{status:"Processing",type:"order"}},s={args:{status:"Shipped",type:"fulfillment",showIcon:!0}},a={render:()=>({components:{MpStatusChip:t},template:`
      <div class="d-flex flex-wrap gap-2 align-center">
        <MpStatusChip status="Pending" type="order" />
        <MpStatusChip status="Processing" type="order" />
        <MpStatusChip status="Completed" type="order" />
        <MpStatusChip status="Cancelled" type="order" />
        <MpStatusChip status="Refunded" type="order" />
        <MpStatusChip status="On Hold" type="order" />
      </div>
    `}),args:{}},p={render:()=>({components:{MpStatusChip:t},template:`
      <div class="d-flex flex-wrap gap-2 align-center">
        <MpStatusChip status="Unapproved" type="fulfillment" showIcon />
        <MpStatusChip status="Not Ready" type="fulfillment" showIcon />
        <MpStatusChip status="Ready For Fulfillment" type="fulfillment" showIcon />
        <MpStatusChip status="Shipped" type="fulfillment" showIcon />
        <MpStatusChip status="Return Requested" type="fulfillment" showIcon />
        <MpStatusChip status="Cancelled" type="fulfillment" showIcon />
      </div>
    `}),args:{}},n={render:()=>({components:{MpStatusChip:t},template:`
      <div class="d-flex flex-wrap gap-2 align-center">
        <MpStatusChip status="Not Paid" type="payment" />
        <MpStatusChip status="Paid" type="payment" />
        <MpStatusChip status="Requires Action" type="payment" />
      </div>
    `}),args:{}},i={render:()=>({components:{MpStatusChip:t},template:`
      <div class="d-flex flex-wrap gap-2 align-center">
        <MpStatusChip status="Draft" type="campaign" />
        <MpStatusChip status="Scheduled" type="campaign" />
        <MpStatusChip status="Sending" type="campaign" />
        <MpStatusChip status="Sent" type="campaign" />
        <MpStatusChip status="Stopped" type="campaign" />
      </div>
    `}),args:{}},r={render:()=>({components:{MpStatusChip:t},template:`
      <div>
        <h4 class="text-subtitle-2 mb-2">Order</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Processing" type="order" />
          <MpStatusChip status="Completed" type="order" />
          <MpStatusChip status="Cancelled" type="order" />
        </div>
        <h4 class="text-subtitle-2 mb-2">Fulfillment</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Shipped" type="fulfillment" showIcon />
          <MpStatusChip status="Ready For Fulfillment" type="fulfillment" showIcon />
          <MpStatusChip status="Unapproved" type="fulfillment" showIcon />
        </div>
        <h4 class="text-subtitle-2 mb-2">Payment</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Paid" type="payment" />
          <MpStatusChip status="Not Paid" type="payment" />
          <MpStatusChip status="Requires Action" type="payment" />
        </div>
        <h4 class="text-subtitle-2 mb-2">Campaign</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Draft" type="campaign" />
          <MpStatusChip status="Sent" type="campaign" />
          <MpStatusChip status="Stopped" type="campaign" />
        </div>
        <h4 class="text-subtitle-2 mb-2">Ticket</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Open" type="ticket" />
          <MpStatusChip status="In Progress" type="ticket" />
          <MpStatusChip status="Resolved" type="ticket" />
          <MpStatusChip status="Closed" type="ticket" />
        </div>
      </div>
    `}),args:{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'Processing',
    type: 'order'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'Shipped',
    type: 'fulfillment',
    showIcon: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    template: \`
      <div class="d-flex flex-wrap gap-2 align-center">
        <MpStatusChip status="Pending" type="order" />
        <MpStatusChip status="Processing" type="order" />
        <MpStatusChip status="Completed" type="order" />
        <MpStatusChip status="Cancelled" type="order" />
        <MpStatusChip status="Refunded" type="order" />
        <MpStatusChip status="On Hold" type="order" />
      </div>
    \`
  }),
  args: {} as any
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    template: \`
      <div class="d-flex flex-wrap gap-2 align-center">
        <MpStatusChip status="Unapproved" type="fulfillment" showIcon />
        <MpStatusChip status="Not Ready" type="fulfillment" showIcon />
        <MpStatusChip status="Ready For Fulfillment" type="fulfillment" showIcon />
        <MpStatusChip status="Shipped" type="fulfillment" showIcon />
        <MpStatusChip status="Return Requested" type="fulfillment" showIcon />
        <MpStatusChip status="Cancelled" type="fulfillment" showIcon />
      </div>
    \`
  }),
  args: {} as any
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    template: \`
      <div class="d-flex flex-wrap gap-2 align-center">
        <MpStatusChip status="Not Paid" type="payment" />
        <MpStatusChip status="Paid" type="payment" />
        <MpStatusChip status="Requires Action" type="payment" />
      </div>
    \`
  }),
  args: {} as any
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    template: \`
      <div class="d-flex flex-wrap gap-2 align-center">
        <MpStatusChip status="Draft" type="campaign" />
        <MpStatusChip status="Scheduled" type="campaign" />
        <MpStatusChip status="Sending" type="campaign" />
        <MpStatusChip status="Sent" type="campaign" />
        <MpStatusChip status="Stopped" type="campaign" />
      </div>
    \`
  }),
  args: {} as any
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MpStatusChip
    },
    template: \`
      <div>
        <h4 class="text-subtitle-2 mb-2">Order</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Processing" type="order" />
          <MpStatusChip status="Completed" type="order" />
          <MpStatusChip status="Cancelled" type="order" />
        </div>
        <h4 class="text-subtitle-2 mb-2">Fulfillment</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Shipped" type="fulfillment" showIcon />
          <MpStatusChip status="Ready For Fulfillment" type="fulfillment" showIcon />
          <MpStatusChip status="Unapproved" type="fulfillment" showIcon />
        </div>
        <h4 class="text-subtitle-2 mb-2">Payment</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Paid" type="payment" />
          <MpStatusChip status="Not Paid" type="payment" />
          <MpStatusChip status="Requires Action" type="payment" />
        </div>
        <h4 class="text-subtitle-2 mb-2">Campaign</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Draft" type="campaign" />
          <MpStatusChip status="Sent" type="campaign" />
          <MpStatusChip status="Stopped" type="campaign" />
        </div>
        <h4 class="text-subtitle-2 mb-2">Ticket</h4>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <MpStatusChip status="Open" type="ticket" />
          <MpStatusChip status="In Progress" type="ticket" />
          <MpStatusChip status="Resolved" type="ticket" />
          <MpStatusChip status="Closed" type="ticket" />
        </div>
      </div>
    \`
  }),
  args: {} as any
}`,...r.parameters?.docs?.source}}};const m=["Default","WithIcon","OrderStatuses","FulfillmentStatuses","PaymentStatuses","CampaignStatuses","AllTypes"];export{r as AllTypes,i as CampaignStatuses,e as Default,p as FulfillmentStatuses,a as OrderStatuses,n as PaymentStatuses,s as WithIcon,m as __namedExportsOrder,d as default};
