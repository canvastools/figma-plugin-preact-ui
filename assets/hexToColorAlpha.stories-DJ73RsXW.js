import{u as o}from"./hooks.module-BMDhD8C6.js";import{d as n}from"./color-C4wFq2U9.js";import{S as l}from"./Stack-B_XxPCNa.js";import{C as e}from"./Code-JpKP8OPU.js";import{T as s}from"./Text-DSWvyrh8.js";import"./preact.module-DhLccOoG.js";import"./typedForwardRef-BBQ-rOPo.js";import"./compat.module-BB5nNOI3.js";const x={title:"Utils/hexAlphaToColor",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Utility function to convert a 6- or 8-digit hex string to `Color` type (all channels in 0–1)."}}},argTypes:{args:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"(hex: string) => Color | undefined"}}}}},r={parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
import { hexAlphaToColor } from "figma-plugin-preact-ui"

const color = hexAlphaToColor("#ff0000ff") // { r: 1, g: 0, b: 0, a: 1 }
const colorTransparent = hexAlphaToColor("#ff000080") // { r: 1, g: 0, b: 0, a: 0.5 }
        `}}},render:()=>o("div",{className:"sb-column sb-width-full",children:o(l,{direction:"row",spacing:"200",children:[o(e,{variant:"inline",children:'hexAlphaToColor("#ff000080")'}),o(s,{children:"→"}),o(e,{variant:"inline",children:"{ r: 1, g: 0, b: 0, a: 0.5 }"})]})})};var a,t,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
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
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const C=["Demo"];export{r as Demo,C as __namedExportsOrder,x as default};
