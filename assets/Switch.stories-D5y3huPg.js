import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,w as n}from"./compat.module-gcU-nFZT.js";import{n as r,t as i}from"./jsxRuntime.module-CNTwvFFH.js";import{n as a,t as o}from"./Text-Cr-51GRl.js";import{n as s,t as c}from"./Switch-DZzxyGZR.js";var l;function u(){return(u=e((()=>{s(),i(),l={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Switch defaultChecked={false} />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{defaultChecked:!1}),r(c,{defaultChecked:!0})]})}})))()}var d;function f(){return(f=e((()=>{n(),a(),s(),i(),d={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [checked, setChecked] = useState(false)

<Switch
  checked={checked}
  onCheckedChange={(args) => setChecked(args.checked)}
/>
`}}},render:()=>{let[e,n]=t(!1);return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(o,{children:[`checked: `,e?`true`:`false`]}),r(c,{checked:e,onCheckedChange:e=>n(e.checked)})]})}}})))()}var p;function m(){return(m=e((()=>{s(),i(),p={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Switch disabled />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{defaultChecked:!1,disabled:!0}),r(c,{defaultChecked:!0,disabled:!0})]})}})))()}var h,g,_,v,y,b,x;function S(){return(S=e((()=>{u(),f(),m(),s(),i(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Switch`,component:c,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},checked:{control:{disable:!0},description:`Value for controlled state.`},defaultChecked:{control:{type:`boolean`},description:`Value for uncontrolled state.`,table:{defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},tabIndex:{control:{type:`number`},description:`Tab order of the focusable element. Omit to keep the default focus behavior.`,table:{type:{summary:`number`}}},onCheckedChange:{table:{type:{summary:`(args) => void`,detail:`
args: {
  event: MouseEvent | KeyboardEvent
  checked: boolean
}
`}}}}},_={args:{id:void 0,className:``,defaultChecked:!1,disabled:!1,onCheckedChange:h()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Switch {...args} />
`}}},render:e=>r(`div`,{className:`sb-column sb-width-full`,children:r(c,{...e})})},v=l,y=d,b=p,x=[`Demo`,`Uncontrolled`,`Controlled`,`Disabled`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
        code: \`
<Switch {...args} />
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <Switch {...args} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`UncontrolledStory`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`ControlledStory`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`DisabledStory`,...b.parameters?.docs?.source}}}})))()}S();export{y as Controlled,_ as Demo,b as Disabled,v as Uncontrolled,x as __namedExportsOrder,g as default};