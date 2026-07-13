import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,w as n}from"./compat.module-BbhDrffC.js";import{n as r,t as i}from"./jsxRuntime.module-B_u_rUE0.js";import{t as a}from"./Text-Bf8YN4P6.js";import{H as o,K as s,W as c,g as l,m as u,q as d,t as f}from"./src-nP44HpfJ.js";var p,m,h,g,_;e((()=>{n(),f(),d(),i(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/ListContext`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`A context provider that manages a list state.`}}},argTypes:{items:{control:{disable:!0},table:{type:{summary:`ListItemData[]`,detail:`
{
  id: string // required
  selected: boolean
  items: ListItemData[]
}
          `}}},selectedItemIds:{control:{disable:!0},table:{type:{summary:`string[]`}}},selectionMode:{control:{type:`radio`},options:[void 0,`single`,`multi`]},deselectOnClickOutside:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},onItemsChange:{table:{type:{summary:`(args) => void`,detail:`
args: {
  items: ListItemData[]
}
          `}}},onSelectionChange:{table:{type:{summary:`(args) => void`,detail:`
args: {
  selectedItemIds: string[]
}
          `}}},onKeyDown:{table:{type:{summary:`(args) => void`,detail:`
args: {
  event: KeyboardEvent
  itemId: string
}
          `}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},useListContext:{control:{disable:!0},table:{type:{summary:`Hook`,detail:`
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
  ) => Set<string> // resulting selection
  registerItemMeta: (
    id: string,
    meta: {
      selectable: boolean;
      selectionScope: "item" | "withDescendants";
      draggable: boolean
    }
  ) => () => void
  getPathForId: (id: string) => number[] | null
  getItemMeta: (id: string) => meta | undefined
  getBranchIds: (id: string) => string[] // item + selectable descendants
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
        `}}}}},h=[{id:`Frame 0`,items:[{id:`Frame 0-0`,items:[{id:`Frame 0-0-0`},{id:`Frame 0-0-1`}]},{id:`Frame 0-1`,items:[{id:`Frame 0-1-0`}]}]},{id:`Frame 1`},{id:`Frame 2`,items:[{id:`Frame 2-0`,items:[{id:`Frame 2-0-0`},{id:`Frame 2-0-1`},{id:`Frame 2-0-2`}]}]}],g={args:{selectionMode:void 0,deselectOnClickOutside:!1,onItemsChange:p(),onSelectionChange:p()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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
        `}}},render:e=>{let[n,i]=t(h),[d,f]=t([]),p=(t,n)=>r(c,{children:t.map(t=>r(o,{id:t.id,nestingLevel:n,selectable:!0,draggable:!0,acceptsChildren:!0,hoverable:!0,items:t.items?p(t.items,n+1):void 0,children:r(u,{direction:`row`,y:`center`,children:[r(u,{direction:`row`,y:`center`,children:[e.variant===`layer`&&r(l,{direction:`row`,size:100}),r(a,{wrap:!1,children:t.id})]}),r(a,{intentModifier:`secondary`,wrap:!1,children:[`\xA0(Level `,n,`)`]})]})},t.id))});return r(`div`,{className:`sb-column sb-width-full`,children:r(s,{...e,items:n,selectedItemIds:d,onItemsChange:e=>i(e.items),onSelectionChange:e=>f(e.selectedItemIds),children:p(n,0)})})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Demo`]}))();export{g as Demo,_ as __namedExportsOrder,m as default};