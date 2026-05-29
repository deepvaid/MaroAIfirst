import{T as a}from"./iframe-Dzs8NioN.js";import"./preload-helper-PPVm8Dsz.js";const l={title:"Archive/Legacy Base/Tooltips",component:a,tags:["autodocs"],argTypes:{text:{control:"text",description:"Tooltip message text",table:{category:"Content",defaultValue:"This is a tooltip"}},location:{control:"select",options:["top","bottom","start","end"],description:"Tooltip position relative to element",table:{category:"Appearance",defaultValue:"top"}},openDelay:{control:{type:"range",min:0,max:1e3,step:50},description:"Delay in ms before showing tooltip",table:{category:"Behavior",defaultValue:0}},closeDelay:{control:{type:"range",min:0,max:1e3,step:50},description:"Delay in ms before hiding tooltip",table:{category:"Behavior",defaultValue:0}},disabled:{control:"boolean",description:"Disable the tooltip",table:{category:"State",defaultValue:!1}}},args:{text:"This is a tooltip",location:"top",openDelay:0,closeDelay:0,disabled:!1},parameters:{docs:{description:{component:`
# Tooltips

Tooltips display brief, informative text when users hover over an element.

## Overview

VTooltip wraps other components to provide contextual help text. Tooltips appear on hover and disappear on mouse leave. They're ideal for explaining icons, buttons, or actions.

## Do's

- Use tooltips for clarifying icon buttons
- Keep tooltip text concise (1-3 lines)
- Use for supplementary information, not critical content
- Show on hover (don't force permanent visibility)
- Position above or below element

## Don'ts

- Don't put essential information only in tooltips
- Avoid lengthy tooltip text
- Don't use tooltips on touch devices
- Avoid overlapping multiple tooltips
- Don't use for validating form input

## Best Practices

- Use \`location="top"\` as default
- Combine with \`open-delay="200"\` for less aggressive triggering
- Keep text simple and action-oriented
- Test on mobile (tooltips may not work on touch)
- Use consistently across your UI
        `}}}},t={render:n=>({setup(){return{args:n}},template:`
      <div class="pa-6 d-flex justify-center align-center" style="height: 300px;">
        <v-tooltip
          :text="args.text"
          :location="args.location"
          :open-delay="args.openDelay"
          :close-delay="args.closeDelay"
          :disabled="args.disabled"
        >
          <template #activator="{ props }">
            <v-btn v-bind="props" text="Hover me" />
          </template>
        </v-tooltip>
      </div>
    `})},o={parameters:{controls:{disable:!0}},render:()=>({template:`
      <div class="pa-6 d-flex justify-center align-center gap-4" style="height: 300px;">
        <v-tooltip text="Top tooltip" location="top">
          <template #activator="{ props }">
            <v-btn v-bind="props" text="Top" />
          </template>
        </v-tooltip>

        <v-tooltip text="Bottom tooltip" location="bottom">
          <template #activator="{ props }">
            <v-btn v-bind="props" text="Bottom" />
          </template>
        </v-tooltip>

        <v-tooltip text="Start tooltip" location="start">
          <template #activator="{ props }">
            <v-btn v-bind="props" text="Start" />
          </template>
        </v-tooltip>

        <v-tooltip text="End tooltip" location="end">
          <template #activator="{ props }">
            <v-btn v-bind="props" text="End" />
          </template>
        </v-tooltip>
      </div>
    `})},e={parameters:{controls:{disable:!0}},render:()=>({template:`
      <div class="pa-6 d-flex gap-4">
        <v-tooltip text="Settings" location="top">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="settings" variant="text" />
          </template>
        </v-tooltip>

        <v-tooltip text="Delete" location="top">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="trash-2" variant="text" color="error" />
          </template>
        </v-tooltip>

        <v-tooltip text="Download" location="top">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="download" variant="text" />
          </template>
        </v-tooltip>

        <v-tooltip text="Share" location="top">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="share-2" variant="text" />
          </template>
        </v-tooltip>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="pa-6 d-flex justify-center align-center" style="height: 300px;">
        <v-tooltip
          :text="args.text"
          :location="args.location"
          :open-delay="args.openDelay"
          :close-delay="args.closeDelay"
          :disabled="args.disabled"
        >
          <template #activator="{ props }">
            <v-btn v-bind="props" text="Hover me" />
          </template>
        </v-tooltip>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    template: \`
      <div class="pa-6 d-flex justify-center align-center gap-4" style="height: 300px;">
        <v-tooltip text="Top tooltip" location="top">
          <template #activator="{ props }">
            <v-btn v-bind="props" text="Top" />
          </template>
        </v-tooltip>

        <v-tooltip text="Bottom tooltip" location="bottom">
          <template #activator="{ props }">
            <v-btn v-bind="props" text="Bottom" />
          </template>
        </v-tooltip>

        <v-tooltip text="Start tooltip" location="start">
          <template #activator="{ props }">
            <v-btn v-bind="props" text="Start" />
          </template>
        </v-tooltip>

        <v-tooltip text="End tooltip" location="end">
          <template #activator="{ props }">
            <v-btn v-bind="props" text="End" />
          </template>
        </v-tooltip>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    template: \`
      <div class="pa-6 d-flex gap-4">
        <v-tooltip text="Settings" location="top">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="settings" variant="text" />
          </template>
        </v-tooltip>

        <v-tooltip text="Delete" location="top">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="trash-2" variant="text" color="error" />
          </template>
        </v-tooltip>

        <v-tooltip text="Download" location="top">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="download" variant="text" />
          </template>
        </v-tooltip>

        <v-tooltip text="Share" location="top">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="share-2" variant="text" />
          </template>
        </v-tooltip>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};const r=["Playground","Positions","OnIconButtons"];export{e as OnIconButtons,t as Playground,o as Positions,r as __namedExportsOrder,l as default};
