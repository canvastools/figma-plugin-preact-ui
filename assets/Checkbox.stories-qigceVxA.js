import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,w as n}from"./compat.module-gcU-nFZT.js";import{n as r,t as i}from"./jsxRuntime.module-CNTwvFFH.js";import{n as a,t as o}from"./Text-Cr-51GRl.js";import{n as s,t as c}from"./Checkbox-DgbiIxUo.js";var l;function u(){return(u=e((()=>{s(),i(),l={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Checkbox defaultChecked={false}/>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[r(c,{defaultChecked:!0,label:`Checked True`}),r(c,{defaultChecked:!1,label:`Checked False`})]})}})))()}var d;function f(){return(f=e((()=>{n(),a(),s(),i(),d={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onCheckedChange={(args) => setChecked(args.checked)}
/>
`}}},render:()=>{let[e,n]=t(!1);return r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[r(o,{children:[`checked: `,e?`true`:`false`]}),r(c,{checked:e,onCheckedChange:e=>n(e.checked),label:`Checkbox`})]})}}})))()}var p,m,h;function g(){return(g=e((()=>{a(),s(),i(),p=[{intent:`neutral`,intentModifier:`default`},{intent:`brand`,intentModifier:`default`}],m=()=>p.map(({intent:e,intentModifier:t})=>r(`div`,{className:`sb-row sb-width-full sb-gap-16`,style:{alignItems:`center`},children:[r(o,{fullWidth:!0,children:[e,`, `,t]}),r(c,{intent:e,intentModifier:t,defaultChecked:!0,label:`Checked True`}),r(c,{intent:e,intentModifier:t,defaultChecked:!1,label:`Checked False`})]})),h={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Checkbox intent="neutral" />

<Checkbox intent="brand" />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:m()})}})))()}var _;function v(){return(v=e((()=>{s(),i(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Checkbox mixed />
`}}},render:()=>r(`div`,{className:`sb-row sb-width-full sb-gap-40`,children:[r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[r(c,{defaultChecked:!0,label:`Checked True`}),r(c,{defaultChecked:!1,label:`Checked False`}),r(c,{defaultChecked:!0,mixed:!0,label:`Checked True Mixed`}),r(c,{defaultChecked:!1,mixed:!0,label:`Checked False Mixed`})]}),r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[r(c,{intent:`brand`,defaultChecked:!0,label:`Checked True`}),r(c,{intent:`brand`,defaultChecked:!1,label:`Checked False`}),r(c,{intent:`brand`,defaultChecked:!0,mixed:!0,label:`Checked True Mixed`}),r(c,{intent:`brand`,defaultChecked:!1,mixed:!0,label:`Checked False Mixed`})]})]})}})))()}var y;function b(){return(b=e((()=>{s(),i(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Checkbox disabled />
`}}},render:()=>r(`div`,{className:`sb-row sb-width-full sb-gap-40`,children:[r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[r(c,{defaultChecked:!0,label:`Checked True`,disabled:!0}),r(c,{defaultChecked:!1,label:`Checked False`,disabled:!0}),r(c,{defaultChecked:!0,mixed:!0,label:`Checked True Mixed`,disabled:!0}),r(c,{defaultChecked:!1,mixed:!0,label:`Checked False Mixed`,disabled:!0})]}),r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[r(c,{intent:`brand`,defaultChecked:!0,label:`Checked True`,disabled:!0}),r(c,{intent:`brand`,defaultChecked:!1,label:`Checked False`,disabled:!0}),r(c,{intent:`brand`,defaultChecked:!0,mixed:!0,label:`Checked True Mixed`,disabled:!0}),r(c,{intent:`brand`,defaultChecked:!1,mixed:!0,label:`Checked False Mixed`,disabled:!0})]})]})}})))()}var x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{u(),f(),g(),v(),b(),s(),i(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Checkbox`,component:c,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},intent:{control:{type:`radio`},options:[`neutral`,`brand`],table:{defaultValue:{summary:`neutral`}}},intentModifier:{control:{type:`radio`},options:[`default`],table:{defaultValue:{summary:`default`}}},checked:{control:{disable:!0},description:`Value for controlled state.`,table:{type:{summary:`boolean`}}},defaultChecked:{control:{type:`boolean`},description:`Value for uncontrolled state.`,table:{defaultValue:{summary:`false`}}},mixed:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},label:{control:{type:`text`}},tabIndex:{control:{type:`number`},description:`Tab order of the focusable element. Omit to keep the default focus behavior.`,table:{type:{summary:`number`}}},onCheckedChange:{table:{type:{summary:`(args) => void`,detail:`
args:{
  event: MouseEvent
  checked: boolean
}
`}}}}},C={args:{id:void 0,className:``,intent:`neutral`,intentModifier:`default`,defaultChecked:!1,mixed:!1,disabled:!1,label:`Checkbox`,onCheckedChange:x()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Checkbox {...args} />
`}}},render:e=>r(`div`,{className:`sb-column sb-width-full`,children:r(c,{...e})})},w=l,T=d,E=h,D=_,O=y,k=[`Demo`,`Uncontrolled`,`Controlled`,`Intent`,`Mixed`,`Disabled`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
        code: \`
<Checkbox {...args} />
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <Checkbox {...args} />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`UncontrolledStory`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`ControlledStory`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`IntentStory`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`MixedStory`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`DisabledStory`,...O.parameters?.docs?.source}}}})))()}A();export{T as Controlled,C as Demo,O as Disabled,E as Intent,D as Mixed,w as Uncontrolled,k as __namedExportsOrder,S as default};