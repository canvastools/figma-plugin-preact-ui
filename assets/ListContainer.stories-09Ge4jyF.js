import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,w as n}from"./compat.module-gcU-nFZT.js";import{n as r,t as i}from"./jsxRuntime.module-CNTwvFFH.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./ListItem-CUBPPc2N.js";import{n as d,t as f}from"./Text-Cr-51GRl.js";import{n as p,t as m}from"./Stack-CRI7JcwR.js";var h,g,_,v;function y(){return(y=e((()=>{n(),c(),s(),p(),d(),o(),i(),h={title:`Components/ListContainer`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:"A wrapper component that manages list items. Used inside <a href='/docs/components-listcontext--docs'>`<ListContext/>`</a>."}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},g=[{id:`Frame 0`,items:[{id:`Frame 0-0`,items:[{id:`Frame 0-0-0`},{id:`Frame 0-0-1`}]},{id:`Frame 0-1`,items:[{id:`Frame 0-1-0`}]}]},{id:`Frame 1`},{id:`Frame 2`,items:[{id:`Frame 2-0`,items:[{id:`Frame 2-0-0`},{id:`Frame 2-0-1`},{id:`Frame 2-0-2`}]}]}],_={args:{id:void 0,className:`sb-container`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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
          items={item.items && item.items.length ? renderItems(item.items, level + 1) : undefined}
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
        `}}},render:e=>{let[n,i]=t(g),[,o]=t([]),s=(t,n)=>r(l,{...e,children:t.map(e=>r(u,{id:e.id,nestingLevel:n,items:e.items&&e.items.length?s(e.items,n+1):void 0,children:r(m,{direction:`row`,y:`center`,children:[r(m,{direction:`row`,y:`center`,children:r(f,{wrap:!1,children:e.id})}),r(f,{intentModifier:`secondary`,wrap:!1,children:[`\xA0(Level `,n,`)`]})]})},e.id))});return r(`div`,{className:`sb-column sb-width-full`,children:r(a,{items:n,selectionMode:`multi`,onItemsChange:e=>{i(e.items)},onSelectionChange:e=>{o(e.selectedItemIds)},children:s(n,0)})})}},v=[`Demo`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
          items={item.items && item.items.length ? renderItems(item.items, level + 1) : undefined}
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
          {items.map(item => <ListItem key={item.id} id={item.id} nestingLevel={level} items={item.items && item.items.length ? renderItems(item.items, level + 1) : undefined}>
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
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as Demo,v as __namedExportsOrder,h as default};