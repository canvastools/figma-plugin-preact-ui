import{u as r}from"./hooks.module-DDuEt2mE.js";import{b as n}from"./color-C4wFq2U9.js";import{S as c}from"./Stack-Tj6YE1Ki.js";import{C as e}from"./Code-Albiw4F7.js";import{T as s}from"./Text-BooB5DEX.js";import"./preact.module-D68vdB8i.js";import"./typedForwardRef-eUJP59ez.js";import"./compat.module-AmaJGl25.js";const T={title:"Utils/colorToRgba",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Utility function to convert `Color` type (r, g, b, a in 0–1) to RGBA (r, g, b in 0–255, a in 0–1)."}}},argTypes:{args:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"(color: Color) => Rgba",detail:`
// Types — all channels are 0–1

type Color = {
  r: number
  g: number
  b: number
  a: number
}`}}}}},o={parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
import { colorToRgba } from "figma-plugin-preact-ui"

const rgba = colorToRgba({ r: 1, g: 0, b: 0, a: 1 }) // { r: 255, g: 0, b: 0, a: 1 }
        `}}},render:()=>r("div",{className:"sb-column sb-width-full",children:r(c,{direction:"row",spacing:"200",children:[r(e,{variant:"inline",children:"colorToRgba({ r: 1, g: 0, b: 0, a: 1 })"}),r(s,{children:"→"}),r(e,{variant:"inline",children:"{ r: 255, g: 0, b: 0, a: 1 }"})]})})};var a,t,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
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
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const v=["Demo"];export{o as Demo,v as __namedExportsOrder,T as default};
