import{u as p}from"./hooks.module-DDuEt2mE.js";import{S as t}from"./utils-BMp6kSpK.js";import{s as a}from"./spacing-CSiBgOQq.js";import"./preact.module-D68vdB8i.js";import"./Text-BooB5DEX.js";import"./typedForwardRef-eUJP59ez.js";import"./compat.module-AmaJGl25.js";import"./ButtonIcon-CZSSh5qW.js";import"./Icon-C_1AiDxm.js";import"./Tooltip-2n7DDmmb.js";import"./TooltipContainer-BRY08nvC.js";import"./copy-wuaOUdOh.js";const x={title:"Variables/Spacing",parameters:{docs:{source:{language:"tsx",code:`
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
