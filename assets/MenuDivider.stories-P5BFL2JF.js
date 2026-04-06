import{u as e}from"./hooks.module-BMDhD8C6.js";import{M as i}from"./MenuDivider-BaQtBiWO.js";import{a as o}from"./MenuContainer-FDtenmfL.js";import{M as n}from"./MenuItemAction-t_OS5Us4.js";import"./preact.module-DhLccOoG.js";import"./typedForwardRef-BBQ-rOPo.js";import"./compat.module-BB5nNOI3.js";import"./Icon-CwUXZnq_.js";import"./chevronUp-Db5EIuox.js";import"./chevronDown-uTkeLA0V.js";import"./Text-DSWvyrh8.js";const M={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuDivider variant="full" />

<MenuDivider variant="inset" />
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-40",children:[e(o,{width:208,children:[e(n,{children:"Full divider"}),e(i,{variant:"full"}),e(n,{children:"Full divider"})]}),e(o,{width:208,children:[e(n,{children:"Inset divider"}),e(i,{variant:"inset"}),e(n,{children:"Inset divider"})]})]})},D={title:"Components/MenuDivider",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"A component for creating dividers in a menu. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["full","inset"],defaultValue:{summary:"full"}}}},t={tags:["!autodocs"],args:{id:void 0,className:"",variant:"full"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuContainer>
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuDivider {...args} />
  <MenuItemAction>Menu Item</MenuItemAction>
  <MenuItemAction>Menu Item</MenuItemAction>
</MenuContainer>
`}}},render:l=>e("div",{className:"sb-column sb-width-full",children:e(o,{width:208,children:[e(n,{children:"Menu Item"}),e(n,{children:"Menu Item"}),e(i,{...l}),e(n,{children:"Menu Item"}),e(n,{children:"Menu Item"})]})})},r=M;var a,u,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['!autodocs'],
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
        language: 'tsx',
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
}`,...(s=(u=t.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"VariantStory",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const V=["Demo","Variant"];export{t as Demo,r as Variant,V as __namedExportsOrder,D as default};
