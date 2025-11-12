import{u as e}from"./hooks.module-Dxk9uxGs.js";import{M as a}from"./MenuDivider-Bo3vdwZN.js";import{M as d}from"./MenuContainer-JAFlFUYZ.js";import{M as n}from"./MenuItem-DVTWg9so.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";import"./Text-C438qO9S.js";const b={title:"Components/MenuDivider",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Used within &lt;MenuContainer/&gt;."}}},argTypes:{className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["full","inset"],defaultValue:{summary:"full"}}}},t={tags:["!autodocs"],args:{className:"",variant:"full"},parameters:{viewport:{defaultViewport:"large"}},render:c=>e("div",{className:"sb-column sb-width-full",children:e(d,{width:208,children:[e(n,{children:"Menu Item"}),e(n,{children:"Menu Item"}),e(a,{...c}),e(n,{children:"Menu Item"}),e(n,{children:"Menu Item"})]})})},r={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(d,{width:208,children:[e(n,{children:"Full divider below"}),e(a,{variant:"full"}),e(n,{children:"Menu Item"}),e(a,{variant:"inset"}),e(n,{children:"Inset divider above"})]})})};var i,o,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    variant: "full"
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item</MenuItem>
        <MenuDivider {...args} />
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item</MenuItem>
      </MenuContainer>
    </div>
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var u,m,l;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItem>Full divider below</MenuItem>
        <MenuDivider variant="full" />
        <MenuItem>Menu Item</MenuItem>
        <MenuDivider variant="inset" />
        <MenuItem>Inset divider above</MenuItem>
      </MenuContainer>
    </div>
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const C=["Demo","Variant"];export{t as Demo,r as Variant,C as __namedExportsOrder,b as default};
