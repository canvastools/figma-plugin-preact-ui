import{u as e}from"./hooks.module-CGIakYml.js";import{S as t}from"./Section-CXCQgqof.js";import{T as a}from"./Text-9aeIDhQ2.js";import{S as h}from"./Stack-k8IcfDhK.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";const b={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Section variant="default">
  {children}
</Section>

<Section variant="stacked">
  {children}
</Section>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-40",children:[e(t,{variant:"default",className:"sb-container",children:e(a,{children:"Default Section"})}),e(h,{direction:"column",children:[e(t,{variant:"stacked",className:"sb-container",children:e(a,{children:"Stacked Section"})}),e(t,{variant:"stacked",className:"sb-container",children:e(a,{children:"Stacked Section"})}),e(t,{variant:"stacked",className:"sb-container",children:e(a,{children:"Stacked Section"})})]})]})},f={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Section padding={{ top: 400 }}>
  {children}
</Section>
`}}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(t,{className:"sb-container",padding:{top:400},children:e(a,{children:"Padding Top: 400"})})})},T={title:"Layout/Section",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that creates a typical section layout with built-in padding."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["default","stacked"],defaultValue:{summary:"default"}},padding:{control:{type:"object"},table:{type:{summary:"object",detail:`
padding?: {
  top?: SectionPadding
  right?: SectionPadding
  bottom?: SectionPadding
  left?: SectionPadding
}

// Types

type SectionPadding = keyof typeof spacing.variables // string | number
`}}},children:{control:{control:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},r={tags:["!autodocs"],args:{id:void 0,className:"sb-container",variant:"default",padding:{},children:"Lorem ipsum dolor sit amet."},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Section {...args}>{children}</Section>
`}}},render:c=>e("div",{className:"sb-column sb-width-fullk",children:e(t,{...c,children:e(a,{children:c.children})})})},n=b,o=f;var i,s,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: 'sb-container',
    variant: 'default',
    padding: {},
    children: 'Lorem ipsum dolor sit amet.'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<Section {...args}>{children}</Section>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-fullk">
      <Section {...args}>
        {/* @ts-expect-error Storybook spread */}
        <Text>{args.children}</Text>
      </Section>
    </div>
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,p,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"StackedStory",...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"PaddingStory",...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const V=["Demo","Stacked","Padding"];export{r as Demo,o as Padding,n as Stacked,V as __namedExportsOrder,T as default};
