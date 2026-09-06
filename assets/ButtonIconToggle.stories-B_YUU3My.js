import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,w as n}from"./compat.module-gcU-nFZT.js";import{n as r,t as i}from"./jsxRuntime.module-CNTwvFFH.js";import{n as a,t as o}from"./Text-Cr-51GRl.js";import{n as s,t as c}from"./ButtonIconToggle-B55c-Wca.js";import{n as l,t as u}from"./link-DAdg43gf.js";var d;function f(){return(f=e((()=>{u(),s(),i(),d={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ButtonIconToggle defaultSelected={false}>{children}</ButtonIconToggle>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:r(c,{defaultSelected:!1,icon:{glyph:l}})})}})))()}var p;function m(){return(m=e((()=>{n(),a(),u(),s(),i(),p={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [isSelected, setIsSelected] = useState(false)

<ButtonIconToggle
  selected={isSelected}
  onSelectedChange={(args) => setIsSelected(args.selected)}
>
  {children}
</ButtonIconToggle>
`}}},render:()=>{let[e,n]=t(!1);return r(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:[r(o,{children:[`selected: `,e?`true`:`false`]}),r(c,{selected:e,onSelectedChange:e=>n(e.selected),icon:{glyph:l}})]})}}})))()}var h,g,_,v,y,b;function x(){return(x=e((()=>{f(),m(),u(),s(),i(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/ButtonIconToggle`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:"Extends <a href='/docs/components-buttonicon--docs'>`<ButtonIcon/>`</a> and its props to simplify the creation of toggle buttons."}}},argTypes:{selected:{control:{disable:!0},description:`Value for controlled state.`,table:{type:{summary:`boolean`}}},defaultSelected:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Value for uncontrolled state.`},tabIndex:{control:{type:`number`},description:`Tab order of the focusable element. Omit to keep the default focus behavior.`,table:{type:{summary:`number`}}},onSelectedChange:{action:`changed`,table:{type:{summary:`(args) => void`,detail:`
args:{
  event: MouseEvent,
  selected: boolean
}
`}}},"...ButtonIconProps":{control:{disable:!0},table:{type:{summary:`ButtonIconProps`,detail:`
{
  className: string
  intent: "neutral"
  intentModifier: "default" | "secondary"
  ghost: boolean
  size: "medium" | "large"
  grouped: "none" | "first" | "last" | "middle"
  translucent: boolean
  disabled: boolean
  selected: boolean
  tooltip: preact.ComponentChildren
  children: preact.ComponentChildren
  icon: IconPropsPick
  onClick: (args: { event: MouseEvent }) => void
}
`}}}}},_={args:{defaultSelected:!1,onSelectedChange:h()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<ButtonIconToggle {...args}>
  {children}
</ButtonIconToggle>
`}}},render:e=>r(`div`,{className:`sb-column sb-width-full`,children:r(c,{icon:{glyph:l},...e})})},v=d,y=p,b=[`Demo`,`Uncontrolled`,`Controlled`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: false,
    onSelectedChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<ButtonIconToggle {...args}>
  {children}
</ButtonIconToggle>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <ButtonIconToggle icon={{
      glyph: link
    }} {...args} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`UncontrolledStory`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`ControlledStory`,...y.parameters?.docs?.source}}}})))()}x();export{y as Controlled,_ as Demo,v as Uncontrolled,b as __namedExportsOrder,g as default};