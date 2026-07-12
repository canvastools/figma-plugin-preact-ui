import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-B_u_rUE0.js";import{_ as r,v as i}from"./utils-k8SxZ3Xg.js";import{t as a}from"./Text-Bf8YN4P6.js";import{m as o,t as s}from"./src-Ch66eTMx.js";import{t as c}from"./Code-DSUzxDG3.js";var l,u=e((()=>{s(),n(),l={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { bem } from "figma-plugin-preact-ui"

const classNameBlock = bem("Block") // Block
const classNameElement = bem("Block", "element") // Block__element

<div className={classNameBlock}>
  <div className={classNameElement}> 
    {children}
  </div>
</div>
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(o,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`bem("Block", "element")`}),t(a,{children:`→`}),t(c,{variant:`inline`,children:`"Block__element"`})]})})}})),d,f=e((()=>{s(),n(),d={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { bem } from "figma-plugin-preact-ui"

const classNameBlock = bem("Block") // Block
const classNameElementWithModifiers = bem("Block", "element", { modifier1: "value", modifier2: true }) // Block__element_modifier1-value Block__element_modifier2

<div className={classNameBlock}>
  <div className={classNameElementWithModifiers}>
    {children}
  </div>
</div>
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(o,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`bem("Block", "element", { modifier1: "value", modifier2: true })`}),t(a,{children:`→`}),t(c,{variant:`inline`,children:`"Block__element_modifier1-value Block__element_modifier2"`})]})})}})),p,m,h,g,_;e((()=>{u(),f(),s(),i(),n(),p={title:`Utils/bem`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Utility function to generate BEM class names.`}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(...) => string`,detail:`
block: string // required
element: string
mods: Record<string, string | boolean>
`}}}}},m={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { bem } from "figma-plugin-preact-ui"

const className = bem("Block", "element") // Block__element

<div className={className}>
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(o,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`bem("Block", "element")`}),t(a,{children:`→`}),t(c,{variant:`inline`,children:`"Block__element"`})]})})},h=l,g=d,m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
import { bem } from "figma-plugin-preact-ui"

const className = bem("Block", "element") // Block__element

<div className={className}>
        \`
      }
    }
  },
  render: () => {
    return <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'bem("Block", "element")'}</Code>
          <Text>→</Text>
          <Code variant="inline">"Block__element"</Code>
        </Stack>
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`ElementStory`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`ModifiersStory`,...g.parameters?.docs?.source}}},_=[`Demo`,`Element`,`Modifiers`]}))();export{m as Demo,h as Element,g as Modifiers,_ as __namedExportsOrder,p as default};