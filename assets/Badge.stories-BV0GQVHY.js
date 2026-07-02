import{u as e}from"./hooks.module-BOklADZz.js";import{B as i}from"./Badge-7rMpPr2u.js";import{T as s}from"./Text-DWXnbeUo.js";import{I as x}from"./Icon-CUZDBV4V.js";import{l as v}from"./link-D0beuj1-.js";import"./preact.module-BEcQExD3.js";import"./typedForwardRef-IM0ZXC4v.js";import"./compat.module-C06LZZ-F.js";const B=[{intent:"neutral",intentModifier:"default"},{intent:"neutral",intentModifier:"secondary"},{intent:"neutral",intentModifier:"brand"},{intent:"neutral",intentModifier:"danger"},{intent:"neutral",intentModifier:"warning"},{intent:"neutral",intentModifier:"success"},{intent:"neutral",intentModifier:"component"},{intent:"neutral",intentModifier:"component-secondary"},{intent:"neutral",intentModifier:"slot"},{intent:"neutral",intentModifier:"slot-secondary"},{intent:"neutral-inverted",intentModifier:"default"},{intent:"brand",intentModifier:"default"},{intent:"brand",intentModifier:"secondary"},{intent:"danger",intentModifier:"default"},{intent:"warning",intentModifier:"default"},{intent:"success",intentModifier:"default"}],S=()=>B.map(({intent:n,intentModifier:t})=>e("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[e(s,{fullWidth:!0,children:[n,", ",t]}),e(i,{intent:n,intentModifier:t,children:"Badge"})]})),C={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Badge intent="neutral">{children}</Badge>

<Badge 
  intent="neutral"
  intentModifier="secondary"
>
  {children}
</Badge>
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:S()})},I=[{intent:"neutral",intentModifier:"default"},{intent:"neutral",intentModifier:"secondary"},{intent:"neutral",intentModifier:"brand"},{intent:"neutral",intentModifier:"danger"},{intent:"neutral",intentModifier:"warning"},{intent:"neutral",intentModifier:"success"},{intent:"neutral",intentModifier:"component"},{intent:"neutral",intentModifier:"component-secondary"},{intent:"neutral",intentModifier:"slot"},{intent:"neutral",intentModifier:"slot-secondary"},{intent:"neutral-inverted",intentModifier:"default"},{intent:"brand",intentModifier:"default"},{intent:"brand",intentModifier:"secondary"},{intent:"danger",intentModifier:"default"},{intent:"warning",intentModifier:"default"},{intent:"success",intentModifier:"default"}],N=()=>I.map(({intent:n,intentModifier:t})=>e("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[e(s,{fullWidth:!0,children:[n,", ",t]}),e(i,{intent:n,intentModifier:t,prefix:e(x,{glyph:v,size:16,variant:"downscaled",intent:n,intentModifier:t}),children:"Badge"})]})),V={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Badge
  intent="neutral"
  prefix={
    <Icon
      glyph={link}
      size={16}
      variant="downscaled"
      intent="neutral"
    />
  }
>
  {children}
</Badge>
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:N()})},P=[{intent:"neutral",intentModifier:"default"},{intent:"neutral",intentModifier:"secondary"},{intent:"neutral",intentModifier:"brand"},{intent:"neutral",intentModifier:"danger"},{intent:"neutral",intentModifier:"warning"},{intent:"neutral",intentModifier:"success"},{intent:"neutral",intentModifier:"component"},{intent:"neutral",intentModifier:"component-secondary"},{intent:"neutral",intentModifier:"slot"},{intent:"neutral",intentModifier:"slot-secondary"},{intent:"neutral-inverted",intentModifier:"default"},{intent:"brand",intentModifier:"default"},{intent:"brand",intentModifier:"secondary"},{intent:"danger",intentModifier:"default"},{intent:"warning",intentModifier:"default"},{intent:"success",intentModifier:"default"}],k=()=>P.map(({intent:n,intentModifier:t})=>e("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[e(s,{fullWidth:!0,children:[n,", ",t]}),e(i,{intent:n,intentModifier:t,suffix:e(x,{glyph:v,size:16,variant:"downscaled",intent:n,intentModifier:t}),children:"Badge"})]})),z={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Badge
  intent="neutral"
  suffix={
    <Icon
      glyph={link}
      size={16}
      variant="downscaled"
      intent="neutral"
    />
  }
>
  {children}
</Badge>
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:k()})},A={title:"Components/Badge",component:i,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},intent:{control:{type:"radio"},options:["neutral","neutral-inverted","brand","danger","warning","success"],defaultValue:{summary:"neutral"}},intentModifier:{control:{type:"radio"},options:["default","secondary","brand","danger","warning","success","component","component-secondary","slot","slot-secondary"],defaultValue:{summary:"default"}},prefix:{control:{disable:!0},description:"Element displayed before children.",table:{type:{summary:"preact.ComponentChildren"}}},suffix:{control:{disable:!0},description:"Element displayed after children.",table:{type:{summary:"preact.ComponentChildren"}}},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},r={tags:["!autodocs"],args:{id:void 0,className:"",intent:"neutral",intentModifier:"default",children:"Badge"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:"<Badge {...args}>{children}</Badge>"}}},render:n=>e("div",{className:"sb-column sb-width-full",children:e(i,{...n})})},a=C,o=V,d=z;var l,c,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    intent: 'neutral',
    intentModifier: 'default',
    children: 'Badge'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`<Badge {...args}>{children}</Badge>\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      {/* @ts-expect-error Storybook spread */}
      <Badge {...args} />
    </div>
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var f,m,p;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"IntentStory",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,b,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"PrefixStory",...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var M,h,w;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:"SuffixStory",...(w=(h=d.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const F=["Demo","Intent","Prefix","Suffix"];export{r as Demo,a as Intent,o as Prefix,d as Suffix,F as __namedExportsOrder,A as default};
