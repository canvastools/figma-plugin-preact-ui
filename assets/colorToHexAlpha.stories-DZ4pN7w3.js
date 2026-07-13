import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-B_u_rUE0.js";import{m as r,u as i}from"./utils-k8SxZ3Xg.js";import{t as a}from"./Text-Bf8YN4P6.js";import{m as o,t as s}from"./src-nP44HpfJ.js";import{t as c}from"./Code-DSUzxDG3.js";var l,u,d;e((()=>{s(),r(),n(),l={title:`Utils/colorToHexAlpha`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"Utility function to convert `Color` type (r, g, b, a all in 0–1) to an 8-digit hex string (#RRGGBBAA)."}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(color: Color) => string`,detail:`
// Types — all channels are 0–1

type Color = {
  r: number // 0–1
  g: number // 0–1
  b: number // 0–1
  a: number // 0–1
}`}}}}},u={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { colorToHexAlpha } from "figma-plugin-preact-ui"

const hex = colorToHexAlpha({ r: 1, g: 0, b: 0, a: 1 }) // #FF0000FF
const hexTransparent = colorToHexAlpha({ r: 1, g: 0, b: 0, a: 0.5 }) // #FF000080
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(o,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`colorToHexAlpha({ r: 1, g: 0, b: 0, a: 0.5 })`}),t(a,{children:`→`}),t(c,{variant:`inline`,children:`"#FF000080"`})]})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Demo`]}))();export{u as Demo,d as __namedExportsOrder,l as default};