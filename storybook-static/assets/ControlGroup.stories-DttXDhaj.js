import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-B_u_rUE0.js";import{Dn as r,Rt as i,Un as a,Vn as o,Zt as s,fn as c,n as l,t as u,zn as d,zt as f}from"./src-CnP2aPTs.js";var p,m=e((()=>{u(),f(),n(),p={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ControlGroup groupFocus>
  <Input />
  <Input />
  <Button>Button</Button>
</ControlGroup>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-40`,children:t(i,{groupFocus:!0,fullWidth:!0,children:[t(s,{placeholder:`Input`}),t(s,{placeholder:`Input`})]})})}})),h,g=e((()=>{u(),f(),n(),h={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ControlGroup>
  <Button>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
</ControlGroup>

<ControlGroup>
  <Input/>
  <Input/>
</ControlGroup>

<ControlGroup>
  <Input/>
  <ButtonIcon
    intentModifier="secondary"
    icon={{ glyph: chevronDown }}
  />
</ControlGroup>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-40`,children:[t(i,{children:[t(a,{children:`Button`}),t(a,{children:`Button`}),t(a,{children:`Button`})]}),t(i,{children:[t(a,{children:`Button`}),t(a,{children:`Button`}),t(d,{icon:{glyph:c}})]}),t(i,{children:[t(d,{icon:{glyph:c}}),t(d,{icon:{glyph:c}}),t(d,{icon:{glyph:c}})]}),t(i,{groupFocus:!0,fullWidth:!0,children:[t(s,{placeholder:`Input`}),t(s,{placeholder:`Input`})]}),t(i,{groupFocus:!0,fullWidth:!0,children:[t(s,{placeholder:`Input`}),t(d,{intentModifier:`secondary`,children:t(o,{glyph:r,intentModifier:`default`})})]}),t(i,{groupFocus:!0,fullWidth:!0,children:[t(s,{placeholder:`Input`}),t(l,{})]})]})}})),_,v=e((()=>{u(),f(),n(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ControlGroup disabled>
  <Button disabled>Button</Button>
  <Button disabled>Button</Button>
  <Button disabled>Button</Button>
</ControlGroup>

<ControlGroup disabled>
  <Input disabled/>
  <Input disabled/>
</ControlGroup>

<ControlGroup disabled>
  <Input disabled/>
  <ButtonIcon 
    disabled
    intentModifier="secondary"
    icon={{ glyph: chevronDown }}
  />
</ControlGroup>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-420 sb-gap-40`,children:[t(i,{disabled:!0,children:[t(a,{disabled:!0,children:`Button`}),t(a,{disabled:!0,children:`Button`}),t(a,{disabled:!0,children:`Button`})]}),t(i,{disabled:!0,children:[t(a,{disabled:!0,children:`Button`}),t(a,{disabled:!0,children:`Button`}),t(d,{icon:{glyph:c},disabled:!0})]}),t(i,{disabled:!0,children:[t(d,{icon:{glyph:c},disabled:!0}),t(d,{icon:{glyph:c},disabled:!0}),t(d,{icon:{glyph:c},disabled:!0})]}),t(i,{groupFocus:!0,fullWidth:!0,disabled:!0,children:[t(s,{placeholder:`Input`,disabled:!0}),t(s,{placeholder:`Input`,disabled:!0})]}),t(i,{groupFocus:!0,fullWidth:!0,disabled:!0,children:[t(s,{placeholder:`Input`,disabled:!0}),t(d,{intentModifier:`secondary`,disabled:!0,children:t(o,{glyph:r,intentModifier:`default`,disabled:!0})})]}),t(i,{groupFocus:!0,fullWidth:!0,disabled:!0,children:[t(s,{placeholder:`Input`,disabled:!0}),t(l,{disabled:!0})]})]})}})),y,b,x,S,C,w;e((()=>{m(),g(),v(),u(),f(),n(),y={title:`Components/ControlGroup`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:'A wrapper component that groups multiple controls together and set `grouped` property on them.<br/>  Supported controls: <a href="/docs/components-button--docs">`<Button/>`</a>, <a href="/docs/components-buttonicon--docs">`<ButtonIcon/>`</a>, <a href="/docs/components-buttonicontoggle--docs">`<ButtonIconToggle/>`</a>, <a href="/docs/components-input--docs">`<Input/>`</a>, <a href="/docs/components-select--docs">`<Select/>`</a>'}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},groupFocus:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},fullWidth:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},b={args:{id:void 0,className:``,groupFocus:!1,disabled:!1,fullWidth:!1},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<ControlGroup {...args}>
  {children}
</ControlGroup>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,children:t(i,{...e,children:[t(s,{placeholder:`Input`,disabled:e.disabled}),t(s,{placeholder:`Input`,disabled:e.disabled})]})})},x=p,S=h,C=_,b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    groupFocus: false,
    disabled: false,
    fullWidth: false
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<ControlGroup {...args}>
  {children}
</ControlGroup>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <ControlGroup {...args}>
        <Input placeholder="Input" disabled={args.disabled} />
        <Input placeholder="Input" disabled={args.disabled} />
      </ControlGroup>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`GroupFocusStory`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`CombinationsStory`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`DisabledStory`,...C.parameters?.docs?.source}}},w=[`Demo`,`GroupFocus`,`Combinations`,`Disabled`]}))();export{S as Combinations,b as Demo,C as Disabled,x as GroupFocus,w as __namedExportsOrder,y as default};