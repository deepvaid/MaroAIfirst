import{r as n,w as i}from"./iframe-DScATqdl.js";import{_ as s}from"./MbSlider-D6Ew71o5.js";import"./preload-helper-PPVm8Dsz.js";const u=["default","hover","focus","pressed","disabled"],c={title:"Forms/MbSlider",component:s,tags:["autodocs"],args:{modelValue:70,rangeStart:null,min:0,max:100,step:1,state:"default",label:"Label",showTicks:!0,showValueLabels:!0,disabled:!1,hint:""},argTypes:{state:{control:"inline-radio",options:u}},render:e=>({components:{MbSlider:s},setup(){const d=n(Number(e.modelValue??0)),o=n(e.rangeStart??null);return i(()=>e.modelValue,r=>{d.value=Number(r??0)}),i(()=>e.rangeStart,r=>{o.value=r??null}),{args:e,end:d,start:o}},template:`
      <div style="display:grid;gap:20px;align-items:start;justify-items:start;padding:24px;">
        <MbSlider
          v-bind="args"
          :model-value="end"
          :range-start="start"
          @update:modelValue="end = $event"
          @update:rangeStart="start = $event"
        />
      </div>
    `})},a={},t={args:{label:"Price range",rangeStart:35,modelValue:80}},l={render:()=>({components:{MbSlider:s},template:`
      <div style="display:grid;gap:24px;padding:24px;">
        <MbSlider label="Default" :model-value="70" state="default" />
        <MbSlider label="Hover" :model-value="70" state="hover" />
        <MbSlider label="Focus" :model-value="70" state="focus" />
        <MbSlider label="Pressed" :model-value="70" state="pressed" />
        <MbSlider label="Disabled" :model-value="70" state="disabled" :disabled="true" />
        <MbSlider label="Range" :range-start="25" :model-value="75" state="default" />
      </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Price range',
    rangeStart: 35,
    modelValue: 80
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MbSlider
    },
    template: \`
      <div style="display:grid;gap:24px;padding:24px;">
        <MbSlider label="Default" :model-value="70" state="default" />
        <MbSlider label="Hover" :model-value="70" state="hover" />
        <MbSlider label="Focus" :model-value="70" state="focus" />
        <MbSlider label="Pressed" :model-value="70" state="pressed" />
        <MbSlider label="Disabled" :model-value="70" state="disabled" :disabled="true" />
        <MbSlider label="Range" :range-start="25" :model-value="75" state="default" />
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};const g=["Playground","Range","States"];export{a as Playground,t as Range,l as States,g as __namedExportsOrder,c as default};
