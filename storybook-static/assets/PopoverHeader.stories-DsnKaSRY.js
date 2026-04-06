import{u as e}from"./hooks.module-CGIakYml.js";import{f as s}from"./index-BWINGljf.js";import{P as t}from"./PopoverHeader-DffQk9YT.js";import{P as m}from"./PopoverContainer-CpOyVfnV.js";import{S as p}from"./Section-CXCQgqof.js";import{T as d}from"./Text-9aeIDhQ2.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./ButtonIcon-CqEEORZE.js";import"./Icon-DYEerEJN.js";import"./TooltipContext-DGdoB1MK.js";import"./TooltipContainer-BVa1RtHA.js";import"./close-COe5zGbS.js";const w={title:"Components/PopoverHeader",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A header for the popover component. Used inside <a href='/docs/components-popovercontainer--docs'>`<PopoverContainer/>`</a> component."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},onClose:{table:{type:{summary:"() => void"}}}}},o={args:{id:void 0,className:"",children:"Header",onClose:s()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<PopoverContainer>
  <PopoverHeader {...args}>{children}</PopoverHeader>
</PopoverContainer>
`}}},render:r=>e("div",{className:"sb-column sb-width-300",children:e(m,{children:[e(t,{...r,children:r.children}),e(p,{children:e(d,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})]})})};var n,i,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    children: 'Header',
    onClose: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<PopoverContainer>
  <PopoverHeader {...args}>{children}</PopoverHeader>
</PopoverContainer>
\`
      }
    }
  },
  render: args => {
    return <div className="sb-column sb-width-300">
        <PopoverContainer>
          {/* @ts-expect-error Storybook spread */}
          <PopoverHeader {...args}>{args.children}</PopoverHeader>
          <Section>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus,
              ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique
              magnam aspernatur esse dignissimos molestiae.
            </Text>
          </Section>
        </PopoverContainer>
      </div>;
  }
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const S=["Demo"];export{o as Demo,S as __namedExportsOrder,w as default};
