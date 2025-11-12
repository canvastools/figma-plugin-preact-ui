import{u as e,d as P}from"./hooks.module-Dxk9uxGs.js";import{f as R}from"./index-BWINGljf.js";import{M as t}from"./MenuItemOption-DaaOUhuO.js";import{M as n}from"./MenuContainer-JAFlFUYZ.js";import{S as T}from"./Stack-CNzGXmi4.js";import{T as C}from"./Text-C438qO9S.js";import{I as s}from"./Icon-Btq4UltS.js";import{c as u}from"./check-z8WFgJZW.js";import{B as k}from"./Badge-DPBljnKj.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";const q={title:"Components/MenuItemOption",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Used within &lt;MenuContainer/&gt;."}}},argTypes:{className:{control:{type:"text"}},defaultSelected:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Initial value for uncontrolled mode..",table:{type:{summary:"boolean"}}},selected:{control:{disable:!0},description:"Controlled selected state.",table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1},table:{type:{summary:"boolean"}}},reducedPaddingRight:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Indicates if the item has reduced padding on the right. For pixel perfect vertical alignment of the icons.",table:{type:{summary:"boolean"}}},suffix:{control:{disable:!0},description:"Element inserted after children.",table:{type:{summary:"JSX.Element"}}},children:{control:{disable:!0},table:{type:{summary:"JSX.Element"}}},onChange:{control:{disable:!0},table:{type:{summary:"({ event: MouseEvent; selected: boolean }) => void"}}}}},a={tags:["!autodocs"],args:{className:"",defaultSelected:!0,disabled:!1,onChange:R()},parameters:{viewport:{defaultViewport:"large"}},render:r=>e("div",{className:"sb-column sb-width-full",children:e(n,{width:208,children:e(t,{...r,children:"Menu Item Option"})})})},i={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(n,{width:208,children:e(t,{defaultSelected:!0,children:"Menu Item Option"})})})},d={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[r,N]=P(!0);return e("div",{className:"sb-column sb-width-full",children:e(T,{spacing:200,children:[e(C,{children:["Selected: ",r?"true":"false"]}),e(n,{width:208,children:e(t,{selected:r,onChange:V=>N(V.selected),children:"Menu Item Option"})})]})})}},o={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(n,{width:208,children:e(t,{defaultSelected:!0,disabled:!0,children:"Menu Item Option"})})})},l={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(n,{width:208,children:[e(t,{reducedPaddingRight:!0,suffix:e(C,{intent:"neutral-inverted-fixed",intentModifiers:"secondary",children:"Action"}),children:"Menu Item"}),e(t,{reducedPaddingRight:!0,defaultSelected:!0,suffix:e(s,{glyph:u,size:16,intent:"neutral-inverted-fixed",interactive:!0}),children:"Menu Item"}),e(t,{reducedPaddingRight:!0,suffix:e(k,{intent:"brand",children:"Badge"}),children:"Menu Item"}),e(t,{disabled:!0,reducedPaddingRight:!0,suffix:e(s,{glyph:u,size:16,intent:"neutral-inverted-fixed",interactive:!0,disabled:!0}),children:"Menu Item"})]})})};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,h,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
        <MenuItemOption defaultSelected={true}>Menu Item Option</MenuItemOption>
      </MenuContainer>
    </div>
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,M,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
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
}`,...(w=(M=d.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var v,I,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        <MenuItemOption defaultSelected disabled>
          Menu Item Option
        </MenuItemOption>
      </MenuContainer>
    </div>
}`,...(y=(I=o.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var S,O,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        <MenuItemOption reducedPaddingRight suffix={<Text intent="neutral-inverted-fixed" intentModifiers="secondary">
              Action
            </Text>}>
          Menu Item
        </MenuItemOption>
        <MenuItemOption reducedPaddingRight defaultSelected suffix={<Icon glyph={checkGlyph} size={16} intent="neutral-inverted-fixed" interactive />}>
          Menu Item
        </MenuItemOption>
        <MenuItemOption reducedPaddingRight suffix={<Badge intent="brand">Badge</Badge>}>
          Menu Item
        </MenuItemOption>
        <MenuItemOption disabled reducedPaddingRight suffix={<Icon glyph={checkGlyph} size={16} intent="neutral-inverted-fixed" interactive disabled />}>
          Menu Item
        </MenuItemOption>
      </MenuContainer>
    </div>
}`,...(x=(O=l.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};const H=["Demo","Uncontrolled","Controlled","Disabled","Suffix"];export{d as Controlled,a as Demo,o as Disabled,l as Suffix,i as Uncontrolled,H as __namedExportsOrder,q as default};
