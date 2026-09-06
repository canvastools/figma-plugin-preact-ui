import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{l as r,n as i}from"./color-DxJU1NJr.js";import{n as a,t as o}from"./Text-Cr-51GRl.js";import{n as s,t as c}from"./Code-BrTMUJAY.js";import{n as l,t as u}from"./Stack-CRI7JcwR.js";var d,f,p;function m(){return(m=e((()=>{s(),l(),a(),r(),n(),d={title:`Utils/colorToHex`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"Utility function to convert `Color` type (r, g, b in 0–1) to a 6-digit hex string."}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(color: Color) => string`,detail:`
// Types — all channels are 0–1

type Color = {
  r: number // 0–1
  g: number // 0–1
  b: number // 0–1
  a: number // 0–1
}`}}}}},f={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { colorToHex } from "figma-plugin-preact-ui"

const hex = colorToHex({ r: 1, g: 0, b: 0, a: 1 }) // #FF0000
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(u,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`colorToHex({ r: 1, g: 0, b: 0, a: 1 })`}),t(o,{children:`→`}),t(c,{variant:`inline`,children:`"#FF0000"`})]})})},p=[`Demo`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
import { colorToHex } from "figma-plugin-preact-ui"

const hex = colorToHex({ r: 1, g: 0, b: 0, a: 1 }) // #FF0000
        \`
      }
    }
  },
  render: () => {
    return <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'colorToHex({ r: 1, g: 0, b: 0, a: 1 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">"#FF0000"</Code>
        </Stack>
      </div>;
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Demo,p as __namedExportsOrder,d as default};