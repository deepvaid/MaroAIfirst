import{r as i,w as l}from"./iframe-DScATqdl.js";import{_ as o}from"./MbBreadcrumbs-D79qnRe5.js";import"./preload-helper-PPVm8Dsz.js";const d=["default","hover","focus","disabled"],n=[{id:"home",label:"Home",icon:"home",iconOnly:!0,ariaLabel:"Home"},{id:"products",label:"Products"},{id:"more",label:"..."},{id:"lifestyle",label:"Lifestyle"},{id:"outdoors",label:"Outdoors"},{id:"hiking",label:"Hiking"}],p={title:"Navigation/MbBreadcrumbs",component:o,tags:["autodocs"],args:{items:n,modelValue:"hiking",state:"default",disabled:!1,ariaLabel:"Breadcrumb"},argTypes:{state:{control:"inline-radio",options:d}},render:t=>({components:{MbBreadcrumbs:o},setup(){const s=i(t.modelValue??"hiking");return l(()=>t.modelValue,r=>{s.value=r??"hiking"}),{args:t,selected:s}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbBreadcrumbs v-bind="args" :model-value="selected" @update:modelValue="selected = $event" />
      </div>
    `})},e={},a={args:{modelValue:"hiking"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'hiking'
  }
}`,...a.parameters?.docs?.source}}};const g=["Playground","FigmaPath"];export{a as FigmaPath,e as Playground,g as __namedExportsOrder,p as default};
