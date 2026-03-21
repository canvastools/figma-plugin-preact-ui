import{u as e,d as S}from"./hooks.module-CGIakYml.js";import{f as y}from"./index-BWINGljf.js";import{B as s}from"./ButtonIconToggle-C-1nr-59.js";import{l}from"./link-BEZi4mus.js";import{T as I}from"./Text-9aeIDhQ2.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./ButtonIcon-DRFFAPoT.js";import"./Icon-DYEerEJN.js";import"./TooltipContext-DJAjWLpJ.js";import"./TooltipContainer-BVa1RtHA.js";const v={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ButtonIconToggle defaultSelected={false}>{children}</ButtonIconToggle>
`}}},render:()=>e("div",{className:"sb-column sb-width-420 sb-gap-16",children:e(s,{defaultSelected:!1,icon:{glyph:l}})})},B={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [isSelected, setIsSelected] = useState(false)

<ButtonIconToggle
  selected={isSelected}
  onSelectedChange={(args) => setIsSelected(args.selected)}
>
  {children}
</ButtonIconToggle>
`}}},render:()=>{const[o,h]=S(!1);return e("div",{className:"sb-column sb-width-420 sb-gap-16",children:[e(I,{children:["selected: ",o?"true":"false"]}),e(s,{selected:o,onSelectedChange:b=>h(b.selected),icon:{glyph:l}})]})}},_={title:"Components/ButtonIconToggle",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Extends <a href='/docs/components-buttonicon--docs'>`<ButtonIcon/>`</a> and its props to simplify the creation of toggle buttons."}}},argTypes:{selected:{control:{disable:!0},description:"Value for controlled state.",table:{type:{summary:"boolean"}}},defaultSelected:{control:{type:"boolean"},defaultValue:!1,description:"Value for uncontrolled state."},onSelectedChange:{action:"changed",table:{type:{summary:"(args) => void",detail:`
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
`}}},render:o=>e("div",{className:"sb-column sb-width-full",children:e(s,{icon:{glyph:l},...o})})},n=v,r=B;var a,c,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,u,g;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"UncontrolledStory",...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,m,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"ControlledStory",...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const z=["Demo","Uncontrolled","Controlled"];export{r as Controlled,t as Demo,n as Uncontrolled,z as __namedExportsOrder,_ as default};
