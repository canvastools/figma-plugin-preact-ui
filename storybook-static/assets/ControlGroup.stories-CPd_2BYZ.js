import{u as o}from"./hooks.module-CGIakYml.js";import{C as t}from"./ControlGroup-esvIR0ri.js";import{I as r}from"./Input-DEoZ9WJj.js";import{B as e}from"./Button-2yuwlxjW.js";import{B as n}from"./ButtonIcon-DRFFAPoT.js";import{l as s}from"./link-BEZi4mus.js";import{I as B}from"./Icon-DYEerEJN.js";import{c as y}from"./chevronDown-B_bnQDqi.js";import{T as C}from"./TimePicker-BcSZdMAB.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./Text-9aeIDhQ2.js";import"./TooltipContext-DJAjWLpJ.js";import"./TooltipContainer-BVa1RtHA.js";import"./index-DOWXaXUC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const G={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ControlGroup groupFocus>
  <Input />
  <Input />
  <Button>Button</Button>
</ControlGroup>
`}}},render:()=>o("div",{className:"sb-column sb-width-420 sb-gap-40",children:o(t,{groupFocus:!0,fullWidth:!0,children:[o(r,{placeholder:"Input"}),o(r,{placeholder:"Input"})]})})},w={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>o("div",{className:"sb-column sb-width-420 sb-gap-40",children:[o(t,{children:[o(e,{children:"Button"}),o(e,{children:"Button"}),o(e,{children:"Button"})]}),o(t,{children:[o(e,{children:"Button"}),o(e,{children:"Button"}),o(n,{icon:{glyph:s}})]}),o(t,{children:[o(n,{icon:{glyph:s}}),o(n,{icon:{glyph:s}}),o(n,{icon:{glyph:s}})]}),o(t,{groupFocus:!0,fullWidth:!0,children:[o(r,{placeholder:"Input"}),o(r,{placeholder:"Input"})]}),o(t,{groupFocus:!0,fullWidth:!0,children:[o(r,{placeholder:"Input"}),o(n,{intentModifier:"secondary",children:o(B,{glyph:y,intentModifier:"default"})})]}),o(t,{groupFocus:!0,fullWidth:!0,children:[o(r,{placeholder:"Input"}),o(C,{})]})]})},q={title:"Components/ControlGroup",component:t,tags:["autodocs"],parameters:{docs:{description:{component:'A wrapper component that groups multiple controls together and set `grouped` property on them.<br/>  Supported controls: <a href="/docs/components-button--docs">`<Button/>`</a>, <a href="/docs/components-buttonicon--docs">`<ButtonIcon/>`</a>, <a href="/docs/components-buttonicontoggle--docs">`<ButtonIconToggle/>`</a>, <a href="/docs/components-input--docs">`<Input/>`</a>, <a href="/docs/components-select--docs">`<Select/>`</a>'}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},groupFocus:{control:{type:"boolean"},defaultValue:{summary:!1}},fullWidth:{control:{type:"boolean"},defaultValue:{summary:!1}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},u={tags:["!autodocs"],args:{id:void 0,className:"",groupFocus:!1,fullWidth:!1},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ControlGroup {...args}>
  {children}
</ControlGroup>
`}}},render:b=>o("div",{className:"sb-column sb-width-full",children:o(t,{...b,children:[o(r,{placeholder:"Input"}),o(r,{placeholder:"Input"})]})})},a=G,c=w;var l,p,d;u.parameters={...u.parameters,docs:{...(l=u.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    groupFocus: false,
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
        <Input placeholder="Input" />
        <Input placeholder="Input" />
      </ControlGroup>
    </div>
}`,...(d=(p=u.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,m,h;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"GroupFocusStory",...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,f,I;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:"CombinationsStory",...(I=(f=c.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};const z=["Demo","GroupFocus","Combinations"];export{c as Combinations,u as Demo,a as GroupFocus,z as __namedExportsOrder,q as default};
