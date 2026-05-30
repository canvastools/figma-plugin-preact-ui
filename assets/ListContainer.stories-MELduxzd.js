import{d as a,u as e}from"./hooks.module-6Sbq__eq.js";import{L as p,a as L,b as C}from"./ListItem-Vzn7jxqw.js";import{S as n}from"./Stack-FIJoWfyG.js";import{T as o}from"./Text-BbQ_b1VF.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./Icon-C6_npEhI.js";import"./chevronRight-DD-yb92g.js";import"./chevronDown-CECORTRu.js";import"./dragHandle-D-mnwN4w.js";const D={title:"Components/ListContainer",component:p,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that manages list items. Used inside <a href='/docs/components-listcontext--docs'>`<ListContext/>`</a>."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},S=[{id:"Frame 0",items:[{id:"Frame 0-0",items:[{id:"Frame 0-0-0"},{id:"Frame 0-0-1"}]},{id:"Frame 0-1",items:[{id:"Frame 0-1-0"}]}]},{id:"Frame 1"},{id:"Frame 2",items:[{id:"Frame 2-0",items:[{id:"Frame 2-0-0"},{id:"Frame 2-0-1"},{id:"Frame 2-0-2"}]}]}],i={args:{id:void 0,className:"sb-container"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{code:`
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
    <ListContainer {...args}>
      {items.map((item) => (
        <ListItem 
          key={item.id}
          id={item.id}
          nestingLevel={level}
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
  onItemsChange={(args) => setItems(args.items)}
  onSelectionChange={(args) => setSelectedItemIds(args.selectedItemIds)}
>
  {renderItems(items, 0)}
</ListContext>
        `}}},render:g=>{const[r,u]=a(S),[,F]=a([]),d=(t,m)=>e(p,{...g,children:t.map(s=>e(C,{id:s.id,nestingLevel:m,items:s.items?d(s.items,m+1):void 0,children:e(n,{direction:"row",y:"center",children:[e(n,{direction:"row",y:"center",children:e(o,{wrap:!1,children:s.id})}),e(o,{intentModifier:"secondary",wrap:!1,children:[" (Level ",m,")"]})]})},s.id))});return e("div",{className:"sb-column sb-width-full",children:e(L,{items:r,selectionMode:"multi",onItemsChange:t=>{u(t.items)},onSelectionChange:t=>{F(t.selectedItemIds)},children:d(r,0)})})}};var c,l,I;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: 'sb-container'
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
    <ListContainer {...args}>
      {items.map((item) => (
        <ListItem 
          key={item.id}
          id={item.id}
          nestingLevel={level}
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
    const [, setSelectedItemIds] = useState<string[]>([]);
    const renderItems = (items: ListItemData[], level: number) => {
      return <ListContainer {...args}>
          {items.map(item => <ListItem key={item.id} id={item.id} nestingLevel={level} items={item.items ? renderItems(item.items, level + 1) : undefined}>
              <Stack direction="row" y="center">
                <Stack direction="row" y="center">
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
        <ListContext items={items} selectionMode="multi" onItemsChange={args => {
        setItems(args.items);
      }} onSelectionChange={args => {
        setSelectedItemIds(args.selectedItemIds);
      }}>
          {renderItems(items, 0)}
        </ListContext>
      </div>;
  }
}`,...(I=(l=i.parameters)==null?void 0:l.docs)==null?void 0:I.source}}};const V=["Demo"];export{i as Demo,V as __namedExportsOrder,D as default};
