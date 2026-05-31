import{u as t}from"./hooks.module-6Sbq__eq.js";import{S as o}from"./utils-DkndjQGn.js";import"./preact.module-gH5CyEHP.js";import"./Text-BbQ_b1VF.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./ButtonIcon-Bi-15aMh.js";import"./Icon-C6_npEhI.js";import"./TooltipContext-DB8mQxid.js";import"./TooltipContainer-CJCq4A9v.js";import"./copy-DmYg1PKq.js";const a={prefix:"--pui-radius",variables:{small:"2px",medium:"5px",large:"13px",full:"100%"}},g={title:"Variables/Radius",parameters:{docs:{source:{language:"tsx",code:`
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
