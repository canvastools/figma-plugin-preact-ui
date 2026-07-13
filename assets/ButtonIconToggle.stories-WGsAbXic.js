import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,w as n}from"./compat.module-BbhDrffC.js";import{n as r,t as i}from"./jsxRuntime.module-B_u_rUE0.js";import{t as a}from"./Text-Bf8YN4P6.js";import{Ln as o,Rn as s,fn as c,t as l}from"./src-nP44HpfJ.js";var u,d=e((()=>{l(),s(),i(),u={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ButtonIconToggle defaultSelected={false}>{children}</ButtonIconToggle>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:r(o,{defaultSelected:!1,icon:{glyph:c}})})}})),f,p=e((()=>{n(),l(),s(),i(),f={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [isSelected, setIsSelected] = useState(false)

<ButtonIconToggle
  selected={isSelected}
  onSelectedChange={(args) => setIsSelected(args.selected)}
>
  {children}
</ButtonIconToggle>
`}}},render:()=>{let[e,n]=t(!1);return r(`div`,{className:`sb-column sb-width-420 sb-gap-16`,children:[r(a,{children:[`selected: `,e?`true`:`false`]}),r(o,{selected:e,onSelectedChange:e=>n(e.selected),icon:{glyph:c}})]})}}})),m,h,g,_,v,y;e((()=>{d(),p(),l(),s(),i(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/ButtonIconToggle`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:"Extends <a href='/docs/components-buttonicon--docs'>`<ButtonIcon/>`</a> and its props to simplify the creation of toggle buttons."}}},argTypes:{selected:{control:{disable:!0},description:`Value for controlled state.`,table:{type:{summary:`boolean`}}},defaultSelected:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Value for uncontrolled state.`},tabIndex:{control:{type:`number`},description:`Tab order of the focusable element. Omit to keep the default focus behavior.`,table:{type:{summary:`number`}}},onSelectedChange:{action:`changed`,table:{type:{summary:`(args) => void`,detail:`
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
`}}}}},g={args:{defaultSelected:!1,onSelectedChange:m()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<ButtonIconToggle {...args}>
  {children}
</ButtonIconToggle>
`}}},render:e=>r(`div`,{className:`sb-column sb-width-full`,children:r(o,{icon:{glyph:c},...e})})},_=u,v=f,g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`UncontrolledStory`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`ControlledStory`,...v.parameters?.docs?.source}}},y=[`Demo`,`Uncontrolled`,`Controlled`]}))();export{v as Controlled,g as Demo,_ as Uncontrolled,y as __namedExportsOrder,h as default};