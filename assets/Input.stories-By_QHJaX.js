import{u as e,d as K}from"./hooks.module-CGIakYml.js";import{f as a}from"./index-BWINGljf.js";import{I as t}from"./Input-DEoZ9WJj.js";import{T as _}from"./Text-9aeIDhQ2.js";import{I as j}from"./Icon-DYEerEJN.js";import{s as q}from"./search-q65ijsGm.js";import{B as p}from"./ButtonIcon-DRFFAPoT.js";import{l as m}from"./link-BEZi4mus.js";import{a as z}from"./TooltipContext-DJAjWLpJ.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./TooltipContainer-BVa1RtHA.js";const A={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Input defaultValue="Hello World!" />
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:e(t,{defaultValue:"Hello World!"})})},G={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [value, setValue] = useState("Hello World!")

<Input
  value={value}
  onValueChange={(args) => setValue(args.value)}
/>
`}}},render:()=>{const[o,M]=K("Hello World!");return e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(_,{children:["value: ",o]}),e(t,{value:o,onValueChange:U=>M(U.value)})]})}},J={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"If there is no label, the component will be displayed in the default variant."},source:{language:"tsx",code:`
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
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:e(t,{placeholder:"Input with prefix",prefix:e(j,{glyph:q,intentModifier:"secondary"})})})},Y={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(t,{placeholder:"Input with suffix",suffix:e(p,{icon:{glyph:m},translucent:!0})}),e(t,{placeholder:"Show suffix on hover",showSuffixOnHover:!0,suffix:e(p,{icon:{glyph:m},translucent:!0})})]})},ce={title:"Components/Input",component:t,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["default","list"],defaultValue:{summary:"default"}},label:{control:{type:"text"}},placeholder:{control:{type:"text"}},type:{control:{type:"radio"},options:["text","number"],defaultValue:{summary:"text"}},defaultValue:{control:{type:"text"},description:"Value for uncontrolled state."},value:{control:{disable:!0},description:"Value for controlled state.",table:{type:{summary:"string"}}},ghost:{control:{type:"boolean"},defaultValue:{summary:!1}},grouped:{control:{type:"radio"},options:[void 0,"first","last","middle"]},error:{control:{type:"boolean"},defaultValue:{summary:!1}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},prefix:{control:{disable:!0},description:"Element displayed before value.",table:{type:{summary:"preact.ComponentChildren"}}},suffix:{control:{disable:!0},description:"Element displayed after value.",table:{type:{summary:"preact.ComponentChildren"}}},showSuffixOnHover:{control:{type:"boolean"},defaultValue:{summary:!1}},focusOnDoubleClick:{control:{type:"boolean"},defaultValue:{summary:!1}},minLength:{control:{type:"number"},defaultValue:{summary:0},description:"Minimum length of the input value."},maxLength:{control:{type:"number"},defaultValue:{summary:1/0},description:"Maximum length of the input value."},tooltip:{control:{type:"text"},description:"Tooltip content.",table:{type:{summary:"preact.ComponentChildren"}}},autoFocus:{control:{type:"boolean"},defaultValue:{summary:!1}},maxWidth:{control:{type:"number"},description:"Maximum width of the input (excluding label). Only applicable when variant is `list`.",table:{type:{summary:"number | string"}}},onValueChange:{table:{type:{summary:"(args) => void",detail:`
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
          `}}}}},r={tags:["!autodocs"],args:{id:void 0,className:"",variant:"default",label:"Label",type:"text",placeholder:"Placeholder",defaultValue:"",ghost:!1,grouped:void 0,error:!1,disabled:!1,showSuffixOnHover:!1,focusOnDoubleClick:!1,tooltip:"Input tooltip",minLength:0,maxLength:9999,autoFocus:!1,maxWidth:void 0,onValueChange:a(),onBlur:a(),onFocus:a(),onKeyDown:a()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Input {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Input {...args} />
</TooltipContext>
`}}},render:o=>e("div",{className:"sb-column sb-width-300",children:e(z,{children:e(t,{...o})})})},l=A,s=G,n=J,u=Q,i=R,d=X,c=Y;var f,g,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,y,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:"UncontrolledStory",...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,w,V;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"ControlledStory",...(V=(w=s.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var S,I,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"VariantStory",...(C=(I=n.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var D,P,T;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:"PlaceholderStory",...(T=(P=u.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var N,H,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:"DisabledStory",...(k=(H=i.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var L,O,W;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:"PrefixStory",...(W=(O=d.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var F,B,E;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:"SuffixStory",...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const pe=["Demo","Uncontrolled","Controlled","Variant","Placeholder","Disabled","Prefix","Suffix"];export{s as Controlled,r as Demo,i as Disabled,u as Placeholder,d as Prefix,c as Suffix,l as Uncontrolled,n as Variant,pe as __namedExportsOrder,ce as default};
