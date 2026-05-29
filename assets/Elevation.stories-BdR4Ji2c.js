import{k as o,l as r,m as a,C as s,D as t,E as n}from"./iframe-Dzs8NioN.js";import"./preload-helper-PPVm8Dsz.js";const l={title:"Foundations/Elevation",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
# Elevation

MaroBase uses three softly-tinted elevation levels. Depth comes from hairline borders + warm tint, not heavy drop shadows.

| Token | Use |
|-------|-----|
| \`mp_shadow_sm\` | Resting cards, list items |
| \`mp_shadow_md\` | Hover states, popovers |
| \`mp_shadow_lg\` | Modals, drawers |

Avoid stacking elevation; combine with \`outline-variant\` borders for separation.
        `}}}},i=[{name:"Shadow / sm",value:s},{name:"Shadow / md",value:t},{name:"Shadow / lg",value:n}],e={render:()=>({components:{VContainer:a,VRow:r,VCol:o},setup(){return{samples:i}},template:`
      <v-container class="pa-8" style="background: rgb(var(--v-theme-background));">
        <v-row>
          <v-col v-for="s in samples" :key="s.name" cols="12" sm="4">
            <div
              :style="{
                background: 'rgb(var(--v-theme-surface))',
                border: '1px solid rgb(var(--v-theme-outline-variant))',
                borderRadius: '14px',
                padding: '32px 24px',
                boxShadow: s.value,
                textAlign: 'center',
              }"
            >
              <div style="font-weight: 600; font-size: 14px; color: rgb(var(--v-theme-on-surface));">{{ s.name }}</div>
              <div style="margin-top: 8px; font-size: 11px; color: rgb(var(--v-theme-on-surface-variant)); font-family: 'JetBrains Mono', monospace; word-break: break-all;">
                {{ s.value }}
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      VContainer,
      VRow,
      VCol
    },
    setup() {
      return {
        samples
      };
    },
    template: \`
      <v-container class="pa-8" style="background: rgb(var(--v-theme-background));">
        <v-row>
          <v-col v-for="s in samples" :key="s.name" cols="12" sm="4">
            <div
              :style="{
                background: 'rgb(var(--v-theme-surface))',
                border: '1px solid rgb(var(--v-theme-outline-variant))',
                borderRadius: '14px',
                padding: '32px 24px',
                boxShadow: s.value,
                textAlign: 'center',
              }"
            >
              <div style="font-weight: 600; font-size: 14px; color: rgb(var(--v-theme-on-surface));">{{ s.name }}</div>
              <div style="margin-top: 8px; font-size: 11px; color: rgb(var(--v-theme-on-surface-variant)); font-family: 'JetBrains Mono', monospace; word-break: break-all;">
                {{ s.value }}
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    \`
  })
}`,...e.parameters?.docs?.source}}};const m=["Stack"];export{e as Stack,m as __namedExportsOrder,l as default};
