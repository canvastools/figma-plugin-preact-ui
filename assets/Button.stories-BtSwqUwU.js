import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-XYsEgyrh.js";import{t as r}from"./Text-Dx8we2OT.js";import{At as i,Gn as a,Jn as o,Zn as s,m as c,mn as l,qn as u,t as d}from"./src-BW54aR7x.js";var f,p,m,h=e((()=>{d(),o(),n(),f=[{intent:`neutral`,intentModifier:`default`,ghost:!1},{intent:`neutral`,intentModifier:`default`,ghost:!0},{intent:`neutral`,intentModifier:`brand`,ghost:!1},{intent:`neutral`,intentModifier:`brand`,ghost:!0},{intent:`neutral`,intentModifier:`danger`,ghost:!1},{intent:`neutral`,intentModifier:`danger`,ghost:!0},{intent:`neutral-inverted`,intentModifier:`default`,ghost:!1},{intent:`brand`,intentModifier:`default`,ghost:!1},{intent:`danger`,intentModifier:`default`,ghost:!1},{intent:`success`,intentModifier:`default`,ghost:!1}],p=()=>f.map(({intent:e,intentModifier:n,ghost:i})=>t(`div`,{className:`sb-row sb-width-full sb-gap-16`,style:{alignItems:`center`},children:[t(r,{fullWidth:!0,children:[e,`, `,n,i?`, ghost`:``]}),t(u,{intent:e,intentModifier:n,ghost:i,children:`Button`})]})),m={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:p()})}})),g,_,v,y=e((()=>{d(),o(),n(),g=[{intent:`neutral`,intentModifier:`default`,ghost:!1},{intent:`neutral`,intentModifier:`default`,ghost:!0},{intent:`neutral`,intentModifier:`brand`,ghost:!1},{intent:`neutral`,intentModifier:`brand`,ghost:!0},{intent:`neutral`,intentModifier:`danger`,ghost:!1},{intent:`neutral`,intentModifier:`danger`,ghost:!0},{intent:`neutral-inverted`,intentModifier:`default`,ghost:!1},{intent:`brand`,intentModifier:`default`,ghost:!1},{intent:`danger`,intentModifier:`default`,ghost:!1},{intent:`success`,intentModifier:`default`,ghost:!1}],_=()=>g.map(({intent:e,intentModifier:n,ghost:i})=>t(`div`,{className:`sb-row sb-width-full sb-gap-16`,style:{alignItems:`center`},children:[t(r,{fullWidth:!0,children:[e,`, `,n,i?`, ghost`:``]}),t(u,{intent:e,intentModifier:n,size:`medium`,children:`Medium`}),t(u,{intent:e,intentModifier:n,size:`large`,children:`Large`})]})),v={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Button size="medium">{children}</Button>

