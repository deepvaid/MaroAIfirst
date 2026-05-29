import{r as o,w as d}from"./iframe-Dzs8NioN.js";import{_ as t}from"./MbRadio-DzEQRcoa.js";import"./preload-helper-PPVm8Dsz.js";const n=["default","hover","focus","pressed","disabled","error"],r=["lg","md","sm"],c={title:"Forms/MbRadio",component:t,tags:["autodocs"],args:{modelValue:!1,size:"lg",state:"default",label:"Label",caption:"",hint:"Hint text",errorMessage:"Error message",allowDeselect:!1,required:!1,disabled:!1},argTypes:{size:{control:"inline-radio",options:r},state:{control:"inline-radio",options:n}},render:a=>({components:{MbRadio:t},setup(){const i=o(!!a.modelValue);return d(()=>a.modelValue,l=>{i.value=!!l}),{args:a,checked:i}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbRadio v-bind="args" :model-value="checked" @update:modelValue="checked = $event" />
      </div>
    `})},e={},s={render:()=>({components:{MbRadio:t},setup(){return{sizes:r}},template:`
      <div style="display:grid;gap:16px;padding:24px;">
        <div v-for="size in sizes" :key="size" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;align-items:start;">
          <MbRadio :size="size" label="Unchecked" state="default" :model-value="false" hint="Hint text" />
          <MbRadio :size="size" label="Checked" state="default" :model-value="true" hint="Hint text" />
          <MbRadio :size="size" label="Hover" state="hover" :model-value="true" />
          <MbRadio :size="size" label="Focus" state="focus" :model-value="true" />
          <MbRadio :size="size" label="Pressed" state="pressed" :model-value="true" />
          <MbRadio :size="size" label="Disabled" state="disabled" :model-value="true" />
          <MbRadio :size="size" label="Error" state="error" :model-value="true" error-message="Error message" />
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MbRadio
    },
    setup() {
      return {
        sizes: sizeOptions
      };
    },
    template: \`
      <div style="display:grid;gap:16px;padding:24px;">
        <div v-for="size in sizes" :key="size" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;align-items:start;">
          <MbRadio :size="size" label="Unchecked" state="default" :model-value="false" hint="Hint text" />
          <MbRadio :size="size" label="Checked" state="default" :model-value="true" hint="Hint text" />
          <MbRadio :size="size" label="Hover" state="hover" :model-value="true" />
          <MbRadio :size="size" label="Focus" state="focus" :model-value="true" />
          <MbRadio :size="size" label="Pressed" state="pressed" :model-value="true" />
          <MbRadio :size="size" label="Disabled" state="disabled" :model-value="true" />
          <MbRadio :size="size" label="Error" state="error" :model-value="true" error-message="Error message" />
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};const b=["Playground","States"];export{e as Playground,s as States,b as __namedExportsOrder,c as default};
