import{U as v,a3 as l,a6 as g,a7 as h,W as o,X as t,Y as f,Z as i,$ as r,F as b,_ as c,a0 as d,g as w,j as C,f as U,a1 as n}from"./iframe-Dzs8NioN.js";import"./preload-helper-PPVm8Dsz.js";const _={class:"d-flex ga-2 flex-wrap"},y={class:"d-flex align-center justify-space-between mb-1"},x={class:"text-caption text-medium-emphasis text-uppercase",style:{"font-size":"10px","letter-spacing":"0.5px"}},k={class:"text-h6 font-weight-bold",style:{"line-height":"1.2"}},p=v({__name:"DvKpiRow",props:{kpis:{}},setup(u){return(K,R)=>(n(),l("div",_,[(n(!0),l(g,null,h(u.kpis,(e,m)=>(n(),o(U,{key:m,variant:"outlined",rounded:"lg",class:"flex-grow-1",style:{"min-width":"120px"}},{default:t(()=>[f(C,{class:"pa-3"},{default:t(()=>[i("div",y,[i("span",x,r(e.label),1),e.icon?(n(),o(b,{key:0,size:"16",color:"primary",style:{opacity:"0.5"}},{default:t(()=>[c(r(e.icon),1)]),_:2},1024)):d("",!0)]),i("div",k,r(e.value),1),e.trend?(n(),o(w,{key:0,size:"x-small",color:e.trendUp?"success":"error",variant:"tonal",class:"mt-1","prepend-icon":e.trendUp?"trending-up":"trending-down",style:{"font-size":"10px"}},{default:t(()=>[c(r(e.trend),1)]),_:2},1032,["color","prepend-icon"])):d("",!0)]),_:2},1024)]),_:2},1024))),128))]))}});p.__docgenInfo={exportName:"default",displayName:"DvKpiRow",description:"",tags:{},props:[{name:"kpis",required:!0,type:{name:"Array",elements:[{name:`{
  label: string
  value: string
  trend?: string
  trendUp?: boolean
  icon?: string
}`}]}}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/src/components/copilot/DvKpiRow.vue"]};const M={title:"Copilot/DvKpiRow",component:p,tags:["autodocs"],argTypes:{kpis:{description:"Array of KPI objects with label, value, trend, trendUp, and icon",control:!1}},parameters:{docs:{description:{component:`
## Overview
DvKpiRow displays a horizontal row of key performance indicators with values, trends, and icons. Perfect for dashboard headers and quick metric overviews in the copilot interface.

## Do's
- Use for displaying 3-4 related metrics
- Show trend indicators with clear up/down direction
- Include relevant icons to reinforce metrics
- Use for quick snapshot of performance
- Always include meaningful trend data

## Don'ts
- Don't display more than 4 KPIs in a single row (use multiple rows)
- Don't use inconsistent formatting across KPIs
- Don't hide trend information
- Don't use icons that contradict the metric

## Best Practices
- Group related metrics (revenue, AOV, conversion for commerce)
- Use green for positive trends, red for negative
- Format large numbers with abbreviations (e.g., $1.2M, 45.3K)
- Include percentage changes in trend (e.g., "+12% vs last month")
- Use consistent icon sizing and positioning
        `}}}},a={args:{kpis:[{label:"Total Revenue",value:"$287,450",trend:"+18% vs Last Month",trendUp:!0,icon:"banknote"},{label:"Average Order Value",value:"$127.50",trend:"+5.2% vs Last Month",trendUp:!0,icon:"shopping-cart"},{label:"Conversion Rate",value:"4.23%",trend:"-0.5% vs Last Month",trendUp:!1,icon:"percent"},{label:"Customer Count",value:"2,254",trend:"+342 New Customers",trendUp:!0,icon:"users"}]}},s={args:{kpis:[{label:"Email Open Rate",value:"28.4%",trend:"+4.2% vs Last Campaign",trendUp:!0,icon:"mail-open"},{label:"Click-Through Rate",value:"6.8%",trend:"+1.1% vs Last Campaign",trendUp:!0,icon:"mouse-pointer-click"},{label:"Campaign Reach",value:"145.2K",trend:"+23K Contacts",trendUp:!0,icon:"megaphone"},{label:"Subscriber Growth",value:"8,342",trend:"+356 this month",trendUp:!0,icon:"user-plus"}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kpis: [{
      label: 'Total Revenue',
      value: '$287,450',
      trend: '+18% vs Last Month',
      trendUp: true,
      icon: 'banknote'
    }, {
      label: 'Average Order Value',
      value: '$127.50',
      trend: '+5.2% vs Last Month',
      trendUp: true,
      icon: 'shopping-cart'
    }, {
      label: 'Conversion Rate',
      value: '4.23%',
      trend: '-0.5% vs Last Month',
      trendUp: false,
      icon: 'percent'
    }, {
      label: 'Customer Count',
      value: '2,254',
      trend: '+342 New Customers',
      trendUp: true,
      icon: 'users'
    }]
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kpis: [{
      label: 'Email Open Rate',
      value: '28.4%',
      trend: '+4.2% vs Last Campaign',
      trendUp: true,
      icon: 'mail-open'
    }, {
      label: 'Click-Through Rate',
      value: '6.8%',
      trend: '+1.1% vs Last Campaign',
      trendUp: true,
      icon: 'mouse-pointer-click'
    }, {
      label: 'Campaign Reach',
      value: '145.2K',
      trend: '+23K Contacts',
      trendUp: true,
      icon: 'megaphone'
    }, {
      label: 'Subscriber Growth',
      value: '8,342',
      trend: '+356 this month',
      trendUp: true,
      icon: 'user-plus'
    }]
  }
}`,...s.parameters?.docs?.source}}};const V=["RevenueKpis","MarketingKpis"];export{s as MarketingKpis,a as RevenueKpis,V as __namedExportsOrder,M as default};
