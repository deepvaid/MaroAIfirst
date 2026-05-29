import{k as r,l as s,m as a,G as o,H as t,I as n,J as l,K as i,L as p,M as m}from"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const v={title:"Foundations/Radius",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
# Border Radius

MaroBase uses a compact dashboard radius system. Inputs are slightly rounded (16px), cards are pillowy (14–28px), buttons are pill (9999px).

Choose by element type, not aesthetic preference:
- \`sm\` (4px) — tight chips, dense controls
- \`md / lg\` (12–14px) — list items, secondary cards
- \`xl / 2xl\` (28–36px) — primary cards, dialogs
- \`full / pill\` (9999px) — chips, buttons, avatars
        `}}}},c=[{name:"sm",value:o},{name:"chip",value:t},{name:"md",value:n},{name:"lg",value:l},{name:"xl",value:i},{name:"2xl",value:p},{name:"full / pill",value:m}],e={render:()=>({components:{VContainer:a,VRow:s,VCol:r},setup(){return{samples:c}},template:`
      <v-container class="pa-8" style="background: rgb(var(--v-theme-background));">
        <v-row>
          <v-col v-for="s in samples" :key="s.name" cols="6" sm="4" md="3">
            <div
              :style="{
                background: 'rgb(var(--v-theme-primary-container))',
                border: '1px solid rgb(var(--v-theme-outline-variant))',
                borderRadius: s.value,
                height: '96px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgb(var(--v-theme-on-primary-container))',
                fontWeight: 600,
                fontSize: '13px',
                textAlign: 'center',
              }"
            >
              {{ s.name }}<br>
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; opacity: 0.75;">{{ s.value }}</span>
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
          <v-col v-for="s in samples" :key="s.name" cols="6" sm="4" md="3">
            <div
              :style="{
                background: 'rgb(var(--v-theme-primary-container))',
                border: '1px solid rgb(var(--v-theme-outline-variant))',
                borderRadius: s.value,
                height: '96px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgb(var(--v-theme-on-primary-container))',
                fontWeight: 600,
                fontSize: '13px',
                textAlign: 'center',
              }"
            >
              {{ s.name }}<br>
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; opacity: 0.75;">{{ s.value }}</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    \`
  })
}`,...e.parameters?.docs?.source}}};const b=["Scale"];export{e as Scale,b as __namedExportsOrder,v as default};
