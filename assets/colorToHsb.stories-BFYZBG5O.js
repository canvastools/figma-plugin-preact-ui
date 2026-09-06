import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{i as r,l as i}from"./color-DxJU1NJr.js";import{n as a,t as o}from"./Text-Cr-51GRl.js";import{n as s,t as c}from"./Code-BrTMUJAY.js";import{n as l,t as u}from"./Stack-CRI7JcwR.js";var d,f,p;function m(){return(m=e((()=>{s(),l(),a(),i(),n(),d={title:`Utils/colorToHsb`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"Utility function to convert `Color` type (r, g, b, a in 0–1) to HSB (h in 0–360, s and b in 0–1, a in 0–1). Use it with `hsbToColor` to shift a color — hue, saturation and brightness move independently, which they do not in RGB. A gray has no hue, so it comes back as `h: 0`."}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(color: Color) => Hsb`,detail:`
// Types

type Color = {
  r: number // 0–1
  g: number // 0–1
  b: number // 0–1
  a: number // 0–1
}

type Hsb = {
  h: number // 0–360, degrees
  s: number // 0–1
  b: number // 0–1, brightness
  a: number // 0–1
}`}}}}},f={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { colorToHsb } from "figma-plugin-preact-ui"

const hsb = colorToHsb({ r: 1, g: 0, b: 0, a: 1 }) // { h: 0, s: 1, b: 1, a: 1 }
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(u,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`colorToHsb({ r: 1, g: 0, b: 0, a: 1 })`}),t(o,{children:`→`}),t(c,{variant:`inline`,children:`{ h: 0, s: 1, b: 1, a: 1 }`})]})})},p=[`Demo`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
import { colorToHsb } from "figma-plugin-preact-ui"

const hsb = colorToHsb({ r: 1, g: 0, b: 0, a: 1 }) // { h: 0, s: 1, b: 1, a: 1 }
        \`
      }
    }
  },
  render: () => {
    return <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'colorToHsb({ r: 1, g: 0, b: 0, a: 1 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">{'{ h: 0, s: 1, b: 1, a: 1 }'}</Code>
        </Stack>
      </div>;
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Demo,p as __namedExportsOrder,d as default};