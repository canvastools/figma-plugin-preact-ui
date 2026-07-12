import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,v as n,w as r}from"./compat.module-BbhDrffC.js";import{n as i,t as a}from"./jsxRuntime.module-B_u_rUE0.js";import{t as o}from"./Text-Bf8YN4P6.js";import{P as s,Un as c,Xn as l,Yn as u,b as d,m as f,t as p}from"./src-Ch66eTMx.js";var m,h=e((()=>{r(),p(),l(),a(),m={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const anchorRef = useRef(null)

<Button ref={anchorRef}>Show Overlay</Button>

<OverlayPositioner anchorRef={anchorRef}>
  {children}
</OverlayPositioner>
`}}},render:()=>{let e=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(c,{ref:e,children:`Show Overlay`}),i(u,{anchorRef:e,children:i(s,{width:300,children:i(d,{children:i(o,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})})})]})}}})),g,_=e((()=>{r(),p(),l(),a(),g={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let[e,r]=t(!1),a=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(o,{children:[`Overlay visibility: `,e?`true`:`false`]}),i(c,{ref:a,onClick:()=>r(!e),children:`Show Overlay`}),i(u,{anchorRef:a,open:e,onClose:()=>r(!1),children:i(s,{width:300,children:i(d,{children:i(o,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})})})]})}}})),v,y=e((()=>{r(),p(),l(),a(),v={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<OverlayPositioner
  anchorRef={anchorRef}
  placement="bottom"
  placementFallback={["top", "right", "left"]}
>
  {children}
</OverlayPositioner>
`}}},render:()=>{let e=n(null),t=n(null),r=n(null),a=n(null),l=n(null),f=n(null),p=n(null),m=n(null),h=n(null),g=n(null),_=n(null),v=n(null),y=()=>i(s,{width:200,children:i(d,{children:i(o,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi.`})})});return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(`div`,{className:`sb-row sb-width-full sb-gap-16`,children:[i(c,{ref:t,children:`Top Left`}),i(u,{anchorRef:t,placement:`top-left`,children:i(y,{})}),i(c,{ref:e,children:`Top`}),i(u,{anchorRef:e,placement:`top`,children:i(y,{})}),i(c,{ref:r,children:`Top Right`}),i(u,{anchorRef:r,placement:`top-right`,children:i(y,{})})]}),i(`div`,{className:`sb-row sb-width-full sb-gap-16`,children:[i(c,{ref:l,children:`Bottom Left`}),i(u,{anchorRef:l,placement:`bottom-left`,children:i(y,{})}),i(c,{ref:a,children:`Bottom`}),i(u,{anchorRef:a,placement:`bottom`,children:i(y,{})}),i(c,{ref:f,children:`Bottom Right`}),i(u,{anchorRef:f,placement:`bottom-right`,children:i(y,{})})]}),i(`div`,{className:`sb-row sb-width-full sb-gap-16`,children:[i(c,{ref:m,children:`Left Top`}),i(u,{anchorRef:m,placement:`left-top`,children:i(y,{})}),i(c,{ref:p,children:`Left`}),i(u,{anchorRef:p,placement:`left`,children:i(y,{})}),i(c,{ref:h,children:`Left Bottom`}),i(u,{anchorRef:h,placement:`left-bottom`,children:i(y,{})})]}),i(`div`,{className:`sb-row sb-width-full sb-gap-16`,children:[i(c,{ref:_,children:`Right Top`}),i(u,{anchorRef:_,placement:`right-top`,children:i(y,{})}),i(c,{ref:g,children:`Right`}),i(u,{anchorRef:g,placement:`right`,children:i(y,{})}),i(c,{ref:v,children:`Right Bottom`}),i(u,{anchorRef:v,placement:`right-bottom`,children:i(y,{})})]})]})}}})),b,x=e((()=>{r(),p(),l(),a(),b={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<OverlayPositioner
  anchorRef={anchorRef}
  draggable={true}
>
  {children}
</OverlayPositioner>
`}}},render:()=>{let e=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(c,{ref:e,children:`Show Overlay`}),i(u,{anchorRef:e,draggable:!0,children:i(s,{width:300,children:i(d,{children:i(o,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})})})]})}}})),S,C=e((()=>{r(),p(),l(),a(),S={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let e=n(null),t=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(c,{ref:e,children:`Show on click`}),i(c,{ref:t,children:`Show on hover`}),i(u,{anchorRef:e,children:i(s,{width:300,children:i(d,{children:i(o,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})})}),i(u,{anchorRef:t,trigger:`hover`,children:i(s,{width:300,children:i(d,{children:i(o,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})})})]})}}})),w,T=e((()=>{r(),p(),l(),a(),w={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<OverlayPositioner
  anchorRef={anchorRef}
  offsetX={8}
  offsetY={8}
  offsetEdge={16}
>
  {children}
</OverlayPositioner>
`}}},render:()=>{let e=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(c,{ref:e,children:`Show Overlay`}),i(u,{anchorRef:e,offsetY:8,offsetEdge:16,children:i(s,{width:300,children:i(d,{children:i(o,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})})})]})}}})),E,D=e((()=>{r(),p(),l(),a(),E={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<OverlayPositioner
  anchorRef={anchorRef}
  closeOnClickOutside={false}
>
  {children}
</OverlayPositioner>
`}}},render:()=>{let[e,r]=t(!1),a=n(null),[l,p]=t(!1),m=n(null);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(c,{ref:a,onClick:()=>r(!e),children:`Show Overlay (click outside or button to close)`}),i(u,{anchorRef:a,open:e,onClose:()=>r(!1),children:i(s,{width:300,children:i(d,{children:i(f,{spacing:200,children:[i(o,{children:`It can be closed by clicking the close button or clicking outside.`}),i(c,{onClick:()=>r(!1),children:`Close`})]})})})}),i(c,{ref:m,onClick:()=>p(!l),children:`Show Overlay (click close button to close)`}),i(u,{anchorRef:m,open:l,onClose:()=>p(!1),closeOnClickOutside:!1,children:i(s,{width:300,children:i(d,{children:i(f,{spacing:200,children:[i(o,{children:`It can be closed by clicking the close button only.`}),i(c,{onClick:()=>p(!1),children:`Close`})]})})})})]})}}})),O,k,A,j,M,N,P,F,I,L,R;e((()=>{r(),h(),_(),y(),x(),C(),T(),D(),l(),p(),a(),{fn:O}=__STORYBOOK_MODULE_TEST__,k={title:`Layout/OverlayPositioner`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:`A wrapper component that allows to position any content relative to an anchor element.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},anchorRef:{control:{disable:!0},description:`<strong>*</strong> Element's ref the overlay is anchored to.`,table:{type:{summary:`preact.RefObject`}}},open:{control:{disable:!0},description:`Visibility for controlled state.`,table:{type:{summary:`boolean`}}},defaultOpen:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Visibility for uncontrolled state.`},placement:{control:{type:`radio`},options:[`over`,`top`,`top-left`,`top-right`,`bottom`,`bottom-left`,`bottom-right`,`left`,`left-top`,`left-bottom`,`right`,`right-top`,`right-bottom`],description:`Placement of the overlay relative to the anchor.`,table:{defaultValue:{summary:`bottom`},type:{summary:`OverlayPositionerPlacement`,detail:`
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
]`}}},autoReposition:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Automatically reposition the overlay when the content height changes to occupy the available space.`},constrainHeight:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`When true, the positioner reconstructs the natural (unclipped) content height of the overlay for placement, so a height-constrained overlay (e.g. a Popover whose body scrolls internally) is placed where the most content is visible. Leave false for overlays that size to their content such as tooltips, where absolutely-positioned decorations (arrows) would otherwise be mistaken for clipped content.`},trigger:{control:{type:`radio`},options:[`click`,`hover`],table:{defaultValue:{summary:`click`}},description:`Trigger action for the overlay. Only works in uncontrolled state.`},draggable:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:"Allow the overlay to be dragged. `data-pui-interactive='true'` attribute can be applied to elements inside the overlay to prevent drag initiation."},offsetX:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Horizontal offset between the overlay and anchor.`},offsetY:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Vertical offset between the overlay and anchor.`},offsetEdge:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Minimum spacing from the viewport edges.`},closeOnClickOutside:{control:{type:`boolean`},table:{defaultValue:{summary:`true`}},description:"Close the overlay when clicking outside. Only works when the trigger is `click`."},onOpen:{table:{type:{summary:`() => void`}}},onClose:{table:{type:{summary:`() => void`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},A={args:{id:void 0,className:``,defaultOpen:!1,placement:`bottom`,placementFallback:void 0,autoReposition:!1,trigger:`click`,draggable:!1,offsetX:0,offsetY:0,offsetEdge:0,closeOnClickOutside:!0,constrainHeight:!1,onOpen:O(),onClose:O()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
const anchorRef = useRef(null)

<Button ref={anchorRef}>Show Overlay</Button>

<OverlayPositioner
  anchorRef={anchorRef}
  {...args}
>
  {children}
</OverlayPositioner>
`}}},render:e=>{let t=n(null),r=e.placementFallback?[e.placementFallback]:void 0;return i(`div`,{className:`sb-column sb-width-full`,children:[i(c,{ref:t,children:`Show Overlay`}),i(u,{...e,anchorRef:t,placementFallback:r,children:i(s,{width:300,children:i(d,{children:i(o,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`})})})})]})}},j=m,M=g,N=v,P=b,F=S,I=w,L=E,A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`UncontrolledStory`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`ControlledStory`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`PlacementStory`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`DraggableStory`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`TriggerStory`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`OffsetStory`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`ClickOutsideStory`,...L.parameters?.docs?.source}}},R=[`Demo`,`Uncontrolled`,`Controlled`,`Placement`,`Draggable`,`Trigger`,`Offset`,`ClickOutside`]}))();export{L as ClickOutside,M as Controlled,A as Demo,P as Draggable,I as Offset,N as Placement,F as Trigger,j as Uncontrolled,R as __namedExportsOrder,k as default};