import{d,u as t}from"./hooks.module-Dxk9uxGs.js";import{_ as D}from"./preact.module-DKQ80Dzn.js";import{f as I}from"./index-BWINGljf.js";import{b as a,L as p,a as o}from"./ListItem-Dw71cyxv.js";import{S as m}from"./Stack-CNzGXmi4.js";import{T as r}from"./Text-C438qO9S.js";import{I as V}from"./Input-Byaypgcn.js";import{B as de}from"./Button-C22TyVLn.js";import{B as N}from"./ButtonIconToggle-Dl6flfvI.js";import{I as M}from"./Icon-Btq4UltS.js";import{C as oe}from"./Checkbox-CoZjP9EM.js";import{B as me}from"./ButtonIcon-D0YC-jK7.js";import{l as H}from"./link-Bngbaf4L.js";import{s as ue}from"./settings-CIc1R3a7.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";import"./chevronRight-DRcRefJO.js";import"./chevronDown-CnPbqtrs.js";import"./dragHandle-DdSSqxwz.js";import"./check-z8WFgJZW.js";import"./mixed-CVum6wgS.js";const Ee={title:"Experimental/ListItem ⚠️",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"<div class='experimental'>Experimental! API may change in future versions.</div> Always used within &lt;ListContext/&gt; and &lt;ListContainer/&gt;. It may contain any content."}}},argTypes:{className:{control:{type:"text"}},id:{control:{disable:!0},description:"Unique identifier of the item."},isNested:{table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{disable:!0},description:"Indicates if the item is nested."},nestingLevel:{table:{type:{summary:"number"}},control:{disable:!0},defaultValue:{summary:"0"},description:"Nesting level of the item. Must be provided if the item is nested."},draggable:{control:{type:"boolean"},defaultValue:{summary:!1}},dragHandle:{control:{type:"radio"},options:["default","container"],defaultValue:{summary:"default"},description:"Defines how the item can be dragged. If set to `container`, the item can be dragged by the container itself. If set to `default`, the item can be dragged by the drag handle. Works only if the item is draggable."},onDragStart:{action:"dragStart",description:"Callback when the item is dragged.",table:{type:{summary:"(args: { event: DragEvent }) => void"}}},onDragEnd:{action:"dragEnd",description:"Callback when the item is dragged.",table:{type:{summary:"(args: { event: DragEvent }) => void"}}},acceptsChildren:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Indicates if the item can have children."},selectable:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Indicates if the item can be selected."},selectionScope:{control:{type:"radio"},options:["item","withDescendants"],defaultValue:{summary:"item"},description:"Defines how the item can be selected. If set to `item`, the item can be selected individually. If set to `withDescendants`, the item and all its descendants can be selected at once."},onSelect:{action:"select",description:"Callback when the item is selected.",table:{type:{summary:"(args: { event: MouseEvent; collapsed: boolean }) => void"}}},hoverable:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Indicates if the item can have hover state."},collapsed:{table:{type:{summary:"number"}},control:{disable:!0},description:"Value for controlled mode."},showCollapseControl:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Indicates if the collapse control should be shown and can be used to collapse or expand the item."},onCollapsedChange:{action:"collapsedChange",description:"Callback when the item is collapsed or expanded.",table:{type:{summary:"(args: { event: MouseEvent; collapsed: boolean }) => void"}}},reducedPaddingRight:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Indicates if the item has reduced padding on the right. For pixel perfect vertical alignment with ghost-like buttons.",table:{type:{summary:"boolean"}}},subItems:{control:{disable:!0},description:"&lt;ListContainer&gt; with &lt;ListItem&gt; components.",table:{type:{summary:"JSX.Element"}}},children:{control:{disable:!0},description:"Any content of the item.",table:{type:{summary:"string | number | JSX.Element"}}}}},g=[{id:"Frame 1",children:[{id:"Frame 11",children:[{id:"Frame 111"},{id:"Frame 112"}]},{id:"Frame 12",children:[{id:"Frame 121"}]}]},{id:"Frame 2"},{id:"Frame 3",children:[{id:"Frame 31",children:[{id:"Frame 311"},{id:"Frame 312"},{id:"Frame 313"}]}]}],f={tags:["!autodocs"],args:{className:"",draggable:!0,dragHandle:"default",onDragStart:I(),onDragEnd:I(),acceptsChildren:!0,selectable:!0,selectionScope:"item",onSelect:I(),hoverable:!0,reducedPaddingRight:!1,showCollapseControl:!1,onCollapsedChange:I()},parameters:{viewport:{defaultViewport:"large"}},render:s=>{const[c,u]=d(g),[h,l]=d([]),e=(n,i)=>!n||n.length===0?null:t(o,{children:n.map(b=>D(a,{...s,key:b.id,id:b.id,nestingLevel:i,subItems:b.children?e(b.children,i+1):void 0},t(m,{direction:"row",spacing:200,children:[t(r,{children:b.id}),t(r,{intentModifiers:"secondary",children:["(Level ",i,")"]})]})))});return t("div",{className:"sb-column sb-width-full",children:t(p,{items:c,selectedItems:h,selectionMode:"multi",onItemsChange:n=>{u(n.items)},onSelectionChange:n=>{l(n.selectedItems)},children:t(o,{children:c.map(n=>D(a,{...s,key:n.id,id:n.id,subItems:n.children?e(n.children,1):void 0},t(m,{direction:"row",spacing:200,children:[t(r,{children:n.id}),t(r,{intentModifiers:"secondary",children:"(Level 0)"})]})))})})})}},v={parameters:{controls:{disable:!0},docs:{description:{story:"Some elements can be explicitly restricted from being draggable. However, if they are nested, they will still move along with their parent. It's recommended to apply selection restriction in combination with drag restriction and hover restriction for better UX."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,c]=d(g),[u,h]=d([]),l=(e,n)=>!e||e.length===0?null:t(o,{children:e.map(i=>t(a,{id:i.id,nestingLevel:n,draggable:!(n>1),acceptsChildren:!0,selectable:!(n>1),selectionScope:"item",hoverable:!(n>1),subItems:i.children?l(i.children,n+1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:i.id}),t(r,{intentModifiers:"secondary",children:["(Level ",n,n>1?", not draggable, not hoverable, not selectable":"",")"]})]})},i.id))});return t("div",{className:"sb-column sb-width-full",children:t(p,{items:s,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{c(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(o,{children:s.map(e=>t(a,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:e.id}),t(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},e.id))})})})}},S={parameters:{controls:{disable:!0},docs:{description:{story:"By default, the dragHandle appears on hover to the left, but you can specify `container` to make the entire container draggable. It’s best not to mix different types of dragHandles within the same list."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,c]=d(g),[u,h]=d([]),l=(e,n)=>!e||e.length===0?null:t(o,{children:e.map(i=>t(a,{id:i.id,nestingLevel:n,draggable:!0,dragHandle:"container",acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:i.children?l(i.children,n+1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:i.id}),t(r,{intentModifiers:"secondary",children:["(Level ",n,")"]})]})},i.id))});return t("div",{className:"sb-column sb-width-full",children:t(p,{items:s,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{c(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(o,{children:s.map(e=>t(a,{id:e.id,draggable:!0,dragHandle:"container",acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:e.id}),t(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},e.id))})})})}},C={parameters:{controls:{disable:!0},docs:{description:{story:"Some elements can be explicitly restricted from accepting children."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,c]=d(g),[u,h]=d([]),l=(e,n)=>!e||e.length===0?null:t(o,{children:e.map(i=>t(a,{id:i.id,nestingLevel:n,draggable:!0,acceptsChildren:!(n>1),selectable:!0,selectionScope:"item",hoverable:!0,subItems:i.children?l(i.children,n+1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:i.id}),t(r,{intentModifiers:"secondary",children:["(Level ",n,n>1?", no children":"",")"]})]})},i.id))});return t("div",{className:"sb-column sb-width-full",children:t(p,{items:s,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{c(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(o,{children:s.map(e=>t(a,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:e.id}),t(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},e.id))})})})}},y={parameters:{controls:{disable:!0},docs:{description:{story:"Some elements can be restricted from being selectable. It's recommended to apply selection restriction in combination with drag restriction and hover restriction for better UX."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,c]=d(g),[u,h]=d([]),l=(e,n)=>!e||e.length===0?null:t(o,{children:e.map(i=>t(a,{id:i.id,nestingLevel:n,draggable:!(n>1),acceptsChildren:!0,selectable:!(n>1),selectionScope:"item",hoverable:!(n>1),subItems:i.children?l(i.children,n+1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:i.id}),t(r,{intentModifiers:"secondary",children:["(Level ",n,n>1?", not draggable, not hoverable, not selectable":"",")"]})]})},i.id))});return t("div",{className:"sb-column sb-width-full",children:t(p,{items:s,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{c(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(o,{children:s.map(e=>t(a,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:e.id}),t(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},e.id))})})})}},L={parameters:{controls:{disable:!0},docs:{description:{story:"The selection scope determines how elements are selected. With `withDescendants`, the entire branch is selected, and the `onSelectionChange` event of &lt;ListContext&gt; will return an array of all elements."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,c]=d(g),[u,h]=d([]),l=(e,n)=>!e||e.length===0?null:t(o,{children:e.map(i=>t(a,{id:i.id,nestingLevel:n,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"withDescendants",hoverable:!0,subItems:i.children?l(i.children,n+1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:i.id}),t(r,{intentModifiers:"secondary",children:["(Level ",n,")"]})]})},i.id))});return t("div",{className:"sb-column sb-width-full",children:t(p,{items:s,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{c(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(o,{children:s.map(e=>t(a,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"withDescendants",hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:e.id}),t(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},e.id))})})})}},w={parameters:{controls:{disable:!0},docs:{description:{story:"Some elements can be restricted from showing hover feedback. It's recommended to enable this for all interactive items to provide better UX"}},viewport:{defaultViewport:"large"}},render:()=>{const[s,c]=d(g),[u,h]=d([]),l=(e,n)=>!e||e.length===0?null:t(o,{children:e.map(i=>t(a,{id:i.id,nestingLevel:n,draggable:!(n>1),acceptsChildren:!0,selectable:!(n>1),selectionScope:"item",hoverable:!(n>1),subItems:i.children?l(i.children,n+1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:i.id}),t(r,{intentModifiers:"secondary",children:["(Level ",n,n>1?", not draggable, not hoverable, not selectable":"",")"]})]})},i.id))});return t("div",{className:"sb-column sb-gap-16",children:t(p,{items:s,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{c(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(o,{children:s.map(e=>t(a,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:e.id}),t(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},e.id))})})})}},x={parameters:{controls:{disable:!0},docs:{description:{story:"Large trees can be collapsed by setting `showCollapseControl`. By default, the state is managed internally by the component, but you can also pass the state via the `collapsed` property."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,c]=d(g),[u,h]=d([]),l=(e,n)=>!e||e.length===0?null:t(o,{children:e.map(i=>t(a,{id:i.id,nestingLevel:n,draggable:!(n>1),acceptsChildren:!0,selectable:!(n>1),selectionScope:"item",hoverable:!(n>1),showCollapseControl:!0,subItems:i.children?l(i.children,n+1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:i.id}),t(r,{intentModifiers:"secondary",children:["(Level ",n,n>1?", not draggable, not hoverable, not selectable":"",")"]})]})},i.id))});return t("div",{className:"sb-column sb-width-full",children:t(p,{items:s,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{c(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(o,{children:s.map(e=>t(a,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",showCollapseControl:!0,hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:e.id}),t(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},e.id))})})})}},T={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[s,c]=d(g),[u,h]=d([]),l=(e,n)=>!e||e.length===0?null:t(o,{children:e.map(i=>t(a,{id:i.id,nestingLevel:n,draggable:!(n>1),acceptsChildren:!0,selectable:!(n>1),selectionScope:"item",hoverable:!(n>1),showCollapseControl:!0,dragHandle:"container",subItems:i.children?l(i.children,n+1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:i.id}),t(r,{intentModifiers:"secondary",children:["(Level ",n,n>1?", not draggable, not hoverable, not selectable":"",")"]})]})},i.id))});return t("div",{className:"sb-column sb-width-full",children:t(p,{items:s,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{c(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(o,{children:s.map(e=>t(a,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"item",showCollapseControl:!0,hoverable:!0,dragHandle:"container",subItems:e.children?l(e.children,1):void 0,children:t(m,{direction:"row",spacing:200,children:[t(r,{children:e.id}),t(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},e.id))})})})}},k={parameters:{controls:{disable:!0},docs:{description:{story:"The ListItem can contain any content."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,c]=d(g),[u,h]=d([]),l=(e,n)=>!e||e.length===0?null:t(o,{children:e.map(i=>t(a,{id:i.id,nestingLevel:n,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"withDescendants",hoverable:!0,showCollapseControl:!0,subItems:i.children?l(i.children,n+1):void 0,reducedPaddingRight:!0,children:t(m,{direction:"row",spacing:200,y:"center",fullWidth:!0,children:[t(V,{defaultValue:i.id}),t(oe,{label:"Label"}),t(me,{ghost:!0,children:t(M,{glyph:ue,variant:"scaled"})}),t(N,{ghost:!0,children:t(M,{glyph:H,variant:"scaled"})})]})},i.id))});return t("div",{className:"sb-column sb-width-full",children:t(p,{items:s,selectedItems:u,selectionMode:"multi",onItemsChange:e=>{c(e.items)},onSelectionChange:e=>{h(e.selectedItems)},children:t(o,{children:s.map(e=>t(a,{id:e.id,draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"withDescendants",showCollapseControl:!0,hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:t(m,{direction:"row",spacing:200,y:"center",fullWidth:!0,children:[t(V,{defaultValue:e.id,ghost:!0,focusOnDoubleClick:!0}),t(r,{intentModifiers:"secondary",className:"text-no-wrap",children:"Ghost + Double click focus"}),t(de,{children:"Action"}),t(N,{children:t(M,{glyph:H,variant:"scaled"})})]})},e.id))})})})}};var B,E,F;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    reducedPaddingRight: false,
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
      </div>;
  }
}`,...(F=(E=f.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var W,X,A;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
      </div>;
  }
}`,...(A=(X=v.parameters)==null?void 0:X.docs)==null?void 0:A.source}}};var U,P,R;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
      </div>;
  }
}`,...(R=(P=S.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var O,_,G;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
      </div>;
  }
}`,...(G=(_=C.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var J,q,j;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
      </div>;
  }
}`,...(j=(q=y.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var z,K,Q;L.parameters={...L.parameters,docs:{...(z=L.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
      </div>;
  }
}`,...(Q=(K=L.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,$;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
      </div>;
  }
}`,...($=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
      </div>;
  }
}`,...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,re,se;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
      </div>;
  }
}`,...(se=(re=T.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,ae,ce;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
          {children.map(child => <ListItem key={child.id} id={child.id} nestingLevel={level} draggable={true} acceptsChildren={true} selectable={true} selectionScope="withDescendants" hoverable={true} showCollapseControl={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined} reducedPaddingRight={true}>
              <Stack direction="row" spacing={200} y="center" fullWidth>
                <Input defaultValue={child.id} />
                <Checkbox label="Label" />
                <ButtonIcon ghost>
                  <Icon glyph={glyphs.settings} variant="scaled" />
                </ButtonIcon>
                <ButtonIconToggle ghost>
                  <Icon glyph={glyphs.link} variant="scaled" />
                </ButtonIconToggle>
              </Stack>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-width-full">
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
                    <Icon glyph={glyphs.link} variant="scaled" />
                  </ButtonIconToggle>
                </Stack>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(ce=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};const Fe=["Demo","Draggable","DragHandleContainer","AcceptsChildren","Selectable","SelectionScope","Hoverable","CollapsableWithDragHandle","CollapsableWithDraggableContainer","Children"];export{C as AcceptsChildren,k as Children,x as CollapsableWithDragHandle,T as CollapsableWithDraggableContainer,f as Demo,S as DragHandleContainer,v as Draggable,w as Hoverable,y as Selectable,L as SelectionScope,Fe as __namedExportsOrder,Ee as default};
