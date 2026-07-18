import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{F as t,P as n,S as r,j as i,w as a}from"./compat.module-BiyPQZFw.js";import{n as o,t as s}from"./jsxRuntime.module-XYsEgyrh.js";import{t as c}from"./Text-Dx8we2OT.js";import{$t as l,At as u,Bt as d,Gn as f,H as p,K as m,U as h,Un as g,W as _,Zt as v,cn as y,f as b,g as x,hn as S,m as C,mn as w,n as T,t as E,v as D,vn as O}from"./src-BW54aR7x.js";var k,A=e((()=>{a(),E(),h(),s(),k={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ListItem variant="default">
  {children}
</ListItem>

<ListItem variant="layer">
  {children}
</ListItem>
`}}},render:()=>{let e=[{id:`Frame 0`,items:[{id:`Frame 0-0`,items:[{id:`Frame 0-0-0`},{id:`Frame 0-0-1`}]},{id:`Frame 0-1`,items:[{id:`Frame 0-1-0`}]}]},{id:`Frame 1`},{id:`Frame 2`,items:[{id:`Frame 2-0`,items:[{id:`Frame 2-0-0`},{id:`Frame 2-0-1`},{id:`Frame 2-0-2`}]}]}],[t,n]=r(e),[i,a]=r([]),[s,l]=r(e),[u,d]=r([]),f=(e,t,n)=>o(_,{children:e.map(e=>o(p,{id:e.id,nestingLevel:t,selectable:!0,variant:n,draggable:!0,acceptsChildren:!0,selectionScope:n===`layer`?`withDescendants`:`individual`,hoverable:!0,items:e.items&&e.items.length?f(e.items,t+1,n):void 0,children:o(C,{direction:`row`,y:`center`,children:[o(c,{wrap:!1,children:e.id}),o(c,{intentModifier:`secondary`,wrap:!1,children:[`\xA0(Level `,t,`)`]})]})},e.id))});return o(`div`,{className:`sb-row sb-width-full sb-gap-40`,children:[o(m,{items:t,selectedItemIds:i,selectionMode:`multi`,onItemsChange:e=>{n(e.items)},onSelectionChange:e=>{a(e.selectedItemIds)},children:f(t,0,`default`)}),o(m,{items:s,selectedItemIds:u,selectionMode:`multi`,onItemsChange:e=>l(e.items),onSelectionChange:e=>d(e.selectedItemIds),children:f(s,0,`layer`)})]})}}})),j,M=e((()=>{a(),E(),h(),s(),j={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ListItem variant="default">
  {children}
</ListItem>

<ListItem variant="layer">
  {children}
</ListItem>
`}}},render:()=>{let e=[{id:`Frame 0`,items:[{id:`Frame 0-0`,items:[{id:`Frame 0-0-0`},{id:`Frame 0-0-1`}]},{id:`Frame 0-1`,items:[{id:`Frame 0-1-0`}]}]},{id:`Frame 1`},{id:`Frame 2`,items:[{id:`Frame 2-0`,items:[{id:`Frame 2-0-0`},{id:`Frame 2-0-1`},{id:`Frame 2-0-2`}]}]}],[t,n]=r(e),[i,a]=r([]),[s,l]=r(e),[u,d]=r([]),f=(e,t,n)=>o(_,{children:e.map(e=>o(p,{id:e.id,nestingLevel:t,selectable:!0,variant:n,draggable:!0,acceptsChildren:!0,selectionScope:n===`layer`?`withDescendants`:`individual`,hoverable:!0,items:e.items&&e.items.length?f(e.items,t+1,n):void 0,collapsable:!0,children:o(C,{direction:`row`,y:`center`,children:[o(c,{wrap:!1,children:e.id}),o(c,{intentModifier:`secondary`,wrap:!1,children:[`\xA0(Level `,t,`)`]})]})},e.id))});return o(`div`,{className:`sb-row sb-width-full sb-gap-40`,children:[o(m,{items:t,selectedItemIds:i,selectionMode:`multi`,onItemsChange:e=>{n(e.items)},onSelectionChange:e=>{a(e.selectedItemIds)},children:f(t,0,`default`)}),o(m,{items:s,selectedItemIds:u,selectionMode:`multi`,onItemsChange:e=>l(e.items),onSelectionChange:e=>d(e.selectedItemIds),children:f(s,0,`layer`)})]})}}})),N,P=e((()=>{n(),a(),E(),h(),s(),N={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`The components allows to reproduce the left panel with layers from Figma.`},source:{code:`
const item = {
  id: 'Frame 0',
  type: 'frame',
  intent: 'tertiary',
  items: [
    {
      id: 'Frame 0-0',
      type: 'component',
      intent: 'component-secondary',
    }
  ]
}

<ListItem
  key={item.id}
  id={item.id}
  variant="layer"
  nestingLevel={item.level}
  selectable={true}
  draggable={true}
  acceptsChildren={true}
  selectionScope="withDescendants"
  hoverable={true}
  items={item.items}
  collapsable={true}
  collapseIconIntent={item.intent}
>
  {children}
</ListItem>
`}}},render:()=>{let[e,t]=r([{id:`Frame 0`,type:`frame`,intent:`tertiary`,items:[{id:`Frame 0-0`,type:`frame`,intent:`tertiary`},{id:`Frame 0-1`,type:`frame`,intent:`tertiary`}]},{id:`Frame 1`,type:`frame`,intent:`tertiary`},{id:`Frame 2`,type:`instance`,intent:`component-secondary`,items:[{id:`Frame 2-0`,type:`frame`,intent:`component-secondary`},{id:`Frame 2-1`,type:`slot`,intent:`slot-secondary`}]}]),[n,a]=r([]),s=(e,t)=>o(_,{children:e.map(e=>o(p,{id:e.id,nestingLevel:t,selectable:!0,variant:`layer`,draggable:!0,acceptsChildren:!0,selectionScope:`withDescendants`,hoverable:!0,items:e.items&&e.items.length?s(e.items,t+1):void 0,collapsable:!0,collapseIconIntent:e.intent,children:o(C,{direction:`row`,y:`center`,children:[e.type===`frame`&&o(f,{glyph:S,size:16,intentModifier:n.includes(e.id)?`default`:`tertiary`,variant:`downscaled`}),e.type===`instance`&&o(f,{glyph:O,size:16,intentModifier:n.includes(e.id)?`component`:`component-secondary`,variant:`downscaled`}),e.type===`slot`&&o(f,{glyph:y,size:16,intentModifier:n.includes(e.id)?`slot`:`slot-secondary`,variant:`downscaled`}),o(x,{direction:`row`,size:200}),e.type==`frame`&&o(i,{children:[o(c,{wrap:!1,children:e.id}),o(c,{intentModifier:`secondary`,wrap:!1,children:[`\xA0(Level `,t,`)`]})]}),e.type==`instance`&&o(i,{children:[o(c,{wrap:!1,intentModifier:`component`,children:e.id}),o(c,{intentModifier:`component`,wrap:!1,children:[`\xA0(Level `,t,`)`]})]}),e.type==`slot`&&o(i,{children:[o(c,{wrap:!1,intentModifier:`slot`,children:e.id}),o(c,{intentModifier:`slot`,wrap:!1,children:[`\xA0(Level `,t,`)`]})]})]})},e.id))});return o(`div`,{className:`sb-row sb-width-full sb-gap-40`,children:o(m,{items:e,selectedItemIds:n,selectionMode:`multi`,onItemsChange:e=>t(e.items),onSelectionChange:e=>a(e.selectedItemIds),children:s(e,0)})})}}})),F,I=e((()=>{a(),E(),h(),s(),F={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"Items can contain any content. `data-pui-interactive='true'` attribute can be applied to custom elements inside the list item to stop propagation of click events."},source:{code:`
<ListItem>
  <input type="text" data-pui-interactive="true"/>
</ListItem>
`}}},render:()=>{let e=({label:e})=>[o(v,{value:e,prefix:o(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,width:24,height:24},children:o(u,{size:`small`,onClick:()=>console.log(`clicked`)})})}),o(v,{ghost:!0,focusOnDoubleClick:!0,placeholder:`Double click to edit`}),o(T,{}),o(d,{placeholder:`Select an option`,options:[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`}],fullWidth:!0}),o(g,{icon:{glyph:w}}),o(g,{icon:{glyph:w},ghost:!0}),o(b,{}),o(l,{defaultChecked:!0}),o(D,{defaultValue:`option1`,options:[{label:`Option 1`,value:`option1`,icon:{glyph:w,size:24}},{label:`Option 2`,value:`option2`,icon:{glyph:w,size:24}}]})],t=[{id:`Frame 0`,items:[{id:`Frame 0-0`,items:[{id:`Frame 0-0-0`},{id:`Frame 0-0-1`}]},{id:`Frame 0-1`,items:[{id:`Frame 0-1-0`}]}]},{id:`Frame 1`},{id:`Frame 2`,items:[{id:`Frame 2-0`,items:[{id:`Frame 2-0-0`},{id:`Frame 2-0-1`},{id:`Frame 2-0-2`}]}]}],[n,i]=r(t),[a,s]=r([]),[c,f]=r(t),[h,y]=r([]),x=(t,n,r)=>o(_,{children:t.map(t=>o(p,{id:t.id,nestingLevel:n,selectable:!0,variant:r,draggable:!0,acceptsChildren:!0,selectionScope:`withDescendants`,collapsable:!0,hoverable:!0,items:t.items&&t.items.length?x(t.items,n+1,r):void 0,children:o(C,{direction:`row`,y:`center`,fullWidth:!0,children:o(C,{direction:`row`,spacing:200,y:`center`,fullWidth:!0,children:o(e,{label:t.id})})})},t.id))});return o(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[o(m,{items:n,selectedItemIds:a,selectionMode:`multi`,onItemsChange:e=>i(e.items),onSelectionChange:e=>s(e.selectedItemIds),children:x(n,0,`default`)}),o(m,{items:c,selectedItemIds:h,selectionMode:`multi`,onItemsChange:e=>{f(e.items)},onSelectionChange:e=>{y(e.selectedItemIds)},children:x(c,0,`layer`)})]})}}})),L,R,z,B,V,H,U,W,G;e((()=>{a(),A(),M(),P(),I(),E(),h(),s(),n(),{fn:L}=__STORYBOOK_MODULE_TEST__,R={title:`Components/ListItem`,component:p,tags:[`autodocs`],parameters:{docs:{description:{component:"A component for creating a list item. Used inside <a href='/docs/components-listcontainer--docs'>`<ListContainer/>`</a>."}}},argTypes:{id:{control:{type:`text`},description:`<strong>*</strong>`},className:{control:{type:`text`}},variant:{control:{type:`radio`},options:[`default`,`layer`],table:{defaultValue:{summary:`default`}}},nestingLevel:{control:{type:`number`},description:`<strong>*</strong>`,table:{defaultValue:{summary:`0`},type:{summary:`number`}}},draggable:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},tabIndex:{control:{type:`number`},description:`Tab order of the list item. Omit to use 0 when selectable, draggable, or collapsable; otherwise not tabbable.`,table:{type:{summary:`number`}}},onDragStart:{table:{type:{summary:`(args) => void`,detail:`
{
  event: DragEvent
}
          `}}},onDragEnd:{table:{type:{summary:`(args) => void`,detail:`
{
  event: DragEvent
}
          `}}},acceptsChildren:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},selectable:{control:{type:`boolean`},description:"`data-pui-interactive='true'` attribute can be applied to elements inside the list item to stop propagation of click events.",table:{defaultValue:{summary:`false`}}},selectionScope:{control:{type:`radio`},options:[`individual`,`withDescendants`],table:{defaultValue:{summary:`individual`}},description:"Defines how the item can be selected. If set to `item`, the item can be selected individually. If set to `withDescendants`, the item and all its descendants can be selected at once."},onSelect:{table:{type:{summary:`(args) => void`,detail:`
{
  event: MouseEvent
  selected: boolean
}
          `}}},hoverable:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},collapsed:{control:{disable:!0},description:`Value for controlled state.`,table:{type:{summary:`boolean`}}},collapsable:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},collapseIconIntent:{control:{type:`radio`},options:[`tertiary`,`component-secondary`,`slot-secondary`],table:{defaultValue:{summary:`default`}}},onCollapsedChange:{table:{type:{summary:`(args) => void`,detail:`
{
  event: MouseEvent
  collapsed: boolean
}
          `}}},items:{control:{disable:!0},description:"Nested items. It takes only one level of nesting. Items must be wrapped in `<ListContainer/>`.",table:{type:{summary:`preact.ComponentChildren`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},z=[{id:`Frame 0`,items:[{id:`Frame 0-0`,items:[{id:`Frame 0-0-0`},{id:`Frame 0-0-1`}]},{id:`Frame 0-1`,items:[{id:`Frame 0-1-0`}]}]},{id:`Frame 1`},{id:`Frame 2`,items:[{id:`Frame 2-0`,items:[{id:`Frame 2-0-0`},{id:`Frame 2-0-1`},{id:`Frame 2-0-2`}]}]}],B={args:{id:void 0,className:``,nestingLevel:0,variant:`default`,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:`individual`,hoverable:!0,collapsable:!1,collapseIconIntent:`tertiary`,onDragStart:L(),onDragEnd:L(),onSelect:L(),onCollapsedChange:L()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
const [selectedItemIds, setSelectedItemIds] = useState([])
const [items, setItems] = useState([
  {
    id: "Frame 0",
    children: [
      {
        id: "Frame 0-0",
        children: [
          { id: "Frame 0-0-0" },
          { id: "Frame 0-0-1" },
        ],
      },
      {
        id: "Frame 0-1",
        children: [
          { id: "Frame 0-1-0" },
        ],
      },
    ],
  },
  { id: "Frame 1" },
  {
    id: "Frame 2",
    children: [
      {
        id: "Frame 2-0",
        children: [
          { id: "Frame 2-0-0" },
          { id: "Frame 2-0-1" },
          { id: "Frame 2-0-2" },
        ],
      },
    ],
  },
])

const renderItems = (
  items,
  level
) => {
  return (
    <ListContainer>
      {items.map((item) => (
        <ListItem 
          key={item.id}
          id={item.id}
          nestingLevel={level}
          selectable={true}
          draggable={true}
          acceptsChildren={true}
          selectionScope="individual"
          hoverable={true}
          items={item.items && item.items.length ? renderItems(item.items, level + 1) : undefined}
          {...args}
        >
          <Text>{item.id}</Text>
        </ListItem>
      ))}
    </ListContainer>
  )
}

<ListContext
  items={items}
  selectedItemIds={selectedItemIds}
  onItemsChange={(args) => setItems(args.items)}
  onSelectionChange={(args) => setSelectedItemIds(args.selectedItemIds)}
>
  {renderItems(items, 0)}
</ListContext>
        `}}},render:e=>{let[n,i]=r(z),[a,s]=r([]),l=(n,r)=>o(_,{children:n.map(n=>t(p,{...e,key:n.id,id:n.id,nestingLevel:r,items:n.items&&n.items.length?l(n.items,r+1):void 0},o(C,{direction:`row`,y:`center`,fullWidth:!0,children:[e.variant===`layer`&&o(f,{glyph:S,intent:`neutral`,size:16,variant:`downscaled`}),o(C,{direction:`row`,y:`center`,children:[e.variant===`layer`&&o(x,{direction:`row`,size:200}),o(c,{wrap:!1,children:n.id})]}),o(c,{intentModifier:`secondary`,wrap:!1,truncate:!0,fullWidth:!0,children:[`\xA0(Level `,r,`)`]})]})))});return o(`div`,{className:`sb-column sb-width-full`,children:o(m,{items:n,selectedItemIds:a,selectionMode:`multi`,onItemsChange:e=>{i(e.items)},onSelectionChange:e=>{s(e.selectedItemIds)},children:l(n,0)})})}},V=k,H=j,U=N,W=F,B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    nestingLevel: 0,
    variant: 'default',
    draggable: true,
    acceptsChildren: true,
    selectable: true,
    selectionScope: 'individual',
    hoverable: true,
    collapsable: false,
    collapseIconIntent: 'tertiary',
    onDragStart: fn(),
    onDragEnd: fn(),
    onSelect: fn(),
    onCollapsedChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
