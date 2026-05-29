import{r as o,w as n}from"./iframe-DScATqdl.js";import{_ as i}from"./MbCheckbox-Dm-Rbp5L.js";import"./preload-helper-PPVm8Dsz.js";const d=["default","hover","focus","pressed","disabled","error"],m=["lg","md","sm"],p={title:"Forms/MbCheckbox",component:i,tags:["autodocs"],args:{modelValue:!0,indeterminate:!1,size:"lg",state:"default",label:"Label",caption:"",hint:"Hint text",errorMessage:"Error message",required:!1,disabled:!1},argTypes:{size:{control:"inline-radio",options:m},state:{control:"inline-radio",options:d}},render:e=>({components:{MbCheckbox:i},setup(){const r=o(!!e.modelValue),l=o(!!e.indeterminate);return n(()=>e.modelValue,a=>{r.value=!!a}),n(()=>e.indeterminate,a=>{l.value=!!a}),{args:e,checked:r,indeterminate:l}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbCheckbox
          v-bind="args"
          :model-value="checked"
          :indeterminate="indeterminate"
          @update:modelValue="checked = $event"
          @update:indeterminate="indeterminate = $event"
        />
      </div>
    `})},t={},s={render:()=>({components:{MbCheckbox:i},setup(){return{states:d,sizes:m}},template:`
      <div style="display:grid;gap:16px;padding:24px;">
        <div v-for="size in sizes" :key="size" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;align-items:start;">
          <MbCheckbox :size="size" label="Unchecked" state="default" :model-value="false" hint="Hint text" />
          <MbCheckbox :size="size" label="Checked" state="default" :model-value="true" hint="Hint text" />
          <MbCheckbox :size="size" label="Indeterminate" state="default" :indeterminate="true" hint="Hint text" />
          <MbCheckbox :size="size" label="Hover" state="hover" :model-value="true" />
          <MbCheckbox :size="size" label="Focus" state="focus" :model-value="true" />
          <MbCheckbox :size="size" label="Pressed" state="pressed" :model-value="true" />
          <MbCheckbox :size="size" label="Disabled" state="disabled" :model-value="true" />
          <MbCheckbox :size="size" label="Error" state="error" :model-value="true" error-message="Error message" />
        </div>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MbCheckbox
    },
    setup() {
      return {
        states: stateOptions,
        sizes: sizeOptions
      };
    },
    template: \`
      <div style="display:grid;gap:16px;padding:24px;">
        <div v-for="size in sizes" :key="size" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;align-items:start;">
          <MbCheckbox :size="size" label="Unchecked" state="default" :model-value="false" hint="Hint text" />
          <MbCheckbox :size="size" label="Checked" state="default" :model-value="true" hint="Hint text" />
          <MbCheckbox :size="size" label="Indeterminate" state="default" :indeterminate="true" hint="Hint text" />
          <MbCheckbox :size="size" label="Hover" state="hover" :model-value="true" />
          <MbCheckbox :size="size" label="Focus" state="focus" :model-value="true" />
          <MbCheckbox :size="size" label="Pressed" state="pressed" :model-value="true" />
          <MbCheckbox :size="size" label="Disabled" state="disabled" :model-value="true" />
          <MbCheckbox :size="size" label="Error" state="error" :model-value="true" error-message="Error message" />
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};const z=["Playground","States"];export{t as Playground,s as States,z as __namedExportsOrder,p as default};
