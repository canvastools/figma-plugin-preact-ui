import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,P as n,S as r,j as i,v as a,w as o}from"./compat.module-BbhDrffC.js";import{n as s,t as c}from"./jsxRuntime.module-B_u_rUE0.js";import{t as l}from"./Text-Bf8YN4P6.js";import{B as u,Jt as d,Kt as f,Un as p,Xt as m,Yn as h,Yt as g,t as _}from"./src-CnP2aPTs.js";var v,y=e((()=>{o(),_(),g(),c(),v={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const MenuContent = () => {
  const context = useMenuContext()

  return (
    <OverlayPositioner
      anchorRef={context.anchorRef}
      open={context.open}
      placement="bottom-left"
      offsetY={4}
      offsetEdge={16}
      onClose={() => context.setOpen(false)}
    >
      <MenuContainer>

        <MenuItemAction
          id="action-1"
          focused={context.focusedItem === "action-1"}
        >
          Action 1
        </MenuItemAction>

        <MenuItemAction
          id="action-2"
          focused={context.focusedItem === "action-2"}
        >
          Action 2
        </MenuItemAction>

        <MenuItemAction
          id="action-3"
          focused={context.focusedItem === "action-3"}
        >
          Action 3
        </MenuItemAction>

      </MenuContainer>
    </OverlayPositioner>
  )
}


const ControlledMenu = () => {
  const triggerRef = useRef(null)
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button
        ref={triggerRef}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>

      <MenuContext
        triggerRef={triggerRef}
        open={open}
        setOpen={setOpen}
      >
        <MenuContent />
      </MenuContext>
    </div>
  )
}

`}}},render:()=>{let e=a(null),[t,n]=r(!1);return s(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[s(p,{ref:e,onClick:()=>n(!0),children:`Open Menu`}),s(d,{triggerRef:e,open:t,setOpen:n,children:s(()=>{let t=m();return t?s(h,{anchorRef:e,open:t.open,placement:`bottom-left`,offsetY:4,offsetEdge:16,onClose:()=>t.setOpen(!1),children:s(f,{children:[s(u,{id:`action-1`,focused:t.focusedItemId===`action-1`,children:`Action 1`}),s(u,{id:`action-2`,focused:t.focusedItemId===`action-2`,children:`Action 2`}),s(u,{id:`action-3`,focused:t.focusedItemId===`action-3`,children:`Action 3`})]})}):null},{})})]})}}})),b,x=e((()=>{n(),o(),_(),g(),c(),b={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`Custom items can be created using the useMenuContext hook to register the item and access the context for managing its states.<br/>It requires a custom CSS styling to be applied as well.`},source:{code:`

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

const CustomMenuContent = () => {
  const context = useMenuContext()

  return (
    <OverlayPositioner
      anchorRef={triggerRef}
      open={context.open}
      placement="bottom-left"
      offsetY={4}
      offsetEdge={16}
      onClose={() => context.setOpen(false)}
    >
      <MenuContainer>

        <MenuItemAction
          id="action-1"
          focused={context.focusedItem === "action-1"}
        >
          Action 1
        </MenuItemAction>

        <MenuItemAction
          id="action-2"
          focused={context.focusedItem === "action-2"}
        >
          Action 2
        </MenuItemAction>

        <MenuItemAction
          id="action-3"
          focused={context.focusedItem === "action-3"}
        >
          Action 3
        </MenuItemAction>

        <CustomMenuItem
          id="custom-1"
          disabled={false}
          focused={context.focusedItem === "custom-1"}
          onClick={(args) => console.log("Custom item clicked", args)}
        >
          Custom Item
        </CustomMenuItem>

      </MenuContainer>
    </OverlayPositioner>
  )
}


const CustomMenu = () => {
  const triggerRef = useRef(null)
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button
        ref={triggerRef}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>

      <MenuContext
        triggerRef={triggerRef}
        open={open}
        setOpen={setOpen}
      >
        <MenuContent />
      </MenuContext>
    </div>
  )
}

`}}},render:()=>{let e=a(null),[n,o]=r(!1),c=({id:e,children:n,disabled:r,focused:o,onClick:c})=>{let{registerItem:u,clearFocus:d,setHoveredItem:f}=m(),p=a(null);return t(()=>u({id:e,ref:p,disabled:r}),[r,e,u]),s(i,{children:[s(`style`,{children:`
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
            `}),s(`div`,{id:e,className:`CustomMenuItem`,ref:p,onClick:t=>{if(r){t.preventDefault();return}t.stopPropagation(),c?.({event:t,id:e})},onMouseEnter:()=>{r||(d(),f(e))},onMouseLeave:()=>{r||f(null)},children:s(`div`,{className:`CustomMenuItem__content`,children:s(l,{intent:`neutral-inverted-fixed`,children:[n,` `,o?` [focused]`:null]})})})]})};return s(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[s(p,{ref:e,onClick:()=>o(!0),children:`Open Menu`}),s(d,{triggerRef:e,open:n,setOpen:o,children:s(()=>{let t=m();return t?s(h,{anchorRef:e,open:t.open,placement:`bottom-left`,offsetY:4,offsetEdge:16,onClose:()=>t.setOpen(!1),children:s(f,{children:[s(u,{id:`action-1`,focused:t.focusedItemId===`action-1`,children:`Action 1`}),s(u,{id:`action-2`,focused:t.focusedItemId===`action-2`,children:`Action 2`}),s(u,{id:`action-3`,focused:t.focusedItemId===`action-3`,children:`Action 3`}),s(c,{id:`custom-1`,disabled:!1,focused:t.focusedItemId===`custom-1`,onClick:e=>console.log(`Custom item clicked`,e),children:`Custom Item`})]})}):null},{})})]})}}})),S,C,w,T,E;e((()=>{y(),x(),o(),g(),_(),c(),S={title:`Components/MenuContext`,component:d,tags:[`autodocs`],parameters:{docs:{description:{component:`A context provider that manages open state, focus, and keyboard navigation of Menu-related components.`}}},argTypes:{triggerRef:{control:{disable:!0},description:`Ref to the trigger element.`,table:{type:{summary:`preact.RefObject`}}},anchorRef:{control:{disable:!0},description:`Ref to the anchor element. If not provided, the triggerRef will be used.`,table:{type:{summary:`preact.RefObject`}}},open:{control:{type:`boolean`},description:`State for controlled state.`},setOpen:{control:{disable:!0},description:`Function to set the open state.`,table:{type:{summary:`(open: boolean) => void`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},useMenuContext:{description:`Hook to access the context.`,table:{type:{summary:`Props`,detail:`
{
  triggerRef: RefObject | null
  anchorRef: RefObject | null
  open: boolean
  setOpen: (open: boolean) => void
  registerItem: (meta: MenuItemMetadata) => void // register an item in the context
  focusedItemId: string | null // id of the currently focused item
  setFocusedItem: (id: string | null) => void // set the focused item
  clearFocus: () => void // clear the focused item
  setHoveredItem: (id: string | null) => void // set the hovered item
  keyboardInteraction: boolean // flag indicating keyboard interaction mode
}

// Types

type MenuItemMetadata = {
  id: string // required, unique identifier for the item
  ref: RefObject // required, ref to the item element
  disabled: boolean // whether the item is disabled
}
`}}}}},C={args:{open:!1},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContext {...args}>{children}</MenuContext>
`}}},render:e=>{let[t,n]=r(e.open),i=a(null);return s(`div`,{className:`sb-column sb-width-full`,children:[s(p,{ref:i,onClick:()=>{n(!0)},children:`Open Menu`}),s(d,{triggerRef:i,anchorRef:i,open:t,setOpen:n,children:s(()=>{let e=m();return e?s(h,{anchorRef:e?.anchorRef,open:e.open,placement:`bottom-left`,offsetY:4,offsetEdge:16,onClose:()=>e.setOpen(!1),children:s(f,{children:[s(u,{id:`action-1`,onClick:()=>e.setOpen(!1),focused:e.focusedItemId===`action-1`,children:`Action 1`}),s(u,{id:`action-2`,onClick:()=>e.setOpen(!1),focused:e.focusedItemId===`action-2`,children:`Action 2`}),s(u,{id:`action-3`,onClick:()=>e.setOpen(!1),focused:e.focusedItemId===`action-3`,children:`Action 3`})]})}):null},{})})]})}},w=v,T=b,C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<MenuContext {...args}>{children}</MenuContext>
\`
      }
    }
  },
  render: args => {
    const [open, setOpen] = useState(args.open);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const MenuContent = () => {
      const context = useMenuContext();
      if (!context) return null;
      return <OverlayPositioner anchorRef={context?.anchorRef as preact.RefObject<HTMLElement>} open={context.open} placement="bottom-left" offsetY={4} offsetEdge={16} onClose={() => context.setOpen(false)}>
          <MenuContainer>
            <MenuItemAction id="action-1" onClick={() => context.setOpen(false)} focused={context.focusedItemId === 'action-1'}>
              Action 1
            </MenuItemAction>
            <MenuItemAction id="action-2" onClick={() => context.setOpen(false)} focused={context.focusedItemId === 'action-2'}>
              Action 2
            </MenuItemAction>
            <MenuItemAction id="action-3" onClick={() => context.setOpen(false)} focused={context.focusedItemId === 'action-3'}>
              Action 3
            </MenuItemAction>
          </MenuContainer>
        </OverlayPositioner>;
    };
    return <div className="sb-column sb-width-full">
        <Button ref={triggerRef} onClick={() => {
        setOpen(true);
      }}>
          Open Menu
        </Button>
        <MenuContext triggerRef={triggerRef} anchorRef={triggerRef} open={open} setOpen={setOpen}>
          <MenuContent />
        </MenuContext>
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`ControlledStory`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`CustomItemStory`,...T.parameters?.docs?.source}}},E=[`Demo`,`Controlled`,`CustomItem`]}))();export{w as Controlled,T as CustomItem,C as Demo,E as __namedExportsOrder,S as default};