const [selectedItemIds, setSelectedItemIds] = useState([])
const [items, setItems] = useState([
  {
    id: "Frame 0",
    children: [
      {
        id: "Frame 0-0",
        children: [
          { id: "Frame 0-0-0" },
          { id: "Frame 0-0-1" },
        ],
      },
      {
        id: "Frame 0-1",
        children: [
          { id: "Frame 0-1-0" },
        ],
      },
    ],
  },
  { id: "Frame 1" },
  {
    id: "Frame 2",
    children: [
      {
        id: "Frame 2-0",
        children: [
          { id: "Frame 2-0-0" },
          { id: "Frame 2-0-1" },
          { id: "Frame 2-0-2" },
        ],
      },
    ],
  },
])

const renderItems = (
  items,
  level
) => {
  return (
    <ListContainer>
      {items.map((item) => (
        <ListItem 
          key={item.id}
          id={item.id}
          nestingLevel={level}
          selectable={true}
          draggable={true}
          acceptsChildren={true}
          selectionScope="individual"
          hoverable={true}
          items={item.items && item.items.length ? renderItems(item.items, level + 1) : undefined}
          {...args}
        >
          <Text>{item.id}</Text>
        </ListItem>
      ))}
    </ListContainer>
  )
}

<ListContext
  items={items}
  selectedItemIds={selectedItemIds}
  onItemsChange={(args) => setItems(args.items)}
  onSelectionChange={(args) => setSelectedItemIds(args.selectedItemIds)}
