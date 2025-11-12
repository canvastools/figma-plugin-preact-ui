import{d as r,u as t}from"./hooks.module-Dxk9uxGs.js";import{a as m,L as u,b as g}from"./ListItem-iq4rNf8g.js";import{T as h}from"./Text-C438qO9S.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";import"./Icon-Btq4UltS.js";import"./chevronRight-DRcRefJO.js";import"./chevronDown-CnPbqtrs.js";import"./dragHandle-DdSSqxwz.js";const O={title:"Experimental/ListContainer ⚠️",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"<div class='experimental'>Experimental! API may change in future versions.</div> A container component for &lt;ListItem&gt; components. Every level of nesting must be wrapped in a &lt;ListContainer&gt; component."}}},argTypes:{className:{control:{type:"text"}},children:{table:{type:{summary:"JSX.Element"}},control:{disable:!0},description:"Usually &lt;ListItem/&gt; components."}}},I=[{id:"One",children:[{id:"One-1",children:[{id:"One-1-a"},{id:"One-1-b"}]},{id:"One-2",children:[{id:"One-2-a"}]}]},{id:"Two"},{id:"Three",children:[{id:"Three-1",children:[{id:"Three-1-a"},{id:"Three-1-b"},{id:"Three-1-c"}]}]}],n={args:{className:""},parameters:{viewport:{defaultViewport:"large"}},render:l=>{const[s,c]=r(I),[d,p]=r([]);return t("div",{className:"sb-column sb-width-full",children:t(u,{items:s,selectedItems:d,selectionMode:"multi",onItemsChange:e=>{c(e.items)},onSelectionChange:e=>{p(e.selectedItems)},children:t(m,{...l,children:s.map(e=>t(g,{id:e.id,draggable:!0,selectable:!0,children:t(h,{children:e.id})}))})})})}};var i,a,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      </div>;
  }
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const E=["Demo"];export{n as Demo,E as __namedExportsOrder,O as default};
