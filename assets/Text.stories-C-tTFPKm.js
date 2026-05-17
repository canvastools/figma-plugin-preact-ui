import{u as e}from"./hooks.module-6Sbq__eq.js";import{T as t}from"./Text-BbQ_b1VF.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";const G=[{bg:"--pui-color-neutral-bg-default",intent:"neutral",intentModifier:"default"},{bg:"--pui-color-neutral-bg-default",intent:"neutral",intentModifier:"default",selected:!0},{bg:"--pui-color-neutral-bg-default",intent:"neutral",intentModifier:"secondary"},{bg:"--pui-color-neutral-bg-default",intent:"neutral",intentModifier:"brand"},{bg:"--pui-color-neutral-bg-default",intent:"neutral",intentModifier:"danger"},{bg:"--pui-color-neutral-bg-default",intent:"neutral",intentModifier:"warning"},{bg:"--pui-color-neutral-bg-default",intent:"neutral",intentModifier:"success"},{bg:"--pui-color-neutral-bg-default",intent:"neutral",intentModifier:"component"},{bg:"--pui-color-neutral-inverted-bg-default",intent:"neutral-inverted",intentModifier:"default"},{bg:"--pui-color-neutral-inverted-fixed-bg-default",intent:"neutral-inverted-fixed",intentModifier:"default"},{bg:"--pui-color-neutral-inverted-fixed-bg-default",intent:"neutral-inverted-fixed",intentModifier:"secondary"},{bg:"--pui-color-neutral-inverted-fixed-bg-default",intent:"neutral-inverted-fixed",intentModifier:"danger"},{bg:"--pui-color-brand-bg-default",intent:"brand",intentModifier:"default"},{bg:"--pui-color-brand-bg-default",intent:"brand",intentModifier:"secondary"},{bg:"--pui-color-danger-bg-default",intent:"danger",intentModifier:"default"},{bg:"--pui-color-warning-bg-default",intent:"warning",intentModifier:"default"},{bg:"--pui-color-success-bg-default",intent:"success",intentModifier:"default"}],O=()=>G.map(({bg:r,intent:a,intentModifier:n,selected:p})=>e("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[e(t,{fullWidth:!0,children:[a,", ",n,p?", selected":""]}),e("div",{style:{backgroundColor:`var(${r})`,width:"200%"},children:e("div",{className:"sb-padding-16",style:{backgroundColor:`var(${r}${p?"-selected":""})`},children:e(t,{intent:a,intentModifier:n,fullWidth:!0,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."})})})]})),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Text intent="neutral">{children}</Text>

<Text 
  intent="neutral"
  intentModifier="secondary"
>
  {children}
</Text>

<Text intent="brand">
  {children}
