import{U as g,a3 as a,Z as n,$ as r,a4 as v,a0 as d,c as S,aa as h,a1 as t}from"./iframe-DScATqdl.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const M=["data-tone","data-size"],y={class:"mb-stat-card__head"},x={class:"mb-stat-card__label"},w={key:0,class:"mb-stat-card__icon","aria-hidden":"true"},_={class:"mb-stat-card__value-row"},$={class:"mb-stat-card__value"},z={key:0,class:"mb-stat-card__unit"},k={key:0,class:"mb-stat-card__foot"},V=["data-trend"],q={"aria-hidden":"true"},A={key:0},T={key:1,class:"mb-stat-card__caption"},f=g({__name:"MbStatCard",props:{label:{},value:{},unit:{default:void 0},caption:{default:void 0},tone:{default:"default"},trend:{default:void 0},trendValue:{default:void 0},icon:{default:void 0},size:{default:"md"}},setup(e){const m=e,b=S(()=>m.trend==="up"?"↑":m.trend==="down"?"↓":m.trend==="flat"?"·":"");return(p,I)=>(t(),a("article",{class:"mb-stat-card","data-tone":e.tone,"data-size":e.size},[n("header",y,[n("span",x,r(e.label),1),e.icon?(t(),a("span",w,[v(p.$slots,"icon",{},()=>[n("i",{class:h(["mdi",e.icon])},null,2)],!0)])):d("",!0)]),n("div",_,[n("span",$,r(e.value),1),e.unit?(t(),a("span",z,r(e.unit),1)):d("",!0)]),e.trend||e.caption||p.$slots.footer?(t(),a("footer",k,[e.trend?(t(),a("span",{key:0,class:"mb-stat-card__trend","data-trend":e.trend},[n("span",q,r(b.value),1),e.trendValue?(t(),a("span",A,r(e.trendValue),1)):d("",!0)],8,V)):d("",!0),e.caption?(t(),a("span",T,r(e.caption),1)):d("",!0),v(p.$slots,"footer",{},void 0,!0)])):d("",!0)],8,M))}}),o=C(f,[["__scopeId","data-v-460bb1d6"]]);f.__docgenInfo={exportName:"default",displayName:"MbStatCard",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"unit",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"caption",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"tone",required:!1,type:{name:"MbStatCardTone"},defaultValue:{func:!1,value:"'default'"}},{name:"trend",required:!1,type:{name:"MbStatCardTrend"},defaultValue:{func:!1,value:"undefined"}},{name:"trendValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"icon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}}],slots:[{name:"icon"},{name:"footer"}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/packages/marobase-ui/src/components/MbStatCard.vue"]};const D={title:"Components/MbStatCard",component:o,tags:["autodocs"],args:{label:"Total revenue",value:"$48,920",caption:"vs last 30 days",tone:"default",trend:"up",trendValue:"12.4%"},argTypes:{tone:{control:"inline-radio",options:["default","soft","warm","inverse"]},trend:{control:"inline-radio",options:[void 0,"up","down","flat"]},size:{control:"inline-radio",options:["md","lg"]}}},l={},s={render:e=>({components:{MbStatCard:o},setup:()=>({args:e}),template:`
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;padding:24px;max-width:1200px;">
        <MbStatCard label="Revenue" value="$48,920" unit="" caption="vs last 30 days" trend="up" trend-value="12.4%" />
        <MbStatCard label="Orders" value="1,284" caption="this week" trend="up" trend-value="3.1%" tone="soft" />
        <MbStatCard label="Avg. order" value="$38.10" caption="down from $40.20" trend="down" trend-value="5.2%" tone="warm" />
        <MbStatCard label="Active campaigns" value="12" caption="2 pending review" tone="inverse" />
      </div>
    `})},i={render:()=>({components:{MbStatCard:o},template:`
      <div style="padding:24px;max-width:520px;">
        <MbStatCard
          label="Monthly recurring"
          value="$248,912"
          caption="tracking ahead of forecast"
          trend="up"
          trend-value="18.7%"
          size="lg"
        />
      </div>
    `})},u={render:()=>({components:{MbStatCard:o},template:`
      <div style="display:grid;grid-template-columns:repeat(3,minmax(220px,1fr));gap:20px;padding:24px;">
        <MbStatCard label="Conversion" value="4.8%" trend="up" trend-value="0.7%" caption="week over week" />
        <MbStatCard label="Churn" value="2.1%" trend="down" trend-value="0.3%" caption="month over month" tone="warm" />
        <MbStatCard label="Pipeline health" value="Stable" trend="flat" trend-value="0.0%" caption="no major movement" tone="soft" />
      </div>
    `})},c={render:()=>({components:{MbStatCard:o},template:`
      <div style="display:grid;grid-template-columns:repeat(2,minmax(260px,1fr));gap:20px;padding:24px;max-width:760px;">
        <MbStatCard label="Default / md" value="$62,180" caption="baseline surface" tone="default" size="md" />
        <MbStatCard label="Soft / md" value="$62,180" caption="tinted blue surface" tone="soft" size="md" />
        <MbStatCard label="Warm / lg" value="$145,902" caption="warm neutral emphasis" tone="warm" size="lg" />
        <MbStatCard label="Inverse / lg" value="$145,902" caption="high contrast hero tile" tone="inverse" size="lg" />
      </div>
    `})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MbStatCard
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;padding:24px;max-width:1200px;">
        <MbStatCard label="Revenue" value="$48,920" unit="" caption="vs last 30 days" trend="up" trend-value="12.4%" />
        <MbStatCard label="Orders" value="1,284" caption="this week" trend="up" trend-value="3.1%" tone="soft" />
        <MbStatCard label="Avg. order" value="$38.10" caption="down from $40.20" trend="down" trend-value="5.2%" tone="warm" />
        <MbStatCard label="Active campaigns" value="12" caption="2 pending review" tone="inverse" />
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MbStatCard
    },
    template: \`
      <div style="padding:24px;max-width:520px;">
        <MbStatCard
          label="Monthly recurring"
          value="$248,912"
          caption="tracking ahead of forecast"
          trend="up"
          trend-value="18.7%"
          size="lg"
        />
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MbStatCard
    },
    template: \`
      <div style="display:grid;grid-template-columns:repeat(3,minmax(220px,1fr));gap:20px;padding:24px;">
        <MbStatCard label="Conversion" value="4.8%" trend="up" trend-value="0.7%" caption="week over week" />
        <MbStatCard label="Churn" value="2.1%" trend="down" trend-value="0.3%" caption="month over month" tone="warm" />
        <MbStatCard label="Pipeline health" value="Stable" trend="flat" trend-value="0.0%" caption="no major movement" tone="soft" />
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MbStatCard
    },
    template: \`
      <div style="display:grid;grid-template-columns:repeat(2,minmax(260px,1fr));gap:20px;padding:24px;max-width:760px;">
        <MbStatCard label="Default / md" value="$62,180" caption="baseline surface" tone="default" size="md" />
        <MbStatCard label="Soft / md" value="$62,180" caption="tinted blue surface" tone="soft" size="md" />
        <MbStatCard label="Warm / lg" value="$145,902" caption="warm neutral emphasis" tone="warm" size="lg" />
        <MbStatCard label="Inverse / lg" value="$145,902" caption="high contrast hero tile" tone="inverse" size="lg" />
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const O=["Playground","Grid","Hero","TrendStates","ToneAndSizeMatrix"];export{s as Grid,i as Hero,l as Playground,c as ToneAndSizeMatrix,u as TrendStates,O as __namedExportsOrder,D as default};
