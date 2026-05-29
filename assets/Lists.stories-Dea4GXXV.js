import{N as r}from"./iframe-Dzs8NioN.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Archive/Legacy Base/Lists",component:r,tags:["autodocs"],argTypes:{lines:{control:"select",options:[!1,"one","two","three"],description:"Number of text lines per item",table:{category:"Appearance",defaultValue:"one"}},density:{control:"select",options:["default","comfortable","compact"],description:"Vertical spacing density",table:{category:"Appearance",defaultValue:"default"}},nav:{control:"boolean",description:"Enables nav styles with rounded items",table:{category:"Appearance",defaultValue:!1}},disabled:{control:"boolean",description:"Disables the entire list",table:{category:"State",defaultValue:!1}},bgColor:{control:"text",description:"Background color",table:{category:"Appearance",defaultValue:""}}},args:{lines:"one",density:"default",nav:!1,disabled:!1,bgColor:""},parameters:{docs:{description:{component:`
# Lists

Lists are continuous, vertical indexes of text and images. They are ideal for presenting a series of items in a compact, scannable format.

## Overview

VList and VListItem components create organized, flexible lists with support for icons, avatars, nested items, and subheaders. Use lists for navigation, menu items, or data presentation.

## Do's

- Use lists for related grouped items
- Include icons or avatars for visual hierarchy
- Use \`nav\` variant for navigation lists
- Group related items with subheaders
- Keep list items concise and scannable

## Don'ts

- Don't overload list items with content
- Avoid mixing different content types without organization
- Don't use lists for complex data tables
- Avoid very long list item text

## Best Practices

- Use \`density="compact"\` for dense data lists
- Combine with VListItemGroup for selection
- Use \`lines="two"\` or \`"three"\` for additional context
- Pair with VDivider for visual separation
        `}}}},e={render:a=>({setup(){return{args:a,items:[{icon:"home",title:"Dashboard"},{icon:"bar-chart-2",title:"Analytics"},{icon:"shopping-cart",title:"Orders"},{icon:"mail",title:"Campaigns"},{icon:"settings",title:"Settings"}]}},template:`
      <div class="pa-6">
        <v-list
          :lines="args.lines"
          :density="args.density"
          :nav="args.nav"
          :disabled="args.disabled"
          :bg-color="args.bgColor"
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :prepend-icon="item.icon"
            :title="item.title"
          />
        </v-list>
      </div>
    `})},t={parameters:{controls:{disable:!0}},render:()=>({template:`
      <div class="pa-6">
        <v-list lines="one">
          <v-list-item prepend-icon="home" title="Dashboard" />
          <v-list-item prepend-icon="bar-chart-2" title="Analytics" />
          <v-list-item prepend-icon="shopping-cart" title="Orders" />
          <v-list-item prepend-icon="mail" title="Campaigns" />
        </v-list>
      </div>
    `})},i={parameters:{controls:{disable:!0}},render:()=>({template:`
      <div class="pa-6">
        <v-list lines="two">
          <v-list-item prepend-icon="user" title="John Doe" subtitle="john@example.com" />
          <v-list-item prepend-icon="user" title="Jane Smith" subtitle="jane@example.com" />
          <v-list-item prepend-icon="user" title="Bob Johnson" subtitle="bob@example.com" />
        </v-list>
      </div>
    `})},s={parameters:{controls:{disable:!0}},render:()=>({template:`
      <div class="pa-6">
        <v-list>
          <v-list-item title="Item 1">
            <template #append>
              <v-icon icon="chevron-right" />
            </template>
          </v-list-item>
          <v-list-item title="Item 2">
            <template #append>
              <v-icon icon="chevron-right" />
            </template>
          </v-list-item>
          <v-list-item title="Item 3">
            <template #append>
              <v-icon icon="chevron-right" />
            </template>
          </v-list-item>
        </v-list>
      </div>
    `})},n={parameters:{controls:{disable:!0}},render:()=>({template:`
      <div class="pa-6">
        <v-list>
          <v-list-subheader title="Navigation" />
          <v-list-item prepend-icon="home" title="Dashboard" />
          <v-list-item prepend-icon="bar-chart-2" title="Analytics" />
          
          <v-divider class="my-2" />
          
          <v-list-subheader title="Management" />
          <v-list-item prepend-icon="shopping-cart" title="Orders" />
          <v-list-item prepend-icon="package" title="Products" />
          
          <v-divider class="my-2" />
          
          <v-list-subheader title="Settings" />
          <v-list-item prepend-icon="settings" title="Account" />
          <v-list-item prepend-icon="shield" title="Security" />
        </v-list>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    setup() {
      const items = [{
        icon: 'home',
        title: 'Dashboard'
      }, {
        icon: 'bar-chart-2',
        title: 'Analytics'
      }, {
        icon: 'shopping-cart',
        title: 'Orders'
      }, {
        icon: 'mail',
        title: 'Campaigns'
      }, {
        icon: 'settings',
        title: 'Settings'
      }];
      return {
        args,
        items
      };
    },
    template: \`
      <div class="pa-6">
        <v-list
          :lines="args.lines"
          :density="args.density"
          :nav="args.nav"
          :disabled="args.disabled"
          :bg-color="args.bgColor"
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :prepend-icon="item.icon"
            :title="item.title"
          />
        </v-list>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    template: \`
      <div class="pa-6">
        <v-list lines="one">
          <v-list-item prepend-icon="home" title="Dashboard" />
          <v-list-item prepend-icon="bar-chart-2" title="Analytics" />
          <v-list-item prepend-icon="shopping-cart" title="Orders" />
          <v-list-item prepend-icon="mail" title="Campaigns" />
        </v-list>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    template: \`
      <div class="pa-6">
        <v-list lines="two">
          <v-list-item prepend-icon="user" title="John Doe" subtitle="john@example.com" />
          <v-list-item prepend-icon="user" title="Jane Smith" subtitle="jane@example.com" />
          <v-list-item prepend-icon="user" title="Bob Johnson" subtitle="bob@example.com" />
        </v-list>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    template: \`
      <div class="pa-6">
        <v-list>
          <v-list-item title="Item 1">
            <template #append>
              <v-icon icon="chevron-right" />
            </template>
          </v-list-item>
          <v-list-item title="Item 2">
            <template #append>
              <v-icon icon="chevron-right" />
            </template>
          </v-list-item>
          <v-list-item title="Item 3">
            <template #append>
              <v-icon icon="chevron-right" />
            </template>
          </v-list-item>
        </v-list>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    template: \`
      <div class="pa-6">
        <v-list>
          <v-list-subheader title="Navigation" />
          <v-list-item prepend-icon="home" title="Dashboard" />
          <v-list-item prepend-icon="bar-chart-2" title="Analytics" />
          
          <v-divider class="my-2" />
          
          <v-list-subheader title="Management" />
          <v-list-item prepend-icon="shopping-cart" title="Orders" />
          <v-list-item prepend-icon="package" title="Products" />
          
          <v-divider class="my-2" />
          
          <v-list-subheader title="Settings" />
          <v-list-item prepend-icon="settings" title="Account" />
          <v-list-item prepend-icon="shield" title="Security" />
        </v-list>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};const d=["Playground","SingleLine","TwoLine","ActionList","NestedGroups"];export{s as ActionList,n as NestedGroups,e as Playground,t as SingleLine,i as TwoLine,d as __namedExportsOrder,p as default};
