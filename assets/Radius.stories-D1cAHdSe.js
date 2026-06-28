import{u as t}from"./hooks.module-BOklADZz.js";import{S as o}from"./utils-DVNmoe3Z.js";import"./preact.module-BEcQExD3.js";import"./Text-DWXnbeUo.js";import"./typedForwardRef-IM0ZXC4v.js";import"./compat.module-C06LZZ-F.js";import"./ButtonIcon-D68A8Iw5.js";import"./Icon-CUZDBV4V.js";import"./TooltipContext-AO-nQ0Om.js";import"./TooltipContainer-CxrP3vc5.js";import"./copy-DtO80RIp.js";const a={prefix:"--pui-radius",variables:{small:"2px",medium:"5px",large:"13px",full:"100%"}},g={title:"Variables/Radius",parameters:{docs:{source:{language:"tsx",code:`
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
