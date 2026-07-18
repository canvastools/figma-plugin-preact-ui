import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-XYsEgyrh.js";import{C as r,w as i}from"./utils-DKF8LkKs.js";import{t as a}from"./Text-Dx8we2OT.js";import{m as o,t as s}from"./src-BW54aR7x.js";import{t as c}from"./Code-C5fdPN_x.js";var l,u,d;e((()=>{s(),i(),n(),l={title:`Utils/hexToColor`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"Utility function to convert a 6-digit hex string to `Color` type (r, g, b in 0–1)."}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(hex: string, alpha: number = 1) => Color | undefined`}}}}},u={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { hexToColor } from "figma-plugin-preact-ui"

const color = hexToColor("#ff0000") // { r: 1, g: 0, b: 0, a: 1 }
const colorTransparent = hexToColor("#ff0000", 0.5) // { r: 1, g: 0, b: 0, a: 0.5 }
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(o,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`hexToColor("#ff0000")`}),t(a,{children:`→`}),t(c,{variant:`inline`,children:`{ r: 1, g: 0, b: 0, a: 1 }`})]})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
import { hexToColor } from "figma-plugin-preact-ui"

const color = hexToColor("#ff0000") // { r: 1, g: 0, b: 0, a: 1 }
const colorTransparent = hexToColor("#ff0000", 0.5) // { r: 1, g: 0, b: 0, a: 0.5 }
        \`
      }
    }
  },
  render: () => {
    return <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'hexToColor("#ff0000")'}</Code>
          <Text>→</Text>
          <Code variant="inline">{'{ r: 1, g: 0, b: 0, a: 1 }'}</Code>
        </Stack>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d=[`Demo`]}))();export{u as Demo,d as __namedExportsOrder,l as default};