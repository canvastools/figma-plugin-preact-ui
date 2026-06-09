import{u as p}from"./hooks.module-CGIakYml.js";import{S as t}from"./utils-S2hR3eKp.js";import{s as a}from"./spacing-CSiBgOQq.js";import"./preact.module-C06nO-nz.js";import"./Text-9aeIDhQ2.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./ButtonIcon-DlAG9zaR.js";import"./Icon-tINMxteJ.js";import"./TooltipContext-C-9LO0ZZ.js";import"./TooltipContainer-BVa1RtHA.js";import"./copy-BU-UAASu.js";const x={title:"Variables/Spacing",parameters:{docs:{source:{language:"tsx",code:`
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
