import{u as n}from"./hooks.module-DDuEt2mE.js";import{C as s}from"./Code-Albiw4F7.js";import"./preact.module-D68vdB8i.js";import"./typedForwardRef-eUJP59ez.js";import"./compat.module-AmaJGl25.js";const p={title:"Components/Code",component:s,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["inline","block"],defaultValue:{summary:"inline"}},children:{control:{type:"text"},description:"<strong>*</strong>"}}},e={args:{id:void 0,className:"",variant:"inline",children:"Hello, world!"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Code {...args}>{children}</Code>
`}}},render:r=>n("div",{className:"sb-column sb-width-full",children:n(s,{...r,children:r.children})})};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    variant: 'inline',
    children: 'Hello, world!'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<Code {...args}>{children}</Code>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <Code {...args}>
        {/* @ts-expect-error - Storybook types hack */}
        {args.children}
      </Code>
    </div>
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const u=["Demo"];export{e as Demo,u as __namedExportsOrder,p as default};
