import{u as e,d as S}from"./hooks.module-BMDhD8C6.js";import{f as y}from"./index-Bk8NU0jy.js";import{S as a}from"./Switch-BISDHw4k.js";import{T as v}from"./Text-DSWvyrh8.js";import"./preact.module-DhLccOoG.js";import"./typedForwardRef-BBQ-rOPo.js";import"./compat.module-BB5nNOI3.js";const x={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Switch defaultChecked={false} />
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(a,{defaultChecked:!1}),e(a,{defaultChecked:!0})]})},V={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [checked, setChecked] = useState(false)

<Switch
  checked={checked}
  onCheckedChange={(args) => setChecked(args.checked)}
/>
`}}},render:()=>{const[r,k]=S(!1);return e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(v,{children:["checked: ",r?"true":"false"]}),e(a,{checked:r,onCheckedChange:w=>k(w.checked)})]})}},N={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Switch disabled />
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(a,{defaultChecked:!1,disabled:!0}),e(a,{defaultChecked:!0,disabled:!0})]})},O={title:"Components/Switch",component:a,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},checked:{control:{disable:!0},description:"Value for controlled state."},defaultChecked:{control:{type:"boolean"},description:"Value for uncontrolled state.",defaultValue:{summary:!1}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},onCheckedChange:{table:{type:{summary:"(args) => void",detail:`
args: {
  event: MouseEvent | KeyboardEvent
  checked: boolean
}
`}}}}},s={tags:["!autodocs"],args:{id:void 0,className:"",defaultChecked:!1,disabled:!1,onCheckedChange:y()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Switch {...args} />
`}}},render:r=>e("div",{className:"sb-column sb-width-full",children:e(a,{...r})})},t=x,o=V,d=N;var c,l,n;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(n=(l=s.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var i,u,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"UncontrolledStory",...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,h,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"ControlledStory",...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,b,C;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:"DisabledStory",...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const j=["Demo","Uncontrolled","Controlled","Disabled"];export{o as Controlled,s as Demo,d as Disabled,t as Uncontrolled,j as __namedExportsOrder,O as default};
