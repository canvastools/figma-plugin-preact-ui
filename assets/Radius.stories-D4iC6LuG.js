import{u as t}from"./hooks.module-BMDhD8C6.js";import{S as o}from"./utils-Dds6v2Yf.js";import"./preact.module-DhLccOoG.js";import"./Text-DSWvyrh8.js";import"./typedForwardRef-BBQ-rOPo.js";import"./compat.module-BB5nNOI3.js";import"./ButtonIcon-hshyeL9J.js";import"./Icon-CwUXZnq_.js";import"./TooltipContext-Be-KFfgH.js";import"./TooltipContainer-DWitGrs9.js";import"./copy-CIyPef8i.js";const a={prefix:"--pui-radius",variables:{small:"2px",medium:"5px",large:"13px",full:"100%"}},g={title:"Variables/Radius",parameters:{docs:{source:{language:"tsx",code:`
// CSS

.element {
  border-radius: var(--pui-radius-medium);
}

// JS

import { radius } from 'figma-plugin-preact-ui'

const style = {
  borderRadius: radius.variables.medium,
}

function App() {
  return (
    <div class="app" {...style}>
      Hello world!
    </div>
  )
}
`}}}},r={tags:["!dev"],render:()=>t(o,{variables:a.variables,cssVarPrefix:a.prefix})};var e,i,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <SimpleVariableTable variables={radius.variables as Record<string, string>} cssVarPrefix={radius.prefix ?? '--pui-radius'} />
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const S=["Radius"];export{r as Radius,S as __namedExportsOrder,g as default};
