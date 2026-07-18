import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-XYsEgyrh.js";import{w as r,x as i}from"./utils-DKF8LkKs.js";import{t as a}from"./Text-Dx8we2OT.js";import{m as o,t as s}from"./src-BW54aR7x.js";import{t as c}from"./Code-C5fdPN_x.js";var l,u,d;e((()=>{s(),r(),n(),l={title:`Utils/colorToRgba`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"Utility function to convert `Color` type (r, g, b, a in 0–1) to RGBA (r, g, b in 0–255, a in 0–1)."}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(color: Color) => Rgba`,detail:`
// Types — all channels are 0–1

type Color = {
  r: number
  g: number
  b: number
  a: number
}`}}}}},u={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { colorToRgba } from "figma-plugin-preact-ui"

const rgba = colorToRgba({ r: 1, g: 0, b: 0, a: 1 }) // { r: 255, g: 0, b: 0, a: 1 }
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(o,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`colorToRgba({ r: 1, g: 0, b: 0, a: 1 })`}),t(a,{children:`→`}),t(c,{variant:`inline`,children:`{ r: 255, g: 0, b: 0, a: 1 }`})]})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Demo`]}))();export{u as Demo,d as __namedExportsOrder,l as default};