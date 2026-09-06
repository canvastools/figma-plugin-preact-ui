import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{a as r,l as i}from"./color-DxJU1NJr.js";import{n as a,t as o}from"./Text-Cr-51GRl.js";import{n as s,t as c}from"./Code-BrTMUJAY.js";import{n as l,t as u}from"./Stack-CRI7JcwR.js";var d,f,p;function m(){return(m=e((()=>{s(),l(),a(),i(),n(),d={title:`Utils/colorToRgba`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"Utility function to convert `Color` type (r, g, b, a in 0–1) to RGBA (r, g, b in 0–255, a in 0–1)."}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(color: Color) => Rgba`,detail:`
// Types — all channels are 0–1

type Color = {
  r: number
  g: number
  b: number
  a: number
}`}}}}},f={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { colorToRgba } from "figma-plugin-preact-ui"

const rgba = colorToRgba({ r: 1, g: 0, b: 0, a: 1 }) // { r: 255, g: 0, b: 0, a: 1 }
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(u,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`colorToRgba({ r: 1, g: 0, b: 0, a: 1 })`}),t(o,{children:`→`}),t(c,{variant:`inline`,children:`{ r: 255, g: 0, b: 0, a: 1 }`})]})})},p=[`Demo`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
import { colorToRgba } from "figma-plugin-preact-ui"

const rgba = colorToRgba({ r: 1, g: 0, b: 0, a: 1 }) // { r: 255, g: 0, b: 0, a: 1 }
        \`
      }
    }
  },
  render: () => {
    return <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'colorToRgba({ r: 1, g: 0, b: 0, a: 1 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">{'{ r: 255, g: 0, b: 0, a: 1 }'}</Code>
        </Stack>
      </div>;
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Demo,p as __namedExportsOrder,d as default};