import{A as n,u as e,d as w}from"./hooks.module-CGIakYml.js";import{f as L}from"./index-BWINGljf.js";import{O as r}from"./TooltipContext-C-9LO0ZZ.js";import{B as o}from"./Button-DcofP-ls.js";import{P as c}from"./PopoverContainer-iOoyzuNS.js";import{S as d}from"./Section-CXCQgqof.js";import{T as s}from"./Text-9aeIDhQ2.js";import{S as V}from"./Stack-k8IcfDhK.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./TooltipContainer-BVa1RtHA.js";const te={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const anchorRef = useRef(null)

<Button ref={anchorRef}>Show Overlay</Button>

<OverlayPositioner anchorRef={anchorRef}>
  {children}
</OverlayPositioner>
`}}},render:()=>{const t=n(null);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(o,{ref:t,children:"Show Overlay"}),e(r,{anchorRef:t,children:e(c,{width:300,children:e(d,{children:e(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]})}},oe={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const anchorRef = useRef(null)
const [open, setOpen] = useState(false)

<Button
  ref={anchorRef}
  onClick={() => setOpen(!open)}
>
  Show Overlay
</Button>

<OverlayPositioner
  anchorRef={anchorRef}
  open={open}
  onClose={() => setOpen(false)}
>
  {children}
</OverlayPositioner>
`}}},render:()=>{const[t,a]=w(!1),l=n(null);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(s,{children:["Overlay visibility: ",t?"true":"false"]}),e(o,{ref:l,onClick:()=>a(!t),children:"Show Overlay"}),e(r,{anchorRef:l,open:t,onClose:()=>a(!1),children:e(c,{width:300,children:e(d,{children:e(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]})}},re={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<OverlayPositioner
  anchorRef={anchorRef}
  placement="bottom"
  placementFallback={["top", "right", "left"]}
>
  {children}
</OverlayPositioner>
`}}},render:()=>{const t=n(null),a=n(null),l=n(null),m=n(null),u=n(null),p=n(null),k=n(null),q=n(null),S=n(null),C=n(null),P=n(null),B=n(null),i=()=>e(c,{width:200,children:e(d,{children:e(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi."})})});return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(o,{ref:a,children:"Top Left"}),e(r,{anchorRef:a,placement:"top-left",children:e(i,{})}),e(o,{ref:t,children:"Top"}),e(r,{anchorRef:t,placement:"top",children:e(i,{})}),e(o,{ref:l,children:"Top Right"}),e(r,{anchorRef:l,placement:"top-right",children:e(i,{})})]}),e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(o,{ref:u,children:"Bottom Left"}),e(r,{anchorRef:u,placement:"bottom-left",children:e(i,{})}),e(o,{ref:m,children:"Bottom"}),e(r,{anchorRef:m,placement:"bottom",children:e(i,{})}),e(o,{ref:p,children:"Bottom Right"}),e(r,{anchorRef:p,placement:"bottom-right",children:e(i,{})})]}),e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(o,{ref:q,children:"Left Top"}),e(r,{anchorRef:q,placement:"left-top",children:e(i,{})}),e(o,{ref:k,children:"Left"}),e(r,{anchorRef:k,placement:"left",children:e(i,{})}),e(o,{ref:S,children:"Left Bottom"}),e(r,{anchorRef:S,placement:"left-bottom",children:e(i,{})})]}),e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(o,{ref:P,children:"Right Top"}),e(r,{anchorRef:P,placement:"right-top",children:e(i,{})}),e(o,{ref:C,children:"Right"}),e(r,{anchorRef:C,placement:"right",children:e(i,{})}),e(o,{ref:B,children:"Right Bottom"}),e(r,{anchorRef:B,placement:"right-bottom",children:e(i,{})})]})]})}},ne={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<OverlayPositioner
  anchorRef={anchorRef}
  draggable={true}
>
  {children}
</OverlayPositioner>
`}}},render:()=>{const t=n(null);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(o,{ref:t,children:"Show Overlay"}),e(r,{anchorRef:t,draggable:!0,children:e(c,{width:300,children:e(d,{children:e(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]})}},ae={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<OverlayPositioner
  anchorRef={anchorRef}
  trigger="click"
>
  {children}
</OverlayPositioner>

<OverlayPositioner
  anchorRef={anchorRef}
  trigger="hover"
>
  {children}
</OverlayPositioner>
`}}},render:()=>{const t=n(null),a=n(null);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(o,{ref:t,children:"Show on click"}),e(o,{ref:a,children:"Show on hover"}),e(r,{anchorRef:t,children:e(c,{width:300,children:e(d,{children:e(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})}),e(r,{anchorRef:a,trigger:"hover",children:e(c,{width:300,children:e(d,{children:e(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]})}},ie={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<OverlayPositioner
  anchorRef={anchorRef}
  offsetX={8}
  offsetY={8}
  offsetEdge={16}
>
  {children}
</OverlayPositioner>
`}}},render:()=>{const t=n(null);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(o,{ref:t,children:"Show Overlay"}),e(r,{anchorRef:t,offsetY:8,offsetEdge:16,children:e(c,{width:300,children:e(d,{children:e(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]})}},se={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<OverlayPositioner
  anchorRef={anchorRef}
  closeOnClickOutside={false}
>
  {children}
</OverlayPositioner>
`}}},render:()=>{const[t,a]=w(!1),l=n(null),[m,u]=w(!1),p=n(null);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(o,{ref:l,onClick:()=>a(!t),children:"Show Overlay (click outside or button to close)"}),e(r,{anchorRef:l,open:t,onClose:()=>a(!1),children:e(c,{width:300,children:e(d,{children:e(V,{spacing:200,children:[e(s,{children:"It can be closed by clicking the close button or clicking outside."}),e(o,{onClick:()=>a(!1),children:"Close"})]})})})}),e(o,{ref:p,onClick:()=>u(!m),children:"Show Overlay (click close button to close)"}),e(r,{anchorRef:p,open:m,onClose:()=>u(!1),closeOnClickOutside:!1,children:e(c,{width:300,children:e(d,{children:e(V,{spacing:200,children:[e(s,{children:"It can be closed by clicking the close button only."}),e(o,{onClick:()=>u(!1),children:"Close"})]})})})})]})}},Re={title:"Layout/OverlayPositioner",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that allows to position any content relative to an anchor element."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},anchorRef:{control:{disable:!0},description:"<strong>*</strong> Element's ref the overlay is anchored to.",table:{type:{summary:"preact.RefObject"}}},open:{control:{disable:!0},description:"Visibility for controlled state.",table:{type:{summary:"boolean"}}},defaultOpen:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Visibility for uncontrolled state."},placement:{control:{type:"radio"},options:["over","top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom"],defaultValue:{summary:"bottom"},description:"Placement of the overlay relative to the anchor.",table:{type:{summary:"OverlayPositionerPlacement",detail:`
"over"
| "top"
| "top-left"
| "top-right"
| "bottom"
| "bottom-left"
| "bottom-right"
| "left"
| "left-top"
| "left-bottom"
| "right"
| "right-top"
| "right-bottom"`}}},placementFallback:{control:{type:"radio"},options:[void 0,"over","top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom"],description:"Fallback placements when the primary placement is not possible.",table:{type:{summary:"OverlayPositionerPlacement[]",detail:`[
  "over", 
  "top", 
  "top-left", 
  "top-right", 
  "bottom", 
  "bottom-left", 
  "bottom-right", 
  "left", 
  "left-top", 
  "left-bottom", 
  "right",
  "right-top",
  "right-bottom"
]`}}},autoReposition:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Automatically reposition the overlay when the content height changes to occupy the available space."},constrainHeight:{control:{type:"boolean"},defaultValue:{summary:!1},description:"When true, the positioner reconstructs the natural (unclipped) content height of the overlay for placement, so a height-constrained overlay (e.g. a Popover whose body scrolls internally) is placed where the most content is visible. Leave false for overlays that size to their content such as tooltips, where absolutely-positioned decorations (arrows) would otherwise be mistaken for clipped content."},trigger:{control:{type:"radio"},options:["click","hover"],defaultValue:{summary:"click"},description:"Trigger action for the overlay. Only works in uncontrolled state."},draggable:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Allow the overlay to be dragged. `data-pui-interactive='true'` attribute can be applied to elements inside the overlay to prevent drag initiation."},offsetX:{control:{type:"number"},defaultValue:{summary:0},description:"Horizontal offset between the overlay and anchor."},offsetY:{control:{type:"number"},defaultValue:{summary:0},description:"Vertical offset between the overlay and anchor."},offsetEdge:{control:{type:"number"},defaultValue:{summary:0},description:"Minimum spacing from the viewport edges."},closeOnClickOutside:{control:{type:"boolean"},defaultValue:{summary:!0},description:"Close the overlay when clicking outside. Only works when the trigger is `click`."},onOpen:{table:{type:{summary:"() => void"}}},onClose:{table:{type:{summary:"() => void"}}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},h={tags:["!autodocs"],args:{id:void 0,className:"",defaultOpen:!1,placement:"bottom",placementFallback:void 0,autoReposition:!1,trigger:"click",draggable:!1,offsetX:0,offsetY:0,offsetEdge:0,closeOnClickOutside:!0,constrainHeight:!1,onOpen:L(),onClose:L()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const anchorRef = useRef(null)

<Button ref={anchorRef}>Show Overlay</Button>

<OverlayPositioner
  anchorRef={anchorRef}
  {...args}
>
  {children}
</OverlayPositioner>
`}}},render:t=>{const a=n(null),l=t.placementFallback?[t.placementFallback]:void 0;return e("div",{className:"sb-column sb-width-full",children:[e(o,{ref:a,children:"Show Overlay"}),e(r,{anchorRef:a,...t,placementFallback:l,children:e(c,{width:300,children:e(d,{children:e(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]})}},f=te,g=oe,b=re,y=ne,v=ae,R=ie,O=se;var T,N,x;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    defaultOpen: false,
    placement: 'bottom',
    placementFallback: undefined,
    autoReposition: false,
    trigger: 'click',
    draggable: false,
    offsetX: 0,
    offsetY: 0,
    offsetEdge: 0,
    closeOnClickOutside: true,
    constrainHeight: false,
    onOpen: fn(),
    onClose: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
const anchorRef = useRef(null)

<Button ref={anchorRef}>Show Overlay</Button>

<OverlayPositioner
  anchorRef={anchorRef}
  {...args}
>
  {children}
</OverlayPositioner>
\`
      }
    }
  },
  render: args => {
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const placementFallback: OverlayPositionerPlacement[] | undefined =
    // @ts-expect-error Storybook: single placement → array
    args.placementFallback ? [args.placementFallback] : undefined;
    return <div className="sb-column sb-width-full">
        <Button ref={anchorRef}>Show Overlay</Button>

        <OverlayPositioner anchorRef={anchorRef} {...args} placementFallback={placementFallback}>
          <PopoverContainer width={300}>
            <Section>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus,
                ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique
                magnam aspernatur esse dignissimos molestiae.
              </Text>
            </Section>
          </PopoverContainer>
        </OverlayPositioner>
      </div>;
  }
}`,...(x=(N=h.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var F,A,Q;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:"UncontrolledStory",...(Q=(A=f.parameters)==null?void 0:A.docs)==null?void 0:Q.source}}};var E,D,H;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:"ControlledStory",...(H=(D=g.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var Y,U,X;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:"PlacementStory",...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var z,I,M;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:"DraggableStory",...(M=(I=y.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var _,j,W;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:"TriggerStory",...(W=(j=v.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var G,J,K;R.parameters={...R.parameters,docs:{...(G=R.parameters)==null?void 0:G.docs,source:{originalSource:"OffsetStory",...(K=(J=R.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Z,$,ee;O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:"ClickOutsideStory",...(ee=($=O.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Oe=["Demo","Uncontrolled","Controlled","Placement","Draggable","Trigger","Offset","ClickOutside"];export{O as ClickOutside,g as Controlled,h as Demo,y as Draggable,R as Offset,b as Placement,v as Trigger,f as Uncontrolled,Oe as __namedExportsOrder,Re as default};
