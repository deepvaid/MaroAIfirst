import{_ as o}from"./MbDropdownMenu-DcFMp8TU.js";import"./iframe-DScATqdl.js";import"./preload-helper-PPVm8Dsz.js";const s=[{id:"1",label:"Menu Option"},{id:"2",label:"Menu Option"},{id:"3",label:"Menu Option",meta:"Text"},{id:"4",label:"Menu Option",meta:"Text"},{id:"5",label:"Menu Option"},{id:"6",label:"Menu Option"}],r=["default","hover","focus","disabled"],l={title:"Overlays/MbDropdownMenu",component:o,tags:["autodocs"],args:{header:"Header",footer:"Footer",options:s,selectedId:"",state:"default",disabled:!1,width:260},argTypes:{state:{control:"inline-radio",options:r}},render:a=>({components:{MbDropdownMenu:o},setup(){return{args:a}},template:`
      <div style="display:grid;gap:16px;align-items:start;justify-items:start;padding:24px;">
        <MbDropdownMenu v-bind="args" />
      </div>
    `})},e={},t={args:{selectedId:"3"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    selectedId: '3'
  }
}`,...t.parameters?.docs?.source}}};const p=["Playground","WithSelection"];export{e as Playground,t as WithSelection,p as __namedExportsOrder,l as default};
