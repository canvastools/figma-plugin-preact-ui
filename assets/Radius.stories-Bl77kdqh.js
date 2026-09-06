import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{i as r,n as i}from"./utils-VaNT4NB_.js";var a;function o(){return(o=e((()=>{a={class:`:root`,prefix:`--pui-radius`,variables:{small:`2px`,medium:`5px`,large:`13px`,full:`100%`}}})))()}var s,c,l;function u(){return(u=e((()=>{o(),r(),n(),s={title:`Variables/Radius`,parameters:{docs:{source:{code:`
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
`}}}},c={tags:[`!dev`],globals:{background:`primary`},render:()=>t(i,{variables:a.variables,cssVarPrefix:a.prefix??`--pui-radius`})},l=[`Radius`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  globals: {
    background: 'primary'
  },
  render: () => <SimpleVariableTable variables={radius.variables as Record<string, string>} cssVarPrefix={radius.prefix ?? '--pui-radius'} />
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Radius,l as __namedExportsOrder,s as default};