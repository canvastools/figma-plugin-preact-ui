import{A as o,u as e,d as B}from"./hooks.module-Dxk9uxGs.js";import{f as A}from"./index-BWINGljf.js";import{O as t}from"./OverlayPositioner-BuTO9s3R.js";import{B as a}from"./Button-eFbokN8J.js";import{P as s}from"./Popover-B6u2zfHz.js";import{S as r}from"./Section-yfO0z026.js";import{T as n}from"./Text-C438qO9S.js";import{S as l}from"./Stack-CNzGXmi4.js";import{T as ce}from"./Tooltip-Dv-sYeCb.js";import"./preact.module-DKQ80Dzn.js";import"./compat.module-CA66vPNl.js";import"./typedForwardRef-Bwgl65_g.js";const Oe={title:"Layout/OverlayPositioner",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that allows to position any content relative to an anchor element."}}},argTypes:{className:{control:{type:"text"}},anchorRef:{control:{disable:!0},description:"Element's ref the popover is anchored to.",table:{type:{summary:"preact.RefObject<HTMLElement>"}}},open:{control:{disable:!0},defaultValue:{summary:!1},description:"Visibility in controlled mode.",table:{type:{summary:"boolean"}}},defaultOpen:{control:{disable:!0},defaultValue:{summary:!1},description:"Initial visibility in uncontrolled mode.",table:{type:{summary:"boolean"}}},placement:{control:{type:"radio"},options:["over","top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom"],defaultValue:{summary:"bottom"},description:"Placement of the popover relative to the anchor."},placementFallback:{control:{type:"radio"},options:[!1,"over","top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom"],defaultValue:{summary:!1},description:"Fallback placement when the primary placement is not possible.",table:{type:{summary:"false | string"}}},draggable:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Allow the overlay to be dragged. `.no-drag` class can be applied to the elements inside the overlay to prevent drag initiation.",table:{type:{summary:"boolean"}}},trigger:{control:{type:"radio"},options:["click","hover"],defaultValue:{summary:"click"},description:"Trigger action for the overlay. Only works for uncontrolled mode.",table:{type:{summary:"string"}}},visibilityDelay:{control:{type:"number"},defaultValue:{summary:0},description:"Delay in milliseconds before showing the overlay."},paddingX:{control:{type:"number"},defaultValue:{summary:0},description:"Horizontal gap between popover and anchor when anchored."},paddingY:{control:{type:"number"},defaultValue:{summary:0},description:"Vertical gap between popover and anchor when anchored."},edgePadding:{control:{type:"number"},defaultValue:{summary:0},description:"Minimum spacing from viewport edges."},closeOnOutsideClick:{control:{type:"boolean"},defaultValue:{summary:!0},description:"Close when clicking outside. Only works for click trigger.",table:{type:{summary:"boolean"}}},arrow:{control:{type:"boolean"},defaultValue:{summary:!0},description:"Show arrow pointing to the anchor. Supports the Tooltip as children component.",table:{type:{summary:"boolean"}}},onOpen:{control:{disable:!0},description:"Callback when opened.",table:{type:{summary:"() => void"}}},onClose:{control:{disable:!0},description:"Callback when closed.",table:{type:{summary:"() => void"}}},children:{control:{disable:!0},table:{type:{summary:"JSX.Element"}}}}},g={tags:["!autodocs"],args:{className:"",placement:"bottom",placementFallback:!1,trigger:"click",visibilityDelay:0,draggable:!1,paddingX:0,paddingY:0,edgePadding:0,closeOnOutsideClick:!0,arrow:!1,onOpen:A(),onClose:A()},parameters:{viewport:{defaultViewport:"large"}},render:i=>{const u=o(null);return e("div",{className:"sb-column sb-width-full",children:[e(a,{ref:u,children:"Show Popover"}),e(t,{anchorRef:u,...i,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]})}},f={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const i=o(null);return e("div",{className:"sb-column sb-width-full",children:[e(a,{ref:i,children:"Show Popover"}),e(t,{anchorRef:i,defaultOpen:!1,paddingY:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]})}},q={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[i,u]=B(!1),d=o(null);return e("div",{className:"sb-column sb-width-full",children:e(l,{spacing:200,children:[e(n,{children:["Overlay visibility: ",i?"Open":"Closed"]}),e(a,{ref:d,onClick:()=>u(m=>!m),children:"Show Popover"}),e(t,{anchorRef:d,open:i,onClose:()=>u(!1),paddingY:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]})})}},b={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const i=o(null),u=o(null),d=o(null),m=o(null),h=o(null),p=o(null),c=o(null),L=o(null),S=o(null),k=o(null),C=o(null),x=o(null);return e("div",{className:"sb-column sb-width-full",children:e(l,{direction:"row",spacing:400,children:[e(l,{spacing:200,children:[e(a,{ref:u,children:"Top Left"}),e(t,{anchorRef:u,placement:"top-left",paddingY:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})}),e(a,{ref:i,children:"Top"}),e(t,{anchorRef:i,placement:"top",paddingY:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})}),e(a,{ref:d,children:"Top Right"}),e(t,{anchorRef:d,placement:"top-right",paddingY:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]}),e(l,{spacing:200,children:[e(a,{ref:h,children:"Bottom Left"}),e(t,{anchorRef:h,placement:"bottom-left",paddingY:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})}),e(a,{ref:m,children:"Bottom"}),e(t,{anchorRef:m,placement:"bottom",paddingY:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})}),e(a,{ref:p,children:"Bottom Right"}),e(t,{anchorRef:p,placement:"bottom-right",paddingY:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]}),e(l,{spacing:200,children:[e(a,{ref:L,children:"Left Top"}),e(t,{anchorRef:L,placement:"left-top",paddingX:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})}),e(a,{ref:c,children:"Left"}),e(t,{anchorRef:c,placement:"left",paddingX:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})}),e(a,{ref:S,children:"Left Bottom"}),e(t,{anchorRef:S,placement:"left-bottom",paddingX:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]}),e(l,{spacing:200,children:[e(a,{ref:C,children:"Right Top"}),e(t,{anchorRef:C,placement:"right-top",paddingX:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})}),e(a,{ref:k,children:"Right"}),e(t,{anchorRef:k,placement:"right",paddingX:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})}),e(a,{ref:x,children:"Right Bottom"}),e(t,{anchorRef:x,placement:"right-bottom",paddingX:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]})]})})}},v={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[i,u]=B(!1),d=o(null);return e("div",{className:"sb-column sb-width-full",children:e(l,{spacing:200,children:[e(a,{ref:d,onClick:()=>u(m=>!m),children:"Show Popover"}),e(t,{anchorRef:d,open:i,onClose:()=>u(!1),paddingY:8,draggable:!0,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]})})}},R={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const i=o(null),u=o(null);return e("div",{className:"sb-column sb-width-full",children:e(l,{spacing:200,children:[e(a,{ref:i,children:"Click"}),e(t,{anchorRef:i,trigger:"click",paddingY:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})}),e(a,{ref:u,children:"Hover"}),e(t,{anchorRef:u,trigger:"hover",paddingY:8,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]})})}},w={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const i=o(null),u=o(null);return e("div",{className:"sb-column sb-width-full",children:e(l,{spacing:200,children:[e(a,{ref:i,children:"Padding 0, 0"}),e(t,{anchorRef:i,placement:"bottom-left",paddingX:0,paddingY:0,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})}),e(a,{ref:u,children:"Padding 24, 24"}),e(t,{anchorRef:u,placement:"bottom-left",paddingX:24,paddingY:24,children:e(s,{width:300,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]})})}},P={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const i=o(null),u=o(null);return e("div",{className:"sb-column sb-width-full",children:e(l,{spacing:200,children:[e(a,{ref:i,children:"Edge Padding 0"}),e(t,{anchorRef:i,edgePadding:0,paddingY:8,children:e(s,{width:300,height:200,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})}),e(a,{ref:u,children:"Edge Padding 80"}),e(t,{anchorRef:u,edgePadding:80,paddingY:8,children:e(s,{width:300,height:200,children:e(r,{children:e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."})})})})]})})}},T={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const i=o(null),[u,d]=B(!1),m=o(null),[h,p]=B(!1);return e("div",{className:"sb-column sb-width-full",children:e(l,{spacing:200,children:[e(a,{ref:i,onClick:()=>d(c=>!c),children:"Close On Outside Click True"}),e(t,{anchorRef:i,closeOnOutsideClick:!0,open:u,onClose:()=>d(!1),paddingY:8,children:e(s,{width:300,children:e(r,{children:e(l,{spacing:200,children:[e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."}),e(a,{onClick:()=>d(!1),children:"Close"})]})})})}),e(a,{ref:m,onClick:()=>p(c=>!c),children:"Close On Outside Click False"}),e(t,{anchorRef:m,closeOnOutsideClick:!1,open:h,onClose:()=>d(!1),paddingY:8,children:e(s,{width:300,children:e(r,{children:e(l,{spacing:200,children:[e(n,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."}),e(a,{onClick:()=>p(!1),children:"Close"})]})})})})]})})}},y={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const i=o(null);return e("div",{className:"sb-column sb-width-full",children:e(l,{spacing:200,children:[e(n,{ref:i,children:"Hover delay 480ms"}),e(t,{anchorRef:i,trigger:"hover",visibilityDelay:480,arrow:!0,paddingY:12,children:e(ce,{children:e(n,{intent:"neutral-inverted-fixed",noWrap:!0,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."})})})]})})}},O={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const i=o(null);return e("div",{className:"sb-column sb-width-full",children:e(l,{spacing:200,children:[e(a,{ref:i,children:"Tooltip"}),e(t,{anchorRef:i,arrow:!0,paddingY:12,children:e(ce,{children:e(n,{intent:"neutral-inverted-fixed",noWrap:!0,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."})})})]})})}};var Q,E,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    placement: "bottom",
    placementFallback: false,
    trigger: "click",
    visibilityDelay: 0,
    draggable: false,
    paddingX: 0,
    paddingY: 0,
    edgePadding: 0,
    closeOnOutsideClick: true,
    arrow: false,
    onOpen: fn(),
    onClose: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => {
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    return <div className="sb-column sb-width-full">
        <Button ref={anchorRef}>Show Popover</Button>

        <OverlayPositioner anchorRef={anchorRef} {...args}>
          <Popover width={300}>
            <Section>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam
                eos animi id nam tenetur adipisci? Amet nisi doloremque
                asperiores quisquam, repudiandae similique magnam aspernatur
                esse dignissimos molestiae.
              </Text>
            </Section>
          </Popover>
        </OverlayPositioner>
      </div>;
  }
}`,...(Y=(E=g.parameters)==null?void 0:E.docs)==null?void 0:Y.source}}};var V,H,N;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    return <div className="sb-column sb-width-full">
        <Button ref={anchorRef}>Show Popover</Button>
        <OverlayPositioner anchorRef={anchorRef} defaultOpen={false} paddingY={8}>
          <Popover width={300}>
            <Section>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam
                eos animi id nam tenetur adipisci? Amet nisi doloremque
                asperiores quisquam, repudiandae similique magnam aspernatur
                esse dignissimos molestiae.
              </Text>
            </Section>
          </Popover>
        </OverlayPositioner>
      </div>;
  }
}`,...(N=(H=f.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var M,X,F;q.parameters={...q.parameters,docs:{...(M=q.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    return <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Text>Overlay visibility: {open ? "Open" : "Closed"}</Text>
          <Button ref={anchorRef} onClick={() => setOpen(v => !v)}>
            Show Popover
          </Button>

          <OverlayPositioner anchorRef={anchorRef} open={open} onClose={() => setOpen(false)} paddingY={8}>
            <Popover width={300}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>
        </Stack>
      </div>;
  }
}`,...(F=(X=q.parameters)==null?void 0:X.docs)==null?void 0:F.source}}};var D,W,U;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const anchorRefTop = useRef<HTMLButtonElement | null>(null);
    const anchorRefTopLeft = useRef<HTMLButtonElement | null>(null);
    const anchorRefTopEnd = useRef<HTMLButtonElement | null>(null);
    const anchorRefBottom = useRef<HTMLButtonElement | null>(null);
    const anchorRefBottomLeft = useRef<HTMLButtonElement | null>(null);
    const anchorRefBottomEnd = useRef<HTMLButtonElement | null>(null);
    const anchorRefLeft = useRef<HTMLButtonElement | null>(null);
    const anchorRefLeftTop = useRef<HTMLButtonElement | null>(null);
    const anchorRefLeftBottom = useRef<HTMLButtonElement | null>(null);
    const anchorRefRight = useRef<HTMLButtonElement | null>(null);
    const anchorRefRightTop = useRef<HTMLButtonElement | null>(null);
    const anchorRefRightBottom = useRef<HTMLButtonElement | null>(null);
    return <div className="sb-column sb-width-full">
        <Stack direction="row" spacing={400}>
          <Stack spacing={200}>
            <Button ref={anchorRefTopLeft}>Top Left</Button>
            <OverlayPositioner anchorRef={anchorRefTopLeft} placement="top-left" paddingY={8}>
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefTop}>Top</Button>
            <OverlayPositioner anchorRef={anchorRefTop} placement="top" paddingY={8}>
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefTopEnd}>Top Right</Button>
            <OverlayPositioner anchorRef={anchorRefTopEnd} placement="top-right" paddingY={8}>
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Button ref={anchorRefBottomLeft}>Bottom Left</Button>
            <OverlayPositioner anchorRef={anchorRefBottomLeft} placement="bottom-left" paddingY={8}>
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefBottom}>Bottom</Button>
            <OverlayPositioner anchorRef={anchorRefBottom} placement="bottom" paddingY={8}>
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefBottomEnd}>Bottom Right</Button>
            <OverlayPositioner anchorRef={anchorRefBottomEnd} placement="bottom-right" paddingY={8}>
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Button ref={anchorRefLeftTop}>Left Top</Button>
            <OverlayPositioner anchorRef={anchorRefLeftTop} placement="left-top" paddingX={8}>
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefLeft}>Left</Button>
            <OverlayPositioner anchorRef={anchorRefLeft} placement="left" paddingX={8}>
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefLeftBottom}>Left Bottom</Button>
            <OverlayPositioner anchorRef={anchorRefLeftBottom} placement="left-bottom" paddingX={8}>
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Button ref={anchorRefRightTop}>Right Top</Button>
            <OverlayPositioner anchorRef={anchorRefRightTop} placement="right-top" paddingX={8}>
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefRight}>Right</Button>
            <OverlayPositioner anchorRef={anchorRefRight} placement="right" paddingX={8}>
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefRightBottom}>Right Bottom</Button>
            <OverlayPositioner anchorRef={anchorRefRightBottom} placement="right-bottom" paddingX={8}>
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>
          </Stack>
        </Stack>
      </div>;
  }
}`,...(U=(W=b.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var _,j,z;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    return <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Button ref={anchorRef} onClick={() => setOpen(v => !v)}>
            Show Popover
          </Button>

          <OverlayPositioner anchorRef={anchorRef} open={open} onClose={() => setOpen(false)} paddingY={8} draggable={true}>
            <Popover width={300}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>
        </Stack>
      </div>;
  }
}`,...(z=(j=v.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var I,J,G;R.parameters={...R.parameters,docs:{...(I=R.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const anchorRefClick = useRef<HTMLButtonElement | null>(null);
    const anchorRefHover = useRef<HTMLButtonElement | null>(null);
    return <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Button ref={anchorRefClick}>Click</Button>
          <OverlayPositioner anchorRef={anchorRefClick} trigger="click" paddingY={8}>
            <Popover width={300}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>

          <Button ref={anchorRefHover}>Hover</Button>
          <OverlayPositioner anchorRef={anchorRefHover} trigger="hover" paddingY={8}>
            <Popover width={300}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>
        </Stack>
      </div>;
  }
}`,...(G=(J=R.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var K,Z,$;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const anchorRefNoPadding = useRef<HTMLButtonElement | null>(null);
    const anchorRefPadding = useRef<HTMLButtonElement | null>(null);
    return <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Button ref={anchorRefNoPadding}>Padding 0, 0</Button>
          <OverlayPositioner anchorRef={anchorRefNoPadding} placement="bottom-left" paddingX={0} paddingY={0}>
            <Popover width={300}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>

          <Button ref={anchorRefPadding}>Padding 24, 24</Button>
          <OverlayPositioner anchorRef={anchorRefPadding} placement="bottom-left" paddingX={24} paddingY={24}>
            <Popover width={300}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>
        </Stack>
      </div>;
  }
}`,...($=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ie,ne;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const anchorRefNoPadding = useRef<HTMLButtonElement | null>(null);
    const anchorRefPadding = useRef<HTMLButtonElement | null>(null);
    return <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Button ref={anchorRefNoPadding}>Edge Padding 0</Button>
          <OverlayPositioner anchorRef={anchorRefNoPadding} edgePadding={0} paddingY={8}>
            <Popover width={300} height={200}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>

          <Button ref={anchorRefPadding}>Edge Padding 80</Button>
          <OverlayPositioner anchorRef={anchorRefPadding} edgePadding={80} paddingY={8}>
            <Popover width={300} height={200}>
              <Section>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  quae autem dolorum quibusdam necessitatibus natus, ipsa
                  aperiam eos animi id nam tenetur adipisci? Amet nisi
                  doloremque asperiores quisquam, repudiandae similique magnam
                  aspernatur esse dignissimos molestiae.
                </Text>
              </Section>
            </Popover>
          </OverlayPositioner>
        </Stack>
      </div>;
  }
}`,...(ne=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var te,ae,oe;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const anchorRefTrue = useRef<HTMLButtonElement | null>(null);
    const [openOutsideClickTrue, setOpenOutsideClickTrue] = useState(false);
    const anchorRefFalse = useRef<HTMLButtonElement | null>(null);
    const [openOutsideClickFalse, setOpenOutsideClickFalse] = useState(false);
    return <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Button ref={anchorRefTrue} onClick={() => setOpenOutsideClickTrue(v => !v)}>
            Close On Outside Click True
          </Button>

          <OverlayPositioner anchorRef={anchorRefTrue} closeOnOutsideClick={true} open={openOutsideClickTrue} onClose={() => setOpenOutsideClickTrue(false)} paddingY={8}>
            <Popover width={300}>
              <Section>
                <Stack spacing={200}>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                  <Button onClick={() => setOpenOutsideClickTrue(false)}>
                    Close
                  </Button>
                </Stack>
              </Section>
            </Popover>
          </OverlayPositioner>

          <Button ref={anchorRefFalse} onClick={() => setOpenOutsideClickFalse(v => !v)}>
            Close On Outside Click False
          </Button>

          <OverlayPositioner anchorRef={anchorRefFalse} closeOnOutsideClick={false} open={openOutsideClickFalse} onClose={() => setOpenOutsideClickTrue(false)} paddingY={8}>
            <Popover width={300}>
              <Section>
                <Stack spacing={200}>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                  <Button onClick={() => setOpenOutsideClickFalse(false)}>
                    Close
                  </Button>
                </Stack>
              </Section>
            </Popover>
          </OverlayPositioner>
        </Stack>
      </div>;
  }
}`,...(oe=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,re,ue;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const anchorRef = useRef<HTMLDivElement | null>(null);
    return <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Text ref={anchorRef}>Hover delay 480ms</Text>
          <OverlayPositioner anchorRef={anchorRef} trigger="hover" visibilityDelay={480} arrow={true} paddingY={12}>
            <Tooltip>
              <Text intent="neutral-inverted-fixed" noWrap>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Text>
            </Tooltip>
          </OverlayPositioner>
        </Stack>
      </div>;
  }
}`,...(ue=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ue.source}}};var le,de,me;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const anchorRefTooltip = useRef<HTMLButtonElement | null>(null);
    return <div className="sb-column sb-width-full">
        <Stack spacing={200}>
          <Button ref={anchorRefTooltip}>Tooltip</Button>
          <OverlayPositioner anchorRef={anchorRefTooltip} arrow={true} paddingY={12}>
            <Tooltip>
              <Text intent="neutral-inverted-fixed" noWrap>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Text>
            </Tooltip>
          </OverlayPositioner>
        </Stack>
      </div>;
  }
}`,...(me=(de=O.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const Be=["Demo","Uncontrolled","Controlled","Placement","Draggable","Trigger","Padding","EdgePadding","CloseOnOutsideClick","VisibilityDelay","Arrow"];export{O as Arrow,T as CloseOnOutsideClick,q as Controlled,g as Demo,v as Draggable,P as EdgePadding,w as Padding,b as Placement,R as Trigger,f as Uncontrolled,y as VisibilityDelay,Be as __namedExportsOrder,Oe as default};
