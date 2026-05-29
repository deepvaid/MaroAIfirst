import{_ as t}from"./MbButtonGroup-L751WIVC.js";import{v as i}from"./visual-meta-DVsEdd8r.js";import"./iframe-Dzs8NioN.js";import"./preload-helper-PPVm8Dsz.js";const s=[{id:"first",label:"Button"},{id:"second",label:"Button"},{id:"third",label:"Button"}],a=[{id:"lg",label:"LG"},{id:"md",label:"MD"},{id:"sm",label:"SM"}],r=[{id:!0,label:"Hug"},{id:!1,label:"Fill"}],d={title:"Archive/Visual Parity/MbSplitButton",tags:["autodocs"],components:{MbButtonGroup:t},render:()=>({components:{MbButtonGroup:t},setup(){return{items:s,sizes:a,modes:r}},template:`
      <section data-visual-target class="mbsbg-root" aria-label="MbButtonGroup visual matrix">
        <div class="mbsbg-grid">
          <article v-for="mode in modes" :key="String(mode.id)" class="mbsbg-column">
            <h3 class="mbsbg-column-title">{{ mode.label }}</h3>

            <div v-for="size in sizes" :key="mode.label + '-' + size.id" class="mbsbg-row">
              <h4 class="mbsbg-size">{{ size.label }}</h4>
              <MbButtonGroup
                :items="items"
                :size="size.id"
                :hug="mode.id"
                :model-value="0"
                aria-label="Button group"
              />
            </div>
          </article>
        </div>

        <style>
          .mbsbg-root {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            padding: 44px 36px;
            font-family: var(--mb-btg-font-family);
            color: var(--mb-stage-text);
            display: grid;
            place-items: center;
          }

          .mbsbg-grid {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 72px;
            row-gap: 28px;
          }

          .mbsbg-column {
            display: grid;
            row-gap: 18px;
            justify-items: center;
          }

          .mbsbg-column-title {
            margin: 0;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            opacity: 0.72;
          }

          .mbsbg-row {
            display: grid;
            row-gap: 8px;
            justify-items: center;
          }

          .mbsbg-size {
            margin: 0;
            font-size: 11px;
            line-height: 14px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            opacity: 0.72;
          }
        </style>
      </section>
    `})},e={parameters:i({figmaNodeId:"2972:148587",viewport:"desktop",theme:"light",state:"matrix",variant:"segmented-icon-group"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: visualParameters({
    figmaNodeId: '2972:148587',
    viewport: 'desktop',
    theme: 'light',
    state: 'matrix',
    variant: 'segmented-icon-group'
  })
}`,...e.parameters?.docs?.source}}};const p=["Matrix"];export{e as Matrix,p as __namedExportsOrder,d as default};
