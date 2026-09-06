import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{l as r,s as i}from"./color-DxJU1NJr.js";import{n as a,t as o}from"./Text-Cr-51GRl.js";import{n as s,t as c}from"./Code-BrTMUJAY.js";import{n as l,t as u}from"./Stack-CRI7JcwR.js";var d,f,p;function m(){return(m=e((()=>{s(),l(),a(),r(),n(),d={title:`Utils/hexToColor`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"Utility function to convert a 6-digit hex string to `Color` type (r, g, b in 0–1)."}}},argTypes:{args:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`(hex: string, alpha: number = 1) => Color | undefined`}}}}},f={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
import { hexToColor } from "figma-plugin-preact-ui"

const color = hexToColor("#ff0000") // { r: 1, g: 0, b: 0, a: 1 }
const colorTransparent = hexToColor("#ff0000", 0.5) // { r: 1, g: 0, b: 0, a: 0.5 }
        `}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(u,{direction:`row`,spacing:`200`,children:[t(c,{variant:`inline`,children:`hexToColor("#ff0000")`}),t(o,{children:`→`}),t(c,{variant:`inline`,children:`{ r: 1, g: 0, b: 0, a: 1 }`})]})})},p=[`Demo`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Demo,p as __namedExportsOrder,d as default};