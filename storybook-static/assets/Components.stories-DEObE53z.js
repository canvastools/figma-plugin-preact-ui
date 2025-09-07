import{d as x,u as e}from"./hooks.module-Dxk9uxGs.js";import{Shape as Oe}from"./Avatar.stories-D4Wp9Dyq.js";import{Prefix as je}from"./Badge.stories-Y3vfhlnP.js";import{S as Fe,B as D}from"./Bar.stories-nvAiKHdI.js";import{Prefix as Ue}from"./Button.stories-4NK4_7Es.js";import{Intent as qe}from"./ButtonIcon.stories-CC1b-QJM.js";import{Intent as Je}from"./ButtonIconToggle.stories-X5ua9JhN.js";import{Checked as Ke}from"./Checkbox.stories-CoCxywnb.js";import{V as Qe,D as Xe}from"./Divider.stories-BslNg2qB.js";import{Glyphs as Ye}from"./Icon.stories-CECMbhi0.js";import{Prefix as Ze}from"./Input.stories-DdwIidSV.js";import{Demo as et}from"./ScrollContext.stories-B2mVk6ii.js";import{Demo as tt}from"./Section.stories-DZ3CVxEI.js";import{D as ot,S as rt}from"./Spacing.stories-AmXvTR8y.js";import{D as at,S as it}from"./Spinner.stories-B1FVTV9f.js";import{Demo as st}from"./Stack.stories-DQQWtWoi.js";import{Demo as Ge}from"./Tab.stories-BE9ebw21.js";import{Size as nt}from"./Text.stories-B8XyVeuz.js";import{D as ct,W as mt}from"./WindowResizer.stories-OurMSmFo.js";import{S as dt,a as lt,u as L}from"./ScrollContainer-CZIjtAYN.js";import{T as pt,a as A,b as ut,c as P}from"./TabPanel-BxaS1c0m.js";import{S as a}from"./Section-45ajfN6P.js";import{S as o}from"./Stack-CayROFGf.js";import{T as r}from"./Text-Dvytwbdg.js";import{B as gt}from"./Badge-DX80nvIq.js";import{B as z}from"./ButtonIconToggle-OxRAvply.js";import{I as _}from"./Icon-C8lq2hDK.js";import{L as ht,a as St,b as wt}from"./ListItem-CrcTxm4P.js";import{C as ft}from"./Checkbox-D8VWU4Bi.js";import{B as bt}from"./ButtonIcon-DcWQ0H1k.js";import{A as vt}from"./Avatar-BEUu0_hx.js";import{I as Tt}from"./Input-Cd8rGMV0.js";import{B as It}from"./Button-CIwLKvHk.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-cP-mn0Xe.js";import"./compat.module-c0s5p6eE.js";import"./index-BWINGljf.js";import"./spacing-DUhwfx1q.js";const co={title:"Overview/Components",tags:["!dev"],parameters:{docs:{description:{component:"Getting started: https://github.com/canvastools/figma-plugin-preact-ui/blob/main/README.md"}}}},Bt=[{id:"1",content:"Explode UI3 Figma library"},{id:"2",content:"Design components"},{id:"3",content:"Setup environment"},{id:"4",content:"Develop a library"},{id:"5",content:"Test components"},{id:"6",content:"Publish to NPM"},{id:"7",content:"Share to the community"},{id:"8",content:"And enjoy!"}],i={tags:["!autodocs"],globals:{background:"secondary"},parameters:{viewport:{defaultViewport:"large"}},render:()=>{const[k,Me]=x(Bt),[$e,Re]=x([]),[C,y]=x("viewList"),Ne=()=>{const{isAtTop:t}=L();return e(D,{borderBottom:!t,children:e(a,{children:e(o,{direction:"row",spacing:"400",children:[e(ut,{children:[e(P,{value:"tab-1",children:"Home"}),e(P,{value:"tab-2",children:"Templates"})]}),e(o,{direction:"row",spacing:"200",children:[e(bt,{ghost:!0,children:e(_,{glyph:"settings",variant:"scaled"})}),e(vt,{children:"M"})]})]})})})},Ee=()=>{const{isAtBottom:t}=L();return e(D,{borderTop:!t,children:e(a,{children:e(o,{direction:"row",spacing:"200",children:[e(Tt,{placeholder:"Type a new to-do"}),e(It,{intent:"brand",children:"Add"})]})})})};return e("div",{className:"sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center",children:[e(dt,{children:e(pt,{defaultValue:"tab-1",children:[e(Ne,{}),e(A,{value:"tab-1",fullHeight:!0,children:[e(lt,{children:[e(a,{padding:{bottom:"400"},children:[e(o,{direction:"row",spacing:"200",y:"center",children:[e(r,{variant:"heading",children:"This is demo"}),e(gt,{intentModifiers:"success",children:"New!"})]}),e(rt,{size:"100"}),e(r,{children:"A preview of what the plugin interface might look like when it is put together using the components from this library. The goal is to give you a sense of how the different pieces fit, behave, and feel when combined into a working layout, rather than showing each component in isolation. It demonstrates the intended look and consistency of the interface once assembled into a real plugin environment."})]}),e(Xe,{}),e(a,{padding:{right:"200"},children:e(o,{direction:"row",spacing:"200",children:[e(r,{variant:"heading",size:"small",fullWidth:!0,children:"To-do list"}),e(o,{direction:"row",spacing:"100",children:[e(z,{ghost:!0,onChange:()=>y("viewList"),selected:C==="viewList",children:e(_,{glyph:"viewList"})}),e(z,{ghost:!0,onChange:()=>y("viewGrid"),selected:C==="viewGrid",children:e(_,{glyph:"viewGrid"})})]})]})}),e(ht,{items:k,selectedItems:$e,selectionMode:"multi",onItemsChange:t=>{Me(t.items)},onSelectionChange:t=>{Re(t.selectedItems)},children:e(St,{children:k.map(t=>e(wt,{id:t.id,draggable:!0,selectable:!0,children:e(o,{direction:"row",spacing:"200",children:[e(ft,{}),e(r,{children:t.content})]})}))})})]}),e(Ee,{})]}),e(A,{value:"tab-2",fullHeight:!0,children:e(o,{fullHeight:!0,y:"center",x:"center",spacing:"200",children:[e(it,{}),e(r,{intentModifiers:"secondary",children:"This tab will never load. It's a demo."})]})})]})}),e(mt,{minWidth:380,minHeight:480,maxWidth:800,maxHeight:600,onResize:()=>{}})]})}},s=Oe,n=je,c=Fe,m=Ue,d=qe,l=Je,p=Ke,u=Qe,g=Ye,h=Ze,S=et,w=tt,f=ot,b=at,v=st;Ge.tags=[];const T=Ge,I=nt,B=ct;var H,W,V;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  globals: {
    background: "secondary"
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItemsPlain);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [view, setView] = useState<"viewGrid" | "viewList">("viewList");
    const TopBar = () => {
      const {
        isAtTop
      } = useScrollContext();
      return <Bar borderBottom={!isAtTop}>
          <Section>
            <Stack direction="row" spacing="400">
              <TabList>
                <Tab value="tab-1">Home</Tab>
                <Tab value="tab-2">Templates</Tab>
              </TabList>

              <Stack direction="row" spacing="200">
                <ButtonIcon ghost>
                  <Icon glyph="settings" variant="scaled" />
                </ButtonIcon>
                <Avatar>M</Avatar>
              </Stack>
            </Stack>
          </Section>
        </Bar>;
    };
    const BottomBar = () => {
      const {
        isAtBottom
      } = useScrollContext();
      return <Bar borderTop={!isAtBottom}>
          <Section>
            <Stack direction="row" spacing="200">
              <Input placeholder="Type a new to-do" />
              <Button intent="brand">Add</Button>
            </Stack>
          </Section>
        </Bar>;
    };
    return <div className="sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center">
        <ScrollContext>
          <TabContext defaultValue="tab-1">
            <TopBar />

            <TabPanel value="tab-1" fullHeight>
              <ScrollContainer>
                <Section padding={{
                bottom: "400"
              }}>
                  <Stack direction="row" spacing="200" y="center">
                    <Text variant="heading">This is demo</Text>
                    <Badge intentModifiers="success">New!</Badge>
                  </Stack>
                  <Spacing size="100" />
                  <Text>
                    A preview of what the plugin interface might look like when
                    it is put together using the components from this library.
                    The goal is to give you a sense of how the different pieces
                    fit, behave, and feel when combined into a working layout,
                    rather than showing each component in isolation. It
                    demonstrates the intended look and consistency of the
                    interface once assembled into a real plugin environment.
                  </Text>
                </Section>
                <Divider />
                <Section padding={{
                right: "200"
              }}>
                  <Stack direction="row" spacing="200">
                    <Text variant="heading" size="small" fullWidth>
                      To-do list
                    </Text>
                    <Stack direction="row" spacing="100">
                      <ButtonIconToggle ghost onChange={() => setView("viewList")} selected={view === "viewList"}>
                        <Icon glyph="viewList" />
                      </ButtonIconToggle>
                      <ButtonIconToggle ghost onChange={() => setView("viewGrid")} selected={view === "viewGrid"}>
                        <Icon glyph="viewGrid" />
                      </ButtonIconToggle>
                    </Stack>
                  </Stack>
                </Section>
                <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
                setItems(change.items as sampleItemsPlainType[]);
              }} onSelectionChange={change => {
                setSelectedItems(change.selectedItems);
              }}>
                  <ListContainer>
                    {items.map(item => {
                    return <ListItem id={item.id} draggable={true} selectable={true}>
                          <Stack direction="row" spacing="200">
                            <Checkbox />
                            <Text>{item.content}</Text>
                          </Stack>
                        </ListItem>;
                  })}
                  </ListContainer>
                </ListContext>
              </ScrollContainer>
              <BottomBar />
            </TabPanel>

            <TabPanel value="tab-2" fullHeight>
              <Stack fullHeight y="center" x="center" spacing="200">
                <Spinner />
                <Text intentModifiers="secondary">
                  This tab will never load. It's a demo.
                </Text>
              </Stack>
            </TabPanel>
          </TabContext>
        </ScrollContext>
        <WindowResizer minWidth={380} minHeight={480} maxWidth={800} maxHeight={600} onResize={() => {}} />
      </div>;
  }
}`,...(V=(W=i.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var G,M,$;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:"AvatarShape",...($=(M=s.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var R,N,E;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:"BadgePrefix",...(E=(N=n.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var O,j,F;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:"StickyBarPosition",...(F=(j=c.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var U,q,J;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:"ButtonPrefix",...(J=(q=m.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,X;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:"ButtonIconIntent",...(X=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:"ButtonIconToggleIntent",...(ee=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,re;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:"CheckboxChecked",...(re=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ae,ie,se;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:"DividerVariant",...(se=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ne,ce,me;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:"IconGlyphs",...(me=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var de,le,pe;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:"InputPrefix",...(pe=(le=h.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ue,ge,he;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:"ScrollContextDemo",...(he=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Se,we,fe;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:"SectionDemo",...(fe=(we=w.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};var be,ve,Te;f.parameters={...f.parameters,docs:{...(be=f.parameters)==null?void 0:be.docs,source:{originalSource:"SpacerDemo",...(Te=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var Ie,Be,xe;b.parameters={...b.parameters,docs:{...(Ie=b.parameters)==null?void 0:Ie.docs,source:{originalSource:"SpinnerDemo",...(xe=(Be=b.parameters)==null?void 0:Be.docs)==null?void 0:xe.source}}};var _e,ke,Ce;v.parameters={...v.parameters,docs:{...(_e=v.parameters)==null?void 0:_e.docs,source:{originalSource:"StackDemo",...(Ce=(ke=v.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var ye,De,Le;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:"TabDemo",...(Le=(De=T.parameters)==null?void 0:De.docs)==null?void 0:Le.source}}};var Ae,Pe,ze;I.parameters={...I.parameters,docs:{...(Ae=I.parameters)==null?void 0:Ae.docs,source:{originalSource:"TextSize",...(ze=(Pe=I.parameters)==null?void 0:Pe.docs)==null?void 0:ze.source}}};var He,We,Ve;B.parameters={...B.parameters,docs:{...(He=B.parameters)==null?void 0:He.docs,source:{originalSource:"WindowResizerDemo",...(Ve=(We=B.parameters)==null?void 0:We.docs)==null?void 0:Ve.source}}};const mo=["_1","_Avatar","_Badge","_Bar","_Button","_ButtonIcon","_ButtonIconToggle","_Checkbox","_Divider","_Icon","_Input","_ScrollContext","_Section","_Spacing","_Spinner","_Stack","_Tab","_Text","_WindowResizer"];export{i as _1,s as _Avatar,n as _Badge,c as _Bar,m as _Button,d as _ButtonIcon,l as _ButtonIconToggle,p as _Checkbox,u as _Divider,g as _Icon,h as _Input,S as _ScrollContext,w as _Section,f as _Spacing,b as _Spinner,v as _Stack,T as _Tab,I as _Text,B as _WindowResizer,mo as __namedExportsOrder,co as default};
