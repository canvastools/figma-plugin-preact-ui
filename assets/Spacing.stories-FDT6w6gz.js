import{u as p}from"./hooks.module-6Sbq__eq.js";import{S as t}from"./utils-y4TuPl5W.js";import{s as a}from"./spacing-CSiBgOQq.js";import"./preact.module-gH5CyEHP.js";import"./Text-BbQ_b1VF.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./ButtonIcon-DSfJ2occ.js";import"./Icon-DqIclgYW.js";import"./TooltipContext-Csm2MW4s.js";import"./TooltipContainer-CJCq4A9v.js";import"./copy-C1I75Csv.js";const x={title:"Variables/Spacing",parameters:{docs:{source:{language:"tsx",code:`
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
