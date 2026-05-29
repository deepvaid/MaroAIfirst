import{U as p,W as c,X as u,a8 as f,a3 as d,a4 as t,a0 as i,Z as g,a1 as r}from"./iframe-DScATqdl.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const v={key:0,class:"mb-card__header"},y={key:1,class:"mb-card__media"},C={class:"mb-card__body"},M={key:2,class:"mb-card__footer"},m=p({__name:"MbCard",props:{tone:{default:"default"},radius:{default:"lg"},padding:{default:"md"},interactive:{type:Boolean,default:!1},as:{default:"article"}},setup(e){return(a,h)=>(r(),c(f(e.as),{class:"mb-card","data-tone":e.tone,"data-radius":e.radius,"data-padding":e.padding,"data-interactive":e.interactive?"true":"false"},{default:u(()=>[a.$slots.header?(r(),d("header",v,[t(a.$slots,"header",{},void 0,!0)])):i("",!0),a.$slots.media?(r(),d("div",y,[t(a.$slots,"media",{},void 0,!0)])):i("",!0),g("div",C,[t(a.$slots,"default",{},void 0,!0)]),a.$slots.footer?(r(),d("footer",M,[t(a.$slots,"footer",{},void 0,!0)])):i("",!0)]),_:3},8,["data-tone","data-radius","data-padding","data-interactive"]))}}),l=b(m,[["__scopeId","data-v-6852f74c"]]);m.__docgenInfo={exportName:"default",displayName:"MbCard",description:"",tags:{},props:[{name:"tone",required:!1,type:{name:"MbCardTone"},defaultValue:{func:!1,value:"'default'"}},{name:"radius",required:!1,type:{name:"MbCardRadius"},defaultValue:{func:!1,value:"'lg'"}},{name:"padding",required:!1,type:{name:"MbCardPadding"},defaultValue:{func:!1,value:"'md'"}},{name:"interactive",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"as",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'article'"}}],slots:[{name:"header"},{name:"media"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/packages/marobase-ui/src/components/MbCard.vue"]};const w={title:"Components/MbCard",component:l,tags:["autodocs"],args:{tone:"default",radius:"lg",padding:"md",interactive:!1,as:"article"},argTypes:{tone:{control:"inline-radio",options:["default","soft","warm","inverse"]},radius:{control:"inline-radio",options:["sm","md","lg","xl"]},padding:{control:"inline-radio",options:["sm","md","lg"]},interactive:{control:"boolean"},as:{control:"text"}},render:e=>({components:{MbCard:l},setup:()=>({args:e}),template:`
      <div style="padding:24px;max-width:720px;">
        <MbCard v-bind="args">
          <template #header>
            <strong>Revenue Overview</strong>
            <span style="opacity:.7;font-size:12px;">Last 30 days</span>
          </template>
          <p style="margin:0;">A flexible foundational card with optional media, header, and footer slots.</p>
          <template #footer>
            <span style="opacity:.78;font-size:12px;">Updated 5 min ago</span>
            <span style="font-weight:600;">$248,912</span>
          </template>
        </MbCard>
      </div>
    `})},n={},s={render:()=>({components:{MbCard:l},template:`
      <div style="display:grid;grid-template-columns:repeat(2,minmax(240px,1fr));gap:20px;padding:24px;">
        <MbCard tone="default"><strong>Default</strong><p style="margin:0;">Standard surface treatment.</p></MbCard>
        <MbCard tone="soft"><strong>Soft</strong><p style="margin:0;">Blue-tinted card for secondary emphasis.</p></MbCard>
        <MbCard tone="warm"><strong>Warm</strong><p style="margin:0;">Warm neutral treatment for content blocks.</p></MbCard>
        <MbCard tone="inverse"><strong>Inverse</strong><p style="margin:0;">High-contrast hero card style.</p></MbCard>
      </div>
    `})},o={args:{interactive:!0,tone:"soft",radius:"xl",padding:"lg"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MbCard
    },
    template: \`
      <div style="display:grid;grid-template-columns:repeat(2,minmax(240px,1fr));gap:20px;padding:24px;">
        <MbCard tone="default"><strong>Default</strong><p style="margin:0;">Standard surface treatment.</p></MbCard>
        <MbCard tone="soft"><strong>Soft</strong><p style="margin:0;">Blue-tinted card for secondary emphasis.</p></MbCard>
        <MbCard tone="warm"><strong>Warm</strong><p style="margin:0;">Warm neutral treatment for content blocks.</p></MbCard>
        <MbCard tone="inverse"><strong>Inverse</strong><p style="margin:0;">High-contrast hero card style.</p></MbCard>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    interactive: true,
    tone: 'soft',
    radius: 'xl',
    padding: 'lg'
  }
}`,...o.parameters?.docs?.source}}};const I=["Playground","Tones","Interactive"];export{o as Interactive,n as Playground,s as Tones,I as __namedExportsOrder,w as default};
