import{U as S,r as h,w as g,a3 as n,a0 as s,Z as r,a4 as f,$ as c,ab as L,c as y,a1 as o}from"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const q=["data-backdrop"],A=["aria-label"],O={class:"mb-drawer__header"},E={class:"mb-drawer__title-wrap"},F={class:"mb-drawer__title"},N={key:0,class:"mb-drawer__subtitle"},P={class:"mb-drawer__content"},$={key:0,class:"mb-drawer__footer"},b=S({__name:"MbDrawer",props:{modelValue:{type:Boolean,default:void 0},title:{default:"Add new card"},subtitle:{default:"Visible only for you"},primaryLabel:{default:"Save changes"},secondaryLabel:{default:"Cancel"},width:{default:424},showBackdrop:{type:Boolean,default:!1},closeOnBackdrop:{type:Boolean,default:!0},dismissible:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},ariaLabel:{default:"Drawer"}},emits:["update:modelValue","primary-click","secondary-click","close"],setup(a,{emit:d}){const t=a,i=d,m=y(()=>typeof t.modelValue=="boolean"),_=h(m.value?!!t.modelValue:!0),C=y(()=>({width:`${t.width}px`}));g(()=>t.modelValue,e=>{typeof e=="boolean"&&(_.value=e)});const V=y(()=>m.value?!!t.modelValue:_.value);function B(e){m.value||(_.value=e),i("update:modelValue",e)}function w(e,l){e==="close"&&!t.dismissible||(B(!1),i("close",{reason:e,event:l}))}function D(e){!t.showBackdrop||!t.closeOnBackdrop||w("backdrop",e)}function M(e){w("close",e)}function v(e){i("secondary-click",{reason:"cancel",event:e})}function k(e){i("primary-click",{reason:"primary",event:e})}function x(e){e.key==="Escape"&&(e.preventDefault(),w("escape",e))}return(e,l)=>V.value?(o(),n("div",{key:0,class:"mb-drawer","data-backdrop":a.showBackdrop?"true":"false",onKeydown:x},[a.showBackdrop?(o(),n("button",{key:0,type:"button",class:"mb-drawer__backdrop","aria-label":"Close drawer",onClick:D})):s("",!0),r("aside",{class:"mb-drawer__panel",style:L(C.value),role:"dialog","aria-modal":"true","aria-label":a.ariaLabel},[r("header",O,[f(e.$slots,"icon",{},()=>[l[0]||(l[0]=r("span",{class:"mb-drawer__icon","aria-hidden":"true"},[r("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("rect",{x:"4.5",y:"7",width:"15",height:"10",rx:"2",stroke:"currentColor","stroke-width":"1.8"}),r("path",{d:"M4.8 10H19.2",stroke:"currentColor","stroke-width":"1.8"})])],-1))]),r("div",E,[r("h2",F,c(a.title),1),a.subtitle?(o(),n("p",N,c(a.subtitle),1)):s("",!0)]),a.dismissible?(o(),n("button",{key:0,type:"button",class:"mb-drawer__close","aria-label":"Close drawer",onClick:M},[...l[1]||(l[1]=[r("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[r("path",{d:"M7 7L17 17M17 7L7 17",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round"})],-1)])])):s("",!0)]),l[3]||(l[3]=r("div",{class:"mb-drawer__divider"},null,-1)),r("div",P,[f(e.$slots,"default",{},()=>[l[2]||(l[2]=r("p",{class:"mb-drawer__empty"},"Add drawer content with the default slot.",-1))])]),a.showFooter?(o(),n("footer",$,[f(e.$slots,"footer",{primaryClick:k,secondaryClick:v},()=>[r("button",{type:"button",class:"mb-drawer__footer-btn mb-drawer__footer-btn--secondary",onClick:v},c(a.secondaryLabel),1),r("button",{type:"button",class:"mb-drawer__footer-btn mb-drawer__footer-btn--primary",onClick:k},c(a.primaryLabel),1)])])):s("",!0)],12,A)],40,q)):s("",!0)}});b.__docgenInfo={exportName:"default",displayName:"MbDrawer",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Add new card'"}},{name:"subtitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Visible only for you'"}},{name:"primaryLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Save changes'"}},{name:"secondaryLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Cancel'"}},{name:"width",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"424"}},{name:"showBackdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"closeOnBackdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"dismissible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showFooter",description:"When false, footer (default actions and #footer slot) is not rendered.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Drawer'"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"primary-click",type:{names:["MbDrawerActionPayload"]}},{name:"secondary-click",type:{names:["MbDrawerActionPayload"]}},{name:"close",type:{names:["MbDrawerActionPayload"]}}],slots:[{name:"icon"},{name:"default"},{name:"footer",scoped:!0,bindings:[{name:"primary-click",title:"binding"},{name:"secondary-click",title:"binding"}]}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/packages/marobase-ui/src/components/MbDrawer.vue"]};const R={title:"Overlays/MbDrawer",component:b,tags:["autodocs"],args:{modelValue:!0,title:"Edit widget",subtitle:"Revenue Share (Top 10)",primaryLabel:"Save changes",secondaryLabel:"Cancel",width:440,showBackdrop:!1,closeOnBackdrop:!0,dismissible:!0},render:a=>({components:{MbDrawer:b},setup(){const d=h(!!a.modelValue);return g(()=>a.modelValue,t=>{d.value=!!t}),{args:a,open:d}},template:`
      <div style="display:grid;align-items:stretch;justify-items:stretch;padding:0;width:100%;min-height:720px;background:#f7f7f8;">
        <MbDrawer v-bind="args" :model-value="open" @update:modelValue="open = $event">
          <form class="mb-drawer__form" @submit.prevent>
            <label class="mb-drawer__field">
              <span class="mb-drawer__field-label">Title</span>
              <input class="mb-drawer__input" type="text" value="Revenue Share (Top 10)" />
            </label>
            <label class="mb-drawer__field">
              <span class="mb-drawer__field-label">Chart type</span>
              <span class="mb-drawer__input-wrap mb-drawer__input-wrap--select">
                <span class="mb-drawer__select-value">Bar</span>
                <span class="mb-drawer__chevron" aria-hidden="true">v</span>
              </span>
            </label>
            <label class="mb-drawer__field">
              <span class="mb-drawer__field-label">Data source</span>
              <span class="mb-drawer__input-wrap mb-drawer__input-wrap--select">
                <span class="mb-drawer__select-value">Commerce Cloud</span>
                <span class="mb-drawer__chevron" aria-hidden="true">v</span>
              </span>
            </label>
            <label class="mb-drawer__field">
              <span class="mb-drawer__field-label">Metric</span>
              <span class="mb-drawer__input-wrap mb-drawer__input-wrap--select">
                <span class="mb-drawer__select-value">Revenue</span>
                <span class="mb-drawer__chevron" aria-hidden="true">v</span>
              </span>
            </label>
            <div class="mb-drawer__row mb-drawer__row--2">
              <label class="mb-drawer__field">
                <span class="mb-drawer__field-label">Group by</span>
                <span class="mb-drawer__input-wrap mb-drawer__input-wrap--select">
                  <span class="mb-drawer__select-value">Product</span>
                  <span class="mb-drawer__chevron" aria-hidden="true">v</span>
                </span>
              </label>
              <label class="mb-drawer__field">
                <span class="mb-drawer__field-label">Date range</span>
                <span class="mb-drawer__input-wrap mb-drawer__input-wrap--select">
                  <span class="mb-drawer__select-value">Last 30 days</span>
                  <span class="mb-drawer__chevron" aria-hidden="true">v</span>
                </span>
              </label>
            </div>
            <label class="mb-drawer__check">
              <input type="checkbox" checked />
              <span>Compare with previous period</span>
            </label>
          </form>
          <template #footer>
            <button type="button" class="mb-drawer__footer-btn mb-drawer__footer-btn--secondary" @click="open = false">Cancel</button>
            <button type="button" class="mb-drawer__footer-btn mb-drawer__footer-btn--primary" @click="open = false">Save changes</button>
          </template>
        </MbDrawer>
      </div>
    `})},p={},u={render:()=>({components:{MbDrawer:b},setup(){return{open:h(!0)}},template:`
      <div style="display:grid;align-items:stretch;justify-items:stretch;padding:0;width:100%;min-height:720px;background:#f7f7f8;">
        <MbDrawer
          v-model="open"
          title="New data source"
          subtitle="Connect a workspace data source"
          primary-label="Connect"
          secondary-label="Cancel"
          :width="460"
        >
          <form class="mb-drawer__form" @submit.prevent>
            <label class="mb-drawer__field">
              <span class="mb-drawer__field-label">Name</span>
              <input class="mb-drawer__input" type="text" placeholder="Marketing Cloud - production" />
            </label>
            <label class="mb-drawer__field">
              <span class="mb-drawer__field-label">Type</span>
              <span class="mb-drawer__input-wrap mb-drawer__input-wrap--select">
                <span class="mb-drawer__select-value">Marketing Cloud</span>
                <span class="mb-drawer__chevron" aria-hidden="true">v</span>
              </span>
            </label>
            <label class="mb-drawer__field">
              <span class="mb-drawer__field-label">Endpoint</span>
              <input class="mb-drawer__input" type="text" placeholder="https://..." />
            </label>
            <label class="mb-drawer__field">
              <span class="mb-drawer__field-label">API key</span>
              <input class="mb-drawer__input" type="password" placeholder="sk-..." />
            </label>
            <section class="mb-drawer__note" aria-label="Connection note">
              <div class="mb-drawer__note-body">
                <strong>Credentials stay encrypted</strong>
                <p>Da Vinci can only read metadata until the connection is approved.</p>
              </div>
            </section>
          </form>
          <template #footer>
            <button type="button" class="mb-drawer__footer-btn mb-drawer__footer-btn--secondary" @click="open = false">Cancel</button>
            <button type="button" class="mb-drawer__footer-btn mb-drawer__footer-btn--primary" @click="open = false">Connect</button>
          </template>
        </MbDrawer>
      </div>
    `})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MbDrawer
    },
    setup() {
      const open = ref(true);
      return {
        open
      };
    },
    template: \`
      <div style="display:grid;align-items:stretch;justify-items:stretch;padding:0;width:100%;min-height:720px;background:#f7f7f8;">
        <MbDrawer
          v-model="open"
          title="New data source"
          subtitle="Connect a workspace data source"
          primary-label="Connect"
          secondary-label="Cancel"
          :width="460"
        >
          <form class="mb-drawer__form" @submit.prevent>
            <label class="mb-drawer__field">
              <span class="mb-drawer__field-label">Name</span>
              <input class="mb-drawer__input" type="text" placeholder="Marketing Cloud - production" />
            </label>
            <label class="mb-drawer__field">
              <span class="mb-drawer__field-label">Type</span>
              <span class="mb-drawer__input-wrap mb-drawer__input-wrap--select">
                <span class="mb-drawer__select-value">Marketing Cloud</span>
                <span class="mb-drawer__chevron" aria-hidden="true">v</span>
              </span>
            </label>
            <label class="mb-drawer__field">
              <span class="mb-drawer__field-label">Endpoint</span>
              <input class="mb-drawer__input" type="text" placeholder="https://..." />
            </label>
            <label class="mb-drawer__field">
              <span class="mb-drawer__field-label">API key</span>
              <input class="mb-drawer__input" type="password" placeholder="sk-..." />
            </label>
            <section class="mb-drawer__note" aria-label="Connection note">
              <div class="mb-drawer__note-body">
                <strong>Credentials stay encrypted</strong>
                <p>Da Vinci can only read metadata until the connection is approved.</p>
              </div>
            </section>
          </form>
          <template #footer>
            <button type="button" class="mb-drawer__footer-btn mb-drawer__footer-btn--secondary" @click="open = false">Cancel</button>
            <button type="button" class="mb-drawer__footer-btn mb-drawer__footer-btn--primary" @click="open = false">Connect</button>
          </template>
        </MbDrawer>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};const j=["WidgetEditFlyout","DataSourceFlyout"];export{u as DataSourceFlyout,p as WidgetEditFlyout,j as __namedExportsOrder,R as default};
