import{U as A,a3 as l,$ as x,ab as z,c as n,a1 as o}from"./iframe-Dzs8NioN.js";import"./preload-helper-PPVm8Dsz.js";const S=["data-size","data-tone","data-interactive","disabled","aria-label"],h=["src","alt"],k={key:1,class:"mb-av__initials","aria-hidden":"true"},r=A({__name:"MbAvatar",props:{name:{default:"Jane Smith"},initials:{default:""},src:{default:""},alt:{default:""},size:{default:"lg"},tone:{default:"neutral"},interactive:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ariaLabel:{default:void 0}},emits:["click"],setup(e,{emit:m}){const a=e,p=m,f={sm:24,md:32,lg:48,xl:64},v=n(()=>f[a.size]),b=n(()=>({"--mb-av-size":`${v.value}px`})),d=n(()=>{if(a.initials.trim().length>0)return a.initials.trim().slice(0,2).toUpperCase();const t=a.name.trim().split(/\s+/).filter(Boolean).slice(0,2);return t.length===0?"MB":t.map(c=>c[0].toUpperCase()).join("")}),g=n(()=>a.disabled||!a.interactive),u=n(()=>a.alt||a.name||d.value),y=n(()=>a.ariaLabel??u.value);function M(t){if(a.disabled){t.preventDefault();return}p("click",t)}return(t,c)=>(o(),l("button",{type:"button",class:"mb-av",style:z(b.value),"data-size":e.size,"data-tone":e.tone,"data-interactive":e.interactive?"true":"false",disabled:g.value,"aria-label":y.value,onClick:M},[e.src?(o(),l("img",{key:0,class:"mb-av__image",src:e.src,alt:u.value},null,8,h)):(o(),l("span",k,x(d.value),1))],12,S))}});r.__docgenInfo={exportName:"default",displayName:"MbAvatar",description:"",tags:{},props:[{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Jane Smith'"}},{name:"initials",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"src",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"alt",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",required:!1,type:{name:"MbAvatarSize"},defaultValue:{func:!1,value:"'lg'"}},{name:"tone",required:!1,type:{name:"MbAvatarTone"},defaultValue:{func:!1,value:"'neutral'"}},{name:"interactive",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],sourceFiles:["/home/runner/work/MaroAIfirst/MaroAIfirst/packages/marobase-ui/src/components/MbAvatar.vue"]};const _=["sm","md","lg","xl"],q=["neutral","brand","danger"],J={title:"Components/MbAvatar",component:r,tags:["autodocs"],args:{name:"Jane Smith",initials:"JS",size:"lg",tone:"neutral",interactive:!0,disabled:!1},argTypes:{size:{control:"inline-radio",options:_},tone:{control:"inline-radio",options:q}},render:e=>({components:{MbAvatar:r},setup(){return{args:e}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbAvatar v-bind="args" />
      </div>
    `})},s={},i={render:e=>({components:{MbAvatar:r},setup(){return{args:e}},template:`
      <div style="display:flex;gap:16px;padding:24px;align-items:center;">
        <MbAvatar v-bind="args" tone="neutral" initials="JS" />
        <MbAvatar v-bind="args" tone="brand" initials="MB" />
        <MbAvatar v-bind="args" tone="danger" initials="AL" />
      </div>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MbAvatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display:flex;gap:16px;padding:24px;align-items:center;">
        <MbAvatar v-bind="args" tone="neutral" initials="JS" />
        <MbAvatar v-bind="args" tone="brand" initials="MB" />
        <MbAvatar v-bind="args" tone="danger" initials="AL" />
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};const L=["Playground","ToneGrid"];export{s as Playground,i as ToneGrid,L as __namedExportsOrder,J as default};
