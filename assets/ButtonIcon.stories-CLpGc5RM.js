import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{i as r,r as i}from"./Tooltip-DsjGtgh5.js";import{n as a,t as o}from"./Text-Cr-51GRl.js";import{n as s,t as c}from"./Icon-Brb725mi.js";import{n as l,t as u}from"./ButtonIcon-CpTDZvwn.js";import{n as d,t as f}from"./link-DAdg43gf.js";import{n as p,t as m}from"./Input-CyseSWne.js";var h,g,_;function v(){return(v=e((()=>{a(),s(),f(),l(),n(),h=[{intent:`neutral`,intentModifier:`default`,ghost:!1},{intent:`neutral`,intentModifier:`default`,ghost:!0}],g=()=>h.map(({intent:e,intentModifier:n,ghost:r})=>t(`div`,{className:`sb-row sb-width-full sb-gap-16`,style:{alignItems:`center`},children:[t(o,{fullWidth:!0,children:[e,`, `,n,r?`, ghost`:``]}),t(u,{intent:e,intentModifier:n,ghost:r,children:t(c,{glyph:d})})]})),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ButtonIcon intent="neutral">{children}</ButtonIcon>

<ButtonIcon 
  intent="neutral"
  intentModifier="default"
>
  {children}
</ButtonIcon>

<ButtonIcon ghost>{children}</ButtonIcon>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:g()})}})))()}var y,b,x;function S(){return(S=e((()=>{a(),s(),f(),l(),n(),y=[{intent:`neutral`,intentModifier:`default`,ghost:!1},{intent:`neutral`,intentModifier:`default`,ghost:!0}],b=()=>y.map(({intent:e,intentModifier:n,ghost:r})=>t(`div`,{className:`sb-row sb-width-full sb-gap-16`,style:{alignItems:`center`},children:[t(o,{fullWidth:!0,children:[e,`, `,n,r?`, ghost`:``]}),t(u,{intent:e,intentModifier:n,ghost:r,size:`medium`,children:t(c,{glyph:d})}),t(u,{intent:e,intentModifier:n,ghost:r,size:`large`,children:t(c,{glyph:d})})]})),x={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ButtonIcon size="medium">{children}</ButtonIcon>

<ButtonIcon size="large">{children}</ButtonIcon>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:b()})}})))()}var C,w,T;function E(){return(E=e((()=>{a(),s(),f(),l(),n(),C=[{intent:`neutral`,intentModifier:`default`,ghost:!1},{intent:`neutral`,intentModifier:`default`,ghost:!0}],w=()=>C.map(({intent:e,intentModifier:n,ghost:r})=>t(`div`,{className:`sb-row sb-width-full sb-gap-16`,style:{alignItems:`center`},children:[t(o,{fullWidth:!0,children:[e,`, `,n,r?`, ghost`:``]}),t(u,{intent:e,intentModifier:n,ghost:r,disabled:!0,children:t(c,{glyph:d})}),t(u,{intent:e,intentModifier:n,ghost:r,size:`large`,disabled:!0,children:t(c,{glyph:d})})]})),T={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ButtonIcon disabled>{children}</ButtonIcon>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:w()})}})))()}var D;function O(){return(O=e((()=>{p(),s(),f(),l(),n(),D={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"A special variant used inside <a href='/docs/components-input--docs'>`<Input/>`</a>."},source:{code:`
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
`}}},render:()=>t(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:t(m,{placeholder:`Placeholder`,suffix:t(u,{translucent:!0,children:t(c,{glyph:d})})})})}})))()}var k;function A(){return(A=e((()=>{f(),l(),n(),k={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"The `icon` prop is a shortcut for the displaying the icon (glyph) as a child. There is no need to import the <a href='/docs/components-icon--docs'>`<Icon/>`</a> component separately."},source:{code:`
import { link } from "figma-plugin-preact-ui"

<ButtonIcon 
  icon={{
    glyph: link,
    size: 24,
  }}
/>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:t(u,{icon:{glyph:d}})})}})))()}var j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{v(),S(),E(),O(),A(),s(),f(),r(),l(),n(),{fn:j}=__STORYBOOK_MODULE_TEST__,M={title:`Components/ButtonIcon`,component:u,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},intent:{control:{type:`radio`},options:[`neutral`],table:{defaultValue:{summary:`neutral`}}},intentModifier:{control:{type:`radio`},options:[`default`,`secondary`],table:{defaultValue:{summary:`default`}}},ghost:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},size:{control:{type:`radio`},options:[`medium`,`large`],table:{defaultValue:{summary:`medium`}}},grouped:{control:{type:`radio`},options:[void 0,`first`,`last`,`middle`]},translucent:{control:{type:`boolean`},description:`Used for cases when the button is inside an input.`,table:{defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},tooltip:{control:{type:`text`},description:`Tooltip content.`,table:{type:{summary:`preact.ComponentChildren`}}},children:{control:{disable:!0},table:{type:{summary:`preact.ComponentChildren`}}},icon:{control:{disable:!0},description:`A shortcut for the displaying the icon (glyph) as a child.`,table:{type:{summary:`Pick<IconProps>`,detail:`
{ 
  glyph: Glyph
  variant: "default" | "upscaled"
  size: 16 | 24
}
          `}}},tabIndex:{control:{type:`number`},description:`Tab order of the focusable element. Omit to keep the default focus behavior.`,table:{type:{summary:`number`}}},onClick:{table:{type:{summary:`(args) => void`,detail:`
args: { 
  event: MouseEvent
}
          `}}}}},N={args:{id:void 0,className:``,intent:`neutral`,intentModifier:`default`,ghost:!1,size:`medium`,grouped:void 0,translucent:!1,disabled:!1,tooltip:`Button tooltip`,children:t(c,{glyph:d}),onClick:j()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<ButtonIcon {...args}>{children}</ButtonIcon>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <ButtonIcon {...args}>{children}</ButtonIcon>
</TooltipContext>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,children:t(i,{children:t(u,{...e})})})},P=_,F=x,I=T,L=D,R=k,z=[`Demo`,`Intent`,`Size`,`Disabled`,`Translucent`,`_Icon`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`IntentStory`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`SizeStory`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`DisabledStory`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`TranslucentStory`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`IconStory`,...R.parameters?.docs?.source}}}})))()}B();export{N as Demo,I as Disabled,P as Intent,F as Size,L as Translucent,R as _Icon,z as __namedExportsOrder,M as default};