import{r as n,w as i}from"./iframe-DScATqdl.js";import{_ as s}from"./MbInputField-DlgQsGFX.js";import"./preload-helper-PPVm8Dsz.js";const d=["default","hover","focus","disabled","error"],p={title:"Forms/MbTextField",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Compatibility alias for MbInputField while links migrate."}}},args:{modelValue:"",state:"default",label:"Label",required:!1,hint:"Hint text",errorMessage:"Error message",placeholder:"Placeholder",leftAddon:"Text",trailingIcon:"rhombus",width:320},argTypes:{state:{control:"inline-radio",options:d},trailingIcon:{control:"inline-radio",options:["rhombus","none"]},width:{control:{type:"number",min:260,max:420,step:10}}},render:r=>({components:{MbInputField:s},setup(){const o=n(r.modelValue??"");return i(()=>r.modelValue,l=>{o.value=l??""}),{args:r,value:o}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbInputField v-bind="args" :model-value="value" @update:modelValue="value = $event" />
      </div>
    `})},e={},t={args:{state:"default",label:"Label",leftAddon:"Text",placeholder:"Placeholder",hint:"Hint text",width:320}},a={args:{state:"focus"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'default',
    label: 'Label',
    leftAddon: 'Text',
    placeholder: 'Placeholder',
    hint: 'Hint text',
    width: 320
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'focus'
  }
}`,...a.parameters?.docs?.source}}};const g=["Playground","FigmaDefault","Focus"];export{t as FigmaDefault,a as Focus,e as Playground,g as __namedExportsOrder,p as default};
