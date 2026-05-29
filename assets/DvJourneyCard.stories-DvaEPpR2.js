import{U as C,W as y,X as t,f as W,Y as n,Z as a,a as g,F as c,_ as s,$ as p,a3 as b,a7 as D,a6 as f,a0 as z,e as w,j as A,a1 as r}from"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const _={class:"d-flex align-center ga-2 mb-3"},k={class:"text-subtitle-2 font-weight-bold"},R={class:"journey-flow d-flex align-center ga-1 pa-3 rounded-lg bg-surface-variant",style:{"overflow-x":"auto"}},V={class:"journey-step d-flex flex-column align-center",style:{"min-width":"56px"}},I={class:"text-caption text-center",style:{"font-size":"var(--mp-typography-fontSize-xs)","line-height":"var(--mp-typography-lineHeight-tight)","max-width":"60px"}},j={class:"d-flex ga-2 mt-3"},v=C({__name:"DvJourneyCard",props:{name:{},steps:{}},emits:["activate","edit"],setup(d,{emit:S}){const m=S,h={trigger:"zap",wait:"hourglass",email:"mail",sms:"message-circle",condition:"git-branch",action:"settings"},x={trigger:"warning",wait:"secondary",email:"primary",sms:"success",condition:"secondary",action:"info"};return(H,e)=>(r(),y(W,{variant:"outlined",rounded:"lg"},{default:t(()=>[n(A,{class:"pa-4"},{default:t(()=>[a("div",_,[n(g,{size:"32",color:"deep-purple",variant:"tonal"},{default:t(()=>[n(c,{size:"18"},{default:t(()=>[...e[2]||(e[2]=[s("network",-1)])]),_:1})]),_:1}),a("div",null,[a("div",k,p(d.name),1),e[3]||(e[3]=a("div",{class:"text-caption text-medium-emphasis"},"Journey Automation",-1))])]),a("div",R,[(r(!0),b(f,null,D(d.steps,(o,u)=>(r(),b(f,{key:u},[a("div",V,[n(g,{color:x[o.type],size:"32",class:"mb-1"},{default:t(()=>[n(c,{size:"16",color:"white"},{default:t(()=>[s(p(h[o.type]),1)]),_:2},1024)]),_:2},1032,["color"]),a("span",I,p(o.label),1)]),u<d.steps.length-1?(r(),y(c,{key:0,size:"16",color:"medium-emphasis",class:"mx-0"},{default:t(()=>[...e[4]||(e[4]=[s("chevron-right",-1)])]),_:1})):z("",!0)],64))),128))]),a("div",j,[n(w,{color:"deep-purple",variant:"flat",size:"small",class:"text-none flex-grow-1","prepend-icon":"play",onClick:e[0]||(e[0]=o=>m("activate"))},{default:t(()=>[...e[5]||(e[5]=[s(" Activate Journey ",-1)])]),_:1}),n(w,{variant:"flat",size:"small",class:"text-none",onClick:e[1]||(e[1]=o=>m("edit")),color:"surface"},{default:t(()=>[...e[6]||(e[6]=[s(" Customize ",-1)])]),_:1})])]),_:1})]),_:1}))}});v.__docgenInfo={exportName:"default",displayName:"DvJourneyCard",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"string"}},{name:"steps",required:!0,type:{name:"Array",elements:[{name:`{
  type: 'trigger' | 'wait' | 'email' | 'sms' | 'condition' | 'action'
  label: string
}`}]}}],events:[{name:"activate"},{name:"edit"}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/src/components/copilot/DvJourneyCard.vue"]};const M={title:"Copilot/DvJourneyCard",component:v,tags:["autodocs"],argTypes:{name:{control:"text",description:"Name of the journey/automation sequence"},steps:{description:"Array of journey steps with type and label",control:!1}},parameters:{docs:{description:{component:`
## Overview
DvJourneyCard displays the structure of an automated customer journey or workflow sequence. It visualizes the flow of triggers, actions, and conditions in a vertically stacked format.

## Do's
- Use for visualizing automated marketing workflows
- Show clear step-by-step progression
- Use appropriate step types (trigger, action, condition, etc.)
- Include clear labels for each step
- Use for journey recommendations and templates

## Don'ts
- Don't use for complex branching logic without visual indicators
- Don't mix unrelated journeys in one card
- Don't use without clear step labels
- Don't show more than 8-10 steps in a single view

## Best Practices
- Always start with a trigger step
- Include conditions for personalization
- Show both email and SMS actions where appropriate
- Use descriptive labels for wait periods (e.g., "Wait 2 days")
- Group related journeys by business purpose (onboarding, retention, etc.)
        `}}}},i={args:{name:"Welcome Onboarding Series",steps:[{type:"trigger",label:"New Subscriber Signup"},{type:"email",label:"Send Welcome Email"},{type:"wait",label:"Wait 1 Day"},{type:"email",label:"Send Product Recommendations"},{type:"wait",label:"Wait 3 Days"},{type:"condition",label:"Has Made Purchase?"},{type:"action",label:"Update Segment: VIP Customers"}]}},l={args:{name:"Cart Abandonment Recovery",steps:[{type:"trigger",label:"Cart Abandoned (30+ min)"},{type:"wait",label:"Wait 1 Hour"},{type:"email",label:"Send Cart Reminder Email"},{type:"wait",label:"Wait 24 Hours"},{type:"condition",label:"Was Cart Recovered?"},{type:"email",label:"Send Second Reminder with 10% Off"},{type:"wait",label:"Wait 48 Hours"},{type:"sms",label:"Send Final SMS with Discount Code"}]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Welcome Onboarding Series',
    steps: [{
      type: 'trigger',
      label: 'New Subscriber Signup'
    }, {
      type: 'email',
      label: 'Send Welcome Email'
    }, {
      type: 'wait',
      label: 'Wait 1 Day'
    }, {
      type: 'email',
      label: 'Send Product Recommendations'
    }, {
      type: 'wait',
      label: 'Wait 3 Days'
    }, {
      type: 'condition',
      label: 'Has Made Purchase?'
    }, {
      type: 'action',
      label: 'Update Segment: VIP Customers'
    }]
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Cart Abandonment Recovery',
    steps: [{
      type: 'trigger',
      label: 'Cart Abandoned (30+ min)'
    }, {
      type: 'wait',
      label: 'Wait 1 Hour'
    }, {
      type: 'email',
      label: 'Send Cart Reminder Email'
    }, {
      type: 'wait',
      label: 'Wait 24 Hours'
    }, {
      type: 'condition',
      label: 'Was Cart Recovered?'
    }, {
      type: 'email',
      label: 'Send Second Reminder with 10% Off'
    }, {
      type: 'wait',
      label: 'Wait 48 Hours'
    }, {
      type: 'sms',
      label: 'Send Final SMS with Discount Code'
    }]
  }
}`,...l.parameters?.docs?.source}}};const P=["WelcomeSeries","AbandonedCartRecovery"];export{l as AbandonedCartRecovery,i as WelcomeSeries,P as __namedExportsOrder,M as default};
