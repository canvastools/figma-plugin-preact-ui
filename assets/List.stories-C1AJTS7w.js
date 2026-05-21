import{u as t,d as p}from"./hooks.module-6Sbq__eq.js";import{t as z,b as B}from"./typedForwardRef-CtFJgl6m.js";import{a as G,b as H,L as J}from"./ListItem-bTVkfcuS.js";import{T as K}from"./Text-BbQ_b1VF.js";import"./preact.module-gH5CyEHP.js";import"./compat.module-CHmB9zKI.js";import"./Icon-C6_npEhI.js";import"./chevronRight-DD-yb92g.js";import"./chevronDown-CECORTRu.js";import"./dragHandle-D-mnwN4w.js";const Q=({id:d,className:o,items:a,listItemProps:s,renderItem:r,selectedItemIds:e,selectionMode:v,deselectOnClickOutside:F,onItemsChange:C,onSelectionChange:S,...L},f)=>{const y=B("List",void 0,void 0),m=(x,c)=>t(J,{children:x.map(n=>{const{id:g,items:l}=n,P=typeof s=="function"?s(n):s,{variant:D,padding:T,draggable:w,onDragStart:E,onDragEnd:M,acceptsChildren:N,selectable:O,selectionScope:k,onSelect:A,hoverable:_,collapsed:V,collapsable:j,onCollapsedChange:q}=P,R=r?r(n):void 0;return t(H,{id:g,variant:D,padding:T,nestingLevel:c,draggable:w,onDragStart:E,onDragEnd:M,acceptsChildren:N,selectable:O,selectionScope:k,onSelect:A,hoverable:_,collapsed:V,collapsable:j,onCollapsedChange:q,items:l&&l.length?m(l,c+1):void 0,children:R},g)})});return t(G,{items:a,selectedItemIds:e,selectionMode:v,deselectOnClickOutside:F,onItemsChange:C,onSelectionChange:S,children:t("div",{id:d,className:[y,o].join(" ").trim(),ref:f,...L,children:m(a,0)})})},h=z(Q),ie={title:"Components/List",component:h,tags:["autodocs"],parameters:{docs:{description:{component:"A facade component that provides a simplified API for lists."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},items:{control:{disable:!0},description:"<strong>*</strong>Array of items to render in the list.",table:{type:{summary:"ListItemData[]",detail:`
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
}
`}}}}},U=[{id:"Frame 0",items:[{id:"Frame 0-0",items:[{id:"Frame 0-0-0"},{id:"Frame 0-0-1"}]},{id:"Frame 0-1",items:[{id:"Frame 0-1-0"}]}]},{id:"Frame 1"},{id:"Frame 2",items:[{id:"Frame 2-0",items:[{id:"Frame 2-0-0"},{id:"Frame 2-0-1"},{id:"Frame 2-0-2"}]}]}],i={args:{id:void 0,className:""},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`

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
`}}},render:d=>{const[o,a]=p(U),[s,r]=p([]);return t("div",{className:"sb-column sb-width-full sb-gap-16",children:t(h,{...d,items:o,listItemProps:{variant:"default",draggable:!0,selectable:!0,hoverable:!0,acceptsChildren:!0,collapsable:!0},renderItem:e=>t(K,{children:e.id}),selectedItemIds:s,selectionMode:"multi",deselectOnClickOutside:!0,onItemsChange:e=>a(e.items),onSelectionChange:e=>r(e.selectedItemIds)})})}};var I,u,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const de=["Demo"];export{i as Demo,de as __namedExportsOrder,ie as default};
