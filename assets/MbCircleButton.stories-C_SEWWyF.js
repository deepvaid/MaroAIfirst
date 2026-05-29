import{U as k,a3 as b,Z as v,a4 as g,a0 as B,c as t,_ as N,$ as _,a1 as w}from"./iframe-Dzs8NioN.js";import"./preload-helper-PPVm8Dsz.js";const L=["data-variant","data-state","data-mode","aria-disabled","aria-label","disabled"],x={class:"mb-circle-btn__icon","aria-hidden":"true"},D={key:0,class:"mb-circle-btn__label"},p=k({__name:"MbCircleButton",props:{variant:{default:"neutral"},state:{default:"default"},mode:{default:"icon-only"},label:{default:"Button"},ariaLabel:{default:void 0},disabled:{type:Boolean,default:!1}},emits:["click"],setup(n,{emit:c}){const e=n,u=c,y=t(()=>e.variant),m=t(()=>e.mode),o=t(()=>e.disabled||e.state==="disabled"),h=t(()=>o.value?"disabled":e.state),C=t(()=>{if(m.value==="icon-only")return e.ariaLabel??e.label});function M(a){if(o.value){a.preventDefault(),a.stopPropagation();return}u("click",a)}return(a,f)=>(w(),b("button",{type:"button",class:"mb-circle-btn","data-variant":y.value,"data-state":h.value,"data-mode":m.value,"aria-disabled":o.value?"true":void 0,"aria-label":C.value,disabled:o.value,onClick:M},[v("span",x,[g(a.$slots,"icon",{},()=>[f[0]||(f[0]=v("span",{class:"mb-circle-btn__icon-fallback"},null,-1))])]),m.value==="with-label"?(w(),b("span",D,[g(a.$slots,"default",{},()=>[N(_(n.label),1)])])):B("",!0)],8,L))}});p.__docgenInfo={exportName:"default",displayName:"MbCircleButton",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"MbCircleButtonVariant"},defaultValue:{func:!1,value:"'neutral'"}},{name:"state",required:!1,type:{name:"MbCircleButtonState"},defaultValue:{func:!1,value:"'default'"}},{name:"mode",required:!1,type:{name:"MbCircleButtonMode"},defaultValue:{func:!1,value:"'icon-only'"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Button'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/packages/marobase-ui/src/components/MbCircleButton.vue"]};const A={title:"Components/MbCircleButton",component:p,tags:["autodocs"],args:{variant:"neutral",state:"default",mode:"icon-only",label:"More actions",ariaLabel:"More actions",disabled:!1,iconName:"dots"},argTypes:{variant:{control:"inline-radio",options:["neutral","danger","brand-outline"]},state:{control:"select",options:["default","hover","active","focus","disabled"]},mode:{control:"inline-radio",options:["icon-only","with-label"]},iconName:{control:"inline-radio",options:["dots","heart","cloud-download"]}},render:n=>({components:{MbCircleButton:p},setup(){const c=t(()=>{const{iconName:e,...u}=n;return u});return{args:n,componentArgs:c}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbCircleButton v-bind="componentArgs">
          <template #icon>
            <svg
              v-if="args.iconName === 'dots'"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="12" cy="6" r="1.8" fill="currentColor" />
              <circle cx="12" cy="12" r="1.8" fill="currentColor" />
              <circle cx="12" cy="18" r="1.8" fill="currentColor" />
            </svg>

            <svg
              v-else-if="args.iconName === 'heart'"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 20.25C11.62 20.25 11.27 20.1 11.02 19.85L4.73 13.56C3.19 12.02 3.19 9.52 4.73 7.98C6.27 6.44 8.77 6.44 10.31 7.98L12 9.67L13.69 7.98C15.23 6.44 17.73 6.44 19.27 7.98C20.81 9.52 20.81 12.02 19.27 13.56L12.98 19.85C12.73 20.1 12.38 20.25 12 20.25Z"
                fill="currentColor"
              />
            </svg>

            <svg
              v-else
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 16V7.5M12 16L8.75 12.75M12 16L15.25 12.75M5 15.75V16.5C5 18.16 6.34 19.5 8 19.5H16C17.66 19.5 19 18.16 19 16.5V15.75"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>
        </MbCircleButton>
      </div>
    `})},r={},l={args:{variant:"neutral",mode:"icon-only",state:"default",label:"More actions",ariaLabel:"More actions",iconName:"dots"}},s={args:{variant:"danger",mode:"icon-only",state:"default",label:"Add to favorites",ariaLabel:"Add to favorites",iconName:"heart"}},i={args:{variant:"brand-outline",mode:"with-label",state:"default",label:"Download",iconName:"cloud-download"}},d={name:"Dark Preview (Static reference)",args:{variant:"brand-outline",mode:"with-label",state:"default",label:"Download",iconName:"cloud-download"},parameters:{docs:{description:{story:"Static dark-mode reference snapshot (non-interactive target state)."}},globals:{theme:"dark"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    mode: 'icon-only',
    state: 'default',
    label: 'More actions',
    ariaLabel: 'More actions',
    iconName: 'dots'
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    mode: 'icon-only',
    state: 'default',
    label: 'Add to favorites',
    ariaLabel: 'Add to favorites',
    iconName: 'heart'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'brand-outline',
    mode: 'with-label',
    state: 'default',
    label: 'Download',
    iconName: 'cloud-download'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Dark Preview (Static reference)',
  args: {
    variant: 'brand-outline',
    mode: 'with-label',
    state: 'default',
    label: 'Download',
    iconName: 'cloud-download'
  },
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
}`,...d.parameters?.docs?.source}}};const P=["Playground","MoreActions","Favorite","Download","DarkPreview"];export{d as DarkPreview,i as Download,s as Favorite,l as MoreActions,r as Playground,P as __namedExportsOrder,A as default};
