import{r as s,w as p}from"./iframe-DScATqdl.js";import{_ as i}from"./MbInputField-DlgQsGFX.js";import"./preload-helper-PPVm8Dsz.js";const c=["default","hover","focus","disabled","error"],g={title:"Forms/MbInputField",component:i,tags:["autodocs"],args:{modelValue:"",state:"default",label:"Label",required:!1,hint:"Hint text",errorMessage:"Error message",placeholder:"Placeholder",leftAddon:"Text",trailingIcon:"rhombus",width:320},argTypes:{state:{control:"inline-radio",options:c},trailingIcon:{control:"inline-radio",options:["rhombus","none"]},width:{control:{type:"number",min:260,max:420,step:10}}},render:e=>({components:{MbInputField:i},setup(){const l=s(e.modelValue??"");return p(()=>e.modelValue,d=>{l.value=d??""}),{args:e,value:l}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbInputField v-bind="args" :model-value="value" @update:modelValue="value = $event" />
      </div>
    `})},t={},a={args:{state:"default",label:"Label",leftAddon:"Text",placeholder:"Placeholder",hint:"Hint text",width:320}},r={args:{state:"focus"}},o={name:"All States",parameters:{controls:{disable:!0}},render:()=>({components:{MbInputField:i},template:`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px;padding:24px;background:var(--mb-color-background,#f9fafb)">
        <div>
          <div style="font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#6b7280;margin-bottom:8px">Default</div>
          <MbInputField label="Search" placeholder="Search records…" trailing-icon="none" :width="300" state="default" />
        </div>
        <div>
          <div style="font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#6b7280;margin-bottom:8px">Focus</div>
          <MbInputField label="Search" placeholder="Search records…" trailing-icon="none" :width="300" state="focus" />
        </div>
        <div>
          <div style="font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#6b7280;margin-bottom:8px">Disabled</div>
          <MbInputField label="Search" model-value="Locked content" trailing-icon="none" :width="300" state="disabled" />
        </div>
        <div>
          <div style="font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#6b7280;margin-bottom:8px">Error</div>
          <MbInputField label="Email" placeholder="you@example.com" trailing-icon="none" :width="300" state="error" error-message="Please enter a valid email" />
        </div>
        <div>
          <div style="font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#6b7280;margin-bottom:8px">With hint</div>
          <MbInputField label="Subdomain" placeholder="my-store" trailing-icon="none" :width="300" state="default" hint="Appears in your store URL" />
        </div>
      </div>
    `})},n={name:"Search (toolbar)",parameters:{controls:{disable:!0}},render:()=>({components:{MbInputField:i},setup(){return{query:s("")}},template:`
      <div style="padding:24px;background:#fff;border:1px solid #e5e7eb;border-radius:12px;max-width:400px">
        <div style="font-size:12px;color:#6b7280;margin-bottom:8px">Toolbar search (as used in MpDataTableToolbar)</div>
        <MbInputField
          :model-value="query"
          label="Search"
          placeholder="Search records…"
          trailing-icon="none"
          :width="320"
          state="default"
          @update:modelValue="query = $event"
        />
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'default',
    label: 'Label',
    leftAddon: 'Text',
    placeholder: 'Placeholder',
    hint: 'Hint text',
    width: 320
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'focus'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      MbInputField
    },
    template: \`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px;padding:24px;background:var(--mb-color-background,#f9fafb)">
        <div>
          <div style="font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#6b7280;margin-bottom:8px">Default</div>
          <MbInputField label="Search" placeholder="Search records…" trailing-icon="none" :width="300" state="default" />
        </div>
        <div>
          <div style="font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#6b7280;margin-bottom:8px">Focus</div>
          <MbInputField label="Search" placeholder="Search records…" trailing-icon="none" :width="300" state="focus" />
        </div>
        <div>
          <div style="font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#6b7280;margin-bottom:8px">Disabled</div>
          <MbInputField label="Search" model-value="Locked content" trailing-icon="none" :width="300" state="disabled" />
        </div>
        <div>
          <div style="font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#6b7280;margin-bottom:8px">Error</div>
          <MbInputField label="Email" placeholder="you@example.com" trailing-icon="none" :width="300" state="error" error-message="Please enter a valid email" />
        </div>
        <div>
          <div style="font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#6b7280;margin-bottom:8px">With hint</div>
          <MbInputField label="Subdomain" placeholder="my-store" trailing-icon="none" :width="300" state="default" hint="Appears in your store URL" />
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Search (toolbar)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      MbInputField
    },
    setup() {
      const query = ref('');
      return {
        query
      };
    },
    template: \`
      <div style="padding:24px;background:#fff;border:1px solid #e5e7eb;border-radius:12px;max-width:400px">
        <div style="font-size:12px;color:#6b7280;margin-bottom:8px">Toolbar search (as used in MpDataTableToolbar)</div>
        <MbInputField
          :model-value="query"
          label="Search"
          placeholder="Search records…"
          trailing-icon="none"
          :width="320"
          state="default"
          @update:modelValue="query = $event"
        />
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};const f=["Playground","FigmaDefault","Focus","AllStates","SearchVariant"];export{o as AllStates,a as FigmaDefault,r as Focus,t as Playground,n as SearchVariant,f as __namedExportsOrder,g as default};
