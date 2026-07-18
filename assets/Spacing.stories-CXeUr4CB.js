import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-XYsEgyrh.js";import{a as r,t as i}from"./themes-OugspNdM.js";import{i as a,n as o}from"./utils-C4DmXrFF.js";var s,c,l;e((()=>{i(),a(),n(),s={title:`Variables/Spacing`,parameters:{docs:{source:{code:`
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
}`}}}},c={tags:[`!dev`],globals:{background:`primary`},render:()=>t(o,{variables:r.variables,cssVarPrefix:r.prefix??`--pui-spacing`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  globals: {
    background: 'primary'
  },
  render: () => <SimpleVariableTable variables={spacing.variables as Record<string, string>} cssVarPrefix={spacing.prefix ?? '--pui-spacing'} />
}`,...c.parameters?.docs?.source}}},l=[`Spacing`]}))();export{c as Spacing,l as __namedExportsOrder,s as default};