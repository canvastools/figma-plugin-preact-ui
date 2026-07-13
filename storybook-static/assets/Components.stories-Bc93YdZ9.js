import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,v as n,w as r}from"./compat.module-BbhDrffC.js";import{n as i,t as a}from"./jsxRuntime.module-B_u_rUE0.js";import{t as o}from"./Text-Bf8YN4P6.js";import{t as s}from"./Avatar-DetidImo.js";import{$n as c,$t as l,At as u,Bt as d,D as f,E as p,H as m,I as h,K as g,Mt as _,S as v,Un as y,Vn as b,W as x,Zn as S,Zt as C,b as w,c as T,cn as E,g as D,i as O,in as k,m as A,o as j,on as M,qn as N,t as P,u as F,v as I,w as L,zn as R}from"./src-CnP2aPTs.js";import{t as z}from"./Divider-CU4Az6Sc.js";import{t as B}from"./Spinner-Cqp26dQM.js";import{t as V}from"./WindowResizer-CNw1kgxz.js";var H,U,W,G;e((()=>{r(),P(),a(),H={title:`Overview/Figma Plugin UI`,tags:[`!dev`],parameters:{docs:{description:{component:`
**An unofficial loose interpretation** of [Figma's UI3 design language](https://www.figma.com/community/file/1486123838948777078/ui3-figmas-ui-kit), adapted for plugin interfaces (Preact/React-compatible):

- Providing components and states relevant to plugin development.
- Optimizing the system for practical, real-world plugin workflows.
- Maintaining visual alignment with the current look & feel of Figma’s interface.

This project is an independent initiative and is not affiliated with or endorsed by [Figma](https://figma.com).

---

- [Getting started](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/README.md)
- [Changelog](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/CHANGELOG.md)
- [License](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/LICENSE.md)`},canvas:{sourceState:`none`}}}},U=[{id:`1`,content:`Explode UI3 Figma library`},{id:`2`,content:`Design components`},{id:`3`,content:`Setup environment`},{id:`4`,content:`Develop a library`},{id:`5`,content:`Test components`},{id:`6`,content:`Publish to NPM`},{id:`7`,content:`Share to the community`},{id:`8`,content:`And enjoy!`}],W={globals:{background:`secondary`},parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`}},render:()=>{let[e,r]=t(U),[a,P]=t([]),H=n(null);return i(`div`,{className:`sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center`,children:[i(N,{children:i(L,{children:i(F,{defaultActiveId:`tab-1`,children:[i(()=>{let{isAtTop:e}=p();return i(S,{showDividerBottom:!e,children:i(w,{children:i(A,{direction:`row`,spacing:`400`,children:[i(j,{children:[i(T,{id:`tab-1`,children:`Home`}),i(T,{id:`tab-2`,children:`Templates`})]}),i(A,{direction:`row`,spacing:`200`,children:[i(R,{ghost:!0,ref:H,children:i(b,{glyph:E})}),i(h,{triggerRef:H,items:[{type:`action`,id:`action-1`,children:`Settings`,closeOnClick:!0},{type:`action`,id:`action-2`,children:`Help`,closeOnClick:!0},{type:`divider`},{type:`action`,id:`action-3`,children:`Logout`,intentModifier:`danger`,closeOnClick:!0}]}),i(s,{children:`M`})]})]})})})},{}),i(O,{tabId:`tab-1`,fullHeight:!0,children:[i(v,{children:[i(w,{variant:`stacked`,children:[i(A,{direction:`row`,spacing:`200`,y:`center`,children:[i(o,{variant:`heading`,children:`This is demo`}),i(c,{intentModifier:`success`,children:`New!`})]}),i(D,{size:`100`}),i(o,{children:`A preview of what the plugin interface might look like when it is put together using the components from this library. The goal is to give you a sense of how the different pieces fit, behave, and feel when combined into a working layout, rather than showing each component in isolation. It demonstrates the intended look and consistency of the interface once assembled into a real plugin environment.`})]}),i(z,{}),i(w,{padding:{right:`200`},children:i(A,{direction:`row`,spacing:`200`,children:[i(o,{variant:`heading`,size:`small`,fullWidth:!0,children:`To-do list`}),i(A,{direction:`row`,spacing:`200`,children:[i(d,{options:[{label:`Incomplete`,value:`incomplete`},{label:`Completed`,value:`completed`}],value:`incomplete`}),i(I,{options:[{label:`List`,value:`list`,icon:{glyph:k}},{label:`Grid`,value:`grid`,icon:{glyph:M}}],defaultValue:`list`})]})]})}),i(g,{items:e,selectedItemIds:a,selectionMode:`multi`,onItemsChange:e=>{r(e.items)},onSelectionChange:e=>{P(e.selectedItemIds)},children:i(x,{children:e.map(e=>i(m,{nestingLevel:0,id:e.id,draggable:!0,selectable:!0,children:i(A,{direction:`row`,spacing:`200`,children:[i(l,{}),i(o,{children:e.content})]})},e.id))})})]}),i(()=>{let[e,r]=t(!1),{isAtBottom:a}=p(),o=n(null),[s,c]=t({r:255,g:0,b:0,a:1});return i(S,{showDividerTop:!a,children:i(w,{children:i(A,{direction:`row`,spacing:`200`,children:[i(C,{placeholder:`Type a new to-do`,prefix:i(`div`,{style:{padding:`0 8px 0 4px`},ref:o,onClick:()=>r(!0),children:i(u,{size:`small`,fill:s})})}),i(y,{intent:`brand`,children:`Add`}),i(f,{anchorRef:o,popoverHeaderProps:{children:`Color Picker`},placement:`over`,open:e,onClose:()=>r(!1),children:i(w,{children:[i(D,{size:`100`}),i(_,{color:s,onColorChange:e=>c(e.color)}),i(D,{size:`100`})]})})]})})})},{})]}),i(O,{tabId:`tab-2`,fullHeight:!0,children:i(A,{fullHeight:!0,y:`center`,x:`center`,spacing:`200`,children:[i(B,{}),i(o,{intentModifier:`secondary`,children:`Don’t wait, it’s a demo.`})]})})]})})}),i(V,{minWidth:380,minHeight:480,maxWidth:800,maxHeight:600,onResize:()=>{}})]})}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G=[`_1`]}))();export{W as _1,G as __namedExportsOrder,H as default};