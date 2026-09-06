import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,v as n,w as r}from"./compat.module-gcU-nFZT.js";import{n as i,t as a}from"./jsxRuntime.module-CNTwvFFH.js";import{a as o,i as s,n as c,o as ee,r as te,t as l}from"./ListItem-CUBPPc2N.js";import{i as ne,r as re}from"./Tooltip-DsjGtgh5.js";import{n as ie,t as u}from"./Text-Cr-51GRl.js";import{n as ae,t as oe}from"./Avatar-BJOxxNox.js";import{n as se,t as ce}from"./Badge-Bq0vXB-j.js";import{n as le,t as d}from"./Bar-ANyfK-CW.js";import{n as ue,t as f}from"./Button-DTA_GS6N.js";import{n as p,t as m}from"./Icon-Brb725mi.js";import{n as h,t as g}from"./ButtonIcon-CpTDZvwn.js";import{a as _,i as v,n as y,o as b,r as x,t as S}from"./viewList-jp3w6lJp.js";import{n as C,t as w}from"./Checkbox-DgbiIxUo.js";import{n as T,t as E}from"./Input-CyseSWne.js";import{n as D,t as O}from"./Select-TE3ZUDMN.js";import{n as k,t as A}from"./ColorPicker-B_BpiPot.js";import{n as j,t as M}from"./ColorSwatch-HXK5SF5m.js";import{n as N,t as P}from"./Divider-D7nwDni1.js";import{n as F,t as I}from"./Menu-CMRXfizp.js";import{n as L,t as R}from"./Popover-Blnh8E6r.js";import{a as z,i as de,n as B,r as V,t as H}from"./ScrollContainer-DphjjfHg.js";import{n as fe,t as U}from"./Section-DkP7unPH.js";import{n as pe,t as me}from"./SegmentedControl-DqFdzUOP.js";import{n as he,t as W}from"./Spacing-ChjHmQe4.js";import{n as ge,t as _e}from"./Spinner-ZSkFJCxk.js";import{n as ve,t as G}from"./Stack-CRI7JcwR.js";import{a as ye,i as be,n as xe,o as Se,r as K,t as Ce}from"./TabList-Cpn93ydS.js";import{n as we,t as q}from"./TabPanel-DaKnF7-p.js";import{n as Te,t as J}from"./WindowResizer-CSrzyg5a.js";var Y,X,Z,Q;function $(){return($=e((()=>{r(),ae(),se(),le(),ue(),h(),C(),k(),j(),N(),p(),T(),s(),ee(),c(),F(),L(),B(),de(),fe(),pe(),D(),he(),ge(),ve(),be(),Se(),xe(),we(),ie(),ne(),Te(),_(),x(),S(),a(),Y={title:`Overview/Figma Plugin UI`,tags:[`!dev`],parameters:{docs:{description:{component:`
**An unofficial loose interpretation** of [Figma's UI3 design language](https://www.figma.com/community/file/1486123838948777078/ui3-figmas-ui-kit), adapted for plugin interfaces (Preact/React-compatible):

- Providing components and states relevant to plugin development.
- Optimizing the system for practical, real-world plugin workflows.
- Maintaining visual alignment with the current look & feel of Figma’s interface.

This project is an independent initiative and is not affiliated with or endorsed by [Figma](https://figma.com).

---

- [Getting started](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/README.md)
- [Changelog](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/CHANGELOG.md)
- [License](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/LICENSE.md)`},canvas:{sourceState:`none`}}}},X=[{id:`1`,content:`Explode UI3 Figma library`},{id:`2`,content:`Design components`},{id:`3`,content:`Setup environment`},{id:`4`,content:`Develop a library`},{id:`5`,content:`Test components`},{id:`6`,content:`Publish to NPM`},{id:`7`,content:`Share to the community`},{id:`8`,content:`And enjoy!`}],Z={globals:{background:`secondary`},parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`}},render:()=>{let[e,r]=t(X),[a,s]=t([]),c=n(null);return i(`div`,{className:`sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center`,children:[i(re,{children:i(V,{children:i(ye,{defaultActiveId:`tab-1`,children:[i(()=>{let{isAtTop:e}=z();return i(d,{showDividerBottom:!e,children:i(U,{children:i(G,{direction:`row`,spacing:`400`,children:[i(Ce,{children:[i(K,{id:`tab-1`,children:`Home`}),i(K,{id:`tab-2`,children:`Templates`})]}),i(G,{direction:`row`,spacing:`200`,children:[i(g,{ghost:!0,ref:c,children:i(m,{glyph:b})}),i(I,{triggerRef:c,items:[{type:`action`,id:`action-1`,children:`Settings`,closeOnClick:!0},{type:`action`,id:`action-2`,children:`Help`,closeOnClick:!0},{type:`divider`},{type:`action`,id:`action-3`,children:`Logout`,intentModifier:`danger`,closeOnClick:!0}]}),i(oe,{children:`M`})]})]})})})},{}),i(q,{tabId:`tab-1`,fullHeight:!0,children:[i(H,{children:[i(U,{variant:`stacked`,children:[i(G,{direction:`row`,spacing:`200`,y:`center`,children:[i(u,{variant:`heading`,children:`This is demo`}),i(ce,{intentModifier:`success`,children:`New!`})]}),i(W,{size:`100`}),i(u,{children:`A preview of what the plugin interface might look like when it is put together using the components from this library. The goal is to give you a sense of how the different pieces fit, behave, and feel when combined into a working layout, rather than showing each component in isolation. It demonstrates the intended look and consistency of the interface once assembled into a real plugin environment.`})]}),i(P,{}),i(U,{padding:{right:`200`},children:i(G,{direction:`row`,spacing:`200`,children:[i(u,{variant:`heading`,size:`small`,fullWidth:!0,children:`To-do list`}),i(G,{direction:`row`,spacing:`200`,children:[i(O,{options:[{label:`Incomplete`,value:`incomplete`},{label:`Completed`,value:`completed`}],value:`incomplete`}),i(me,{options:[{label:`List`,value:`list`,icon:{glyph:y}},{label:`Grid`,value:`grid`,icon:{glyph:v}}],defaultValue:`list`})]})]})}),i(o,{items:e,selectedItemIds:a,selectionMode:`multi`,onItemsChange:e=>{r(e.items)},onSelectionChange:e=>{s(e.selectedItemIds)},children:i(te,{children:e.map(e=>i(l,{nestingLevel:0,id:e.id,draggable:!0,selectable:!0,children:i(G,{direction:`row`,spacing:`200`,children:[i(w,{}),i(u,{children:e.content})]})},e.id))})})]}),i(()=>{let[e,r]=t(!1),{isAtBottom:a}=z(),o=n(null),[s,c]=t({r:255,g:0,b:0,a:1});return i(d,{showDividerTop:!a,children:i(U,{children:i(G,{direction:`row`,spacing:`200`,children:[i(E,{placeholder:`Type a new to-do`,prefix:i(`div`,{style:{padding:`0 8px 0 4px`},ref:o,onClick:()=>r(!0),children:i(M,{size:`small`,fill:s})})}),i(f,{intent:`brand`,children:`Add`}),i(R,{anchorRef:o,popoverHeaderProps:{children:`Color Picker`},placement:`over`,open:e,onClose:()=>r(!1),children:i(U,{children:[i(W,{size:`100`}),i(A,{color:s,onColorChange:e=>c(e.color)}),i(W,{size:`100`})]})})]})})})},{})]}),i(q,{tabId:`tab-2`,fullHeight:!0,children:i(G,{fullHeight:!0,y:`center`,x:`center`,spacing:`200`,children:[i(_e,{}),i(u,{intentModifier:`secondary`,children:`Don’t wait, it’s a demo.`})]})})]})})}),i(J,{minWidth:380,minHeight:480,maxWidth:800,maxHeight:600,onResize:()=>{}})]})}},Q=[`_1`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as _1,Q as __namedExportsOrder,Y as default};