import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,v as n,w as r}from"./compat.module-gcU-nFZT.js";import{n as i,t as a}from"./jsxRuntime.module-CNTwvFFH.js";import{n as o,t as s}from"./Text-Cr-51GRl.js";import{n as c,t as l}from"./Button-DTA_GS6N.js";import{n as u,t as d}from"./Popover-Blnh8E6r.js";import{n as f,t as p}from"./ScrollContainer-DphjjfHg.js";import{n as m,t as h}from"./Section-DkP7unPH.js";import{n as g,t as _}from"./Stack-CRI7JcwR.js";var v;function y(){return(y=e((()=>{r(),c(),m(),o(),u(),a(),v={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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

`}}},render:()=>{let e=n(null),[r,a]=t(!1);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(s,{children:[`Open: `,r?`true`:`false`]}),i(l,{ref:e,onClick:()=>a(!r),children:`Open Popover`}),i(d,{triggerRef:e,open:r,onClose:()=>a(!1),popoverHeaderProps:{children:`Controlled Popover`},children:i(h,{children:i(s,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`})})})]})}}})))()}var b;function x(){return(x=e((()=>{r(),c(),m(),o(),u(),a(),b={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let e=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(l,{ref:e,children:`Open Menu`}),i(d,{triggerRef:e,popoverHeaderProps:{children:`Uncontrolled Popover`},children:i(h,{children:i(s,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`})})})]})}}})))()}var S;function C(){return(C=e((()=>{r(),c(),m(),o(),u(),a(),S={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let e=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(l,{ref:e,children:`Open Menu`}),i(d,{triggerRef:e,popoverHeaderProps:{children:`Popover with an arrow`},showArrow:!0,children:i(h,{children:i(s,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`})})})]})}}})))()}var w;function T(){return(T=e((()=>{r(),c(),f(),m(),g(),o(),u(),a(),w={parameters:{controls:{disable:!0},viewport:{defaultViewport:`small`},docs:{source:{code:`
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
`}}},render:()=>{let e=n(null),[r,a]=t(!1),[o,c]=t(!1);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,style:{paddingTop:280},children:[i(s,{children:[`Expanded: `,o?`true`:`false`]}),i(l,{ref:e,onClick:()=>a(!r),children:`Open Popover`}),i(d,{triggerRef:e,open:r,onClose:()=>a(!1),constrainHeight:!0,popoverHeaderProps:{children:`Dynamic height`},autoReposition:!0,children:i(p,{children:i(h,{children:i(_,{direction:`column`,spacing:400,children:[i(s,{children:o?`Expanded content`:`Collapsed content`}),o&&Array.from({length:12},(e,t)=>i(s,{children:[`Line `,t+1,`: Lorem ipsum dolor sit amet.`]},t)),i(l,{onClick:()=>c(e=>!e),children:`Toggle content height`})]})})})})]})}}})))()}var E,D,O,k,A,j,M;function N(){return(N=e((()=>{r(),y(),x(),C(),T(),o(),m(),c(),u(),a(),E={title:`Components/Popover`,component:d,tags:[`autodocs`],parameters:{docs:{description:{component:`A facade component that provides a simplified API for popovers.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},children:{control:{type:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},popoverHeaderProps:{control:{disable:!0},table:{type:{summary:`Pick<PopoverHeaderProps>`,detail:`
{
  id: string
  className: string
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
}`}}},tabIndex:{control:{type:`number`},description:`Tab order of the popover container (via PopoverContainer). Omit for -1 when opened.`,table:{type:{summary:`number`}}}}},D={args:{id:void 0,className:``,children:`Content`,popoverHeaderProps:{children:`Header`}},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Popover {...args}>{children}</Popover>
`}}},render:e=>{let t=n(null);return i(`div`,{className:`sb-column sb-width-full`,children:[i(l,{ref:t,children:`Open Popover`}),i(d,{triggerRef:t,...e,children:i(h,{children:i(s,{children:e.children})})})]})}},O=b,k=v,A=S,j=w,M=[`Demo`,`Uncontrolled`,`Controlled`,`Arrow`,`Reposition`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`UncontrolledStory`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`ControlledStory`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`ArrowStory`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`RepositionStory`,...j.parameters?.docs?.source}}}})))()}N();export{A as Arrow,k as Controlled,D as Demo,j as Reposition,O as Uncontrolled,M as __namedExportsOrder,E as default};