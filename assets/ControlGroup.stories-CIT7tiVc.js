import{u as o}from"./hooks.module-CGIakYml.js";import{C as e}from"./ControlGroup-V_YVwwkQ.js";import{I as t}from"./Input-Dl12Gun6.js";import{B as r}from"./Button-DcofP-ls.js";import{B as n}from"./ButtonIcon-DlAG9zaR.js";import{l}from"./link-DfxGSoUB.js";import{I as w}from"./Icon-tINMxteJ.js";import{c as v}from"./chevronDown-H9cucJds.js";import{T as F}from"./TimePicker-gYvtg01g.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./Text-9aeIDhQ2.js";import"./TooltipContext-C-9LO0ZZ.js";import"./TooltipContainer-BVa1RtHA.js";import"./index-DOWXaXUC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const S={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ControlGroup groupFocus>
  <Input />
  <Input />
  <Button>Button</Button>
</ControlGroup>
`}}},render:()=>o("div",{className:"sb-column sb-width-420 sb-gap-40",children:o(e,{groupFocus:!0,fullWidth:!0,children:[o(t,{placeholder:"Input"}),o(t,{placeholder:"Input"})]})})},x={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>o("div",{className:"sb-column sb-width-420 sb-gap-40",children:[o(e,{children:[o(r,{children:"Button"}),o(r,{children:"Button"}),o(r,{children:"Button"})]}),o(e,{children:[o(r,{children:"Button"}),o(r,{children:"Button"}),o(n,{icon:{glyph:l}})]}),o(e,{children:[o(n,{icon:{glyph:l}}),o(n,{icon:{glyph:l}}),o(n,{icon:{glyph:l}})]}),o(e,{groupFocus:!0,fullWidth:!0,children:[o(t,{placeholder:"Input"}),o(t,{placeholder:"Input"})]}),o(e,{groupFocus:!0,fullWidth:!0,children:[o(t,{placeholder:"Input"}),o(n,{intentModifier:"secondary",children:o(w,{glyph:v,intentModifier:"default"})})]}),o(e,{groupFocus:!0,fullWidth:!0,children:[o(t,{placeholder:"Input"}),o(F,{})]})]})},W={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>o("div",{className:"sb-column sb-width-420 sb-gap-40",children:[o(e,{disabled:!0,children:[o(r,{disabled:!0,children:"Button"}),o(r,{disabled:!0,children:"Button"}),o(r,{disabled:!0,children:"Button"})]}),o(e,{disabled:!0,children:[o(r,{disabled:!0,children:"Button"}),o(r,{disabled:!0,children:"Button"}),o(n,{icon:{glyph:l},disabled:!0})]}),o(e,{disabled:!0,children:[o(n,{icon:{glyph:l},disabled:!0}),o(n,{icon:{glyph:l},disabled:!0}),o(n,{icon:{glyph:l},disabled:!0})]}),o(e,{groupFocus:!0,fullWidth:!0,disabled:!0,children:[o(t,{placeholder:"Input",disabled:!0}),o(t,{placeholder:"Input",disabled:!0})]}),o(e,{groupFocus:!0,fullWidth:!0,disabled:!0,children:[o(t,{placeholder:"Input",disabled:!0}),o(n,{intentModifier:"secondary",disabled:!0,children:o(w,{glyph:v,intentModifier:"default",disabled:!0})})]}),o(e,{groupFocus:!0,fullWidth:!0,disabled:!0,children:[o(t,{placeholder:"Input",disabled:!0}),o(F,{disabled:!0})]})]})},L={title:"Components/ControlGroup",component:e,tags:["autodocs"],parameters:{docs:{description:{component:'A wrapper component that groups multiple controls together and set `grouped` property on them.<br/>  Supported controls: <a href="/docs/components-button--docs">`<Button/>`</a>, <a href="/docs/components-buttonicon--docs">`<ButtonIcon/>`</a>, <a href="/docs/components-buttonicontoggle--docs">`<ButtonIconToggle/>`</a>, <a href="/docs/components-input--docs">`<Input/>`</a>, <a href="/docs/components-select--docs">`<Select/>`</a>'}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},groupFocus:{control:{type:"boolean"},defaultValue:{summary:!1}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},fullWidth:{control:{type:"boolean"},defaultValue:{summary:!1}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},s={tags:["!autodocs"],args:{id:void 0,className:"",groupFocus:!1,disabled:!1,fullWidth:!1},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ControlGroup {...args}>
  {children}
</ControlGroup>
`}}},render:i=>o("div",{className:"sb-column sb-width-full",children:o(e,{...i,children:[o(t,{placeholder:"Input",disabled:i.disabled}),o(t,{placeholder:"Input",disabled:i.disabled})]})})},d=S,u=x,a=W;var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['!autodocs'],
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
        language: 'tsx',
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
        {/* @ts-expect-error Storybook typing issue */}
        <Input placeholder="Input" disabled={args.disabled} />
        {/* @ts-expect-error Storybook typing issue */}
        <Input placeholder="Input" disabled={args.disabled} />
      </ControlGroup>
    </div>
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,b,g;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:"GroupFocusStory",...(g=(b=d.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,y,B;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:"CombinationsStory",...(B=(y=u.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var I,C,G;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:"DisabledStory",...(G=(C=a.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};const Q=["Demo","GroupFocus","Combinations","Disabled"];export{u as Combinations,s as Demo,a as Disabled,d as GroupFocus,Q as __namedExportsOrder,L as default};
