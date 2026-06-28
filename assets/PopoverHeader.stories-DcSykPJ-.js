import{u as e}from"./hooks.module-BOklADZz.js";import{f as s}from"./index-B4E_jmCM.js";import{P as t}from"./PopoverHeader-CBJ5UqEd.js";import{P as m}from"./PopoverContainer-p2Ivr2N_.js";import{S as p}from"./Section-MpxjUw2q.js";import{T as d}from"./Text-DWXnbeUo.js";import"./preact.module-BEcQExD3.js";import"./typedForwardRef-IM0ZXC4v.js";import"./compat.module-C06LZZ-F.js";import"./ButtonIcon-D68A8Iw5.js";import"./Icon-CUZDBV4V.js";import"./TooltipContext-AO-nQ0Om.js";import"./TooltipContainer-CxrP3vc5.js";import"./close-DPRulQ64.js";const w={title:"Components/PopoverHeader",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A header for the popover component. Used inside <a href='/docs/components-popovercontainer--docs'>`<PopoverContainer/>`</a> component."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},onClose:{table:{type:{summary:"() => void"}}}}},o={args:{id:void 0,className:"",children:"Header",onClose:s()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
