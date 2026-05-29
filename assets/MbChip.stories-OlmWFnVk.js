import{U as g,a3 as l,Z as s,a4 as h,a0 as c,$ as v,a1 as d}from"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const y=["data-tone","data-selected","data-disabled"],w=["disabled","aria-label"],k={key:0,class:"mb-chip__prepend","aria-hidden":"true"},C={class:"mb-chip__label"},M=["disabled"],r=g({__name:"MbChip",props:{label:{default:"Tag with Dismiss"},tone:{default:"neutral"},selected:{type:Boolean,default:!1},dismissible:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},ariaLabel:{default:void 0}},emits:["click","dismiss"],setup(e,{emit:m}){const o=e,p=m;function b(a){if(o.disabled){a.preventDefault();return}p("click",a)}function f(a){if(o.disabled){a.preventDefault();return}a.stopPropagation(),p("dismiss",a)}return(a,u)=>(d(),l("div",{class:"mb-chip","data-tone":e.tone,"data-selected":e.selected?"true":"false","data-disabled":e.disabled?"true":"false"},[s("button",{type:"button",class:"mb-chip__main",disabled:e.disabled,"aria-label":e.ariaLabel??e.label,onClick:b},[a.$slots.prepend?(d(),l("span",k,[h(a.$slots,"prepend")])):c("",!0),s("span",C,v(e.label),1)],8,w),e.dismissible?(d(),l("button",{key:0,type:"button",class:"mb-chip__dismiss",disabled:e.disabled,"aria-label":"Dismiss",onClick:f},[...u[0]||(u[0]=[s("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[s("path",{d:"M7 7L17 17M17 7L7 17",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round"})],-1)])],8,M)):c("",!0)],8,y))}});r.__docgenInfo={exportName:"default",displayName:"MbChip",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Tag with Dismiss'"}},{name:"tone",required:!1,type:{name:"MbChipTone"},defaultValue:{func:!1,value:"'neutral'"}},{name:"selected",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dismissible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"click",type:{names:["MouseEvent"]}},{name:"dismiss",type:{names:["MouseEvent"]}}],slots:[{name:"prepend"}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/packages/marobase-ui/src/components/MbChip.vue"]};const x=["neutral","brand","danger","success","warning"],D={title:"Components/MbChip",component:r,tags:["autodocs"],args:{label:"Tag with Dismiss",tone:"neutral",selected:!1,dismissible:!0,disabled:!1},argTypes:{tone:{control:"inline-radio",options:x}},render:e=>({components:{MbChip:r},setup(){return{args:e}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbChip v-bind="args" />
      </div>
    `})},t={},i={args:{selected:!0}},n={args:{label:"Sent",tone:"brand",dismissible:!1},render:e=>({components:{MbChip:r},setup(){return{args:e}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbChip v-bind="args">
          <template #prepend>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M5 12l5 5L20 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </template>
        </MbChip>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Sent',
    tone: 'brand',
    dismissible: false
  },
  render: args => ({
    components: {
      MbChip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbChip v-bind="args">
          <template #prepend>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M5 12l5 5L20 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </template>
        </MbChip>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};const V=["Playground","Selected","WithPrepend"];export{t as Playground,i as Selected,n as WithPrepend,V as __namedExportsOrder,D as default};
