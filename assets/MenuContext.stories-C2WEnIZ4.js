import{A as f,d as h,u as e,y as N}from"./hooks.module-6Sbq__eq.js";import{a as g,u as p,M as I}from"./MenuContainer-D7I4Bl73.js";import{B as x}from"./Button-SFpoFkob.js";import{M as o}from"./MenuItemAction-BgxFZQBA.js";import{O as v}from"./TooltipContext-DB8mQxid.js";import{S as T}from"./preact.module-gH5CyEHP.js";import{T as j}from"./Text-BbQ_b1VF.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./Icon-C6_npEhI.js";import"./chevronUp-CJIqewiB.js";import"./chevronDown-CECORTRu.js";import"./TooltipContainer-CJCq4A9v.js";const F={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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

`}}},render:()=>{const n=f(null),[i,r]=h(!1);return e("div",{className:"sb-column sb-width-full sb-gap-40",children:[e(x,{ref:n,onClick:()=>r(!0),children:"Open Menu"}),e(g,{triggerRef:n,open:i,setOpen:r,children:e(()=>{const s=p();return s?e(v,{anchorRef:n,open:s.open,placement:"bottom-left",offsetY:4,offsetEdge:16,onClose:()=>s.setOpen(!1),children:e(I,{children:[e(o,{id:"action-1",focused:s.focusedItemId==="action-1",children:"Action 1"}),e(o,{id:"action-2",focused:s.focusedItemId==="action-2",children:"Action 2"}),e(o,{id:"action-3",focused:s.focusedItemId==="action-3",children:"Action 3"})]})}):null},{})})]})}},Y={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Custom items can be created using the useMenuContext hook to register the item and access the context for managing its states.<br/>It requires a custom CSS styling to be applied as well."},source:{language:"tsx",code:`

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

`}}},render:()=>{const n=f(null),[i,r]=h(!1),c=({id:t,children:M,disabled:u,focused:H,onClick:C})=>{const{registerItem:b,clearFocus:L,setHoveredItem:R}=p(),O=f(null);return N(()=>b({id:t,ref:O,disabled:u}),[u,t,b]),e(T,{children:[e("style",{children:`
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
            `}),e("div",{id:t,className:"CustomMenuItem",ref:O,onClick:a=>{if(u){a.preventDefault();return}a.stopPropagation(),C==null||C({event:a,id:t})},onMouseEnter:()=>{u||(L(),R(t))},onMouseLeave:()=>{u||R(null)},children:e("div",{className:"CustomMenuItem__content",children:e(j,{intent:"neutral-inverted-fixed",children:[M," ",H?" [focused]":null]})})})]})};return e("div",{className:"sb-column sb-width-full sb-gap-40",children:[e(x,{ref:n,onClick:()=>r(!0),children:"Open Menu"}),e(g,{triggerRef:n,open:i,setOpen:r,children:e(()=>{const t=p();return t?e(v,{anchorRef:n,open:t.open,placement:"bottom-left",offsetY:4,offsetEdge:16,onClose:()=>t.setOpen(!1),children:e(I,{children:[e(o,{id:"action-1",focused:t.focusedItemId==="action-1",children:"Action 1"}),e(o,{id:"action-2",focused:t.focusedItemId==="action-2",children:"Action 2"}),e(o,{id:"action-3",focused:t.focusedItemId==="action-3",children:"Action 3"}),e(c,{id:"custom-1",disabled:!1,focused:t.focusedItemId==="custom-1",onClick:M=>console.log("Custom item clicked",M),children:"Custom Item"})]})}):null},{})})]})}},oe={title:"Components/MenuContext",component:g,tags:["autodocs"],parameters:{docs:{description:{component:"A context provider that manages open state, focus, and keyboard navigation of Menu-related components."}}},argTypes:{triggerRef:{control:{disable:!0},description:"Ref to the trigger element.",table:{type:{summary:"preact.RefObject"}}},anchorRef:{control:{disable:!0},description:"Ref to the anchor element. If not provided, the triggerRef will be used.",table:{type:{summary:"preact.RefObject"}}},open:{control:{type:"boolean"},description:"State for controlled state."},setOpen:{control:{disable:!0},description:"Function to set the open state.",table:{type:{summary:"(open: boolean) => void"}}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},useMenuContext:{description:"Hook to access the context.",table:{type:{summary:"Props",detail:`
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
`}}}}},d={tags:["!autodocs"],args:{open:!1},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuContext {...args}>{children}</MenuContext>
`}}},render:n=>{const[i,r]=h(n.open),c=f(null);return e("div",{className:"sb-column sb-width-full",children:[e(x,{ref:c,onClick:()=>{r(!0)},children:"Open Menu"}),e(g,{triggerRef:c,anchorRef:c,open:i,setOpen:r,children:e(()=>{const t=p();return t?e(v,{anchorRef:t==null?void 0:t.anchorRef,open:t.open,placement:"bottom-left",offsetY:4,offsetEdge:16,onClose:()=>t.setOpen(!1),children:e(I,{children:[e(o,{id:"action-1",onClick:()=>t.setOpen(!1),focused:t.focusedItemId==="action-1",children:"Action 1"}),e(o,{id:"action-2",onClick:()=>t.setOpen(!1),focused:t.focusedItemId==="action-2",children:"Action 2"}),e(o,{id:"action-3",onClick:()=>t.setOpen(!1),focused:t.focusedItemId==="action-3",children:"Action 3"})]})}):null},{})})]})}},l=F,m=Y;var A,y,k;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    open: false
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<MenuContext {...args}>{children}</MenuContext>
\`
      }
    }
  },
  render: args => {
    // @ts-expect-error Storybook control value
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
}`,...(k=(y=d.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var E,w,S;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:"ControlledStory",...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var P,_,B;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:"CustomItemStory",...(B=(_=m.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const re=["Demo","Controlled","CustomItem"];export{l as Controlled,m as CustomItem,d as Demo,re as __namedExportsOrder,oe as default};
