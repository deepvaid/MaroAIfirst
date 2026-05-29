import{U as A,r as u,w as P,a3 as b,Z as a,a4 as y,a0 as x,ab as S,c as g,$ as p,a1 as h}from"./iframe-Dzs8NioN.js";import"./preload-helper-PPVm8Dsz.js";const L=["aria-label"],O={class:"mb-pop__content",role:"dialog","aria-modal":"false"},j={class:"mb-pop__header"},B={class:"mb-pop__title"},D={class:"mb-pop__body"},q={class:"mb-pop__description"},F={class:"mb-pop__footer"},N={key:0,class:"mb-pop__arrow","aria-hidden":"true"},n=A({__name:"MbPopover",props:{modelValue:{type:Boolean,default:void 0},title:{default:"Popover Header"},description:{default:"Helpful description for popover"},primaryLabel:{default:"Accept"},secondaryLabel:{default:"Cancel"},dismissible:{type:Boolean,default:!0},closeOnAction:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!0},width:{default:300},ariaLabel:{default:"Popover"}},emits:["update:modelValue","primary-click","secondary-click","close"],setup(t,{emit:r}){const o=t,s=r,f=g(()=>typeof o.modelValue=="boolean"),m=u(f.value?!!o.modelValue:!0);P(()=>o.modelValue,e=>{typeof e=="boolean"&&(m.value=e)});const I=g(()=>f.value?!!o.modelValue:m.value),M=g(()=>({width:`${o.width}px`}));function v(e){f.value||(m.value=e),s("update:modelValue",e)}function k(e,i){o.dismissible&&(v(!1),s("close",{action:e,event:i}))}function w(e){s("primary-click",{action:"primary",event:e}),o.closeOnAction&&v(!1)}function C(e){s("secondary-click",{action:"secondary",event:e}),o.closeOnAction&&v(!1)}function V(e){k("close",e)}function _(e){e.key==="Escape"&&(e.preventDefault(),k("escape",e))}return(e,i)=>I.value?(h(),b("section",{key:0,class:"mb-pop",style:S(M.value),"aria-label":t.ariaLabel,onKeydown:_},[a("div",O,[a("header",j,[y(e.$slots,"header",{},()=>[a("h3",B,p(t.title),1)]),t.dismissible?(h(),b("button",{key:0,type:"button",class:"mb-pop__close","aria-label":"Close popover",onClick:V},[...i[0]||(i[0]=[a("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[a("path",{d:"M7 7L17 17M17 7L7 17",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round"})],-1)])])):x("",!0)]),a("div",D,[y(e.$slots,"default",{},()=>[a("p",q,p(t.description),1)])]),a("footer",F,[y(e.$slots,"footer",{primaryClick:w,secondaryClick:C},()=>[a("button",{type:"button",class:"mb-pop__button mb-pop__button--secondary",onClick:C},p(t.secondaryLabel),1),a("button",{type:"button",class:"mb-pop__button mb-pop__button--primary",onClick:w},p(t.primaryLabel),1)])])]),t.showArrow?(h(),b("span",N)):x("",!0)],44,L)):x("",!0)}});n.__docgenInfo={exportName:"default",displayName:"MbPopover",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Popover Header'"}},{name:"description",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Helpful description for popover'"}},{name:"primaryLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Accept'"}},{name:"secondaryLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Cancel'"}},{name:"dismissible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnAction",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showArrow",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"width",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Popover'"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"primary-click",type:{names:["MbPopoverActionPayload"]}},{name:"secondary-click",type:{names:["MbPopoverActionPayload"]}},{name:"close",type:{names:["MbPopoverActionPayload"]}}],slots:[{name:"header"},{name:"default"},{name:"footer",scoped:!0,bindings:[{name:"primary-click",title:"binding"},{name:"secondary-click",title:"binding"}]}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/packages/marobase-ui/src/components/MbPopover.vue"]};const H={title:"Overlays/MbPopover",component:n,tags:["autodocs"],args:{modelValue:!0,title:"Filters",description:"Refine the current dashboard view.",primaryLabel:"Apply",secondaryLabel:"Cancel",dismissible:!0,closeOnAction:!1,showArrow:!0,width:420},render:t=>({components:{MbPopover:n},setup(){const r=u(!!t.modelValue);return P(()=>t.modelValue,o=>{r.value=!!o}),{args:t,open:r}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;background:#f7f7f8;min-height:520px;">
        <button style="height:36px;border-radius:999px;border:1px solid #e5e5e5;background:#ffffff;color:#1a1814;padding:0 14px;font:600 13px/1 Inter, sans-serif;" @click="open = true">Open popover</button>
        <MbPopover v-bind="args" :model-value="open" @update:modelValue="open = $event" />
      </div>
    `})},l={},d={render:()=>({components:{MbPopover:n},setup(){return{open:u(!0)}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;background:#f7f7f8;min-height:640px;">
        <button style="height:36px;border-radius:999px;border:1px solid #e5e5e5;background:#ffffff;color:#1a1814;padding:0 14px;font:600 13px/1 Inter, sans-serif;" @click="open = true">Filters</button>
        <MbPopover v-model="open" title="Filters" :width="420" aria-label="Dashboard filters popover">
          <div style="display:grid;gap:14px;">
            <v-select label="Data source" :items="['Marketing Cloud', 'Commerce Cloud', 'Service Cloud']" model-value="Marketing Cloud" />
            <v-select label="Owner" :items="['Anyone', 'Me', 'My team']" model-value="Anyone" />

            <section>
              <div style="font:600 11.5px/1 Inter, sans-serif;letter-spacing:1px;text-transform:uppercase;color:#737373;margin-bottom:8px;">Channel</div>
              <div style="display:flex;flex-wrap:wrap;gap:6px;">
                <v-chip variant="tonal" color="primary">Email</v-chip>
                <v-chip>SMS</v-chip>
                <v-chip>Push</v-chip>
                <v-chip>Web</v-chip>
                <v-chip>In-app</v-chip>
              </div>
            </section>

            <section>
              <div style="font:600 11.5px/1 Inter, sans-serif;letter-spacing:1px;text-transform:uppercase;color:#737373;margin-bottom:8px;">Campaign type</div>
              <div style="display:flex;flex-wrap:wrap;gap:6px;">
                <v-chip>Promotion</v-chip>
                <v-chip variant="tonal" color="primary">Newsletter</v-chip>
                <v-chip>Transactional</v-chip>
                <v-chip>Drip</v-chip>
              </div>
            </section>

            <section>
              <div style="font:600 11.5px/1 Inter, sans-serif;letter-spacing:1px;text-transform:uppercase;color:#737373;margin-bottom:8px;">Customer segment</div>
              <div style="display:flex;flex-wrap:wrap;gap:6px;">
                <v-chip variant="tonal" color="primary">High value</v-chip>
                <v-chip>New</v-chip>
                <v-chip>VIP</v-chip>
                <v-chip>Lapsed</v-chip>
              </div>
            </section>
          </div>
          <template #footer>
            <button style="height:34px;border:0;background:transparent;color:#737373;margin-right:auto;padding:0 12px;font:600 13px/1 Inter, sans-serif;">Reset</button>
            <button style="height:34px;border:0;background:transparent;color:#737373;padding:0 12px;font:600 13px/1 Inter, sans-serif;" @click="open = false">Cancel</button>
            <button style="height:34px;border-radius:999px;border:1px solid #1ab7ea;background:#1ab7ea;color:#fff;padding:0 14px;font:600 13px/1 Inter, sans-serif;" @click="open = false">Apply</button>
          </template>
        </MbPopover>
      </div>
    `})},c={render:()=>({components:{MbPopover:n},setup(){return{open:u(!0)}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;background:#f7f7f8;min-height:520px;">
        <button style="height:36px;border-radius:999px;border:1px solid #e5e5e5;background:#ffffff;color:#1a1814;padding:0 14px;font:600 13px/1 Inter, sans-serif;" @click="open = true">Widget details</button>
        <MbPopover v-model="open" title="Revenue Share (Top 10)" :width="340" aria-label="Widget details popover">
          <p style="font:400 12.5px/1.45 Inter, sans-serif;color:#737373;margin:0 0 12px;">Top 10 products by revenue, last 30 days, vs previous period.</p>
          <div style="display:grid;border-top:1px solid #e5e5e5;">
            <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e5e5e5;font:500 13px/1.3 Inter, sans-serif;"><span style="color:#737373;">Source</span><span>Commerce Cloud</span></div>
            <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e5e5e5;font:500 13px/1.3 Inter, sans-serif;"><span style="color:#737373;">Owner</span><span>Dana Vega</span></div>
            <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e5e5e5;font:500 13px/1.3 Inter, sans-serif;"><span style="color:#737373;">Updated</span><span>2 minutes ago</span></div>
            <div style="display:flex;justify-content:space-between;padding:10px 0 0;font:500 13px/1.3 Inter, sans-serif;"><span style="color:#737373;">Visibility</span><span>Workspace</span></div>
          </div>
          <template #footer>
            <button style="height:32px;border:0;background:transparent;color:#737373;padding:0 12px;font:600 12.5px/1 Inter, sans-serif;">Share</button>
            <button style="height:32px;border-radius:999px;border:1px solid #1ab7ea;background:#1ab7ea;color:#fff;padding:0 13px;font:600 12.5px/1 Inter, sans-serif;">Edit</button>
          </template>
        </MbPopover>
      </div>
    `})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MbPopover
    },
    setup() {
      const open = ref(true);
      return {
        open
      };
    },
    template: \`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;background:#f7f7f8;min-height:640px;">
        <button style="height:36px;border-radius:999px;border:1px solid #e5e5e5;background:#ffffff;color:#1a1814;padding:0 14px;font:600 13px/1 Inter, sans-serif;" @click="open = true">Filters</button>
        <MbPopover v-model="open" title="Filters" :width="420" aria-label="Dashboard filters popover">
          <div style="display:grid;gap:14px;">
            <v-select label="Data source" :items="['Marketing Cloud', 'Commerce Cloud', 'Service Cloud']" model-value="Marketing Cloud" />
            <v-select label="Owner" :items="['Anyone', 'Me', 'My team']" model-value="Anyone" />

            <section>
              <div style="font:600 11.5px/1 Inter, sans-serif;letter-spacing:1px;text-transform:uppercase;color:#737373;margin-bottom:8px;">Channel</div>
              <div style="display:flex;flex-wrap:wrap;gap:6px;">
                <v-chip variant="tonal" color="primary">Email</v-chip>
                <v-chip>SMS</v-chip>
                <v-chip>Push</v-chip>
                <v-chip>Web</v-chip>
                <v-chip>In-app</v-chip>
              </div>
            </section>

            <section>
              <div style="font:600 11.5px/1 Inter, sans-serif;letter-spacing:1px;text-transform:uppercase;color:#737373;margin-bottom:8px;">Campaign type</div>
              <div style="display:flex;flex-wrap:wrap;gap:6px;">
                <v-chip>Promotion</v-chip>
                <v-chip variant="tonal" color="primary">Newsletter</v-chip>
                <v-chip>Transactional</v-chip>
                <v-chip>Drip</v-chip>
              </div>
            </section>

            <section>
              <div style="font:600 11.5px/1 Inter, sans-serif;letter-spacing:1px;text-transform:uppercase;color:#737373;margin-bottom:8px;">Customer segment</div>
              <div style="display:flex;flex-wrap:wrap;gap:6px;">
                <v-chip variant="tonal" color="primary">High value</v-chip>
                <v-chip>New</v-chip>
                <v-chip>VIP</v-chip>
                <v-chip>Lapsed</v-chip>
              </div>
            </section>
          </div>
          <template #footer>
            <button style="height:34px;border:0;background:transparent;color:#737373;margin-right:auto;padding:0 12px;font:600 13px/1 Inter, sans-serif;">Reset</button>
            <button style="height:34px;border:0;background:transparent;color:#737373;padding:0 12px;font:600 13px/1 Inter, sans-serif;" @click="open = false">Cancel</button>
            <button style="height:34px;border-radius:999px;border:1px solid #1ab7ea;background:#1ab7ea;color:#fff;padding:0 14px;font:600 13px/1 Inter, sans-serif;" @click="open = false">Apply</button>
          </template>
        </MbPopover>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MbPopover
    },
    setup() {
      const open = ref(true);
      return {
        open
      };
    },
    template: \`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;background:#f7f7f8;min-height:520px;">
        <button style="height:36px;border-radius:999px;border:1px solid #e5e5e5;background:#ffffff;color:#1a1814;padding:0 14px;font:600 13px/1 Inter, sans-serif;" @click="open = true">Widget details</button>
        <MbPopover v-model="open" title="Revenue Share (Top 10)" :width="340" aria-label="Widget details popover">
          <p style="font:400 12.5px/1.45 Inter, sans-serif;color:#737373;margin:0 0 12px;">Top 10 products by revenue, last 30 days, vs previous period.</p>
          <div style="display:grid;border-top:1px solid #e5e5e5;">
            <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e5e5e5;font:500 13px/1.3 Inter, sans-serif;"><span style="color:#737373;">Source</span><span>Commerce Cloud</span></div>
            <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e5e5e5;font:500 13px/1.3 Inter, sans-serif;"><span style="color:#737373;">Owner</span><span>Dana Vega</span></div>
            <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e5e5e5;font:500 13px/1.3 Inter, sans-serif;"><span style="color:#737373;">Updated</span><span>2 minutes ago</span></div>
            <div style="display:flex;justify-content:space-between;padding:10px 0 0;font:500 13px/1.3 Inter, sans-serif;"><span style="color:#737373;">Visibility</span><span>Workspace</span></div>
          </div>
          <template #footer>
            <button style="height:32px;border:0;background:transparent;color:#737373;padding:0 12px;font:600 12.5px/1 Inter, sans-serif;">Share</button>
            <button style="height:32px;border-radius:999px;border:1px solid #1ab7ea;background:#1ab7ea;color:#fff;padding:0 13px;font:600 12.5px/1 Inter, sans-serif;">Edit</button>
          </template>
        </MbPopover>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const R=["Playground","FiltersPopover","AnchoredDetail"];export{c as AnchoredDetail,d as FiltersPopover,l as Playground,R as __namedExportsOrder,H as default};
