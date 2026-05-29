import{U as x,W as v,X as a,f as D,Y as s,a3 as t,Z as r,$ as c,e as p,F as g,_ as h,a0 as $,an as C,a7 as u,a6 as m,j as T,a1 as e}from"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const k={key:0,class:"d-flex align-center justify-space-between px-4 pt-3 pb-2"},_={class:"text-subtitle-2 font-weight-bold"},P={class:"d-flex ga-1"},f=x({__name:"DvDataTable",props:{title:{},headers:{},rows:{}},setup(o){return(S,n)=>(e(),v(D,{variant:"outlined",rounded:"lg"},{default:a(()=>[s(T,{class:"pa-0"},{default:a(()=>[o.title?(e(),t("div",k,[r("span",_,c(o.title),1),r("div",P,[s(p,{icon:"",size:"28",variant:"text"},{default:a(()=>[s(g,{size:"16"},{default:a(()=>[...n[0]||(n[0]=[h("download",-1)])]),_:1})]),_:1}),s(p,{icon:"",size:"28",variant:"text"},{default:a(()=>[s(g,{size:"16"},{default:a(()=>[...n[1]||(n[1]=[h("maximize-2",-1)])]),_:1})]),_:1})])])):$("",!0),s(C,{density:"compact",class:"text-caption"},{default:a(()=>[r("thead",null,[r("tr",null,[(e(!0),t(m,null,u(o.headers,i=>(e(),t("th",{key:i,class:"text-caption font-weight-bold text-uppercase",style:{"font-size":"10px !important","letter-spacing":"0.5px"}},c(i),1))),128))])]),r("tbody",null,[(e(!0),t(m,null,u(o.rows,(i,y)=>(e(),t("tr",{key:y},[(e(!0),t(m,null,u(i,(w,b)=>(e(),t("td",{key:b,class:"text-body-2"},c(w),1))),128))]))),128))])]),_:1})]),_:1})]),_:1}))}});f.__docgenInfo={exportName:"default",displayName:"DvDataTable",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"headers",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"rows",required:!0,type:{name:"Array",elements:[{name:"Array",elements:[{name:"string"}]}]}}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/src/components/copilot/DvDataTable.vue"]};const B={title:"Copilot/DvDataTable",component:f,tags:["autodocs"],argTypes:{title:{control:"text",description:"Optional title for the data table"},headers:{description:"Column headers for the table",control:!1},rows:{description:"Array of row data (each row is an array of cell values)",control:!1}},parameters:{docs:{description:{component:`
## Overview
DvDataTable is a simple, clean table component for displaying structured data in the AI copilot dashboard. It supports multiple columns and rows with an optional title.

## Do's
- Use for displaying lists of products, customers, or metrics
- Keep header names short and descriptive
- Align data appropriately (numbers right-aligned, text left-aligned)
- Include relevant context in the title
- Use for read-only data display

## Don'ts
- Don't use for very large datasets without pagination
- Don't mix data types in a way that confuses readers
- Don't use without clear column headers
- Don't use for interactive forms or editable data

## Best Practices
- Sort by most relevant column (sales, date, etc.)
- Format numbers with thousands separators
- Use consistent date formatting
- Keep rows scannable with good spacing
- Limit to 5-8 columns for readability
        `}}}},l={args:{title:"Top Products",headers:["Product","Sales","Revenue","Profit Margin"],rows:[["Premium Wireless Headphones","1,234","$61,700","32%"],["Designer Backpack","956","$47,800","28%"],["Smart Watch Pro","842","$50,520","35%"],["Leather Wallet","2,103","$42,060","22%"],["USB-C Fast Charger","3,456","$34,560","18%"]]}},d={args:{title:"Top Customers",headers:["Customer Name","Total Orders","Lifetime Value","Last Purchase"],rows:[["Sarah Johnson","24","$4,892","2 days ago"],["Michael Chen","18","$3,456","1 week ago"],["Emma Rodriguez","31","$6,234","3 days ago"],["James Williams","15","$2,890","2 weeks ago"],["Lisa Martinez","27","$5,123","5 days ago"]]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Top Products',
    headers: ['Product', 'Sales', 'Revenue', 'Profit Margin'],
    rows: [['Premium Wireless Headphones', '1,234', '$61,700', '32%'], ['Designer Backpack', '956', '$47,800', '28%'], ['Smart Watch Pro', '842', '$50,520', '35%'], ['Leather Wallet', '2,103', '$42,060', '22%'], ['USB-C Fast Charger', '3,456', '$34,560', '18%']]
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Top Customers',
    headers: ['Customer Name', 'Total Orders', 'Lifetime Value', 'Last Purchase'],
    rows: [['Sarah Johnson', '24', '$4,892', '2 days ago'], ['Michael Chen', '18', '$3,456', '1 week ago'], ['Emma Rodriguez', '31', '$6,234', '3 days ago'], ['James Williams', '15', '$2,890', '2 weeks ago'], ['Lisa Martinez', '27', '$5,123', '5 days ago']]
  }
}`,...d.parameters?.docs?.source}}};const L=["Default","CustomerTable"];export{d as CustomerTable,l as Default,L as __namedExportsOrder,B as default};
