import{r as d,w as n}from"./iframe-Dzs8NioN.js";import{_ as i}from"./MbSwitch-DENXtkVU.js";import"./preload-helper-PPVm8Dsz.js";const m=["default","hover","focus","pressed","disabled","error"],o=["md","sm"],b={title:"Forms/MbSwitch",component:i,tags:["autodocs"],args:{modelValue:!1,indeterminate:!1,loading:!1,size:"md",state:"default",label:"Label",caption:"",hint:"Hint text",errorMessage:"Error message",disabled:!1},argTypes:{size:{control:"inline-radio",options:o},state:{control:"inline-radio",options:m}},render:e=>({components:{MbSwitch:i},setup(){const r=d(!!e.modelValue),l=d(!!e.indeterminate);return n(()=>e.modelValue,a=>{r.value=!!a}),n(()=>e.indeterminate,a=>{l.value=!!a}),{args:e,checked:r,indeterminate:l}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbSwitch
          v-bind="args"
          :model-value="checked"
          :indeterminate="indeterminate"
          @update:modelValue="checked = $event"
          @update:indeterminate="indeterminate = $event"
        />
      </div>
    `})},t={},s={render:()=>({components:{MbSwitch:i},setup(){return{sizes:o}},template:`
      <div style="display:grid;gap:16px;padding:24px;">
        <div v-for="size in sizes" :key="size" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;align-items:start;">
          <MbSwitch :size="size" label="Unchecked" state="default" :model-value="false" />
          <MbSwitch :size="size" label="Checked" state="default" :model-value="true" />
          <MbSwitch :size="size" label="Indeterminate" state="default" :indeterminate="true" />
          <MbSwitch :size="size" label="Hover" state="hover" :model-value="true" />
          <MbSwitch :size="size" label="Focus" state="focus" :model-value="true" />
          <MbSwitch :size="size" label="Pressed" state="pressed" :model-value="true" />
          <MbSwitch :size="size" label="Loading" state="default" :model-value="true" :loading="true" />
          <MbSwitch :size="size" label="Disabled" state="disabled" :model-value="true" />
          <MbSwitch :size="size" label="Error" state="error" :model-value="true" error-message="Error message" />
        </div>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MbSwitch
    },
    setup() {
      return {
        sizes: sizeOptions
      };
    },
    template: \`
      <div style="display:grid;gap:16px;padding:24px;">
        <div v-for="size in sizes" :key="size" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;align-items:start;">
          <MbSwitch :size="size" label="Unchecked" state="default" :model-value="false" />
          <MbSwitch :size="size" label="Checked" state="default" :model-value="true" />
          <MbSwitch :size="size" label="Indeterminate" state="default" :indeterminate="true" />
          <MbSwitch :size="size" label="Hover" state="hover" :model-value="true" />
          <MbSwitch :size="size" label="Focus" state="focus" :model-value="true" />
          <MbSwitch :size="size" label="Pressed" state="pressed" :model-value="true" />
          <MbSwitch :size="size" label="Loading" state="default" :model-value="true" :loading="true" />
          <MbSwitch :size="size" label="Disabled" state="disabled" :model-value="true" />
          <MbSwitch :size="size" label="Error" state="error" :model-value="true" error-message="Error message" />
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};const z=["Playground","States"];export{t as Playground,s as States,z as __namedExportsOrder,b as default};
