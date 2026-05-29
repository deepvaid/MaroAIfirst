import{U as y,a3 as r,Z as n,a0 as B,$ as M,c as i,a1 as o}from"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const k=["data-tone","data-variant","data-interactive","disabled","aria-label"],x={key:0,class:"mb-badge__icon","aria-hidden":"true"},w={key:0,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L={key:1,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_={class:"mb-badge__label"},d=y({__name:"MbBadge",props:{label:{default:"Premium"},tone:{default:"additional"},variant:{default:"outline"},icon:{default:"star"},interactive:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ariaLabel:{default:void 0}},emits:["click"],setup(e,{emit:m}){const a=e,p=m,f=i(()=>a.variant==="outline"?"outline":a.variant),g=i(()=>a.disabled||!a.interactive),c=i(()=>a.icon),b=i(()=>a.ariaLabel??a.label);function v(u){if(a.disabled){u.preventDefault();return}p("click",u)}return(u,t)=>(o(),r("button",{type:"button",class:"mb-badge","data-tone":e.tone,"data-variant":f.value,"data-interactive":e.interactive?"true":"false",disabled:g.value,"aria-label":b.value,onClick:v},[c.value!=="none"?(o(),r("span",x,[c.value==="star"?(o(),r("svg",w,[...t[0]||(t[0]=[n("path",{d:"M12 3.4L14.7 8.8L20.7 9.7L16.4 13.9L17.4 19.9L12 17.1L6.6 19.9L7.6 13.9L3.3 9.7L9.3 8.8L12 3.4Z",stroke:"currentColor","stroke-width":"1.8","stroke-linejoin":"round"},null,-1)])])):(o(),r("svg",L,[...t[1]||(t[1]=[n("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor","stroke-width":"1.8"},null,-1),n("path",{d:"M12 7.8V12.5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round"},null,-1),n("circle",{cx:"12",cy:"16.2",r:"1.1",fill:"currentColor"},null,-1)])]))])):B("",!0),n("span",_,M(e.label),1)],8,k))}});d.__docgenInfo={exportName:"default",displayName:"MbBadge",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Premium'"}},{name:"tone",required:!1,type:{name:"MbBadgeTone"},defaultValue:{func:!1,value:"'additional'"}},{name:"variant",required:!1,type:{name:"MbBadgeVariant"},defaultValue:{func:!1,value:"'outline'"}},{name:"icon",required:!1,type:{name:"MbBadgeIcon"},defaultValue:{func:!1,value:"'star'"}},{name:"interactive",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/packages/marobase-ui/src/components/MbBadge.vue"]};const V=["additional","danger","success","brand","neutral"],h=["outline","soft","solid"],P=["star","alert","none"],D={title:"Components/MbBadge",component:d,tags:["autodocs"],args:{label:"Premium",tone:"additional",variant:"outline",icon:"star",interactive:!0,disabled:!1},argTypes:{tone:{control:"inline-radio",options:V},variant:{control:"inline-radio",options:h},icon:{control:"inline-radio",options:P}},render:e=>({components:{MbBadge:d},setup(){return{args:e}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbBadge v-bind="args" />
      </div>
    `})},l={},s={render:e=>({components:{MbBadge:d},setup(){return{args:e}},template:`
      <div style="display:flex;gap:12px;padding:24px;align-items:center;">
        <MbBadge v-bind="args" label="Premium" tone="additional" variant="outline" icon="star" />
        <MbBadge v-bind="args" label="Danger" tone="danger" variant="soft" icon="alert" />
      </div>
    `})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MbBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display:flex;gap:12px;padding:24px;align-items:center;">
        <MbBadge v-bind="args" label="Premium" tone="additional" variant="outline" icon="star" />
        <MbBadge v-bind="args" label="Danger" tone="danger" variant="soft" icon="alert" />
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};const A=["Playground","PremiumAndDanger"];export{l as Playground,s as PremiumAndDanger,A as __namedExportsOrder,D as default};
