import{u as p}from"./hooks.module-CGIakYml.js";import{S as t}from"./utils-De_IK6tX.js";import{s as a}from"./spacing-DaHINeCs.js";import"./preact.module-C06nO-nz.js";import"./Text-9aeIDhQ2.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./ButtonIcon-DRFFAPoT.js";import"./Icon-DYEerEJN.js";import"./TooltipContext-DJAjWLpJ.js";import"./TooltipContainer-BVa1RtHA.js";import"./copy-CHPFR_Go.js";const x={title:"Variables/Spacing",parameters:{docs:{source:{language:"tsx",code:`
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
