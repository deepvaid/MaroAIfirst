import{_ as n}from"./MbButton-DwFXGSOR.js";import"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/MbButton",component:n,tags:["autodocs"],args:{styleType:"filled",size:"lg",state:"default",iconMode:"with-label",label:"Sign Up",leadingIcon:void 0,trailingIcon:void 0,disabled:!1,loading:!1},argTypes:{styleType:{control:"inline-radio",options:["filled","outline","tinted","plain"]},size:{control:"inline-radio",options:["lg","md","sm"]},state:{control:"select",options:["default","hover","active","focus","disabled","loading"]},iconMode:{control:"inline-radio",options:["with-label","icon-only"]}},render:r=>({components:{MbButton:n},setup(){return{args:r}},template:`
      <div style="display:grid;gap:12px;align-items:start;justify-items:start;padding:24px;">
        <MbButton v-bind="args" />
      </div>
    `})},e={},t={name:"Figma Primary (Static reference)",args:{styleType:"filled",size:"lg",state:"default",iconMode:"with-label",label:"Sign Up",leadingIcon:void 0,trailingIcon:void 0},parameters:{docs:{description:{story:"Static Figma reference snapshot (non-interactive target state)."}}}},a={name:"Dark Preview (Static reference)",parameters:{docs:{description:{story:"Static dark-mode reference snapshot (non-interactive target state)."}},globals:{theme:"dark"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Figma Primary (Static reference)',
  args: {
    styleType: 'filled',
    size: 'lg',
    state: 'default',
    iconMode: 'with-label',
    label: 'Sign Up',
    leadingIcon: undefined,
    trailingIcon: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Static Figma reference snapshot (non-interactive target state).'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Dark Preview (Static reference)',
  parameters: {
    docs: {
      description: {
        story: 'Static dark-mode reference snapshot (non-interactive target state).'
      }
    },
    globals: {
      theme: 'dark'
    }
  }
}`,...a.parameters?.docs?.source}}};const l=["Playground","FigmaPrimary","DarkPreview"];export{a as DarkPreview,t as FigmaPrimary,e as Playground,l as __namedExportsOrder,c as default};
