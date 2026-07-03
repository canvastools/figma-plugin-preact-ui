import{u as r}from"./hooks.module-DDuEt2mE.js";import{a as n}from"./color-C4wFq2U9.js";import{S as l}from"./Stack-Tj6YE1Ki.js";import{C as e}from"./Code-Albiw4F7.js";import{T as s}from"./Text-BooB5DEX.js";import"./preact.module-D68vdB8i.js";import"./typedForwardRef-eUJP59ez.js";import"./compat.module-AmaJGl25.js";const b={title:"Utils/colorToHexAlpha",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Utility function to convert `Color` type (r, g, b, a all in 0–1) to an 8-digit hex string (#RRGGBBAA)."}}},argTypes:{args:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"(color: Color) => string",detail:`
// Types — all channels are 0–1

type Color = {
  r: number // 0–1
  g: number // 0–1
  b: number // 0–1
  a: number // 0–1
}`}}}}},o={parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
import { colorToHexAlpha } from "figma-plugin-preact-ui"

const hex = colorToHexAlpha({ r: 1, g: 0, b: 0, a: 1 }) // #FF0000FF
const hexTransparent = colorToHexAlpha({ r: 1, g: 0, b: 0, a: 0.5 }) // #FF000080
        `}}},render:()=>r("div",{className:"sb-column sb-width-full",children:r(l,{direction:"row",spacing:"200",children:[r(e,{variant:"inline",children:"colorToHexAlpha({ r: 1, g: 0, b: 0, a: 0.5 })"}),r(s,{children:"→"}),r(e,{variant:"inline",children:'"#FF000080"'})]})})};var a,t,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
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
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const T=["Demo"];export{o as Demo,T as __namedExportsOrder,b as default};
