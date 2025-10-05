import{u as e,d,A as p}from"./hooks.module-Dxk9uxGs.js";import{M as s}from"./MenuContainer-x2qcv_BJ.js";import{M as t}from"./MenuItem-CUmKU8YF.js";import{M as k}from"./MenuDivider-DXujcc4a.js";import{M as l}from"./MenuItemOption-V-369bCS.js";import{B as b}from"./Button-C22TyVLn.js";import{O as f}from"./OverlayPositioner-BhbeHsFH.js";import{I as S}from"./Icon-Btq4UltS.js";import{c as P}from"./chevronRight-DRcRefJO.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";import"./Text-C438qO9S.js";import"./check-z8WFgJZW.js";const J={title:"Components/MenuContainer",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that displays menu items. Used within &lt;OverlayPositioner/&gt;."}}},argTypes:{className:{control:{type:"text"}},width:{control:{type:"number"},defaultValue:{summary:"auto"},table:{type:{summary:"number | 'auto'"}}},height:{control:{type:"number"},defaultValue:{summary:"auto"},table:{type:{summary:"number | 'auto'"}}},children:{control:{disable:!0},description:"Usually &lt;MenuItem/&gt;, &lt;MenuItemOption/&gt;, &lt;MenuDivider/&gt; components.",table:{type:{summary:"JSX.Element"}}}}},i={tags:["!autodocs"],args:{className:"",width:208,height:200},parameters:{viewport:{defaultViewport:"large"}},render:o=>e("div",{className:"sb-column sb-width-full",children:e(s,{...o,children:[e(t,{children:"Menu Item"}),e(t,{children:"Menu Item"}),e(k,{}),e(l,{selected:!0,children:"Option"}),e(l,{selected:!1,children:"Option"}),e(l,{selected:!1,children:"Option"}),e(l,{selected:!1,children:"Option"})]})})},u={parameters:{viewport:{defaultViewport:"large"}},render:()=>{const[o,n]=d(!1),a=p(null);return e("div",{className:"sb-column sb-width-full",children:[e(b,{ref:a,onClick:()=>n(r=>!r),children:"Show Menu"}),e(f,{anchorRef:a,paddingY:4,open:o,onClose:()=>n(!1),children:e(s,{children:[e(t,{onClick:()=>n(!1),children:"Menu Item"}),e(t,{onClick:()=>n(!1),children:"Menu Item"})]})})]})}},c={parameters:{viewport:{defaultViewport:"large"}},render:()=>{const[o,n]=d(!1),[a,r]=d(!1),M=p(null),h=p(null);return e("div",{className:"sb-column sb-width-full",children:[e(b,{ref:M,onClick:()=>n(m=>!m),children:"Show Menu"}),e(f,{anchorRef:M,open:o,onClose:()=>n(!1),children:e(s,{children:[e(t,{onClick:()=>n(!1),children:"Menu Item"}),e(t,{ref:h,reducedPaddingRight:!0,onClick:()=>r(m=>!m),suffix:e(S,{glyph:P,size:16,intent:"neutral-inverted-fixed",interactive:!0}),children:"Menu Item"}),e(f,{anchorRef:h,open:a,placement:"right-top",onClose:()=>r(!1),paddingX:4,children:e(s,{children:[e(t,{onClick:()=>r(!1),children:"Nested Menu Item"}),e(t,{onClick:()=>r(!1),children:"Nested Menu Item"})]})}),e(t,{onClick:()=>n(!1),children:"Menu Item"})]})})]})}};var I,O,g;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    width: 208,
    height: 200
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <MenuContainer {...args}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item</MenuItem>
        <MenuDivider />
        <MenuItemOption selected>Option</MenuItemOption>
        <MenuItemOption selected={false}>Option</MenuItemOption>
        <MenuItemOption selected={false}>Option</MenuItemOption>
        <MenuItemOption selected={false}>Option</MenuItemOption>
      </MenuContainer>
    </div>
}`,...(g=(O=i.parameters)==null?void 0:O.docs)==null?void 0:g.source}}};var v,C,N;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    return <div className="sb-column sb-width-full">
        <Button ref={anchorRef} onClick={() => setOpen(v => !v)}>
          Show Menu
        </Button>
        <OverlayPositioner anchorRef={anchorRef} paddingY={4} open={open} onClose={() => setOpen(false)}>
          <MenuContainer>
            <MenuItem onClick={() => setOpen(false)}>Menu Item</MenuItem>
            <MenuItem onClick={() => setOpen(false)}>Menu Item</MenuItem>
          </MenuContainer>
        </OverlayPositioner>
      </div>;
  }
}`,...(N=(C=u.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var w,y,R;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [openNested, setOpenNested] = useState(false);
    const anchorRefTrigger = useRef<HTMLButtonElement | null>(null);
    const anchorRefMenuNested = useRef<HTMLDivElement | null>(null);
    return <div className="sb-column sb-width-full">
        <Button ref={anchorRefTrigger} onClick={() => setOpen(v => !v)}>
          Show Menu
        </Button>
        <OverlayPositioner anchorRef={anchorRefTrigger} open={open} onClose={() => setOpen(false)}>
          <MenuContainer>
            <MenuItem onClick={() => setOpen(false)}>Menu Item</MenuItem>
            <MenuItem ref={anchorRefMenuNested} reducedPaddingRight onClick={() => setOpenNested(v => !v)} suffix={<Icon glyph={glyphs.chevronRight} size={16} intent="neutral-inverted-fixed" interactive />}>
              Menu Item
            </MenuItem>
            <OverlayPositioner anchorRef={anchorRefMenuNested} open={openNested} placement="right-top" onClose={() => setOpenNested(false)} paddingX={4}>
              <MenuContainer>
                <MenuItem onClick={() => setOpenNested(false)}>
                  Nested Menu Item
                </MenuItem>
                <MenuItem onClick={() => setOpenNested(false)}>
                  Nested Menu Item
                </MenuItem>
              </MenuContainer>
            </OverlayPositioner>
            <MenuItem onClick={() => setOpen(false)}>Menu Item</MenuItem>
          </MenuContainer>
        </OverlayPositioner>
      </div>;
  }
}`,...(R=(y=c.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};const j=["Demo","OverlayMenu","NestedMenu"];export{i as Demo,c as NestedMenu,u as OverlayMenu,j as __namedExportsOrder,J as default};
