import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-B_u_rUE0.js";import{B as r,Ht as i,Kt as a,Ut as o,t as s}from"./src-nP44HpfJ.js";var c,l=e((()=>{s(),o(),n(),c={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuDivider variant="full" />

<MenuDivider variant="inset" />
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[t(a,{width:208,children:[t(r,{children:`Full divider`}),t(i,{variant:`full`}),t(r,{children:`Full divider`})]}),t(a,{width:208,children:[t(r,{children:`Inset divider`}),t(i,{variant:`inset`}),t(r,{children:`Inset divider`})]})]})}})),u,d,f,p;e((()=>{l(),s(),o(),n(),u={title:`Components/MenuDivider`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"A component for creating dividers in a menu. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>."}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},variant:{control:{type:`radio`},options:[`full`,`inset`],table:{defaultValue:{summary:`full`}}}}},d={args:{id:void 0,className:``,variant:`full`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContainer>
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuDivider {...args} />
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuItemAction>Menu Item</MenuItemAction>
</MenuContainer>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,children:t(a,{width:208,children:[t(r,{children:`Menu Item`}),t(r,{children:`Menu Item`}),t(i,{...e}),t(r,{children:`Menu Item`}),t(r,{children:`Menu Item`})]})})},f=c,d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    variant: 'full'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<MenuContainer>
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuDivider {...args} />
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuItemAction>Menu Item</MenuItemAction>
</MenuContainer>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemAction>Menu Item</MenuItemAction>
        <MenuItemAction>Menu Item</MenuItemAction>
        <MenuDivider {...args} />
        <MenuItemAction>Menu Item</MenuItemAction>
        <MenuItemAction>Menu Item</MenuItemAction>
      </MenuContainer>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`VariantStory`,...f.parameters?.docs?.source}}},p=[`Demo`,`Variant`]}))();export{d as Demo,f as Variant,p as __namedExportsOrder,u as default};