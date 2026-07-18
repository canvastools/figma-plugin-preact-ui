import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,w as n}from"./compat.module-BiyPQZFw.js";import{n as r,t as i}from"./jsxRuntime.module-XYsEgyrh.js";import{t as a}from"./Text-Dx8we2OT.js";import{$t as o,en as s,t as c}from"./src-BW54aR7x.js";var l,u=e((()=>{s(),i(),l={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Checkbox defaultChecked={false}/>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[r(o,{defaultChecked:!0,label:`Checked True`}),r(o,{defaultChecked:!1,label:`Checked False`})]})}})),d,f=e((()=>{n(),c(),s(),i(),d={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onCheckedChange={(args) => setChecked(args.checked)}
/>
`}}},render:()=>{let[e,n]=t(!1);return r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[r(a,{children:[`checked: `,e?`true`:`false`]}),r(o,{checked:e,onCheckedChange:e=>n(e.checked),label:`Checkbox`})]})}}})),p,m,h,g=e((()=>{c(),s(),i(),p=[{intent:`neutral`,intentModifier:`default`},{intent:`brand`,intentModifier:`default`}],m=()=>p.map(({intent:e,intentModifier:t})=>r(`div`,{className:`sb-row sb-width-full sb-gap-16`,style:{alignItems:`center`},children:[r(a,{fullWidth:!0,children:[e,`, `,t]}),r(o,{intent:e,intentModifier:t,defaultChecked:!0,label:`Checked True`}),r(o,{intent:e,intentModifier:t,defaultChecked:!1,label:`Checked False`})]})),h={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Checkbox intent="neutral" />

<Checkbox intent="brand" />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:m()})}})),_,v=e((()=>{s(),i(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Checkbox mixed />
`}}},render:()=>r(`div`,{className:`sb-row sb-width-full sb-gap-40`,children:[r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[r(o,{defaultChecked:!0,label:`Checked True`}),r(o,{defaultChecked:!1,label:`Checked False`}),r(o,{defaultChecked:!0,mixed:!0,label:`Checked True Mixed`}),r(o,{defaultChecked:!1,mixed:!0,label:`Checked False Mixed`})]}),r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[r(o,{intent:`brand`,defaultChecked:!0,label:`Checked True`}),r(o,{intent:`brand`,defaultChecked:!1,label:`Checked False`}),r(o,{intent:`brand`,defaultChecked:!0,mixed:!0,label:`Checked True Mixed`}),r(o,{intent:`brand`,defaultChecked:!1,mixed:!0,label:`Checked False Mixed`})]})]})}})),y,b=e((()=>{s(),i(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Checkbox disabled />
`}}},render:()=>r(`div`,{className:`sb-row sb-width-full sb-gap-40`,children:[r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[r(o,{defaultChecked:!0,label:`Checked True`,disabled:!0}),r(o,{defaultChecked:!1,label:`Checked False`,disabled:!0}),r(o,{defaultChecked:!0,mixed:!0,label:`Checked True Mixed`,disabled:!0}),r(o,{defaultChecked:!1,mixed:!0,label:`Checked False Mixed`,disabled:!0})]}),r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[r(o,{intent:`brand`,defaultChecked:!0,label:`Checked True`,disabled:!0}),r(o,{intent:`brand`,defaultChecked:!1,label:`Checked False`,disabled:!0}),r(o,{intent:`brand`,defaultChecked:!0,mixed:!0,label:`Checked True Mixed`,disabled:!0}),r(o,{intent:`brand`,defaultChecked:!1,mixed:!0,label:`Checked False Mixed`,disabled:!0})]})]})}})),x,S,C,w,T,E,D,O,k;e((()=>{u(),f(),g(),v(),b(),s(),i(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Checkbox`,component:o,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},intent:{control:{type:`radio`},options:[`neutral`,`brand`],table:{defaultValue:{summary:`neutral`}}},intentModifier:{control:{type:`radio`},options:[`default`],table:{defaultValue:{summary:`default`}}},checked:{control:{disable:!0},description:`Value for controlled state.`,table:{type:{summary:`boolean`}}},defaultChecked:{control:{type:`boolean`},description:`Value for uncontrolled state.`,table:{defaultValue:{summary:`false`}}},mixed:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},label:{control:{type:`text`}},tabIndex:{control:{type:`number`},description:`Tab order of the focusable element. Omit to keep the default focus behavior.`,table:{type:{summary:`number`}}},onCheckedChange:{table:{type:{summary:`(args) => void`,detail:`
args:{
  event: MouseEvent
  checked: boolean
}
`}}}}},C={args:{id:void 0,className:``,intent:`neutral`,intentModifier:`default`,defaultChecked:!1,mixed:!1,disabled:!1,label:`Checkbox`,onCheckedChange:x()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Checkbox {...args} />
`}}},render:e=>r(`div`,{className:`sb-column sb-width-full`,children:r(o,{...e})})},w=l,T=d,E=h,D=_,O=y,C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`UncontrolledStory`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`ControlledStory`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`IntentStory`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`MixedStory`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`DisabledStory`,...O.parameters?.docs?.source}}},k=[`Demo`,`Uncontrolled`,`Controlled`,`Intent`,`Mixed`,`Disabled`]}))();export{T as Controlled,C as Demo,O as Disabled,E as Intent,D as Mixed,w as Uncontrolled,k as __namedExportsOrder,S as default};