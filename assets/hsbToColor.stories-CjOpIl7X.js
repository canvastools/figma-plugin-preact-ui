import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{c as r,l as i}from"./color-DxJU1NJr.js";import{n as a,t as o}from"./Text-Cr-51GRl.js";import{n as s,t as c}from"./Code-BrTMUJAY.js";import{n as l,t as u}from"./Stack-CRI7JcwR.js";var d,f,p;function m(){return(m=e((()=>{s(),l(),a(),i(),n(),d={title:`Utils/hsbToColor`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"Utility function to convert HSB (h in 0–360, s and b in 0–1, a in 0–1) back to a `Color` (r, g, b, a in 0–1). The hue wraps, so shifting past 360° needs no clamping of its own."}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(hsb: Hsb) => Color`,detail:`
// Types

type Hsb = {
  h: number // 0–360, degrees
  s: number // 0–1
  b: number // 0–1, brightness
  a: number // 0–1
}

type Color = {
  r: number // 0–1
  g: number // 0–1
  b: number // 0–1
  a: number // 0–1
}`}}}}},f={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { colorToHsb, hsbToColor } from "figma-plugin-preact-ui"

const base = colorToHsb({ r: 1, g: 0, b: 0, a: 1 })
const shifted = hsbToColor({ ...base, h: base.h + 120 }) // { r: 0, g: 1, b: 0, a: 1 }
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(u,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`hsbToColor({ h: 120, s: 1, b: 1, a: 1 })`}),t(o,{children:`→`}),t(c,{variant:`inline`,children:`{ r: 0, g: 1, b: 0, a: 1 }`})]})})},p=[`Demo`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
import { colorToHsb, hsbToColor } from "figma-plugin-preact-ui"

const base = colorToHsb({ r: 1, g: 0, b: 0, a: 1 })
const shifted = hsbToColor({ ...base, h: base.h + 120 }) // { r: 0, g: 1, b: 0, a: 1 }
        \`
      }
    }
  },
  render: () => {
    return <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'hsbToColor({ h: 120, s: 1, b: 1, a: 1 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">{'{ r: 0, g: 1, b: 0, a: 1 }'}</Code>
        </Stack>
      </div>;
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Demo,p as __namedExportsOrder,d as default};