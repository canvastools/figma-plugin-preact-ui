import{u as t}from"./hooks.module-CGIakYml.js";import{f as G}from"./index-BWINGljf.js";import{B as r}from"./Button-2yuwlxjW.js";import{T as o}from"./Text-9aeIDhQ2.js";import{S as U}from"./Stack-k8IcfDhK.js";import{I as g}from"./Icon-DYEerEJN.js";import{l as h}from"./link-BEZi4mus.js";import{a as _}from"./TooltipContext-DJAjWLpJ.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./TooltipContainer-BVa1RtHA.js";const F=[{intent:"neutral",intentModifier:"default",ghost:!1},{intent:"neutral",intentModifier:"default",ghost:!0},{intent:"neutral",intentModifier:"brand",ghost:!1},{intent:"neutral",intentModifier:"brand",ghost:!0},{intent:"neutral",intentModifier:"danger",ghost:!1},{intent:"neutral",intentModifier:"danger",ghost:!0},{intent:"neutral-inverted",intentModifier:"default",ghost:!1},{intent:"brand",intentModifier:"default",ghost:!1},{intent:"danger",intentModifier:"default",ghost:!1},{intent:"success",intentModifier:"default",ghost:!1}],L=()=>F.map(({intent:e,intentModifier:n,ghost:i})=>t("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[t(o,{fullWidth:!0,children:[e,", ",n,i?", ghost":""]}),t(r,{intent:e,intentModifier:n,ghost:i,children:"Button"})]})),O={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Button intent="neutral">{children}</Button>

<Button 
  intent="neutral"
  intentModifier="secondary"
>
  {children}
</Button>

<Button 
  intent="brand"
  ghost
>
  {children}
</Button>
`}}},render:()=>t("div",{className:"sb-column sb-width-420 sb-gap-16",children:L()})},j=[{intent:"neutral",intentModifier:"default",ghost:!1},{intent:"neutral",intentModifier:"default",ghost:!0},{intent:"neutral",intentModifier:"brand",ghost:!1},{intent:"neutral",intentModifier:"brand",ghost:!0},{intent:"neutral",intentModifier:"danger",ghost:!1},{intent:"neutral",intentModifier:"danger",ghost:!0},{intent:"neutral-inverted",intentModifier:"default",ghost:!1},{intent:"brand",intentModifier:"default",ghost:!1},{intent:"danger",intentModifier:"default",ghost:!1},{intent:"success",intentModifier:"default",ghost:!1}],q=()=>j.map(({intent:e,intentModifier:n,ghost:i})=>t("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[t(o,{fullWidth:!0,children:[e,", ",n,i?", ghost":""]}),t(r,{intent:e,intentModifier:n,size:"medium",children:"Medium"}),t(r,{intent:e,intentModifier:n,size:"large",children:"Large"})]})),A={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Button size="medium">{children}</Button>

<Button size="large">{children}</Button>
`}}},render:()=>t("div",{className:"sb-column sb-width-420 sb-gap-16",children:q()})},H=[{intent:"neutral",intentModifier:"default",ghost:!1},{intent:"neutral",intentModifier:"default",ghost:!0},{intent:"neutral",intentModifier:"brand",ghost:!1},{intent:"neutral",intentModifier:"brand",ghost:!0},{intent:"neutral",intentModifier:"danger",ghost:!1},{intent:"neutral",intentModifier:"danger",ghost:!0},{intent:"neutral-inverted",intentModifier:"default",ghost:!1},{intent:"brand",intentModifier:"default",ghost:!1},{intent:"danger",intentModifier:"default",ghost:!1},{intent:"success",intentModifier:"default",ghost:!1}],J=()=>H.map(({intent:e,intentModifier:n,ghost:i})=>t("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[t(o,{fullWidth:!0,children:[e,", ",n,i?", ghost":""]}),t(r,{intent:e,intentModifier:n,ghost:i,disabled:!0,children:"Button"}),t(r,{intent:e,intentModifier:n,ghost:i,disabled:!0,size:"large",children:"Button"})]})),K={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Button disabled>{children}</Button>
`}}},render:()=>t("div",{className:"sb-column sb-width-420 sb-gap-16",children:J()})},Q={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Button widthFull>{children}</Button>
`}}},render:()=>t("div",{className:"sb-column sb-width-full",children:t(U,{spacing:400,fullWidth:!0,children:[t(r,{intent:"neutral",intentModifier:"brand",fullWidth:!0,ghost:!0,children:"Neutral Brand Ghost"}),t(r,{intent:"neutral",intentModifier:"brand",fullWidth:!0,children:"Neutral Brand"}),t(r,{intent:"brand",fullWidth:!0,children:"Brand"}),t(r,{intent:"neutral",intentModifier:"danger",size:"large",fullWidth:!0,ghost:!0,children:"Neutral Danger Ghost"}),t(r,{intent:"neutral",intentModifier:"danger",size:"large",fullWidth:!0,children:"Neutral Danger"}),t(r,{intent:"danger",size:"large",fullWidth:!0,children:"Danger"})]})})},R=[{intent:"neutral",intentModifier:"default",ghost:!1},{intent:"neutral",intentModifier:"default",ghost:!0},{intent:"neutral",intentModifier:"brand",ghost:!1},{intent:"neutral",intentModifier:"brand",ghost:!0},{intent:"neutral",intentModifier:"danger",ghost:!1},{intent:"neutral",intentModifier:"danger",ghost:!0},{intent:"neutral-inverted",intentModifier:"default",ghost:!1},{intent:"brand",intentModifier:"default",ghost:!1},{intent:"danger",intentModifier:"default",ghost:!1},{intent:"success",intentModifier:"default",ghost:!1}],X=()=>R.map(({intent:e,intentModifier:n,ghost:i})=>t("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[t(o,{fullWidth:!0,children:[e,", ",n,i?", ghost":""]}),t(r,{intent:e,intentModifier:n,ghost:i,prefix:t(g,{glyph:h,intent:e,intentModifier:n}),children:"Button"}),t(r,{intent:e,intentModifier:n,ghost:i,size:"large",prefix:t(g,{glyph:h,intent:e,intentModifier:n}),children:"Button"})]})),Y={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Button 
  intent="neutral"
  prefix={
    <Icon 
      glyph={link}
      intent="neutral"
    />
  }
>
  {children}
</Button>
`}}},render:()=>t("div",{className:"sb-column sb-width-420 sb-gap-16",children:X()})},Z=[{intent:"neutral",intentModifier:"default",ghost:!1},{intent:"neutral",intentModifier:"default",ghost:!0},{intent:"neutral",intentModifier:"brand",ghost:!1},{intent:"neutral",intentModifier:"brand",ghost:!0},{intent:"neutral",intentModifier:"danger",ghost:!1},{intent:"neutral",intentModifier:"danger",ghost:!0},{intent:"neutral-inverted",intentModifier:"default",ghost:!1},{intent:"brand",intentModifier:"default",ghost:!1},{intent:"danger",intentModifier:"default",ghost:!1},{intent:"success",intentModifier:"default",ghost:!1}],$=()=>Z.map(({intent:e,intentModifier:n,ghost:i})=>t("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[t(o,{fullWidth:!0,children:[e,", ",n,i?", ghost":""]}),t(r,{intent:e,intentModifier:n,ghost:i,suffix:t(g,{glyph:h,intent:e,intentModifier:n}),children:"Button"}),t(r,{intent:e,intentModifier:n,ghost:i,size:"large",suffix:t(g,{glyph:h,intent:e,intentModifier:n}),children:"Button"})]})),tt={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Button 
  intent="neutral"
  suffix={
    <Icon 
      glyph={link}
      intent="neutral"
    />
  }
>
  {children}
</Button>
`}}},render:()=>t("div",{className:"sb-column sb-width-420 sb-gap-16",children:$()})},gt={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},intent:{control:{type:"radio"},options:["neutral","neutral-inverted","brand","danger","success"],defaultValue:{summary:"neutral"}},intentModifier:{control:{type:"radio"},options:["default","secondary","brand","danger","success"],defaultValue:{summary:"default"}},ghost:{control:{type:"boolean"},defaultValue:{summary:!1}},size:{control:{type:"radio"},options:["medium","large"],defaultValue:{summary:"medium"}},grouped:{control:{type:"radio"},options:[void 0,"first","last","middle"]},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},fullWidth:{control:{type:"boolean"},defaultValue:{summary:!1}},tooltip:{control:{type:"text"},description:"Tooltip content.",table:{type:{summary:"preact.ComponentChildren"}}},prefix:{control:{disable:!0},description:"Element displayed before children.",table:{type:{summary:"preact.ComponentChildren"}}},suffix:{control:{disable:!0},description:"Element displayed after children.",table:{type:{summary:"preact.ComponentChildren"}}},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},onClick:{table:{type:{summary:"(args) => void",detail:`
args: { 
  event: MouseEvent
}
          `}}}}},a={tags:["!autodocs"],args:{id:void 0,className:"",intent:"neutral",intentModifier:"default",ghost:!1,size:"medium",grouped:void 0,disabled:!1,fullWidth:!1,tooltip:"Button tooltip",children:"Button",onClick:G()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Button {...args}>{children}</Button>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Button {...args}>{children}</Button>
</TooltipContext>
`}}},render:e=>t("div",{className:"sb-column sb-width-full",children:t(_,{children:t(r,{...e,children:e.children})})})},s=O,l=A,d=K,u=Q,c=Y,f=tt;var p,m,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    intent: 'neutral',
    intentModifier: 'default',
    ghost: false,
    size: 'medium',
    grouped: undefined,
    disabled: false,
    fullWidth: false,
    tooltip: 'Button tooltip',
    children: 'Button',
    onClick: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<Button {...args}>{children}</Button>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Button {...args}>{children}</Button>
</TooltipContext>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <TooltipContext>
        {/* @ts-expect-error Storybook spread */}
        <Button {...args}>{args.children}</Button>
      </TooltipContext>
    </div>
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var y,M,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"IntentStory",...(x=(M=s.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var B,v,w;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:"SizeStory",...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,C,N;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:"DisabledStory",...(N=(C=d.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var z,W,I;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:"WidthStory",...(I=(W=u.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var V,T,k;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:"PrefixStory",...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var D,P,E;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:"SuffixStory",...(E=(P=f.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const ht=["Demo","Intent","Size","Disabled","Width","Prefix","Suffix"];export{a as Demo,d as Disabled,s as Intent,c as Prefix,l as Size,f as Suffix,u as Width,ht as __namedExportsOrder,gt as default};
