import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{C as t,P as n,S as r,j as i,v as a,w as o}from"./compat.module-gcU-nFZT.js";import{n as s,t as c}from"./jsxRuntime.module-CNTwvFFH.js";import{a as l,i as u,n as d,r as f,t as p}from"./MenuContainer-mmwPsDY6.js";import{a as m,o as h}from"./Tooltip-DsjGtgh5.js";import{n as g,t as _}from"./Text-Cr-51GRl.js";import{n as v,t as y}from"./Button-DTA_GS6N.js";import{n as b,t as x}from"./MenuItemAction-B1sv30zB.js";var S;function C(){return(C=e((()=>{o(),b(),d(),v(),h(),u(),c(),S={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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

`}}},render:()=>{let e=a(null),[t,n]=r(!1);return s(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[s(y,{ref:e,onClick:()=>n(!0),children:`Open Menu`}),s(f,{triggerRef:e,open:t,setOpen:n,children:s(()=>{let t=l();return t?s(m,{anchorRef:e,open:t.open,placement:`bottom-left`,offsetY:4,offsetEdge:16,onClose:()=>t.setOpen(!1),children:s(p,{children:[s(x,{id:`action-1`,focused:t.focusedItemId===`action-1`,children:`Action 1`}),s(x,{id:`action-2`,focused:t.focusedItemId===`action-2`,children:`Action 2`}),s(x,{id:`action-3`,focused:t.focusedItemId===`action-3`,children:`Action 3`})]})}):null},{})})]})}}})))()}var w;function T(){return(T=e((()=>{n(),o(),b(),d(),v(),h(),g(),u(),c(),w={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`Custom items can be created using the useMenuContext hook to register the item and access the context for managing its states.<br/>It requires a custom CSS styling to be applied as well.`},source:{code:`

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

`}}},render:()=>{let e=a(null),[n,o]=r(!1),c=({id:e,children:n,disabled:r,focused:o,onClick:c})=>{let{registerItem:u,clearFocus:d,setHoveredItem:f}=l(),p=a(null);return t(()=>u({id:e,ref:p,disabled:r}),[r,e,u]),s(i,{children:[s(`style`,{children:`
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
            `}),s(`div`,{id:e,className:`CustomMenuItem`,ref:p,onClick:t=>{if(r){t.preventDefault();return}t.stopPropagation(),c?.({event:t,id:e})},onMouseEnter:()=>{r||(d(),f(e))},onMouseLeave:()=>{r||f(null)},children:s(`div`,{className:`CustomMenuItem__content`,children:s(_,{intent:`neutral-inverted-fixed`,children:[n,` `,o?` [focused]`:null]})})})]})};return s(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[s(y,{ref:e,onClick:()=>o(!0),children:`Open Menu`}),s(f,{triggerRef:e,open:n,setOpen:o,children:s(()=>{let t=l();return t?s(m,{anchorRef:e,open:t.open,placement:`bottom-left`,offsetY:4,offsetEdge:16,onClose:()=>t.setOpen(!1),children:s(p,{children:[s(x,{id:`action-1`,focused:t.focusedItemId===`action-1`,children:`Action 1`}),s(x,{id:`action-2`,focused:t.focusedItemId===`action-2`,children:`Action 2`}),s(x,{id:`action-3`,focused:t.focusedItemId===`action-3`,children:`Action 3`}),s(c,{id:`custom-1`,disabled:!1,focused:t.focusedItemId===`custom-1`,onClick:e=>console.log(`Custom item clicked`,e),children:`Custom Item`})]})}):null},{})})]})}}})))()}var E,D,O,k,A;function j(){return(j=e((()=>{C(),T(),o(),u(),v(),d(),b(),h(),c(),E={title:`Components/MenuContext`,component:f,tags:[`autodocs`],parameters:{docs:{description:{component:`A context provider that manages open state, focus, and keyboard navigation of Menu-related components.`}}},argTypes:{triggerRef:{control:{disable:!0},description:`Ref to the trigger element.`,table:{type:{summary:`preact.RefObject`}}},anchorRef:{control:{disable:!0},description:`Ref to the anchor element. If not provided, the triggerRef will be used.`,table:{type:{summary:`preact.RefObject`}}},open:{control:{type:`boolean`},description:`State for controlled state.`},setOpen:{control:{disable:!0},description:`Function to set the open state.`,table:{type:{summary:`(open: boolean) => void`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},useMenuContext:{description:`Hook to access the context.`,table:{type:{summary:`Props`,detail:`
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
`}}}}},D={args:{open:!1},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContext {...args}>{children}</MenuContext>
`}}},render:e=>{let[t,n]=r(e.open),i=a(null);return s(`div`,{className:`sb-column sb-width-full`,children:[s(y,{ref:i,onClick:()=>{n(!0)},children:`Open Menu`}),s(f,{triggerRef:i,anchorRef:i,open:t,setOpen:n,children:s(()=>{let e=l();return e?s(m,{anchorRef:e?.anchorRef,open:e.open,placement:`bottom-left`,offsetY:4,offsetEdge:16,onClose:()=>e.setOpen(!1),children:s(p,{children:[s(x,{id:`action-1`,onClick:()=>e.setOpen(!1),focused:e.focusedItemId===`action-1`,children:`Action 1`}),s(x,{id:`action-2`,onClick:()=>e.setOpen(!1),focused:e.focusedItemId===`action-2`,children:`Action 2`}),s(x,{id:`action-3`,onClick:()=>e.setOpen(!1),focused:e.focusedItemId===`action-3`,children:`Action 3`})]})}):null},{})})]})}},O=S,k=w,A=[`Demo`,`Controlled`,`CustomItem`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`ControlledStory`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`CustomItemStory`,...k.parameters?.docs?.source}}}})))()}j();export{O as Controlled,k as CustomItem,D as Demo,A as __namedExportsOrder,E as default};