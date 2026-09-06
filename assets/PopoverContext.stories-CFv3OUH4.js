import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,v as n,w as r}from"./compat.module-gcU-nFZT.js";import{n as i,t as a}from"./jsxRuntime.module-CNTwvFFH.js";import{a as o,o as s}from"./Tooltip-DsjGtgh5.js";import{n as c,t as l}from"./Text-Cr-51GRl.js";import{n as u,t as d}from"./Button-DTA_GS6N.js";import{n as f,t as p}from"./PopoverContainer-BE6zrWED.js";import{n as m,t as h}from"./PopoverHeader-CwyO6NTB.js";import{n as g,r as _,t as v}from"./PopoverContext-46w-0yq6.js";import{n as y,t as b}from"./Section-DkP7unPH.js";var x;function S(){return(S=e((()=>{r(),f(),m(),y(),c(),u(),s(),g(),a(),x={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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


`}}},render:e=>{let[r,a]=t(e.open),s=n(null);return i(`div`,{className:`sb-column sb-width-full`,children:[i(d,{ref:s,onClick:()=>a(!0),children:`Open Popover`}),i(v,{triggerRef:s,anchorRef:s,open:r,setOpen:a,children:i(()=>{let e=_();return e?i(o,{anchorRef:e?.anchorRef,open:e.open,placement:`bottom-left`,offsetX:4,offsetY:4,offsetEdge:16,draggable:!0,onClose:()=>e.setOpen?.(!r),children:i(p,{width:300,children:[i(h,{onClose:()=>e.setOpen?.(!r),children:`Header`}),i(b,{children:i(l,{children:`Content`})})]})}):null},{})})]})}}})))()}var C,w,T,E;function D(){return(D=e((()=>{r(),S(),g(),u(),c(),f(),m(),y(),s(),a(),C={title:`Components/PopoverContext`,component:v,tags:[`autodocs`],parameters:{docs:{description:{component:`A context provider that manages open state, focus, and keyboard navigation of Popover-related components.`}}},argTypes:{triggerRef:{control:{disable:!0},description:`Ref to the trigger element.`,table:{type:{summary:`preact.RefObject`}}},anchorRef:{control:{disable:!0},description:`Ref to the anchor element. If not provided, the triggerRef will be used`,table:{type:{summary:`preact.RefObject`}}},open:{control:{type:`boolean`},description:`State for controlled state.`},setOpen:{control:{disable:!0},description:`Function to set the open state.`,table:{type:{summary:`(open: boolean) => void`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},usePopoverContext:{description:`Hook to access the context.`,table:{type:{summary:`Props`,detail:`
  {
    triggerRef: RefObject | null
    anchorRef: RefObject | null
    open: boolean
    setOpen: (open: boolean) => void
  }
  `}}}}},w={args:{open:!1},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<PopoverContext {...args}>{children}</PopoverContext>
`}}},render:e=>{let[r,a]=t(e.open),s=n(null);return i(`div`,{className:`sb-column sb-width-full`,children:[i(d,{ref:s,onClick:()=>a(!0),children:`Open Popover`}),i(v,{triggerRef:s,anchorRef:s,open:r,setOpen:a,children:i(()=>{let e=_();return e?i(o,{anchorRef:e?.anchorRef,open:e.open,placement:`bottom-left`,offsetX:4,offsetY:4,offsetEdge:16,draggable:!0,onClose:()=>e.setOpen?.(!r),children:i(p,{width:300,children:[i(h,{onClose:()=>e.setOpen?.(!r),children:`Header`}),i(b,{children:i(l,{children:`Content`})})]})}):null},{})})]})}},T=x,E=[`Demo`,`Controlled`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`ControlledStory`,...T.parameters?.docs?.source}}}})))()}D();export{T as Controlled,w as Demo,E as __namedExportsOrder,C as default};