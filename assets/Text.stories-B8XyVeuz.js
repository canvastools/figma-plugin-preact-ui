import{u as e}from"./hooks.module-Dxk9uxGs.js";import{T as t}from"./Text-Dvytwbdg.js";import{S as $}from"./Section-45ajfN6P.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-cP-mn0Xe.js";import"./compat.module-c0s5p6eE.js";const q={title:"Components/Text",component:t,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},intent:{control:{type:"radio"},options:["neutral","brand","danger","warning","success"],defaultValue:{summary:"neutral"}},intentModifiers:{control:{type:"radio"},options:["default","secondary","brand","danger","warning","success"],defaultValue:{summary:"default"}},disabled:{control:{type:"boolean"}},interactive:{control:{type:"boolean"},description:"Allows using colours for interactive states within the intent."},selected:{control:{type:"boolean"},description:"Enables the modifier for the selected state. Only works if interactive is enabled."},fill:{control:{type:"color"},description:"Overrides the intent color."},variant:{control:{type:"radio"},options:["heading","body"],defaultValue:{summary:"body"}},size:{control:{type:"radio"},options:["small","medium","large"],defaultValue:{summary:"medium"}},strong:{description:"This property visually affects only the body intent.",control:{type:"boolean"}},align:{control:{type:"radio"},options:["left","center","right"],defaultValue:{summary:"left"}},fullWidth:{control:{type:"boolean"}},children:{table:{type:{summary:"string | number | JSX.Element"}},control:{type:"text"},description:"Usually a text content."}}},l={tags:["!autodocs"],args:{className:"",intent:"neutral",intentModifiers:"default",disabled:!1,interactive:!1,selected:!1,variant:"body",size:"medium",strong:!1,align:"left",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},parameters:{viewport:{defaultViewport:"large"}},render:n=>e("div",{className:"sb-column sb-width-full",children:e($,{children:e(t,{...n,children:n.children})})})},E=()=>{const n={neutral:[["default",!1,!1],["default",!0,!1],["default",!0,!0],["secondary",!1,!1],["brand",!1,!1],["brand",!0,!1],["danger",!1,!1],["danger",!0,!1],["warning",!1,!1],["success",!1,!1]],"neutral-inverted":[["default",!1,!1],["default",!0,!1]],brand:[["default",!1,!1],["default",!0,!1]],danger:[["default",!1,!1],["default",!0,!1]],warning:[["default",!1,!1]],success:[["default",!1,!1],["default",!0,!1]]};return Object.keys(n).map(a=>e("div",{className:"sb-column sb-gap-16",children:n[a].map(([s,i,r])=>e("div",{className:"sb-column sb-gap-8 sb-width-full sb-padding-16",style:{backgroundColor:`var(--pui-color-${a}-bg-default${i?"-interactive":""}${r?"-selected":""})`},children:[e(t,{variant:"heading",intent:a,intentModifiers:s,interactive:i,selected:r,children:[a,s==="default"?"":`-${s}`,i?", interactive":""," ",r?", selected":""]}),e(t,{variant:"body",intent:a,intentModifiers:s,interactive:i,selected:r,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})]}))}))},o={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-gap-16",children:E()})},d={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-gap-16",children:[e(t,{variant:"heading",intent:"neutral",disabled:!0,children:"Heading"}),e(t,{variant:"body",intent:"neutral",disabled:!0,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})]})},m={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-gap-16",children:[e(t,{fill:"#00FF00",children:"Heading"}),e(t,{fill:"#00FF00",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})},u={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-gap-16",children:[e(t,{variant:"heading",intent:"neutral",children:"Heading"}),e(t,{variant:"body",intent:"neutral",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})},c={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-row sb-gap-16",children:[e("div",{className:"sb-column sb-gap-16",children:[e(t,{variant:"heading",intent:"neutral",size:"large",children:"Heading Large"}),e(t,{variant:"body",intent:"neutral",size:"large",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),e("div",{className:"sb-column sb-gap-16",children:[e(t,{variant:"heading",intent:"neutral",size:"medium",children:"Heading Medium"}),e(t,{variant:"body",intent:"neutral",size:"medium",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),e("div",{className:"sb-column sb-gap-16",children:[e(t,{variant:"heading",intent:"neutral",size:"small",children:"Heading Small"}),e(t,{variant:"body",intent:"neutral",size:"small",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})]})},p={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-gap-16",children:[e("div",{className:"sb-row sb-gap-16",children:[e(t,{variant:"body",intent:"neutral",size:"large",children:"Body Large"}),e(t,{variant:"body",intent:"neutral",size:"medium",children:"Body Medium"}),e(t,{variant:"body",intent:"neutral",size:"small",children:"Body Small"})]}),e("div",{className:"sb-row sb-gap-16",children:[e(t,{variant:"body",intent:"neutral",size:"large",strong:!0,children:"Body Large Strong"}),e(t,{variant:"body",intent:"neutral",size:"medium",strong:!0,children:"Body Medium Strong"}),e(t,{variant:"body",intent:"neutral",size:"small",strong:!0,children:"Body Small Strong"})]})]})},g={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-gap-16",children:[e("div",{className:"sb-column sb-gap-16",children:[e(t,{variant:"heading",intent:"neutral",size:"large",align:"left",className:"sb-width-full",children:"Heading Large"}),e(t,{variant:"heading",intent:"neutral",size:"medium",align:"center",className:"sb-width-full",children:"Heading Medium"}),e(t,{variant:"heading",intent:"neutral",size:"small",align:"right",className:"sb-width-full",children:"Heading Small"}),e(t,{variant:"body",intent:"neutral",size:"large",align:"left",className:"sb-width-full",children:"Body Large"}),e(t,{variant:"body",intent:"neutral",size:"medium",align:"center",className:"sb-width-full",children:"Body Medium"}),e(t,{variant:"body",intent:"neutral",size:"small",align:"right",className:"sb-width-full",children:"Body Small"})]}),e("div",{className:"sb-column sb-gap-16",children:[e(t,{variant:"body",intent:"neutral",size:"large",strong:!0,align:"left",className:"sb-width-full",children:"Body Large Strong"}),e(t,{variant:"body",intent:"neutral",size:"medium",strong:!0,align:"center",className:"sb-width-full",children:"Body Medium Strong"}),e(t,{variant:"body",intent:"neutral",size:"small",strong:!0,align:"right",className:"sb-width-full",children:"Body Small Strong"})]})]})};var h,y,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    intent: "neutral",
    intentModifiers: "default",
    disabled: false,
    interactive: false,
    selected: false,
    variant: "body",
    size: "medium",
    strong: false,
    align: "left",
    children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <Section>
        <Text {...args}>
          {/* @ts-expect-error - Storybook types hack */}
          {args.children}
        </Text>
      </Section>
    </div>
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,v,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-gap-16">{intentCombinations()}</div>
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,k,I;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-gap-16">
      <Text variant="heading" intent="neutral" disabled>
        Heading
      </Text>
      <Text variant="body" intent="neutral" disabled>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    </div>
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var L,T,N;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-gap-16">
      <Text fill="#00FF00">Heading</Text>
      <Text fill="#00FF00">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </div>
}`,...(N=(T=m.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var z,S,M;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-gap-16">
      <Text variant="heading" intent="neutral">
        Heading
      </Text>
      <Text variant="body" intent="neutral">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </div>
}`,...(M=(S=u.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var B,V,H;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Text variant="heading" intent="neutral" size="large">
          Heading Large
        </Text>
        <Text variant="body" intent="neutral" size="large">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>

      <div className="sb-column sb-gap-16">
        <Text variant="heading" intent="neutral" size="medium">
          Heading Medium
        </Text>
        <Text variant="body" intent="neutral" size="medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>

      <div className="sb-column sb-gap-16">
        <Text variant="heading" intent="neutral" size="small">
          Heading Small
        </Text>
        <Text variant="body" intent="neutral" size="small">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
    </div>
}`,...(H=(V=c.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var A,F,P;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-gap-16">
      <div className="sb-row sb-gap-16">
        <Text variant="body" intent="neutral" size="large">
          Body Large
        </Text>
        <Text variant="body" intent="neutral" size="medium">
          Body Medium
        </Text>
        <Text variant="body" intent="neutral" size="small">
          Body Small
        </Text>
      </div>

      <div className="sb-row sb-gap-16">
        <Text variant="body" intent="neutral" size="large" strong>
          Body Large Strong
        </Text>
        <Text variant="body" intent="neutral" size="medium" strong>
          Body Medium Strong
        </Text>
        <Text variant="body" intent="neutral" size="small" strong>
          Body Small Strong
        </Text>
      </div>
    </div>
}`,...(P=(F=p.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var C,D,O;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Text variant="heading" intent="neutral" size="large" align="left" className="sb-width-full">
          Heading Large
        </Text>
        <Text variant="heading" intent="neutral" size="medium" align="center" className="sb-width-full">
          Heading Medium
        </Text>
        <Text variant="heading" intent="neutral" size="small" align="right" className="sb-width-full">
          Heading Small
        </Text>
        <Text variant="body" intent="neutral" size="large" align="left" className="sb-width-full">
          Body Large
        </Text>
        <Text variant="body" intent="neutral" size="medium" align="center" className="sb-width-full">
          Body Medium
        </Text>
        <Text variant="body" intent="neutral" size="small" align="right" className="sb-width-full">
          Body Small
        </Text>
      </div>

      <div className="sb-column sb-gap-16">
        <Text variant="body" intent="neutral" size="large" strong align="left" className="sb-width-full">
          Body Large Strong
        </Text>
        <Text variant="body" intent="neutral" size="medium" strong align="center" className="sb-width-full">
          Body Medium Strong
        </Text>
        <Text variant="body" intent="neutral" size="small" strong align="right" className="sb-width-full">
          Body Small Strong
        </Text>
      </div>
    </div>
}`,...(O=(D=g.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const G=["Demo","Intent","Disabled","Fill","Type","Size","Strong","Align"];export{g as Align,l as Demo,d as Disabled,m as Fill,o as Intent,c as Size,p as Strong,u as Type,G as __namedExportsOrder,q as default};
