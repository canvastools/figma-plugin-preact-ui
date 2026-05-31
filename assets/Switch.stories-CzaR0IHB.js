import{u as e,d as y}from"./hooks.module-6Sbq__eq.js";import{f as S}from"./index-B4E_jmCM.js";import{S as a}from"./Switch-D8sdmTC2.js";import{T as v}from"./Text-BbQ_b1VF.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";const x={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Switch defaultChecked={false} />
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(a,{defaultChecked:!1}),e(a,{defaultChecked:!0})]})},V={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [checked, setChecked] = useState(false)

<Switch
  checked={checked}
  onCheckedChange={(args) => setChecked(args.checked)}
/>
`}}},render:()=>{const[r,C]=y(!1);return e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(v,{children:["checked: ",r?"true":"false"]}),e(a,{checked:r,onCheckedChange:w=>C(w.checked)})]})}},N={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Switch disabled />
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(a,{defaultChecked:!1,disabled:!0}),e(a,{defaultChecked:!0,disabled:!0})]})},K={title:"Components/Switch",component:a,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},checked:{control:{disable:!0},description:"Value for controlled state."},defaultChecked:{control:{type:"boolean"},description:"Value for uncontrolled state.",defaultValue:{summary:!1}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},tabIndex:{control:{type:"number"},description:"Tab order of the focusable element. Omit to keep the default focus behavior.",table:{type:{summary:"number"}}},onCheckedChange:{table:{type:{summary:"(args) => void",detail:`
args: {
  event: MouseEvent | KeyboardEvent
  checked: boolean
}
`}}}}},t={tags:["!autodocs"],args:{id:void 0,className:"",defaultChecked:!1,disabled:!1,onCheckedChange:S()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Switch {...args} />
`}}},render:r=>e("div",{className:"sb-column sb-width-full",children:e(a,{...r})})},s=x,o=V,d=N;var c,l,n;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    defaultChecked: false,
    disabled: false,
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
<Switch {...args} />
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <Switch {...args} />
    </div>
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var i,u,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"UncontrolledStory",...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,h,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"ControlledStory",...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,b,k;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:"DisabledStory",...(k=(b=d.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const M=["Demo","Uncontrolled","Controlled","Disabled"];export{o as Controlled,t as Demo,d as Disabled,s as Uncontrolled,M as __namedExportsOrder,K as default};
