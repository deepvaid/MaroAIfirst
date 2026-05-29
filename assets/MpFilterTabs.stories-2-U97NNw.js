import{r as i,w as d}from"./iframe-Dzs8NioN.js";import{M as s}from"./MpFilterTabs-CnzaI3ln.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const n=[{label:"All",key:"all",count:1471},{label:"Completed",key:"completed",count:892},{label:"Processing",key:"processing",count:234},{label:"Not Fulfilled",key:"unfulfilled",count:345}],b=[{label:"All",key:"all",count:8},{label:"Drafts",key:"drafts",count:2},{label:"Scheduled",key:"scheduled",count:1},{label:"Sent",key:"sent",count:5}],u=[{label:"Overview",key:"overview"},{label:"Email",key:"email"},{label:"Commerce",key:"commerce"},{label:"Audience",key:"audience"}],m=[{label:"All",key:"all",count:1471},{label:"Open",key:"open",count:234},{label:"Paid",key:"paid",count:892},{label:"Fulfilled",key:"fulfilled",count:736},{label:"Unfulfilled",key:"unfulfilled",count:345},{label:"Returned",key:"returned",count:42},{label:"Refunded",key:"refunded",count:19},{label:"Archived",key:"archived",count:88}],v={title:"Navigation/MpFilterTabs",component:s,tags:["autodocs"],args:{modelValue:"all",tabs:n,ariaLabel:"Filter orders"},argTypes:{modelValue:{control:"text",description:"Active tab key (v-model)"},tabs:{control:"object",description:"Array of tab objects with label, key, and optional count"}},render:t=>({components:{MpFilterTabs:s},setup(){const o=i(t.modelValue);return d(()=>t.modelValue,c=>{o.value=c}),{args:t,active:o}},template:`
      <section style="padding:24px;background:rgb(var(--v-theme-background));min-height:180px;">
        <MpFilterTabs
          v-model="active"
          :tabs="args.tabs"
          :aria-label="args.ariaLabel"
        />
        <p class="text-body-2 text-medium-emphasis mt-4">Active tab: {{ active }}</p>
      </section>
    `})},e={args:{modelValue:"all",tabs:n,ariaLabel:"Filter orders"}},a={args:{modelValue:"all",tabs:b,ariaLabel:"Filter campaigns"}},l={args:{modelValue:"overview",tabs:u,ariaLabel:"Filter workspace sections"}},r={args:{modelValue:"all",tabs:m,ariaLabel:"Filter many order states"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'all',
    tabs: orderTabs,
    ariaLabel: 'Filter orders'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'all',
    tabs: campaignTabs,
    ariaLabel: 'Filter campaigns'
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'overview',
    tabs: noCountTabs,
    ariaLabel: 'Filter workspace sections'
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'all',
    tabs: manyTabs,
    ariaLabel: 'Filter many order states'
  }
}`,...r.parameters?.docs?.source}}};const f=["OrderTabs","CampaignTabs","NoCounts","ManyTabs"];export{a as CampaignTabs,r as ManyTabs,l as NoCounts,e as OrderTabs,f as __namedExportsOrder,v as default};
