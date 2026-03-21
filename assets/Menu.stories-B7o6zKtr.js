import{A as s,u as e,d as L,y as T}from"./hooks.module-CGIakYml.js";import{f as O}from"./index-BWINGljf.js";import{M as l}from"./Menu-DcSgvTPT.js";import{B as g}from"./Button-2yuwlxjW.js";import{T as _}from"./Text-9aeIDhQ2.js";import{k as q}from"./preact.module-C06nO-nz.js";import{u as H}from"./MenuContainer-3_R8VF1b.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./TooltipContext-DJAjWLpJ.js";import"./TooltipContainer-BVa1RtHA.js";import"./MenuItemAction-Nw1tf0Io.js";import"./MenuItemOption-BgA39XLI.js";import"./Icon-DYEerEJN.js";import"./check-C21gnuYF.js";import"./MenuDivider-C1ivzsh3.js";import"./chevronUp-CBO9Bw6D.js";import"./chevronDown-B_bnQDqi.js";const V={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const triggerRef = useRef(null)


const items = [
  {
    type: "action",
    closeOnClick: true,
    id: "action-1",
    children: "Action 1",
    onClick: () => { ... }
  },
  {
    type: "action",
    closeOnClick: true,
    id: "action-2",
    children: "Action 2",
    onClick: () => { ... }
  },
  {
    type: "action",
    id: "action-3",
    closeOnClick: true,
    children: "Action 3",
    onClick: () => { ... }
  },
]


<Button ref={triggerRef}>{children}</Button>

<Menu 
  triggerRef={triggerRef}
  items={items}
/>

`}}},render:()=>{const t=s(null);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(g,{ref:t,children:"Open Menu"}),e(l,{triggerRef:t,items:[{type:"action",id:"action-1",children:"Action 1",closeOnClick:!0,onClick:()=>console.log("action-1 clicked")},{type:"action",id:"action-2",children:"Action 2",closeOnClick:!0,onClick:()=>console.log("action-2 clicked")},{type:"action",id:"action-3",children:"Action 3",closeOnClick:!0,onClick:()=>console.log("action-3 clicked")}]})]})}},F={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const triggerRef = useRef(null)
const [open, setOpen] = useState(false)

const items = [
  {
    type: "action",
    closeOnClick: true,
    id: "action-1",
    children: "Action 1",
    onClick: () => { ... }
  },
  {
    type: "action",
    closeOnClick: true,
    id: "action-2",
    children: "Action 2",
    onClick: () => { ... }
  },
  {
    type: "action",
    id: "action-3",
    closeOnClick: true,
    children: "Action 3",
    onClick: () => { ... }
  },
]


<Button
  ref={triggerRef}
  onClick={() => setOpen(!open)}
>
  {children}
</Button>

<Menu
  triggerRef={triggerRef}
  open={open
  onClose={() => setOpen(false)}
  items={items}
/>`}}},render:()=>{const t=s(null),[o,i]=L(!1);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(_,{children:["Open: ",o?"true":"false"]}),e(g,{ref:t,onClick:()=>i(!o),children:"Open Menu"}),e(l,{triggerRef:t,open:o,onClose:()=>i(!1),items:[{type:"action",id:"action-1",children:"Action 1",closeOnClick:!0,onClick:()=>console.log("action-1 clicked")},{type:"action",id:"action-2",children:"Action 2",closeOnClick:!0,onClick:()=>console.log("action-2 clicked")},{type:"action",id:"action-3",children:"Action 3",closeOnClick:!0,onClick:()=>console.log("action-3 clicked")}]})]})}},U={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Custom items can be created using the useMenuContext hook to register the item and access the context for managing its states.<br/>It requires a custom CSS styling to be applied as well."},source:{language:"tsx",code:`

const CustomMenuItem = ({
  id,
  children,
  disabled,
  focused,
  onClick,
}) => {
  const { registerItem, clearFocus, setHoveredItem } = useMenuContext()
  const itemRef = useRef(null)

  useEffect(() => {
    const unregister = registerItem({
      id,
      ref: itemRef,
      disabled,
    })
    return unregister
  }, [])

  const handleClick = (event) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    
    event.stopPropagation()
    onClick({ event, id })
  }

  const handleMouseEnter = () => {
    if (disabled) return
    clearFocus()
    setHoveredItem(id)
  }

  const handleMouseLeave = () => {
    if (disabled) return
    setHoveredItem(null)
  }

  return (
    <div
      id={id}
      className="CustomMenuItem"
      ref={itemRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="CustomMenuItem__content">
        <Text intent="neutral-inverted-fixed">
          {children}
        </Text>
      </div>
    </div>
  )
}

const items = [
  {
    type: "action",
    id: "action-1",
    children: "Action 1",
    closeOnClick: true,
    onClick: () => { ... },
  },
  {
    type: "action",
    id: "action-2",
    children: "Action 2",
    closeOnClick: true,
    onClick: () => { ... },
  },
  {
    type: "action",
    id: "action-3",
    children: "Action 3",
    closeOnClick: true,
    onClick: () => { ... },
  },
  {
    type: "custom",
    id: "custom-1",
    children: <CustomItem>Custom item</CustomItem>,
    onClick: () => { ... },
  },
]

<Menu 
  triggerRef={triggerRef}
  items={items}
/>
`}}},render:()=>{const t=s(null);return e("div",{className:"sb-column sb-width-full sb-gap-40",children:[e(g,{ref:t,children:"Open Menu"}),e(l,{triggerRef:t,items:[{type:"action",id:"action-1",children:"Action 1",closeOnClick:!0,onClick:()=>console.log("action-1 clicked")},{type:"action",id:"action-2",children:"Action 2",closeOnClick:!0,onClick:()=>console.log("action-2 clicked")},{type:"action",id:"action-3",children:"Action 3",closeOnClick:!0,onClick:()=>console.log("action-3 clicked")},{type:"custom",id:"custom-item",children:e(({id:r,children:C,disabled:n,focused:B,onClick:f})=>{const c=r??"custom-id",{registerItem:h,clearFocus:D,setHoveredItem:k}=H(),y=s(null);return T(()=>h({id:c,ref:y,disabled:n}),[n,h,c]),e(q,{children:[e("style",{children:`
            .CustomMenuItem {
              padding: 0 var(--pui-spacing-200);
            }

            .CustomMenuItem__content {
              padding: var(--pui-spacing-100) var(--pui-spacing-200);
              border-radius: var(--pui-radius-medium);
            }

            .CustomMenuItem:hover .CustomMenuItem__content {
              background-color: green;
            }
            `}),e("div",{id:c,className:"CustomMenuItem",ref:y,onClick:a=>{if(n){a.preventDefault();return}a.stopPropagation(),f==null||f({event:a,id:c})},onMouseEnter:()=>{n||(D(),k(c))},onMouseLeave:()=>{n||k(null)},children:e("div",{className:"CustomMenuItem__content",children:e(_,{intent:"neutral-inverted-fixed",children:[C," ",B?" [focused]":null]})})})]})},{children:"Custom item"}),onClick:()=>console.log("custom-item clicked")}]})]})}},de={title:"Components/Menu",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"A facade component that provides a simplified API for menus."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},items:{control:{disable:!0},description:"<strong>*</strong>Array of items to render in the menu.",table:{type:{summary:"MenuItemData[]",detail:`

// Action item

{
  type: "action" // required
  closeOnClick: boolean
  ...Pick<MenuItemActionProps>
}
  
// Option item

{
  type: "option" // required
  closeOnClick: boolean
  ...Pick<MenuItemOptionProps>
}
  
// Divider

{
  type: "divider" // required
  ...Pick<MenuDividerProps>
}

// Custom item

{
  type: "custom" // required
  id: string
  disabled: boolean
  children: preact.ComponentChildren
  onClick: (args: { event: MouseEvent; id: string }) => void
  closeOnClick: boolean
}
          `}}},"...MenuContextProps":{control:{disable:!0},table:{type:{summary:"Pick<MenuContextProps>",detail:`
{
  triggerRef: RefObject | null
  anchorRef: RefObject | null 
}
`}}},"...MenuContainerProps":{control:{disable:!0},table:{type:{summary:"Pick<MenuContainerProps>",detail:`
{
  width: number
  height: number
}
`}}},"...OverlayPositionerProps":{control:{disable:!0},table:{type:{summary:"Pick<OverlayPositionerProps>",detail:`
{
  open: boolean
  defaultOpen: boolean
  placement: OverlayPositionerPlacement
  placementFallback: OverlayPositionerPlacement[]
  offsetX: number
  offsetY: number
  offsetEdge: number
  onOpen: () => void
  onClose: () => void
}`}}}}},d={tags:["!autodocs"],args:{id:void 0,className:""},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Menu {...args} />
`}}},render:t=>{const o=s(null),[i,r]=L("option-1"),C=[{type:"action",id:"action-1",children:"Action 1",paddingLikeOption:!0,closeOnClick:!0,onClick:O()},{type:"action",id:"action-2",children:"Action 2",paddingLikeOption:!0,closeOnClick:!0,onClick:O()},{type:"divider"},{type:"option",id:"option-1",selected:i==="option-1",children:"Option 1",onSelectedChange:({selected:n})=>r(n?"option-1":null)},{type:"option",id:"option-2",selected:i==="option-2",children:"Option 2",onSelectedChange:({selected:n})=>r(n?"option-2":null)}];return e("div",{className:"sb-column sb-width-full",children:[e(g,{ref:o,children:"Open Menu"}),e(l,{triggerRef:o,items:C,...t})]})}},u=V,p=F,m=U;var v,M,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: ''
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<Menu {...args} />
\`
      }
    }
  },
  render: args => {
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const [selectedOption, setSelectedOption] = useState<string | null>('option-1');
    const items: MenuItemData[] = [{
      type: 'action',
      id: 'action-1',
      children: 'Action 1',
      paddingLikeOption: true,
      closeOnClick: true,
      onClick: fn()
    }, {
      type: 'action',
      id: 'action-2',
      children: 'Action 2',
      paddingLikeOption: true,
      closeOnClick: true,
      onClick: fn()
    }, {
      type: 'divider'
    }, {
      type: 'option',
      id: 'option-1',
      selected: selectedOption === 'option-1',
      children: 'Option 1',
      onSelectedChange: ({
        selected
      }) => setSelectedOption(selected ? 'option-1' : null)
    }, {
      type: 'option',
      id: 'option-2',
      selected: selectedOption === 'option-2',
      children: 'Option 2',
      onSelectedChange: ({
        selected
      }) => setSelectedOption(selected ? 'option-2' : null)
    }];
    return <div className="sb-column sb-width-full">
        <Button ref={triggerRef}>Open Menu</Button>
        <Menu triggerRef={triggerRef} items={items} {...args} />
      </div>;
  }
}`,...(b=(M=d.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var I,R,A;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:"UncontrolledStory",...(A=(R=u.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var P,S,x;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:"ControlledStory",...(x=(S=p.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var w,N,E;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:"CustomItemStory",...(E=(N=m.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const ue=["Demo","Uncontrolled","Controlled","CustomItem"];export{p as Controlled,m as CustomItem,d as Demo,u as Uncontrolled,ue as __namedExportsOrder,de as default};
