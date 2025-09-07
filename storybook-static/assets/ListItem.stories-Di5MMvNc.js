import{d as o,u as e}from"./hooks.module-Dxk9uxGs.js";import{_ as V}from"./preact.module-DKQ80Dzn.js";import{f}from"./index-BWINGljf.js";import{b as c,L as p,a as d}from"./ListItem-CrcTxm4P.js";import{T as r}from"./Text-Dvytwbdg.js";import{I as N}from"./Input-Cd8rGMV0.js";import{C as oe}from"./Checkbox-D8VWU4Bi.js";import{I as D}from"./Icon-C8lq2hDK.js";import{B as de}from"./Button-CIwLKvHk.js";import{B as me}from"./ButtonIcon-DcWQ0H1k.js";import{B as H}from"./ButtonIconToggle-OxRAvply.js";import{S as g}from"./Section-45ajfN6P.js";import{S as m}from"./Stack-CayROFGf.js";import"./typedForwardRef-cP-mn0Xe.js";import"./compat.module-c0s5p6eE.js";const ke={title:"Experimental/ListItem ⚠️",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"<div class='experimental'>Experimental! API may change in future versions.</div> Always used within &lt;ListContext/&gt; and &lt;ListContainer/&gt;. It may contain any content."}}},argTypes:{className:{control:{type:"text"}},id:{control:{disable:!0},description:"Unique identifier of the item."},isNested:{table:{type:{summary:"boolean"}},control:{disable:!0},description:"Indicates if the item is nested."},nestingLevel:{table:{type:{summary:"number"}},control:{disable:!0},defaultValue:{summary:"0"},description:"Nesting level of the item. Must be provided if the item is nested."},draggable:{control:{type:"boolean"}},dragHandle:{control:{type:"radio"},options:["default","container"],defaultValue:{summary:"default"},description:"Defines how the item can be dragged. If set to `container`, the item can be dragged by the container itself. If set to `default`, the item can be dragged by the drag handle. Works only if the item is draggable."},onDragStart:{action:"dragStart",description:"Callback function that is called when the item is dragged.",table:{type:{summary:"(args: { event: DragEvent }) => void"}}},onDragEnd:{action:"dragEnd",description:"Callback function that is called when the item is dragged.",table:{type:{summary:"(args: { event: DragEvent }) => void"}}},acceptsChildren:{control:{type:"boolean"},description:"Indicates if the item can have children."},selectable:{control:{type:"boolean"},description:"Indicates if the item can be selected."},selectionScope:{control:{type:"radio"},options:["item","withDescendants"],defaultValue:{summary:"item"},description:"Defines how the item can be selected. If set to `item`, the item can be selected individually. If set to `withDescendants`, the item and all its descendants can be selected at once."},onSelect:{action:"select",description:"Callback function that is called when the item is selected.",table:{type:{summary:"(args: { event: MouseEvent; collapsed: boolean }) => void"}}},hoverable:{control:{type:"boolean"},description:"Indicates if the item can have hover state."},collapsed:{table:{type:{summary:"number"}},control:{disable:!0},description:"Value for controlled mode."},showCollapseControl:{control:{type:"boolean"},description:"Indicates if the collapse control should be shown and can be used to collapse or expand the item."},onCollapsedChange:{action:"collapsedChange",description:"Callback function that is called when the item is collapsed or expanded.",table:{type:{summary:"(args: { event: MouseEvent; collapsed: boolean }) => void"}}},subItems:{control:{disable:!0},description:"&lt;ListContainer&gt; with &lt;ListItem&gt; components.",table:{type:{summary:"JSX.Element"}}},children:{control:{disable:!0},description:"Any content of the item.",table:{type:{summary:"string | number | JSX.Element"}}}}},b=[{id:"Frame 1",children:[{id:"Frame 11",children:[{id:"Frame 111"},{id:"Frame 112"}]},{id:"Frame 12",children:[{id:"Frame 121"}]}]},{id:"Frame 2"},{id:"Frame 3",children:[{id:"Frame 31",children:[{id:"Frame 311"},{id:"Frame 312"},{id:"Frame 313"}]}]}],S={tags:["!autodocs"],args:{className:"",draggable:!0,dragHandle:"default",onDragStart:f(),onDragEnd:f(),acceptsChildren:!0,selectable:!0,selectionScope:"item",onSelect:f(),hoverable:!0,showCollapseControl:!1,onCollapsedChange:f()},parameters:{viewport:{defaultViewport:"large"}},render:s=>{const[a,h]=o(b),[u,l]=o([]),t=(n,i)=>!n||n.length===0?null:e(d,{children:n.map(I=>V(c,{...s,key:I.id,id:I.id,nestingLevel:i,subItems:I.children?t(I.children,i+1):void 0},e(m,{direction:"row",spacing:200,children:[e(r,{children:I.id}),e(r,{intentModifiers:"secondary",children:["(Level ",i,")"]})]})))});return e("div",{className:"sb-column sb-width-full",children:e(g,{children:e(p,{items:a,selectedItems:u,selectionMode:"multi",onItemsChange:n=>{h(n.items)},onSelectionChange:n=>{l(n.selectedItems)},children:e(d,{children:a.map(n=>V(c,{...s,key:n.id,id:n.id,subItems:n.children?t(n.children,1):void 0},e(m,{direction:"row",spacing:200,children:[e(r,{children:n.id}),e(r,{intentModifiers:"secondary",children:"(Level 0)"})]})))})})})})}},v={parameters:{controls:{disable:!0},docs:{description:{story:"Some elements can be explicitly restricted from being draggable. However, if they are nested, they will still move along with their parent. It's recommended to apply selection restriction in combination with drag restriction and hover restriction for better UX."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,a]=o(b),[h,u]=o([]),l=(t,n)=>!t||t.length===0?null:e(d,{children:t.map(i=>e(c,{id:i.id,nestingLevel:n,draggable:!(n>1),acceptsChildren:!0,selectable:!(n>1),selectionScope:"item",hoverable:!(n>1),subItems:i.children?l(i.children,n+1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:i.id}),e(r,{intentModifiers:"secondary",children:["(Level ",n,n>1?", not draggable, not hoverable, not selectable":"",")"]})]})},i.id))});return e("div",{className:"sb-column sb-width-full",children:e(g,{children:e(p,{items:s,selectedItems:h,selectionMode:"multi",onItemsChange:t=>{a(t.items)},onSelectionChange:t=>{u(t.selectedItems)},children:e(d,{children:s.map(t=>e(c,{id:t.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:t.children?l(t.children,1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:t.id}),e(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},t.id))})})})})}},C={parameters:{controls:{disable:!0},docs:{description:{story:"By default, the dragHandle appears on hover to the left, but you can specify `container` to make the entire container draggable. It’s best not to mix different types of dragHandles within the same list."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,a]=o(b),[h,u]=o([]),l=(t,n)=>!t||t.length===0?null:e(d,{children:t.map(i=>e(c,{id:i.id,nestingLevel:n,draggable:!0,dragHandle:"container",acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:i.children?l(i.children,n+1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:i.id}),e(r,{intentModifiers:"secondary",children:["(Level ",n,")"]})]})},i.id))});return e("div",{className:"sb-column sb-width-full",children:e(g,{children:e(p,{items:s,selectedItems:h,selectionMode:"multi",onItemsChange:t=>{a(t.items)},onSelectionChange:t=>{u(t.selectedItems)},children:e(d,{children:s.map(t=>e(c,{id:t.id,draggable:!0,dragHandle:"container",acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:t.children?l(t.children,1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:t.id}),e(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},t.id))})})})})}},L={parameters:{controls:{disable:!0},docs:{description:{story:"Some elements can be explicitly restricted from accepting children."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,a]=o(b),[h,u]=o([]),l=(t,n)=>!t||t.length===0?null:e(d,{children:t.map(i=>e(c,{id:i.id,nestingLevel:n,draggable:!0,acceptsChildren:!(n>1),selectable:!0,selectionScope:"item",hoverable:!0,subItems:i.children?l(i.children,n+1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:i.id}),e(r,{intentModifiers:"secondary",children:["(Level ",n,n>1?", no children":"",")"]})]})},i.id))});return e("div",{className:"sb-column sb-width-full",children:e(g,{children:e(p,{items:s,selectedItems:h,selectionMode:"multi",onItemsChange:t=>{a(t.items)},onSelectionChange:t=>{u(t.selectedItems)},children:e(d,{children:s.map(t=>e(c,{id:t.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:t.children?l(t.children,1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:t.id}),e(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},t.id))})})})})}},y={parameters:{controls:{disable:!0},docs:{description:{story:"Some elements can be restricted from being selectable. It's recommended to apply selection restriction in combination with drag restriction and hover restriction for better UX."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,a]=o(b),[h,u]=o([]),l=(t,n)=>!t||t.length===0?null:e(d,{children:t.map(i=>e(c,{id:i.id,nestingLevel:n,draggable:!(n>1),acceptsChildren:!0,selectable:!(n>1),selectionScope:"item",hoverable:!(n>1),subItems:i.children?l(i.children,n+1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:i.id}),e(r,{intentModifiers:"secondary",children:["(Level ",n,n>1?", not draggable, not hoverable, not selectable":"",")"]})]})},i.id))});return e("div",{className:"sb-column sb-width-full",children:e(g,{children:e(p,{items:s,selectedItems:h,selectionMode:"multi",onItemsChange:t=>{a(t.items)},onSelectionChange:t=>{u(t.selectedItems)},children:e(d,{children:s.map(t=>e(c,{id:t.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:t.children?l(t.children,1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:t.id}),e(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},t.id))})})})})}},w={parameters:{controls:{disable:!0},docs:{description:{story:"The selection scope determines how elements are selected. With `withDescendants`, the entire branch is selected, and the `onSelectionChange` event of &lt;ListContext&gt; will return an array of all elements."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,a]=o(b),[h,u]=o([]),l=(t,n)=>!t||t.length===0?null:e(d,{children:t.map(i=>e(c,{id:i.id,nestingLevel:n,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"withDescendants",hoverable:!0,subItems:i.children?l(i.children,n+1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:i.id}),e(r,{intentModifiers:"secondary",children:["(Level ",n,")"]})]})},i.id))});return e("div",{className:"sb-column sb-width-full",children:e(g,{children:e(p,{items:s,selectedItems:h,selectionMode:"multi",onItemsChange:t=>{a(t.items)},onSelectionChange:t=>{u(t.selectedItems)},children:e(d,{children:s.map(t=>e(c,{id:t.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"withDescendants",hoverable:!0,subItems:t.children?l(t.children,1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:t.id}),e(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},t.id))})})})})}},x={parameters:{controls:{disable:!0},docs:{description:{story:"Some elements can be restricted from showing hover feedback. It's recommended to enable this for all interactive items to provide better UX"}},viewport:{defaultViewport:"large"}},render:()=>{const[s,a]=o(b),[h,u]=o([]),l=(t,n)=>!t||t.length===0?null:e(d,{children:t.map(i=>e(c,{id:i.id,nestingLevel:n,draggable:!(n>1),acceptsChildren:!0,selectable:!(n>1),selectionScope:"item",hoverable:!(n>1),subItems:i.children?l(i.children,n+1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:i.id}),e(r,{intentModifiers:"secondary",children:["(Level ",n,n>1?", not draggable, not hoverable, not selectable":"",")"]})]})},i.id))});return e("div",{className:"sb-column sb-gap-16",children:e(g,{children:e(p,{items:s,selectedItems:h,selectionMode:"multi",onItemsChange:t=>{a(t.items)},onSelectionChange:t=>{u(t.selectedItems)},children:e(d,{children:s.map(t=>e(c,{id:t.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:t.children?l(t.children,1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:t.id}),e(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},t.id))})})})})}},T={parameters:{controls:{disable:!0},docs:{description:{story:"Large trees can be collapsed by setting `showCollapseControl`. By default, the state is managed internally by the component, but you can also pass the state via the `collapsed` property."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,a]=o(b),[h,u]=o([]),l=(t,n)=>!t||t.length===0?null:e(d,{children:t.map(i=>e(c,{id:i.id,nestingLevel:n,draggable:!(n>1),acceptsChildren:!0,selectable:!(n>1),selectionScope:"item",hoverable:!(n>1),showCollapseControl:!0,subItems:i.children?l(i.children,n+1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:i.id}),e(r,{intentModifiers:"secondary",children:["(Level ",n,n>1?", not draggable, not hoverable, not selectable":"",")"]})]})},i.id))});return e("div",{className:"sb-column sb-width-full",children:e(g,{children:e(p,{items:s,selectedItems:h,selectionMode:"multi",onItemsChange:t=>{a(t.items)},onSelectionChange:t=>{u(t.selectedItems)},children:e(d,{children:s.map(t=>e(c,{id:t.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",showCollapseControl:!0,hoverable:!0,subItems:t.children?l(t.children,1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:t.id}),e(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},t.id))})})})})}},k={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[s,a]=o(b),[h,u]=o([]),l=(t,n)=>!t||t.length===0?null:e(d,{children:t.map(i=>e(c,{id:i.id,nestingLevel:n,draggable:!(n>1),acceptsChildren:!0,selectable:!(n>1),selectionScope:"item",hoverable:!(n>1),showCollapseControl:!0,dragHandle:"container",subItems:i.children?l(i.children,n+1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:i.id}),e(r,{intentModifiers:"secondary",children:["(Level ",n,n>1?", not draggable, not hoverable, not selectable":"",")"]})]})},i.id))});return e("div",{className:"sb-column sb-width-full",children:e(g,{children:e(p,{items:s,selectedItems:h,selectionMode:"multi",onItemsChange:t=>{a(t.items)},onSelectionChange:t=>{u(t.selectedItems)},children:e(d,{children:s.map(t=>e(c,{id:t.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",showCollapseControl:!0,hoverable:!0,dragHandle:"container",subItems:t.children?l(t.children,1):void 0,children:e(m,{direction:"row",spacing:200,children:[e(r,{children:t.id}),e(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},t.id))})})})})}},M={parameters:{controls:{disable:!0},docs:{description:{story:"The ListItem can contain any content."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,a]=o(b),[h,u]=o([]),l=(t,n)=>!t||t.length===0?null:e(d,{children:t.map(i=>e(c,{id:i.id,nestingLevel:n,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"withDescendants",hoverable:!0,showCollapseControl:!0,subItems:i.children?l(i.children,n+1):void 0,children:e(m,{direction:"row",spacing:200,y:"center",fullWidth:!0,children:[e(N,{defaultValue:i.id}),e(oe,{label:"Label"}),e(me,{ghost:!0,children:e(D,{glyph:"settings",variant:"scaled"})}),e(H,{ghost:!0,children:e(D,{glyph:"link",variant:"scaled"})})]})},i.id))});return e("div",{className:"sb-column sb-width-full",children:e(g,{children:e(p,{items:s,selectedItems:h,selectionMode:"multi",onItemsChange:t=>{a(t.items)},onSelectionChange:t=>{u(t.selectedItems)},children:e(d,{children:s.map(t=>e(c,{id:t.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"withDescendants",showCollapseControl:!0,hoverable:!0,subItems:t.children?l(t.children,1):void 0,children:e(m,{direction:"row",spacing:200,y:"center",fullWidth:!0,children:[e(N,{defaultValue:t.id,ghost:!0,focusOnDoubleClick:!0}),e(r,{intentModifiers:"secondary",className:"text-no-wrap",children:"Ghost + Double click focus"}),e(de,{children:"Action"}),e(H,{children:e(D,{glyph:"link",variant:"scaled"})})]})},t.id))})})})})}};var B,E,F;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    draggable: true,
    dragHandle: "default",
    onDragStart: fn(),
    onDragEnd: fn(),
    acceptsChildren: true,
    selectable: true,
    selectionScope: "item",
    onSelect: fn(),
    hoverable: true,
    showCollapseControl: false,
    onCollapsedChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children, level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem {...args} key={child.id} id={child.id} nestingLevel={level} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">(Level {level})</Text>
              </Stack>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-width-full">
        <Section>
          <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
          setItems(change.items);
        }} onSelectionChange={change => {
          setSelectedItems(change.selectedItems);
        }}>
            <ListContainer>
              {items.map(item => <ListItem {...args} key={item.id} id={item.id} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                  <Stack direction="row" spacing={200}>
                    <Text>{item.id}</Text>
                    <Text intentModifiers="secondary">(Level 0)</Text>
                  </Stack>
                </ListItem>)}
            </ListContainer>
          </ListContext>
        </Section>
      </div>;
  }
}`,...(F=(E=S.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var W,X,A;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Some elements can be explicitly restricted from being draggable. However, if they are nested, they will still move along with their parent. It's recommended to apply selection restriction in combination with drag restriction and hover restriction for better UX."
      }
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children, level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={level > 1 ? false : true} acceptsChildren={true} selectable={level > 1 ? false : true} selectionScope="item" hoverable={level > 1 ? false : true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">
                  (Level {level}
                  {level > 1 ? ", not draggable, not hoverable, not selectable" : ""}
                  )
                </Text>
              </Stack>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-width-full">
        <Section>
          <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
          setItems(change.items);
        }} onSelectionChange={change => {
          setSelectedItems(change.selectedItems);
        }}>
            <ListContainer>
              {items.map(item => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="item" hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                  <Stack direction="row" spacing={200}>
                    <Text>{item.id}</Text>
                    <Text intentModifiers="secondary">(Level 0)</Text>
                  </Stack>
                </ListItem>)}
            </ListContainer>
          </ListContext>
        </Section>
      </div>;
  }
}`,...(A=(X=v.parameters)==null?void 0:X.docs)==null?void 0:A.source}}};var U,O,_;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "By default, the dragHandle appears on hover to the left, but you can specify \`container\` to make the entire container draggable. It’s best not to mix different types of dragHandles within the same list."
      }
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children, level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={true} dragHandle="container" acceptsChildren={true} selectable={true} selectionScope="item" hoverable={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">(Level {level})</Text>
              </Stack>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-width-full">
        <Section>
          <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
          setItems(change.items);
        }} onSelectionChange={change => {
          setSelectedItems(change.selectedItems);
        }}>
            <ListContainer>
              {items.map(item => <ListItem key={item.id} id={item.id} draggable={true} dragHandle="container" acceptsChildren={true} selectable={true} selectionScope="item" hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                  <Stack direction="row" spacing={200}>
                    <Text>{item.id}</Text>
                    <Text intentModifiers="secondary">(Level 0)</Text>
                  </Stack>
                </ListItem>)}
            </ListContainer>
          </ListContext>
        </Section>
      </div>;
  }
}`,...(_=(O=C.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var G,J,q;L.parameters={...L.parameters,docs:{...(G=L.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Some elements can be explicitly restricted from accepting children."
      }
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children, level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={true} acceptsChildren={level > 1 ? false : true} selectable={true} selectionScope="item" hoverable={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">
                  (Level {level}
                  {level > 1 ? ", no children" : ""})
                </Text>
              </Stack>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-width-full">
        <Section>
          <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
          setItems(change.items);
        }} onSelectionChange={change => {
          setSelectedItems(change.selectedItems);
        }}>
            <ListContainer>
              {items.map(item => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="item" hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                  <Stack direction="row" spacing={200}>
                    <Text>{item.id}</Text>
                    <Text intentModifiers="secondary">(Level 0)</Text>
                  </Stack>
                </ListItem>)}
            </ListContainer>
          </ListContext>
        </Section>
      </div>;
  }
}`,...(q=(J=L.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var P,j,z;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Some elements can be restricted from being selectable. It's recommended to apply selection restriction in combination with drag restriction and hover restriction for better UX."
      }
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children, level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={level > 1 ? false : true} acceptsChildren={true} selectable={level > 1 ? false : true} selectionScope="item" hoverable={level > 1 ? false : true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">
                  (Level {level}
                  {level > 1 ? ", not draggable, not hoverable, not selectable" : ""}
                  )
                </Text>
              </Stack>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-width-full">
        <Section>
          <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
          setItems(change.items);
        }} onSelectionChange={change => {
          setSelectedItems(change.selectedItems);
        }}>
            <ListContainer>
              {items.map(item => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="item" hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                  <Stack direction="row" spacing={200}>
                    <Text>{item.id}</Text>
                    <Text intentModifiers="secondary">(Level 0)</Text>
                  </Stack>
                </ListItem>)}
            </ListContainer>
          </ListContext>
        </Section>
      </div>;
  }
}`,...(z=(j=y.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var K,Q,R;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "The selection scope determines how elements are selected. With \`withDescendants\`, the entire branch is selected, and the \`onSelectionChange\` event of &lt;ListContext&gt; will return an array of all elements."
      }
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children, level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={true} acceptsChildren={true} selectable={true} selectionScope="withDescendants" hoverable={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">(Level {level})</Text>
              </Stack>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-width-full">
        <Section>
          <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
          setItems(change.items);
        }} onSelectionChange={change => {
          setSelectedItems(change.selectedItems);
        }}>
            <ListContainer>
              {items.map(item => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="withDescendants" hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                  <Stack direction="row" spacing={200}>
                    <Text>{item.id}</Text>
                    <Text intentModifiers="secondary">(Level 0)</Text>
                  </Stack>
                </ListItem>)}
            </ListContainer>
          </ListContext>
        </Section>
      </div>;
  }
}`,...(R=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var Y,Z,$;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Some elements can be restricted from showing hover feedback. It's recommended to enable this for all interactive items to provide better UX"
      }
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children, level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={level > 1 ? false : true} acceptsChildren={true} selectable={level > 1 ? false : true} selectionScope="item" hoverable={level > 1 ? false : true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">
                  (Level {level}
                  {level > 1 ? ", not draggable, not hoverable, not selectable" : ""}
                  )
                </Text>
              </Stack>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-gap-16">
        <Section>
          <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
          setItems(change.items);
        }} onSelectionChange={change => {
          setSelectedItems(change.selectedItems);
        }}>
            <ListContainer>
              {items.map(item => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="item" hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                  <Stack direction="row" spacing={200}>
                    <Text>{item.id}</Text>
                    <Text intentModifiers="secondary">(Level 0)</Text>
                  </Stack>
                </ListItem>)}
            </ListContainer>
          </ListContext>
        </Section>
      </div>;
  }
}`,...($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Large trees can be collapsed by setting \`showCollapseControl\`. By default, the state is managed internally by the component, but you can also pass the state via the \`collapsed\` property."
      }
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children, level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={level > 1 ? false : true} acceptsChildren={true} selectable={level > 1 ? false : true} selectionScope="item" hoverable={level > 1 ? false : true} showCollapseControl={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">
                  (Level {level}
                  {level > 1 ? ", not draggable, not hoverable, not selectable" : ""}
                  )
                </Text>
              </Stack>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-width-full">
        <Section>
          <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
          setItems(change.items);
        }} onSelectionChange={change => {
          setSelectedItems(change.selectedItems);
        }}>
            <ListContainer>
              {items.map(item => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="item" showCollapseControl={true} hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                  <Stack direction="row" spacing={200}>
                    <Text>{item.id}</Text>
                    <Text intentModifiers="secondary">(Level 0)</Text>
                  </Stack>
                </ListItem>)}
            </ListContainer>
          </ListContext>
        </Section>
      </div>;
  }
}`,...(ne=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,re,se;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children, level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={level > 1 ? false : true} acceptsChildren={true} selectable={level > 1 ? false : true} selectionScope="item" hoverable={level > 1 ? false : true} showCollapseControl={true} dragHandle="container" subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">
                  (Level {level}
                  {level > 1 ? ", not draggable, not hoverable, not selectable" : ""}
                  )
                </Text>
              </Stack>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-width-full">
        <Section>
          <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
          setItems(change.items);
        }} onSelectionChange={change => {
          setSelectedItems(change.selectedItems);
        }}>
            <ListContainer>
              {items.map(item => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="item" showCollapseControl={true} hoverable={true} dragHandle="container" subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                  <Stack direction="row" spacing={200}>
                    <Text>{item.id}</Text>
                    <Text intentModifiers="secondary">(Level 0)</Text>
                  </Stack>
                </ListItem>)}
            </ListContainer>
          </ListContext>
        </Section>
      </div>;
  }
}`,...(se=(re=k.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,ce,ae;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "The ListItem can contain any content."
      }
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children, level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={true} acceptsChildren={true} selectable={true} selectionScope="withDescendants" hoverable={true} showCollapseControl={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Stack direction="row" spacing={200} y="center" fullWidth>
                <Input defaultValue={child.id} />
                <Checkbox label="Label" />
                <ButtonIcon ghost>
                  <Icon glyph="settings" variant="scaled" />
                </ButtonIcon>
                <ButtonIconToggle ghost>
                  <Icon glyph="link" variant="scaled" />
                </ButtonIconToggle>
              </Stack>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-width-full">
        <Section>
          <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
          setItems(change.items);
        }} onSelectionChange={change => {
          setSelectedItems(change.selectedItems);
        }}>
            <ListContainer>
              {items.map(item => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="withDescendants" showCollapseControl={true} hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                  <Stack direction="row" spacing={200} y="center" fullWidth>
                    <Input defaultValue={item.id} ghost focusOnDoubleClick />
                    <Text intentModifiers="secondary" className="text-no-wrap">
                      Ghost + Double click focus
                    </Text>
                    <Button>Action</Button>
                    <ButtonIconToggle>
                      <Icon glyph="link" variant="scaled" />
                    </ButtonIconToggle>
                  </Stack>
                </ListItem>)}
            </ListContainer>
          </ListContext>
        </Section>
      </div>;
  }
}`,...(ae=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};const Me=["Demo","Draggable","DragHandleContainer","AcceptsChildren","Selectable","SelectionScope","Hoverable","CollapsableWithDragHandle","CollapsableWithDraggableContainer","Children"];export{L as AcceptsChildren,M as Children,T as CollapsableWithDragHandle,k as CollapsableWithDraggableContainer,S as Demo,C as DragHandleContainer,v as Draggable,x as Hoverable,y as Selectable,w as SelectionScope,Me as __namedExportsOrder,ke as default};
