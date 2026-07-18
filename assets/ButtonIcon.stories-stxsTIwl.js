import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-XYsEgyrh.js";import{t as r}from"./Text-Dx8we2OT.js";import{Gn as i,Un as a,Wn as o,Zn as s,Zt as c,mn as l,t as u}from"./src-BW54aR7x.js";var d,f,p,m=e((()=>{u(),o(),n(),d=[{intent:`neutral`,intentModifier:`default`,ghost:!1},{intent:`neutral`,intentModifier:`default`,ghost:!0}],f=()=>d.map(({intent:e,intentModifier:n,ghost:o})=>t(`div`,{className:`sb-row sb-width-full sb-gap-16`,style:{alignItems:`center`},children:[t(r,{fullWidth:!0,children:[e,`, `,n,o?`, ghost`:``]}),t(a,{intent:e,intentModifier:n,ghost:o,children:t(i,{glyph:l})})]})),p={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ButtonIcon intent="neutral">{children}</ButtonIcon>

<ButtonIcon 
  intent="neutral"
  intentModifier="default"
>
  {children}
</ButtonIcon>

<ButtonIcon ghost>{children}</ButtonIcon>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:f()})}})),h,g,_,v=e((()=>{u(),o(),n(),h=[{intent:`neutral`,intentModifier:`default`,ghost:!1},{intent:`neutral`,intentModifier:`default`,ghost:!0}],g=()=>h.map(({intent:e,intentModifier:n,ghost:o})=>t(`div`,{className:`sb-row sb-width-full sb-gap-16`,style:{alignItems:`center`},children:[t(r,{fullWidth:!0,children:[e,`, `,n,o?`, ghost`:``]}),t(a,{intent:e,intentModifier:n,ghost:o,size:`medium`,children:t(i,{glyph:l})}),t(a,{intent:e,intentModifier:n,ghost:o,size:`large`,children:t(i,{glyph:l})})]})),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ButtonIcon size="medium">{children}</ButtonIcon>

<ButtonIcon size="large">{children}</ButtonIcon>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:g()})}})),y,b,x,S=e((()=>{u(),o(),n(),y=[{intent:`neutral`,intentModifier:`default`,ghost:!1},{intent:`neutral`,intentModifier:`default`,ghost:!0}],b=()=>y.map(({intent:e,intentModifier:n,ghost:o})=>t(`div`,{className:`sb-row sb-width-full sb-gap-16`,style:{alignItems:`center`},children:[t(r,{fullWidth:!0,children:[e,`, `,n,o?`, ghost`:``]}),t(a,{intent:e,intentModifier:n,ghost:o,disabled:!0,children:t(i,{glyph:l})}),t(a,{intent:e,intentModifier:n,ghost:o,size:`large`,disabled:!0,children:t(i,{glyph:l})})]})),x={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ButtonIcon disabled>{children}</ButtonIcon>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:b()})}})),C,w=e((()=>{u(),o(),n(),C={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"A special variant used inside <a href='/docs/components-input--docs'>`<Input/>`</a>."},source:{code:`
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
`}}},render:()=>t(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:t(c,{placeholder:`Placeholder`,suffix:t(a,{translucent:!0,children:t(i,{glyph:l})})})})}})),T,E=e((()=>{u(),o(),n(),T={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"The `icon` prop is a shortcut for the displaying the icon (glyph) as a child. There is no need to import the <a href='/docs/components-icon--docs'>`<Icon/>`</a> component separately."},source:{code:`
import { link } from "figma-plugin-preact-ui"

<ButtonIcon 
  icon={{
    glyph: link,
    size: 24,
  }}
/>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:t(a,{icon:{glyph:l}})})}})),D,O,k,A,j,M,N,P,F;e((()=>{m(),v(),S(),w(),E(),u(),o(),n(),{fn:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/ButtonIcon`,component:a,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},intent:{control:{type:`radio`},options:[`neutral`],table:{defaultValue:{summary:`neutral`}}},intentModifier:{control:{type:`radio`},options:[`default`,`secondary`],table:{defaultValue:{summary:`default`}}},ghost:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},size:{control:{type:`radio`},options:[`medium`,`large`],table:{defaultValue:{summary:`medium`}}},grouped:{control:{type:`radio`},options:[void 0,`first`,`last`,`middle`]},translucent:{control:{type:`boolean`},description:`Used for cases when the button is inside an input.`,table:{defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},tooltip:{control:{type:`text`},description:`Tooltip content.`,table:{type:{summary:`preact.ComponentChildren`}}},children:{control:{disable:!0},table:{type:{summary:`preact.ComponentChildren`}}},icon:{control:{disable:!0},description:`A shortcut for the displaying the icon (glyph) as a child.`,table:{type:{summary:`Pick<IconProps>`,detail:`
{ 
  glyph: Glyph
  variant: "default" | "upscaled"
  size: 16 | 24
}
          `}}},tabIndex:{control:{type:`number`},description:`Tab order of the focusable element. Omit to keep the default focus behavior.`,table:{type:{summary:`number`}}},onClick:{table:{type:{summary:`(args) => void`,detail:`
args: { 
  event: MouseEvent
}
          `}}}}},k={args:{id:void 0,className:``,intent:`neutral`,intentModifier:`default`,ghost:!1,size:`medium`,grouped:void 0,translucent:!1,disabled:!1,tooltip:`Button tooltip`,children:t(i,{glyph:l}),onClick:D()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<ButtonIcon {...args}>{children}</ButtonIcon>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <ButtonIcon {...args}>{children}</ButtonIcon>
</TooltipContext>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,children:t(s,{children:t(a,{...e})})})},A=p,j=_,M=x,N=C,P=T,k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`IntentStory`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`SizeStory`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`DisabledStory`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`TranslucentStory`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`IconStory`,...P.parameters?.docs?.source}}},F=[`Demo`,`Intent`,`Size`,`Disabled`,`Translucent`,`_Icon`]}))();export{k as Demo,M as Disabled,A as Intent,j as Size,N as Translucent,P as _Icon,F as __namedExportsOrder,O as default};