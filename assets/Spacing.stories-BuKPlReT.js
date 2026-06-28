import{u as p}from"./hooks.module-BOklADZz.js";import{S as t}from"./utils-DVNmoe3Z.js";import{s as a}from"./spacing-CSiBgOQq.js";import"./preact.module-BEcQExD3.js";import"./Text-DWXnbeUo.js";import"./typedForwardRef-IM0ZXC4v.js";import"./compat.module-C06LZZ-F.js";import"./ButtonIcon-D68A8Iw5.js";import"./Icon-CUZDBV4V.js";import"./TooltipContext-AO-nQ0Om.js";import"./TooltipContainer-CxrP3vc5.js";import"./copy-DtO80RIp.js";const x={title:"Variables/Spacing",parameters:{docs:{source:{language:"tsx",code:`
// CSS

.element {
  padding: var(--pui-spacing-400);
}

// JS

import { spacing } from 'figma-plugin-preact-ui'

const style = {
  padding: spacing.variables['400'],
}

function App() {
  return (
    <div class="app" {...style}>
      Hello world!
    </div>
  )
}`}}}},r={tags:["!dev"],render:()=>p(t,{variables:a.variables,cssVarPrefix:a.prefix})};var e,i,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <SimpleVariableTable variables={spacing.variables as Record<string, string>} cssVarPrefix={spacing.prefix ?? '--pui-spacing'} />
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const V=["Spacing"];export{r as Spacing,V as __namedExportsOrder,x as default};
