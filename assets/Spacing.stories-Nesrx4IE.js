import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{n as r,t as i}from"./Avatar-BJOxxNox.js";import{n as a,t as o}from"./spacing-DfzOVIyD.js";import{n as s,t as c}from"./Spacing-ChjHmQe4.js";import{n as l,t as u}from"./Stack-CRI7JcwR.js";var d,f,p;function m(){return(m=e((()=>{o(),s(),r(),l(),n(),d={title:`Layout/Spacing`,component:c,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},direction:{control:{type:`radio`},options:[`row`,`column`],table:{defaultValue:{summary:`column`}}},size:{control:{type:`radio`},description:`<strong>*</strong>`,options:[void 0,...Object.keys(a.variables).map(Number)]}}},f={args:{id:void 0,className:`sb-container`,direction:`column`,size:400},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Spacing
  size={400}
  {...args}
/>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,children:t(u,{direction:e.direction,children:[t(i,{children:`A`}),t(c,{size:e.size,...e}),t(i,{children:`B`}),t(c,{size:e.size,...e}),t(i,{children:`C`}),t(c,{size:e.size,...e})]})})},p=[`Demo`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Demo,p as __namedExportsOrder,d as default};