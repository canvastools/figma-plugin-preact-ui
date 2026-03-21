import{u as t}from"./hooks.module-CGIakYml.js";import{S as s}from"./Stack-k8IcfDhK.js";import{s as c}from"./spacing-DaHINeCs.js";import{A as a}from"./Avatar-DctN3CVI.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./Text-9aeIDhQ2.js";const y={title:"Layout/Stack",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that aligns components inside."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},direction:{control:{type:"radio"},options:["row","row-reverse","column","column-reverse"],defaultValue:{summary:"column"}},spacing:{control:{type:"radio"},options:[void 0,...Object.keys(c.variables).map(Number)]},x:{control:{type:"radio"},options:["start","center","end"],defaultValue:{summary:"start"},description:"Horizontal alignment of the children."},y:{control:{type:"radio"},options:["start","center","end"],defaultValue:{summary:"start"},description:"Vertical alignment of the children."},fullHeight:{control:{type:"boolean"},defaultValue:{summary:!1}},fullWidth:{control:{type:"boolean"},defaultValue:{summary:!1}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},e={args:{id:void 0,className:"sb-container",direction:"column",spacing:400,x:"start",y:"start",fullHeight:!1},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Stack {...args}>{children}</Stack>`}}},render:i=>t("div",{className:"sb-column sb-width-full sb-height-300",children:t(s,{...i,children:[t(a,{children:"A"}),t(a,{children:"B"}),t(a,{children:"C"})]})})};var r,n,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        language: 'tsx',
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const v=["Demo"];export{e as Demo,v as __namedExportsOrder,y as default};
