import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,w as n}from"./compat.module-BbhDrffC.js";import{n as r,t as i}from"./jsxRuntime.module-B_u_rUE0.js";import{_ as a,s as o,t as s}from"./utils-k8SxZ3Xg.js";import{t as c}from"./Text-Bf8YN4P6.js";import{G as l,H as u,K as d,U as f,W as p,q as m,t as h}from"./src-Ch66eTMx.js";var g=e((()=>{})),_,v,y=e((()=>{s(),m(),l(),f(),g(),i(),_=({id:e,className:t,items:n,listItemProps:i,renderItem:o,selectedItemIds:s,selectionMode:c,deselectOnClickOutside:l,onItemsChange:f,onSelectionChange:m,onKeyDown:h,...g},_)=>{let v=a(`List`,void 0,void 0),y=(e,t)=>r(p,{children:e.map(e=>{let{id:n,items:a}=e,{variant:s,padding:c,draggable:l,onDragStart:d,onDragEnd:f,acceptsChildren:p,selectable:m,selectionScope:h,onSelect:g,hoverable:_,collapsed:v,collapsable:b,onCollapsedChange:x}=typeof i==`function`?i(e):i,S=o?o(e):void 0;return r(u,{id:n,variant:s,padding:c,nestingLevel:t,draggable:l,onDragStart:d,onDragEnd:f,acceptsChildren:p,selectable:m,selectionScope:h,onSelect:g,hoverable:_,collapsed:v,collapsable:b,onCollapsedChange:x,items:a&&a.length?y(a,t+1):void 0,children:S},n)})});return r(d,{items:n,selectedItemIds:s,selectionMode:c,deselectOnClickOutside:l,onItemsChange:f,onSelectionChange:m,onKeyDown:h,children:r(`div`,{id:e,className:[v,t].join(` `).trim(),ref:_,...g,children:y(n,0)})})},v=o(_)})),b,x,S,C;e((()=>{n(),h(),y(),i(),b={title:`Components/List`,component:v,tags:[`autodocs`],parameters:{docs:{description:{component:`A facade component that provides a simplified API for lists.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},items:{control:{disable:!0},description:`<strong>*</strong>Array of items to render in the list.`,table:{type:{summary:`ListItemData[]`,detail:`
{
  id: string // required
  selected: boolean
  items: ListItemData[]
}
          `}}},listItemProps:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`Pick<ListItemProps> | ((item: ListItemData) => Pick<ListItemProps>)`,detail:`
{
  variant: "default" | "layer"
  padding: {
    top: ListItemPadding
    right: ListItemPadding
    bottom: ListItemPadding
    left: ListItemPadding
  }
  draggable: boolean
  onDragStart: (args: { event: DragEvent }) => void
  onDragEnd: (args: { event: DragEvent }) => void
  acceptsChildren: boolean
  selectable: boolean
  selectionScope: "individual" | "withDescendants"
  onSelect: (args: { event: MouseEvent; selected: boolean }) => void
  hoverable: boolean
  collapsed: boolean
  collapsable: boolean
  onCollapsedChange: (args: { event: MouseEvent; collapsed: boolean }) => void
}`}}},renderItem:{control:{disable:!0},description:`Function to render the item.`,table:{type:{summary:`(item: ListItemData) => preact.ComponentChildren`}}},"...ListContextProps":{control:{disable:!0},table:{type:{summary:`Pick<ListContextProps>`,detail:`
{
  selectedItemIds: string[]
  selectionMode: "single" | "multi"
  deselectOnClickOutside: boolean
  onItemsChange: (args: { items: ListItemData[] }) => void
  onSelectionChange: (args: { selectedItemIds: string[] }) => void
  onKeyDown: (args: { event: KeyboardEvent; itemId: string }) => void
}
`}}}}},x=[{id:`Frame 0`,items:[{id:`Frame 0-0`,items:[{id:`Frame 0-0-0`},{id:`Frame 0-0-1`}]},{id:`Frame 0-1`,items:[{id:`Frame 0-1-0`}]}]},{id:`Frame 1`},{id:`Frame 2`,items:[{id:`Frame 2-0`,items:[{id:`Frame 2-0-0`},{id:`Frame 2-0-1`},{id:`Frame 2-0-2`}]}]}],S={args:{id:void 0,className:``},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`

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

 <List
  items={items}
  listItemProps={{
    draggable: true,
    selectable: true,
    hoverable: true,
    acceptsChildren: true,
    collapsable: true,
  }}
  renderItem={(item) => <Text>{item.id}</Text>}
  selectedItemIds={selectedItemIds}
  selectionMode="multi"
  onItemsChange={(args) => setItems(args.items)}
  onSelectionChange={(args) => setSelectedItemIds(args.selectedItemIds)}
  {...args}
/>
`}}},render:e=>{let[n,i]=t(x),[a,o]=t([]);return r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:r(v,{...e,items:n,listItemProps:{variant:`default`,draggable:!0,selectable:!0,hoverable:!0,acceptsChildren:!0,collapsable:!0},renderItem:e=>r(c,{children:e.id}),selectedItemIds:a,selectionMode:`multi`,deselectOnClickOutside:!0,onItemsChange:e=>i(e.items),onSelectionChange:e=>o(e.selectedItemIds)})})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: ''
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

 <List
  items={items}
  listItemProps={{
    draggable: true,
    selectable: true,
    hoverable: true,
    acceptsChildren: true,
    collapsable: true,
  }}
  renderItem={(item) => <Text>{item.id}</Text>}
  selectedItemIds={selectedItemIds}
  selectionMode="multi"
  onItemsChange={(args) => setItems(args.items)}
  onSelectionChange={(args) => setSelectedItemIds(args.selectedItemIds)}
  {...args}
/>
\`
      }
    }
  },
  render: args => {
    const [items, setItems] = useState(itemsSample);
    const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
    return <div className="sb-column sb-width-full sb-gap-16">
        <List {...args} items={items} listItemProps={{
        variant: 'default',
        draggable: true,
        selectable: true,
        hoverable: true,
        acceptsChildren: true,
        collapsable: true
      }} renderItem={item => <Text>{item.id}</Text>} selectedItemIds={selectedItemIds} selectionMode="multi" deselectOnClickOutside={true} onItemsChange={args => setItems(args.items)} onSelectionChange={args => setSelectedItemIds(args.selectedItemIds)} />
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Demo`]}))();export{S as Demo,C as __namedExportsOrder,b as default};