import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,v as n,w as r}from"./compat.module-BbhDrffC.js";import{n as i,t as a}from"./jsxRuntime.module-B_u_rUE0.js";import{t as o}from"./Text-Bf8YN4P6.js";import{A as s,M as c,P as l,Un as u,Yn as d,b as f,j as p,k as m,t as h}from"./src-Ch66eTMx.js";var g,_=e((()=>{r(),h(),s(),a(),g={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const PopoverContent = () => {
  const context = usePopoverContext()
  if (!context) return null

  return (
    <OverlayPositioner
      anchorRef={context.anchorRef}
      open={context.open}
      placement="bottom-left"
      offsetX={4}
      offsetY={4}
      offsetEdge={16}
      draggable={true}
      onClose={() => context.setOpen(false))}
    >
      <PopoverContainer width={300}>

        <PopoverHeader onClose={() => context.setOpen(false)}>
          Header
        </PopoverHeader>

        <Section>
          {children}
        </Section>

      </PopoverContainer>
    </OverlayPositioner>
  )
}

const ControlledPopover = () => {
  const [open, setOpen] = useState(args.open)
  const triggerRef = useRef(null)

  return (
    <div>
      <Button
        ref={triggerRef}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
      
      <PopoverContext
        triggerRef={triggerRef}
        anchorRef={triggerRef}
        open={open}
        setOpen={setOpen}
      >
        <PopoverContent />
      </PopoverContext>
    </div>
  )
}


`}}},render:e=>{let[r,a]=t(e.open),s=n(null);return i(`div`,{className:`sb-column sb-width-full`,children:[i(u,{ref:s,onClick:()=>a(!0),children:`Open Popover`}),i(m,{triggerRef:s,anchorRef:s,open:r,setOpen:a,children:i(()=>{let e=p();return e?i(d,{anchorRef:e?.anchorRef,open:e.open,placement:`bottom-left`,offsetX:4,offsetY:4,offsetEdge:16,draggable:!0,onClose:()=>e.setOpen?.(!r),children:i(l,{width:300,children:[i(c,{onClose:()=>e.setOpen?.(!r),children:`Header`}),i(f,{children:i(o,{children:`Content`})})]})}):null},{})})]})}}})),v,y,b,x;e((()=>{r(),_(),s(),h(),a(),v={title:`Components/PopoverContext`,component:m,tags:[`autodocs`],parameters:{docs:{description:{component:`A context provider that manages open state, focus, and keyboard navigation of Popover-related components.`}}},argTypes:{triggerRef:{control:{disable:!0},description:`Ref to the trigger element.`,table:{type:{summary:`preact.RefObject`}}},anchorRef:{control:{disable:!0},description:`Ref to the anchor element. If not provided, the triggerRef will be used`,table:{type:{summary:`preact.RefObject`}}},open:{control:{type:`boolean`},description:`State for controlled state.`},setOpen:{control:{disable:!0},description:`Function to set the open state.`,table:{type:{summary:`(open: boolean) => void`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},usePopoverContext:{description:`Hook to access the context.`,table:{type:{summary:`Props`,detail:`
  {
    triggerRef: RefObject | null
    anchorRef: RefObject | null
    open: boolean
    setOpen: (open: boolean) => void
  }
  `}}}}},y={args:{open:!1},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<PopoverContext {...args}>{children}</PopoverContext>
`}}},render:e=>{let[r,a]=t(e.open),s=n(null);return i(`div`,{className:`sb-column sb-width-full`,children:[i(u,{ref:s,onClick:()=>a(!0),children:`Open Popover`}),i(m,{triggerRef:s,anchorRef:s,open:r,setOpen:a,children:i(()=>{let e=p();return e?i(d,{anchorRef:e?.anchorRef,open:e.open,placement:`bottom-left`,offsetX:4,offsetY:4,offsetEdge:16,draggable:!0,onClose:()=>e.setOpen?.(!r),children:i(l,{width:300,children:[i(c,{onClose:()=>e.setOpen?.(!r),children:`Header`}),i(f,{children:i(o,{children:`Content`})})]})}):null},{})})]})}},b=g,y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
<PopoverContext {...args}>{children}</PopoverContext>
\`
      }
    }
  },
  render: args => {
    const [open, setOpen] = useState(args.open);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const PopoverContent = () => {
      const context = usePopoverContext();
      if (!context) return null;
      return <OverlayPositioner anchorRef={context?.anchorRef as preact.RefObject<HTMLElement>} open={context.open} placement="bottom-left" offsetX={4} offsetY={4} offsetEdge={16} draggable={true} onClose={() => context.setOpen?.(!open)}>
          <PopoverContainer width={300}>
            <PopoverHeader onClose={() => context.setOpen?.(!open)}>Header</PopoverHeader>
            <Section>
              <Text>Content</Text>
            </Section>
          </PopoverContainer>
        </OverlayPositioner>;
    };
    return <div className="sb-column sb-width-full">
        <Button ref={triggerRef} onClick={() => setOpen(true)}>
          Open Popover
        </Button>
        <PopoverContext triggerRef={triggerRef} anchorRef={triggerRef} open={open} setOpen={setOpen}>
          <PopoverContent />
        </PopoverContext>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`ControlledStory`,...b.parameters?.docs?.source}}},x=[`Demo`,`Controlled`]}))();export{b as Controlled,y as Demo,x as __namedExportsOrder,v as default};