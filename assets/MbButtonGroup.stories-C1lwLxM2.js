import{r as l,w as s}from"./iframe-Dzs8NioN.js";import{_ as r}from"./MbButtonGroup-L751WIVC.js";import"./preload-helper-PPVm8Dsz.js";const d=[{id:"view",icon:"eye",ariaLabel:"View"},{id:"edit",icon:"pencil",ariaLabel:"Edit"},{id:"delete",icon:"trash",ariaLabel:"Delete"}],p={title:"Components/MbButtonGroup",component:r,tags:["autodocs"],args:{items:d,modelValue:0,size:"lg",mode:"icon-only",hug:!1,disabled:!1,ariaLabel:"Button group"},argTypes:{size:{control:"inline-radio",options:["lg","md","sm"]},mode:{control:"inline-radio",options:["icon-only","with-label"]},hug:{control:"boolean"},modelValue:{control:{type:"number",min:0,max:2,step:1}}},render:e=>({components:{MbButtonGroup:r},setup(){const i=l(typeof e.modelValue=="number"?e.modelValue:0);return s(()=>e.modelValue,n=>{typeof n=="number"&&Number.isFinite(n)&&(i.value=n)}),{args:e,selected:i}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbButtonGroup
          v-bind="args"
          :model-value="selected"
          @update:modelValue="selected = $event"
        />
      </div>
    `})},o={},a={args:{size:"lg",mode:"icon-only",hug:!1,modelValue:0}},t={args:{mode:"with-label",hug:!0,items:[{id:"first",label:"View",icon:"eye"},{id:"second",label:"Edit",icon:"pencil"},{id:"third",label:"Delete",icon:"trash"}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    mode: 'icon-only',
    hug: false,
    modelValue: 0
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'with-label',
    hug: true,
    items: [{
      id: 'first',
      label: 'View',
      icon: 'eye'
    }, {
      id: 'second',
      label: 'Edit',
      icon: 'pencil'
    }, {
      id: 'third',
      label: 'Delete',
      icon: 'trash'
    }]
  }
}`,...t.parameters?.docs?.source}}};const g=["Playground","FigmaSegmented","WithLabel"];export{a as FigmaSegmented,o as Playground,t as WithLabel,g as __namedExportsOrder,p as default};
