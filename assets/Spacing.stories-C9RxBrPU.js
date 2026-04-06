import{u as p}from"./hooks.module-BMDhD8C6.js";import{S as t}from"./utils-Dds6v2Yf.js";import{s as a}from"./spacing-DaHINeCs.js";import"./preact.module-DhLccOoG.js";import"./Text-DSWvyrh8.js";import"./typedForwardRef-BBQ-rOPo.js";import"./compat.module-BB5nNOI3.js";import"./ButtonIcon-hshyeL9J.js";import"./Icon-CwUXZnq_.js";import"./TooltipContext-Be-KFfgH.js";import"./TooltipContainer-DWitGrs9.js";import"./copy-CIyPef8i.js";const x={title:"Variables/Spacing",parameters:{docs:{source:{language:"tsx",code:`
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
