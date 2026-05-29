import{U as y,W as h,X as a,f as b,Y as t,Z as s,a as x,F as u,_ as n,$ as m,a5 as w,g as z,ag as C,a3 as p,a7 as D,a6 as V,e as g,j as A,a1 as d}from"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const E={class:"d-flex align-center ga-2 mb-3"},I={class:"text-subtitle-2 font-weight-bold"},L={class:"d-flex flex-column ga-1 mb-3"},N={class:"text-body-2"},_={class:"d-flex ga-2"},v=y({__name:"DvSegmentCard",props:{name:{},rules:{},estimatedSize:{}},emits:["save","preview"],setup(o,{emit:f}){const c=f;return(k,e)=>(d(),h(b,{variant:"outlined",rounded:"lg"},{default:a(()=>[t(A,{class:"pa-4"},{default:a(()=>[s("div",E,[t(x,{size:"32",color:"teal",variant:"tonal"},{default:a(()=>[t(u,{size:"18"},{default:a(()=>[...e[2]||(e[2]=[n("user-search",-1)])]),_:1})]),_:1}),s("div",null,[s("div",I,m(o.name),1),e[3]||(e[3]=s("div",{class:"text-caption text-medium-emphasis"},"Customer Segment",-1))]),t(w),t(z,{size:"x-small",color:"teal",variant:"tonal","prepend-icon":"users"},{default:a(()=>[n(" ~"+m(o.estimatedSize.toLocaleString()),1)]),_:1})]),t(C,{class:"mb-3",style:{opacity:"0.4"}}),e[7]||(e[7]=s("div",{class:"text-caption font-weight-bold text-uppercase mb-2",style:{"letter-spacing":"0.5px","font-size":"var(--mp-typography-fontSize-xs)"}},"Filter Rules",-1)),s("div",L,[(d(!0),p(V,null,D(o.rules,(l,S)=>(d(),p("div",{key:S,class:"d-flex align-center ga-2 pa-2 rounded bg-surface-variant"},[t(u,{size:"14",color:"teal"},{default:a(()=>[...e[4]||(e[4]=[n("filter",-1)])]),_:1}),s("span",N,m(l),1)]))),128))]),s("div",_,[t(g,{color:"teal",variant:"flat",size:"small",class:"text-none flex-grow-1","prepend-icon":"save",onClick:e[0]||(e[0]=l=>c("save"))},{default:a(()=>[...e[5]||(e[5]=[n(" Save Segment ",-1)])]),_:1}),t(g,{variant:"flat",size:"small",class:"text-none",onClick:e[1]||(e[1]=l=>c("preview")),color:"surface"},{default:a(()=>[...e[6]||(e[6]=[n(" Preview ",-1)])]),_:1})])]),_:1})]),_:1}))}});v.__docgenInfo={exportName:"default",displayName:"DvSegmentCard",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"string"}},{name:"rules",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"estimatedSize",required:!0,type:{name:"number"}}],events:[{name:"save"},{name:"preview"}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/src/components/copilot/DvSegmentCard.vue"]};const F={title:"Copilot/DvSegmentCard",component:v,tags:["autodocs"],argTypes:{name:{control:"text",description:"Name of the audience segment"},rules:{description:"Array of rule descriptions defining the segment criteria",control:!1},estimatedSize:{control:"number",description:"Estimated number of contacts matching the segment"}},parameters:{docs:{description:{component:`
## Overview
DvSegmentCard displays a customer segment with its defining rules and estimated size. It's used to preview and manage audience segmentation recommendations from the AI copilot.

## Do's
- Show clear, readable rules in plain language
- Always include estimated segment size
- Use for previewing segment criteria
- Provide actions to save or refine segments
- Use human-readable rule descriptions

## Don'ts
- Don't use overly technical rule syntax
- Don't hide segment size information
- Don't create segments with vague criteria
- Don't use without allowing users to preview results

## Best Practices
- List most important rules first
- Use "AND" logic between rules (all must match)
- Include timeframe context (e.g., "Last 30 Days")
- Show both positive and negative criteria
- Estimate segment size based on actual data
        `}}}},r={args:{name:"High-Value Customers",rules:["Total Spending: Greater than $500","Purchase Frequency: At least 5 purchases","Recent Activity: Last purchase within 60 days","Email Engagement: Opened emails in last 30 days"],estimatedSize:847}},i={args:{name:"Inactive Subscribers - 6+ Months",rules:["Last Purchase: More than 180 days ago","No Email Opens: Last 90 days","Email Delivery Status: Valid and active","Subscription Status: Active (not unsubscribed)"],estimatedSize:2341}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'High-Value Customers',
    rules: ['Total Spending: Greater than $500', 'Purchase Frequency: At least 5 purchases', 'Recent Activity: Last purchase within 60 days', 'Email Engagement: Opened emails in last 30 days'],
    estimatedSize: 847
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Inactive Subscribers - 6+ Months',
    rules: ['Last Purchase: More than 180 days ago', 'No Email Opens: Last 90 days', 'Email Delivery Status: Valid and active', 'Subscription Status: Active (not unsubscribed)'],
    estimatedSize: 2341
  }
}`,...i.parameters?.docs?.source}}};const M=["HighValueCustomers","InactiveSubscribers"];export{r as HighValueCustomers,i as InactiveSubscribers,M as __namedExportsOrder,F as default};
