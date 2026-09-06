import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{n as r,t as i}from"./Avatar-BJOxxNox.js";import{n as a,t as o}from"./spacing-DfzOVIyD.js";import{n as s,t as c}from"./Stack-CRI7JcwR.js";var l,u,d;function f(){return(f=e((()=>{o(),s(),r(),n(),l={title:`Layout/Stack`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:`A wrapper component that aligns components inside.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},direction:{control:{type:`radio`},options:[`row`,`row-reverse`,`column`,`column-reverse`],table:{defaultValue:{summary:`column`}}},spacing:{control:{type:`radio`},options:[void 0,...Object.keys(a.variables).map(Number)]},x:{control:{type:`radio`},options:[`start`,`center`,`end`],table:{defaultValue:{summary:`start`}},description:`Horizontal alignment of the children.`},y:{control:{type:`radio`},options:[`start`,`center`,`end`],table:{defaultValue:{summary:`start`}},description:`Vertical alignment of the children.`},fullHeight:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},fullWidth:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},u={args:{id:void 0,className:`sb-container`,direction:`column`,spacing:400,x:`start`,y:`start`,fullHeight:!1},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Stack {...args}>{children}</Stack>`}}},render:e=>t(`div`,{className:`sb-column sb-width-full sb-height-300`,children:t(c,{...e,children:[t(i,{children:`A`}),t(i,{children:`B`}),t(i,{children:`C`})]})})},d=[`Demo`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Demo,d as __namedExportsOrder,l as default};