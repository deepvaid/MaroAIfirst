import{U as P,r as x,w as I,a3 as s,Z as d,a6 as B,a7 as $,c as f,a0 as T,$ as z,a1 as l}from"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const E=["data-state","data-variant","data-orientation","aria-label"],N=["aria-orientation"],j=["id","aria-label","aria-selected","aria-controls","tabindex","data-active","disabled","onClick","onKeydown"],K={key:0,class:"mb-tabs__icon","aria-hidden":"true"},W={key:0,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z={key:1,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},U={key:2,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R={class:"mb-tabs__label"},G={key:1,class:"mb-tabs__dot","aria-hidden":"true"},J={key:2,class:"mb-tabs__badge","aria-hidden":"true"},h=P({__name:"MbTabs",props:{items:{default:()=>[]},modelValue:{default:void 0},state:{default:"default"},disabled:{type:Boolean,default:!1},ariaLabel:{default:"Tabs"},variant:{default:"pill"},orientation:{default:"horizontal"}},emits:["update:modelValue","tab-change"],setup(r,{emit:u}){const k=[{id:"home",label:"Home",icon:"home"},{id:"profile",label:"Profile",dot:!0},{id:"notifications",label:"Notifications",badge:1},{id:"more",label:"...",icon:"more"}],i=r,M=u,w=x(!1),c=f(()=>i.items.length>0?i.items:k);function V(){return c.value.find(a=>!a.disabled)?.id??c.value[0]?.id??""}const b=x(V()),A=f(()=>i.modelValue!==void 0);I(()=>i.modelValue,a=>{typeof a=="string"&&a.length>0&&(b.value=a)},{immediate:!0}),I(()=>c.value,()=>{c.value.some(a=>a.id===b.value)||(b.value=V())},{deep:!0});const O=f(()=>{const a=A.value?i.modelValue??"":b.value;return a&&c.value.some(t=>t.id===a&&!t.disabled)?a:V()}),q=f(()=>i.disabled?"disabled":i.state!=="default"?i.state:w.value?"focus":"default");function C(a){return i.disabled||!!a.disabled}function _(a){return a.id===O.value}function L(a,t,e){C(a)||(A.value||(b.value=a.id),M("update:modelValue",a.id),M("tab-change",{item:a,index:t,event:e}))}function S(a,t){const e=a.closest("[data-mb-tabs]");if(!e)return;const n=Array.from(e.querySelectorAll(".mb-tabs__tab:not(:disabled)"));if(n.length===0)return;const o=n.indexOf(a);if(o<0)return;const H=(o+t+n.length)%n.length;n[H]?.focus()}function F(a,t,e){const n=e.currentTarget;if(e.key==="Enter"||e.key===" "){e.preventDefault(),L(a,t,e);return}if(n){if(i.orientation==="horizontal"&&e.key==="ArrowRight"||i.orientation==="vertical"&&e.key==="ArrowDown"){e.preventDefault(),S(n,1);return}if(i.orientation==="horizontal"&&e.key==="ArrowLeft"||i.orientation==="vertical"&&e.key==="ArrowUp"){e.preventDefault(),S(n,-1);return}if(e.key==="Home"){e.preventDefault(),n.closest("[data-mb-tabs]")?.querySelector(".mb-tabs__tab:not(:disabled)")?.focus();return}if(e.key==="End"){e.preventDefault();const o=Array.from(n.closest("[data-mb-tabs]")?.querySelectorAll(".mb-tabs__tab:not(:disabled)")??[]);o[o.length-1]?.focus()}}}return(a,t)=>(l(),s("nav",{class:"mb-tabs","data-mb-tabs":"","data-state":q.value,"data-variant":r.variant,"data-orientation":r.orientation,"aria-label":r.ariaLabel,onFocusin:t[0]||(t[0]=e=>w.value=!0),onFocusout:t[1]||(t[1]=e=>w.value=!1)},[d("div",{class:"mb-tabs__list",role:"tablist","aria-orientation":r.orientation},[(l(!0),s(B,null,$(c.value,(e,n)=>(l(),s("button",{id:`mb-tab-${e.id}`,key:e.id,class:"mb-tabs__tab",role:"tab",type:"button","aria-label":e.ariaLabel??(e.badge!==void 0?`${e.label} (${e.badge})`:e.label),"aria-selected":_(e)?"true":"false","aria-controls":`mb-tab-panel-${e.id}`,tabindex:_(e)?0:-1,"data-active":_(e)?"true":"false",disabled:C(e),onClick:o=>L(e,n,o),onKeydown:o=>F(e,n,o)},[e.icon&&e.icon!=="none"?(l(),s("span",K,[e.icon==="home"?(l(),s("svg",W,[...t[2]||(t[2]=[d("path",{d:"M3.75 10.2L12 3.5L20.25 10.2V20.5H14.75V14H9.25V20.5H3.75V10.2Z",stroke:"currentColor","stroke-width":"1.8","stroke-linejoin":"round"},null,-1)])])):e.icon==="more"?(l(),s("svg",Z,[...t[3]||(t[3]=[d("circle",{cx:"6",cy:"12",r:"1.8",fill:"currentColor"},null,-1),d("circle",{cx:"12",cy:"12",r:"1.8",fill:"currentColor"},null,-1),d("circle",{cx:"18",cy:"12",r:"1.8",fill:"currentColor"},null,-1)])])):(l(),s("svg",U,[...t[4]||(t[4]=[d("path",{d:"M12 4.5L19.5 12L12 19.5L4.5 12L12 4.5Z",stroke:"currentColor","stroke-width":"1.8","stroke-linejoin":"round"},null,-1)])]))])):T("",!0),d("span",R,z(e.label),1),e.dot?(l(),s("span",G)):T("",!0),e.badge!==void 0?(l(),s("span",J,z(e.badge),1)):T("",!0)],40,j))),128))],8,N)],40,E))}});h.__docgenInfo={exportName:"default",displayName:"MbTabs",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"MbTabItem"}]},defaultValue:{func:!1,value:"() => []"}},{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"state",required:!1,type:{name:"MbTabsState"},defaultValue:{func:!1,value:"'default'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Tabs'"}},{name:"variant",required:!1,type:{name:"MbTabsVariant"},defaultValue:{func:!1,value:"'pill'"}},{name:"orientation",required:!1,type:{name:"MbTabsOrientation"},defaultValue:{func:!1,value:"'horizontal'"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"tab-change",type:{names:["MbTabsChangePayload"]}}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/packages/marobase-ui/src/components/MbTabs.vue"]};const Q=["default","hover","focus","disabled"],X=["pill","line"],Y=["horizontal","vertical"],D=[{id:"overview",label:"Overview"},{id:"campaigns",label:"Campaigns",badge:12},{id:"audience",label:"Audience"},{id:"content",label:"Content"},{id:"settings",label:"Settings"}],ee=[{id:"all",label:"All campaigns"},{id:"email",label:"Email Campaigns",badge:8},{id:"transactional",label:"Transactional Email"},{id:"tags",label:"Campaign Tags"},{id:"templates",label:"Templates",disabled:!0}],ae=[{id:"all",label:"All",badge:1471},{id:"completed",label:"Completed",badge:892},{id:"processing",label:"Processing",badge:234},{id:"unfulfilled",label:"Not Fulfilled",badge:345}],ie={title:"Components/MbTabs",component:h,tags:["autodocs"],args:{items:D,modelValue:"overview",state:"default",disabled:!1,ariaLabel:"Workspace tabs",variant:"line",orientation:"horizontal"},argTypes:{state:{control:"inline-radio",options:Q},variant:{control:"inline-radio",options:X},orientation:{control:"inline-radio",options:Y}},render:r=>({components:{MbTabs:h},setup(){const u=x(r.modelValue??"overview");return I(()=>r.modelValue,k=>{u.value=k??"overview"}),{args:r,active:u}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;background:#f7f7f8;min-height:220px;">
        <MbTabs v-bind="args" :model-value="active" @update:modelValue="active = $event" />
        <p style="margin:0;color:#737373;font:500 12.5px/1.4 Inter, sans-serif;">Active tab: {{ active }}</p>
      </div>
    `})},p={},m={args:{items:D,modelValue:"overview",variant:"line",orientation:"horizontal",ariaLabel:"Marketing workspace sections"}},g={render:()=>({components:{MbTabs:h},setup(){return{active:x("marketing"),items:[{id:"marketing",label:"Marketing"},{id:"commerce",label:"Commerce"},{id:"audience",label:"Audience"},{id:"ops",label:"Operations"}]}},template:`
      <section style="display:grid;gap:16px;padding:24px;background:#f7f7f8;min-height:260px;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;">
          <div>
            <div style="font:500 12px/1.2 Inter, sans-serif;color:#737373;margin-bottom:4px;">Workspace</div>
            <div style="font:600 22px/1.2 Inter, sans-serif;color:#1a1814;">Marketing Performance</div>
          </div>
          <div style="display:flex;gap:8px;">
            <button style="height:36px;border-radius:999px;border:1px solid #e5e5e5;background:#ffffff;color:#1a1814;padding:0 14px;font:600 13px/1 Inter, sans-serif;">Filters</button>
            <button style="height:36px;border-radius:999px;border:1px solid #e5e5e5;background:#ffffff;color:#1a1814;padding:0 14px;font:600 13px/1 Inter, sans-serif;">Last 30 days</button>
            <button style="height:36px;border-radius:999px;border:1px solid #1ab7ea;background:#1ab7ea;color:#fff;padding:0 14px;font:600 13px/1 Inter, sans-serif;">Add widget</button>
          </div>
        </div>
        <MbTabs
          v-model="active"
          :items="items"
          variant="line"
          aria-label="Dashboard sections"
        />
      </section>
    `})},v={args:{items:ee,modelValue:"email",variant:"line",orientation:"vertical",ariaLabel:"Campaign navigation"}},y={args:{items:ae,modelValue:"all",variant:"pill",orientation:"horizontal",ariaLabel:"Order status filters"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: workspaceItems,
    modelValue: 'overview',
    variant: 'line',
    orientation: 'horizontal',
    ariaLabel: 'Marketing workspace sections'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MbTabs
    },
    setup() {
      const active = ref('marketing');
      const items: MbTabItem[] = [{
        id: 'marketing',
        label: 'Marketing'
      }, {
        id: 'commerce',
        label: 'Commerce'
      }, {
        id: 'audience',
        label: 'Audience'
      }, {
        id: 'ops',
        label: 'Operations'
      }];
      return {
        active,
        items
      };
    },
    template: \`
      <section style="display:grid;gap:16px;padding:24px;background:#f7f7f8;min-height:260px;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;">
          <div>
            <div style="font:500 12px/1.2 Inter, sans-serif;color:#737373;margin-bottom:4px;">Workspace</div>
            <div style="font:600 22px/1.2 Inter, sans-serif;color:#1a1814;">Marketing Performance</div>
          </div>
          <div style="display:flex;gap:8px;">
            <button style="height:36px;border-radius:999px;border:1px solid #e5e5e5;background:#ffffff;color:#1a1814;padding:0 14px;font:600 13px/1 Inter, sans-serif;">Filters</button>
            <button style="height:36px;border-radius:999px;border:1px solid #e5e5e5;background:#ffffff;color:#1a1814;padding:0 14px;font:600 13px/1 Inter, sans-serif;">Last 30 days</button>
            <button style="height:36px;border-radius:999px;border:1px solid #1ab7ea;background:#1ab7ea;color:#fff;padding:0 14px;font:600 13px/1 Inter, sans-serif;">Add widget</button>
          </div>
        </div>
        <MbTabs
          v-model="active"
          :items="items"
          variant="line"
          aria-label="Dashboard sections"
        />
      </section>
    \`
  })
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: verticalItems,
    modelValue: 'email',
    variant: 'line',
    orientation: 'vertical',
    ariaLabel: 'Campaign navigation'
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: filterItems,
    modelValue: 'all',
    variant: 'pill',
    orientation: 'horizontal',
    ariaLabel: 'Order status filters'
  }
}`,...y.parameters?.docs?.source}}};const re=["Playground","HorizontalTabs","PageHeaderTabs","VerticalSection","DisabledAndCounts"];export{y as DisabledAndCounts,m as HorizontalTabs,g as PageHeaderTabs,p as Playground,v as VerticalSection,re as __namedExportsOrder,ie as default};
