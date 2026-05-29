import{U as S,W as v,X as n,f as y,Y as t,Z as a,a as C,F as r,_ as s,$ as o,a5 as x,g as c,ag as h,e as u,j as w,a1 as b}from"./iframe-Dzs8NioN.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const T={class:"d-flex align-center ga-2 mb-3"},z={class:"text-subtitle-2 font-weight-bold"},j={class:"d-flex flex-column ga-2 text-body-2"},M={class:"d-flex align-center ga-2"},E={class:"font-weight-medium"},_={class:"d-flex align-center ga-2"},k={class:"font-weight-medium"},A={class:"d-flex align-center ga-2"},V={class:"font-weight-medium"},q={class:"d-flex align-center ga-2"},I={class:"font-weight-medium"},L={class:"d-flex ga-2 mt-4"},p=S({__name:"DvCampaignCard",props:{name:{},subject:{},audience:{},audienceSize:{},sendTime:{},channel:{},status:{}},emits:["launch","edit"],setup(i,{emit:g}){const l=g;return(B,e)=>(b(),v(y,{variant:"outlined",rounded:"lg",class:"campaign-card"},{default:n(()=>[t(w,{class:"pa-4"},{default:n(()=>[a("div",T,[t(C,{size:"32",color:"primary",variant:"tonal"},{default:n(()=>[t(r,{size:"18"},{default:n(()=>[...e[2]||(e[2]=[s("send",-1)])]),_:1})]),_:1}),a("div",null,[a("div",z,o(i.name),1),e[3]||(e[3]=a("div",{class:"text-caption text-medium-emphasis"},"Campaign Draft",-1))]),t(x),t(c,{size:"x-small",color:"warning",variant:"tonal"},{default:n(()=>[...e[4]||(e[4]=[s("Draft",-1)])]),_:1})]),t(h,{class:"mb-3",style:{opacity:"0.4"}}),a("div",j,[a("div",M,[t(r,{size:"14",color:"medium-emphasis"},{default:n(()=>[...e[5]||(e[5]=[s("text",-1)])]),_:1}),e[6]||(e[6]=a("span",{class:"text-medium-emphasis",style:{"min-width":"70px"}},"Subject",-1)),a("span",E,o(i.subject),1)]),a("div",_,[t(r,{size:"14",color:"medium-emphasis"},{default:n(()=>[...e[7]||(e[7]=[s("users",-1)])]),_:1}),e[8]||(e[8]=a("span",{class:"text-medium-emphasis",style:{"min-width":"70px"}},"Audience",-1)),a("span",k,o(i.audience),1),t(c,{size:"x-small",variant:"tonal",color:"primary"},{default:n(()=>[s(o(i.audienceSize.toLocaleString()),1)]),_:1})]),a("div",A,[t(r,{size:"14",color:"medium-emphasis"},{default:n(()=>[...e[9]||(e[9]=[s("clock",-1)])]),_:1}),e[10]||(e[10]=a("span",{class:"text-medium-emphasis",style:{"min-width":"70px"}},"Send",-1)),a("span",V,o(i.sendTime),1)]),a("div",q,[t(r,{size:"14",color:"medium-emphasis"},{default:n(()=>[...e[11]||(e[11]=[s("send",-1)])]),_:1}),e[12]||(e[12]=a("span",{class:"text-medium-emphasis",style:{"min-width":"70px"}},"Channel",-1)),a("span",I,o(i.channel),1)])]),a("div",L,[t(u,{color:"primary",variant:"flat",size:"small",class:"text-none flex-grow-1","prepend-icon":"rocket",onClick:e[0]||(e[0]=f=>l("launch"))},{default:n(()=>[...e[13]||(e[13]=[s(" Launch Campaign ",-1)])]),_:1}),t(u,{variant:"flat",size:"small",class:"text-none",onClick:e[1]||(e[1]=f=>l("edit")),color:"surface"},{default:n(()=>[...e[14]||(e[14]=[s(" Edit ",-1)])]),_:1})])]),_:1})]),_:1}))}}),N=D(p,[["__scopeId","data-v-50f38e78"]]);p.__docgenInfo={exportName:"default",displayName:"DvCampaignCard",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"string"}},{name:"subject",required:!0,type:{name:"string"}},{name:"audience",required:!0,type:{name:"string"}},{name:"audienceSize",required:!0,type:{name:"number"}},{name:"sendTime",required:!0,type:{name:"string"}},{name:"channel",required:!0,type:{name:"string"}},{name:"status",required:!1,type:{name:"string"}}],events:[{name:"launch"},{name:"edit"}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/src/components/copilot/DvCampaignCard.vue"]};const $={title:"Copilot/DvCampaignCard",component:N,tags:["autodocs"],argTypes:{name:{control:"text",description:"Campaign name"},subject:{control:"text",description:"Email subject line or campaign headline"},audience:{control:"text",description:"Target audience or segment name"},audienceSize:{control:"number",description:"Number of contacts in the target audience"},sendTime:{control:"text",description:"Scheduled send time or delivery window"},channel:{control:"text",description:"Communication channel (Email, SMS, Push, etc.)"},status:{control:"select",options:["draft","scheduled","sent","paused"],description:"Current campaign status"}},parameters:{docs:{description:{component:`
## Overview
DvCampaignCard displays a summary of a marketing campaign with key details like subject, audience, and send time. It provides quick actions to launch or edit the campaign.

## Do's
- Show complete campaign overview at a glance
- Use for listing suggested or recent campaigns
- Always include audience size for context
- Display channel prominently
- Use status badges to indicate campaign state

## Don'ts
- Don't truncate subject lines unnecessarily
- Don't hide audience size information
- Don't use without a clear action button
- Don't show incomplete campaign data

## Best Practices
- Sort campaigns by send time or status
- Show estimated reach or engagement projections
- Include preview of subject line or message content
- Pair with DvInsightCard for performance metrics
        `}}}},d={args:{name:"Spring Sale - Email Campaign",subject:"Limited Time: Save 30% on Spring Collection",audience:"Active Customers (Last 90 Days)",audienceSize:5234,sendTime:"Tomorrow at 10:00 AM EST",channel:"Email",status:"draft"}},m={args:{name:"Cart Recovery - SMS",subject:"Your items are waiting! Complete your purchase today.",audience:"Cart Abandoners (Last 7 Days)",audienceSize:1847,sendTime:"Today at 2:30 PM EST",channel:"SMS",status:"scheduled"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Spring Sale - Email Campaign',
    subject: 'Limited Time: Save 30% on Spring Collection',
    audience: 'Active Customers (Last 90 Days)',
    audienceSize: 5234,
    sendTime: 'Tomorrow at 10:00 AM EST',
    channel: 'Email',
    status: 'draft'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Cart Recovery - SMS',
    subject: 'Your items are waiting! Complete your purchase today.',
    audience: 'Cart Abandoners (Last 7 Days)',
    audienceSize: 1847,
    sendTime: 'Today at 2:30 PM EST',
    channel: 'SMS',
    status: 'scheduled'
  }
}`,...m.parameters?.docs?.source}}};const F=["Default","SMSCampaign"];export{d as Default,m as SMSCampaign,F as __namedExportsOrder,$ as default};
