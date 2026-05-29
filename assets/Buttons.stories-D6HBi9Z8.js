import{e as v}from"./iframe-Dzs8NioN.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Archive/Legacy Base/Buttons",component:v,tags:["autodocs"],argTypes:{label:{control:"text",description:"Button label text (maps to default slot).",table:{category:"Content"}},variant:{control:"select",options:["elevated","flat","tonal","outlined","text","plain"],description:"Visual style of the button. **Flat/Elevated** = primary CTA, **Tonal/Outlined** = secondary, **Text/Plain** = tertiary.",table:{category:"Appearance",defaultValue:{summary:"flat"}}},size:{control:"select",options:["x-small","small","default","large","x-large"],description:"Controls the height and font-size of the button.",table:{category:"Appearance",defaultValue:{summary:"default"}}},color:{control:"select",options:["primary","secondary","success","warning","error","info"],description:"Semantic color applied to the button. Use `error` exclusively for destructive actions.",table:{category:"Appearance",defaultValue:{summary:"primary"}}},rounded:{control:"select",options:["0","sm","lg","pill"],description:"Border-radius preset. The Maropost default is `lg` (12 px).",table:{category:"Appearance",defaultValue:{summary:"lg"}}},disabled:{control:"boolean",description:"Disables the button, preventing user interaction.",table:{category:"State",defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Shows a loading spinner and disables interaction.",table:{category:"State",defaultValue:{summary:"false"}}},prependIcon:{control:"text",description:"Lucide icon to prepend (left side), e.g. `plus`. Leave empty for no icon.",table:{category:"Icons",defaultValue:{summary:"—"}}},appendIcon:{control:"text",description:"Lucide icon to append (right side), e.g. `chevron-down`. Typically used for dropdowns.",table:{category:"Icons",defaultValue:{summary:"—"}}},block:{control:"boolean",description:"Expands the button to 100 % width of its parent container.",table:{category:"Layout",defaultValue:{summary:"false"}}}},args:{label:"Button",variant:"flat",size:"default",color:"primary",rounded:"lg",disabled:!1,loading:!1,prependIcon:"",appendIcon:"",block:!1},parameters:{docs:{description:{component:`
### Overview
Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like dialogs, modal windows, forms, and cards.

Use the **Playground** story below to interactively configure every button property via the Controls panel.

### 🟢 Do's
- **Do** use only one primary (elevated/flat) button per screen or view to clearly indicate the main desired action.
- **Do** keep labels concise and action-oriented (e.g., "Save changes", "Submit form", "Cancel").
- **Do** ensure buttons have a clear hierarchy using variants. Primary actions = Flat/Elevated. Secondary actions = Tonal/Outlined. Tertiary actions = Text/Plain.

### 🔴 Don'ts
- **Don't** use too many buttons on a single screen, which can overwhelm the user and dilute the primary call-to-action.
- **Don't** use generic labels like "Click Here" or "Submit" if a more descriptive label like "Save Settings" provides better context.
- **Don't** wrap text inside buttons. Keep labels short enough to fit on a single line.

### 💡 Best Practices
- **Spacing:** Maintain standard gap spacing (\`ga-3\` or \`12px\`) between adjacent horizontal buttons.
- **Icons:** Use leading icons (left side) to clarify actions, but avoid trailing icons (right side) unless indicating a dropdown menu or forward navigation.
- **Destructive Actions:** Use \`color="error"\` exclusively for destructive actions like Delete, Remove, or Discard to warn users of irreversible consequences.
- **Button Groups:** When grouping related toggle actions (e.g., List/Grid view), wrap them in a \`v-btn-group\` component to visually bind them together.
        `}}}},n={render:c=>({setup(){return{args:c}},template:`
      <v-btn
        :variant="args.variant"
        :size="args.size"
        :color="args.color"
        :rounded="args.rounded"
        :disabled="args.disabled"
        :loading="args.loading"
        :prepend-icon="args.prependIcon || undefined"
        :append-icon="args.appendIcon || undefined"
        :block="args.block"
        class="text-none"
      >
        {{ args.label }}
      </v-btn>
    `})},t={render:()=>({template:`
      <div class="d-flex align-center flex-wrap ga-3">
        <v-btn color="primary" variant="elevated" class="text-none">Elevated</v-btn>
        <v-btn color="primary" variant="flat" class="text-none">Flat</v-btn>
        <v-btn color="primary" variant="tonal" class="text-none">Tonal</v-btn>
        <v-btn color="primary" variant="outlined" class="text-none">Outlined</v-btn>
        <v-btn color="primary" variant="text" class="text-none">Text</v-btn>
        <v-btn color="primary" variant="plain" class="text-none">Plain</v-btn>
      </div>
    `}),parameters:{controls:{disable:!0}}},e={render:()=>({template:`
      <div class="d-flex align-center flex-wrap ga-3">
        <v-btn color="primary" variant="flat" size="x-small" class="text-none">X-Small</v-btn>
        <v-btn color="primary" variant="flat" size="small" class="text-none">Small</v-btn>
        <v-btn color="primary" variant="flat" size="default" class="text-none">Default</v-btn>
        <v-btn color="primary" variant="flat" size="large" class="text-none">Large</v-btn>
        <v-btn color="primary" variant="flat" size="x-large" class="text-none">X-Large</v-btn>
      </div>
    `}),parameters:{controls:{disable:!0}}},a={render:()=>({template:`
      <div class="d-flex align-center flex-wrap ga-3">
        <v-btn color="primary" variant="flat" class="text-none">Primary</v-btn>
        <v-btn color="secondary" variant="flat" class="text-none">Secondary</v-btn>
        <v-btn color="success" variant="flat" class="text-none">Success</v-btn>
        <v-btn color="warning" variant="flat" class="text-none">Warning</v-btn>
        <v-btn color="error" variant="flat" class="text-none">Error</v-btn>
        <v-btn color="info" variant="flat" class="text-none">Info</v-btn>
      </div>
    `}),parameters:{controls:{disable:!0}}},r={render:()=>({template:`
      <div class="d-flex align-center flex-wrap ga-3">
        <v-btn color="primary" variant="flat" prepend-icon="plus" class="text-none">Add Item</v-btn>
        <v-btn color="primary" variant="outlined" append-icon="chevron-down" class="text-none">Options</v-btn>
        <v-btn color="primary" variant="tonal" prepend-icon="download" class="text-none">Export</v-btn>
        <v-btn variant="outlined" prepend-icon="upload" class="text-none">Import</v-btn>
        <v-btn icon="more-horizontal" variant="text" color="medium-emphasis" />
        <v-btn icon="pencil" variant="tonal" color="primary" size="small" />
      </div>
    `}),parameters:{controls:{disable:!0}}},o={render:()=>({template:`
      <div class="d-flex align-center flex-wrap ga-3">
        <v-btn color="primary" variant="flat" class="text-none">Normal</v-btn>
        <v-btn color="primary" variant="flat" class="text-none" loading>Loading</v-btn>
        <v-btn color="primary" variant="flat" class="text-none" disabled>Disabled</v-btn>
      </div>
    `}),parameters:{controls:{disable:!0}}},l={render:()=>({template:`
      <div class="d-flex align-center flex-wrap ga-3">
        <v-btn color="primary" variant="flat" rounded="0" class="text-none">Square</v-btn>
        <v-btn color="primary" variant="flat" rounded="sm" class="text-none">Small</v-btn>
        <v-btn color="primary" variant="flat" rounded="lg" class="text-none">Large (default)</v-btn>
        <v-btn color="primary" variant="flat" rounded="pill" class="text-none">Pill</v-btn>
      </div>
    `}),parameters:{controls:{disable:!0}}},s={render:()=>({template:`
      <div class="d-flex align-center ga-3">
        <v-btn-group variant="outlined" divided rounded="lg">
          <v-btn class="text-none" prepend-icon="list">List</v-btn>
          <v-btn class="text-none" prepend-icon="grid-2x2">Grid</v-btn>
          <v-btn class="text-none" prepend-icon="bar-chart-2">Chart</v-btn>
        </v-btn-group>
      </div>
    `}),parameters:{controls:{disable:!0}}},i={render:()=>({template:`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-overline text-medium-emphasis mb-3">Variants</div>
          <div class="d-flex align-center flex-wrap ga-3">
            <v-btn color="primary" variant="elevated" class="text-none">Elevated</v-btn>
            <v-btn color="primary" variant="flat" class="text-none">Flat</v-btn>
            <v-btn color="primary" variant="tonal" class="text-none">Tonal</v-btn>
            <v-btn color="primary" variant="outlined" class="text-none">Outlined</v-btn>
            <v-btn color="primary" variant="text" class="text-none">Text</v-btn>
            <v-btn color="primary" variant="plain" class="text-none">Plain</v-btn>
          </div>
        </div>

        <div>
          <div class="text-overline text-medium-emphasis mb-3">Sizes</div>
          <div class="d-flex align-center flex-wrap ga-3">
            <v-btn color="primary" variant="flat" size="x-small" class="text-none">X-Small</v-btn>
            <v-btn color="primary" variant="flat" size="small" class="text-none">Small</v-btn>
            <v-btn color="primary" variant="flat" size="default" class="text-none">Default</v-btn>
            <v-btn color="primary" variant="flat" size="large" class="text-none">Large</v-btn>
            <v-btn color="primary" variant="flat" size="x-large" class="text-none">X-Large</v-btn>
          </div>
        </div>

        <div>
          <div class="text-overline text-medium-emphasis mb-3">With Icons</div>
          <div class="d-flex align-center flex-wrap ga-3">
            <v-btn color="primary" variant="flat" prepend-icon="plus" class="text-none">Add Item</v-btn>
            <v-btn color="primary" variant="outlined" append-icon="chevron-down" class="text-none">Options</v-btn>
            <v-btn color="primary" variant="tonal" prepend-icon="download" class="text-none">Export</v-btn>
            <v-btn variant="outlined" prepend-icon="upload" class="text-none">Import</v-btn>
            <v-btn icon="more-horizontal" variant="text" color="medium-emphasis" />
            <v-btn icon="pencil" variant="tonal" color="primary" size="small" />
          </div>
        </div>

        <div>
          <div class="text-overline text-medium-emphasis mb-3">Semantic Colors</div>
          <div class="d-flex align-center flex-wrap ga-3">
            <v-btn color="primary" variant="flat" class="text-none">Primary</v-btn>
            <v-btn color="secondary" variant="flat" class="text-none">Secondary</v-btn>
            <v-btn color="success" variant="flat" class="text-none">Success</v-btn>
            <v-btn color="warning" variant="flat" class="text-none">Warning</v-btn>
            <v-btn color="error" variant="flat" class="text-none">Error</v-btn>
            <v-btn color="info" variant="flat" class="text-none">Info</v-btn>
          </div>
        </div>

        <div>
          <div class="text-overline text-medium-emphasis mb-3">States</div>
          <div class="d-flex align-center flex-wrap ga-3">
            <v-btn color="primary" variant="flat" class="text-none">Normal</v-btn>
            <v-btn color="primary" variant="flat" class="text-none" loading>Loading</v-btn>
            <v-btn color="primary" variant="flat" class="text-none" disabled>Disabled</v-btn>
          </div>
        </div>

        <div>
          <div class="text-overline text-medium-emphasis mb-3">Rounded</div>
          <div class="d-flex align-center flex-wrap ga-3">
            <v-btn color="primary" variant="flat" rounded="0" class="text-none">Square</v-btn>
            <v-btn color="primary" variant="flat" rounded="sm" class="text-none">Small</v-btn>
            <v-btn color="primary" variant="flat" rounded="lg" class="text-none">Large (default)</v-btn>
            <v-btn color="primary" variant="flat" rounded="pill" class="text-none">Pill</v-btn>
          </div>
        </div>

        <div>
          <div class="text-overline text-medium-emphasis mb-3">Dark / On-Surface</div>
          <div class="d-flex align-center flex-wrap ga-3">
            <v-btn
              variant="flat"
              class="text-none"
              style="background: rgb(var(--v-theme-on-surface)); color: rgb(var(--v-theme-surface));"
            >
              Dark Button
            </v-btn>
            <v-btn variant="outlined" class="text-none text-medium-emphasis">Secondary Action</v-btn>
          </div>
        </div>

        <div>
          <div class="text-overline text-medium-emphasis mb-3">Button Group</div>
          <div class="d-flex align-center ga-3">
            <v-btn-group variant="outlined" divided rounded="lg">
              <v-btn class="text-none" prepend-icon="list">List</v-btn>
              <v-btn class="text-none" prepend-icon="grid-2x2">Grid</v-btn>
              <v-btn class="text-none" prepend-icon="bar-chart-2">Chart</v-btn>
            </v-btn-group>
          </div>
        </div>
      </div>
    `}),parameters:{controls:{disable:!0}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    setup() {
      return {
        args
      };
    },
    template: \`
      <v-btn
        :variant="args.variant"
        :size="args.size"
        :color="args.color"
        :rounded="args.rounded"
        :disabled="args.disabled"
        :loading="args.loading"
        :prepend-icon="args.prependIcon || undefined"
        :append-icon="args.appendIcon || undefined"
        :block="args.block"
        class="text-none"
      >
        {{ args.label }}
      </v-btn>
    \`
  })
}`,...n.parameters?.docs?.source},description:{story:`The primary interactive story. Toggle every property from the **Controls**
panel on the right to see live changes.`,...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex align-center flex-wrap ga-3">
        <v-btn color="primary" variant="elevated" class="text-none">Elevated</v-btn>
        <v-btn color="primary" variant="flat" class="text-none">Flat</v-btn>
        <v-btn color="primary" variant="tonal" class="text-none">Tonal</v-btn>
        <v-btn color="primary" variant="outlined" class="text-none">Outlined</v-btn>
        <v-btn color="primary" variant="text" class="text-none">Text</v-btn>
        <v-btn color="primary" variant="plain" class="text-none">Plain</v-btn>
      </div>
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"All six Vuetify button variants side-by-side.",...t.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex align-center flex-wrap ga-3">
        <v-btn color="primary" variant="flat" size="x-small" class="text-none">X-Small</v-btn>
        <v-btn color="primary" variant="flat" size="small" class="text-none">Small</v-btn>
        <v-btn color="primary" variant="flat" size="default" class="text-none">Default</v-btn>
        <v-btn color="primary" variant="flat" size="large" class="text-none">Large</v-btn>
        <v-btn color="primary" variant="flat" size="x-large" class="text-none">X-Large</v-btn>
      </div>
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...e.parameters?.docs?.source},description:{story:"Five standard size presets from `x-small` to `x-large`.",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex align-center flex-wrap ga-3">
        <v-btn color="primary" variant="flat" class="text-none">Primary</v-btn>
        <v-btn color="secondary" variant="flat" class="text-none">Secondary</v-btn>
        <v-btn color="success" variant="flat" class="text-none">Success</v-btn>
        <v-btn color="warning" variant="flat" class="text-none">Warning</v-btn>
        <v-btn color="error" variant="flat" class="text-none">Error</v-btn>
        <v-btn color="info" variant="flat" class="text-none">Info</v-btn>
      </div>
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Buttons using the six semantic theme colors.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex align-center flex-wrap ga-3">
        <v-btn color="primary" variant="flat" prepend-icon="plus" class="text-none">Add Item</v-btn>
        <v-btn color="primary" variant="outlined" append-icon="chevron-down" class="text-none">Options</v-btn>
        <v-btn color="primary" variant="tonal" prepend-icon="download" class="text-none">Export</v-btn>
        <v-btn variant="outlined" prepend-icon="upload" class="text-none">Import</v-btn>
        <v-btn icon="more-horizontal" variant="text" color="medium-emphasis" />
        <v-btn icon="pencil" variant="tonal" color="primary" size="small" />
      </div>
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Buttons with prepend/append icons and icon-only variants.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex align-center flex-wrap ga-3">
        <v-btn color="primary" variant="flat" class="text-none">Normal</v-btn>
        <v-btn color="primary" variant="flat" class="text-none" loading>Loading</v-btn>
        <v-btn color="primary" variant="flat" class="text-none" disabled>Disabled</v-btn>
      </div>
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Normal, loading, and disabled states.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex align-center flex-wrap ga-3">
        <v-btn color="primary" variant="flat" rounded="0" class="text-none">Square</v-btn>
        <v-btn color="primary" variant="flat" rounded="sm" class="text-none">Small</v-btn>
        <v-btn color="primary" variant="flat" rounded="lg" class="text-none">Large (default)</v-btn>
        <v-btn color="primary" variant="flat" rounded="pill" class="text-none">Pill</v-btn>
      </div>
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"Border-radius presets from square (`0`) to `pill`.",...l.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex align-center ga-3">
        <v-btn-group variant="outlined" divided rounded="lg">
          <v-btn class="text-none" prepend-icon="list">List</v-btn>
          <v-btn class="text-none" prepend-icon="grid-2x2">Grid</v-btn>
          <v-btn class="text-none" prepend-icon="bar-chart-2">Chart</v-btn>
        </v-btn-group>
      </div>
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Grouped toggle buttons using `v-btn-group`.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="d-flex flex-column ga-6">
        <div>
          <div class="text-overline text-medium-emphasis mb-3">Variants</div>
          <div class="d-flex align-center flex-wrap ga-3">
            <v-btn color="primary" variant="elevated" class="text-none">Elevated</v-btn>
            <v-btn color="primary" variant="flat" class="text-none">Flat</v-btn>
            <v-btn color="primary" variant="tonal" class="text-none">Tonal</v-btn>
            <v-btn color="primary" variant="outlined" class="text-none">Outlined</v-btn>
            <v-btn color="primary" variant="text" class="text-none">Text</v-btn>
            <v-btn color="primary" variant="plain" class="text-none">Plain</v-btn>
          </div>
        </div>

        <div>
          <div class="text-overline text-medium-emphasis mb-3">Sizes</div>
          <div class="d-flex align-center flex-wrap ga-3">
            <v-btn color="primary" variant="flat" size="x-small" class="text-none">X-Small</v-btn>
            <v-btn color="primary" variant="flat" size="small" class="text-none">Small</v-btn>
            <v-btn color="primary" variant="flat" size="default" class="text-none">Default</v-btn>
            <v-btn color="primary" variant="flat" size="large" class="text-none">Large</v-btn>
            <v-btn color="primary" variant="flat" size="x-large" class="text-none">X-Large</v-btn>
          </div>
        </div>

        <div>
          <div class="text-overline text-medium-emphasis mb-3">With Icons</div>
          <div class="d-flex align-center flex-wrap ga-3">
            <v-btn color="primary" variant="flat" prepend-icon="plus" class="text-none">Add Item</v-btn>
            <v-btn color="primary" variant="outlined" append-icon="chevron-down" class="text-none">Options</v-btn>
            <v-btn color="primary" variant="tonal" prepend-icon="download" class="text-none">Export</v-btn>
            <v-btn variant="outlined" prepend-icon="upload" class="text-none">Import</v-btn>
            <v-btn icon="more-horizontal" variant="text" color="medium-emphasis" />
            <v-btn icon="pencil" variant="tonal" color="primary" size="small" />
          </div>
        </div>

        <div>
          <div class="text-overline text-medium-emphasis mb-3">Semantic Colors</div>
          <div class="d-flex align-center flex-wrap ga-3">
            <v-btn color="primary" variant="flat" class="text-none">Primary</v-btn>
            <v-btn color="secondary" variant="flat" class="text-none">Secondary</v-btn>
            <v-btn color="success" variant="flat" class="text-none">Success</v-btn>
            <v-btn color="warning" variant="flat" class="text-none">Warning</v-btn>
            <v-btn color="error" variant="flat" class="text-none">Error</v-btn>
            <v-btn color="info" variant="flat" class="text-none">Info</v-btn>
          </div>
        </div>

        <div>
          <div class="text-overline text-medium-emphasis mb-3">States</div>
          <div class="d-flex align-center flex-wrap ga-3">
            <v-btn color="primary" variant="flat" class="text-none">Normal</v-btn>
            <v-btn color="primary" variant="flat" class="text-none" loading>Loading</v-btn>
            <v-btn color="primary" variant="flat" class="text-none" disabled>Disabled</v-btn>
          </div>
        </div>

        <div>
          <div class="text-overline text-medium-emphasis mb-3">Rounded</div>
          <div class="d-flex align-center flex-wrap ga-3">
            <v-btn color="primary" variant="flat" rounded="0" class="text-none">Square</v-btn>
            <v-btn color="primary" variant="flat" rounded="sm" class="text-none">Small</v-btn>
            <v-btn color="primary" variant="flat" rounded="lg" class="text-none">Large (default)</v-btn>
            <v-btn color="primary" variant="flat" rounded="pill" class="text-none">Pill</v-btn>
          </div>
        </div>

        <div>
          <div class="text-overline text-medium-emphasis mb-3">Dark / On-Surface</div>
          <div class="d-flex align-center flex-wrap ga-3">
            <v-btn
              variant="flat"
              class="text-none"
              style="background: rgb(var(--v-theme-on-surface)); color: rgb(var(--v-theme-surface));"
            >
              Dark Button
            </v-btn>
            <v-btn variant="outlined" class="text-none text-medium-emphasis">Secondary Action</v-btn>
          </div>
        </div>

        <div>
          <div class="text-overline text-medium-emphasis mb-3">Button Group</div>
          <div class="d-flex align-center ga-3">
            <v-btn-group variant="outlined" divided rounded="lg">
              <v-btn class="text-none" prepend-icon="list">List</v-btn>
              <v-btn class="text-none" prepend-icon="grid-2x2">Grid</v-btn>
              <v-btn class="text-none" prepend-icon="bar-chart-2">Chart</v-btn>
            </v-btn-group>
          </div>
        </div>
      </div>
    \`
  }),
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...i.parameters?.docs?.source},description:{story:`A comprehensive visual reference showing every button configuration in a
single view. Useful for design review and screenshot comparisons.`,...i.parameters?.docs?.description}}};const m=["Playground","Variants","Sizes","SemanticColors","WithIcons","States","Rounded","ButtonGroup","Showcase"];export{s as ButtonGroup,n as Playground,l as Rounded,a as SemanticColors,i as Showcase,e as Sizes,o as States,t as Variants,r as WithIcons,m as __namedExportsOrder,b as default};
