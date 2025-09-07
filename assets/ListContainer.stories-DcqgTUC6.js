import{d as i,u as t}from"./hooks.module-Dxk9uxGs.js";import{a as m,L as u,b as h}from"./ListItem-CrcTxm4P.js";import{T as g}from"./Text-Dvytwbdg.js";import{S as I}from"./Section-45ajfN6P.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-cP-mn0Xe.js";import"./compat.module-c0s5p6eE.js";import"./Icon-C8lq2hDK.js";const y={title:"Experimental/ListContainer ⚠️",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"<div class='experimental'>Experimental! API may change in future versions.</div> A container component for &lt;ListItem&gt; components. Every level of nesting must be wrapped in a &lt;ListContainer&gt; component."}}},argTypes:{className:{control:{type:"text"}},children:{table:{type:{summary:"JSX.Element"}},control:{disable:!0},description:"Usually &lt;ListItem/&gt; components."}}},b=[{id:"One",children:[{id:"One-1",children:[{id:"One-1-a"},{id:"One-1-b"}]},{id:"One-2",children:[{id:"One-2-a"}]}]},{id:"Two"},{id:"Three",children:[{id:"Three-1",children:[{id:"Three-1-a"},{id:"Three-1-b"},{id:"Three-1-c"}]}]}],n={args:{className:""},parameters:{viewport:{defaultViewport:"large"}},render:c=>{const[s,l]=i(b),[d,p]=i([]);return t("div",{className:"sb-column sb-width-full",children:t(I,{children:t(u,{items:s,selectedItems:d,selectionMode:"multi",onItemsChange:e=>{l(e.items)},onSelectionChange:e=>{p(e.selectedItems)},children:t(m,{...c,children:s.map(e=>t(h,{id:e.id,draggable:!0,selectable:!0,children:t(g,{children:e.id})}))})})})})}};var r,a,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    className: ""
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    return <div className="sb-column sb-width-full">
        <Section>
          <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
          setItems(change.items);
        }} onSelectionChange={change => {
          setSelectedItems(change.selectedItems);
        }}>
            <ListContainer {...args}>
              {items.map(item => {
              return <ListItem id={item.id} draggable={true} selectable={true}>
                    <Text>{item.id}</Text>
                  </ListItem>;
            })}
            </ListContainer>
          </ListContext>
        </Section>
      </div>;
  }
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const O=["Demo"];export{n as Demo,O as __namedExportsOrder,y as default};
