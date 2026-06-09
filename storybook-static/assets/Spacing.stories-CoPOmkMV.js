import{u as e}from"./hooks.module-CGIakYml.js";import{S as n}from"./Spacing-BIWVSKgB.js";import{s as c}from"./spacing-CSiBgOQq.js";import{S as p}from"./Stack-k8IcfDhK.js";import{A as t}from"./Avatar-DctN3CVI.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./Text-9aeIDhQ2.js";const y={title:"Layout/Spacing",component:n,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},direction:{control:{type:"radio"},options:["row","column"],defaultValue:{summary:"column"}},size:{control:{type:"radio"},description:"<strong>*</strong>",options:[void 0,...Object.keys(c.variables).map(Number)]}}},o={args:{id:void 0,className:"sb-container",direction:"column",size:400},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Spacing
  size={400}
  {...args}
/>
`}}},render:r=>e("div",{className:"sb-column sb-width-full",children:e(p,{direction:r.direction,children:[e(t,{children:"A"}),e(n,{size:r.size,...r}),e(t,{children:"B"}),e(n,{size:r.size,...r}),e(t,{children:"C"}),e(n,{size:r.size,...r})]})})};var a,s,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: 'sb-container',
    direction: 'column',
    size: 400
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<Spacing
  size={400}
  {...args}
/>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      {/* @ts-expect-error Storybook spread */}
      <Stack direction={args.direction}>
        <Avatar>A</Avatar>
        {/* @ts-expect-error Storybook spread */}
        <Spacing size={args.size} {...args} />

        <Avatar>B</Avatar>
        {/* @ts-expect-error Storybook spread */}
        <Spacing size={args.size} {...args} />

        <Avatar>C</Avatar>
        {/* @ts-expect-error Storybook spread */}
        <Spacing size={args.size} {...args} />
      </Stack>
    </div>
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const f=["Demo"];export{o as Demo,f as __namedExportsOrder,y as default};
