import{u as t}from"./hooks.module-6Sbq__eq.js";import{f as L}from"./index-B4E_jmCM.js";import{B as r}from"./Button-XJE8iLdA.js";import{T as o}from"./Text-BbQ_b1VF.js";import{S as p}from"./Stack-FIJoWfyG.js";import{I as h}from"./Icon-C6_npEhI.js";import{l as m}from"./link-BlSd8q6h.js";import{C as O}from"./ColorSwatch-BhR6TjKp.js";import{a as j}from"./TooltipContext-DRGVUEob.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./color-OwKICefG.js";import"./TooltipContainer-CJCq4A9v.js";const q=[{intent:"neutral",intentModifier:"default",ghost:!1},{intent:"neutral",intentModifier:"default",ghost:!0},{intent:"neutral",intentModifier:"brand",ghost:!1},{intent:"neutral",intentModifier:"brand",ghost:!0},{intent:"neutral",intentModifier:"danger",ghost:!1},{intent:"neutral",intentModifier:"danger",ghost:!0},{intent:"neutral-inverted",intentModifier:"default",ghost:!1},{intent:"brand",intentModifier:"default",ghost:!1},{intent:"danger",intentModifier:"default",ghost:!1},{intent:"success",intentModifier:"default",ghost:!1}],A=()=>q.map(({intent:e,intentModifier:n,ghost:i})=>t("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[t(o,{fullWidth:!0,children:[e,", ",n,i?", ghost":""]}),t(r,{intent:e,intentModifier:n,ghost:i,children:"Button"})]})),J={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>t("div",{className:"sb-column sb-width-420 sb-gap-16",children:A()})},K=[{intent:"neutral",intentModifier:"default",ghost:!1},{intent:"neutral",intentModifier:"default",ghost:!0},{intent:"neutral",intentModifier:"brand",ghost:!1},{intent:"neutral",intentModifier:"brand",ghost:!0},{intent:"neutral",intentModifier:"danger",ghost:!1},{intent:"neutral",intentModifier:"danger",ghost:!0},{intent:"neutral-inverted",intentModifier:"default",ghost:!1},{intent:"brand",intentModifier:"default",ghost:!1},{intent:"danger",intentModifier:"default",ghost:!1},{intent:"success",intentModifier:"default",ghost:!1}],Q=()=>K.map(({intent:e,intentModifier:n,ghost:i})=>t("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[t(o,{fullWidth:!0,children:[e,", ",n,i?", ghost":""]}),t(r,{intent:e,intentModifier:n,size:"medium",children:"Medium"}),t(r,{intent:e,intentModifier:n,size:"large",children:"Large"})]})),R={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Button size="medium">{children}</Button>

<Button size="large">{children}</Button>
`}}},render:()=>t("div",{className:"sb-column sb-width-420 sb-gap-16",children:Q()})},X=[{intent:"neutral",intentModifier:"default",ghost:!1},{intent:"neutral",intentModifier:"default",ghost:!0},{intent:"neutral",intentModifier:"brand",ghost:!1},{intent:"neutral",intentModifier:"brand",ghost:!0},{intent:"neutral",intentModifier:"danger",ghost:!1},{intent:"neutral",intentModifier:"danger",ghost:!0},{intent:"neutral-inverted",intentModifier:"default",ghost:!1},{intent:"brand",intentModifier:"default",ghost:!1},{intent:"danger",intentModifier:"default",ghost:!1},{intent:"success",intentModifier:"default",ghost:!1}],Y=()=>X.map(({intent:e,intentModifier:n,ghost:i})=>t("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[t(o,{fullWidth:!0,children:[e,", ",n,i?", ghost":""]}),t(r,{intent:e,intentModifier:n,ghost:i,disabled:!0,children:"Button"}),t(r,{intent:e,intentModifier:n,ghost:i,disabled:!0,size:"large",children:"Button"})]})),Z={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Button disabled>{children}</Button>
`}}},render:()=>t("div",{className:"sb-column sb-width-420 sb-gap-16",children:Y()})},$={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Button widthFull>{children}</Button>
`}}},render:()=>t("div",{className:"sb-column sb-width-full",children:t(p,{spacing:400,fullWidth:!0,children:[t(r,{intent:"neutral",intentModifier:"brand",fullWidth:!0,ghost:!0,children:"Neutral Brand Ghost"}),t(r,{intent:"neutral",intentModifier:"brand",fullWidth:!0,children:"Neutral Brand"}),t(r,{intent:"brand",fullWidth:!0,children:"Brand"}),t(r,{intent:"neutral",intentModifier:"danger",size:"large",fullWidth:!0,ghost:!0,children:"Neutral Danger Ghost"}),t(r,{intent:"neutral",intentModifier:"danger",size:"large",fullWidth:!0,children:"Neutral Danger"}),t(r,{intent:"danger",size:"large",fullWidth:!0,children:"Danger"})]})})},tt=[{intent:"neutral",intentModifier:"default",ghost:!1},{intent:"neutral",intentModifier:"default",ghost:!0},{intent:"neutral",intentModifier:"brand",ghost:!1},{intent:"neutral",intentModifier:"brand",ghost:!0},{intent:"neutral",intentModifier:"danger",ghost:!1},{intent:"neutral",intentModifier:"danger",ghost:!0},{intent:"neutral-inverted",intentModifier:"default",ghost:!1},{intent:"brand",intentModifier:"default",ghost:!1},{intent:"danger",intentModifier:"default",ghost:!1},{intent:"success",intentModifier:"default",ghost:!1}],et=()=>tt.map(({intent:e,intentModifier:n,ghost:i})=>t("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[t(o,{fullWidth:!0,children:[e,", ",n,i?", ghost":""]}),t(r,{intent:e,intentModifier:n,ghost:i,prefix:t(h,{glyph:m,intent:e,intentModifier:n}),children:"Button"}),t(r,{intent:e,intentModifier:n,ghost:i,size:"large",prefix:t(h,{glyph:m,intent:e,intentModifier:n}),children:"Button"})]})),nt={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>t("div",{className:"sb-column sb-width-420 sb-gap-16",children:et()})},rt=[{intent:"neutral",intentModifier:"default",ghost:!1},{intent:"neutral",intentModifier:"default",ghost:!0},{intent:"neutral",intentModifier:"brand",ghost:!1},{intent:"neutral",intentModifier:"brand",ghost:!0},{intent:"neutral",intentModifier:"danger",ghost:!1},{intent:"neutral",intentModifier:"danger",ghost:!0},{intent:"neutral-inverted",intentModifier:"default",ghost:!1},{intent:"brand",intentModifier:"default",ghost:!1},{intent:"danger",intentModifier:"default",ghost:!1},{intent:"success",intentModifier:"default",ghost:!1}],it=()=>rt.map(({intent:e,intentModifier:n,ghost:i})=>t("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[t(o,{fullWidth:!0,children:[e,", ",n,i?", ghost":""]}),t(r,{intent:e,intentModifier:n,ghost:i,suffix:t(h,{glyph:m,intent:e,intentModifier:n}),children:"Button"}),t(r,{intent:e,intentModifier:n,ghost:i,size:"large",suffix:t(h,{glyph:m,intent:e,intentModifier:n}),children:"Button"})]})),ot={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>t("div",{className:"sb-column sb-width-420 sb-gap-16",children:it()})},at={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`<Button>
	<ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 1 }}/>
	<Text>Hello</Text>
