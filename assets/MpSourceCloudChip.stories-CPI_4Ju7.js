import{U as h,a3 as m,Y as g,X as f,F as y,$ as l,a0 as z,aa as C,c as d,_ as v,a1 as u}from"./iframe-Dzs8NioN.js";import{D as O}from"./metricCatalog-CqofuA24.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const D=["title","aria-label"],b={key:0,class:"mp-source-cloud-chip__label"},p=h({__name:"MpSourceCloudChip",props:{dataSource:{},size:{default:"md"},iconOnly:{type:Boolean,default:!1}},setup(e){const i=e,a=d(()=>O[i.dataSource]),S=d(()=>i.size==="sm"?12:13);return(k,w)=>(u(),m("span",{class:C(["mp-source-cloud-chip",[`mp-source-cloud-chip--${e.size}`,`mp-source-cloud-chip--${e.dataSource}`,{"mp-source-cloud-chip--icon-only":e.iconOnly}]]),title:e.iconOnly?a.value.label:void 0,"aria-label":a.value.label},[g(y,{size:S.value},{default:f(()=>[v(l(a.value.icon),1)]),_:1},8,["size"]),e.iconOnly?z("",!0):(u(),m("span",b,l(a.value.label),1))],10,D))}}),M=_(p,[["__scopeId","data-v-01c6f542"]]);p.__docgenInfo={exportName:"default",displayName:"MpSourceCloudChip",description:"",tags:{},props:[{name:"dataSource",required:!0,type:{name:"DashboardDataSource"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"iconOnly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/src/components/MpSourceCloudChip.vue"]};const E={title:"Data Display/MpSourceCloudChip",component:M,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
The \`MpSourceCloudChip\` component is a small pill that identifies which source cloud a dashboard widget pulls from — Marketing, Commerce, Service, Neto, Contacts, or Analytics.

It reads label and icon from the canonical \`DASHBOARD_SOURCE_META\` map in the dashboards store, so the chip and the rest of the app stay aligned.

### 🟢 Do's
- **Do** place this chip in widget footers or eyebrows so users can immediately see where the data is coming from.
- **Do** use \`size="sm"\` or \`iconOnly\` in tight layouts (KPI cards).

### 🔴 Don'ts
- **Don't** wrap the chip in another colored background — it's intentionally neutral.
- **Don't** use it as a status indicator. Use \`MpStatusChip\` for status semantics.
        `}}},argTypes:{dataSource:{control:"select",options:["commerce","marketing","service","neto","contacts","analytics"]},size:{control:"inline-radio",options:["sm","md"]},iconOnly:{control:"boolean"}}},o={args:{dataSource:"marketing",size:"md"}},s={args:{dataSource:"commerce",size:"md"}},r={args:{dataSource:"service",size:"md"}},t={args:{dataSource:"neto",size:"md"}},c={args:{dataSource:"marketing",size:"sm"}},n={args:{dataSource:"commerce",size:"sm",iconOnly:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    dataSource: 'marketing',
    size: 'md'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    dataSource: 'commerce',
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    dataSource: 'service',
    size: 'md'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    dataSource: 'neto',
    size: 'md'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    dataSource: 'marketing',
    size: 'sm'
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    dataSource: 'commerce',
    size: 'sm',
    iconOnly: true
  }
}`,...n.parameters?.docs?.source}}};const V=["Marketing","Commerce","Service","Neto","SmallSize","IconOnly"];export{s as Commerce,n as IconOnly,o as Marketing,t as Neto,r as Service,c as SmallSize,V as __namedExportsOrder,E as default};
