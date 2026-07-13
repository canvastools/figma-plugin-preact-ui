import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-B_u_rUE0.js";import{f as r,m as i}from"./utils-k8SxZ3Xg.js";import{t as a}from"./Text-Bf8YN4P6.js";import{m as o,t as s}from"./src-nP44HpfJ.js";import{t as c}from"./Code-DSUzxDG3.js";var l,u,d;e((()=>{s(),i(),n(),l={title:`Utils/hexAlphaToColor`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"Utility function to convert a 6- or 8-digit hex string to `Color` type (all channels in 0–1)."}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(hex: string) => Color | undefined`}}}}},u={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { hexAlphaToColor } from "figma-plugin-preact-ui"

const color = hexAlphaToColor("#ff0000ff") // { r: 1, g: 0, b: 0, a: 1 }
const colorTransparent = hexAlphaToColor("#ff000080") // { r: 1, g: 0, b: 0, a: 0.5 }
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(o,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`hexAlphaToColor("#ff000080")`}),t(a,{children:`→`}),t(c,{variant:`inline`,children:`{ r: 1, g: 0, b: 0, a: 0.5 }`})]})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
import { hexAlphaToColor } from "figma-plugin-preact-ui"

const color = hexAlphaToColor("#ff0000ff") // { r: 1, g: 0, b: 0, a: 1 }
const colorTransparent = hexAlphaToColor("#ff000080") // { r: 1, g: 0, b: 0, a: 0.5 }
        \`
      }
    }
  },
  render: () => {
    return <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'hexAlphaToColor("#ff000080")'}</Code>
          <Text>→</Text>
          <Code variant="inline">{'{ r: 1, g: 0, b: 0, a: 0.5 }'}</Code>
        </Stack>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d=[`Demo`]}))();export{u as Demo,d as __namedExportsOrder,l as default};