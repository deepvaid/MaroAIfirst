import{g as n,r as l}from"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Archive/Legacy Base/Chips",component:n,tags:["autodocs"],argTypes:{label:{control:"text",description:"Text displayed inside the chip.",table:{category:"Content"}},color:{control:"select",options:["primary","secondary","success","warning","error","info"],description:"Semantic color of the chip.",table:{category:"Appearance",defaultValue:{summary:"primary"}}},variant:{control:"select",options:["flat","tonal","outlined","elevated","text","plain"],description:"Visual style of the chip.",table:{category:"Appearance",defaultValue:{summary:"tonal"}}},size:{control:"select",options:["x-small","small","default","large"],description:"Size of the chip.",table:{category:"Appearance",defaultValue:{summary:"default"}}},closable:{control:"boolean",description:"Shows a remove icon — use for removable tags.",table:{category:"Behavior",defaultValue:{summary:"false"}}},filter:{control:"boolean",description:"Shows a check icon when selected in a v-chip-group.",table:{category:"Behavior",defaultValue:{summary:"false"}}},prependIcon:{control:"text",description:"Lucide icon prepended to the chip label (e.g. `circle-check`).",table:{category:"Icons",defaultValue:{summary:"—"}}},appendIcon:{control:"text",description:"Lucide icon appended to the chip label (e.g. `arrow-right`).",table:{category:"Icons",defaultValue:{summary:"—"}}},disabled:{control:"boolean",description:"Disables interaction with the chip.",table:{category:"State",defaultValue:{summary:"false"}}},rounded:{control:"select",options:["0","sm","md","lg","pill"],description:"Border-radius preset.",table:{category:"Appearance",defaultValue:{summary:"md"}}}},args:{label:"Chip Label",color:"primary",variant:"tonal",size:"default",closable:!1,filter:!1,prependIcon:"",appendIcon:"",disabled:!1,rounded:"md"},parameters:{docs:{description:{component:`### Overview
Vuetify's v-chip component for status labels, filter tags, and dismissible items. Configured with \`rounded="md"\` default. Compact and semantic.

Use the **Playground** story below to interactively configure every chip property via the Controls panel.

### 🟢 Do's
- Use semantic colors (success for positive, error for destructive, warning for caution)
- Keep chip labels short (1–2 words max)
- Use with icons for quick visual scanning
- Implement closable chips for tag removal
- Group related chips with v-chip-group for filtering

### 🔴 Don'ts
- Use chips as buttons (use v-btn instead)
- Nest chips inside chips
- Mix too many colors in a single view (max 3–4 semantic types)
- Use chips for navigation (use breadcrumbs or tabs)
- Create chips with very long labels (truncate at 20 chars)

### 💡 Best Practices
- Use prepend-icon with Lucide icons for better visual context
- Combine chips with filters for intuitive category selection
- Always show count badges next to filter chips (e.g., "Active (12)")
- Use closable variant for removable tags in input fields
- Keep chip size consistent within the same context`}}}},r={render:t=>({setup(){return{args:t}},template:`
      <v-chip
        :color="args.color"
        :variant="args.variant"
        :size="args.size"
        :closable="args.closable"
        :filter="args.filter"
        :prepend-icon="args.prependIcon || undefined"
        :append-icon="args.appendIcon || undefined"
        :disabled="args.disabled"
        :rounded="args.rounded"
      >
        {{ args.label }}
      </v-chip>
    `})},a={render:()=>({template:`
      <div class="d-flex flex-wrap gap-2">
        <v-chip color="primary" variant="flat">Flat</v-chip>
        <v-chip color="primary" variant="tonal">Tonal</v-chip>
        <v-chip color="primary" variant="outlined">Outlined</v-chip>
        <v-chip color="primary" variant="text">Text</v-chip>
        <v-chip color="primary" variant="elevated">Elevated</v-chip>
      </div>
    `}),parameters:{controls:{disable:!0}}},i={render:()=>({template:`
      <div class="d-flex flex-wrap gap-2">
        <v-chip color="primary" variant="tonal">Primary</v-chip>
        <v-chip color="secondary" variant="tonal">Secondary</v-chip>
        <v-chip color="success" variant="tonal">Success</v-chip>
        <v-chip color="warning" variant="tonal">Warning</v-chip>
        <v-chip color="error" variant="tonal">Error</v-chip>
        <v-chip color="info" variant="tonal">Info</v-chip>
      </div>
    `}),parameters:{controls:{disable:!0}}},c={render:()=>({template:`
      <div class="d-flex flex-wrap gap-2">
        <v-chip prepend-icon="circle-check" color="success">Success</v-chip>
        <v-chip prepend-icon="alert-circle" color="warning">Warning</v-chip>
        <v-chip prepend-icon="circle-x" color="error" closable>Closable</v-chip>
        <v-chip prepend-icon="filter" color="primary" filter>Filterable</v-chip>
        <v-chip append-icon="arrow-right" color="primary">With Append</v-chip>
      </div>
    `}),parameters:{controls:{disable:!0}}},o={render:()=>({template:`
      <div class="d-flex flex-wrap gap-2 align-center">
        <v-chip size="x-small" color="primary">X-Small</v-chip>
        <v-chip size="small" color="primary">Small</v-chip>
        <v-chip color="primary">Default</v-chip>
        <v-chip size="large" color="primary">Large</v-chip>
      </div>
    `}),parameters:{controls:{disable:!0}}},e={render:()=>({template:`
      <div>
        <p class="text-medium-emphasis mb-3">Filter by category:</p>
        <v-chip-group v-model="selected" column>
          <v-chip v-for="cat in categories" :key="cat.key" :value="cat.key" filter color="primary">
            {{ cat.label }} ({{ cat.count }})
          </v-chip>
        </v-chip-group>
        <p v-if="selected !== undefined" class="text-caption mt-4">Selected: {{ selected }}</p>
      </div>
    `,setup(){return{selected:l(void 0),categories:[{key:"all",label:"All",count:128},{key:"electronics",label:"Electronics",count:45},{key:"apparel",label:"Apparel",count:62},{key:"home",label:"Home",count:21}]}}}),parameters:{controls:{disable:!0}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    setup() {
      return {
        args
      };
    },
    template: \`
      <v-chip
        :color="args.color"
        :variant="args.variant"
        :size="args.size"
        :closable="args.closable"
        :filter="args.filter"
        :prepend-icon="args.prependIcon || undefined"
        :append-icon="args.appendIcon || undefined"
        :disabled="args.disabled"
        :rounded="args.rounded"
      >
        {{ args.label }}
      </v-chip>
    \`
  })
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex flex-wrap gap-2">
        <v-chip color="primary" variant="flat">Flat</v-chip>
        <v-chip color="primary" variant="tonal">Tonal</v-chip>
        <v-chip color="primary" variant="outlined">Outlined</v-chip>
        <v-chip color="primary" variant="text">Text</v-chip>
        <v-chip color="primary" variant="elevated">Elevated</v-chip>
      </div>
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex flex-wrap gap-2">
        <v-chip color="primary" variant="tonal">Primary</v-chip>
        <v-chip color="secondary" variant="tonal">Secondary</v-chip>
        <v-chip color="success" variant="tonal">Success</v-chip>
        <v-chip color="warning" variant="tonal">Warning</v-chip>
        <v-chip color="error" variant="tonal">Error</v-chip>
        <v-chip color="info" variant="tonal">Info</v-chip>
      </div>
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex flex-wrap gap-2">
        <v-chip prepend-icon="circle-check" color="success">Success</v-chip>
        <v-chip prepend-icon="alert-circle" color="warning">Warning</v-chip>
        <v-chip prepend-icon="circle-x" color="error" closable>Closable</v-chip>
        <v-chip prepend-icon="filter" color="primary" filter>Filterable</v-chip>
        <v-chip append-icon="arrow-right" color="primary">With Append</v-chip>
      </div>
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex flex-wrap gap-2 align-center">
        <v-chip size="x-small" color="primary">X-Small</v-chip>
        <v-chip size="small" color="primary">Small</v-chip>
        <v-chip color="primary">Default</v-chip>
        <v-chip size="large" color="primary">Large</v-chip>
      </div>
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div>
        <p class="text-medium-emphasis mb-3">Filter by category:</p>
        <v-chip-group v-model="selected" column>
          <v-chip v-for="cat in categories" :key="cat.key" :value="cat.key" filter color="primary">
            {{ cat.label }} ({{ cat.count }})
          </v-chip>
        </v-chip-group>
        <p v-if="selected !== undefined" class="text-caption mt-4">Selected: {{ selected }}</p>
      </div>
    \`,
    setup() {
      return {
        selected: ref(undefined),
        categories: [{
          key: 'all',
          label: 'All',
          count: 128
        }, {
          key: 'electronics',
          label: 'Electronics',
          count: 45
        }, {
          key: 'apparel',
          label: 'Apparel',
          count: 62
        }, {
          key: 'home',
          label: 'Home',
          count: 21
        }]
      };
    }
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...e.parameters?.docs?.source},description:{story:"Interactive filter-chip group.",...e.parameters?.docs?.description}}};const v=["Playground","Variants","SemanticColors","WithIcons","Sizes","ChipGroup"];export{e as ChipGroup,r as Playground,i as SemanticColors,o as Sizes,a as Variants,c as WithIcons,v as __namedExportsOrder,d as default};
