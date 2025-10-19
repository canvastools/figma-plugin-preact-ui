import{u as e}from"./hooks.module-Dxk9uxGs.js";import{f as w}from"./index-BWINGljf.js";import{M as n}from"./MenuItem-CUmKU8YF.js";import{M as s}from"./MenuContainer-x2qcv_BJ.js";import{I as t}from"./Icon-Btq4UltS.js";import{a as I,b as C}from"./ai-DGSOXsBb.js";import{l as x}from"./link-Bngbaf4L.js";import{T as P}from"./Text-C438qO9S.js";import{B as N}from"./Badge-DPBljnKj.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";const j={title:"Components/MenuItem",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Used within &lt;MenuContainer/&gt;."}}},argTypes:{className:{control:{type:"text"}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1},table:{type:{summary:"boolean"}}},prefix:{control:{disable:!0},description:"Element inserted before children.",table:{type:{summary:"JSX.Element"}}},suffix:{control:{disable:!0},description:"Element inserted after children.",table:{type:{summary:"JSX.Element"}}},children:{control:{disable:!0},table:{type:{summary:"JSX.Element"}}},reducedPaddingRight:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Indicates if the item has reduced padding on the right. For pixel perfect vertical alignment of the chevron for nested menus.",table:{type:{summary:"boolean"}}},onClick:{control:{disable:!0},description:"Callback when the item is clicked.",table:{type:{summary:"({ event: MouseEvent }) => void"}}}}},r={tags:["!autodocs"],args:{className:"",disabled:!1,reducedPaddingRight:!1,onClick:w()},parameters:{viewport:{defaultViewport:"large"}},render:y=>e("div",{className:"sb-column sb-width-full",children:e(s,{width:208,children:e(n,{...y,children:"Menu Item"})})})},i={parameters:{viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(s,{width:208,children:e(n,{disabled:!0,children:"Menu Item"})})})},a={parameters:{viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(s,{width:208,children:[e(n,{prefix:e(t,{glyph:I,size:16,intent:"neutral-inverted-fixed",interactive:!0}),children:"Menu Item"}),e(n,{prefix:e(t,{glyph:C,size:16,intent:"neutral-inverted-fixed",interactive:!0}),children:"Menu Item"}),e(n,{disabled:!0,prefix:e(t,{glyph:x,size:16,intent:"neutral-inverted-fixed",interactive:!0,disabled:!0}),children:"Menu Item"})]})})},d={parameters:{viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(s,{width:208,children:[e(n,{reducedPaddingRight:!0,suffix:e(P,{intent:"neutral-inverted-fixed",intentModifiers:"secondary",children:"Action"}),children:"Menu Item"}),e(n,{reducedPaddingRight:!0,suffix:e(t,{glyph:I,size:16,intent:"neutral-inverted-fixed",interactive:!0}),children:"Menu Item"}),e(n,{reducedPaddingRight:!0,suffix:e(N,{intent:"brand",children:"Badge"}),children:"Menu Item"}),e(n,{disabled:!0,reducedPaddingRight:!0,suffix:e(t,{glyph:x,size:16,intent:"neutral-inverted-fixed",interactive:!0,disabled:!0}),children:"Menu Item"})]})})};var l,u,o;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    disabled: false,
    reducedPaddingRight: false,
    onClick: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItem {...args}>Menu Item</MenuItem>
      </MenuContainer>
    </div>
}`,...(o=(u=r.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};var m,c,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItem disabled>Menu Item</MenuItem>
      </MenuContainer>
    </div>
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var f,h,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItem prefix={<Icon glyph={aiGlyph} size={16} intent="neutral-inverted-fixed" interactive />}>
          Menu Item
        </MenuItem>
        <MenuItem prefix={<Icon glyph={adjustGlyph} size={16} intent="neutral-inverted-fixed" interactive />}>
          Menu Item
        </MenuItem>
        <MenuItem disabled prefix={<Icon glyph={linkGlyph} size={16} intent="neutral-inverted-fixed" interactive disabled />}>
          Menu Item
        </MenuItem>
      </MenuContainer>
    </div>
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var M,b,v;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItem reducedPaddingRight suffix={<Text intent="neutral-inverted-fixed" intentModifiers="secondary">
              Action
            </Text>}>
          Menu Item
        </MenuItem>
        <MenuItem reducedPaddingRight suffix={<Icon glyph={aiGlyph} size={16} intent="neutral-inverted-fixed" interactive />}>
          Menu Item
        </MenuItem>
        <MenuItem reducedPaddingRight suffix={<Badge intent="brand">Badge</Badge>}>
          Menu Item
        </MenuItem>
        <MenuItem disabled reducedPaddingRight suffix={<Icon glyph={linkGlyph} size={16} intent="neutral-inverted-fixed" interactive disabled />}>
          Menu Item
        </MenuItem>
      </MenuContainer>
    </div>
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const A=["Demo","Disabled","Prefix","Suffix"];export{r as Demo,i as Disabled,a as Prefix,d as Suffix,A as __namedExportsOrder,j as default};
