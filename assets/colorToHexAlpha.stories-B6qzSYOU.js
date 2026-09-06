import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{l as r,r as i}from"./color-DxJU1NJr.js";import{n as a,t as o}from"./Text-Cr-51GRl.js";import{n as s,t as c}from"./Code-BrTMUJAY.js";import{n as l,t as u}from"./Stack-CRI7JcwR.js";var d,f,p;function m(){return(m=e((()=>{s(),l(),a(),r(),n(),d={title:`Utils/colorToHexAlpha`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"Utility function to convert `Color` type (r, g, b, a all in 0–1) to an 8-digit hex string (#RRGGBBAA)."}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(color: Color) => string`,detail:`
// Types — all channels are 0–1

type Color = {
  r: number // 0–1
  g: number // 0–1
  b: number // 0–1
  a: number // 0–1
}`}}}}},f={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { colorToHexAlpha } from "figma-plugin-preact-ui"

const hex = colorToHexAlpha({ r: 1, g: 0, b: 0, a: 1 }) // #FF0000FF
const hexTransparent = colorToHexAlpha({ r: 1, g: 0, b: 0, a: 0.5 }) // #FF000080
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(u,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`colorToHexAlpha({ r: 1, g: 0, b: 0, a: 0.5 })`}),t(o,{children:`→`}),t(c,{variant:`inline`,children:`"#FF000080"`})]})})},p=[`Demo`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
import { colorToHexAlpha } from "figma-plugin-preact-ui"

const hex = colorToHexAlpha({ r: 1, g: 0, b: 0, a: 1 }) // #FF0000FF
const hexTransparent = colorToHexAlpha({ r: 1, g: 0, b: 0, a: 0.5 }) // #FF000080
        \`
      }
    }
  },
  render: () => {
    return <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'colorToHexAlpha({ r: 1, g: 0, b: 0, a: 0.5 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">"#FF000080"</Code>
        </Stack>
      </div>;
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Demo,p as __namedExportsOrder,d as default};