import{u as t,d as I}from"./hooks.module-CGIakYml.js";import{t as z,b as B}from"./typedForwardRef-BtG8EZfd.js";import{a as G,b as H,L as J}from"./ListItem-CmhvpiB1.js";import{T as Q}from"./Text-9aeIDhQ2.js";import"./preact.module-C06nO-nz.js";import"./compat.module-DSB5hssq.js";import"./Icon-tINMxteJ.js";import"./chevronRight-MFw_hrVl.js";import"./chevronDown-H9cucJds.js";import"./dragHandle-DoNOgbIw.js";const U=({id:d,className:o,items:a,listItemProps:s,renderItem:r,selectedItemIds:e,selectionMode:v,deselectOnClickOutside:F,onItemsChange:C,onSelectionChange:S,onKeyDown:L,...f},y)=>{const x=B("List",void 0,void 0),m=(P,c)=>t(J,{children:P.map(n=>{const{id:g,items:l}=n,D=typeof s=="function"?s(n):s,{variant:w,padding:T,draggable:E,onDragStart:M,onDragEnd:N,acceptsChildren:O,selectable:k,selectionScope:A,onSelect:_,hoverable:K,collapsed:V,collapsable:j,onCollapsedChange:q}=D,R=r?r(n):void 0;return t(H,{id:g,variant:w,padding:T,nestingLevel:c,draggable:E,onDragStart:M,onDragEnd:N,acceptsChildren:O,selectable:k,selectionScope:A,onSelect:_,hoverable:K,collapsed:V,collapsable:j,onCollapsedChange:q,items:l&&l.length?m(l,c+1):void 0,children:R},g)})});return t(G,{items:a,selectedItemIds:e,selectionMode:v,deselectOnClickOutside:F,onItemsChange:C,onSelectionChange:S,onKeyDown:L,children:t("div",{id:d,className:[x,o].join(" ").trim(),ref:y,...f,children:m(a,0)})})},h=z(U),de={title:"Components/List",component:h,tags:["autodocs"],parameters:{docs:{description:{component:"A facade component that provides a simplified API for lists."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},items:{control:{disable:!0},description:"<strong>*</strong>Array of items to render in the list.",table:{type:{summary:"ListItemData[]",detail:`
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
`}}}}},W=[{id:"Frame 0",items:[{id:"Frame 0-0",items:[{id:"Frame 0-0-0"},{id:"Frame 0-0-1"}]},{id:"Frame 0-1",items:[{id:"Frame 0-1-0"}]}]},{id:"Frame 1"},{id:"Frame 2",items:[{id:"Frame 2-0",items:[{id:"Frame 2-0-0"},{id:"Frame 2-0-1"},{id:"Frame 2-0-2"}]}]}],i={args:{id:void 0,className:""},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`

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
`}}},render:d=>{const[o,a]=I(W),[s,r]=I([]);return t("div",{className:"sb-column sb-width-full sb-gap-16",children:t(h,{...d,items:o,listItemProps:{variant:"default",draggable:!0,selectable:!0,hoverable:!0,acceptsChildren:!0,collapsable:!0},renderItem:e=>t(Q,{children:e.id}),selectedItemIds:s,selectionMode:"multi",deselectOnClickOutside:!0,onItemsChange:e=>a(e.items),onSelectionChange:e=>r(e.selectedItemIds)})})}};var p,u,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const oe=["Demo"];export{i as Demo,oe as __namedExportsOrder,de as default};
