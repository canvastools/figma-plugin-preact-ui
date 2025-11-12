import{u as e}from"./hooks.module-Dxk9uxGs.js";import{f as w}from"./index-BWINGljf.js";import{M as n}from"./MenuItem-DVTWg9so.js";import{M as s}from"./MenuContainer-JAFlFUYZ.js";import{I as t}from"./Icon-Btq4UltS.js";import{a as I}from"./ai-DHHkDKoh.js";import{a as C}from"./adjust-DIhYuODF.js";import{l as x}from"./link-rAUwSha6.js";import{T as P}from"./Text-C438qO9S.js";import{B as N}from"./Badge-DPBljnKj.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";const A={title:"Components/MenuItem",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Used within &lt;MenuContainer/&gt;."}}},argTypes:{className:{control:{type:"text"}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1},table:{type:{summary:"boolean"}}},prefix:{control:{disable:!0},description:"Element inserted before children.",table:{type:{summary:"JSX.Element"}}},suffix:{control:{disable:!0},description:"Element inserted after children.",table:{type:{summary:"JSX.Element"}}},children:{control:{disable:!0},table:{type:{summary:"JSX.Element"}}},reducedPaddingRight:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Indicates if the item has reduced padding on the right. For pixel perfect vertical alignment of the chevron for nested menus.",table:{type:{summary:"boolean"}}},onClick:{control:{disable:!0},description:"Callback when the item is clicked.",table:{type:{summary:"({ event: MouseEvent }) => void"}}}}},r={tags:["!autodocs"],args:{className:"",disabled:!1,reducedPaddingRight:!1,onClick:w()},parameters:{viewport:{defaultViewport:"large"}},render:y=>e("div",{className:"sb-column sb-width-full",children:e(s,{width:208,children:e(n,{...y,children:"Menu Item"})})})},i={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(s,{width:208,children:e(n,{disabled:!0,children:"Menu Item"})})})},a={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(s,{width:208,children:[e(n,{prefix:e(t,{glyph:I,size:16,intent:"neutral-inverted-fixed",interactive:!0}),children:"Menu Item"}),e(n,{prefix:e(t,{glyph:C,size:16,intent:"neutral-inverted-fixed",interactive:!0}),children:"Menu Item"}),e(n,{disabled:!0,prefix:e(t,{glyph:x,size:16,intent:"neutral-inverted-fixed",interactive:!0,disabled:!0}),children:"Menu Item"})]})})},d={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(s,{width:208,children:[e(n,{reducedPaddingRight:!0,suffix:e(P,{intent:"neutral-inverted-fixed",intentModifiers:"secondary",children:"Action"}),children:"Menu Item"}),e(n,{reducedPaddingRight:!0,suffix:e(t,{glyph:I,size:16,intent:"neutral-inverted-fixed",interactive:!0}),children:"Menu Item"}),e(n,{reducedPaddingRight:!0,suffix:e(N,{intent:"brand",children:"Badge"}),children:"Menu Item"}),e(n,{disabled:!0,reducedPaddingRight:!0,suffix:e(t,{glyph:x,size:16,intent:"neutral-inverted-fixed",interactive:!0,disabled:!0}),children:"Menu Item"})]})})};var l,o,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(o=r.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var c,m,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
        <MenuItem disabled>Menu Item</MenuItem>
      </MenuContainer>
    </div>
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,h,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,M,v;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(M=d.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};const _=["Demo","Disabled","Prefix","Suffix"];export{r as Demo,i as Disabled,a as Prefix,d as Suffix,_ as __namedExportsOrder,A as default};