>
  {renderItems(items, 0)}
</ListContext>
        \`
      }
    }
  },
  render: args => {
    const [items, setItems] = useState(itemsSample);
    const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
    const renderItems = (items: ListItemData[], level: number) => {
      return <ListContainer>
          {items.map(item => <ListItem {...args} key={item.id} id={item.id} nestingLevel={level} items={item.items && item.items.length ? renderItems(item.items, level + 1) : undefined}>
              <Stack direction="row" y="center" fullWidth>
                {args.variant === 'layer' && <Icon glyph={frame} intent="neutral" size={16} variant="downscaled" />}
                <Stack direction="row" y="center">
                  {args.variant === 'layer' && <Spacing direction="row" size={200} />}
                  <Text wrap={false}>{item.id}</Text>
                </Stack>
                <Text intentModifier="secondary" wrap={false} truncate fullWidth>
                  &nbsp;(Level {level})
                </Text>
              </Stack>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-width-full">
        <ListContext items={items} selectedItemIds={selectedItemIds} selectionMode="multi" onItemsChange={args => {
        setItems(args.items);
      }} onSelectionChange={args => {
        setSelectedItemIds(args.selectedItemIds);
      }}>
          {renderItems(items, 0)}
        </ListContext>
      </div>;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`VariantStory`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`CollapsableStory`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`LayersStory`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`ContentStory`,...W.parameters?.docs?.source}}},G=[`Demo`,`Variant`,`Collapsable`,`Layers`,`Content`]}))();export{H as Collapsable,W as Content,B as Demo,U as Layers,V as Variant,G as __namedExportsOrder,R as default};