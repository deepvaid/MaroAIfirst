import{_ as a}from"./MbCheckbox-pcjjYmmp.js";import{v as t}from"./visual-meta-DVsEdd8r.js";import"./iframe-Dzs8NioN.js";import"./preload-helper-PPVm8Dsz.js";const i=[{id:"lg",label:"LG"},{id:"md",label:"MD"},{id:"sm",label:"SM"}],s=[{id:"default",label:"Default"},{id:"hover",label:"Hover"},{id:"focus",label:"Focus"},{id:"pressed",label:"Pressed"},{id:"disabled",label:"Disabled"},{id:"error",label:"Error"}],o={title:"Archive/Visual Parity/MbCheckbox",tags:["autodocs"],render:()=>({components:{MbCheckbox:a},setup(){return{sizes:i,states:s}},template:`
      <section data-visual-target class="mbvc-root" aria-label="MbCheckbox visual matrix">
        <h2 class="mbvc-title">MbCheckbox</h2>

        <div class="mbvc-grid">
          <div class="mbvc-cell mbvc-cell--header">State</div>
          <div class="mbvc-cell mbvc-cell--header">Unchecked</div>
          <div class="mbvc-cell mbvc-cell--header">Checked</div>
          <div class="mbvc-cell mbvc-cell--header">Indeterminate</div>

          <template v-for="state in states" :key="state.id">
            <div class="mbvc-cell mbvc-cell--state">{{ state.label }}</div>

            <div class="mbvc-cell">
              <MbCheckbox :state="state.id" size="md" label="Label" :model-value="false" />
            </div>
            <div class="mbvc-cell">
              <MbCheckbox :state="state.id" size="md" label="Label" :model-value="true" />
            </div>
            <div class="mbvc-cell">
              <MbCheckbox :state="state.id" size="md" label="Label" :indeterminate="true" />
            </div>
          </template>
        </div>

        <div class="mbvc-sizes">
          <div v-for="size in sizes" :key="size.id" class="mbvc-size">
            <span class="mbvc-size-label">{{ size.label }}</span>
            <MbCheckbox :size="size.id" label="Label" :model-value="true" />
          </div>
        </div>

        <style>
          .mbvc-root {
            width: 100%;
            min-height: 100%;
            padding: 12px;
            box-sizing: border-box;
            background: var(--mb-stage-bg);
            color: var(--mb-stage-text);
            border: 1px solid var(--mb-stage-border);
            border-radius: 12px;
            font-family: var(--mb-ch-font-family);
            display: grid;
            gap: 10px;
          }

          .mbvc-title {
            margin: 0;
            font-size: 18px;
            line-height: 24px;
          }

          .mbvc-grid {
            display: grid;
            grid-template-columns: 88px repeat(3, minmax(0, 1fr));
            border: 1px solid var(--mb-stage-border);
            border-radius: 8px;
            overflow: hidden;
          }

          .mbvc-cell {
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

          .mbvc-cell:nth-child(4n) {
            border-right: none;
          }

          .mbvc-cell--header {
            min-height: 34px;
            font-size: 11px;
            line-height: 16px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 600;
          }

          .mbvc-cell--state {
            font-size: 11px;
            line-height: 16px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            font-weight: 500;
            justify-content: flex-start;
          }

          .mbvc-sizes {
            display: flex;
            gap: 16px;
          }

          .mbvc-size {
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }

          .mbvc-size-label {
            font-size: 11px;
            line-height: 16px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            opacity: 0.8;
          }
        </style>
      </section>
    `})},e={parameters:t({figmaNodeId:"981:23643",viewport:"desktop",theme:"light",state:"matrix",variant:"all"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: visualParameters({
    figmaNodeId: '981:23643',
    viewport: 'desktop',
    theme: 'light',
    state: 'matrix',
    variant: 'all'
  })
}`,...e.parameters?.docs?.source}}};const b=["Matrix"];export{e as Matrix,b as __namedExportsOrder,o as default};
