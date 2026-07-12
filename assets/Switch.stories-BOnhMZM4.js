import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,w as n}from"./compat.module-BbhDrffC.js";import{n as r,t as i}from"./jsxRuntime.module-B_u_rUE0.js";import{t as a}from"./Text-Bf8YN4P6.js";import{f as o,p as s,t as c}from"./src-Ch66eTMx.js";var l,u=e((()=>{s(),i(),l={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Switch defaultChecked={false} />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(o,{defaultChecked:!1}),r(o,{defaultChecked:!0})]})}})),d,f=e((()=>{n(),c(),s(),i(),d={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [checked, setChecked] = useState(false)

<Switch
  checked={checked}
  onCheckedChange={(args) => setChecked(args.checked)}
/>
`}}},render:()=>{let[e,n]=t(!1);return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(a,{children:[`checked: `,e?`true`:`false`]}),r(o,{checked:e,onCheckedChange:e=>n(e.checked)})]})}}})),p,m=e((()=>{s(),i(),p={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Switch disabled />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(o,{defaultChecked:!1,disabled:!0}),r(o,{defaultChecked:!0,disabled:!0})]})}})),h,g,_,v,y,b,x;e((()=>{u(),f(),m(),s(),i(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Switch`,component:o,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},checked:{control:{disable:!0},description:`Value for controlled state.`},defaultChecked:{control:{type:`boolean`},description:`Value for uncontrolled state.`,table:{defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},tabIndex:{control:{type:`number`},description:`Tab order of the focusable element. Omit to keep the default focus behavior.`,table:{type:{summary:`number`}}},onCheckedChange:{table:{type:{summary:`(args) => void`,detail:`
args: {
  event: MouseEvent | KeyboardEvent
  checked: boolean
}
`}}}}},_={args:{id:void 0,className:``,defaultChecked:!1,disabled:!1,onCheckedChange:h()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Switch {...args} />
`}}},render:e=>r(`div`,{className:`sb-column sb-width-full`,children:r(o,{...e})})},v=l,y=d,b=p,_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`UncontrolledStory`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`ControlledStory`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`DisabledStory`,...b.parameters?.docs?.source}}},x=[`Demo`,`Uncontrolled`,`Controlled`,`Disabled`]}))();export{y as Controlled,_ as Demo,b as Disabled,v as Uncontrolled,x as __namedExportsOrder,g as default};