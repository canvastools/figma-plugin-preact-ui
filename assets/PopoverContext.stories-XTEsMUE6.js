import{d as v,A as h,u as o}from"./hooks.module-6Sbq__eq.js";import{P as c,u as C}from"./PopoverContext-BKF6rnxf.js";import{B as P}from"./Button-D1gxCxM9.js";import{P as R}from"./PopoverContainer-DIFx4uVt.js";import{P as b}from"./PopoverHeader-DyL4_VCz.js";import{S as O}from"./Section-f0GkCzPh.js";import{T as x}from"./Text-BbQ_b1VF.js";import{O as y}from"./TooltipContext-DB8mQxid.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./ButtonIcon-DqLSz-XZ.js";import"./Icon-C6_npEhI.js";import"./close-DceWr2La.js";import"./TooltipContainer-CJCq4A9v.js";const S={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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


`}}},render:l=>{const[r,s]=v(l.open),n=h(null);return o("div",{className:"sb-column sb-width-full",children:[o(P,{ref:n,onClick:()=>s(!0),children:"Open Popover"}),o(c,{triggerRef:n,anchorRef:n,open:r,setOpen:s,children:o(()=>{const e=C();return e?o(y,{anchorRef:e==null?void 0:e.anchorRef,open:e.open,placement:"bottom-left",offsetX:4,offsetY:4,offsetEdge:16,draggable:!0,onClose:()=>{var t;return(t=e.setOpen)==null?void 0:t.call(e,!r)},children:o(R,{width:300,children:[o(b,{onClose:()=>{var t;return(t=e.setOpen)==null?void 0:t.call(e,!r)},children:"Header"}),o(O,{children:o(x,{children:"Content"})})]})}):null},{})})]})}},F={title:"Components/PopoverContext",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"A context provider that manages open state, focus, and keyboard navigation of Popover-related components."}}},argTypes:{triggerRef:{control:{disable:!0},description:"Ref to the trigger element.",table:{type:{summary:"preact.RefObject"}}},anchorRef:{control:{disable:!0},description:"Ref to the anchor element. If not provided, the triggerRef will be used",table:{type:{summary:"preact.RefObject"}}},open:{control:{type:"boolean"},description:"State for controlled state."},setOpen:{control:{disable:!0},description:"Function to set the open state.",table:{type:{summary:"(open: boolean) => void"}}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},usePopoverContext:{description:"Hook to access the context.",table:{type:{summary:"Props",detail:`
  {
    triggerRef: RefObject | null
    anchorRef: RefObject | null
    open: boolean
    setOpen: (open: boolean) => void
  }
  `}}}}},a={tags:["!autodocs"],args:{open:!1},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<PopoverContext {...args}>{children}</PopoverContext>
`}}},render:l=>{const[r,s]=v(l.open),n=h(null);return o("div",{className:"sb-column sb-width-full",children:[o(P,{ref:n,onClick:()=>s(!0),children:"Open Popover"}),o(c,{triggerRef:n,anchorRef:n,open:r,setOpen:s,children:o(()=>{const e=C();return e?o(y,{anchorRef:e==null?void 0:e.anchorRef,open:e.open,placement:"bottom-left",offsetX:4,offsetY:4,offsetEdge:16,draggable:!0,onClose:()=>{var t;return(t=e.setOpen)==null?void 0:t.call(e,!r)},children:o(R,{width:300,children:[o(b,{onClose:()=>{var t;return(t=e.setOpen)==null?void 0:t.call(e,!r)},children:"Header"}),o(O,{children:o(x,{children:"Content"})})]})}):null},{})})]})}},p=S;var i,d,f;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
<PopoverContext {...args}>{children}</PopoverContext>
\`
      }
    }
  },
  render: args => {
    // @ts-expect-error Storybook control value
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
}`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var u,m,g;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:"ControlledStory",...(g=(m=p.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const I=["Demo","Controlled"];export{p as Controlled,a as Demo,I as __namedExportsOrder,F as default};
