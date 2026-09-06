import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,v as n,w as r}from"./compat.module-gcU-nFZT.js";import{n as i,t as a}from"./jsxRuntime.module-CNTwvFFH.js";import{a as o,o as s}from"./Tooltip-DsjGtgh5.js";import{n as c,t as l}from"./Text-Cr-51GRl.js";import{n as u,t as d}from"./Button-DTA_GS6N.js";import{n as f,t as p}from"./PopoverContainer-BE6zrWED.js";import{n as m,t as h}from"./Section-DkP7unPH.js";import{n as g,t as _}from"./Stack-CRI7JcwR.js";var v;function y(){return(y=e((()=>{r(),u(),f(),m(),c(),s(),a(),v={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const anchorRef = useRef(null)

<Button ref={anchorRef}>Show Overlay</Button>

<OverlayPositioner anchorRef={anchorRef}>
  {children}
</OverlayPositioner>
`}}},render:()=>{let e=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(d,{ref:e,children:`Show Overlay`}),i(o,{anchorRef:e,children:i(p,{width:300,children:i(h,{children:i(l,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})})})]})}}})))()}var b;function x(){return(x=e((()=>{r(),u(),f(),m(),c(),s(),a(),b={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let[e,r]=t(!1),a=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(l,{children:[`Overlay visibility: `,e?`true`:`false`]}),i(d,{ref:a,onClick:()=>r(!e),children:`Show Overlay`}),i(o,{anchorRef:a,open:e,onClose:()=>r(!1),children:i(p,{width:300,children:i(h,{children:i(l,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})})})]})}}})))()}var S;function C(){return(C=e((()=>{r(),u(),f(),m(),c(),s(),a(),S={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<OverlayPositioner
  anchorRef={anchorRef}
  placement="bottom"
  placementFallback={["top", "right", "left"]}
>
  {children}
</OverlayPositioner>
`}}},render:()=>{let e=n(null),t=n(null),r=n(null),a=n(null),s=n(null),c=n(null),u=n(null),f=n(null),m=n(null),g=n(null),_=n(null),v=n(null),y=()=>i(p,{width:200,children:i(h,{children:i(l,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi.`})})});return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(`div`,{className:`sb-row sb-width-full sb-gap-16`,children:[i(d,{ref:t,children:`Top Left`}),i(o,{anchorRef:t,placement:`top-left`,children:i(y,{})}),i(d,{ref:e,children:`Top`}),i(o,{anchorRef:e,placement:`top`,children:i(y,{})}),i(d,{ref:r,children:`Top Right`}),i(o,{anchorRef:r,placement:`top-right`,children:i(y,{})})]}),i(`div`,{className:`sb-row sb-width-full sb-gap-16`,children:[i(d,{ref:s,children:`Bottom Left`}),i(o,{anchorRef:s,placement:`bottom-left`,children:i(y,{})}),i(d,{ref:a,children:`Bottom`}),i(o,{anchorRef:a,placement:`bottom`,children:i(y,{})}),i(d,{ref:c,children:`Bottom Right`}),i(o,{anchorRef:c,placement:`bottom-right`,children:i(y,{})})]}),i(`div`,{className:`sb-row sb-width-full sb-gap-16`,children:[i(d,{ref:f,children:`Left Top`}),i(o,{anchorRef:f,placement:`left-top`,children:i(y,{})}),i(d,{ref:u,children:`Left`}),i(o,{anchorRef:u,placement:`left`,children:i(y,{})}),i(d,{ref:m,children:`Left Bottom`}),i(o,{anchorRef:m,placement:`left-bottom`,children:i(y,{})})]}),i(`div`,{className:`sb-row sb-width-full sb-gap-16`,children:[i(d,{ref:_,children:`Right Top`}),i(o,{anchorRef:_,placement:`right-top`,children:i(y,{})}),i(d,{ref:g,children:`Right`}),i(o,{anchorRef:g,placement:`right`,children:i(y,{})}),i(d,{ref:v,children:`Right Bottom`}),i(o,{anchorRef:v,placement:`right-bottom`,children:i(y,{})})]})]})}}})))()}var w;function T(){return(T=e((()=>{r(),u(),f(),m(),c(),s(),a(),w={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<OverlayPositioner
  anchorRef={anchorRef}
  draggable={true}
>
  {children}
</OverlayPositioner>
`}}},render:()=>{let e=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(d,{ref:e,children:`Show Overlay`}),i(o,{anchorRef:e,draggable:!0,children:i(p,{width:300,children:i(h,{children:i(l,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})})})]})}}})))()}var E;function D(){return(D=e((()=>{r(),u(),f(),m(),c(),s(),a(),E={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let e=n(null),t=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(d,{ref:e,children:`Show on click`}),i(d,{ref:t,children:`Show on hover`}),i(o,{anchorRef:e,children:i(p,{width:300,children:i(h,{children:i(l,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})})}),i(o,{anchorRef:t,trigger:`hover`,children:i(p,{width:300,children:i(h,{children:i(l,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})})})]})}}})))()}var O;function k(){return(k=e((()=>{r(),u(),f(),m(),c(),s(),a(),O={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<OverlayPositioner
  anchorRef={anchorRef}
  offsetX={8}
  offsetY={8}
  offsetEdge={16}
>
  {children}
</OverlayPositioner>
`}}},render:()=>{let e=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(d,{ref:e,children:`Show Overlay`}),i(o,{anchorRef:e,offsetY:8,offsetEdge:16,children:i(p,{width:300,children:i(h,{children:i(l,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})})})]})}}})))()}var A;function j(){return(j=e((()=>{r(),u(),f(),m(),c(),g(),s(),a(),A={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<OverlayPositioner
  anchorRef={anchorRef}
  closeOnClickOutside={false}
>
  {children}
</OverlayPositioner>
`}}},render:()=>{let[e,r]=t(!1),a=n(null),[s,c]=t(!1),u=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(d,{ref:a,onClick:()=>r(!e),children:`Show Overlay (click outside or button to close)`}),i(o,{anchorRef:a,open:e,onClose:()=>r(!1),children:i(p,{width:300,children:i(h,{children:i(_,{spacing:200,children:[i(l,{children:`It can be closed by clicking the close button or clicking outside.`}),i(d,{onClick:()=>r(!1),children:`Close`})]})})})}),i(d,{ref:u,onClick:()=>c(!s),children:`Show Overlay (click close button to close)`}),i(o,{anchorRef:u,open:s,onClose:()=>c(!1),closeOnClickOutside:!1,children:i(p,{width:300,children:i(h,{children:i(_,{spacing:200,children:[i(l,{children:`It can be closed by clicking the close button only.`}),i(d,{onClick:()=>c(!1),children:`Close`})]})})})})]})}}})))()}var M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{r(),y(),x(),C(),T(),D(),k(),j(),s(),f(),u(),m(),c(),a(),{fn:M}=__STORYBOOK_MODULE_TEST__,N={title:`Layout/OverlayPositioner`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`A wrapper component that allows to position any content relative to an anchor element.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},anchorRef:{control:{disable:!0},description:`<strong>*</strong> Element's ref the overlay is anchored to.`,table:{type:{summary:`preact.RefObject`}}},open:{control:{disable:!0},description:`Visibility for controlled state.`,table:{type:{summary:`boolean`}}},defaultOpen:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Visibility for uncontrolled state.`},placement:{control:{type:`radio`},options:[`over`,`top`,`top-left`,`top-right`,`bottom`,`bottom-left`,`bottom-right`,`left`,`left-top`,`left-bottom`,`right`,`right-top`,`right-bottom`],description:`Placement of the overlay relative to the anchor.`,table:{defaultValue:{summary:`bottom`},type:{summary:`OverlayPositionerPlacement`,detail:`
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
| "right-bottom"`}}},placementFallback:{control:{type:`radio`},options:[void 0,`over`,`top`,`top-left`,`top-right`,`bottom`,`bottom-left`,`bottom-right`,`left`,`left-top`,`left-bottom`,`right`,`right-top`,`right-bottom`],description:`Fallback placements when the primary placement is not possible.`,table:{type:{summary:`OverlayPositionerPlacement[]`,detail:`[
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
]`}}},autoReposition:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Automatically reposition the overlay when the content height changes to occupy the available space.`},constrainHeight:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`When true, the positioner reconstructs the natural (unclipped) content height of the overlay for placement, so a height-constrained overlay (e.g. a Popover whose body scrolls internally) is placed where the most content is visible. Leave false for overlays that size to their content such as tooltips, where absolutely-positioned decorations (arrows) would otherwise be mistaken for clipped content.`},trigger:{control:{type:`radio`},options:[`click`,`hover`],table:{defaultValue:{summary:`click`}},description:`Trigger action for the overlay. Only works in uncontrolled state.`},draggable:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:"Allow the overlay to be dragged. `data-pui-interactive='true'` attribute can be applied to elements inside the overlay to prevent drag initiation."},offsetX:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Horizontal offset between the overlay and anchor.`},offsetY:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Vertical offset between the overlay and anchor.`},offsetEdge:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Minimum spacing from the viewport edges.`},closeOnClickOutside:{control:{type:`boolean`},table:{defaultValue:{summary:`true`}},description:"Close the overlay when clicking outside. Only works when the trigger is `click`."},onOpen:{table:{type:{summary:`() => void`}}},onClose:{table:{type:{summary:`() => void`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},P={args:{id:void 0,className:``,defaultOpen:!1,placement:`bottom`,placementFallback:void 0,autoReposition:!1,trigger:`click`,draggable:!1,offsetX:0,offsetY:0,offsetEdge:0,closeOnClickOutside:!0,constrainHeight:!1,onOpen:M(),onClose:M()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
const anchorRef = useRef(null)

<Button ref={anchorRef}>Show Overlay</Button>

<OverlayPositioner
  anchorRef={anchorRef}
  {...args}
>
  {children}
</OverlayPositioner>
`}}},render:e=>{let t=n(null),r=e.placementFallback?[e.placementFallback]:void 0;return i(`div`,{className:`sb-column sb-width-full`,children:[i(d,{ref:t,children:`Show Overlay`}),i(o,{...e,anchorRef:t,placementFallback:r,children:i(p,{width:300,children:i(h,{children:i(l,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})})})]})}},F=v,I=b,L=S,R=w,z=E,B=O,V=A,H=[`Demo`,`Uncontrolled`,`Controlled`,`Placement`,`Draggable`,`Trigger`,`Offset`,`ClickOutside`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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

    // @ts-expect-error the control provides a single placement, wrap it into an array
    const placementFallback: OverlayPositionerPlacement[] | undefined = args.placementFallback ? [args.placementFallback] : undefined;
    return <div className="sb-column sb-width-full">
        <Button ref={anchorRef}>Show Overlay</Button>

        <OverlayPositioner {...args} anchorRef={anchorRef} placementFallback={placementFallback}>
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`UncontrolledStory`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`ControlledStory`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`PlacementStory`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`DraggableStory`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`TriggerStory`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`OffsetStory`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`ClickOutsideStory`,...V.parameters?.docs?.source}}}})))()}U();export{V as ClickOutside,I as Controlled,P as Demo,R as Draggable,B as Offset,L as Placement,z as Trigger,F as Uncontrolled,H as __namedExportsOrder,N as default};