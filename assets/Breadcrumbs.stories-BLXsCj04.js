import{b as o}from"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Archive/Legacy Base/Breadcrumbs",component:o,tags:["autodocs"],argTypes:{divider:{control:"text",description:"Divider character or Lucide icon name between breadcrumb items.",table:{category:"Appearance",defaultValue:{summary:"/"}}},density:{control:"select",options:["default","comfortable","compact"],description:"Controls vertical padding.",table:{category:"Appearance",defaultValue:{summary:"default"}}},rounded:{control:"select",options:["0","sm","lg","xl","pill"],description:"Border-radius preset.",table:{category:"Appearance",defaultValue:{summary:"0"}}},color:{control:"text",description:"Color applied to breadcrumb links.",table:{category:"Appearance",defaultValue:{summary:"—"}}},activeColor:{control:"text",description:"Color of the active (current) breadcrumb item.",table:{category:"Appearance",defaultValue:{summary:"—"}}},disabled:{control:"boolean",description:"Disables all breadcrumb items.",table:{category:"State",defaultValue:{summary:"false"}}}},args:{divider:"/",density:"default",rounded:"0",color:"",activeColor:"",disabled:!1},parameters:{docs:{description:{component:`### Overview
v-breadcrumbs displays the current page's location within a site hierarchy. It provides a clickable navigation trail that helps users understand where they are and navigate back up the hierarchy.

Use the **Playground** story to interactively configure breadcrumb properties via the Controls panel.

### 🟢 Do's
- Always show breadcrumbs for nested pages (2+ levels deep)
- Include the home icon/link as the first item
- Use for hierarchical navigation within a section
- Keep breadcrumb trail to 4 levels or fewer
- Make items clickable for back-navigation

### 🔴 Don'ts
- Don't show breadcrumbs for top-level pages
- Don't use more than 4-5 levels deep (collapse earlier levels)
- Don't make breadcrumbs larger than supporting text
- Don't use breadcrumbs for step-by-step processes (use a stepper)

### 💡 Best Practices
- Use consistent divider characters (forward slash or chevron)
- Match breadcrumb hierarchy to actual page structure
- Highlight the current page (no link) at the end
- Include icons for the home item for instant recognition
- Test on mobile to ensure proper truncation behavior`}}}},i=[{title:"Home",href:"#/"},{title:"Commerce",href:"#/commerce"},{title:"Sales Orders",href:"#/commerce/orders"},{title:"Order #12345"}],a={render:s=>({setup(){return{args:s,items:i}},template:`
      <v-breadcrumbs
        :items="items"
        :divider="args.divider"
        :density="args.density"
        :rounded="args.rounded"
        :color="args.color || undefined"
        :active-color="args.activeColor || undefined"
        :disabled="args.disabled"
      />
    `})},e={render:()=>({template:`
      <v-breadcrumbs :items="[
        { title: 'Home', href: '#/' },
        { title: 'Commerce', href: '#/commerce' },
        { title: 'Sales Orders', href: '#/commerce/orders' },
        { title: 'Order #12345' }
      ]" />
    `}),parameters:{controls:{disable:!0}}},r={render:()=>({template:`
      <v-breadcrumbs :items="[
        { title: 'Home', href: '#/', icon: 'home' },
        { title: 'Products', href: '#/products' },
        { title: 'Electronics', href: '#/products/electronics' },
        { title: 'Laptops' }
      ]" />
    `}),parameters:{controls:{disable:!0}}},t={render:()=>({template:`
      <v-breadcrumbs
        :items="[
          { title: 'Dashboard', href: '#/' },
          { title: 'Marketing', href: '#/marketing' },
          { title: 'Campaigns', href: '#/marketing/campaigns' },
          { title: 'Summer Sale' }
        ]"
        divider="chevron-right"
      />
    `}),parameters:{controls:{disable:!0}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
    setup() {
      return {
        args,
        items: sampleItems
      };
    },
    template: \`
      <v-breadcrumbs
        :items="items"
        :divider="args.divider"
        :density="args.density"
        :rounded="args.rounded"
        :color="args.color || undefined"
        :active-color="args.activeColor || undefined"
        :disabled="args.disabled"
      />
    \`
  })
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <v-breadcrumbs :items="[
        { title: 'Home', href: '#/' },
        { title: 'Commerce', href: '#/commerce' },
        { title: 'Sales Orders', href: '#/commerce/orders' },
        { title: 'Order #12345' }
      ]" />
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...e.parameters?.docs?.source},description:{story:"Standard breadcrumb trail with slash dividers.",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <v-breadcrumbs :items="[
        { title: 'Home', href: '#/', icon: 'home' },
        { title: 'Products', href: '#/products' },
        { title: 'Electronics', href: '#/products/electronics' },
        { title: 'Laptops' }
      ]" />
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Breadcrumbs with a home icon on the first item.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <v-breadcrumbs
        :items="[
          { title: 'Dashboard', href: '#/' },
          { title: 'Marketing', href: '#/marketing' },
          { title: 'Campaigns', href: '#/marketing/campaigns' },
          { title: 'Summer Sale' }
        ]"
        divider="chevron-right"
      />
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"Chevron divider instead of the default slash.",...t.parameters?.docs?.description}}};const l=["Playground","Default","WithIcons","CustomDivider"];export{t as CustomDivider,e as Default,a as Playground,r as WithIcons,l as __namedExportsOrder,d as default};
