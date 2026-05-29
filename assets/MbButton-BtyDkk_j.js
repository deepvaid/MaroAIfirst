import{j as e}from"./index-0nNlCzO7.js";import{useMDXComponents as r}from"./index-C5yLzwfr.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"mbbutton",children:"MbButton"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"MbButton"})," is the Primary action button implementation for MaroBase UI. It supports four styles (",e.jsx(n.code,{children:"filled"}),", ",e.jsx(n.code,{children:"outline"}),", ",e.jsx(n.code,{children:"tinted"}),", ",e.jsx(n.code,{children:"plain"}),"), three sizes, icon-only mode, loading state, and deterministic visual states for parity tests."]}),`
`,e.jsx(n.h2,{id:"token-source-governance",children:"Token Source Governance"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Source of truth for button visuals is ",e.jsx(n.strong,{children:"Figma variables"}),"."]}),`
`,e.jsxs(n.li,{children:["Token generation scripts:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pnpm tokens:fetch"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pnpm tokens:mb-button"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Generated artifacts:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"packages/marobase-ui/src/tokens/mb-button.tokens.css"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"packages/marobase-ui/src/tokens/mb-button.tokens.ts"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"dark-mode-policy",children:"Dark Mode Policy"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"First source: Figma dark variable mode values."}),`
`,e.jsxs(n.li,{children:["If dark values are missing, use ",e.jsx(n.code,{children:"packages/marobase-ui/src/tokens/mb-button.dark-overrides.json"}),"."]}),`
`,e.jsxs(n.li,{children:["Every override entry must include:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"token"}),`
`,e.jsx(n.li,{children:"fallback"}),`
`,e.jsx(n.li,{children:"reason"}),`
`,e.jsx(n.li,{children:"date"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Build warnings are written to ",e.jsx(n.code,{children:"artifacts/token-warnings/mb-button-dark-overrides-report.json"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup lang="ts">
import { MbButton } from '@marobase/ui';
<\/script>

<template>
  <MbButton
    style-type="filled"
    size="lg"
    state="default"
    icon-mode="with-label"
    label="Continue"
    leading-icon="mdi-rhombus-outline"
    trailing-icon="mdi-rhombus-outline"
  />
</template>
`})}),`
`,e.jsx(n.h2,{id:"do--dont",children:"Do / Don't"}),`
`,e.jsxs(n.p,{children:[`| Do | Don't |
| --- | --- |
| Use one primary filled button per action zone. | Stack multiple filled primary buttons in the same area. |
| Keep label verbs clear (`,e.jsx(n.code,{children:"Save"}),", ",e.jsx(n.code,{children:"Continue"}),", ",e.jsx(n.code,{children:"Submit"}),"). | Use vague labels (",e.jsx(n.code,{children:"Click here"}),", ",e.jsx(n.code,{children:"Okay"}),`) for core actions. |
| Use `,e.jsx(n.code,{children:"loading"}),` for async actions to prevent duplicate clicks. | Show enabled action state while a request is in progress. |
| Provide `,e.jsx(n.code,{children:"aria-label"})," for icon-only mode. | Render icon-only buttons without accessible names. |"]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"})," and ",e.jsx(n.code,{children:"loading"})," suppress click emission."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"icon-only"})," mode requires ",e.jsx(n.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(n.li,{children:["Focus state uses tokenized ring (",e.jsx(n.code,{children:"--mb-btn-focus-ring-brand"}),")."]}),`
`]})]})}function c(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{c as default};
