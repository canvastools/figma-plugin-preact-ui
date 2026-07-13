import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-B_u_rUE0.js";import{t as r}from"./Avatar-DetidImo.js";import{a as i,t as a}from"./themes-CIcOshzH.js";import{h as o,m as s,t as c}from"./src-nP44HpfJ.js";var l,u,d;e((()=>{a(),o(),c(),n(),l={title:`Layout/Stack`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`A wrapper component that aligns components inside.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},direction:{control:{type:`radio`},options:[`row`,`row-reverse`,`column`,`column-reverse`],table:{defaultValue:{summary:`column`}}},spacing:{control:{type:`radio`},options:[void 0,...Object.keys(i.variables).map(Number)]},x:{control:{type:`radio`},options:[`start`,`center`,`end`],table:{defaultValue:{summary:`start`}},description:`Horizontal alignment of the children.`},y:{control:{type:`radio`},options:[`start`,`center`,`end`],table:{defaultValue:{summary:`start`}},description:`Vertical alignment of the children.`},fullHeight:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},fullWidth:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},u={args:{id:void 0,className:`sb-container`,direction:`column`,spacing:400,x:`start`,y:`start`,fullHeight:!1},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Stack {...args}>{children}</Stack>`}}},render:e=>t(`div`,{className:`sb-column sb-width-full sb-height-300`,children:t(s,{...e,children:[t(r,{children:`A`}),t(r,{children:`B`}),t(r,{children:`C`})]})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: 'sb-container',
    direction: 'column',
    spacing: 400,
    x: 'start',
    y: 'start',
    fullHeight: false
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<Stack {...args}>{children}</Stack>\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full sb-height-300">
      <Stack {...args}>
        <Avatar>A</Avatar>
        <Avatar>B</Avatar>
        <Avatar>C</Avatar>
      </Stack>
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Demo`]}))();export{u as Demo,d as __namedExportsOrder,l as default};