import{u as e,d as A}from"./hooks.module-6Sbq__eq.js";import{f as a}from"./index-B4E_jmCM.js";import{I as t}from"./Input-C-scTUnW.js";import{T as j}from"./Text-BbQ_b1VF.js";import{I as p}from"./Icon-DqIclgYW.js";import{s as m}from"./search-BN53RESs.js";import{B as f}from"./ButtonIcon-7SP_3Ldm.js";import{l as g}from"./link-DL1y3n50.js";import{a as q}from"./TooltipContext-Cr8YsZR4.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./TooltipContainer-CJCq4A9v.js";const z={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Input defaultValue="Hello World!" />
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:e(t,{defaultValue:"Hello World!"})})},G={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [value, setValue] = useState("Hello World!")

<Input
  value={value}
  onValueChange={(args) => setValue(args.value)}
/>
`}}},render:()=>{const[o,K]=A("Hello World!");return e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(j,{children:["value: ",o]}),e(t,{value:o,onValueChange:_=>K(_.value)})]})}},J={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"If there is no label, the component will be displayed in the default variant."},source:{language:"tsx",code:`
<Input variant="default" />

<Input variant="list" />
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-40",children:[e(t,{defaultValue:"Hello World!",label:"Label",variant:"default"}),e(t,{defaultValue:"Hello World!",label:"Label",variant:"list"})]})},Q={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Input placeholder="Placeholder" />
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:e(t,{placeholder:"Placeholder"})})},R={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Input disabled />
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(t,{disabled:!0}),e(t,{disabled:!0,placeholder:"Placeholder"}),e(t,{disabled:!0,defaultValue:"Default Value"})]})},X={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Input
  prefix={
    <Icon
      glyph={search}
      intentModifier="secondary"
    />
  }
/>
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(t,{placeholder:"Input with prefix",prefix:e(p,{glyph:m,intentModifier:"secondary"})}),e(t,{placeholder:"Input with prefix (focusOnPrefix)",focusOnPrefix:!0,prefix:e(p,{glyph:m,intentModifier:"secondary"})})]})},Y={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Input
  suffix={
    <ButtonIcon 
      icon={{ glyph: link }} 
      translucent
    />
  }
/>

<Input
  showSuffixOnHover
  suffix={
    <ButtonIcon 
      icon={{ glyph: link }} 
      translucent
    />
  }
/>
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(t,{placeholder:"Input with suffix",suffix:e(f,{icon:{glyph:g},translucent:!0})}),e(t,{placeholder:"Show suffix on hover",showSuffixOnHover:!0,suffix:e(f,{icon:{glyph:g},translucent:!0})})]})},ce={title:"Components/Input",component:t,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["default","list"],defaultValue:{summary:"default"}},label:{control:{type:"text"}},placeholder:{control:{type:"text"}},type:{control:{type:"radio"},options:["text","number"],defaultValue:{summary:"text"}},defaultValue:{control:{type:"text"},description:"Value for uncontrolled state."},value:{control:{disable:!0},description:"Value for controlled state.",table:{type:{summary:"string"}}},ghost:{control:{type:"boolean"},defaultValue:{summary:!1}},grouped:{control:{type:"radio"},options:[void 0,"first","last","middle"]},error:{control:{type:"boolean"},defaultValue:{summary:!1}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},prefix:{control:{disable:!0},description:"Element displayed before value.",table:{type:{summary:"preact.ComponentChildren"}}},suffix:{control:{disable:!0},description:"Element displayed after value.",table:{type:{summary:"preact.ComponentChildren"}}},showSuffixOnHover:{control:{type:"boolean"},defaultValue:{summary:!1}},focusOnDoubleClick:{control:{type:"boolean"},defaultValue:{summary:!1}},focusOnPrefix:{control:{type:"boolean"},defaultValue:{summary:!1}},minLength:{control:{type:"number"},defaultValue:{summary:0},description:"Minimum length of the input value."},maxLength:{control:{type:"number"},defaultValue:{summary:1/0},description:"Maximum length of the input value."},tooltip:{control:{type:"text"},description:"Tooltip content.",table:{type:{summary:"preact.ComponentChildren"}}},autoFocus:{control:{type:"boolean"},defaultValue:{summary:!1}},selectOnFocus:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Select all text when the input receives focus."},maxWidth:{control:{type:"number"},description:"Maximum width of the input (excluding label). Only applicable when variant is `list`.",table:{type:{summary:"number | string"}}},tabIndex:{control:{type:"number"},description:"Tab order of the focusable element (input, or display container when focusOnDoubleClick is enabled). Applied to a single tab stop only. Omit to keep the default.",table:{type:{summary:"number"}}},onValueChange:{table:{type:{summary:"(args) => void",detail:`
args: { 
  event: MouseEvent
  value: string
}
          `}}},onBlur:{table:{type:{summary:"(args) => void",detail:`
args: { 
  event: FocusEvent
  value: string
}
          `}}},onFocus:{table:{type:{summary:"(args) => void",detail:`
args: { 
  event: FocusEvent
  value: string
}
          `}}},onKeyDown:{table:{type:{summary:"(args) => void",detail:`
args: { 
  event: KeyboardEvent
  value: string
}
          `}}}}},r={tags:["!autodocs"],args:{id:void 0,className:"",variant:"default",label:"Label",type:"text",placeholder:"Placeholder",defaultValue:"",ghost:!1,grouped:void 0,error:!1,disabled:!1,showSuffixOnHover:!1,focusOnDoubleClick:!1,tooltip:"Input tooltip",minLength:0,maxLength:9999,autoFocus:!1,selectOnFocus:!1,maxWidth:void 0,onValueChange:a(),onBlur:a(),onFocus:a(),onKeyDown:a()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Input {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Input {...args} />
</TooltipContext>
`}}},render:o=>e("div",{className:"sb-column sb-width-300",children:e(q,{children:e(t,{...o})})})},l=z,n=G,s=J,u=Q,i=R,d=X,c=Y;var b,y,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    variant: 'default',
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder',
    defaultValue: '',
    ghost: false,
    grouped: undefined,
    error: false,
    disabled: false,
    showSuffixOnHover: false,
    focusOnDoubleClick: false,
    tooltip: 'Input tooltip',
    minLength: 0,
    maxLength: 9999,
    autoFocus: false,
    selectOnFocus: false,
    maxWidth: undefined,
    onValueChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
    onKeyDown: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<Input {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Input {...args} />
</TooltipContext>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-300">
      <TooltipContext>
        <Input {...args} />
      </TooltipContext>
    </div>
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,v,w;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:"UncontrolledStory",...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var V,S,I;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:"ControlledStory",...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var C,O,P;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:"VariantStory",...(P=(O=s.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var D,T,k;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:"PlaceholderStory",...(k=(T=u.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var N,F,H;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:"DisabledStory",...(H=(F=i.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var L,W,B;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:"PrefixStory",...(B=(W=d.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var E,M,U;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:"SuffixStory",...(U=(M=c.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const pe=["Demo","Uncontrolled","Controlled","Variant","Placeholder","Disabled","Prefix","Suffix"];export{n as Controlled,r as Demo,i as Disabled,u as Placeholder,d as Prefix,c as Suffix,l as Uncontrolled,s as Variant,pe as __namedExportsOrder,ce as default};
