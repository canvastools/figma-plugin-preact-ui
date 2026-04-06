import{u as r}from"./hooks.module-BMDhD8C6.js";import{c as n}from"./color-C4wFq2U9.js";import{S as c}from"./Stack-B_XxPCNa.js";import{C as e}from"./Code-JpKP8OPU.js";import{T as s}from"./Text-DSWvyrh8.js";import"./preact.module-DhLccOoG.js";import"./typedForwardRef-BBQ-rOPo.js";import"./compat.module-BB5nNOI3.js";const f={title:"Utils/colorToHex",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Utility function to convert `Color` type (r, g, b in 0–1) to a 6-digit hex string."}}},argTypes:{args:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"(color: Color) => string",detail:`
// Types — all channels are 0–1

type Color = {
  r: number // 0–1
  g: number // 0–1
  b: number // 0–1
  a: number // 0–1
}`}}}}},o={parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
import { colorToHex } from "figma-plugin-preact-ui"

const hex = colorToHex({ r: 1, g: 0, b: 0, a: 1 }) // #FF0000
        `}}},render:()=>r("div",{className:"sb-column sb-width-full",children:r(c,{direction:"row",spacing:"200",children:[r(e,{variant:"inline",children:"colorToHex({ r: 1, g: 0, b: 0, a: 1 })"}),r(s,{children:"→"}),r(e,{variant:"inline",children:'"#FF0000"'})]})})};var t,a,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
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
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const T=["Demo"];export{o as Demo,T as __namedExportsOrder,f as default};
