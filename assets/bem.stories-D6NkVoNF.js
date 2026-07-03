import{u as e}from"./hooks.module-DDuEt2mE.js";import{S as t}from"./Stack-Tj6YE1Ki.js";import{C as r}from"./Code-Albiw4F7.js";import{T as s}from"./Text-BooB5DEX.js";import{b as v}from"./typedForwardRef-eUJP59ez.js";import"./preact.module-D68vdB8i.js";import"./compat.module-AmaJGl25.js";const k={parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
import { bem } from "figma-plugin-preact-ui"

const classNameBlock = bem("Block") // Block
const classNameElement = bem("Block", "element") // Block__element

<div className={classNameBlock}>
  <div className={classNameElement}> 
    {children}
  </div>
</div>
        `}}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(t,{direction:"row",spacing:"200",children:[e(r,{variant:"inline",children:'bem("Block", "element")'}),e(s,{children:"→"}),e(r,{variant:"inline",children:'"Block__element"'})]})})},b={parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
import { bem } from "figma-plugin-preact-ui"

const classNameBlock = bem("Block") // Block
const classNameElementWithModifiers = bem("Block", "element", { modifier1: "value", modifier2: true }) // Block__element_modifier1-value Block__element_modifier2

<div className={classNameBlock}>
  <div className={classNameElementWithModifiers}>
    {children}
  </div>
</div>
        `}}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(t,{direction:"row",spacing:"200",children:[e(r,{variant:"inline",children:'bem("Block", "element", { modifier1: "value", modifier2: true })'}),e(s,{children:"→"}),e(r,{variant:"inline",children:'"Block__element_modifier1-value Block__element_modifier2"'})]})})},x={title:"Utils/bem",component:v,tags:["autodocs"],parameters:{docs:{description:{component:"Utility function to generate BEM class names."}}},argTypes:{args:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"(...) => string",detail:`
block: string // required
element: string
mods: Record<string, string | boolean>
`}}}}},o={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
import { bem } from "figma-plugin-preact-ui"

const className = bem("Block", "element") // Block__element

<div className={className}>
        `}}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(t,{direction:"row",spacing:"200",children:[e(r,{variant:"inline",children:'bem("Block", "element")'}),e(s,{children:"→"}),e(r,{variant:"inline",children:'"Block__element"'})]})})},a=k,i=b;var l,c,n;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
import { bem } from "figma-plugin-preact-ui"

const className = bem("Block", "element") // Block__element

<div className={className}>
        \`
      }
    }
  },
  render: () => {
    return <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'bem("Block", "element")'}</Code>
          <Text>→</Text>
          <Code variant="inline">"Block__element"</Code>
        </Stack>
      </div>;
  }
}`,...(n=(c=o.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"ElementStory",...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"ModifiersStory",...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const y=["Demo","Element","Modifiers"];export{o as Demo,a as Element,i as Modifiers,y as __namedExportsOrder,x as default};
