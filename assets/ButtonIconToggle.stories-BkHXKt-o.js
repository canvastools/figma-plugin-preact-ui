import{u as e,d as S}from"./hooks.module-DDuEt2mE.js";import{f as y}from"./index-B4E_jmCM.js";import{B as s}from"./ButtonIconToggle-KEev3HKe.js";import{l as a}from"./link-DCFG2DBQ.js";import{T as I}from"./Text-BooB5DEX.js";import"./preact.module-D68vdB8i.js";import"./ButtonIcon-CZSSh5qW.js";import"./Icon-C_1AiDxm.js";import"./typedForwardRef-eUJP59ez.js";import"./compat.module-AmaJGl25.js";import"./Tooltip-2n7DDmmb.js";import"./TooltipContainer-BRY08nvC.js";const v={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ButtonIconToggle defaultSelected={false}>{children}</ButtonIconToggle>
`}}},render:()=>e("div",{className:"sb-column sb-width-420 sb-gap-16",children:e(s,{defaultSelected:!1,icon:{glyph:a}})})},B={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [isSelected, setIsSelected] = useState(false)

<ButtonIconToggle
  selected={isSelected}
  onSelectedChange={(args) => setIsSelected(args.selected)}
>
  {children}
</ButtonIconToggle>
`}}},render:()=>{const[o,b]=S(!1);return e("div",{className:"sb-column sb-width-420 sb-gap-16",children:[e(I,{children:["selected: ",o?"true":"false"]}),e(s,{selected:o,onSelectedChange:h=>b(h.selected),icon:{glyph:a}})]})}},O={title:"Components/ButtonIconToggle",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Extends <a href='/docs/components-buttonicon--docs'>`<ButtonIcon/>`</a> and its props to simplify the creation of toggle buttons."}}},argTypes:{selected:{control:{disable:!0},description:"Value for controlled state.",table:{type:{summary:"boolean"}}},defaultSelected:{control:{type:"boolean"},defaultValue:!1,description:"Value for uncontrolled state."},tabIndex:{control:{type:"number"},description:"Tab order of the focusable element. Omit to keep the default focus behavior.",table:{type:{summary:"number"}}},onSelectedChange:{action:"changed",table:{type:{summary:"(args) => void",detail:`
args:{
  event: MouseEvent,
  selected: boolean
}
`}}},"...ButtonIconProps":{control:{disable:!0},table:{type:{summary:"ButtonIconProps",detail:`
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
`}}}}},t={tags:["!autodocs"],args:{defaultSelected:!1,onSelectedChange:y()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ButtonIconToggle {...args}>
  {children}
</ButtonIconToggle>
`}}},render:o=>e("div",{className:"sb-column sb-width-full",children:e(s,{icon:{glyph:a},...o})})},n=v,r=B;var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!autodocs'],
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
        language: 'tsx',
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,u,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"UncontrolledStory",...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,m,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"ControlledStory",...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const _=["Demo","Uncontrolled","Controlled"];export{r as Controlled,t as Demo,n as Uncontrolled,_ as __namedExportsOrder,O as default};
