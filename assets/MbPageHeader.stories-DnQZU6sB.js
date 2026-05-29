import{U as _,a3 as s,W as w,a0 as r,Z as m,$ as u,a4 as c,c as b,a1 as t}from"./iframe-Dzs8NioN.js";import{_ as k}from"./MbBreadcrumbs-D-Jbebg9.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as H}from"./MbButton-tKQjI-r5.js";import"./preload-helper-PPVm8Dsz.js";const z=["data-size","data-align"],P={class:"mb-page-header__row"},B={class:"mb-page-header__text"},$={key:0,class:"mb-page-header__eyebrow"},I={class:"mb-page-header__title"},D={key:1,class:"mb-page-header__subtitle"},V={key:0,class:"mb-page-header__actions"},q={key:1,class:"mb-page-header__aside"},p=_({__name:"MbPageHeader",props:{title:{},eyebrow:{default:void 0},subtitle:{default:void 0},breadcrumbs:{default:()=>[]},size:{default:"sm"},align:{default:"start"}},setup(a){const f=a,d=b(()=>(f.breadcrumbs??[]).map((e,o)=>({id:`mb-page-header-crumb-${o}`,label:e.label,href:e.disabled?void 0:e.href,disabled:e.disabled}))),h=b(()=>{const e=d.value;if(!e.length)return"";const o=[...e].reverse().find(v=>!v.disabled),y=e[e.length-1];return(o??y)?.id??""});return(e,o)=>(t(),s("header",{class:"mb-page-header","data-size":a.size,"data-align":a.align},[d.value.length?(t(),w(k,{key:0,class:"mb-page-header__breadcrumbs",items:d.value,"model-value":h.value,"aria-label":"Breadcrumb"},null,8,["items","model-value"])):r("",!0),m("div",P,[m("div",B,[a.eyebrow?(t(),s("span",$,u(a.eyebrow),1)):r("",!0),m("h1",I,u(a.title),1),a.subtitle?(t(),s("p",D,u(a.subtitle),1)):r("",!0),c(e.$slots,"meta",{},void 0,!0)]),e.$slots.actions?(t(),s("div",V,[c(e.$slots,"actions",{},void 0,!0)])):r("",!0)]),e.$slots.default?(t(),s("div",q,[c(e.$slots,"default",{},void 0,!0)])):r("",!0)],8,z))}}),g=M(p,[["__scopeId","data-v-b87e3903"]]);p.__docgenInfo={exportName:"default",displayName:"MbPageHeader",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"eyebrow",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"subtitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"breadcrumbs",required:!1,type:{name:"Array",elements:[{name:"MbPageHeaderBreadcrumb"}]},defaultValue:{func:!1,value:"() => []"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'sm'"}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"start"'},{name:'"center"'}]},defaultValue:{func:!1,value:"'start'"}}],slots:[{name:"meta"},{name:"actions"},{name:"default"}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/packages/marobase-ui/src/components/MbPageHeader.vue"]};const E={title:"Navigation/MbPageHeader",component:g,tags:["autodocs"],args:{title:"Email campaigns",eyebrow:"Marketing",subtitle:"Plan, send, and measure every message your brand sends out into the world.",size:"sm",align:"start",breadcrumbs:[]},argTypes:{size:{control:"inline-radio",options:["sm","md","lg"]},align:{control:"inline-radio",options:["start","center"]}},render:a=>({components:{MbPageHeader:g,MbButton:H},setup:()=>({args:a}),template:`
      <div style="padding:32px;max-width:1200px;">
        <MbPageHeader v-bind="args">
          <template #actions>
            <MbButton label="Invite" style-type="outline" />
            <MbButton label="New campaign" />
          </template>
        </MbPageHeader>
      </div>
    `})},n={},i={args:{size:"md",eyebrow:"Dashboard",title:"Good morning, Deepak",subtitle:"Here's how your store is performing today.",breadcrumbs:[]}},l={args:{size:"lg",eyebrow:"Q2 Launch",title:"Campaign performance highlights",subtitle:"A large-display variant for hero moments and executive summaries.",breadcrumbs:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    eyebrow: 'Dashboard',
    title: 'Good morning, Deepak',
    subtitle: "Here's how your store is performing today.",
    breadcrumbs: []
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    eyebrow: 'Q2 Launch',
    title: 'Campaign performance highlights',
    subtitle: 'A large-display variant for hero moments and executive summaries.',
    breadcrumbs: []
  }
}`,...l.parameters?.docs?.source}}};const T=["Playground","DashboardTitle","Hero"];export{i as DashboardTitle,l as Hero,n as Playground,T as __namedExportsOrder,E as default};
