import{U as A,r as h,w,a3 as x,Z as o,a4 as y,a0 as M,ab as D,c as g,$ as d,a1 as C}from"./iframe-Dzs8NioN.js";import"./preload-helper-PPVm8Dsz.js";const S=["data-tone","aria-label"],q={class:"mb-modal__header"},P={class:"mb-modal__title"},I={class:"mb-modal__body"},N={class:"mb-modal__description"},T={class:"mb-modal__footer"},c=A({__name:"MbModal",props:{modelValue:{type:Boolean,default:void 0},title:{default:"Popup header"},description:{default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},primaryLabel:{default:"Button"},secondaryLabel:{default:"Button"},dismissible:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeOnAction:{type:Boolean,default:!1},width:{default:400},ariaLabel:{default:"Modal"},tone:{default:"default"}},emits:["update:modelValue","primary-click","secondary-click","close"],setup(a,{emit:l}){const t=a,n=l,p=g(()=>typeof t.modelValue=="boolean"),m=h(p.value?!!t.modelValue:!0),V=g(()=>({width:`${t.width}px`}));w(()=>t.modelValue,e=>{typeof e=="boolean"&&(m.value=e)});const _=g(()=>p.value?!!t.modelValue:m.value);function f(e){p.value||(m.value=e),n("update:modelValue",e)}function b(e,r){e==="close"&&!t.dismissible||(f(!1),n("close",{reason:e,event:r}))}function O(e){!t.closeOnOverlay||e.target!==e.currentTarget||b("overlay",e)}function v(e){n("primary-click",{reason:"primary",event:e}),t.closeOnAction&&f(!1)}function k(e){n("secondary-click",{reason:"secondary",event:e}),t.closeOnAction&&f(!1)}function L(e){b("close",e)}function B(e){e.key==="Escape"&&(e.preventDefault(),b("escape",e))}return(e,r)=>_.value?(C(),x("div",{key:0,class:"mb-modal",role:"presentation",onClick:O,onKeydown:B},[o("section",{class:"mb-modal__panel","data-tone":a.tone,style:D(V.value),role:"dialog","aria-modal":"true","aria-label":a.ariaLabel},[o("header",q,[y(e.$slots,"header",{},()=>[o("h2",P,d(a.title),1)]),a.dismissible?(C(),x("button",{key:0,type:"button",class:"mb-modal__close","aria-label":"Close modal",onClick:L},[...r[0]||(r[0]=[o("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[o("path",{d:"M7 7L17 17M17 7L7 17",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round"})],-1)])])):M("",!0)]),o("div",I,[y(e.$slots,"default",{},()=>[o("p",N,d(a.description),1)])]),o("footer",T,[y(e.$slots,"footer",{primaryClick:v,secondaryClick:k},()=>[o("button",{type:"button",class:"mb-modal__button mb-modal__button--secondary",onClick:k},d(a.secondaryLabel),1),o("button",{type:"button",class:"mb-modal__button mb-modal__button--primary",onClick:v},d(a.primaryLabel),1)])])],12,S)],32)):M("",!0)}});c.__docgenInfo={exportName:"default",displayName:"MbModal",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Popup header'"}},{name:"description",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'"}},{name:"primaryLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Button'"}},{name:"secondaryLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Button'"}},{name:"dismissible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnOverlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnAction",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"width",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"400"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Modal'"}},{name:"tone",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'default'"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"primary-click",type:{names:["MbModalActionPayload"]}},{name:"secondary-click",type:{names:["MbModalActionPayload"]}},{name:"close",type:{names:["MbModalActionPayload"]}}],slots:[{name:"header"},{name:"default"},{name:"footer",scoped:!0,bindings:[{name:"primary-click",title:"binding"},{name:"secondary-click",title:"binding"}]}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/packages/marobase-ui/src/components/MbModal.vue"]};const j={title:"Overlays/MbModal",component:c,tags:["autodocs"],args:{modelValue:!0,title:"Delete dashboard?",description:"This will permanently remove Marketing Performance and its 14 widgets. This action cannot be undone.",primaryLabel:"Delete",secondaryLabel:"Cancel",dismissible:!0,closeOnOverlay:!0,closeOnAction:!1,width:440,tone:"danger"},argTypes:{tone:{control:"inline-radio",options:["default","danger"]}},render:a=>({components:{MbModal:c},setup(){const l=h(!!a.modelValue);return w(()=>a.modelValue,t=>{l.value=!!t}),{args:a,open:l}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;width:100%;min-height:520px;background:#f7f7f8;">
        <button style="height:36px;border-radius:999px;border:1px solid #e5e5e5;background:#ffffff;color:#1a1814;padding:0 14px;font:600 13px/1 Inter, sans-serif;" @click="open = true">Open modal</button>
        <MbModal v-bind="args" :model-value="open" @update:modelValue="open = $event" />
      </div>
    `})},s={},i={args:{modelValue:!0,title:"Delete dashboard?",description:"This will permanently remove Marketing Performance and its 14 widgets. This action cannot be undone.",primaryLabel:"Delete",secondaryLabel:"Cancel",width:440,tone:"danger"}},u={render:()=>({components:{MbModal:c},setup(){return{open:h(!0)}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;width:100%;min-height:620px;background:#f7f7f8;">
        <button style="height:36px;border-radius:999px;border:1px solid #1ab7ea;background:#1ab7ea;color:#fff;padding:0 14px;font:600 13px/1 Inter, sans-serif;" @click="open = true">Add data source</button>
        <MbModal
          v-model="open"
          title="New data source"
          primary-label="Connect"
          secondary-label="Cancel"
          :width="520"
          aria-label="New data source dialog"
        >
          <div style="display:grid;gap:14px;">
            <v-text-field label="Name" placeholder="Marketing Cloud - production" />
            <v-select label="Type" :items="['Marketing Cloud', 'Commerce Cloud', 'Service Cloud', 'Snowflake', 'BigQuery']" model-value="Marketing Cloud" />
            <v-text-field label="Endpoint" placeholder="https://..." />
            <v-text-field label="API key" type="password" placeholder="sk-..." />
          </div>
          <template #footer>
            <button style="height:36px;border:0;background:transparent;color:#737373;padding:0 14px;font:600 13px/1 Inter, sans-serif;" @click="open = false">Cancel</button>
            <button style="height:36px;border-radius:999px;border:1px solid #1ab7ea;background:#1ab7ea;color:#fff;padding:0 16px;font:600 13px/1 Inter, sans-serif;" @click="open = false">Connect</button>
          </template>
        </MbModal>
      </div>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: 'Delete dashboard?',
    description: 'This will permanently remove Marketing Performance and its 14 widgets. This action cannot be undone.',
    primaryLabel: 'Delete',
    secondaryLabel: 'Cancel',
    width: 440,
    tone: 'danger'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MbModal
    },
    setup() {
      const open = ref(true);
      return {
        open
      };
    },
    template: \`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;width:100%;min-height:620px;background:#f7f7f8;">
        <button style="height:36px;border-radius:999px;border:1px solid #1ab7ea;background:#1ab7ea;color:#fff;padding:0 14px;font:600 13px/1 Inter, sans-serif;" @click="open = true">Add data source</button>
        <MbModal
          v-model="open"
          title="New data source"
          primary-label="Connect"
          secondary-label="Cancel"
          :width="520"
          aria-label="New data source dialog"
        >
          <div style="display:grid;gap:14px;">
            <v-text-field label="Name" placeholder="Marketing Cloud - production" />
            <v-select label="Type" :items="['Marketing Cloud', 'Commerce Cloud', 'Service Cloud', 'Snowflake', 'BigQuery']" model-value="Marketing Cloud" />
            <v-text-field label="Endpoint" placeholder="https://..." />
            <v-text-field label="API key" type="password" placeholder="sk-..." />
          </div>
          <template #footer>
            <button style="height:36px;border:0;background:transparent;color:#737373;padding:0 14px;font:600 13px/1 Inter, sans-serif;" @click="open = false">Cancel</button>
            <button style="height:36px;border-radius:999px;border:1px solid #1ab7ea;background:#1ab7ea;color:#fff;padding:0 16px;font:600 13px/1 Inter, sans-serif;" @click="open = false">Connect</button>
          </template>
        </MbModal>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};const F=["Playground","DeleteDashboardConfirm","AddDataSourceForm"];export{u as AddDataSourceForm,i as DeleteDashboardConfirm,s as Playground,F as __namedExportsOrder,j as default};
