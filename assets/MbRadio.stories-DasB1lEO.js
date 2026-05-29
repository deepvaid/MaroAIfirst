import{_ as a}from"./MbRadio-CSVXBF-g.js";import{v as r}from"./visual-meta-DVsEdd8r.js";import"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const t=[{id:"lg",label:"LG"},{id:"md",label:"MD"},{id:"sm",label:"SM"}],i=[{id:"default",label:"Default"},{id:"hover",label:"Hover"},{id:"focus",label:"Focus"},{id:"pressed",label:"Pressed"},{id:"disabled",label:"Disabled"},{id:"error",label:"Error"}],m={title:"Archive/Visual Parity/MbRadio",tags:["autodocs"],render:()=>({components:{MbRadio:a},setup(){return{sizes:t,states:i}},template:`
      <section data-visual-target class="mbvr-root" aria-label="MbRadio visual matrix">
        <h2 class="mbvr-title">MbRadio</h2>

        <div class="mbvr-grid">
          <div class="mbvr-cell mbvr-cell--header">State</div>
          <div class="mbvr-cell mbvr-cell--header">Unchecked</div>
          <div class="mbvr-cell mbvr-cell--header">Checked</div>

          <template v-for="state in states" :key="state.id">
            <div class="mbvr-cell mbvr-cell--state">{{ state.label }}</div>

            <div class="mbvr-cell">
              <MbRadio :state="state.id" size="md" label="Label" :model-value="false" />
            </div>
            <div class="mbvr-cell">
              <MbRadio :state="state.id" size="md" label="Label" :model-value="true" />
            </div>
          </template>
        </div>

        <div class="mbvr-sizes">
          <div v-for="size in sizes" :key="size.id" class="mbvr-size">
            <span class="mbvr-size-label">{{ size.label }}</span>
            <MbRadio :size="size.id" label="Label" :model-value="true" />
          </div>
        </div>

        <style>
          .mbvr-root {
            width: 100%;
            min-height: 100%;
            padding: 12px;
            box-sizing: border-box;
            background: var(--mb-stage-bg);
            color: var(--mb-stage-text);
            border: 1px solid var(--mb-stage-border);
            border-radius: 12px;
            font-family: var(--mb-rd-font-family);
            display: grid;
            gap: 10px;
          }

          .mbvr-title {
            margin: 0;
            font-size: 18px;
            line-height: 24px;
          }

          .mbvr-grid {
            display: grid;
            grid-template-columns: 88px repeat(2, minmax(0, 1fr));
            border: 1px solid var(--mb-stage-border);
            border-radius: 8px;
            overflow: hidden;
          }

          .mbvr-cell {
            min-height: 48px;
            padding: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            border-right: 1px solid var(--mb-stage-border);
            border-bottom: 1px solid var(--mb-stage-border);
            background: color-mix(in srgb, var(--mb-stage-bg) 92%, var(--mb-stage-text));
          }

          .mbvr-cell:nth-child(3n) {
            border-right: none;
          }

          .mbvr-cell--header {
            min-height: 34px;
            font-size: 11px;
            line-height: 16px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 600;
          }

          .mbvr-cell--state {
            font-size: 11px;
            line-height: 16px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            font-weight: 500;
            justify-content: flex-start;
          }

          .mbvr-sizes {
            display: flex;
            gap: 16px;
          }

          .mbvr-size {
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }

          .mbvr-size-label {
            font-size: 11px;
            line-height: 16px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            opacity: 0.8;
          }
        </style>
      </section>
    `})},e={parameters:r({figmaNodeId:"21157:37065",viewport:"desktop",theme:"light",state:"matrix",variant:"all"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: visualParameters({
    figmaNodeId: '21157:37065',
    viewport: 'desktop',
    theme: 'light',
    state: 'matrix',
    variant: 'all'
  })
}`,...e.parameters?.docs?.source}}};const b=["Matrix"];export{e as Matrix,b as __namedExportsOrder,m as default};
