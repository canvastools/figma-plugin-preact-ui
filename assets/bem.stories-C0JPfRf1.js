import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{i as r,r as i}from"./typedForwardRef-BIg2RNOP.js";import{n as a,t as o}from"./Text-Cr-51GRl.js";import{n as s,t as c}from"./Code-BrTMUJAY.js";import{n as l,t as u}from"./Stack-CRI7JcwR.js";var d;function f(){return(f=e((()=>{s(),l(),a(),n(),d={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { bem } from "figma-plugin-preact-ui"

const classNameBlock = bem("Block") // Block
const classNameElement = bem("Block", "element") // Block__element

<div className={classNameBlock}>
  <div className={classNameElement}> 
    {children}
  </div>
</div>
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(u,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`bem("Block", "element")`}),t(o,{children:`→`}),t(c,{variant:`inline`,children:`"Block__element"`})]})})}})))()}var p;function m(){return(m=e((()=>{s(),l(),a(),n(),p={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { bem } from "figma-plugin-preact-ui"

const classNameBlock = bem("Block") // Block
const classNameElementWithModifiers = bem("Block", "element", { modifier1: "value", modifier2: true }) // Block__element_modifier1-value Block__element_modifier2

<div className={classNameBlock}>
  <div className={classNameElementWithModifiers}>
    {children}
  </div>
</div>
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(u,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`bem("Block", "element", { modifier1: "value", modifier2: true })`}),t(o,{children:`→`}),t(c,{variant:`inline`,children:`"Block__element_modifier1-value Block__element_modifier2"`})]})})}})))()}var h,g,_,v,y;function b(){return(b=e((()=>{f(),m(),s(),l(),a(),r(),n(),h={title:`Utils/bem`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`Utility function to generate BEM class names.`}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(...) => string`,detail:`
block: string // required
element: string
mods: Record<string, string | boolean>
`}}}}},g={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { bem } from "figma-plugin-preact-ui"

const className = bem("Block", "element") // Block__element

<div className={className}>
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(u,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`bem("Block", "element")`}),t(o,{children:`→`}),t(c,{variant:`inline`,children:`"Block__element"`})]})})},_=d,v=p,y=[`Demo`,`Element`,`Modifiers`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`ElementStory`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`ModifiersStory`,...v.parameters?.docs?.source}}}})))()}b();export{g as Demo,_ as Element,v as Modifiers,y as __namedExportsOrder,h as default};