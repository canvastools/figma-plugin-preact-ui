import{u as t,d as p}from"./hooks.module-6Sbq__eq.js";import{t as B,b as G}from"./typedForwardRef-CtFJgl6m.js";import{a as H,b as J,L as Q}from"./ListItem-Daog3dTT.js";import{T as U}from"./Text-BbQ_b1VF.js";import"./preact.module-gH5CyEHP.js";import"./compat.module-CHmB9zKI.js";import"./Icon-C6_npEhI.js";import"./chevronRight-DD-yb92g.js";import"./chevronDown-CECORTRu.js";import"./dragHandle-D-mnwN4w.js";const W=({id:d,className:o,items:r,listItemProps:s,renderItem:a,selectedItemIds:e,selectionMode:v,deselectOnClickOutside:F,onItemsChange:C,onSelectionChange:S,onKeyDown:L,tabIndex:f,...y},x)=>{const P=G("List",void 0,void 0),m=(D,c)=>t(Q,{children:D.map(n=>{const{id:g,items:l}=n,w=typeof s=="function"?s(n):s,{variant:T,padding:E,draggable:O,onDragStart:M,onDragEnd:N,acceptsChildren:k,selectable:A,selectionScope:_,onSelect:q,hoverable:K,collapsed:V,collapsable:j,onCollapsedChange:R}=w,z=a?a(n):void 0;return t(J,{id:g,variant:T,padding:E,nestingLevel:c,draggable:O,onDragStart:M,onDragEnd:N,acceptsChildren:k,selectable:A,selectionScope:_,onSelect:q,hoverable:K,collapsed:V,collapsable:j,onCollapsedChange:R,items:l&&l.length?m(l,c+1):void 0,children:z},g)})});return t(H,{items:r,selectedItemIds:e,selectionMode:v,deselectOnClickOutside:F,onItemsChange:C,onSelectionChange:S,onKeyDown:L,children:t("div",{id:d,className:[P,o].join(" ").trim(),ref:x,tabIndex:f,...y,children:m(r,0)})})},h=B(W),oe={title:"Components/List",component:h,tags:["autodocs"],parameters:{docs:{description:{component:"A facade component that provides a simplified API for lists."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},items:{control:{disable:!0},description:"<strong>*</strong>Array of items to render in the list.",table:{type:{summary:"ListItemData[]",detail:`
{
  id: string // required
  selected: boolean
  items: ListItemData[]
}
          `}}},listItemProps:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"Pick<ListItemProps> | ((item: ListItemData) => Pick<ListItemProps>)",detail:`
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
}`}}},renderItem:{control:{disable:!0},description:"Function to render the item.",table:{type:{summary:"(item: ListItemData) => preact.ComponentChildren"}}},"...ListContextProps":{control:{disable:!0},table:{type:{summary:"Pick<ListContextProps>",detail:`
{
  selectedItemIds: string[]
  selectionMode: "single" | "multi"
  deselectOnClickOutside: boolean
  onItemsChange: (args: { items: ListItemData[] }) => void
  onSelectionChange: (args: { selectedItemIds: string[] }) => void
  onKeyDown: (args: { event: KeyboardEvent; itemId: string }) => void
}
`}}},tabIndex:{control:{type:"number"},description:"Tab order of the list root wrapper. Omit when the list should not be in the tab sequence.",table:{type:{summary:"number"}}}}},X=[{id:"Frame 0",items:[{id:"Frame 0-0",items:[{id:"Frame 0-0-0"},{id:"Frame 0-0-1"}]},{id:"Frame 0-1",items:[{id:"Frame 0-1-0"}]}]},{id:"Frame 1"},{id:"Frame 2",items:[{id:"Frame 2-0",items:[{id:"Frame 2-0-0"},{id:"Frame 2-0-1"},{id:"Frame 2-0-2"}]}]}],i={args:{id:void 0,className:""},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`

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
`}}},render:d=>{const[o,r]=p(X),[s,a]=p([]);return t("div",{className:"sb-column sb-width-full sb-gap-16",children:t(h,{...d,items:o,listItemProps:{variant:"default",draggable:!0,selectable:!0,hoverable:!0,acceptsChildren:!0,collapsable:!0},renderItem:e=>t(U,{children:e.id}),selectedItemIds:s,selectionMode:"multi",deselectOnClickOutside:!0,onItemsChange:e=>r(e.items),onSelectionChange:e=>a(e.selectedItemIds)})})}};var I,u,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        language: 'tsx',
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
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const ne=["Demo"];export{i as Demo,ne as __namedExportsOrder,oe as default};
