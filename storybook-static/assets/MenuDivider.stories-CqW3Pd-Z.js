import{u as e}from"./hooks.module-Dxk9uxGs.js";import{M as a}from"./MenuDivider-DXujcc4a.js";import{M as i}from"./MenuContainer-x2qcv_BJ.js";import{M as n}from"./MenuItem-CUmKU8YF.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";import"./Text-C438qO9S.js";const g={title:"Components/MenuDivider",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Used within &lt;MenuContainer/&gt;."}}},argTypes:{className:{control:{type:"text"}}}},t={args:{className:""},parameters:{viewport:{defaultViewport:"large"}},render:s=>e("div",{className:"sb-column sb-width-full",children:e(i,{width:208,children:[e(n,{children:"Menu Item"}),e(n,{children:"Menu Item"}),e(a,{...s}),e(n,{children:"Menu Item"}),e(n,{children:"Menu Item"})]})})};var r,m,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    className: ""
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
}`,...(o=(m=t.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};const f=["Demo"];export{t as Demo,f as __namedExportsOrder,g as default};
