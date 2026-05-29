import{r as t,w as n}from"./iframe-Dzs8NioN.js";import{_ as p}from"./MbInputDropdown-DtQr6tfG.js";import"./preload-helper-PPVm8Dsz.js";const u=[{id:"en",label:"English",meta:"+1",icon:"🇺🇸"},{id:"bg",label:"Български"},{id:"cz",label:"Čeština",meta:"+355",icon:"🇦🇱"},{id:"dk",label:"Dansk",meta:"+213",icon:"🇩🇿"},{id:"de",label:"Deutsch",meta:"+1684",icon:"🇦🇸"},{id:"fr",label:"Français",meta:"+376",icon:"🇦🇩"}],i=["default","hover","focus","disabled","error"],f={title:"Forms/MbInputDropdown",component:p,tags:["autodocs"],args:{modelValue:"English",searchValue:"",options:u,label:"Language",placeholder:"Select option",leftAddon:"Text",hint:"Hint text",errorMessage:"Error message",required:!1,open:!0,showSearch:!0,state:"default",disabled:!1},argTypes:{state:{control:"inline-radio",options:i}},render:e=>({components:{MbInputDropdown:p},setup(){const l=t(e.modelValue??""),d=t(e.searchValue??""),c=t(!!e.open);return n(()=>e.modelValue,a=>{l.value=a??""}),n(()=>e.searchValue,a=>{d.value=a??""}),n(()=>e.open,a=>{c.value=!!a}),{args:e,value:l,searchValue:d,open:c}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbInputDropdown
          v-bind="args"
          :model-value="value"
          :search-value="searchValue"
          :open="open"
          @update:modelValue="value = $event"
          @update:searchValue="searchValue = $event"
          @update:open="open = $event"
        />
      </div>
    `})},o={},r={args:{open:!1,state:"default"}},s={args:{state:"error",errorMessage:"Please choose one option"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    state: 'default'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'error',
    errorMessage: 'Please choose one option'
  }
}`,...s.parameters?.docs?.source}}};const v=["Playground","Closed","Error"];export{r as Closed,s as Error,o as Playground,v as __namedExportsOrder,f as default};
