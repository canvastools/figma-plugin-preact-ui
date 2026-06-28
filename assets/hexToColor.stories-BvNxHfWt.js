import{u as o}from"./hooks.module-BOklADZz.js";import{h as n}from"./color-C4wFq2U9.js";import{S as s}from"./Stack-0j0r-CnM.js";import{C as e}from"./Code-BuVaaQbb.js";import{T as c}from"./Text-DWXnbeUo.js";import"./preact.module-BEcQExD3.js";import"./typedForwardRef-IM0ZXC4v.js";import"./compat.module-C06LZZ-F.js";const x={title:"Utils/hexToColor",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Utility function to convert a 6-digit hex string to `Color` type (r, g, b in 0–1)."}}},argTypes:{args:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"(hex: string, alpha: number = 1) => Color | undefined"}}}}},r={parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
import { hexToColor } from "figma-plugin-preact-ui"

const color = hexToColor("#ff0000") // { r: 1, g: 0, b: 0, a: 1 }
const colorTransparent = hexToColor("#ff0000", 0.5) // { r: 1, g: 0, b: 0, a: 0.5 }
        `}}},render:()=>o("div",{className:"sb-column sb-width-full",children:o(s,{direction:"row",spacing:"200",children:[o(e,{variant:"inline",children:'hexToColor("#ff0000")'}),o(c,{children:"→"}),o(e,{variant:"inline",children:"{ r: 1, g: 0, b: 0, a: 1 }"})]})})};var t,a,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
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
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const C=["Demo"];export{r as Demo,C as __namedExportsOrder,x as default};
