import{U as h,W as y,X as o,ab as b,f as C,c as x,Y as a,Z as n,a as D,F as w,_ as l,$ as r,e as p,j as L,a1 as A}from"./iframe-Dzs8NioN.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const S={class:"d-flex align-start ga-3"},T={class:"flex-grow-1"},I={class:"text-subtitle-2 font-weight-bold mb-1"},V={class:"text-body-2 text-medium-emphasis mb-3"},k={class:"d-flex ga-2"},u=h({__name:"DvActionCard",props:{icon:{},title:{},description:{},confirmLabel:{},color:{}},emits:["confirm","cancel"],setup(e,{emit:f}){const d=e,g=x(()=>d.color?{borderLeft:`3px solid ${d.color}`}:void 0),m=f;return(U,t)=>(A(),y(C,{variant:"outlined",rounded:"lg",class:"dv-action-card",style:b(g.value)},{default:o(()=>[a(L,{class:"pa-4"},{default:o(()=>[n("div",S,[a(D,{color:e.color||"primary",variant:"tonal",size:"36"},{default:o(()=>[a(w,{size:"20"},{default:o(()=>[l(r(e.icon||"zap"),1)]),_:1})]),_:1},8,["color"]),n("div",T,[n("div",I,r(e.title),1),n("div",V,r(e.description),1),n("div",k,[a(p,{color:e.color||"primary",variant:"flat",size:"small",class:"text-none",onClick:t[0]||(t[0]=v=>m("confirm"))},{default:o(()=>[l(r(e.confirmLabel||"Confirm"),1)]),_:1},8,["color"]),a(p,{variant:"text",size:"small",class:"text-none",onClick:t[1]||(t[1]=v=>m("cancel"))},{default:o(()=>[...t[2]||(t[2]=[l("Cancel",-1)])]),_:1})])])])]),_:1})]),_:1},8,["style"]))}}),N=_(u,[["__scopeId","data-v-06ea9468"]]);u.__docgenInfo={exportName:"default",displayName:"DvActionCard",description:"",tags:{},props:[{name:"icon",required:!1,type:{name:"string"}},{name:"title",required:!0,type:{name:"string"}},{name:"description",required:!0,type:{name:"string"}},{name:"confirmLabel",required:!1,type:{name:"string"}},{name:"color",required:!1,type:{name:"string"}}],events:[{name:"confirm"},{name:"cancel"}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/src/components/copilot/DvActionCard.vue"]};const Y={title:"Copilot/DvActionCard",component:N,tags:["autodocs"],argTypes:{icon:{control:"text",description:"Lucide icon name for the action card"},title:{control:"text",description:"Main title of the action card"},description:{control:"text",description:"Descriptive text explaining the action"},confirmLabel:{control:"text",description:'Label for the confirm button (default: "Confirm")'},color:{control:"select",options:["primary","success","warning","error","info"],description:"Color theme for the action card"}},parameters:{docs:{description:{component:`
## Overview
DvActionCard is a call-to-action component that presents a single action to the user with confirmation and cancellation options. It's designed for the AI copilot interface to suggest or prompt user actions.

## Do's
- Use for clear, single actions (not multi-step)
- Always provide a descriptive explanation
- Use appropriate colors (error for destructive actions)
- Keep titles concise and actionable
- Use relevant Lucide icons to reinforce the action

## Don'ts
- Don't use for multiple conflicting actions
- Don't use overly long descriptions
- Don't change color meanings (error = destructive)
- Don't use without an icon for clarity

## Best Practices
- Use 'error' color only for destructive actions (delete, archive, etc.)
- Use 'success' color for positive actions (launch campaign, publish content)
- Use 'primary' color for standard actions
- Pair with DvInsightCard for related insights
        `}}}},i={args:{icon:"rocket",title:"Launch Campaign",description:"Your email campaign is ready to send to 5,234 subscribers. Review settings and launch when ready.",confirmLabel:"Launch Now",color:"primary"}},s={args:{icon:"save",title:"Save as Template",description:"Save this campaign configuration as a reusable template for future campaigns. You can apply it to similar audiences anytime.",confirmLabel:"Save Template",color:"success"}},c={args:{icon:"trash-2",title:"Delete Campaign",description:"This action cannot be undone. All analytics data for this campaign will be permanently removed.",confirmLabel:"Delete Campaign",color:"error"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'rocket',
    title: 'Launch Campaign',
    description: 'Your email campaign is ready to send to 5,234 subscribers. Review settings and launch when ready.',
    confirmLabel: 'Launch Now',
    color: 'primary'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'save',
    title: 'Save as Template',
    description: 'Save this campaign configuration as a reusable template for future campaigns. You can apply it to similar audiences anytime.',
    confirmLabel: 'Save Template',
    color: 'success'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'trash-2',
    title: 'Delete Campaign',
    description: 'This action cannot be undone. All analytics data for this campaign will be permanently removed.',
    confirmLabel: 'Delete Campaign',
    color: 'error'
  }
}`,...c.parameters?.docs?.source}}};const $=["Default","CustomColor","DangerAction"];export{s as CustomColor,c as DangerAction,i as Default,$ as __namedExportsOrder,Y as default};
