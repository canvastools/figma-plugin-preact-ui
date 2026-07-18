import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,P as n,S as r,j as i,v as a,w as o}from"./compat.module-BiyPQZFw.js";import{n as s,t as c}from"./jsxRuntime.module-XYsEgyrh.js";import{t as l}from"./Text-Dx8we2OT.js";import{I as u,L as d,Xt as f,qn as p,t as m}from"./src-BW54aR7x.js";var h,g=e((()=>{o(),m(),d(),c(),h={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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

`}}},render:()=>{let e=a(null);return s(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[s(p,{ref:e,children:`Open Menu`}),s(u,{triggerRef:e,items:[{type:`action`,id:`action-1`,children:`Action 1`,closeOnClick:!0,onClick:()=>console.log(`action-1 clicked`)},{type:`action`,id:`action-2`,children:`Action 2`,closeOnClick:!0,onClick:()=>console.log(`action-2 clicked`)},{type:`action`,id:`action-3`,children:`Action 3`,closeOnClick:!0,onClick:()=>console.log(`action-3 clicked`)}]})]})}}})),_,v=e((()=>{o(),m(),d(),c(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
/>`}}},render:()=>{let e=a(null),[t,n]=r(!1);return s(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[s(l,{children:[`Open: `,t?`true`:`false`]}),s(p,{ref:e,onClick:()=>n(!t),children:`Open Menu`}),s(u,{triggerRef:e,open:t,onClose:()=>n(!1),items:[{type:`action`,id:`action-1`,children:`Action 1`,closeOnClick:!0,onClick:()=>console.log(`action-1 clicked`)},{type:`action`,id:`action-2`,children:`Action 2`,closeOnClick:!0,onClick:()=>console.log(`action-2 clicked`)},{type:`action`,id:`action-3`,children:`Action 3`,closeOnClick:!0,onClick:()=>console.log(`action-3 clicked`)}]})]})}}})),y,b=e((()=>{n(),o(),m(),d(),c(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`Custom items can be created using the useMenuContext hook to register the item and access the context for managing its states.<br/>It requires a custom CSS styling to be applied as well.`},source:{code:`

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
`}}},render:()=>{let e=a(null);return s(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[s(p,{ref:e,children:`Open Menu`}),s(u,{triggerRef:e,items:[{type:`action`,id:`action-1`,children:`Action 1`,closeOnClick:!0,onClick:()=>console.log(`action-1 clicked`)},{type:`action`,id:`action-2`,children:`Action 2`,closeOnClick:!0,onClick:()=>console.log(`action-2 clicked`)},{type:`action`,id:`action-3`,children:`Action 3`,closeOnClick:!0,onClick:()=>console.log(`action-3 clicked`)},{type:`custom`,id:`custom-item`,children:s(({id:e,children:n,disabled:r,focused:o,onClick:c})=>{let u=e??`custom-id`,{registerItem:d,clearFocus:p,setHoveredItem:m}=f(),h=a(null);return t(()=>d({id:u,ref:h,disabled:r}),[r,d,u]),s(i,{children:[s(`style`,{children:`
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
            `}),s(`div`,{id:u,className:`CustomMenuItem`,ref:h,onClick:e=>{if(r){e.preventDefault();return}e.stopPropagation(),c?.({event:e,id:u})},onMouseEnter:()=>{r||(p(),m(u))},onMouseLeave:()=>{r||m(null)},children:s(`div`,{className:`CustomMenuItem__content`,children:s(l,{intent:`neutral-inverted-fixed`,children:[n,` `,o?` [focused]`:null]})})})]})},{children:`Custom item`}),onClick:()=>console.log(`custom-item clicked`)}]})]})}}})),x,S,C,w,T,E,D;e((()=>{o(),g(),v(),b(),d(),m(),c(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Menu`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:`A facade component that provides a simplified API for menus.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},items:{control:{disable:!0},description:`<strong>*</strong>Array of items to render in the menu.`,table:{type:{summary:`MenuItemData[]`,detail:`

// Group label

{
  type: "group" // required
  ...Pick<MenuItemGroupProps>
}

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
          `}}},"...MenuContextProps":{control:{disable:!0},table:{type:{summary:`Pick<MenuContextProps>`,detail:`
{
  triggerRef: RefObject | null
  anchorRef: RefObject | null 
}
`}}},"...MenuContainerProps":{control:{disable:!0},table:{type:{summary:`Pick<MenuContainerProps>`,detail:`
{
  width: number
  height: number
}
`}}},"...OverlayPositionerProps":{control:{disable:!0},table:{type:{summary:`Pick<OverlayPositionerProps>`,detail:`
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
}`}}}}},C={args:{id:void 0,className:``},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Menu {...args} />
`}}},render:e=>{let t=a(null),[n,i]=r(`option-1`),o=[{type:`group`,children:`Group 1`,paddingLikeOption:!0},{type:`action`,id:`action-1`,children:`Action 1`,paddingLikeOption:!0,closeOnClick:!0,onClick:x()},{type:`action`,id:`action-2`,children:`Action 2`,paddingLikeOption:!0,closeOnClick:!0,onClick:x()},{type:`divider`},{type:`group`,children:`Group 2`,paddingLikeOption:!0},{type:`option`,id:`option-1`,selected:n===`option-1`,children:`Option 1`,onSelectedChange:({selected:e})=>i(e?`option-1`:null)},{type:`option`,id:`option-2`,selected:n===`option-2`,children:`Option 2`,onSelectedChange:({selected:e})=>i(e?`option-2`:null)}];return s(`div`,{className:`sb-column sb-width-full`,children:[s(p,{ref:t,children:`Open Menu`}),s(u,{...e,triggerRef:t,items:o})]})}},w=h,T=_,E=y,C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
      type: 'group',
      children: 'Group 1',
      paddingLikeOption: true
    }, {
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
      type: 'group',
      children: 'Group 2',
      paddingLikeOption: true
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
        <Menu {...args} triggerRef={triggerRef} items={items} />
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`UncontrolledStory`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`ControlledStory`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`CustomItemStory`,...E.parameters?.docs?.source}}},D=[`Demo`,`Uncontrolled`,`Controlled`,`CustomItem`]}))();export{T as Controlled,E as CustomItem,C as Demo,w as Uncontrolled,D as __namedExportsOrder,S as default};