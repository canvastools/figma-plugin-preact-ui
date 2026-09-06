import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{n as r,t as i}from"./MenuContainer-mmwPsDY6.js";import{n as a,t as o}from"./MenuDivider-CppPeNf-.js";import{n as s,t as c}from"./MenuItemAction-B1sv30zB.js";var l;function u(){return(u=e((()=>{r(),s(),a(),n(),l={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuDivider variant="full" />

<MenuDivider variant="inset" />
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[t(i,{width:208,children:[t(c,{children:`Full divider`}),t(o,{variant:`full`}),t(c,{children:`Full divider`})]}),t(i,{width:208,children:[t(c,{children:`Inset divider`}),t(o,{variant:`inset`}),t(c,{children:`Inset divider`})]})]})}})))()}var d,f,p,m;function h(){return(h=e((()=>{u(),r(),s(),a(),n(),d={title:`Components/MenuDivider`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:"A component for creating dividers in a menu. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>."}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},variant:{control:{type:`radio`},options:[`full`,`inset`],table:{defaultValue:{summary:`full`}}}}},f={args:{id:void 0,className:``,variant:`full`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContainer>
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuDivider {...args} />
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuItemAction>Menu Item</MenuItemAction>
</MenuContainer>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,children:t(i,{width:208,children:[t(c,{children:`Menu Item`}),t(c,{children:`Menu Item`}),t(o,{...e}),t(c,{children:`Menu Item`}),t(c,{children:`Menu Item`})]})})},p=l,m=[`Demo`,`Variant`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`VariantStory`,...p.parameters?.docs?.source}}}})))()}h();export{f as Demo,p as Variant,m as __namedExportsOrder,d as default};