<Button size="large">{children}</Button>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:_()})}})),b,x,S,C=e((()=>{d(),o(),n(),b=[{intent:`neutral`,intentModifier:`default`,ghost:!1},{intent:`neutral`,intentModifier:`default`,ghost:!0},{intent:`neutral`,intentModifier:`brand`,ghost:!1},{intent:`neutral`,intentModifier:`brand`,ghost:!0},{intent:`neutral`,intentModifier:`danger`,ghost:!1},{intent:`neutral`,intentModifier:`danger`,ghost:!0},{intent:`neutral-inverted`,intentModifier:`default`,ghost:!1},{intent:`brand`,intentModifier:`default`,ghost:!1},{intent:`danger`,intentModifier:`default`,ghost:!1},{intent:`success`,intentModifier:`default`,ghost:!1}],x=()=>b.map(({intent:e,intentModifier:n,ghost:i})=>t(`div`,{className:`sb-row sb-width-full sb-gap-16`,style:{alignItems:`center`},children:[t(r,{fullWidth:!0,children:[e,`, `,n,i?`, ghost`:``]}),t(u,{intent:e,intentModifier:n,ghost:i,disabled:!0,children:`Button`}),t(u,{intent:e,intentModifier:n,ghost:i,disabled:!0,size:`large`,children:`Button`})]})),S={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Button disabled>{children}</Button>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:x()})}})),w,T=e((()=>{d(),o(),n(),w={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Button widthFull>{children}</Button>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(c,{spacing:400,fullWidth:!0,children:[t(u,{intent:`neutral`,intentModifier:`brand`,fullWidth:!0,ghost:!0,children:`Neutral Brand Ghost`}),t(u,{intent:`neutral`,intentModifier:`brand`,fullWidth:!0,children:`Neutral Brand`}),t(u,{intent:`brand`,fullWidth:!0,children:`Brand`}),t(u,{intent:`neutral`,intentModifier:`danger`,size:`large`,fullWidth:!0,ghost:!0,children:`Neutral Danger Ghost`}),t(u,{intent:`neutral`,intentModifier:`danger`,size:`large`,fullWidth:!0,children:`Neutral Danger`}),t(u,{intent:`danger`,size:`large`,fullWidth:!0,children:`Danger`})]})})}})),E,D,O,k=e((()=>{d(),o(),n(),E=[{intent:`neutral`,intentModifier:`default`,ghost:!1},{intent:`neutral`,intentModifier:`default`,ghost:!0},{intent:`neutral`,intentModifier:`brand`,ghost:!1},{intent:`neutral`,intentModifier:`brand`,ghost:!0},{intent:`neutral`,intentModifier:`danger`,ghost:!1},{intent:`neutral`,intentModifier:`danger`,ghost:!0},{intent:`neutral-inverted`,intentModifier:`default`,ghost:!1},{intent:`brand`,intentModifier:`default`,ghost:!1},{intent:`danger`,intentModifier:`default`,ghost:!1},{intent:`success`,intentModifier:`default`,ghost:!1}],D=()=>E.map(({intent:e,intentModifier:n,ghost:i})=>t(`div`,{className:`sb-row sb-width-full sb-gap-16`,style:{alignItems:`center`},children:[t(r,{fullWidth:!0,children:[e,`, `,n,i?`, ghost`:``]}),t(u,{intent:e,intentModifier:n,ghost:i,prefix:t(a,{glyph:l,intent:e,intentModifier:n}),children:`Button`}),t(u,{intent:e,intentModifier:n,ghost:i,size:`large`,prefix:t(a,{glyph:l,intent:e,intentModifier:n}),children:`Button`})]})),O={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:D()})}})),A,j,M,N=e((()=>{d(),o(),n(),A=[{intent:`neutral`,intentModifier:`default`,ghost:!1},{intent:`neutral`,intentModifier:`default`,ghost:!0},{intent:`neutral`,intentModifier:`brand`,ghost:!1},{intent:`neutral`,intentModifier:`brand`,ghost:!0},{intent:`neutral`,intentModifier:`danger`,ghost:!1},{intent:`neutral`,intentModifier:`danger`,ghost:!0},{intent:`neutral-inverted`,intentModifier:`default`,ghost:!1},{intent:`brand`,intentModifier:`default`,ghost:!1},{intent:`danger`,intentModifier:`default`,ghost:!1},{intent:`success`,intentModifier:`default`,ghost:!1}],j=()=>A.map(({intent:e,intentModifier:n,ghost:i})=>t(`div`,{className:`sb-row sb-width-full sb-gap-16`,style:{alignItems:`center`},children:[t(r,{fullWidth:!0,children:[e,`, `,n,i?`, ghost`:``]}),t(u,{intent:e,intentModifier:n,ghost:i,suffix:t(a,{glyph:l,intent:e,intentModifier:n}),children:`Button`}),t(u,{intent:e,intentModifier:n,ghost:i,size:`large`,suffix:t(a,{glyph:l,intent:e,intentModifier:n}),children:`Button`})]})),M={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:j()})}})),P,F=e((()=>{d(),o(),n(),P={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`<Button>
  <ColorSwatch 
    fill={{ r: 255, g: 0, b: 0, a: 1 }}
    disabled
    size="small"
  />
  <Text>Hello</Text>
</Button>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(c,{spacing:400,fullWidth:!0,children:[t(u,{onClick:()=>console.log(`Button clicked`),children:t(c,{spacing:100,direction:`row`,children:[t(i,{fill:{r:255,g:0,b:0,a:1},disabled:!0,size:`small`}),t(r,{children:`Custom Button`})]})}),t(u,{fullWidth:!0,onClick:()=>console.log(`Button clicked`),children:t(c,{spacing:100,direction:`row`,children:[t(i,{fill:{r:255,g:0,b:0,a:1},disabled:!0,size:`small`}),t(r,{children:`Custom Button`})]})})]})})}})),I,L,R,z,B,V,H,U,W,G,K;e((()=>{h(),y(),C(),T(),k(),N(),F(),d(),o(),n(),{fn:I}=__STORYBOOK_MODULE_TEST__,L={title:`Components/Button`,component:u,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},intent:{control:{type:`radio`},options:[`neutral`,`neutral-inverted`,`brand`,`danger`,`success`],table:{defaultValue:{summary:`neutral`}}},intentModifier:{control:{type:`radio`},options:[`default`,`secondary`,`brand`,`danger`,`success`],table:{defaultValue:{summary:`default`}}},ghost:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},size:{control:{type:`radio`},options:[`medium`,`large`],table:{defaultValue:{summary:`medium`}}},grouped:{control:{type:`radio`},options:[void 0,`first`,`last`,`middle`]},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},fullWidth:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},tooltip:{control:{type:`text`},description:`Tooltip content.`,table:{type:{summary:`preact.ComponentChildren`}}},prefix:{control:{disable:!0},description:`Element displayed before children.`,table:{type:{summary:`preact.ComponentChildren`}}},suffix:{control:{disable:!0},description:`Element displayed after children.`,table:{type:{summary:`preact.ComponentChildren`}}},children:{control:{type:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},tabIndex:{control:{type:`number`},description:`Tab order of the focusable element. Omit to keep the default focus behavior.`,table:{type:{summary:`number`}}},onClick:{table:{type:{summary:`(args) => void`,detail:`
args: { 
  event: MouseEvent
}
          `}}}}},R={args:{id:void 0,className:``,intent:`neutral`,intentModifier:`default`,ghost:!1,size:`medium`,grouped:void 0,disabled:!1,fullWidth:!1,tooltip:`Button tooltip`,children:`Button`,onClick:I()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Button {...args}>{children}</Button>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Button {...args}>{children}</Button>
</TooltipContext>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,children:t(s,{children:t(u,{...e,children:e.children})})})},z=m,B=v,V=S,H=w,U=O,W=M,G=P,R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
        <Button {...args}>{args.children}</Button>
      </TooltipContext>
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`IntentStory`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`SizeStory`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`DisabledStory`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`WidthStory`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`PrefixStory`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`SuffixStory`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`CustomChildrenStory`,...G.parameters?.docs?.source}}},K=[`Demo`,`Intent`,`Size`,`Disabled`,`Width`,`Prefix`,`Suffix`,`CustomChildren`]}))();export{G as CustomChildren,R as Demo,V as Disabled,z as Intent,U as Prefix,B as Size,W as Suffix,H as Width,K as __namedExportsOrder,L as default};