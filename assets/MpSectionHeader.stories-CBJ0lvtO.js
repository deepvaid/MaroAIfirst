import{U as r,a3 as o,Z as c,$ as l,a4 as p,a0 as d,a1 as i}from"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const m={class:"d-flex align-center justify-space-between mb-4"},g={class:"text-h6 font-weight-medium"},u={key:0,class:"d-flex gap-2"},n=r({__name:"MpSectionHeader",props:{title:{}},setup(s){return(a,v)=>(i(),o("div",m,[c("div",g,l(s.title),1),a.$slots.actions?(i(),o("div",u,[p(a.$slots,"actions")])):d("",!0)]))}});n.__docgenInfo={exportName:"default",displayName:"MpSectionHeader",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}}],slots:[{name:"actions"}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/src/components/MpSectionHeader.vue"]};const b={title:"Layout/MpSectionHeader",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
### Overview
The \`MpSectionHeader\` is used to divide content within a single page into logical blocks or sections, often placed above a grid of cards or a specific list.

### 🟢 Do's
- **Do** use this component to break up long scrolling pages with distinct visual anchors.
- **Do** use the \`#actions\` slot for simple, section-level controls like "View All" links or simple sorting dropdowns.
- **Do** keep titles brief and descriptive.

### 🔴 Don'ts
- **Don't** use this component inside a \`v-card\`. Cards have their own title patterns. This is strictly for dividing raw page real-estate.
- **Don't** place primary page actions (like "Save" or "Submit") in a section header. 

### 💡 Best Practices
- **Spacing:** The component comes with intrinsic bottom margins (\`mb-4\`). Ensure it has enough top spacing from preceding sections so it clearly anchors to the content below it.
        `}}},argTypes:{title:{control:"text"}}},e={args:{title:"Recent Orders"}},t={render:s=>({components:{MpSectionHeader:n},setup:()=>({args:s}),template:`
      <MpSectionHeader v-bind="args">
        <template #actions>
          <v-btn size="small" variant="text">Last 7 days</v-btn>
          <v-btn size="small" variant="text" color="primary">View All</v-btn>
        </template>
      </MpSectionHeader>
    `}),args:{title:"Top Campaigns"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Recent Orders'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MpSectionHeader
    },
    setup: () => ({
      args
    }),
    template: \`
      <MpSectionHeader v-bind="args">
        <template #actions>
          <v-btn size="small" variant="text">Last 7 days</v-btn>
          <v-btn size="small" variant="text" color="primary">View All</v-btn>
        </template>
      </MpSectionHeader>
    \`
  }),
  args: {
    title: 'Top Campaigns'
  }
}`,...t.parameters?.docs?.source}}};const S=["Default","WithActions"];export{e as Default,t as WithActions,S as __namedExportsOrder,b as default};
