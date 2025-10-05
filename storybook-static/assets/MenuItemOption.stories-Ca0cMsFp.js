import{u as e,d as V}from"./hooks.module-Dxk9uxGs.js";import{f as P}from"./index-BWINGljf.js";import{M as t}from"./MenuItemOption-V-369bCS.js";import{M as n}from"./MenuContainer-x2qcv_BJ.js";import{S as R}from"./Stack-CNzGXmi4.js";import{T as x}from"./Text-C438qO9S.js";import{I as s}from"./Icon-Btq4UltS.js";import{B as T}from"./Badge-DPBljnKj.js";import{a as B}from"./ai-DHHkDKoh.js";import{l as k}from"./link-Bngbaf4L.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";import"./check-z8WFgJZW.js";const L={title:"Components/MenuItemOption",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Used within &lt;MenuContainer/&gt;."}}},argTypes:{className:{control:{type:"text"}},defaultSelected:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Initial value for uncontrolled mode..",table:{type:{summary:"boolean"}}},selected:{control:{disable:!0},description:"Controlled selected state.",table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1},table:{type:{summary:"boolean"}}},reducedPaddingRight:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Indicates if the item has reduced padding on the right. For pixel perfect vertical alignment of the icons.",table:{type:{summary:"boolean"}}},suffix:{control:{disable:!0},description:"Element inserted after children.",table:{type:{summary:"JSX.Element"}}},children:{control:{disable:!0},table:{type:{summary:"JSX.Element"}}},onChange:{control:{disable:!0},table:{type:{summary:"({ event: MouseEvent; selected: boolean }) => void"}}}}},a={tags:["!autodocs"],args:{className:"",defaultSelected:!0,disabled:!1,onChange:P()},parameters:{viewport:{defaultViewport:"large"}},render:r=>e("div",{className:"sb-column sb-width-full",children:e(n,{width:208,children:e(t,{...r,children:"Menu Item Option"})})})},i={parameters:{viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(n,{width:208,children:e(t,{defaultSelected:!0,children:"Menu Item Option"})})})},d={parameters:{viewport:{defaultViewport:"large"}},render:()=>{const[r,C]=V(!0);return e("div",{className:"sb-column sb-width-full",children:e(R,{spacing:200,children:[e(x,{children:["Selected: ",r?"true":"false"]}),e(n,{width:208,children:e(t,{selected:r,onChange:N=>C(N.selected),children:"Menu Item Option"})})]})})}},o={parameters:{viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(n,{width:208,children:e(t,{defaultSelected:!0,disabled:!0,children:"Menu Item Option"})})})},l={parameters:{viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(n,{width:208,children:[e(t,{reducedPaddingRight:!0,suffix:e(x,{intent:"neutral-inverted-fixed",intentModifiers:"secondary",children:"Action"}),children:"Menu Item"}),e(t,{reducedPaddingRight:!0,defaultSelected:!0,suffix:e(s,{glyph:B,size:16,intent:"neutral-inverted-fixed",interactive:!0}),children:"Menu Item"}),e(t,{reducedPaddingRight:!0,suffix:e(T,{intent:"brand",children:"Badge"}),children:"Menu Item"}),e(t,{disabled:!0,reducedPaddingRight:!0,suffix:e(s,{glyph:k,size:16,intent:"neutral-inverted-fixed",interactive:!0,disabled:!0}),children:"Menu Item"})]})})};var u,c,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    defaultSelected: true,
    disabled: false,
    onChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemOption {...args}>Menu Item Option</MenuItemOption>
      </MenuContainer>
    </div>
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,f,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemOption defaultSelected={true}>Menu Item Option</MenuItemOption>
      </MenuContainer>
    </div>
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,b,M;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [selected, setSelected] = useState(true);
    return <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Text>Selected: {selected ? "true" : "false"}</Text>
          <MenuContainer width={208}>
            <MenuItemOption selected={selected} onChange={e => setSelected(e.selected)}>
              Menu Item Option
            </MenuItemOption>
          </MenuContainer>
        </Stack>
      </div>;
  }
}`,...(M=(b=d.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var w,v,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemOption defaultSelected disabled>
          Menu Item Option
        </MenuItemOption>
      </MenuContainer>
    </div>
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var y,S,O;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemOption reducedPaddingRight suffix={<Text intent="neutral-inverted-fixed" intentModifiers="secondary">
              Action
            </Text>}>
          Menu Item
        </MenuItemOption>
        <MenuItemOption reducedPaddingRight defaultSelected suffix={<Icon glyph={glyphs.ai} size={16} intent="neutral-inverted-fixed" interactive />}>
          Menu Item
        </MenuItemOption>
        <MenuItemOption reducedPaddingRight suffix={<Badge intent="brand">Badge</Badge>}>
          Menu Item
        </MenuItemOption>
        <MenuItemOption disabled reducedPaddingRight suffix={<Icon glyph={glyphs.link} size={16} intent="neutral-inverted-fixed" interactive disabled />}>
          Menu Item
        </MenuItemOption>
      </MenuContainer>
    </div>
}`,...(O=(S=l.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};const Q=["Demo","Uncontrolled","Controlled","Disabled","Suffix"];export{d as Controlled,a as Demo,o as Disabled,l as Suffix,i as Uncontrolled,Q as __namedExportsOrder,L as default};