</Text>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:O()})},X={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Text variant="heading">{children}</Text>

<Text variant="body">{children}</Text>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(t,{variant:"heading",children:"Heading"}),e(t,{variant:"body",children:"Body"})]})},j={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Text size="small">{children}</Text>

<Text size="medium">{children}</Text>

<Text size="large">{children}</Text>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-40",children:[e("div",{className:"sb-column sb-gap-16",children:[e(t,{variant:"heading",size:"large",children:"Heading Large"}),e(t,{variant:"body",size:"large",children:"Body Large. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),e("div",{className:"sb-column sb-gap-16",children:[e(t,{variant:"heading",size:"medium",children:"Heading Medium"}),e(t,{variant:"body",size:"medium",children:"Body Medium. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),e("div",{className:"sb-column sb-gap-16",children:[e(t,{variant:"heading",size:"small",children:"Heading Small"}),e(t,{variant:"body",size:"small",children:"Body Small. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})]})},q={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Text strong>{children}</Text>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-40",children:[e("div",{className:"sb-row sb-gap-40",children:[e("div",{className:"sb-column sb-gap-16",children:[e(t,{variant:"heading",size:"large",children:"Heading Large"}),e(t,{variant:"heading",size:"medium",children:"Heading Medium"}),e(t,{variant:"heading",size:"small",children:"Heading Small"})]}),e("div",{className:"sb-column sb-gap-16",children:[e(t,{variant:"heading",size:"large",strong:!0,children:"Heading Large Strong"}),e(t,{variant:"heading",size:"medium",strong:!0,children:"Heading Medium Strong"}),e(t,{variant:"heading",size:"small",strong:!0,children:"Heading Small Strong"})]})]}),e("div",{className:"sb-row sb-gap-40",children:[e("div",{className:"sb-column sb-gap-16",children:[e(t,{variant:"body",size:"large",children:"Body Large"}),e(t,{variant:"body",size:"medium",children:"Body Medium"}),e(t,{variant:"body",size:"small",children:"Body Small"})]}),e("div",{className:"sb-column sb-gap-16",children:[e(t,{variant:"body",size:"large",strong:!0,children:"Body Large Strong"}),e(t,{variant:"body",size:"medium",strong:!0,children:"Body Medium Strong"}),e(t,{variant:"body",size:"small",strong:!0,children:"Body Small Strong"})]})]})]})},J={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Text align="left">{children}</Text>

<Text align="center">{children}</Text>

<Text align="right">{children}</Text>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(t,{variant:"heading",align:"left",children:"Heading Left"}),e(t,{variant:"heading",align:"center",children:"Heading Center"}),e(t,{variant:"heading",align:"right",children:"Heading Right"}),e(t,{variant:"body",align:"left",children:"Body Left"}),e(t,{variant:"body",align:"center",children:"Body Center"}),e(t,{variant:"body",align:"right",children:"Body Right"})]})},K=[{bg:"--pui-color-neutral-bg",disabledBg:!1,intent:"neutral"},{bg:"--pui-color-neutral-bg",disabledBg:!0,intent:"neutral"},{bg:"--pui-color-neutral-inverted-bg",disabledBg:!0,intent:"neutral-inverted"},{bg:"--pui-color-neutral-inverted-fixed-bg",disabledBg:!0,intent:"neutral-inverted-fixed"},{bg:"--pui-color-brand-bg",intent:"brand"},{bg:"--pui-color-danger-bg",disabledBg:!0,intent:"danger"},{bg:"--pui-color-warning-bg",disabledBg:!0,intent:"warning"},{bg:"--pui-color-success-bg",disabledBg:!0,intent:"success"}],Q=()=>K.map(({bg:r,disabledBg:a,intent:n})=>e("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[e(t,{fullWidth:!0,children:[n,", disabled"]}),e("div",{style:{backgroundColor:`var(${r}-default)`,width:"200%"},children:e("div",{className:"sb-padding-16",style:{backgroundColor:a?`var(${r}-disabled)`:"unset"},children:e(t,{intent:n,disabled:!0,fullWidth:!0,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."})})})]})),U={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Text disabled>{children}</Text>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:Q()})},Y={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Links can be rendered using markdown syntax."},source:{language:"tsx",code:`
<Text>
  Lorem Ipsum is simply [dummy text](https://www.google.com) of the printing and typesetting industry.
</Text>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:e(t,{children:"Lorem Ipsum is simply [dummy text](https://www.google.com) of the printing and typesetting industry. "})})},Z={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Text textColor="#00FF00">{children}</Text>

<Text textColor="rgb(0, 255, 0, 0.5)">{children}</Text>

<Text textColor="rgb(0, 255, 0)">{children}</Text>

<Text textColor="var(--pui-color-brand-text-default)">{children}</Text>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(t,{textColor:"#00FF00",variant:"heading",children:"Heading"}),e(t,{textColor:"#00FF00",variant:"body",children:"Body"})]})},ie={title:"Components/Text",component:t,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},intent:{control:{type:"radio"},options:["neutral","neutral-inverted","neutral-inverted-fixed","brand","danger","warning","success"],defaultValue:{summary:"neutral"}},intentModifier:{control:{type:"radio"},options:["default","secondary","brand","danger","warning","success","component"],defaultValue:{summary:"default"}},variant:{control:{type:"radio"},options:["heading","body"],defaultValue:{summary:"body"}},size:{control:{type:"radio"},options:["small","medium","large"],defaultValue:{summary:"medium"}},strong:{control:{type:"boolean"},defaultValue:{summary:!1}},align:{control:{type:"radio"},options:["left","center","right"],defaultValue:{summary:"left"}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},selected:{control:{type:"boolean"},defaultValue:{summary:!1}},textColor:{control:{type:"color"},description:"Overrides the intent color.",table:{type:{summary:"HEX | RGB | RGBA | var()"}}},wrap:{control:{type:"boolean"},defaultValue:{summary:!0}},truncate:{control:{type:"boolean"},defaultValue:{summary:!1}},inline:{control:{type:"boolean"},defaultValue:{summary:!1}},fullWidth:{control:{type:"boolean"},defaultValue:{summary:!1}},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"string"}}}}},i={tags:["!autodocs"],args:{id:void 0,className:"",intent:"neutral",intentModifier:"default",variant:"body",size:"medium",strong:!1,align:"left",disabled:!1,selected:!1,textColor:void 0,wrap:!0,truncate:!1,fullWidth:!1,inline:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Text {...args}>{children}</Text>
`}}},render:r=>e("div",{className:"sb-column sb-width-full",children:e(t,{...r,children:r.children})})},s=_,l=X,o=j,d=q,u=J,c=U,g=Y,m=Z;var b,h,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    intent: 'neutral',
    intentModifier: 'default',
    variant: 'body',
    size: 'medium',
    strong: false,
    align: 'left',
    disabled: false,
    selected: false,
    textColor: undefined,
    wrap: true,
    truncate: false,
    fullWidth: false,
    inline: false,
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<Text {...args}>{children}</Text>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      {/* @ts-expect-error Storybook spread */}
      <Text {...args}>{args.children}</Text>
    </div>
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,v,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"IntentStory",...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,S,T;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:"VariantStory",...(T=(S=l.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var L,k,I;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:"SizeStory",...(I=(k=o.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var M,z,N;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:"StrongStory",...(N=(z=d.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var V,C,B;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:"AlignStory",...(B=(C=u.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var H,A,D;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:"DisabledStory",...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var W,F,$;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:"LinksStory",...($=(F=g.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var R,P,E;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:"ColorStory",...(E=(P=m.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const se=["Demo","Intent","Variant","Size","Strong","Align","Disabled","Links","Color"];export{u as Align,m as Color,i as Demo,c as Disabled,s as Intent,g as Links,o as Size,d as Strong,l as Variant,se as __namedExportsOrder,ie as default};
