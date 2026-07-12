import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,w as n}from"./compat.module-BbhDrffC.js";import{n as r,t as i}from"./jsxRuntime.module-B_u_rUE0.js";import{t as a}from"./Text-Bf8YN4P6.js";import{G as o,H as s,K as c,W as l,m as u,t as d}from"./src-Ch66eTMx.js";var f,p,m,h;e((()=>{n(),d(),o(),i(),f={title:`Components/ListContainer`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:"A wrapper component that manages list items. Used inside <a href='/docs/components-listcontext--docs'>`<ListContext/>`</a>."}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},p=[{id:`Frame 0`,items:[{id:`Frame 0-0`,items:[{id:`Frame 0-0-0`},{id:`Frame 0-0-1`}]},{id:`Frame 0-1`,items:[{id:`Frame 0-1-0`}]}]},{id:`Frame 1`},{id:`Frame 2`,items:[{id:`Frame 2-0`,items:[{id:`Frame 2-0-0`},{id:`Frame 2-0-1`},{id:`Frame 2-0-2`}]}]}],m={args:{id:void 0,className:`sb-container`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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
        `}}},render:e=>{let[n,i]=t(p),[,o]=t([]),d=(t,n)=>r(l,{...e,children:t.map(e=>r(s,{id:e.id,nestingLevel:n,items:e.items?d(e.items,n+1):void 0,children:r(u,{direction:`row`,y:`center`,children:[r(u,{direction:`row`,y:`center`,children:r(a,{wrap:!1,children:e.id})}),r(a,{intentModifier:`secondary`,wrap:!1,children:[`\xA0(Level `,n,`)`]})]})},e.id))});return r(`div`,{className:`sb-column sb-width-full`,children:r(c,{items:n,selectionMode:`multi`,onItemsChange:e=>{i(e.items)},onSelectionChange:e=>{o(e.selectedItemIds)},children:d(n,0)})})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Demo`]}))();export{m as Demo,h as __namedExportsOrder,f as default};