</Button>
`}}},render:()=>t("div",{className:"sb-column sb-width-full",children:t(p,{spacing:400,fullWidth:!0,children:t(r,{children:t(p,{spacing:100,direction:"row",children:[t(O,{fill:{r:255,g:0,b:0,a:1}}),t(o,{children:"Custom Button"})]})})})})},Mt={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},intent:{control:{type:"radio"},options:["neutral","neutral-inverted","brand","danger","success"],defaultValue:{summary:"neutral"}},intentModifier:{control:{type:"radio"},options:["default","secondary","brand","danger","success"],defaultValue:{summary:"default"}},ghost:{control:{type:"boolean"},defaultValue:{summary:!1}},size:{control:{type:"radio"},options:["medium","large"],defaultValue:{summary:"medium"}},grouped:{control:{type:"radio"},options:[void 0,"first","last","middle"]},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},fullWidth:{control:{type:"boolean"},defaultValue:{summary:!1}},tooltip:{control:{type:"text"},description:"Tooltip content.",table:{type:{summary:"preact.ComponentChildren"}}},prefix:{control:{disable:!0},description:"Element displayed before children.",table:{type:{summary:"preact.ComponentChildren"}}},suffix:{control:{disable:!0},description:"Element displayed after children.",table:{type:{summary:"preact.ComponentChildren"}}},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},onClick:{table:{type:{summary:"(args) => void",detail:`
args: { 
  event: MouseEvent
}
          `}}}}},a={tags:["!autodocs"],args:{id:void 0,className:"",intent:"neutral",intentModifier:"default",ghost:!1,size:"medium",grouped:void 0,disabled:!1,fullWidth:!1,tooltip:"Button tooltip",children:"Button",onClick:L()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Button {...args}>{children}</Button>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Button {...args}>{children}</Button>
</TooltipContext>
`}}},render:e=>t("div",{className:"sb-column sb-width-full",children:t(j,{children:t(r,{...e,children:e.children})})})},s=J,l=R,d=Z,u=$,c=nt,f=ot,g=at;var b,y,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var B,M,w;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:"IntentStory",...(w=(M=s.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var C,v,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:"SizeStory",...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var N,W,z;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:"DisabledStory",...(z=(W=d.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var T,V,I;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:"WidthStory",...(I=(V=u.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var k,D,P;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:"PrefixStory",...(P=(D=c.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var E,G,U;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:"SuffixStory",...(U=(G=f.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var _,F,H;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:"CustomChildrenStory",...(H=(F=g.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const wt=["Demo","Intent","Size","Disabled","Width","Prefix","Suffix","CustomChildren"];export{g as CustomChildren,a as Demo,d as Disabled,s as Intent,c as Prefix,l as Size,f as Suffix,u as Width,wt as __namedExportsOrder,Mt as default};
