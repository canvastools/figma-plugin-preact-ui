import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{C as t,P as n,S as r,j as i,v as a,w as o}from"./compat.module-gcU-nFZT.js";import{n as s,t as c}from"./jsxRuntime.module-CNTwvFFH.js";import{a as l,i as u}from"./MenuContainer-mmwPsDY6.js";import{n as d,t as f}from"./Text-Cr-51GRl.js";import{n as p,t as m}from"./Button-DTA_GS6N.js";import{n as h,t as g}from"./Menu-CMRXfizp.js";var _;function v(){return(v=e((()=>{o(),p(),h(),c(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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

`}}},render:()=>{let e=a(null);return s(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[s(m,{ref:e,children:`Open Menu`}),s(g,{triggerRef:e,items:[{type:`action`,id:`action-1`,children:`Action 1`,closeOnClick:!0,onClick:()=>console.log(`action-1 clicked`)},{type:`action`,id:`action-2`,children:`Action 2`,closeOnClick:!0,onClick:()=>console.log(`action-2 clicked`)},{type:`action`,id:`action-3`,children:`Action 3`,closeOnClick:!0,onClick:()=>console.log(`action-3 clicked`)}]})]})}}})))()}var y;function b(){return(b=e((()=>{o(),p(),d(),h(),c(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
/>`}}},render:()=>{let e=a(null),[t,n]=r(!1);return s(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[s(f,{children:[`Open: `,t?`true`:`false`]}),s(m,{ref:e,onClick:()=>n(!t),children:`Open Menu`}),s(g,{triggerRef:e,open:t,onClose:()=>n(!1),items:[{type:`action`,id:`action-1`,children:`Action 1`,closeOnClick:!0,onClick:()=>console.log(`action-1 clicked`)},{type:`action`,id:`action-2`,children:`Action 2`,closeOnClick:!0,onClick:()=>console.log(`action-2 clicked`)},{type:`action`,id:`action-3`,children:`Action 3`,closeOnClick:!0,onClick:()=>console.log(`action-3 clicked`)}]})]})}}})))()}var x;function S(){return(S=e((()=>{n(),o(),p(),d(),u(),h(),c(),x={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`Custom items can be created using the useMenuContext hook to register the item and access the context for managing its states.<br/>It requires a custom CSS styling to be applied as well.`},source:{code:`

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
`}}},render:()=>{let e=a(null);return s(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[s(m,{ref:e,children:`Open Menu`}),s(g,{triggerRef:e,items:[{type:`action`,id:`action-1`,children:`Action 1`,closeOnClick:!0,onClick:()=>console.log(`action-1 clicked`)},{type:`action`,id:`action-2`,children:`Action 2`,closeOnClick:!0,onClick:()=>console.log(`action-2 clicked`)},{type:`action`,id:`action-3`,children:`Action 3`,closeOnClick:!0,onClick:()=>console.log(`action-3 clicked`)},{type:`custom`,id:`custom-item`,children:s(({id:e,children:n,disabled:r,focused:o,onClick:c})=>{let u=e??`custom-id`,{registerItem:d,clearFocus:p,setHoveredItem:m}=l(),h=a(null);return t(()=>d({id:u,ref:h,disabled:r}),[r,d,u]),s(i,{children:[s(`style`,{children:`
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
            `}),s(`div`,{id:u,className:`CustomMenuItem`,ref:h,onClick:e=>{if(r){e.preventDefault();return}e.stopPropagation(),c?.({event:e,id:u})},onMouseEnter:()=>{r||(p(),m(u))},onMouseLeave:()=>{r||m(null)},children:s(`div`,{className:`CustomMenuItem__content`,children:s(f,{intent:`neutral-inverted-fixed`,children:[n,` `,o?` [focused]`:null]})})})]})},{children:`Custom item`}),onClick:()=>console.log(`custom-item clicked`)}]})]})}}})))()}var C,w,T,E,D,O,k;function A(){return(A=e((()=>{o(),v(),b(),S(),h(),p(),c(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/Menu`,component:g,tags:[`autodocs`],parameters:{docs:{description:{component:`A facade component that provides a simplified API for menus.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},items:{control:{disable:!0},description:`<strong>*</strong>Array of items to render in the menu.`,table:{type:{summary:`MenuItemData[]`,detail:`

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
}`}}}}},T={args:{id:void 0,className:``},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Menu {...args} />
`}}},render:e=>{let t=a(null),[n,i]=r(`option-1`),o=[{type:`group`,children:`Group 1`,paddingLikeOption:!0},{type:`action`,id:`action-1`,children:`Action 1`,paddingLikeOption:!0,closeOnClick:!0,onClick:C()},{type:`action`,id:`action-2`,children:`Action 2`,paddingLikeOption:!0,closeOnClick:!0,onClick:C()},{type:`divider`},{type:`group`,children:`Group 2`,paddingLikeOption:!0},{type:`option`,id:`option-1`,selected:n===`option-1`,children:`Option 1`,onSelectedChange:({selected:e})=>i(e?`option-1`:null)},{type:`option`,id:`option-2`,selected:n===`option-2`,children:`Option 2`,onSelectedChange:({selected:e})=>i(e?`option-2`:null)}];return s(`div`,{className:`sb-column sb-width-full`,children:[s(m,{ref:t,children:`Open Menu`}),s(g,{...e,triggerRef:t,items:o})]})}},E=_,D=y,O=x,k=[`Demo`,`Uncontrolled`,`Controlled`,`CustomItem`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`UncontrolledStory`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`ControlledStory`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`CustomItemStory`,...O.parameters?.docs?.source}}}})))()}A();export{D as Controlled,O as CustomItem,T as Demo,E as Uncontrolled,k as __namedExportsOrder,w as default};