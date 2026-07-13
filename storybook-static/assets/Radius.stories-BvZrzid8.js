import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-B_u_rUE0.js";import{r,t as i}from"./themes-CIcOshzH.js";import{i as a,n as o}from"./utils-BNsMCeQZ.js";var s,c,l;e((()=>{i(),a(),n(),s={title:`Variables/Radius`,parameters:{docs:{source:{code:`
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
`}}}},c={tags:[`!dev`],globals:{background:`primary`},render:()=>t(o,{variables:r.variables,cssVarPrefix:r.prefix??`--pui-radius`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  globals: {
    background: 'primary'
  },
  render: () => <SimpleVariableTable variables={radius.variables as Record<string, string>} cssVarPrefix={radius.prefix ?? '--pui-radius'} />
}`,...c.parameters?.docs?.source}}},l=[`Radius`]}))();export{c as Radius,l as __namedExportsOrder,s as default};