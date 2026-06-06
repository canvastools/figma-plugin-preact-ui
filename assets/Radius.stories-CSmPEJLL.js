import{u as t}from"./hooks.module-6Sbq__eq.js";import{S as o}from"./utils-C-4SKnZq.js";import"./preact.module-gH5CyEHP.js";import"./Text-BbQ_b1VF.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./ButtonIcon-7SP_3Ldm.js";import"./Icon-DqIclgYW.js";import"./TooltipContext-Cr8YsZR4.js";import"./TooltipContainer-CJCq4A9v.js";import"./copy-C1I75Csv.js";const a={prefix:"--pui-radius",variables:{small:"2px",medium:"5px",large:"13px",full:"100%"}},g={title:"Variables/Radius",parameters:{docs:{source:{language:"tsx",code:`
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
