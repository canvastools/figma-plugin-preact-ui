import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{F as t,P as n,S as r,j as i,w as a}from"./compat.module-gcU-nFZT.js";import{n as o,t as s}from"./jsxRuntime.module-CNTwvFFH.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./ListItem-CUBPPc2N.js";import{n as m,t as h}from"./Text-Cr-51GRl.js";import{n as g,t as ee}from"./Button-DTA_GS6N.js";import{n as _,t as v}from"./Icon-Brb725mi.js";import{n as y,t as b}from"./ButtonIcon-CpTDZvwn.js";import{a as x,i as S,n as C,o as w,r as T,t as E}from"./slot-gh6EWPuv.js";import{n as D,t as te}from"./link-DAdg43gf.js";import{n as ne,t as re}from"./Checkbox-DgbiIxUo.js";import{n as ie,t as O}from"./Input-CyseSWne.js";import{n as ae,t as k}from"./Select-TE3ZUDMN.js";import{n as oe,t as A}from"./ControlGroup-C72eTGaA.js";import{n as se,t as j}from"./ColorSwatch-HXK5SF5m.js";import{n as ce,t as le}from"./SegmentedControl-DqFdzUOP.js";import{n as M,t as N}from"./Spacing-ChjHmQe4.js";import{n as P,t as F}from"./Stack-CRI7JcwR.js";import{n as ue,t as de}from"./Switch-DZzxyGZR.js";import{n as fe,t as I}from"./TimePicker-CzSkusRz.js";var L;function R(){return(R=e((()=>{a(),l(),m(),P(),d(),u(),s(),L={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ListItem variant="default">
  {children}
</ListItem>

<ListItem variant="layer">
  {children}
</ListItem>
`}}},render:()=>{let e=[{id:`Frame 0`,items:[{id:`Frame 0-0`,items:[{id:`Frame 0-0-0`},{id:`Frame 0-0-1`}]},{id:`Frame 0-1`,items:[{id:`Frame 0-1-0`}]}]},{id:`Frame 1`},{id:`Frame 2`,items:[{id:`Frame 2-0`,items:[{id:`Frame 2-0-0`},{id:`Frame 2-0-1`},{id:`Frame 2-0-2`}]}]}],[t,n]=r(e),[i,a]=r([]),[s,l]=r(e),[u,d]=r([]),m=(e,t,n)=>o(f,{children:e.map(e=>o(p,{id:e.id,nestingLevel:t,selectable:!0,variant:n,draggable:!0,acceptsChildren:!0,selectionScope:n===`layer`?`withDescendants`:`individual`,hoverable:!0,items:e.items&&e.items.length?m(e.items,t+1,n):void 0,children:o(F,{direction:`row`,y:`center`,children:[o(h,{wrap:!1,children:e.id}),o(h,{intentModifier:`secondary`,wrap:!1,children:[`\xA0(Level `,t,`)`]})]})},e.id))});return o(`div`,{className:`sb-row sb-width-full sb-gap-40`,children:[o(c,{items:t,selectedItemIds:i,selectionMode:`multi`,onItemsChange:e=>{n(e.items)},onSelectionChange:e=>{a(e.selectedItemIds)},children:m(t,0,`default`)}),o(c,{items:s,selectedItemIds:u,selectionMode:`multi`,onItemsChange:e=>l(e.items),onSelectionChange:e=>d(e.selectedItemIds),children:m(s,0,`layer`)})]})}}})))()}var z;function B(){return(B=e((()=>{a(),l(),m(),P(),d(),u(),s(),z={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ListItem variant="default">
  {children}
</ListItem>

<ListItem variant="layer">
  {children}
</ListItem>
`}}},render:()=>{let e=[{id:`Frame 0`,items:[{id:`Frame 0-0`,items:[{id:`Frame 0-0-0`},{id:`Frame 0-0-1`}]},{id:`Frame 0-1`,items:[{id:`Frame 0-1-0`}]}]},{id:`Frame 1`},{id:`Frame 2`,items:[{id:`Frame 2-0`,items:[{id:`Frame 2-0-0`},{id:`Frame 2-0-1`},{id:`Frame 2-0-2`}]}]}],[t,n]=r(e),[i,a]=r([]),[s,l]=r(e),[u,d]=r([]),m=(e,t,n)=>o(f,{children:e.map(e=>o(p,{id:e.id,nestingLevel:t,selectable:!0,variant:n,draggable:!0,acceptsChildren:!0,selectionScope:n===`layer`?`withDescendants`:`individual`,hoverable:!0,items:e.items&&e.items.length?m(e.items,t+1,n):void 0,collapsable:!0,children:o(F,{direction:`row`,y:`center`,children:[o(h,{wrap:!1,children:e.id}),o(h,{intentModifier:`secondary`,wrap:!1,children:[`\xA0(Level `,t,`)`]})]})},e.id))});return o(`div`,{className:`sb-row sb-width-full sb-gap-40`,children:[o(c,{items:t,selectedItemIds:i,selectionMode:`multi`,onItemsChange:e=>{n(e.items)},onSelectionChange:e=>{a(e.selectedItemIds)},children:m(t,0,`default`)}),o(c,{items:s,selectedItemIds:u,selectionMode:`multi`,onItemsChange:e=>l(e.items),onSelectionChange:e=>d(e.selectedItemIds),children:m(s,0,`layer`)})]})}}})))()}var V;function H(){return(H=e((()=>{n(),a(),l(),m(),P(),M(),d(),_(),x(),S(),E(),u(),s(),V={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`The components allows to reproduce the left panel with layers from Figma.`},source:{code:`
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
`}}},render:()=>{let[e,t]=r([{id:`Frame 0`,type:`frame`,intent:`tertiary`,items:[{id:`Frame 0-0`,type:`frame`,intent:`tertiary`},{id:`Frame 0-1`,type:`frame`,intent:`tertiary`}]},{id:`Frame 1`,type:`frame`,intent:`tertiary`},{id:`Frame 2`,type:`instance`,intent:`component-secondary`,items:[{id:`Frame 2-0`,type:`frame`,intent:`component-secondary`},{id:`Frame 2-1`,type:`slot`,intent:`slot-secondary`}]}]),[n,a]=r([]),s=(e,t)=>o(f,{children:e.map(e=>o(p,{id:e.id,nestingLevel:t,selectable:!0,variant:`layer`,draggable:!0,acceptsChildren:!0,selectionScope:`withDescendants`,hoverable:!0,items:e.items&&e.items.length?s(e.items,t+1):void 0,collapsable:!0,collapseIconIntent:e.intent,children:o(F,{direction:`row`,y:`center`,children:[e.type===`frame`&&o(v,{glyph:T,size:16,intentModifier:n.includes(e.id)?`default`:`tertiary`,variant:`downscaled`}),e.type===`instance`&&o(v,{glyph:w,size:16,intentModifier:n.includes(e.id)?`component`:`component-secondary`,variant:`downscaled`}),e.type===`slot`&&o(v,{glyph:C,size:16,intentModifier:n.includes(e.id)?`slot`:`slot-secondary`,variant:`downscaled`}),o(N,{direction:`row`,size:200}),e.type==`frame`&&o(i,{children:[o(h,{wrap:!1,children:e.id}),o(h,{intentModifier:`secondary`,wrap:!1,children:[`\xA0(Level `,t,`)`]})]}),e.type==`instance`&&o(i,{children:[o(h,{wrap:!1,intentModifier:`component`,children:e.id}),o(h,{intentModifier:`component`,wrap:!1,children:[`\xA0(Level `,t,`)`]})]}),e.type==`slot`&&o(i,{children:[o(h,{wrap:!1,intentModifier:`slot`,children:e.id}),o(h,{intentModifier:`slot`,wrap:!1,children:[`\xA0(Level `,t,`)`]})]})]})},e.id))});return o(`div`,{className:`sb-row sb-width-full sb-gap-40`,children:o(c,{items:e,selectedItemIds:n,selectionMode:`multi`,onItemsChange:e=>t(e.items),onSelectionChange:e=>a(e.selectedItemIds),children:s(e,0)})})}}})))()}var U;function W(){return(W=e((()=>{a(),l(),P(),m(),g(),oe(),fe(),d(),ie(),ae(),y(),ue(),ne(),ce(),se(),te(),u(),s(),U={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"Items can contain any content. `data-pui-interactive='true'` attribute can be applied to custom elements inside the list item to stop propagation of click events."},source:{code:`
<ListItem>
  <input type="text" data-pui-interactive="true"/>
</ListItem>
`}}},render:()=>{let e=({label:e})=>[o(O,{value:e,prefix:o(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,width:24,height:24},children:o(j,{size:`small`,onClick:()=>console.log(`clicked`)})})}),o(O,{ghost:!0,focusOnDoubleClick:!0,placeholder:`Double click to edit`}),o(I,{}),o(k,{placeholder:`Select an option`,options:[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`}],fullWidth:!0}),o(b,{icon:{glyph:D}}),o(b,{icon:{glyph:D},ghost:!0}),o(de,{}),o(re,{defaultChecked:!0}),o(le,{defaultValue:`option1`,options:[{label:`Option 1`,value:`option1`,icon:{glyph:D,size:24}},{label:`Option 2`,value:`option2`,icon:{glyph:D,size:24}}]})],t=({label:e})=>[o(A,{groupFocus:!0,children:[o(O,{value:e,prefix:o(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,width:24,height:24},children:o(j,{size:`small`,onClick:()=>console.log(`clicked`)})})}),o(O,{placeholder:`test`}),o(b,{icon:{glyph:D}})]}),o(A,{groupFocus:!0,children:[o(I,{}),`,`,o(k,{placeholder:`Select an option`,options:[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`}]}),o(ee,{children:`Button`})]}),o(A,{children:[o(b,{icon:{glyph:D}}),o(b,{icon:{glyph:D}})]})],n=[{id:`Frame 0`,items:[{id:`Frame 0-0`,items:[{id:`Frame 0-0-0`},{id:`Frame 0-0-1`}]},{id:`Frame 0-1`,items:[{id:`Frame 0-1-0`}]}]},{id:`Frame 1`},{id:`Frame 2`,items:[{id:`Frame 2-0`,items:[{id:`Frame 2-0-0`},{id:`Frame 2-0-1`},{id:`Frame 2-0-2`}]}]}],[i,a]=r(n),[s,l]=r([]),[u,d]=r(n),[m,g]=r([]),[_,v]=r(n),[y,x]=r([]),[S,C]=r(n),[w,T]=r([]),E=(n,r,i,a=!1)=>o(f,{children:n.map(n=>o(p,{id:n.id,nestingLevel:r,selectable:!0,variant:i,draggable:!0,acceptsChildren:!0,selectionScope:`withDescendants`,collapsable:!0,hoverable:!0,items:n.items&&n.items.length?E(n.items,r+1,i):void 0,children:o(F,{direction:`row`,y:`center`,fullWidth:!0,children:o(F,{direction:`row`,spacing:200,y:`center`,fullWidth:!0,children:o(a?t:e,{label:n.id})})})},n.id))});return o(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[o(h,{children:`Default`}),o(c,{items:i,selectedItemIds:s,selectionMode:`multi`,onItemsChange:e=>a(e.items),onSelectionChange:e=>l(e.selectedItemIds),children:E(i,0,`default`,!1)}),o(c,{items:u,selectedItemIds:m,selectionMode:`multi`,onItemsChange:e=>{d(e.items)},onSelectionChange:e=>{g(e.selectedItemIds)},children:E(u,0,`layer`,!1)}),o(h,{children:`Grouped`}),o(c,{items:_,selectedItemIds:y,selectionMode:`multi`,onItemsChange:e=>v(e.items),onSelectionChange:e=>x(e.selectedItemIds),children:E(_,0,`default`,!0)}),o(c,{items:S,selectedItemIds:w,selectionMode:`multi`,onItemsChange:e=>{C(e.items)},onSelectionChange:e=>{T(e.selectedItemIds)},children:E(S,0,`layer`,!0)})]})}}})))()}var G,K,q,J,Y,X,Z,Q,$;function pe(){return(pe=e((()=>{a(),R(),B(),H(),W(),d(),l(),P(),m(),M(),_(),S(),u(),s(),n(),{fn:G}=__STORYBOOK_MODULE_TEST__,K={title:`Components/ListItem`,component:p,tags:[`autodocs`],parameters:{docs:{description:{component:"A component for creating a list item. Used inside <a href='/docs/components-listcontainer--docs'>`<ListContainer/>`</a>."}}},argTypes:{id:{control:{type:`text`},description:`<strong>*</strong>`},className:{control:{type:`text`}},variant:{control:{type:`radio`},options:[`default`,`layer`],table:{defaultValue:{summary:`default`}}},nestingLevel:{control:{type:`number`},description:`<strong>*</strong>`,table:{defaultValue:{summary:`0`},type:{summary:`number`}}},draggable:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},tabIndex:{control:{type:`number`},description:`Tab order of the list item. Omit to use 0 when selectable, draggable, or collapsable; otherwise not tabbable.`,table:{type:{summary:`number`}}},onDragStart:{table:{type:{summary:`(args) => void`,detail:`
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
          `}}},items:{control:{disable:!0},description:"Nested items. It takes only one level of nesting. Items must be wrapped in `<ListContainer/>`.",table:{type:{summary:`preact.ComponentChildren`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},q=[{id:`Frame 0`,items:[{id:`Frame 0-0`,items:[{id:`Frame 0-0-0`},{id:`Frame 0-0-1`}]},{id:`Frame 0-1`,items:[{id:`Frame 0-1-0`}]}]},{id:`Frame 1`},{id:`Frame 2`,items:[{id:`Frame 2-0`,items:[{id:`Frame 2-0-0`},{id:`Frame 2-0-1`},{id:`Frame 2-0-2`}]}]}],J={args:{id:void 0,className:``,nestingLevel:0,variant:`default`,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:`individual`,hoverable:!0,collapsable:!1,collapseIconIntent:`tertiary`,onDragStart:G(),onDragEnd:G(),onSelect:G(),onCollapsedChange:G()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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
        `}}},render:e=>{let[n,i]=r(q),[a,s]=r([]),l=(n,r)=>o(f,{children:n.map(n=>t(p,{...e,key:n.id,id:n.id,nestingLevel:r,items:n.items&&n.items.length?l(n.items,r+1):void 0},o(F,{direction:`row`,y:`center`,fullWidth:!0,children:[e.variant===`layer`&&o(v,{glyph:T,intent:`neutral`,size:16,variant:`downscaled`}),o(F,{direction:`row`,y:`center`,children:[e.variant===`layer`&&o(N,{direction:`row`,size:200}),o(h,{wrap:!1,children:n.id})]}),o(h,{intentModifier:`secondary`,wrap:!1,truncate:!0,fullWidth:!0,children:[`\xA0(Level `,r,`)`]})]})))});return o(`div`,{className:`sb-column sb-width-full`,children:o(c,{items:n,selectedItemIds:a,selectionMode:`multi`,onItemsChange:e=>{i(e.items)},onSelectionChange:e=>{s(e.selectedItemIds)},children:l(n,0)})})}},Y=L,X=z,Z=V,Q=U,$=[`Demo`,`Variant`,`Collapsable`,`Layers`,`Content`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`VariantStory`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`CollapsableStory`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`LayersStory`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`ContentStory`,...Q.parameters?.docs?.source}}}})))()}pe();export{X as Collapsable,Q as Content,J as Demo,Z as Layers,Y as Variant,$ as __namedExportsOrder,K as default};