import{U as y,a3 as s,a4 as c,a0 as o,Z as b,$ as l,W as f,a1 as a}from"./iframe-Dzs8NioN.js";import{_ as m}from"./MbButton-tKQjI-r5.js";import"./preload-helper-PPVm8Dsz.js";const g={class:"mb-empty-state",role:"status"},h={key:0,class:"mb-empty-state__icon"},M={class:"mb-empty-state__title"},_={key:1,class:"mb-empty-state__desc"},k={key:2,class:"mb-empty-state__action"},i=y({__name:"MbEmptyState",props:{title:{},description:{},actionLabel:{}},emits:["action"],setup(t,{emit:d}){const p=d;function u(e){p("action",e)}return(e,S)=>(a(),s("div",g,[e.$slots.icon?(a(),s("div",h,[c(e.$slots,"icon")])):o("",!0),b("h2",M,l(t.title),1),t.description?(a(),s("p",_,l(t.description),1)):o("",!0),t.actionLabel||e.$slots.actions?(a(),s("div",k,[c(e.$slots,"actions",{},()=>[t.actionLabel?(a(),f(m,{key:0,"style-type":"filled",size:"md",label:t.actionLabel,"icon-mode":"with-label","aria-label":t.actionLabel,onClick:u},null,8,["label","aria-label"])):o("",!0)])])):o("",!0)]))}});i.__docgenInfo={exportName:"default",displayName:"MbEmptyState",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"description",required:!1,type:{name:"string"}},{name:"actionLabel",required:!1,type:{name:"string"}}],events:[{name:"action",type:{names:["MouseEvent"]}}],slots:[{name:"icon"},{name:"actions"}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/packages/marobase-ui/src/components/MbEmptyState.vue"]};const N={title:"Components/MbEmptyState",component:i,tags:["autodocs"]},r={args:{title:"No results yet",description:"Try adjusting your filters or search to find what you are looking for."}},n={render:t=>({components:{MbEmptyState:i,MbButton:m},setup(){return{args:t}},template:`
      <MbEmptyState v-bind="args">
        <template #actions>
          <MbButton style-type="filled" size="md" label="Create item" @click="() => {}" />
        </template>
      </MbEmptyState>
    `}),args:{title:"Nothing here",description:"Get started by creating your first record."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No results yet',
    description: 'Try adjusting your filters or search to find what you are looking for.'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MbEmptyState,
      MbButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <MbEmptyState v-bind="args">
        <template #actions>
          <MbButton style-type="filled" size="md" label="Create item" @click="() => {}" />
        </template>
      </MbEmptyState>
    \`
  }),
  args: {
    title: 'Nothing here',
    description: 'Get started by creating your first record.'
  }
}`,...n.parameters?.docs?.source}}};const C=["Default","WithAction"];export{r as Default,n as WithAction,C as __namedExportsOrder,N as default};
