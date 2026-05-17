import{u as e,d as D}from"./hooks.module-6Sbq__eq.js";import{f as I}from"./index-B4E_jmCM.js";import{C as a}from"./Checkbox-AxIsQMht.js";import{T}from"./Text-BbQ_b1VF.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./Icon-C6_npEhI.js";import"./check-CPtlZW3F.js";import"./mixed-BYzCN0ag.js";const U={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Checkbox defaultChecked={false}/>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(a,{defaultChecked:!0,label:"Checked True"}),e(a,{defaultChecked:!1,label:"Checked False"})]})},E={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onCheckedChange={(args) => setChecked(args.checked)}
/>
`}}},render:()=>{const[t,r]=D(!1);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(T,{children:["checked: ",t?"true":"false"]}),e(a,{checked:t,onCheckedChange:F=>r(F.checked),label:"Checkbox"})]})}},_=[{intent:"neutral",intentModifier:"default"},{intent:"brand",intentModifier:"default"}],O=()=>_.map(({intent:t,intentModifier:r})=>e("div",{className:"sb-row sb-width-full sb-gap-16",style:{alignItems:"center"},children:[e(T,{fullWidth:!0,children:[t,", ",r]}),e(a,{intent:t,intentModifier:r,defaultChecked:!0,label:"Checked True"}),e(a,{intent:t,intentModifier:r,defaultChecked:!1,label:"Checked False"})]})),W={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Checkbox intent="neutral" />

<Checkbox intent="brand" />
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:O()})},j={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Checkbox mixed />
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-40",children:[e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(a,{defaultChecked:!0,label:"Checked True"}),e(a,{defaultChecked:!1,label:"Checked False"}),e(a,{defaultChecked:!0,mixed:!0,label:"Checked True Mixed"}),e(a,{defaultChecked:!1,mixed:!0,label:"Checked False Mixed"})]}),e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(a,{intent:"brand",defaultChecked:!0,label:"Checked True"}),e(a,{intent:"brand",defaultChecked:!1,label:"Checked False"}),e(a,{intent:"brand",defaultChecked:!0,mixed:!0,label:"Checked True Mixed"}),e(a,{intent:"brand",defaultChecked:!1,mixed:!0,label:"Checked False Mixed"})]})]})},q={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Checkbox disabled />
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-40",children:[e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(a,{defaultChecked:!0,label:"Checked True",disabled:!0}),e(a,{defaultChecked:!1,label:"Checked False",disabled:!0}),e(a,{defaultChecked:!0,mixed:!0,label:"Checked True Mixed",disabled:!0}),e(a,{defaultChecked:!1,mixed:!0,label:"Checked False Mixed",disabled:!0})]}),e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(a,{intent:"brand",defaultChecked:!0,label:"Checked True",disabled:!0}),e(a,{intent:"brand",defaultChecked:!1,label:"Checked False",disabled:!0}),e(a,{intent:"brand",defaultChecked:!0,mixed:!0,label:"Checked True Mixed",disabled:!0}),e(a,{intent:"brand",defaultChecked:!1,mixed:!0,label:"Checked False Mixed",disabled:!0})]})]})},R={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},intent:{control:{type:"radio"},options:["neutral","brand"],defaultValue:{summary:"neutral"}},intentModifier:{control:{type:"radio"},options:["default"],defaultValue:{summary:"default"}},checked:{control:{disable:!0},description:"Value for controlled state.",table:{type:{summary:"boolean"}}},defaultChecked:{control:{type:"boolean"},description:"Value for uncontrolled state.",defaultValue:{summary:!1}},mixed:{control:{type:"boolean"},defaultValue:{summary:!1}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},label:{control:{type:"text"}},onCheckedChange:{table:{type:{summary:"(args) => void",detail:`
args:{
  event: MouseEvent
  checked: boolean
}
`}}}}},l={tags:["!autodocs"],args:{id:void 0,className:"",intent:"neutral",intentModifier:"default",defaultChecked:!1,mixed:!1,disabled:!1,label:"Checkbox",onCheckedChange:I()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Checkbox {...args} />
`}}},render:t=>e("div",{className:"sb-column sb-width-full",children:e(a,{...t})})},d=U,s=E,o=W,c=j,n=q;var u,i,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    intent: 'neutral',
    intentModifier: 'default',
    defaultChecked: false,
    mixed: false,
    disabled: false,
    label: 'Checkbox',
    onCheckedChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<Checkbox {...args} />
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <Checkbox {...args} />
    </div>
}`,...(b=(i=l.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var m,h,f;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:"UncontrolledStory",...(f=(h=d.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var p,C,k;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"ControlledStory",...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var g,x,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"IntentStory",...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var w,v,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:"MixedStory",...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var M,N,V;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:"DisabledStory",...(V=(N=n.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const X=["Demo","Uncontrolled","Controlled","Intent","Mixed","Disabled"];export{s as Controlled,l as Demo,n as Disabled,o as Intent,c as Mixed,d as Uncontrolled,X as __namedExportsOrder,R as default};
