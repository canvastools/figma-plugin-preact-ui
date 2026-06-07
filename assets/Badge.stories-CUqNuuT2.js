import{u as e}from"./hooks.module-6Sbq__eq.js";import{B as r}from"./Badge-158-ytUK.js";import{T as o}from"./Text-BbQ_b1VF.js";import{I as x}from"./Icon-DqIclgYW.js";import{l as v}from"./link-DL1y3n50.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";const B=[{intent:"neutral",intentModifier:"default"},{intent:"neutral",intentModifier:"secondary"},{intent:"neutral",intentModifier:"brand"},{intent:"neutral",intentModifier:"danger"},{intent:"neutral",intentModifier:"warning"},{intent:"neutral",intentModifier:"success"},{intent:"neutral-inverted",intentModifier:"default"},{intent:"brand",intentModifier:"default"},{intent:"brand",intentModifier:"secondary"},{intent:"danger",intentModifier:"default"},{intent:"warning",intentModifier:"default"},{intent:"success",intentModifier:"default"}],S=()=>B.map(({intent:t,intentModifier:n})=>e("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[e(o,{fullWidth:!0,children:[t,", ",n]}),e(r,{intent:t,intentModifier:n,children:"Badge"})]})),C={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Badge intent="neutral">{children}</Badge>

<Badge 
  intent="neutral"
  intentModifier="secondary"
>
  {children}
</Badge>
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:S()})},I=[{intent:"neutral",intentModifier:"default"},{intent:"neutral",intentModifier:"secondary"},{intent:"neutral",intentModifier:"brand"},{intent:"neutral",intentModifier:"danger"},{intent:"neutral",intentModifier:"warning"},{intent:"neutral",intentModifier:"success"},{intent:"neutral-inverted",intentModifier:"default"},{intent:"brand",intentModifier:"default"},{intent:"brand",intentModifier:"secondary"},{intent:"danger",intentModifier:"default"},{intent:"warning",intentModifier:"default"},{intent:"success",intentModifier:"default"}],N=()=>I.map(({intent:t,intentModifier:n})=>e("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[e(o,{fullWidth:!0,children:[t,", ",n]}),e(r,{intent:t,intentModifier:n,prefix:e(x,{glyph:v,size:16,variant:"downscaled",intent:t,intentModifier:n}),children:"Badge"})]})),V={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:N()})},P=[{intent:"neutral",intentModifier:"default"},{intent:"neutral",intentModifier:"secondary"},{intent:"neutral",intentModifier:"brand"},{intent:"neutral",intentModifier:"danger"},{intent:"neutral",intentModifier:"warning"},{intent:"neutral",intentModifier:"success"},{intent:"neutral-inverted",intentModifier:"default"},{intent:"brand",intentModifier:"default"},{intent:"brand",intentModifier:"secondary"},{intent:"danger",intentModifier:"default"},{intent:"warning",intentModifier:"default"},{intent:"success",intentModifier:"default"}],k=()=>P.map(({intent:t,intentModifier:n})=>e("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[e(o,{fullWidth:!0,children:[t,", ",n]}),e(r,{intent:t,intentModifier:n,suffix:e(x,{glyph:v,size:16,variant:"downscaled",intent:t,intentModifier:n}),children:"Badge"})]})),z={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:k()})},A={title:"Components/Badge",component:r,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},intent:{control:{type:"radio"},options:["neutral","neutral-inverted","brand","danger","warning","success"],defaultValue:{summary:"neutral"}},intentModifier:{control:{type:"radio"},options:["default","secondary","brand","danger","warning","success"],defaultValue:{summary:"default"}},prefix:{control:{disable:!0},description:"Element displayed before children.",table:{type:{summary:"preact.ComponentChildren"}}},suffix:{control:{disable:!0},description:"Element displayed after children.",table:{type:{summary:"preact.ComponentChildren"}}},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},i={tags:["!autodocs"],args:{id:void 0,className:"",intent:"neutral",intentModifier:"default",children:"Badge"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:"<Badge {...args}>{children}</Badge>"}}},render:t=>e("div",{className:"sb-column sb-width-full",children:e(r,{...t})})},a=C,d=V,s=z;var l,c,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var f,m,p;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"IntentStory",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,b,h;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:"PrefixStory",...(h=(b=d.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,M,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"SuffixStory",...(w=(M=s.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};const F=["Demo","Intent","Prefix","Suffix"];export{i as Demo,a as Intent,d as Prefix,s as Suffix,F as __namedExportsOrder,A as default};
