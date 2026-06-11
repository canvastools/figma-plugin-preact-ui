import{d as a,u as e}from"./hooks.module-6Sbq__eq.js";import{k as R}from"./preact.module-gH5CyEHP.js";import{f as C}from"./index-B4E_jmCM.js";import{a as f,b as F,L as v}from"./ListItem-DM69xxHq.js";import{S as I}from"./Stack-FIJoWfyG.js";import{S as V}from"./Spacing-BJUHNIx5.js";import{I as b}from"./Icon-DqIclgYW.js";import{i as D,f as T}from"./frame-Bcz8xoHF.js";import{T as y}from"./Text-BbQ_b1VF.js";import{C as X}from"./ColorSwatch-BEPlFBS4.js";import{I as z}from"./Input-C6IkVope.js";import{T as Y}from"./TimePicker-BW4AR9jY.js";import{S as Z}from"./Select-CL9RGrk6.js";import{l as w}from"./link-DL1y3n50.js";import{B as $}from"./ButtonIcon-8Phd8Afy.js";import{S as ee}from"./Switch-BJjYXbN1.js";import{C as te}from"./Checkbox-BhPJxRNu.js";import{S as ie}from"./SegmentedControl-rUOAK2f4.js";import{B as se}from"./ButtonIconToggle-B1m-I0Yx.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./chevronRight-D3_1NFed.js";import"./chevronDown-DnBW--rf.js";import"./dragHandle-DqY9Ja7T.js";import"./TooltipContext-Dv19iKcF.js";import"./TooltipContainer-CJCq4A9v.js";import"./color-C4wFq2U9.js";import"./clsx-BvRY1LMo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./MenuContainer-CfwM7edl.js";import"./chevronUp-CCKXm3lF.js";import"./MenuDivider-AltCHnUL.js";import"./MenuItemOption-DhMqtj_M.js";import"./check-BeUN7pdY.js";import"./mixed-siTn7IpN.js";const re={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ListItem variant="default">
  {children}
</ListItem>

<ListItem variant="layer">
  {children}
</ListItem>
`}}},render:()=>{const o=[{id:"Frame 0",items:[{id:"Frame 0-0",items:[{id:"Frame 0-0-0"},{id:"Frame 0-0-1"}]},{id:"Frame 0-1",items:[{id:"Frame 0-1-0"}]}]},{id:"Frame 1"},{id:"Frame 2",items:[{id:"Frame 2-0",items:[{id:"Frame 2-0-0"},{id:"Frame 2-0-1"},{id:"Frame 2-0-2"}]}]}],[n,u]=a(o),[g,h]=a([]),[l,d]=a(o),[p,m]=a([]),c=(t,s,r)=>e(v,{children:t.map(i=>e(F,{id:i.id,nestingLevel:s,selectable:!0,variant:r,draggable:!0,acceptsChildren:!0,selectionScope:r==="layer"?"withDescendants":"individual",hoverable:!0,items:i.items?c(i.items,s+1,r):void 0,children:e(I,{direction:"row",y:"center",children:[r==="layer"&&e(V,{direction:"row",size:200}),e(I,{direction:"row",spacing:200,y:"center",children:[i.id==="Frame 2"&&e(b,{glyph:D,size:16,intentModifier:"component"}),i.id.startsWith("Frame 2-")&&e(b,{glyph:T,size:16,intentModifier:"component"}),e(y,{wrap:!1,intentModifier:i.id.startsWith("Frame 2")?"component":"default",children:i.id})]}),e(y,{intentModifier:"secondary",wrap:!1,children:[" (Level ",s,")"]})]})},i.id))});return e("div",{className:"sb-row sb-width-full sb-gap-40",children:[e(f,{items:n,selectedItemIds:g,selectionMode:"multi",onItemsChange:t=>{u(t.items)},onSelectionChange:t=>{h(t.selectedItemIds)},children:c(n,0,"default")}),e(f,{items:l,selectedItemIds:p,selectionMode:"multi",onItemsChange:t=>d(t.items),onSelectionChange:t=>m(t.selectedItemIds),children:c(l,0,"layer")})]})}},ae={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ListItem variant="default">
  {children}
</ListItem>

<ListItem variant="layer">
  {children}
</ListItem>
`}}},render:()=>{const o=[{id:"Frame 0",items:[{id:"Frame 0-0",items:[{id:"Frame 0-0-0"},{id:"Frame 0-0-1"}]},{id:"Frame 0-1",items:[{id:"Frame 0-1-0"}]}]},{id:"Frame 1"},{id:"Frame 2",items:[{id:"Frame 2-0",items:[{id:"Frame 2-0-0"},{id:"Frame 2-0-1"},{id:"Frame 2-0-2"}]}]}],[n,u]=a(o),[g,h]=a([]),[l,d]=a(o),[p,m]=a([]),c=(t,s,r)=>e(v,{children:t.map(i=>e(F,{id:i.id,nestingLevel:s,selectable:!0,variant:r,draggable:!0,acceptsChildren:!0,selectionScope:r==="layer"?"withDescendants":"individual",hoverable:!0,items:i.items?c(i.items,s+1,r):void 0,collapsable:!0,children:e(I,{direction:"row",y:"center",children:[r==="layer"&&e(V,{direction:"row",size:200}),e(I,{direction:"row",spacing:200,y:"center",children:[i.id==="Frame 2"&&e(b,{glyph:D,size:16,intentModifier:"component"}),i.id.startsWith("Frame 2-")&&e(b,{glyph:T,size:16,intentModifier:"component"}),e(y,{wrap:!1,intentModifier:i.id.startsWith("Frame 2")?"component":"default",children:i.id})]}),e(y,{intentModifier:"secondary",wrap:!1,children:[" (Level ",s,")"]})]})},i.id))});return e("div",{className:"sb-row sb-width-full sb-gap-40",children:[e(f,{items:n,selectedItemIds:g,selectionMode:"multi",onItemsChange:t=>{u(t.items)},onSelectionChange:t=>{h(t.selectedItemIds)},children:c(n,0,"default")}),e(f,{items:l,selectedItemIds:p,selectionMode:"multi",onItemsChange:t=>d(t.items),onSelectionChange:t=>m(t.selectedItemIds),children:c(l,0,"layer")})]})}},ne={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Left padding property is not supported in styles."},source:{language:"tsx",code:`
<ListItem padding={{ top: 200, right: 200, bottom: 200 }}>
  {children}
</ListItem>
`}}},render:()=>{const o=[{id:"Frame 0",items:[{id:"Frame 0-0",items:[{id:"Frame 0-0-0"},{id:"Frame 0-0-1"}]},{id:"Frame 0-1",items:[{id:"Frame 0-1-0"}]}]},{id:"Frame 1"},{id:"Frame 2",items:[{id:"Frame 2-0",items:[{id:"Frame 2-0-0"},{id:"Frame 2-0-1"},{id:"Frame 2-0-2"}]}]}],[n,u]=a(o),[g,h]=a([]),[l,d]=a(o),[p,m]=a([]),c=(t,s,r)=>e(v,{children:t.map(i=>e(F,{id:i.id,nestingLevel:s,selectable:!0,variant:r,draggable:!0,acceptsChildren:!0,selectionScope:r==="layer"?"withDescendants":"individual",hoverable:!0,items:i.items?c(i.items,s+1,r):void 0,padding:{top:200,right:200,bottom:200},collapsable:!0,children:e(I,{direction:"row",y:"center",children:[r==="layer"&&e(V,{direction:"row",size:200}),e(I,{direction:"row",spacing:200,y:"center",children:[i.id==="Frame 2"&&e(b,{glyph:D,size:16,intentModifier:"component"}),i.id.startsWith("Frame 2-")&&e(b,{glyph:T,size:16,intentModifier:"component"}),e(y,{wrap:!1,intentModifier:i.id.startsWith("Frame 2")?"component":"default",children:i.id})]}),e(y,{intentModifier:"secondary",wrap:!1,children:[" (Level ",s,")"]})]})},i.id))});return e("div",{className:"sb-row sb-width-full sb-gap-40",children:[e(f,{items:n,selectedItemIds:g,selectionMode:"multi",onItemsChange:t=>{u(t.items)},onSelectionChange:t=>{h(t.selectedItemIds)},children:c(n,0,"default")}),e(f,{items:l,selectedItemIds:p,selectionMode:"multi",onItemsChange:t=>d(t.items),onSelectionChange:t=>m(t.selectedItemIds),children:c(l,0,"layer")})]})}},de={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Items can contain any content. `data-pui-interactive='true'` attribute can be applied to custom elements inside the list item to stop propagation of click events."},source:{language:"tsx",code:`
<ListItem>
  <input type="text" data-pui-interactive="true"/>
</ListItem>
`}}},render:()=>{const o=({label:s,variant:r})=>{if(r==="default")return[e(z,{value:s,prefix:e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:24,height:24},children:e(X,{size:"small",onClick:()=>console.log("clicked")})})}),e(Y,{}),e(Z,{placeholder:"Select an option",options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}]}),e($,{icon:{glyph:w}}),e(ee,{}),e(te,{defaultChecked:!0}),e(ie,{defaultValue:"option1",options:[{label:"Option 1",value:"option1",icon:{glyph:w,size:24}},{label:"Option 2",value:"option2",icon:{glyph:w,size:24}}]})];if(r==="layer")return[e(z,{value:s,ghost:!0,focusOnDoubleClick:!0}),e(se,{ghost:!0,icon:{glyph:w}})]},n=[{id:"Frame 0",items:[{id:"Frame 0-0",items:[{id:"Frame 0-0-0"},{id:"Frame 0-0-1"}]},{id:"Frame 0-1",items:[{id:"Frame 0-1-0"}]}]},{id:"Frame 1"},{id:"Frame 2",items:[{id:"Frame 2-0",items:[{id:"Frame 2-0-0"},{id:"Frame 2-0-1"},{id:"Frame 2-0-2"}]}]}],[u,g]=a(n),[h,l]=a([]),[d,p]=a(n),[m,c]=a([]),t=(s,r,i)=>e(v,{children:s.map(S=>e(F,{id:S.id,nestingLevel:r,selectable:!0,variant:i,draggable:!0,acceptsChildren:!0,selectionScope:i==="layer"?"withDescendants":"individual",collapsable:!0,hoverable:!0,items:S.items?t(S.items,r+1,i):void 0,children:e(I,{direction:"row",y:"center",fullWidth:!0,children:e(I,{direction:"row",spacing:200,y:"center",fullWidth:!0,children:e(o,{label:S.id,variant:i})})})},S.id))});return e("div",{className:"sb-row sb-width-full sb-gap-40",children:[e(f,{items:u,selectedItemIds:h,selectionMode:"multi",onItemsChange:s=>g(s.items),onSelectionChange:s=>l(s.selectedItemIds),children:t(u,0,"default")}),e(f,{items:d,selectedItemIds:m,selectionMode:"multi",onItemsChange:s=>{p(s.items)},onSelectionChange:s=>{c(s.selectedItemIds)},children:t(d,0,"layer")})]})}},Ge={title:"Components/ListItem",component:F,tags:["autodocs"],parameters:{docs:{description:{component:"A component for creating a list item. Used inside <a href='/docs/components-listcontainer--docs'>`<ListContainer/>`</a>."}}},argTypes:{id:{control:{type:"text"},description:"<strong>*</strong>"},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["default","layer"],defaultValue:{summary:"default"}},nestingLevel:{control:{type:"number"},defaultValue:{summary:0},description:"<strong>*</strong>",table:{type:{summary:"number"}}},padding:{control:{type:"object"},table:{type:{summary:"object",detail:`
padding: {
  top: SectionPadding
  right: SectionPadding
  bottom: SectionPadding
  left: SectionPadding
}

// Types

type ListItemPadding = keyof typeof spacing.variables // string | number
          `}}},draggable:{control:{type:"boolean"},defaultValue:{summary:!1}},tabIndex:{control:{type:"number"},description:"Tab order of the list item. Omit to use 0 when selectable, draggable, or collapsable; otherwise not tabbable.",table:{type:{summary:"number"}}},onDragStart:{table:{type:{summary:"(args) => void",detail:`
{
  event: DragEvent
}
          `}}},onDragEnd:{table:{type:{summary:"(args) => void",detail:`
{
  event: DragEvent
}
          `}}},acceptsChildren:{control:{type:"boolean"},defaultValue:{summary:!1}},selectable:{control:{type:"boolean"},description:"`data-pui-interactive='true'` attribute can be applied to elements inside the list item to stop propagation of click events.",defaultValue:{summary:!1}},selectionScope:{control:{type:"radio"},options:["individual","withDescendants"],defaultValue:{summary:"individual"},description:"Defines how the item can be selected. If set to `item`, the item can be selected individually. If set to `withDescendants`, the item and all its descendants can be selected at once."},onSelect:{table:{type:{summary:"(args) => void",detail:`
{
  event: MouseEvent
  selected: boolean
}
          `}}},hoverable:{control:{type:"boolean"},defaultValue:{summary:!1}},collapsed:{control:{disable:!0},description:"Value for controlled state.",table:{type:{summary:"boolean"}}},collapsable:{control:{type:"boolean"},defaultValue:{summary:!1}},onCollapsedChange:{table:{type:{summary:"(args) => void",detail:`
{
  event: MouseEvent
  collapsed: boolean
}
          `}}},items:{control:{disable:!0},description:"Nested items. It takes only one level of nesting. Items must be wrapped in `<ListContainer/>`.",table:{type:{summary:"preact.ComponentChildren"}}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},oe=[{id:"Frame 0",items:[{id:"Frame 0-0",items:[{id:"Frame 0-0-0"},{id:"Frame 0-0-1"}]},{id:"Frame 0-1",items:[{id:"Frame 0-1-0"}]}]},{id:"Frame 1"},{id:"Frame 2",items:[{id:"Frame 2-0",items:[{id:"Frame 2-0-0"},{id:"Frame 2-0-1"},{id:"Frame 2-0-2"}]}]}],L={tags:["!autodocs"],args:{id:void 0,className:"",nestingLevel:0,variant:"default",draggable:!0,acceptsChildren:!0,selectable:!0,selectionScope:"individual",hoverable:!0,collapsable:!1,onDragStart:C(),onDragEnd:C(),onSelect:C(),onCollapsedChange:C()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{code:`
const [selectedItemIds, setSelectedItemIds] = useState([])
const [items, setItems] = useState([
  {
    id: "Frame 0",
    children: [
      {
        id: "Frame 0-0",
        children: [
          { id: "Frame 0-0-0" },
          { id: "Frame 0-0-1" },
        ],
      },
      {
        id: "Frame 0-1",
        children: [
          { id: "Frame 0-1-0" },
        ],
      },
    ],
  },
  { id: "Frame 1" },
  {
    id: "Frame 2",
    children: [
      {
        id: "Frame 2-0",
        children: [
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
    <ListContainer>
      {items.map((item) => (
        <ListItem 
          key={item.id}
          id={item.id}
          nestingLevel={level}
          selectable={true}
          draggable={true}
          acceptsChildren={true}
          selectionScope="individual"
          hoverable={true}
          items={item.items ? renderItems(item.items, level + 1) : undefined}
          {...args}
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
        `}}},render:o=>{const[n,u]=a(oe),[g,h]=a([]),l=(d,p)=>e(v,{children:d.map(m=>R(F,{...o,key:m.id,id:m.id,nestingLevel:p,items:m.items?l(m.items,p+1):void 0},e(I,{direction:"row",y:"center",fullWidth:!0,children:[e(I,{direction:"row",y:"center",children:[o.variant==="layer"&&e(V,{direction:"row",size:200}),e(y,{wrap:!1,children:m.id})]}),e(y,{intentModifier:"secondary",wrap:!1,truncate:!0,fullWidth:!0,children:[" (Level ",p,")"]})]})))});return e("div",{className:"sb-column sb-width-full",children:e(f,{items:n,selectedItemIds:g,selectionMode:"multi",onItemsChange:d=>{u(d.items)},onSelectionChange:d=>{h(d.selectedItemIds)},children:l(n,0)})})}},_=re,x=ae,M=ne,k=de;var W,N,P;L.parameters={...L.parameters,docs:{...(W=L.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    nestingLevel: 0,
    variant: 'default',
    draggable: true,
    acceptsChildren: true,
    selectable: true,
    selectionScope: 'individual',
    hoverable: true,
    collapsable: false,
    onDragStart: fn(),
    onDragEnd: fn(),
    onSelect: fn(),
    onCollapsedChange: fn()
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
    children: [
      {
        id: "Frame 0-0",
        children: [
          { id: "Frame 0-0-0" },
          { id: "Frame 0-0-1" },
        ],
      },
      {
        id: "Frame 0-1",
        children: [
          { id: "Frame 0-1-0" },
        ],
      },
    ],
  },
  { id: "Frame 1" },
  {
    id: "Frame 2",
    children: [
      {
        id: "Frame 2-0",
        children: [
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
    <ListContainer>
      {items.map((item) => (
        <ListItem 
          key={item.id}
          id={item.id}
          nestingLevel={level}
          selectable={true}
          draggable={true}
          acceptsChildren={true}
          selectionScope="individual"
          hoverable={true}
          items={item.items ? renderItems(item.items, level + 1) : undefined}
          {...args}
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
    const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
    const renderItems = (items: ListItemData[], level: number) => {
      return <ListContainer>
          {items.map(item => <ListItem {...args} key={item.id} id={item.id} nestingLevel={level} items={item.items ? renderItems(item.items, level + 1) : undefined}>
              <Stack direction="row" y="center" fullWidth>
                <Stack direction="row" y="center">
                  {/* @ts-expect-error - Storybook types hack */}
                  {args.variant === 'layer' && <Spacing direction="row" size={200} />}
                  <Text wrap={false}>{item.id}</Text>
                </Stack>
                <Text intentModifier="secondary" wrap={false} truncate fullWidth>
                  &nbsp;(Level {level})
                </Text>
              </Stack>
            </ListItem>)}
        </ListContainer>;
    };
    return <div className="sb-column sb-width-full">
        <ListContext items={items} selectedItemIds={selectedItemIds} selectionMode="multi" onItemsChange={args => {
        setItems(args.items);
      }} onSelectionChange={args => {
        setSelectedItemIds(args.selectedItemIds);
      }}>
          {renderItems(items, 0)}
        </ListContext>
      </div>;
  }
}`,...(P=(N=L.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var E,O,B;_.parameters={..._.parameters,docs:{...(E=_.parameters)==null?void 0:E.docs,source:{originalSource:"VariantStory",...(B=(O=_.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var j,A,U;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:"CollapsableStory",...(U=(A=x.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var q,G,H;M.parameters={...M.parameters,docs:{...(q=M.parameters)==null?void 0:q.docs,source:{originalSource:"PaddingStory",...(H=(G=M.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:"ContentStory",...(Q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const He=["Demo","Variant","Collapsable","Padding","Content"];export{x as Collapsable,k as Content,L as Demo,M as Padding,_ as Variant,He as __namedExportsOrder,Ge as default};
