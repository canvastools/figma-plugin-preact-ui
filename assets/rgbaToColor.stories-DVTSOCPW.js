import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-XYsEgyrh.js";import{T as r,w as i}from"./utils-DKF8LkKs.js";import{t as a}from"./Text-Dx8we2OT.js";import{m as o,t as s}from"./src-BW54aR7x.js";import{t as c}from"./Code-C5fdPN_x.js";var l,u,d;e((()=>{s(),i(),n(),l={title:`Utils/rgbaToColor`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"Utility function to convert RGBA (r, g, b in 0–255, a in 0–1) to `Color` type (r, g, b, a in 0–1)."}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(rgba: Rgba) => Color`,detail:`
// Types — all channels are 0–255

type Rgba = {
  r: number
  g: number
  b: number
  a: number
}`}}}}},u={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { rgbaToColor } from "figma-plugin-preact-ui"

const color = rgbaToColor({ r: 255, g: 0, b: 0, a: 1 }) // { r: 1, g: 0, b: 0, a: 1 }
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(o,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`rgbaToColor({ r: 255, g: 0, b: 0, a: 1 })`}),t(a,{children:`→`}),t(c,{variant:`inline`,children:`{ r: 1, g: 0, b: 0, a: 1 }`})]})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
import { rgbaToColor } from "figma-plugin-preact-ui"

const color = rgbaToColor({ r: 255, g: 0, b: 0, a: 1 }) // { r: 1, g: 0, b: 0, a: 1 }
        \`
      }
    }
  },
  render: () => {
    return <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'rgbaToColor({ r: 255, g: 0, b: 0, a: 1 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">{'{ r: 1, g: 0, b: 0, a: 1 }'}</Code>
        </Stack>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d=[`Demo`]}))();export{u as Demo,d as __namedExportsOrder,l as default};