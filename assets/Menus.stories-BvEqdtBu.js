import{O as s,r as o}from"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Archive/Legacy Base/Menus",component:s,tags:["autodocs"],argTypes:{location:{control:"select",options:["bottom","top","start","end","bottom start","bottom end","top start","top end"],description:"Menu position relative to activator",table:{category:"Appearance",defaultValue:"bottom"}},transition:{control:"select",options:["scale-transition","fade-transition","slide-y-transition","slide-x-transition"],description:"Transition animation",table:{category:"Appearance",defaultValue:"scale-transition"}},closeOnContentClick:{control:"boolean",description:"Automatically close when menu item is clicked",table:{category:"Behavior",defaultValue:!0}},openOnHover:{control:"boolean",description:"Open menu on hover instead of click",table:{category:"Behavior",defaultValue:!1}},offset:{control:"text",description:"Offset distance from activator",table:{category:"Appearance",defaultValue:""}}},args:{location:"bottom",transition:"scale-transition",closeOnContentClick:!0,openOnHover:!1,offset:""},parameters:{docs:{description:{component:`
# Menus

Menus display a list of choices on a temporary surface. They appear when users interact with a button, action, or other control.

## Overview

VMenu component provides a context menu or dropdown list that appears at a specified location. It's ideal for actions, options, and navigation lists triggered by user interaction.

## Do's

- Use menus for action lists (Edit, Delete, Archive)
- Position menus near the activator button
- Close menu automatically on item selection
- Keep menu items concise and actionable
- Use consistent spacing between items

## Don'ts

- Don't use menus for primary navigation
- Avoid nesting menus deeply
- Don't put complex forms in menus
- Avoid menu items with lengthy descriptions

## Best Practices

- Use \`location="bottom start"\` for right-aligned menus
- Combine with VList for consistent styling
- Use icons with text for clarity
- Pair menu items with consistent action colors
        `}}}},e={render:i=>({setup(){const r=o(!1);return{args:i,menuOpen:r,items:[{icon:"pencil",title:"Edit"},{icon:"copy",title:"Duplicate"},{icon:"archive",title:"Archive"},{icon:"trash-2",title:"Delete",color:"error"}]}},template:`
      <div class="pa-6">
        <v-menu
          v-model="menuOpen"
          :location="args.location"
          :transition="args.transition"
          :close-on-content-click="args.closeOnContentClick"
          :open-on-hover="args.openOnHover"
          :offset="args.offset || undefined"
        >
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="more-vertical" variant="text" />
          </template>

          <v-list min-width="200px">
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :prepend-icon="item.icon"
              :title="item.title"
              :color="item.color"
            />
          </v-list>
        </v-menu>
      </div>
    `})},t={parameters:{controls:{disable:!0}},render:()=>({setup(){return{menuOpen:o(!1)}},template:`
      <div class="pa-6">
        <v-menu v-model="menuOpen" location="bottom start">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="more-horizontal" variant="text" />
          </template>

          <v-list min-width="200px">
            <v-list-item prepend-icon="pencil" title="Edit" />
            <v-list-item prepend-icon="copy" title="Duplicate" />
            <v-divider />
            <v-list-item prepend-icon="archive" title="Archive" />
            <v-list-item prepend-icon="trash-2" title="Delete" color="error" />
          </v-list>
        </v-menu>
      </div>
    `})},n={parameters:{controls:{disable:!0}},render:()=>({setup(){return{menuOpen:o(!1)}},template:`
      <div class="pa-6">
        <v-menu v-model="menuOpen">
          <template #activator="{ props }">
            <v-btn v-bind="props" text="Actions" append-icon="chevron-down" />
          </template>

          <v-list min-width="200px">
            <v-list-item prepend-icon="download" title="Export" />
            <v-list-item prepend-icon="upload" title="Import" />
            <v-divider />
            <v-list-item prepend-icon="refresh-cw" title="Refresh" />
            <v-list-item prepend-icon="printer" title="Print" />
          </v-list>
        </v-menu>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    setup() {
      const menuOpen = ref(false);
      const items = [{
        icon: 'pencil',
        title: 'Edit'
      }, {
        icon: 'copy',
        title: 'Duplicate'
      }, {
        icon: 'archive',
        title: 'Archive'
      }, {
        icon: 'trash-2',
        title: 'Delete',
        color: 'error'
      }];
      return {
        args,
        menuOpen,
        items
      };
    },
    template: \`
      <div class="pa-6">
        <v-menu
          v-model="menuOpen"
          :location="args.location"
          :transition="args.transition"
          :close-on-content-click="args.closeOnContentClick"
          :open-on-hover="args.openOnHover"
          :offset="args.offset || undefined"
        >
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="more-vertical" variant="text" />
          </template>

          <v-list min-width="200px">
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :prepend-icon="item.icon"
              :title="item.title"
              :color="item.color"
            />
          </v-list>
        </v-menu>
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
    setup() {
      const menuOpen = ref(false);
      return {
        menuOpen
      };
    },
    template: \`
      <div class="pa-6">
        <v-menu v-model="menuOpen" location="bottom start">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="more-horizontal" variant="text" />
          </template>

          <v-list min-width="200px">
            <v-list-item prepend-icon="pencil" title="Edit" />
            <v-list-item prepend-icon="copy" title="Duplicate" />
            <v-divider />
            <v-list-item prepend-icon="archive" title="Archive" />
            <v-list-item prepend-icon="trash-2" title="Delete" color="error" />
          </v-list>
        </v-menu>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    setup() {
      const menuOpen = ref(false);
      return {
        menuOpen
      };
    },
    template: \`
      <div class="pa-6">
        <v-menu v-model="menuOpen">
          <template #activator="{ props }">
            <v-btn v-bind="props" text="Actions" append-icon="chevron-down" />
          </template>

          <v-list min-width="200px">
            <v-list-item prepend-icon="download" title="Export" />
            <v-list-item prepend-icon="upload" title="Import" />
            <v-divider />
            <v-list-item prepend-icon="refresh-cw" title="Refresh" />
            <v-list-item prepend-icon="printer" title="Print" />
          </v-list>
        </v-menu>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};const m=["Playground","ContextMenu","DropdownActions"];export{t as ContextMenu,n as DropdownActions,e as Playground,m as __namedExportsOrder,p as default};
