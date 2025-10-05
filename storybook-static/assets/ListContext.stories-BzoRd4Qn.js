import{d as o,u as t}from"./hooks.module-Dxk9uxGs.js";import{f as C}from"./index-BWINGljf.js";import{L as g,a as m,b as u}from"./ListItem-Dw71cyxv.js";import{T as r}from"./Text-C438qO9S.js";import{S as h}from"./Stack-CNzGXmi4.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";import"./Icon-Btq4UltS.js";import"./chevronRight-DRcRefJO.js";import"./chevronDown-CnPbqtrs.js";import"./dragHandle-DdSSqxwz.js";const z={title:"Experimental/ListContext ⚠️",component:g,tags:["autodocs"],parameters:{docs:{description:{component:"<div class='experimental'>Experimental! API may change in future versions.</div> A wrapper component that manages a list state."}}},argTypes:{items:{table:{type:{summary:"ListItemData[]"}},control:{disable:!0},description:`Array of items to manage.
      <pre>interface ListItemData {
  id: string
  selected?: boolean
  children?: ListItemData[]
}</pre>
      `},selectedItems:{table:{type:{summary:"string[]"}},control:{disable:!0},description:"Array of selected items IDs."},selectionMode:{control:{type:"select"},options:["none","single","multi"],defaultValue:{summary:"single"}},onItemsChange:{action:"itemsChange",description:"Callback when the item order or structure is changed. Returns an array of items.",table:{type:{summary:"(args: { items: ListItemData[] }) => void"}}},onSelectionChange:{action:"selectionChange",description:"Callback when the selection is changed. Returns an array of selected items IDs.",table:{type:{summary:"(args: { selectedItems: string[] }) => void"}}},children:{table:{type:{summary:"string | number | JSX.Element"}},control:{disable:!0},description:"Usually &lt;ListContainer/&gt;"},useListContext:{table:{type:{summary:"Hook"}},description:`Use this hook inside a child component to access the context. <br/>
        <pre>
        interface ListContextValue {
          items: ListItemData[]
          selectedItems: Set<string>
          setSelection: (itemIds: string[], selected: boolean) => void
          setExactSelection: (itemIds: string[]) => void
          toggleSelect: (
            itemId: string,
            options?: { range?: boolean; additive?: boolean }
          ) => void
          registerItemMeta?: (
            id: string,
            meta: { selectable?: boolean; selectionScope?: "item" | "withDescendants" }
          ) => () => void
          getPathForId?: (id: string) => number[] | null
          registerItemPath?: (id: string, path: number[]) => () => void
          reorderItems: (
            itemIds: string[],
            targetIndex: number,
            targetParentPath?: number[]
          ) => void
          selectionMode: "none" | "single" | "multi"
          registerRootElement?: (el: HTMLElement | null) => () => void
          dragImage?: HTMLDivElement | null
        }
        </pre>
        `}}},v=[{id:"Frame 1",children:[{id:"Frame 11",children:[{id:"Frame 111"},{id:"Frame 112"}]},{id:"Frame 12",children:[{id:"Frame 121"}]}]},{id:"Frame 2"},{id:"Frame 3",children:[{id:"Frame 31",children:[{id:"Frame 311"},{id:"Frame 312"},{id:"Frame 313"}]}]}],p={tags:["!autodocs"],args:{selectionMode:"single",onItemsChange:C(),onSelectionChange:C()},parameters:{viewport:{defaultViewport:"large"}},render:s=>{const[d,c]=o(v),[a,l]=o([]);return t("div",{className:"sb-column sb-gap-16",children:t(g,{items:d,selectedItems:a,selectionMode:s.selectionMode,onItemsChange:e=>{var n;c(e.items),(n=s.onItemsChange)==null||n.call(s,e)},onSelectionChange:e=>{var n;l(e.selectedItems),(n=s.onSelectionChange)==null||n.call(s,e)},children:t(m,{children:d.map(e=>t(u,{id:e.id,draggable:!0,selectable:!0,children:t(r,{children:e.id})}))})})})}},I={parameters:{controls:{disable:!0},docs:{description:{story:"No ability to select items."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,d]=o(v),[c,a]=o([]),l=(e,n)=>!e||e.length===0?null:t(m,{children:e.map(i=>t(u,{id:i.id,draggable:!0,selectable:!0,acceptsChildren:!0,nestingLevel:n,hoverable:!0,subItems:i.children?l(i.children,n+1):void 0,children:t(h,{direction:"row",spacing:200,children:[t(r,{children:i.id}),t(r,{intentModifiers:"secondary",children:["(Level ",n,")"]})]})},i.id))});return t("div",{className:"sb-column sb-gap-16",children:t(g,{items:s,selectedItems:c,selectionMode:"none",onItemsChange:e=>{d(e.items)},onSelectionChange:e=>{a(e.selectedItems)},children:t(m,{children:s.map(e=>t(u,{id:e.id,draggable:!0,selectable:!0,acceptsChildren:!0,hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:t(h,{direction:"row",spacing:200,children:[t(r,{children:e.id}),t(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},e.id))})})})}},b={parameters:{controls:{disable:!0},docs:{description:{story:"Single selection mode."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,d]=o(v),[c,a]=o([]),l=(e,n)=>!e||e.length===0?null:t(m,{children:e.map(i=>t(u,{id:i.id,draggable:!0,selectable:!0,acceptsChildren:!0,nestingLevel:n,hoverable:!0,subItems:i.children?l(i.children,n+1):void 0,children:t(h,{direction:"row",spacing:200,children:[t(r,{children:i.id}),t(r,{intentModifiers:"secondary",children:["(Level ",n,")"]})]})},i.id))});return t("div",{className:"sb-column sb-gap-16",children:t(g,{items:s,selectedItems:c,selectionMode:"single",onItemsChange:e=>{d(e.items)},onSelectionChange:e=>{a(e.selectedItems)},children:t(m,{children:s.map(e=>t(u,{id:e.id,draggable:!0,selectable:!0,acceptsChildren:!0,hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:t(h,{direction:"row",spacing:200,children:[t(r,{children:e.id}),t(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},e.id))})})})}},S={parameters:{controls:{disable:!0},docs:{description:{story:"Multi selection mode using Shift key or Ctrl/CMD key."}},viewport:{defaultViewport:"large"}},render:()=>{const[s,d]=o(v),[c,a]=o([]),l=(e,n)=>!e||e.length===0?null:t(m,{children:e.map(i=>t(u,{id:i.id,draggable:!0,selectable:!0,acceptsChildren:!0,nestingLevel:n,hoverable:!0,subItems:i.children?l(i.children,n+1):void 0,children:t(h,{direction:"row",spacing:200,children:[t(r,{children:i.id}),t(r,{intentModifiers:"secondary",children:["(Level ",n,")"]})]})},i.id))});return t("div",{className:"sb-column sb-width-full",children:t(g,{items:s,selectedItems:c,selectionMode:"multi",onItemsChange:e=>{d(e.items)},onSelectionChange:e=>{a(e.selectedItems)},children:t(m,{children:s.map(e=>t(u,{id:e.id,draggable:!0,selectable:!0,acceptsChildren:!0,nestingLevel:0,hoverable:!0,subItems:e.children?l(e.children,1):void 0,children:t(h,{direction:"row",spacing:200,children:[t(r,{children:e.id}),t(r,{intentModifiers:"secondary",children:"(Level 0)"})]})},e.id))})})})}};var L,y,f;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    selectionMode: "single",
    onItemsChange: fn(),
    onSelectionChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => {
    const [items, setItems] = useState(sampleItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    return <div className="sb-column sb-gap-16">
        <ListContext items={items} selectedItems={selectedItems}
      // @ts-expect-error: Storybook types hack
      selectionMode={args.selectionMode} onItemsChange={change => {
        setItems(change.items);
        //@ts-expect-error: Storybook types hack
        args.onItemsChange?.(change);
      }} onSelectionChange={change => {
        setSelectedItems(change.selectedItems);
        //@ts-expect-error: Storybook types hack
        args.onSelectionChange?.(change);
      }}>
          <ListContainer>
            {items.map(item => <ListItem id={item.id} draggable={true} selectable={true}>
                <Text>{item.id}</Text>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(f=(y=p.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,M,w;I.parameters={...I.parameters,docs:{...(x=I.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "No ability to select items."
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
          {children.map(child => <ListItem key={child.id} id={child.id} draggable={true} selectable={true} acceptsChildren={true} nestingLevel={level} hoverable={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">(Level {level})</Text>
              </Stack>
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
                <Stack direction="row" spacing={200}>
                  <Text>{item.id}</Text>
                  <Text intentModifiers="secondary">(Level 0)</Text>
                </Stack>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(w=(M=I.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var k,T,D;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Single selection mode."
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
          {children.map(child => <ListItem key={child.id} id={child.id} draggable={true} selectable={true} acceptsChildren={true} nestingLevel={level} hoverable={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">(Level {level})</Text>
              </Stack>
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
                <Stack direction="row" spacing={200}>
                  <Text>{item.id}</Text>
                  <Text intentModifiers="secondary">(Level 0)</Text>
                </Stack>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(D=(T=b.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var F,N,V;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Multi selection mode using Shift key or Ctrl/CMD key."
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
          {children.map(child => <ListItem key={child.id} id={child.id} draggable={true} selectable={true} acceptsChildren={true} nestingLevel={level} hoverable={true} subItems={child.children ? renderSubItems(child.children, level + 1) : undefined}>
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
            {items.map(item => <ListItem key={item.id} id={item.id} draggable={true} selectable={true} acceptsChildren={true} nestingLevel={0} hoverable={true} subItems={item.children ? renderSubItems(item.children, 1) : undefined}>
                <Stack direction="row" spacing={200}>
                  <Text>{item.id}</Text>
                  <Text intentModifiers="secondary">(Level 0)</Text>
                </Stack>
              </ListItem>)}
          </ListContainer>
        </ListContext>
      </div>;
  }
}`,...(V=(N=S.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const B=["Demo","NoSelection","SingleSelection","MultiSelection"];export{p as Demo,S as MultiSelection,I as NoSelection,b as SingleSelection,B as __namedExportsOrder,z as default};
