import{_ as s}from"./MbSwitch-_VHPyiDT.js";import{v as t}from"./visual-meta-DVsEdd8r.js";import"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const a=[{id:"md",label:"MD"},{id:"sm",label:"SM"}],i=[{id:"default",label:"Default"},{id:"hover",label:"Hover"},{id:"focus",label:"Focus"},{id:"pressed",label:"Pressed"},{id:"disabled",label:"Disabled"},{id:"error",label:"Error"}],o={title:"Archive/Visual Parity/MbSwitch",tags:["autodocs"],render:()=>({components:{MbSwitch:s},setup(){return{sizes:a,states:i}},template:`
      <section data-visual-target class="mbvs-root" aria-label="MbSwitch visual matrix">
        <h2 class="mbvs-title">MbSwitch</h2>

        <div class="mbvs-grid">
          <div class="mbvs-cell mbvs-cell--header">State</div>
          <div class="mbvs-cell mbvs-cell--header">Off</div>
          <div class="mbvs-cell mbvs-cell--header">On</div>
          <div class="mbvs-cell mbvs-cell--header">Indeterminate</div>

          <template v-for="state in states" :key="state.id">
            <div class="mbvs-cell mbvs-cell--state">{{ state.label }}</div>

            <div class="mbvs-cell">
              <MbSwitch :state="state.id" size="md" label="Label" :model-value="false" />
            </div>
            <div class="mbvs-cell">
              <MbSwitch :state="state.id" size="md" label="Label" :model-value="true" />
            </div>
            <div class="mbvs-cell">
              <MbSwitch :state="state.id" size="md" label="Label" :indeterminate="true" />
            </div>
          </template>
        </div>

        <div class="mbvs-sizes">
          <div v-for="size in sizes" :key="size.id" class="mbvs-size">
            <span class="mbvs-size-label">{{ size.label }}</span>
            <MbSwitch :size="size.id" label="Label" :model-value="true" />
          </div>
        </div>

        <style>
          .mbvs-root {
            width: 100%;
            min-height: 100%;
            padding: 12px;
            box-sizing: border-box;
            background: var(--mb-stage-bg);
            color: var(--mb-stage-text);
            border: 1px solid var(--mb-stage-border);
            border-radius: 12px;
            font-family: var(--mb-sw-font-family);
            display: grid;
            gap: 10px;
          }

          .mbvs-title {
            margin: 0;
            font-size: 18px;
            line-height: 24px;
          }

          .mbvs-grid {
            display: grid;
            grid-template-columns: 88px repeat(3, minmax(0, 1fr));
            border: 1px solid var(--mb-stage-border);
            border-radius: 8px;
            overflow: hidden;
          }

          .mbvs-cell {
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

          .mbvs-cell:nth-child(4n) {
            border-right: none;
          }

          .mbvs-cell--header {
            min-height: 34px;
            font-size: 11px;
            line-height: 16px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 600;
          }

          .mbvs-cell--state {
            font-size: 11px;
            line-height: 16px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            font-weight: 500;
            justify-content: flex-start;
          }

          .mbvs-sizes {
            display: flex;
            gap: 16px;
          }

          .mbvs-size {
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }

          .mbvs-size-label {
            font-size: 11px;
            line-height: 16px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            opacity: 0.8;
          }
        </style>
      </section>
    `})},e={parameters:t({figmaNodeId:"2436:171364",viewport:"desktop",theme:"light",state:"matrix",variant:"all"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: visualParameters({
    figmaNodeId: '2436:171364',
    viewport: 'desktop',
    theme: 'light',
    state: 'matrix',
    variant: 'all'
  })
}`,...e.parameters?.docs?.source}}};const b=["Matrix"];export{e as Matrix,b as __namedExportsOrder,o as default};
