import{u as t}from"./hooks.module-CGIakYml.js";import{S as o}from"./utils-S2hR3eKp.js";import"./preact.module-C06nO-nz.js";import"./Text-9aeIDhQ2.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./ButtonIcon-DlAG9zaR.js";import"./Icon-tINMxteJ.js";import"./TooltipContext-C-9LO0ZZ.js";import"./TooltipContainer-BVa1RtHA.js";import"./copy-BU-UAASu.js";const a={prefix:"--pui-radius",variables:{small:"2px",medium:"5px",large:"13px",full:"100%"}},g={title:"Variables/Radius",parameters:{docs:{source:{language:"tsx",code:`
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
