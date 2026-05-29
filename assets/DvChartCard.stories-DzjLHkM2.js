import{az as N,aA as A,aB as k,aC as z,aD as J,aE as L,U as Y,W as I,X as n,f as V,Y as o,Z as s,$ as c,a3 as a,a0 as g,e as v,F as _,_ as y,a7 as d,a6 as u,ab as C,al as p,j as B,a1 as e}from"./iframe-Dzs8NioN.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const R=[N,A,k,z,J,L],S={class:"d-flex align-center justify-space-between mb-1"},T={class:"text-subtitle-2 font-weight-bold"},q={key:0,class:"text-caption text-medium-emphasis mt-1"},O={class:"d-flex ga-1"},U={class:"chart-area mt-4 mb-3"},P={class:"chart-y-labels"},j={class:"chart-bars-wrap"},E={key:0,class:"d-flex justify-space-between px-4 mb-3"},W={key:1,class:"d-flex align-center ga-4 flex-wrap"},X={class:"text-caption"},D=Y({__name:"DvChartCard",props:{title:{},subtitle:{},bars:{},labels:{},seriesNames:{}},setup(r){const m=R;function M(x){return Math.max(...x.map(i=>i.reduce((t,l)=>t+l,0)))}return(x,i)=>(e(),I(V,{variant:"outlined",rounded:"lg",class:"dv-chart-card"},{default:n(()=>[o(B,null,{default:n(()=>[s("div",S,[s("div",null,[s("div",T,c(r.title||"Analysis Results"),1),r.subtitle?(e(),a("div",q,c(r.subtitle),1)):g("",!0)]),s("div",O,[o(v,{icon:"",size:"28",variant:"text"},{default:n(()=>[o(_,{size:"16"},{default:n(()=>[...i[0]||(i[0]=[y("save",-1)])]),_:1})]),_:1}),o(v,{icon:"",size:"28",variant:"text"},{default:n(()=>[o(_,{size:"16"},{default:n(()=>[...i[1]||(i[1]=[y("download",-1)])]),_:1})]),_:1}),o(v,{icon:"",size:"28",variant:"text"},{default:n(()=>[o(_,{size:"16"},{default:n(()=>[...i[2]||(i[2]=[y("maximize-2",-1)])]),_:1})]),_:1})])]),s("div",U,[s("div",P,[(e(),a(u,null,d([1250,1e3,750,500,250],t=>s("span",{key:t},c(t),1)),64))]),s("div",j,[(e(!0),a(u,null,d(r.bars,(t,l)=>(e(),a("div",{key:l,class:"chart-bar-col"},[(e(!0),a(u,null,d(t,(w,f)=>(e(),a("div",{key:f,style:C({height:w/M(r.bars)*120+"px",background:p(m)[f%p(m).length],borderRadius:f===t.length-1?"2px 2px 0 0":"0"})},null,4))),128))]))),128))])]),r.labels?(e(),a("div",E,[(e(!0),a(u,null,d(r.labels,t=>(e(),a("span",{key:t,class:"text-caption text-medium-emphasis",style:{"font-size":"10px"}},c(t),1))),128))])):g("",!0),r.seriesNames?(e(),a("div",W,[(e(!0),a(u,null,d(r.seriesNames,(t,l)=>(e(),a("div",{key:l,class:"d-flex align-center ga-1"},[s("span",{style:C({width:"8px",height:"8px",borderRadius:"50%",background:p(m)[l%p(m).length]})},null,4),s("span",X,c(t),1)]))),128))])):g("",!0)]),_:1})]),_:1}))}}),K=F(D,[["__scopeId","data-v-c210c0f5"]]);D.__docgenInfo={exportName:"default",displayName:"DvChartCard",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"subtitle",required:!1,type:{name:"string"}},{name:"bars",required:!0,type:{name:"Array",elements:[{name:"Array",elements:[{name:"number"}]}]}},{name:"labels",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"seriesNames",required:!1,type:{name:"Array",elements:[{name:"string"}]}}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/src/components/copilot/DvChartCard.vue"]};const H={title:"Copilot/DvChartCard",component:K,tags:["autodocs"],argTypes:{title:{control:"text",description:"Main title of the chart"},subtitle:{control:"text",description:"Optional subtitle or time range"},bars:{description:"Array of arrays, each inner array represents values for a data series",control:!1},labels:{description:"X-axis labels for each bar group",control:!1},seriesNames:{description:"Names for each data series (appears in legend if provided)",control:!1}},parameters:{docs:{description:{component:`
## Overview
DvChartCard displays bar chart data with support for single or multi-series visualization. It's designed to show performance metrics, trends, and comparisons in the AI copilot dashboard.

## Do's
- Use for comparing metrics across time periods or categories
- Provide clear, descriptive titles
- Use seriesNames for multi-series data
- Keep data sets reasonably sized for clarity
- Use consistent color schemes

## Don'ts
- Don't use for more than 3-4 series (becomes hard to read)
- Don't use without clear axis labels
- Don't show data with extreme value ranges without scaling
- Don't omit legends for multi-series charts

## Best Practices
- Use for revenue, traffic, conversion trends
- Include time period in subtitle (e.g., "Last 12 Months")
- Sort categories logically (chronological, alphabetical, or by value)
- Provide context about what metrics mean
        `}}}},h={args:{title:"Revenue by Month",subtitle:"Last 12 Months",labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],bars:[[24e3,28e3,32e3,29e3,35e3,41e3,38e3,43e3,47e3,51e3,48e3,56e3]]}},b={args:{title:"Revenue Comparison",subtitle:"This Year vs Last Year",labels:["Jan","Feb","Mar","Apr","May","Jun"],seriesNames:["This Year","Last Year"],bars:[[24e3,28e3,32e3,29e3,35e3,41e3],[18e3,22e3,25e3,23e3,28e3,32e3]]}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Revenue by Month',
    subtitle: 'Last 12 Months',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    bars: [[24000, 28000, 32000, 29000, 35000, 41000, 38000, 43000, 47000, 51000, 48000, 56000]]
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Revenue Comparison',
    subtitle: 'This Year vs Last Year',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    seriesNames: ['This Year', 'Last Year'],
    bars: [[24000, 28000, 32000, 29000, 35000, 41000], [18000, 22000, 25000, 23000, 28000, 32000]]
  }
}`,...b.parameters?.docs?.source}}};const Q=["Default","WithLegend"];export{h as Default,b as WithLegend,Q as __namedExportsOrder,H as default};
