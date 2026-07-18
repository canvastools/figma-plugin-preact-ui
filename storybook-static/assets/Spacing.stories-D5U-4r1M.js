import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-XYsEgyrh.js";import{t as r}from"./Avatar-BfrmYbD8.js";import{a as i,t as a}from"./themes-OugspNdM.js";import{_ as o,g as s,m as c,t as l}from"./src-fsSRAyCS.js";var u,d,f;e((()=>{a(),o(),l(),n(),u={title:`Layout/Spacing`,component:s,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},direction:{control:{type:`radio`},options:[`row`,`column`],table:{defaultValue:{summary:`column`}}},size:{control:{type:`radio`},description:`<strong>*</strong>`,options:[void 0,...Object.keys(i.variables).map(Number)]}}},d={args:{id:void 0,className:`sb-container`,direction:`column`,size:400},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Spacing
  size={400}
  {...args}
/>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,children:t(c,{direction:e.direction,children:[t(r,{children:`A`}),t(s,{size:e.size,...e}),t(r,{children:`B`}),t(s,{size:e.size,...e}),t(r,{children:`C`}),t(s,{size:e.size,...e})]})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Demo`]}))();export{d as Demo,f as __namedExportsOrder,u as default};