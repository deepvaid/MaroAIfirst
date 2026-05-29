import{U as g,W as v,X as t,f as b,Y as o,Z as r,a as w,F as S,_ as a,$ as s,e as p,j as x,a1 as C}from"./iframe-Dzs8NioN.js";import"./preload-helper-PPVm8Dsz.js";const A={class:"d-flex align-center ga-2 mb-3"},B={class:"text-caption font-weight-bold text-uppercase",style:{"letter-spacing":"0.5px"}},W={class:"text-subtitle-2 font-weight-bold mb-2"},k={class:"content-preview pa-3 rounded-lg text-body-2 bg-surface-variant",style:{border:"1px solid rgba(var(--v-border-color), var(--v-border-opacity))","white-space":"pre-line","line-height":"var(--mp-typography-lineHeight-loose)","max-height":"160px","overflow-y":"auto"}},D={class:"d-flex ga-2 mt-3"},h=g({__name:"DvContentCard",props:{type:{},title:{},content:{}},emits:["copy","edit","use"],setup(n,{emit:f}){const u=f,m={email:{icon:"mail",color:"primary",label:"Email Copy"},product:{icon:"package",color:"success",label:"Product Description"},blog:{icon:"file-text",color:"warning",label:"Blog Post"},sms:{icon:"message-circle",color:"secondary",label:"SMS Message"}};return(N,e)=>(C(),v(b,{variant:"outlined",rounded:"lg"},{default:t(()=>[o(x,{class:"pa-4"},{default:t(()=>[r("div",A,[o(w,{size:"28",color:m[n.type]?.color,variant:"tonal"},{default:t(()=>[o(S,{size:"16"},{default:t(()=>[a(s(m[n.type]?.icon),1)]),_:1})]),_:1},8,["color"]),r("span",B,s(m[n.type]?.label),1)]),r("div",W,s(n.title),1),r("div",k,s(n.content),1),r("div",D,[o(p,{variant:"flat",size:"small",class:"text-none","prepend-icon":"copy",onClick:e[0]||(e[0]=y=>u("copy")),color:"surface"},{default:t(()=>[...e[3]||(e[3]=[a("Copy",-1)])]),_:1}),o(p,{variant:"flat",size:"small",class:"text-none","prepend-icon":"pencil",onClick:e[1]||(e[1]=y=>u("edit")),color:"surface"},{default:t(()=>[...e[4]||(e[4]=[a("Edit",-1)])]),_:1}),o(p,{color:"primary",variant:"flat",size:"small",class:"text-none","prepend-icon":"check",onClick:e[2]||(e[2]=y=>u("use"))},{default:t(()=>[...e[5]||(e[5]=[a("Use in Campaign",-1)])]),_:1})])]),_:1})]),_:1}))}});h.__docgenInfo={exportName:"default",displayName:"DvContentCard",description:"",tags:{},props:[{name:"type",required:!0,type:{name:"union",elements:[{name:'"email"'},{name:'"product"'},{name:'"blog"'},{name:'"sms"'}]}},{name:"title",required:!0,type:{name:"string"}},{name:"content",required:!0,type:{name:"string"}}],events:[{name:"copy"},{name:"edit"},{name:"use"}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/src/components/copilot/DvContentCard.vue"]};const E={title:"Copilot/DvContentCard",component:h,tags:["autodocs"],argTypes:{type:{control:"select",options:["email","product","blog","sms"],description:"Type of content being displayed"},title:{control:"text",description:"Content title or headline"},content:{control:"textarea",description:"Main content body"}},parameters:{docs:{description:{component:`
## Overview
DvContentCard displays different types of content (email, product, blog, SMS) with actions to copy, edit, or use the content. It's used in the AI copilot to preview and interact with generated content.

## Do's
- Show content in appropriate format (email preview, product card, etc.)
- Provide quick actions to use or modify content
- Display content type clearly
- Keep content preview readable and scannable
- Use for content suggestions and recommendations

## Don'ts
- Don't truncate content without indicating continuation
- Don't hide edit/use actions
- Don't mix multiple content types in one card
- Don't use without a clear content type label

## Best Practices
- Show realistic content samples from your domain
- Highlight key sections (subject line, CTA, etc.)
- Provide context about where content can be used
- Include previews of how content will appear to users
        `}}}},i={args:{type:"email",title:"Welcome Email Campaign",content:`Subject: Welcome to [Brand]! We're excited to have you.

Hi [First Name],

Thank you for joining our community. We're thrilled to introduce you to our latest collections and exclusive member benefits.

Get started:
• Browse our New Arrivals
• Claim your 15% welcome discount
• Explore our style guides

Welcome aboard!

[Brand] Team`}},l={args:{type:"product",title:"Premium Wireless Headphones",content:`Experience crystal-clear sound with active noise cancellation technology. These premium headphones feature a 30-hour battery life, premium leather ear cushions, and seamless Bluetooth connectivity.

Key Features:
• Active Noise Cancellation (ANC)
• 30-hour battery life
• Premium comfort fit
• Foldable design for portability
• Built-in microphone for calls

Perfect for music lovers and professionals alike.`}},c={args:{type:"blog",title:"Tips for Building Your Summer Wardrobe",content:`As the weather warms up, it's the perfect time to refresh your wardrobe. Here are our top tips for building a summer wardrobe that's both stylish and versatile.

1. Start with Basics
White tees, neutral shorts, and lightweight layers form the foundation of any summer look.

2. Add Color and Pattern
Bright colors and fun prints instantly elevate your summer style.

3. Don't Forget Accessories
Sunglasses, hats, and scarves can transform any outfit.

Shop our summer collection today!`}},d={args:{type:"sms",title:"Flash Sale Alert SMS",content:`🔥 FLASH SALE ALERT 🔥

Hi [Name]! Your exclusive 24-hour sale starts NOW.

Save 40% on ALL items with code: FLASH40

Shop now: [link]

Offer expires in 24 hours!`}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    title: 'Welcome Email Campaign',
    content: 'Subject: Welcome to [Brand]! We\\'re excited to have you.\\n\\nHi [First Name],\\n\\nThank you for joining our community. We\\'re thrilled to introduce you to our latest collections and exclusive member benefits.\\n\\nGet started:\\n• Browse our New Arrivals\\n• Claim your 15% welcome discount\\n• Explore our style guides\\n\\nWelcome aboard!\\n\\n[Brand] Team'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'product',
    title: 'Premium Wireless Headphones',
    content: 'Experience crystal-clear sound with active noise cancellation technology. These premium headphones feature a 30-hour battery life, premium leather ear cushions, and seamless Bluetooth connectivity.\\n\\nKey Features:\\n• Active Noise Cancellation (ANC)\\n• 30-hour battery life\\n• Premium comfort fit\\n• Foldable design for portability\\n• Built-in microphone for calls\\n\\nPerfect for music lovers and professionals alike.'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'blog',
    title: 'Tips for Building Your Summer Wardrobe',
    content: 'As the weather warms up, it\\'s the perfect time to refresh your wardrobe. Here are our top tips for building a summer wardrobe that\\'s both stylish and versatile.\\n\\n1. Start with Basics\\nWhite tees, neutral shorts, and lightweight layers form the foundation of any summer look.\\n\\n2. Add Color and Pattern\\nBright colors and fun prints instantly elevate your summer style.\\n\\n3. Don\\'t Forget Accessories\\nSunglasses, hats, and scarves can transform any outfit.\\n\\nShop our summer collection today!'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'sms',
    title: 'Flash Sale Alert SMS',
    content: '🔥 FLASH SALE ALERT 🔥\\n\\nHi [Name]! Your exclusive 24-hour sale starts NOW.\\n\\nSave 40% on ALL items with code: FLASH40\\n\\nShop now: [link]\\n\\nOffer expires in 24 hours!'
  }
}`,...d.parameters?.docs?.source}}};const T=["EmailContent","ProductDescription","BlogPost","SMSMessage"];export{c as BlogPost,i as EmailContent,l as ProductDescription,d as SMSMessage,T as __namedExportsOrder,E as default};
