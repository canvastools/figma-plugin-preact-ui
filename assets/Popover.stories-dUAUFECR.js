import{A as l,d as f,u as e}from"./hooks.module-6Sbq__eq.js";import{P as s}from"./Popover-Bcz7PqkY.js";import{T as t}from"./Text-BbQ_b1VF.js";import{B as n}from"./Button-BHu95NWt.js";import{S as a}from"./Section-f0GkCzPh.js";import{a as U}from"./ScrollContainer-BQbM9OFF.js";import{S as L}from"./Stack-FIJoWfyG.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./PopoverContext-BKF6rnxf.js";import"./PopoverContainer-DIFx4uVt.js";import"./PopoverHeader-BED1OR1M.js";import"./ButtonIcon-CpncnrOt.js";import"./Icon-DqIclgYW.js";import"./TooltipContext-e3IspsuS.js";import"./TooltipContainer-CJCq4A9v.js";import"./close-DCtOkKcs.js";const V={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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

`}}},render:()=>{const r=l(null),[o,i]=f(!1);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(t,{children:["Open: ",o?"true":"false"]}),e(n,{ref:r,onClick:()=>i(!o),children:"Open Popover"}),e(s,{triggerRef:r,open:o,onClose:()=>i(!1),popoverHeaderProps:{children:"Controlled Popover"},children:e(a,{children:e(t,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})})]})}},D={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>{const r=l(null);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(n,{ref:r,children:"Open Menu"}),e(s,{triggerRef:r,popoverHeaderProps:{children:"Uncontrolled Popover"},children:e(a,{children:e(t,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})})]})}},j={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>{const r=l(null);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(n,{ref:r,children:"Open Menu"}),e(s,{triggerRef:r,popoverHeaderProps:{children:"Popover with an arrow"},showArrow:!0,children:e(a,{children:e(t,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})})]})}},M={parameters:{controls:{disable:!0},viewport:{defaultViewport:"small"},docs:{source:{language:"tsx",code:`
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
>
  <ScrollContainer>
    {/* autoReposition adjusts position when content height changes */}
  </ScrollContainer>
</Popover>
`}}},render:()=>{const r=l(null),[o,i]=f(!1),[g,E]=f(!1);return e("div",{className:"sb-column sb-width-full sb-gap-16",style:{paddingTop:280},children:[e(t,{children:["Expanded: ",g?"true":"false"]}),e(n,{ref:r,onClick:()=>i(!o),children:"Open Popover"}),e(s,{triggerRef:r,open:o,onClose:()=>i(!1),constrainHeight:!0,popoverHeaderProps:{children:"Dynamic height"},children:e(U,{children:e(a,{children:e(L,{direction:"column",spacing:400,children:[e(t,{children:g?"Expanded content":"Collapsed content"}),g&&Array.from({length:12},(h,v)=>e(t,{children:["Line ",v+1,": Lorem ipsum dolor sit amet."]},v)),e(n,{onClick:()=>E(h=>!h),children:"Toggle content height"})]})})})})]})}},ne={title:"Components/Popover",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"A facade component that provides a simplified API for popovers."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},popoverHeaderProps:{control:{disable:!0},table:{type:{summary:"Pick<PopoverHeaderProps>",detail:`
{
  children: preact.ComponentChildren
}
`}}},"...PopoverContextProps":{control:{disable:!0},table:{type:{summary:"Pick<PopoverContextProps>",detail:`
{
  triggerRef: RefObject | null
  anchorRef: RefObject | null
}
`}}},"...PopoverContainerProps":{control:{disable:!0},table:{type:{summary:"Pick<PopoverContainerProps>",detail:`
{
  width: number
  height: number
  showArrow: boolean
  constrainHeight: boolean
}
`}}},"...OverlayPositionerProps":{control:{disable:!0},table:{type:{summary:"Pick<OverlayPositionerProps>",detail:`
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
}`}}},tabIndex:{control:{type:"number"},description:"Tab order of the popover container (via PopoverContainer). Omit for -1 when opened.",table:{type:{summary:"number"}}}}},c={tags:["!autodocs"],args:{id:void 0,className:"",children:"Content",popoverHeaderProps:{children:"Header"}},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Popover {...args}>{children}</Popover>
`}}},render:r=>{const o=l(null);return e("div",{className:"sb-column sb-width-full",children:[e(n,{ref:o,children:"Open Popover"}),e(s,{triggerRef:o,...r,children:e(a,{children:e(t,{children:r.children})})})]})}},p=D,d=V,u=j,m=M;var P,b,R;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!autodocs'],
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
        language: 'tsx',
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
            <Text>
              {/* @ts-expect-error Storybook spread */}
              {args.children}
            </Text>
          </Section>
        </Popover>
      </div>;
  }
}`,...(R=(b=c.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var y,w,C;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:"UncontrolledStory",...(C=(w=p.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var S,O,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:"ControlledStory",...(x=(O=d.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var H,B,k;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:"ArrowStory",...(k=(B=u.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var A,N,T;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:"RepositionStory",...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const se=["Demo","Uncontrolled","Controlled","Arrow","Reposition"];export{u as Arrow,d as Controlled,c as Demo,m as Reposition,p as Uncontrolled,se as __namedExportsOrder,ne as default};
