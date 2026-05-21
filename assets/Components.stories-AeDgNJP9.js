import{d as r,A as h,u as e}from"./hooks.module-6Sbq__eq.js";import{a as L}from"./TooltipContext-DRGVUEob.js";import{a as M,S as A,u as g}from"./ScrollContainer-C_gECWoA.js";import{a as H,b as R,T as u}from"./TabList-BChU91p7.js";import{T as f}from"./TabPanel-BUi4_mso.js";import{S as o}from"./Section-f0GkCzPh.js";import{S as i}from"./Stack-FIJoWfyG.js";import{T as n}from"./Text-BbQ_b1VF.js";import{B as z}from"./Badge-158-ytUK.js";import{S as l}from"./Spacing-BJUHNIx5.js";import{D as O}from"./Divider-M1ADyvxH.js";import{S as D}from"./Select-DbgUupcG.js";import{S as E}from"./SegmentedControl-CxFRZ47u.js";import{a as W,v as G,s as N}from"./viewList-B2UMyO9l.js";import{a as F,L as V,b as _}from"./ListItem-UITfTASi.js";import{C as U}from"./Checkbox-AxIsQMht.js";import{S as j}from"./Spinner-BwqhJ4Ld.js";import{W as q}from"./WindowResizer-DZfhFcMV.js";import{B as J}from"./ButtonIcon-COvrc5nB.js";import{I as K}from"./Icon-C6_npEhI.js";import{M as Q}from"./Menu-BAlDVGUJ.js";import{A as X}from"./Avatar-D_LKqPxg.js";import{B as b}from"./Bar-McH7ftXR.js";import{I as Y}from"./Input-DLYS1ks3.js";import{C as Z}from"./ColorSwatch-C8HurrPY.js";import{B as $}from"./Button-CJrKFz2E.js";import{P as ee}from"./Popover-DnvyRr36.js";import{C as te}from"./ColorPicker-x-v9JQgm.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./TooltipContainer-CJCq4A9v.js";import"./chevronDown-CECORTRu.js";import"./MenuContainer-DIktfDZk.js";import"./chevronUp-CJIqewiB.js";import"./MenuDivider-AltCHnUL.js";import"./MenuItemOption-B-6tHtAZ.js";import"./check-CPtlZW3F.js";import"./chevronRight-DD-yb92g.js";import"./dragHandle-D-mnwN4w.js";import"./mixed-BYzCN0ag.js";import"./MenuItemAction-D6NJohij.js";import"./color-OwKICefG.js";import"./PopoverContext-BKF6rnxf.js";import"./PopoverContainer-B0Zygp5e.js";import"./PopoverHeader-BegSpFQm.js";import"./close-DceWr2La.js";import"./useStringInput-DXX1tuwF.js";import"./useNumericInput-Be6TgadK.js";import"./ControlGroup-DMaQkoJn.js";const $e={title:"Overview/Figma Plugin UI",tags:["!dev"],parameters:{docs:{description:{component:`
**An unofficial loose interpretation** of [Figma's UI3 design language](https://www.figma.com/community/file/1486123838948777078/ui3-figmas-ui-kit), adapted for plugin interfaces (Preact/React-compatible):

- Providing components and states relevant to plugin development.
- Optimizing the system for practical, real-world plugin workflows.
- Maintaining visual alignment with the current look & feel of Figma’s interface.

This project is an independent initiative and is not affiliated with or endorsed by [Figma](https://figma.com).

---

- [Getting started](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/README.md)
- [Changelog](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/CHANGELOG.md)
- [License](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/LICENSE.md)`},canvas:{sourceState:"none"}}}},ie=[{id:"1",content:"Explode UI3 Figma library"},{id:"2",content:"Design components"},{id:"3",content:"Setup environment"},{id:"4",content:"Develop a library"},{id:"5",content:"Test components"},{id:"6",content:"Publish to NPM"},{id:"7",content:"Share to the community"},{id:"8",content:"And enjoy!"}],a={globals:{background:"secondary"},parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[s,C]=r(ie),[T,k]=r([]),c=h(null),I=()=>{const{isAtTop:t}=g();return e(b,{showDividerBottom:!t,children:e(o,{children:e(i,{direction:"row",spacing:"400",children:[e(R,{children:[e(u,{id:"tab-1",children:"Home"}),e(u,{id:"tab-2",children:"Templates"})]}),e(i,{direction:"row",spacing:"200",children:[e(J,{ghost:!0,ref:c,children:e(K,{glyph:N})}),e(Q,{triggerRef:c,items:[{type:"action",id:"action-1",children:"Settings",closeOnClick:!0},{type:"action",id:"action-2",children:"Help",closeOnClick:!0},{type:"divider"},{type:"action",id:"action-3",children:"Logout",intentModifier:"danger",closeOnClick:!0}]}),e(X,{children:"M"})]})]})})})},x=()=>{const[t,d]=r(!1),{isAtBottom:y}=g(),m=h(null),[p,B]=r({r:255,g:0,b:0,a:1});return e(b,{showDividerTop:!y,children:e(o,{children:e(i,{direction:"row",spacing:"200",children:[e(Y,{placeholder:"Type a new to-do",prefix:e("div",{style:{padding:"0 8px 0 4px"},ref:m,onClick:()=>d(!0),children:e(Z,{size:"small",fill:p})})}),e($,{intent:"brand",children:"Add"}),e(ee,{anchorRef:m,popoverHeaderProps:{children:"Color Picker"},placement:"over",open:t,onClose:()=>d(!1),children:e(o,{children:[e(l,{size:"100"}),e(te,{color:p,onColorChange:P=>B(P.color)}),e(l,{size:"100"})]})})]})})})};return e("div",{className:"sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center",children:[e(L,{children:e(M,{children:e(H,{defaultActiveId:"tab-1",children:[e(I,{}),e(f,{tabId:"tab-1",fullHeight:!0,children:[e(A,{children:[e(o,{variant:"stacked",children:[e(i,{direction:"row",spacing:"200",y:"center",children:[e(n,{variant:"heading",children:"This is demo"}),e(z,{intentModifier:"success",children:"New!"})]}),e(l,{size:"100"}),e(n,{children:"A preview of what the plugin interface might look like when it is put together using the components from this library. The goal is to give you a sense of how the different pieces fit, behave, and feel when combined into a working layout, rather than showing each component in isolation. It demonstrates the intended look and consistency of the interface once assembled into a real plugin environment."})]}),e(O,{}),e(o,{padding:{right:"200"},children:e(i,{direction:"row",spacing:"200",children:[e(n,{variant:"heading",size:"small",fullWidth:!0,children:"To-do list"}),e(i,{direction:"row",spacing:"200",children:[e(D,{options:[{label:"Incomplete",value:"incomplete"},{label:"Completed",value:"completed"}],value:"incomplete"}),e(E,{options:[{label:"List",value:"list",icon:{glyph:W}},{label:"Grid",value:"grid",icon:{glyph:G}}],defaultValue:"list"})]})]})}),e(F,{items:s,selectedItemIds:T,selectionMode:"multi",onItemsChange:t=>{C(t.items)},onSelectionChange:t=>{k(t.selectedItemIds)},children:e(V,{children:s.map(t=>e(_,{nestingLevel:0,id:t.id,draggable:!0,selectable:!0,children:e(i,{direction:"row",spacing:"200",children:[e(U,{}),e(n,{children:t.content})]})},t.id))})})]}),e(x,{})]}),e(f,{tabId:"tab-2",fullHeight:!0,children:e(i,{fullHeight:!0,y:"center",x:"center",spacing:"200",children:[e(j,{}),e(n,{intentModifier:"secondary",children:"Don’t wait, it’s a demo."})]})})]})})}),e(q,{minWidth:380,minHeight:480,maxWidth:800,maxHeight:600,onResize:()=>{}})]})}};var w,v,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  globals: {
    background: 'secondary'
  },
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: 'large'
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItemsPlain);
    const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
    const anchorRefMenu = useRef<HTMLButtonElement | null>(null);
    const TopBar = () => {
      const {
        isAtTop
      } = useScrollContext();
      return <Bar showDividerBottom={!isAtTop}>
          <Section>
            <Stack direction="row" spacing="400">
              <TabList>
                <Tab id="tab-1">Home</Tab>
                <Tab id="tab-2">Templates</Tab>
              </TabList>

              <Stack direction="row" spacing="200">
                <ButtonIcon ghost ref={anchorRefMenu}>
                  <Icon glyph={settings} />
                </ButtonIcon>

                <Menu triggerRef={anchorRefMenu} items={[{
                type: 'action',
                id: 'action-1',
                children: 'Settings',
                closeOnClick: true
              }, {
                type: 'action',
                id: 'action-2',
                children: 'Help',
                closeOnClick: true
              }, {
                type: 'divider'
              }, {
                type: 'action',
                id: 'action-3',
                children: 'Logout',
                intentModifier: 'danger',
                closeOnClick: true
              }]} />

                <Avatar>M</Avatar>
              </Stack>
            </Stack>
          </Section>
        </Bar>;
    };
    const BottomBar = () => {
      const [openColorPicker, setOpenColorPicker] = useState(false);
      const {
        isAtBottom
      } = useScrollContext();
      const anchorRef = useRef<HTMLDivElement | null>(null);
      const [color, setColor] = useState<Color>({
        r: 255,
        g: 0,
        b: 0,
        a: 1
      });
      return <Bar showDividerTop={!isAtBottom}>
          <Section>
            <Stack direction="row" spacing="200">
              <Input placeholder="Type a new to-do" prefix={<div style={{
              padding: '0 8px 0 4px'
            }} ref={anchorRef} onClick={() => setOpenColorPicker(true)}>
                    <ColorSwatch size="small" fill={color} />
                  </div>} />
              <Button intent="brand">Add</Button>
              <Popover anchorRef={anchorRef} popoverHeaderProps={{
              children: 'Color Picker'
            }} placement="over" open={openColorPicker} onClose={() => setOpenColorPicker(false)}>
                <Section>
                  <Spacing size="100" />
                  <ColorPicker color={color} onColorChange={args => setColor(args.color)} />
                  <Spacing size="100" />
                </Section>
              </Popover>
            </Stack>
          </Section>
        </Bar>;
    };
    return <div className="sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center">
        <TooltipContext>
          <ScrollContext>
            <TabContext defaultActiveId="tab-1">
              <TopBar />

              <TabPanel tabId="tab-1" fullHeight>
                <ScrollContainer>
                  <Section variant="stacked">
                    <Stack direction="row" spacing="200" y="center">
                      <Text variant="heading">This is demo</Text>
                      <Badge intentModifier="success">New!</Badge>
                    </Stack>
                    <Spacing size="100" />
                    <Text>
                      A preview of what the plugin interface might look like when it is put together using the components from
                      this library. The goal is to give you a sense of how the different pieces fit, behave, and feel when
                      combined into a working layout, rather than showing each component in isolation. It demonstrates the
                      intended look and consistency of the interface once assembled into a real plugin environment.
                    </Text>
                  </Section>

                  <Divider />

                  <Section padding={{
                  right: '200'
                }}>
                    <Stack direction="row" spacing="200">
                      <Text variant="heading" size="small" fullWidth>
                        To-do list
                      </Text>

                      <Stack direction="row" spacing="200">
                        <Select options={[{
                        label: 'Incomplete',
                        value: 'incomplete'
                      }, {
                        label: 'Completed',
                        value: 'completed'
                      }]} value={'incomplete'} />
                        <SegmentedControl options={[{
                        label: 'List',
                        value: 'list',
                        icon: {
                          glyph: viewList
                        }
                      }, {
                        label: 'Grid',
                        value: 'grid',
                        icon: {
                          glyph: viewGrid
                        }
                      }]} defaultValue={'list'} />
                      </Stack>
                    </Stack>
                  </Section>

                  <ListContext items={items} selectedItemIds={selectedItemIds} selectionMode="multi" onItemsChange={change => {
                  setItems(change.items as SampleTodoItem[]);
                }} onSelectionChange={change => {
                  setSelectedItemIds(change.selectedItemIds);
                }}>
                    <ListContainer>
                      {items.map(item => {
                      return <ListItem key={item.id} nestingLevel={0} id={item.id} draggable={true} selectable={true}>
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

              <TabPanel tabId="tab-2" fullHeight>
                <Stack fullHeight y="center" x="center" spacing="200">
                  <Spinner />
                  <Text intentModifier="secondary">Don’t wait, it’s a demo.</Text>
                </Stack>
              </TabPanel>
            </TabContext>
          </ScrollContext>
        </TooltipContext>
        <WindowResizer minWidth={380} minHeight={480} maxWidth={800} maxHeight={600} onResize={() => {}} />
      </div>;
  }
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const et=["_1"];export{a as _1,et as __namedExportsOrder,$e as default};
