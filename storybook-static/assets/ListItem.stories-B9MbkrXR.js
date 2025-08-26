import{u as t}from"./jsxRuntime.module-CXXlufuJ.js";import{_ as w}from"./preact.module-DKQ80Dzn.js";import{f as p}from"./index-BWINGljf.js";import{d as o}from"./compat.module-C_m5Zvzo.js";import{b as c,a as b,L as m}from"./ListItem-Cmed4_yL.js";import{T as s}from"./Text-Zs2635gN.js";import"./typedForwardRef-DzGXX2Gk.js";import"./Icon-DvMK2avU.js";const ce={title:"Components/ListItem",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"Always used within &lt;ListContext/&gt; and &lt;ListContainer/&gt;. It may contain any content."}}},argTypes:{className:{control:{type:"text"}},id:{control:{disable:!0},description:"Unique identifier of the item."},isNested:{table:{type:{summary:"boolean"}},control:{disable:!0},description:"Indicates if the item is nested."},nestingLevel:{table:{type:{summary:"number"}},control:{disable:!0},defaultValue:{summary:"0"},description:"Nesting level of the item. Must be provided if the item is nested."},draggable:{control:{type:"boolean"}},dragHandle:{control:{type:"select"},options:["default","container"],defaultValue:{summary:"default"},description:"Defines how the item can be dragged. If set to `container`, the item can be dragged by the container itself. If set to `default`, the item can be dragged by the drag handle. Works only if the item is draggable."},onDragStart:{action:"dragStart",description:"Callback function that is called when the item is dragged.",table:{type:{summary:"(args: { event: DragEvent }) => void"}}},onDragEnd:{action:"dragEnd",description:"Callback function that is called when the item is dragged.",table:{type:{summary:"(args: { event: DragEvent }) => void"}}},acceptsChildren:{control:{type:"boolean"},description:"Indicates if the item can have children."},selectable:{control:{type:"boolean"},description:"Indicates if the item can be selected."},selectionScope:{control:{type:"select"},options:["item","withDescendants"],defaultValue:{summary:"item"},description:"Defines how the item can be selected. If set to `item`, the item can be selected individually. If set to `withDescendants`, the item and all its descendants can be selected at once."},onSelect:{action:"select",description:"Callback function that is called when the item is selected.",table:{type:{summary:"(args: { event: MouseEvent; collapsed: boolean }) => void"}}},hoverable:{control:{type:"boolean"},description:"Indicates if the item can have hover state."},collapsed:{table:{type:{summary:"number"}},control:{disable:!0},description:"Value for controlled mode."},showCollapseControl:{control:{type:"boolean"},description:"Indicates if the collapse control should be shown and can be used to collapse or expand the item."},onCollapsedChange:{action:"collapsedChange",description:"Callback function that is called when the item is collapsed or expanded.",table:{type:{summary:"(args: { event: MouseEvent; collapsed: boolean }) => void"}}},subItems:{control:{disable:!0},description:"&lt;ListContainer&gt; with &lt;ListItem&gt; components.",table:{type:{summary:"JSX.Element"}}},children:{control:{disable:!0},description:"Any content of the item.",table:{type:{summary:"string | number | JSX.Element"}}}}},g=[{id:"Frame 1",children:[{id:"Frame 11",children:[{id:"Frame 111"},{id:"Frame 112"}]},{id:"Frame 12",children:[{id:"Frame 121"}]}]},{id:"Frame 2"},{id:"Frame 3",children:[{id:"Frame 31",children:[{id:"Frame 311"},{id:"Frame 312"},{id:"Frame 313"}]}]}],I={tags:["!autodocs"],args:{className:"",draggable:!0,dragHandle:"default",onDragStart:p(),onDragEnd:p(),acceptsChildren:!0,selectable:!0,selectionScope:"item",onSelect:p(),hoverable:!0,showCollapseControl:!1,onCollapsedChange:p()},render:i=>{const[d,u]=o(g),[h,l]=o([]),e=(n,a)=>!n||n.length===0?null:t(m,{children:n.map(r=>w(c,{...i,key:r.id,id:r.id,nestingLevel:a,subItems:r.children?e(r.children,a+1):void 0},t(s,{variant:"body",context:"neutral",children:r.id}),t(s,{context:"neutral-secondary",children:[" (Level ",a,")"]})))});return t("div",{className:"sb-column sb-gap-16",children:t(b,{items:d,selectedItems:h,selectionMode:"multi",onItemsChange:n=>{u(n.items)},onSelectionChange:n=>{l(n.selectedItems)},children:t(m,{children:d.map((n,a)=>w(c,{...i,key:n.id,id:n.id,subItems:n.children?e(n.children,1):void 0},t(s,{variant:"body",context:"neutral",children:n.id}),t(s,{context:"neutral-secondary",children:" (Level 0)"})))})})})}},v={tags:["!dev"],parameters:{controls:{disable:!0},docs:{description:{story:"Some elements can be explicitly restricted from being draggable. However, if they are nested, they will still move along with their parent. It's recommended to apply selection restriction in combination with drag restriction and hover restriction for better UX."}}},render:()=>{const[i,d]=o(g),[u,h]=o([]),l=(e,n)=>!e||e.length===0?null:t(m,{children:e.map(a=>t(c,{id:a.id,nestingLevel:n,draggable:!(n>1),acceptsChildren:!0,selectable:!(n>1),selectionScope:"item",hoverable:!(n>1),subItems:a.children?l(a.children,n+1):void 0,children:[t(s,{variant:"body",context:"neutral",children:a.id}),t(s,{context:"neutral-secondary",children:["(Level ",n," ",n>1?", not draggable, not hoverable, not selectable":"",")"]})]},a.id))});return t("div",{className:"sb-column sb-gap-16",children:t(b,{items:i,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{d(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(m,{children:i.map((e,n)=>t(c,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:[t(s,{variant:"body",context:"neutral",children:e.id}),t(s,{context:"neutral-secondary",children:" (Level 0)"})]},e.id))})})})}},x={tags:["!dev"],parameters:{controls:{disable:!0},docs:{description:{story:"By default, the dragHandle appears on hover to the left, but you can specify `container` to make the entire container draggable. It’s best not to mix different types of dragHandles within the same list."}}},render:()=>{const[i,d]=o(g),[u,h]=o([]),l=(e,n,a=[])=>!e||e.length===0?null:t(m,{children:e.map(r=>t(c,{id:r.id,nestingLevel:n,draggable:!0,dragHandle:"container",acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:r.children?l(r.children,n+1):void 0,children:[t(s,{variant:"body",context:"neutral",children:r.id}),t(s,{context:"neutral-secondary",children:[" (Level ",n,")"]})]},r.id))});return t("div",{className:"sb-column sb-gap-16",children:t(b,{items:i,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{d(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(m,{children:i.map((e,n)=>t(c,{id:e.id,draggable:!0,dragHandle:"container",acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:[t(s,{variant:"body",context:"neutral",children:e.id}),t(s,{context:"neutral-secondary",children:" (Level 0)"})]},e.id))})})})}},y={tags:["!dev"],parameters:{controls:{disable:!0},docs:{description:{story:"Some elements can be explicitly restricted from accepting children."}}},render:()=>{const[i,d]=o(g),[u,h]=o([]),l=(e,n,a=[])=>!e||e.length===0?null:t(m,{children:e.map(r=>t(c,{id:r.id,nestingLevel:n,draggable:!0,acceptsChildren:!(n>1),selectable:!0,selectionScope:"item",hoverable:!0,subItems:r.children?l(r.children,n+1):void 0,children:[t(s,{variant:"body",context:"neutral",children:r.id}),t(s,{context:"neutral-secondary",children:["(Level ",n," ",n>1?", no children":"",")"]})]},r.id))});return t("div",{className:"sb-column sb-gap-16",children:t(b,{items:i,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{d(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(m,{children:i.map((e,n)=>t(c,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:[t(s,{variant:"body",context:"neutral",children:e.id}),t(s,{context:"neutral-secondary",children:" (Level 0)"})]},e.id))})})})}},C={tags:["!dev"],parameters:{controls:{disable:!0},docs:{description:{story:"Some elements can be restricted from being selectable. It's recommended to apply selection restriction in combination with drag restriction and hover restriction for better UX."}}},render:()=>{const[i,d]=o(g),[u,h]=o([]),l=(e,n)=>!e||e.length===0?null:t(m,{children:e.map(a=>t(c,{id:a.id,nestingLevel:n,draggable:!(n>1),acceptsChildren:!0,selectable:!(n>1),selectionScope:"item",hoverable:!(n>1),subItems:a.children?l(a.children,n+1):void 0,children:[t(s,{variant:"body",context:"neutral",children:a.id}),t(s,{context:"neutral-secondary",children:["(Level ",n," ",n>1?", not draggable, not hoverable, not selectable":"",")"]})]},a.id))});return t("div",{className:"sb-column sb-gap-16",children:t(b,{items:i,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{d(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(m,{children:i.map((e,n)=>t(c,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:[t(s,{variant:"body",context:"neutral",children:e.id}),t(s,{context:"neutral-secondary",children:" (Level 0)"})]},e.id))})})})}},S={tags:["!dev"],parameters:{controls:{disable:!0},docs:{description:{story:"The selection scope determines how elements are selected. With `withDescendants`, the entire branch is selected, and the `onSelectionChange` event of &lt;ListContext&gt; will return an array of all elements."}}},render:()=>{const[i,d]=o(g),[u,h]=o([]),l=(e,n,a=[])=>!e||e.length===0?null:t(m,{children:e.map(r=>t(c,{id:r.id,nestingLevel:n,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"withDescendants",hoverable:!0,subItems:r.children?l(r.children,n+1):void 0,children:[t(s,{variant:"body",context:"neutral",children:r.id}),t(s,{context:"neutral-secondary",children:[" (Level ",n,")"]})]},r.id))});return t("div",{className:"sb-column sb-gap-16",children:t(b,{items:i,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{d(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(m,{children:i.map((e,n)=>t(c,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"withDescendants",hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:[t(s,{variant:"body",context:"neutral",children:e.id}),t(s,{context:"neutral-secondary",children:" (Level 0)"})]},e.id))})})})}},L={tags:["!dev"],parameters:{controls:{disable:!0},docs:{description:{story:"Some elements can be restricted from showing hover feedback. It's recommended to enable this for all interactive items to provide better UX"}}},render:()=>{const[i,d]=o(g),[u,h]=o([]),l=(e,n,a=[])=>!e||e.length===0?null:t(m,{children:e.map(r=>t(c,{id:r.id,nestingLevel:n,draggable:!(n>1),acceptsChildren:!0,selectable:!(n>1),selectionScope:"item",hoverable:!(n>1),subItems:r.children?l(r.children,n+1):void 0,children:[t(s,{variant:"body",context:"neutral",children:r.id}),t(s,{context:"neutral-secondary",children:["(Level ",n," ",n>1?", not draggable, not hoverable, not selectable":"",")"]})]},r.id))});return t("div",{className:"sb-column sb-gap-16",children:t(b,{items:i,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{d(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(m,{children:i.map((e,n)=>t(c,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:e.children?l(e.children,1,[n]):void 0,children:[t(s,{variant:"body",context:"neutral",children:e.id}),t(s,{context:"neutral-secondary",children:" (Level 0)"})]},e.id))})})})}},f={tags:["!dev"],parameters:{controls:{disable:!0},docs:{description:{story:"Large trees can be collapsed by setting `showCollapseControl`. By default, the state is managed internally by the component, but you can also pass the state via the `collapsed` property."}}},render:()=>{const[i,d]=o(g),[u,h]=o([]),l=(e,n,a=[])=>!e||e.length===0?null:t(m,{children:e.map(r=>t(c,{id:r.id,nestingLevel:n,draggable:!(n>0),acceptsChildren:!0,selectable:!(n>0),selectionScope:"item",hoverable:!(n>0),showCollapseControl:!0,subItems:r.children?l(r.children,n+1):void 0,children:[t(s,{variant:"body",context:"neutral",children:r.id}),t(s,{context:"neutral-secondary",children:["(Level ",n,n>0?", not draggable, not hoverable, not selectable":"",")"]})]},r.id))});return t("div",{className:"sb-column sb-gap-16",children:t(b,{items:i,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{d(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(m,{children:i.map((e,n)=>t(c,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",showCollapseControl:!0,hoverable:!0,subItems:e.children?l(e.children,1,[n]):void 0,children:[t(s,{variant:"body",context:"neutral",children:e.id}),t(s,{context:"neutral-secondary",children:" (Level 0)"})]},e.id))})})})}},T={tags:["!dev"],parameters:{controls:{disable:!0}},render:()=>{const[i,d]=o(g),[u,h]=o([]),l=(e,n,a=[])=>!e||e.length===0?null:t(m,{children:e.map(r=>t(c,{id:r.id,nestingLevel:n,draggable:!(n>0),acceptsChildren:!0,selectable:!(n>0),selectionScope:"item",hoverable:!(n>0),showCollapseControl:!0,dragHandle:"container",subItems:r.children?l(r.children,n+1):void 0,children:[t(s,{variant:"body",context:"neutral",children:r.id}),t(s,{context:"neutral-secondary",children:["(Level ",n,n>0?", not draggable, not hoverable, not selectable":"",")"]})]},r.id))});return t("div",{className:"sb-column sb-gap-16",children:t(b,{items:i,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{d(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(m,{children:i.map((e,n)=>t(c,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",showCollapseControl:!0,hoverable:!0,dragHandle:"container",subItems:e.children?l(e.children,1,[n]):void 0,children:[t(s,{variant:"body",context:"neutral",children:e.id}),t(s,{context:"neutral-secondary",children:" (Level 0)"})]},e.id))})})})}};var k,D,H;I.parameters={...I.parameters,docs:{...(k=I.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
  render: args => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children: any[], level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem {...args} key={child.id} id={child.id} nestingLevel={level} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Text variant="body" context="neutral">
                {child.id}
              </Text>
              <Text context="neutral-secondary"> (Level {level})</Text>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-gap-16">
        <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
        setItems(change.items);
      }} onSelectionChange={change => {
        setSelectedItems(change.selectedItems);
      }}>
          <ListContainer>
            {items.map((item, index) => <ListItem {...args} key={item.id} id={item.id} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(H=(D=I.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var N,M,F;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Some elements can be explicitly restricted from being draggable. However, if they are nested, they will still move along with their parent. It's recommended to apply selection restriction in combination with drag restriction and hover restriction for better UX."
      }
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children: any[], level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={level > 1 ? false : true} acceptsChildren={true} selectable={level > 1 ? false : true} selectionScope="item" hoverable={level > 1 ? false : true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Text variant="body" context="neutral">
                {child.id}
              </Text>
              <Text context="neutral-secondary">
                 (Level {level}{" "}
                {level > 1 ? ", not draggable, not hoverable, not selectable" : ""}
                )
              </Text>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-gap-16">
        <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
        setItems(change.items);
      }} onSelectionChange={change => {
        setSelectedItems(change.selectedItems);
      }}>
          <ListContainer>
            {items.map((item, index) => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="item" hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(F=(M=v.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var P,E,X;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "By default, the dragHandle appears on hover to the left, but you can specify \`container\` to make the entire container draggable. It’s best not to mix different types of dragHandles within the same list."
      }
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children: any[], level: number, parentPath: number[] = []) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={true} dragHandle="container" acceptsChildren={true} selectable={true} selectionScope="item" hoverable={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Text variant="body" context="neutral">
                {child.id}
              </Text>
              <Text context="neutral-secondary"> (Level {level})</Text>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-gap-16">
        <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
        setItems(change.items);
      }} onSelectionChange={change => {
        setSelectedItems(change.selectedItems);
      }}>
          <ListContainer>
            {items.map((item, index) => <ListItem key={item.id} id={item.id} draggable={true} dragHandle="container" acceptsChildren={true} selectable={true} selectionScope="item" hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(X=(E=x.parameters)==null?void 0:E.docs)==null?void 0:X.source}}};var U,W,A;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Some elements can be explicitly restricted from accepting children."
      }
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children: any[], level: number, parentPath: number[] = []) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={true} acceptsChildren={level > 1 ? false : true} selectable={true} selectionScope="item" hoverable={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Text variant="body" context="neutral">
                {child.id}
              </Text>
              <Text context="neutral-secondary">
                 (Level {level} {level > 1 ? ", no children" : ""})
              </Text>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-gap-16">
        <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
        setItems(change.items);
      }} onSelectionChange={change => {
        setSelectedItems(change.selectedItems);
      }}>
          <ListContainer>
            {items.map((item, index) => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="item" hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(A=(W=y.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var B,V,_;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Some elements can be restricted from being selectable. It's recommended to apply selection restriction in combination with drag restriction and hover restriction for better UX."
      }
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children: any[], level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={level > 1 ? false : true} acceptsChildren={true} selectable={level > 1 ? false : true} selectionScope="item" hoverable={level > 1 ? false : true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Text variant="body" context="neutral">
                {child.id}
              </Text>
              <Text context="neutral-secondary">
                 (Level {level}{" "}
                {level > 1 ? ", not draggable, not hoverable, not selectable" : ""}
                )
              </Text>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-gap-16">
        <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
        setItems(change.items);
      }} onSelectionChange={change => {
        setSelectedItems(change.selectedItems);
      }}>
          <ListContainer>
            {items.map((item, index) => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="item" hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(_=(V=C.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var J,q,O;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "The selection scope determines how elements are selected. With \`withDescendants\`, the entire branch is selected, and the \`onSelectionChange\` event of &lt;ListContext&gt; will return an array of all elements."
      }
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children: any[], level: number, parentPath: number[] = []) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={true} acceptsChildren={true} selectable={true} selectionScope="withDescendants" hoverable={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Text variant="body" context="neutral">
                {child.id}
              </Text>
              <Text context="neutral-secondary"> (Level {level})</Text>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-gap-16">
        <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
        setItems(change.items);
      }} onSelectionChange={change => {
        setSelectedItems(change.selectedItems);
      }}>
          <ListContainer>
            {items.map((item, index) => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="withDescendants" hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(O=(q=S.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var j,z,G;L.parameters={...L.parameters,docs:{...(j=L.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Some elements can be restricted from showing hover feedback. It's recommended to enable this for all interactive items to provide better UX"
      }
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children: any[], level: number, parentPath: number[] = []) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={level > 1 ? false : true} acceptsChildren={true} selectable={level > 1 ? false : true} selectionScope="item" hoverable={level > 1 ? false : true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Text variant="body" context="neutral">
                {child.id}
              </Text>
              <Text context="neutral-secondary">
                 (Level {level}{" "}
                {level > 1 ? ", not draggable, not hoverable, not selectable" : ""}
                )
              </Text>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-gap-16">
        <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
        setItems(change.items);
      }} onSelectionChange={change => {
        setSelectedItems(change.selectedItems);
      }}>
          <ListContainer>
            {items.map((item, index) => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="item" hoverable={true} subItems={item.children ? renderSubItems(item.children, 1, [index]) : undefined}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(G=(z=L.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var K,Q,R;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Large trees can be collapsed by setting \`showCollapseControl\`. By default, the state is managed internally by the component, but you can also pass the state via the \`collapsed\` property."
      }
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children: any[], level: number, parentPath: number[] = []) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={level > 0 ? false : true} acceptsChildren={true} selectable={level > 0 ? false : true} selectionScope="item" hoverable={level > 0 ? false : true} showCollapseControl={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Text variant="body" context="neutral">
                {child.id}
              </Text>
              <Text context="neutral-secondary">
                 (Level {level}
                {level > 0 ? ", not draggable, not hoverable, not selectable" : ""}
                )
              </Text>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-gap-16">
        <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
        setItems(change.items);
      }} onSelectionChange={change => {
        setSelectedItems(change.selectedItems);
      }}>
          <ListContainer>
            {items.map((item, index) => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="item" showCollapseControl={true} hoverable={true} subItems={item.children ? renderSubItems(item.children, 1, [index]) : undefined}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(R=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var Y,Z,$;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children: any[], level: number, parentPath: number[] = []) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={level > 0 ? false : true} acceptsChildren={true} selectable={level > 0 ? false : true} selectionScope="item" hoverable={level > 0 ? false : true} showCollapseControl={true} dragHandle="container" subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Text variant="body" context="neutral">
                {child.id}
              </Text>
              <Text context="neutral-secondary">
                 (Level {level}
                {level > 0 ? ", not draggable, not hoverable, not selectable" : ""}
                )
              </Text>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-gap-16">
        <ListContext items={items} selectedItems={selectedItems} selectionMode="multi" onItemsChange={change => {
        setItems(change.items);
      }} onSelectionChange={change => {
        setSelectedItems(change.selectedItems);
      }}>
          <ListContainer>
            {items.map((item, index) => <ListItem key={item.id} id={item.id} draggable={true} acceptsChildren={true} selectable={true} selectionScope="item" showCollapseControl={true} hoverable={true} dragHandle="container" subItems={item.children ? renderSubItems(item.children, 1, [index]) : undefined}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...($=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const de=["Demo","Draggable","DragHandleContainer","AcceptsChildren","Selectable","SelectionScope","Hoverable","CollapsableWithDragHandle","CollapsableWithDraggableContainer"];export{y as AcceptsChildren,f as CollapsableWithDragHandle,T as CollapsableWithDraggableContainer,I as Demo,x as DragHandleContainer,v as Draggable,L as Hoverable,C as Selectable,S as SelectionScope,de as __namedExportsOrder,ce as default};
