import{u as t}from"./jsxRuntime.module-CXXlufuJ.js";import{f as C}from"./index-BWINGljf.js";import{d as c}from"./compat.module-C_m5Zvzo.js";import{a as h,L as m,b as u}from"./ListItem-Cmed4_yL.js";import{T as i}from"./Text-Zs2635gN.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-DzGXX2Gk.js";import"./Icon-DvMK2avU.js";const X={title:"Components/ListContext",component:h,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that manages a list state."}}},argTypes:{items:{table:{type:{summary:"ListItemData[]"}},control:{disable:!0},description:`Array of items to manage.
      <pre>interface ListItemData {
  id: string
  selected?: boolean
  children?: ListItemData[]
}</pre>
      `},selectedItems:{table:{type:{summary:"string[]"}},control:{disable:!0},description:"Array of selected items IDs."},selectionMode:{control:{type:"select"},options:["none","single","multi"],defaultValue:{summary:"single"}},onItemsChange:{action:"itemsChange",description:"Callback function that is called when the item order or structure is changed. Returns an array of items.",table:{type:{summary:"(args: { items: ListItemData[] }) => void"}}},onSelectionChange:{action:"selectionChange",description:"Callback function that is called when the selection is changed. Returns an array of selected items IDs.",table:{type:{summary:"(args: { selectedItems: string[] }) => void"}}},children:{table:{type:{summary:"string | number | JSX.Element"}},control:{disable:!0},description:"Usually &lt;ListContainer/&gt;"}}},v=[{id:"Frame 1",children:[{id:"Frame 11",children:[{id:"Frame 111"},{id:"Frame 112"}]},{id:"Frame 12",children:[{id:"Frame 121"}]}]},{id:"Frame 2"},{id:"Frame 3",children:[{id:"Frame 31",children:[{id:"Frame 311"},{id:"Frame 312"},{id:"Frame 313"}]}]}],g={tags:["!autodocs"],args:{selectionMode:"single",onItemsChange:C(),onSelectionChange:C()},render:r=>{const[l,d]=c(v),[o,a]=c([]);return t("div",{className:"sb-column sb-gap-16",children:t(h,{items:l,selectedItems:o,selectionMode:r.selectionMode,onItemsChange:e=>{var n;d(e.items),(n=r.onItemsChange)==null||n.call(r,e)},onSelectionChange:e=>{var n;a(e.selectedItems),(n=r.onSelectionChange)==null||n.call(r,e)},children:t(m,{children:l.map(e=>t(u,{id:e.id,draggable:!0,selectable:!0,children:t(i,{variant:"body",context:"neutral",children:e.id})}))})})})}},b={tags:["!dev"],parameters:{controls:{disable:!0},docs:{description:{story:"No ability to select items."}}},render:()=>{const[r,l]=c(v),[d,o]=c([]),a=(e,n)=>!e||e.length===0?null:t(m,{children:e.map(s=>t(u,{id:s.id,draggable:!0,selectable:!0,acceptsChildren:!0,nestingLevel:n,hoverable:!0,subItems:s.children?a(s.children,n+1):void 0,children:[t(i,{variant:"body",context:"neutral",children:s.id}),t(i,{context:"neutral-secondary",children:[" (Level ",n,")"]})]},s.id))});return t("div",{className:"sb-column sb-gap-16",children:t(h,{items:r,selectedItems:d,selectionMode:"none",onItemsChange:e=>{l(e.items)},onSelectionChange:e=>{o(e.selectedItems)},children:t(m,{children:r.map(e=>t(u,{id:e.id,draggable:!0,selectable:!0,acceptsChildren:!0,hoverable:!0,subItems:e.children?a(e.children,1):void 0,children:[t(i,{variant:"body",context:"neutral",children:e.id}),t(i,{context:"neutral-secondary",children:" (Level 0)"})]},e.id))})})})}},I={tags:["!dev"],parameters:{controls:{disable:!0},docs:{description:{story:"Single selection mode."}}},render:()=>{const[r,l]=c(v),[d,o]=c([]),a=(e,n)=>!e||e.length===0?null:t(m,{children:e.map(s=>t(u,{id:s.id,draggable:!0,selectable:!0,acceptsChildren:!0,nestingLevel:n,hoverable:!0,subItems:s.children?a(s.children,n+1):void 0,children:[t(i,{variant:"body",context:"neutral",children:s.id}),t(i,{context:"neutral-secondary",children:[" (Level ",n,")"]})]},s.id))});return t("div",{className:"sb-column sb-gap-16",children:t(h,{items:r,selectedItems:d,selectionMode:"single",onItemsChange:e=>{l(e.items)},onSelectionChange:e=>{o(e.selectedItems)},children:t(m,{children:r.map(e=>t(u,{id:e.id,draggable:!0,selectable:!0,acceptsChildren:!0,hoverable:!0,subItems:e.children?a(e.children,1):void 0,children:[t(i,{variant:"body",context:"neutral",children:e.id}),t(i,{context:"neutral-secondary",children:" (Level 0)"})]},e.id))})})})}},p={tags:["!dev"],parameters:{controls:{disable:!0},docs:{description:{story:"Multi selection mode using Shift key or Ctrl/CMD key."}}},render:()=>{const[r,l]=c(v),[d,o]=c([]),a=(e,n)=>!e||e.length===0?null:t(m,{children:e.map(s=>t(u,{id:s.id,draggable:!0,selectable:!0,acceptsChildren:!0,nestingLevel:n,hoverable:!0,subItems:s.children?a(s.children,n+1):void 0,children:[t(i,{variant:"body",context:"neutral",children:s.id}),t(i,{context:"neutral-secondary",children:[" (Level ",n,")"]})]},s.id))});return t("div",{className:"sb-column sb-gap-16",children:t(h,{items:r,selectedItems:d,selectionMode:"multi",onItemsChange:e=>{l(e.items)},onSelectionChange:e=>{o(e.selectedItems)},children:t(m,{children:r.map((e,n)=>t(u,{id:e.id,draggable:!0,selectable:!0,acceptsChildren:!0,nestingLevel:0,hoverable:!0,subItems:e.children?a(e.children,1):void 0,children:[t(i,{variant:"body",context:"neutral",children:e.id}),t(i,{context:"neutral-secondary",children:" (Level 0)"})]},e.id))})})})}};var x,y,L;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    selectionMode: "single",
    onItemsChange: fn(),
    onSelectionChange: fn()
  },
  render: (args: any) => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    return <div className="sb-column sb-gap-16">
        <ListContext items={items} selectedItems={selectedItems} selectionMode={args.selectionMode} onItemsChange={change => {
        setItems(change.items);
        args.onItemsChange?.(change);
      }} onSelectionChange={change => {
        setSelectedItems(change.selectedItems);
        args.onSelectionChange?.(change);
      }}>
          <ListContainer>
            {items.map(item => <ListItem id={item.id} draggable={true} selectable={true}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(L=(y=g.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var S,f,T;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "No ability to select items."
      }
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children: any[], level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} draggable={true} selectable={true} acceptsChildren={true} nestingLevel={level} hoverable={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Text variant="body" context="neutral">
                {child.id}
              </Text>
              <Text context="neutral-secondary"> (Level {level})</Text>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-gap-16">
        <ListContext items={items} selectedItems={selectedItems} selectionMode="none" onItemsChange={change => {
        setItems(change.items);
      }} onSelectionChange={change => {
        setSelectedItems(change.selectedItems);
      }}>
          <ListContainer>
            {items.map(item => <ListItem key={item.id} id={item.id} draggable={true} selectable={true} acceptsChildren={true} hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(T=(f=b.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var M,k,F;I.parameters={...I.parameters,docs:{...(M=I.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Single selection mode."
      }
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children: any[], level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} draggable={true} selectable={true} acceptsChildren={true} nestingLevel={level} hoverable={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Text variant="body" context="neutral">
                {child.id}
              </Text>
              <Text context="neutral-secondary"> (Level {level})</Text>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-gap-16">
        <ListContext items={items} selectedItems={selectedItems} selectionMode="single" onItemsChange={change => {
        setItems(change.items);
      }} onSelectionChange={change => {
        setSelectedItems(change.selectedItems);
      }}>
          <ListContainer>
            {items.map(item => <ListItem key={item.id} id={item.id} draggable={true} selectable={true} acceptsChildren={true} hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(F=(k=I.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var N,D,w;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Multi selection mode using Shift key or Ctrl/CMD key."
      }
    }
  },
  render: () => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const renderSubItems = (children: any[], level: number) => {
      if (!children || children.length === 0) return null;
      return <ListContainer>
          {children.map(child => <ListItem key={child.id} id={child.id} draggable={true} selectable={true} acceptsChildren={true} nestingLevel={level} hoverable={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
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
            {items.map((item, index) => <ListItem key={item.id} id={item.id} draggable={true} selectable={true} acceptsChildren={true} nestingLevel={0} hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(w=(D=p.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const j=["Demo","NoSelection","SingleSelection","MultiSelection"];export{g as Demo,p as MultiSelection,b as NoSelection,I as SingleSelection,j as __namedExportsOrder,X as default};
