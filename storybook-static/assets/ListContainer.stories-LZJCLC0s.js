import{u as t}from"./jsxRuntime.module-CXXlufuJ.js";import{d as r}from"./compat.module-C_m5Zvzo.js";import{L as m,a as g,b as u}from"./ListItem-Cmed4_yL.js";import{T as h}from"./Text-Zs2635gN.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-DzGXX2Gk.js";import"./Icon-DvMK2avU.js";const f={title:"Components/ListContainer",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"A container component for &lt;ListItem&gt; components. Every level of nesting must be wrapped in a &lt;ListContainer&gt; component."}}},argTypes:{className:{control:{type:"text"}},children:{table:{type:{summary:"JSX.Element"}},control:{disable:!0},description:"Usually &lt;ListItem/&gt; components."}}},I=[{id:"One",children:[{id:"One-1",children:[{id:"One-1-a"},{id:"One-1-b"}]},{id:"One-2",children:[{id:"One-2-a"}]}]},{id:"Two"},{id:"Three",children:[{id:"Three-1",children:[{id:"Three-1-a"},{id:"Three-1-b"},{id:"Three-1-c"}]}]}],n={args:{className:""},render:c=>{const[s,d]=r(I),[l,p]=r([]);return t("div",{className:"sb-column sb-gap-16",children:t(g,{items:s,selectedItems:l,selectionMode:"multi",onItemsChange:e=>{d(e.items)},onSelectionChange:e=>{p(e.selectedItems)},children:t(m,{...c,children:s.map(e=>(console.log(e),t(u,{id:e.id,draggable:!0,selectable:!0,children:t(h,{variant:"body",context:"neutral",children:e.id})})))})})})}};var o,i,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    className: ""
  },
  render: args => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    return <div className="sb-column sb-gap-16">
        <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
        setItems(change.items);
      }} onSelectionChange={change => {
        setSelectedItems(change.selectedItems);
      }}>
          <ListContainer {...args}>
            {items.map(item => {
            console.log(item);
            return <ListItem id={item.id} draggable={true} selectable={true}>
                  <Text variant="body" context="neutral">
                    {item.id}
                  </Text>
                </ListItem>;
          })}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const v=["Demo"];export{n as Demo,v as __namedExportsOrder,f as default};
