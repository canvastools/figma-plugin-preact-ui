import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,v as n,w as r}from"./compat.module-BbhDrffC.js";import{n as i,t as a}from"./jsxRuntime.module-B_u_rUE0.js";import{t as o}from"./Text-Bf8YN4P6.js";import{D as s,O as c,S as l,Un as u,b as d,m as f,t as p}from"./src-CnP2aPTs.js";var m,h=e((()=>{r(),p(),c(),a(),m={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const triggerRef = useRef(null)
const [open, setOpen] = useState(false)

<Button
  ref={triggerRef}
  onClick={() => setOpen(!open)}
>
  {children}
</Button>

<Popover
  triggerRef={triggerRef}
  open={open}
  onClose={() => setOpen(false)}
  popoverHeaderProps={{
    children: "Controlled Popover",
  }}
>
  {children}
</Popover>

`}}},render:()=>{let e=n(null),[r,a]=t(!1);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(o,{children:[`Open: `,r?`true`:`false`]}),i(u,{ref:e,onClick:()=>a(!r),children:`Open Popover`}),i(s,{triggerRef:e,open:r,onClose:()=>a(!1),popoverHeaderProps:{children:`Controlled Popover`},children:i(d,{children:i(o,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`})})})]})}}})),g,_=e((()=>{r(),p(),c(),a(),g={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const triggerRef = useRef(null)

<Button ref={triggerRef}>{children}</Button>

<Popover
  triggerRef={triggerRef}
  popoverHeaderProps={{
    children: "Uncontrolled Popover",
  }}
>
  {children}
</Popover>
`}}},render:()=>{let e=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(u,{ref:e,children:`Open Menu`}),i(s,{triggerRef:e,popoverHeaderProps:{children:`Uncontrolled Popover`},children:i(d,{children:i(o,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`})})})]})}}})),v,y=e((()=>{r(),p(),c(),a(),v={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const triggerRef = useRef(null)

<Button ref={triggerRef}>{children}</Button>

<Popover
  triggerRef={triggerRef}
  popoverHeaderProps={{
    children: "Uncontrolled Popover",
  }}
  showArrow
>
  {children}
</Popover>
`}}},render:()=>{let e=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(u,{ref:e,children:`Open Menu`}),i(s,{triggerRef:e,popoverHeaderProps:{children:`Popover with an arrow`},showArrow:!0,children:i(d,{children:i(o,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`})})})]})}}})),b,x=e((()=>{r(),p(),c(),a(),b={parameters:{controls:{disable:!0},viewport:{defaultViewport:`small`},docs:{source:{code:`
const triggerRef = useRef(null)
const [open, setOpen] = useState(false)
const [expanded, setExpanded] = useState(false)

<Button ref={triggerRef} onClick={() => setOpen(!open)}>
  Open Popover
</Button>

<Popover
  triggerRef={triggerRef}
  open={open}
  constrainHeight
  popoverHeaderProps={{ children: 'Dynamic height' }}
  autoReposition={true}
>
  <ScrollContainer>
    {/* autoReposition adjusts position when content height changes */}
  </ScrollContainer>
</Popover>
`}}},render:()=>{let e=n(null),[r,a]=t(!1),[c,p]=t(!1);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,style:{paddingTop:280},children:[i(o,{children:[`Expanded: `,c?`true`:`false`]}),i(u,{ref:e,onClick:()=>a(!r),children:`Open Popover`}),i(s,{triggerRef:e,open:r,onClose:()=>a(!1),constrainHeight:!0,popoverHeaderProps:{children:`Dynamic height`},autoReposition:!0,children:i(l,{children:i(d,{children:i(f,{direction:`column`,spacing:400,children:[i(o,{children:c?`Expanded content`:`Collapsed content`}),c&&Array.from({length:12},(e,t)=>i(o,{children:[`Line `,t+1,`: Lorem ipsum dolor sit amet.`]},t)),i(u,{onClick:()=>p(e=>!e),children:`Toggle content height`})]})})})})]})}}})),S,C,w,T,E,D,O;e((()=>{r(),h(),_(),y(),x(),p(),c(),a(),S={title:`Components/Popover`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`A facade component that provides a simplified API for popovers.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},children:{control:{type:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},popoverHeaderProps:{control:{disable:!0},table:{type:{summary:`Pick<PopoverHeaderProps>`,detail:`
{
  children: preact.ComponentChildren
}
`}}},"...PopoverContextProps":{control:{disable:!0},table:{type:{summary:`Pick<PopoverContextProps>`,detail:`
{
  triggerRef: RefObject | null
  anchorRef: RefObject | null
}
`}}},"...PopoverContainerProps":{control:{disable:!0},table:{type:{summary:`Pick<PopoverContainerProps>`,detail:`
{
  width: number
  height: number
  showArrow: boolean
  constrainHeight: boolean
}
`}}},"...OverlayPositionerProps":{control:{disable:!0},table:{type:{summary:`Pick<OverlayPositionerProps>`,detail:`
{
  open: boolean
  defaultOpen: boolean
  placement: OverlayPositionerPlacement
  placementFallback: OverlayPositionerPlacement[]
  draggable: boolean
  offsetX: number
  offsetY: number
  offsetEdge: number
  autoReposition: boolean
  onOpen: () => void
  onClose: () => void
}`}}},tabIndex:{control:{type:`number`},description:`Tab order of the popover container (via PopoverContainer). Omit for -1 when opened.`,table:{type:{summary:`number`}}}}},C={args:{id:void 0,className:``,children:`Content`,popoverHeaderProps:{children:`Header`}},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Popover {...args}>{children}</Popover>
`}}},render:e=>{let t=n(null);return i(`div`,{className:`sb-column sb-width-full`,children:[i(u,{ref:t,children:`Open Popover`}),i(s,{triggerRef:t,...e,children:i(d,{children:i(o,{children:e.children})})})]})}},w=g,T=m,E=v,D=b,C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    children: 'Content',
    popoverHeaderProps: {
      children: 'Header'
    }
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<Popover {...args}>{children}</Popover>
\`
      }
    }
  },
  render: args => {
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    return <div className="sb-column sb-width-full">
        <Button ref={triggerRef}>Open Popover</Button>

        <Popover triggerRef={triggerRef} {...args}>
          <Section>
            <Text>{args.children}</Text>
          </Section>
        </Popover>
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`UncontrolledStory`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`ControlledStory`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`ArrowStory`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`RepositionStory`,...D.parameters?.docs?.source}}},O=[`Demo`,`Uncontrolled`,`Controlled`,`Arrow`,`Reposition`]}))();export{E as Arrow,T as Controlled,C as Demo,D as Reposition,w as Uncontrolled,O as __namedExportsOrder,S as default};