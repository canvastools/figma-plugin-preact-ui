import{u as r}from"./hooks.module-6Sbq__eq.js";import{r as n}from"./color-C4wFq2U9.js";import{S as s}from"./Stack-FIJoWfyG.js";import{C as e}from"./Code-BalpCq42.js";import{T as l}from"./Text-BbQ_b1VF.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";const f={title:"Utils/rgbaToColor",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Utility function to convert RGBA (r, g, b in 0–255, a in 0–1) to `Color` type (r, g, b, a in 0–1)."}}},argTypes:{args:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"(rgba: Rgba) => Color",detail:`
// Types — all channels are 0–255

type Rgba = {
  r: number
  g: number
  b: number
  a: number
}`}}}}},o={parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
import { rgbaToColor } from "figma-plugin-preact-ui"

const color = rgbaToColor({ r: 255, g: 0, b: 0, a: 1 }) // { r: 1, g: 0, b: 0, a: 1 }
        `}}},render:()=>r("div",{className:"sb-column sb-width-full",children:r(s,{direction:"row",spacing:"200",children:[r(e,{variant:"inline",children:"rgbaToColor({ r: 255, g: 0, b: 0, a: 1 })"}),r(l,{children:"→"}),r(e,{variant:"inline",children:"{ r: 1, g: 0, b: 0, a: 1 }"})]})})};var a,t,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
import { rgbaToColor } from "figma-plugin-preact-ui"

const color = rgbaToColor({ r: 255, g: 0, b: 0, a: 1 }) // { r: 1, g: 0, b: 0, a: 1 }
        \`
      }
    }
  },
  render: () => {
    return <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'rgbaToColor({ r: 255, g: 0, b: 0, a: 1 })'}</Code>
          <Text>→</Text>
          <Code variant="inline">{'{ r: 1, g: 0, b: 0, a: 1 }'}</Code>
        </Stack>
      </div>;
  }
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const T=["Demo"];export{o as Demo,T as __namedExportsOrder,f as default};
