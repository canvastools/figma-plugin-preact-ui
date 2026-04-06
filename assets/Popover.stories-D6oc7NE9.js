import{A as c,d as x,u as e}from"./hooks.module-BMDhD8C6.js";import{P as n}from"./Popover-DOYbdYjE.js";import{T as t}from"./Text-DSWvyrh8.js";import{B as p}from"./Button-DGMG2jtZ.js";import{S as d}from"./Section-BpHcE_3_.js";import"./preact.module-DhLccOoG.js";import"./typedForwardRef-BBQ-rOPo.js";import"./compat.module-BB5nNOI3.js";import"./PopoverContext-DkAC2Izl.js";import"./PopoverContainer-CjSmdTf2.js";import"./PopoverHeader-RIfT1ydo.js";import"./ButtonIcon-hshyeL9J.js";import"./Icon-CwUXZnq_.js";import"./TooltipContext-Be-KFfgH.js";import"./TooltipContainer-DWitGrs9.js";import"./close-DlWgMogY.js";const S={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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

`}}},render:()=>{const r=c(null),[o,u]=x(!1);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(t,{children:["Open: ",o?"true":"false"]}),e(p,{ref:r,onClick:()=>u(!o),children:"Open Popover"}),e(n,{triggerRef:r,open:o,onClose:()=>u(!1),popoverHeaderProps:{children:"Controlled Popover"},children:e(d,{children:e(t,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})})]})}},H={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>{const r=c(null);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(p,{ref:r,children:"Open Menu"}),e(n,{triggerRef:r,popoverHeaderProps:{children:"Uncontrolled Popover"},children:e(d,{children:e(t,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})})]})}},B={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>{const r=c(null);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(p,{ref:r,children:"Open Menu"}),e(n,{triggerRef:r,popoverHeaderProps:{children:"Popover with an arrow"},showArrow:!0,children:e(d,{children:e(t,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})})]})}},q={title:"Components/Popover",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A facade component that provides a simplified API for popovers."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},popoverHeaderProps:{control:{disable:!0},table:{type:{summary:"Pick<PopoverHeaderProps>",detail:`
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
  onOpen: () => void
  onClose: () => void
}`}}}}},s={tags:["!autodocs"],args:{id:void 0,className:"",children:"Content",popoverHeaderProps:{children:"Header"}},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Popover {...args}>{children}</Popover>
`}}},render:r=>{const o=c(null);return e("div",{className:"sb-column sb-width-full",children:[e(p,{ref:o,children:"Open Popover"}),e(n,{triggerRef:o,...r,children:e(d,{children:e(t,{children:r.children})})})]})}},l=H,a=S,i=B;var m,g,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,v,P;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:"UncontrolledStory",...(P=(v=l.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var b,w,R;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"ControlledStory",...(R=(w=a.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var y,C,O;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:"ArrowStory",...(O=(C=i.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const z=["Demo","Uncontrolled","Controlled","Arrow"];export{i as Arrow,a as Controlled,s as Demo,l as Uncontrolled,z as __namedExportsOrder,q as default};
