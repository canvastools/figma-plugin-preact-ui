import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-B_u_rUE0.js";import{t as r}from"./Text-Bf8YN4P6.js";import{M as i,N as a,P as o,b as s,t as c}from"./src-nP44HpfJ.js";var l,u,d,f;e((()=>{a(),c(),n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/PopoverHeader`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"A header for the popover component. Used inside <a href='/docs/components-popovercontainer--docs'>`<PopoverContainer/>`</a> component."}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},children:{control:{type:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},onClose:{table:{type:{summary:`() => void`}}}}},d={args:{id:void 0,className:``,children:`Header`,onClose:l()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<PopoverContainer>
  <PopoverHeader {...args}>{children}</PopoverHeader>
</PopoverContainer>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-300`,children:t(o,{children:[t(i,{...e,children:e.children}),t(s,{children:t(r,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})]})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Demo`]}))();export{d as Demo,f as __namedExportsOrder,u as default};