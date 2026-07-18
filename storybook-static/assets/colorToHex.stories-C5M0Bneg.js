import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-XYsEgyrh.js";import{w as r,y as i}from"./utils-DKF8LkKs.js";import{t as a}from"./Text-Dx8we2OT.js";import{m as o,t as s}from"./src-fsSRAyCS.js";import{t as c}from"./Code-C5fdPN_x.js";var l,u,d;e((()=>{s(),r(),n(),l={title:`Utils/colorToHex`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"Utility function to convert `Color` type (r, g, b in 0–1) to a 6-digit hex string."}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(color: Color) => string`,detail:`
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