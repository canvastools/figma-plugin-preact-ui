import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-B_u_rUE0.js";import{l as r,m as i}from"./utils-k8SxZ3Xg.js";import{t as a}from"./Text-Bf8YN4P6.js";import{m as o,t as s}from"./src-Ch66eTMx.js";import{t as c}from"./Code-DSUzxDG3.js";var l,u,d;e((()=>{s(),i(),n(),l={title:`Utils/colorToHex`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"Utility function to convert `Color` type (r, g, b in 0–1) to a 6-digit hex string."}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(color: Color) => string`,detail:`
// Types — all channels are 0–1

type Color = {
  r: number // 0–1
  g: number // 0–1
  b: number // 0–1
  a: number // 0–1
}`}}}}},u={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { colorToHex } from "figma-plugin-preact-ui"

const hex = colorToHex({ r: 1, g: 0, b: 0, a: 1 }) // #FF0000
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(o,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`colorToHex({ r: 1, g: 0, b: 0, a: 1 })`}),t(a,{children:`→`}),t(c,{variant:`inline`,children:`"#FF0000"`})]})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Demo`]}))();export{u as Demo,d as __namedExportsOrder,l as default};