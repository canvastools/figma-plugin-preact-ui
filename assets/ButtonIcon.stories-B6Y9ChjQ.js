import{u as e}from"./hooks.module-6Sbq__eq.js";import{f as M}from"./index-B4E_jmCM.js";import{B as r}from"./ButtonIcon-7SP_3Ldm.js";import{T as m}from"./Text-BbQ_b1VF.js";import{I as a}from"./Icon-DqIclgYW.js";import{l as s}from"./link-DL1y3n50.js";import{I as P}from"./Input-C-scTUnW.js";import{a as _}from"./TooltipContext-Cr8YsZR4.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./TooltipContainer-CJCq4A9v.js";const U=[{intent:"neutral",intentModifier:"default",ghost:!1},{intent:"neutral",intentModifier:"default",ghost:!0}],W=()=>U.map(({intent:t,intentModifier:o,ghost:n})=>e("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[e(m,{fullWidth:!0,children:[t,", ",o,n?", ghost":""]}),e(r,{intent:t,intentModifier:o,ghost:n,children:e(a,{glyph:s})})]})),A={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ButtonIcon intent="neutral">{children}</ButtonIcon>

<ButtonIcon 
  intent="neutral"
  intentModifier="default"
>
  {children}
</ButtonIcon>

<ButtonIcon ghost>{children}</ButtonIcon>
`}}},render:()=>e("div",{className:"sb-column sb-width-420 sb-gap-16",children:W()})},E=[{intent:"neutral",intentModifier:"default",ghost:!1},{intent:"neutral",intentModifier:"default",ghost:!0}],O=()=>E.map(({intent:t,intentModifier:o,ghost:n})=>e("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[e(m,{fullWidth:!0,children:[t,", ",o,n?", ghost":""]}),e(r,{intent:t,intentModifier:o,ghost:n,size:"medium",children:e(a,{glyph:s})}),e(r,{intent:t,intentModifier:o,ghost:n,size:"large",children:e(a,{glyph:s})})]})),G={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ButtonIcon size="medium">{children}</ButtonIcon>

<ButtonIcon size="large">{children}</ButtonIcon>
`}}},render:()=>e("div",{className:"sb-column sb-width-420 sb-gap-16",children:O()})},j=[{intent:"neutral",intentModifier:"default",ghost:!1},{intent:"neutral",intentModifier:"default",ghost:!0}],q=()=>j.map(({intent:t,intentModifier:o,ghost:n})=>e("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[e(m,{fullWidth:!0,children:[t,", ",o,n?", ghost":""]}),e(r,{intent:t,intentModifier:o,ghost:n,disabled:!0,children:e(a,{glyph:s})}),e(r,{intent:t,intentModifier:o,ghost:n,size:"large",disabled:!0,children:e(a,{glyph:s})})]})),F={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ButtonIcon disabled>{children}</ButtonIcon>
`}}},render:()=>e("div",{className:"sb-column sb-width-420 sb-gap-16",children:q()})},H={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"A special variant used inside <a href='/docs/components-input--docs'>`<Input/>`</a>."},source:{language:"tsx",code:`
<Input
  placeholder="Placeholder"
  suffix={
    <ButtonIcon translucent>
      <Icon 
        glyph={link}
      />
    </ButtonIcon>
  }
/>
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:e(P,{placeholder:"Placeholder",suffix:e(r,{translucent:!0,children:e(a,{glyph:s})})})})},J={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"The `icon` prop is a shortcut for the displaying the icon (glyph) as a child. There is no need to import the <a href='/docs/components-icon--docs'>`<Icon/>`</a> component separately."},source:{language:"tsx",code:`
import { link } from "figma-plugin-preact-ui"

<ButtonIcon 
  icon={{
    glyph: link,
    size: 24,
  }}
/>
`}}},render:()=>e("div",{className:"sb-column sb-width-420 sb-gap-16",children:e(r,{icon:{glyph:s}})})},re={title:"Components/ButtonIcon",component:r,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},intent:{control:{type:"radio"},options:["neutral"],defaultValue:{summary:"neutral"}},intentModifier:{control:{type:"radio"},options:["default","secondary"],defaultValue:{summary:"default"}},ghost:{control:{type:"boolean"},defaultValue:{summary:!1}},size:{control:{type:"radio"},options:["medium","large"],defaultValue:{summary:"medium"}},grouped:{control:{type:"radio"},options:[void 0,"first","last","middle"]},translucent:{control:{type:"boolean"},description:"Used for cases when the button is inside an input.",defaultValue:{summary:!1}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},tooltip:{control:{type:"text"},description:"Tooltip content.",table:{type:{summary:"preact.ComponentChildren"}}},children:{control:{disable:!0},table:{type:{summary:"preact.ComponentChildren"}}},icon:{control:{disable:!0},description:"A shortcut for the displaying the icon (glyph) as a child.",table:{type:{summary:"Pick<IconProps>",detail:`
{ 
  glyph: Glyph
  variant: "default" | "upscaled"
  size: 16 | 24
}
          `}}},tabIndex:{control:{type:"number"},description:"Tab order of the focusable element. Omit to keep the default focus behavior.",table:{type:{summary:"number"}}},onClick:{table:{type:{summary:"(args) => void",detail:`
args: { 
  event: MouseEvent
}
          `}}}}},l={tags:["!autodocs"],args:{id:void 0,className:"",intent:"neutral",intentModifier:"default",ghost:!1,size:"medium",grouped:void 0,translucent:!1,disabled:!1,tooltip:"Button tooltip",children:e(a,{glyph:s}),onClick:M()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ButtonIcon {...args}>{children}</ButtonIcon>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <ButtonIcon {...args}>{children}</ButtonIcon>
</TooltipContext>
`}}},render:t=>e("div",{className:"sb-column sb-width-full",children:e(_,{children:e(r,{...t})})})},i=A,c=G,d=F,u=H,p=J;var h,g,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    intent: 'neutral',
    intentModifier: 'default',
    ghost: false,
    size: 'medium',
    grouped: undefined,
    translucent: false,
    disabled: false,
    tooltip: 'Button tooltip',
    children: <Icon glyph={link} />,
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
<ButtonIcon {...args}>{children}</ButtonIcon>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <ButtonIcon {...args}>{children}</ButtonIcon>
</TooltipContext>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <TooltipContext>
        <ButtonIcon {...args} />
      </TooltipContext>
    </div>
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,y,I;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"IntentStory",...(I=(y=i.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var v,w,B;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:"SizeStory",...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var x,C,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:"DisabledStory",...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var T,z,k;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:"TranslucentStory",...(k=(z=u.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var N,V,D;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:"IconStory",...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const se=["Demo","Intent","Size","Disabled","Translucent","_Icon"];export{l as Demo,d as Disabled,i as Intent,c as Size,u as Translucent,p as _Icon,se as __namedExportsOrder,re as default};
