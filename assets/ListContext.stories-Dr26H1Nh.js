import{d,u as e}from"./hooks.module-6Sbq__eq.js";import{f as o}from"./index-B4E_jmCM.js";import{a as p,b as C,L as S}from"./ListItem-Daog3dTT.js";import{S as l}from"./Stack-FIJoWfyG.js";import{S as F}from"./Spacing-BJUHNIx5.js";import{T as c}from"./Text-BbQ_b1VF.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./Icon-C6_npEhI.js";import"./chevronRight-DD-yb92g.js";import"./chevronDown-CECORTRu.js";import"./dragHandle-D-mnwN4w.js";const V={title:"Components/ListContext",component:p,tags:["autodocs"],parameters:{docs:{description:{component:"A context provider that manages a list state."}}},argTypes:{items:{control:{disable:!0},table:{type:{summary:"ListItemData[]",detail:`
{
  id: string // required
  selected: boolean
  items: ListItemData[]
}
          `}}},selectedItemIds:{control:{disable:!0},table:{type:{summary:"string[]"}}},selectionMode:{control:{type:"radio"},options:[void 0,"single","multi"]},deselectOnClickOutside:{control:{type:"boolean"},defaultValue:{summary:!1}},onItemsChange:{table:{type:{summary:"(args) => void",detail:`
args: {
  items: ListItemData[]
}
          `}}},onSelectionChange:{table:{type:{summary:"(args) => void",detail:`
args: {
  selectedItemIds: string[]
}
          `}}},onKeyDown:{table:{type:{summary:"(args) => void",detail:`
args: {
  event: KeyboardEvent
  itemId: string
}
          `}}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},useListContext:{control:{disable:!0},table:{type:{summary:"Hook",detail:`
{
  items: ListItemData[]
  selectedItemIds: string[] // Set
  selectionOriginIds: string[] // Set
  deselectOnClickOutside: boolean
  setSelection: (itemIds: string[]) => void
  toggleSelect: (
    itemId: string
    options: {
      range: boolean;
      additive: boolean
    }
  ) => void
  registerItemMeta: (
    id: string,
    meta: { 
      selectable: boolean;
      selectionScope: "item" | "withDescendants"
    }
  ) => () => void
  getPathForId: (id: string) => number[] | null
  registerItemPath: (id: string, path: number[]) => () => void
  reorderItems: (
    itemIds: string[],
    targetIndex: number,
    targetParentPath?: number[]
  ) => void
  selectionMode: "none" | "single" | "multi"
  registerRootElement?: (el: HTMLElement | null) => () => void
  dragImage: HTMLDivElement | null
  onKeyDown?: (args: { event: KeyboardEvent; itemId: string }) => void
}
        `}}}}},L=[{id:"Frame 0",items:[{id:"Frame 0-0",items:[{id:"Frame 0-0-0"},{id:"Frame 0-0-1"}]},{id:"Frame 0-1",items:[{id:"Frame 0-1-0"}]}]},{id:"Frame 1"},{id:"Frame 2",items:[{id:"Frame 2-0",items:[{id:"Frame 2-0-0"},{id:"Frame 2-0-1"},{id:"Frame 2-0-2"}]}]}],i={args:{selectionMode:void 0,deselectOnClickOutside:!1,onItemsChange:o(),onSelectionChange:o()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{code:`
const [selectedItemIds, setSelectedItemIds] = useState([])
const [items, setItems] = useState([
  {
    id: "Frame 0",
    items: [
      {
        id: "Frame 0-0",
        items: [
          { id: "Frame 0-0-0" },
          { id: "Frame 0-0-1" },
        ],
      },
      {
        id: "Frame 0-1",
        items: [
          { id: "Frame 0-1-0" },
        ],
      },
    ],
  },
  { id: "Frame 1" },
  {
    id: "Frame 2",
    items: [
      {
        id: "Frame 2-0",
        items: [
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
          hoverable={true}
          items={item.items ? renderItems(item.items, level + 1) : undefined}
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
  onItemsChange={(args) => {setItems(args.items)}}
  onSelectionChange={(args) => {setSelectedItemIds(args.selectedItemIds)}}
  {...args}
>
  {renderItems(items, 0)}
</ListContext>        
        `}}},render:m=>{const[a,v]=d(L),[b,h]=d([]),n=(t,r)=>e(S,{children:t.map(s=>e(C,{id:s.id,nestingLevel:r,selectable:!0,draggable:!0,acceptsChildren:!0,hoverable:!0,items:s.items?n(s.items,r+1):void 0,children:e(l,{direction:"row",y:"center",children:[e(l,{direction:"row",y:"center",children:[m.variant==="layer"&&e(F,{direction:"row",size:100}),e(c,{wrap:!1,children:s.id})]}),e(c,{intentModifier:"secondary",wrap:!1,children:[" (Level ",r,")"]})]})},s.id))});return e("div",{className:"sb-column sb-width-full",children:e(p,{...m,items:a,selectedItemIds:b,onItemsChange:t=>v(t.items),onSelectionChange:t=>h(t.selectedItemIds),children:n(a,0)})})}};var I,g,u;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  // tags: ["!autodocs"],
  args: {
    selectionMode: undefined,
    deselectOnClickOutside: false,
    onItemsChange: fn(),
    onSelectionChange: fn()
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
    items: [
      {
        id: "Frame 0-0",
        items: [
          { id: "Frame 0-0-0" },
          { id: "Frame 0-0-1" },
        ],
      },
      {
        id: "Frame 0-1",
        items: [
          { id: "Frame 0-1-0" },
        ],
      },
    ],
  },
  { id: "Frame 1" },
  {
    id: "Frame 2",
    items: [
      {
        id: "Frame 2-0",
        items: [
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
          hoverable={true}
          items={item.items ? renderItems(item.items, level + 1) : undefined}
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
  onItemsChange={(args) => {setItems(args.items)}}
  onSelectionChange={(args) => {setSelectedItemIds(args.selectedItemIds)}}
  {...args}
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
          {items.map(item => <ListItem key={item.id} id={item.id} nestingLevel={level} selectable={true} draggable={true} acceptsChildren={true} hoverable={true} items={item.items ? renderItems(item.items, level + 1) : undefined}>
              <Stack direction="row" y="center">
                <Stack direction="row" y="center">
                  {/* @ts-expect-error - Storybook types hack */}
                  {args.variant === 'layer' && <Spacing direction="row" size={100} />}
                  <Text wrap={false}>{item.id}</Text>
                </Stack>
                <Text intentModifier="secondary" wrap={false}>
                  &nbsp;(Level {level})
                </Text>
              </Stack>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-width-full">
        <ListContext {...args} items={items} selectedItemIds={selectedItemIds} onItemsChange={args => setItems(args.items)} onSelectionChange={args => setSelectedItemIds(args.selectedItemIds)}>
          {renderItems(items, 0)}
        </ListContext>
      </div>;
  }
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const z=["Demo"];export{i as Demo,z as __namedExportsOrder,V as default};
