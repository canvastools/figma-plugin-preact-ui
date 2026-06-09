import{u as e,d as c}from"./hooks.module-CGIakYml.js";import{f as W}from"./index-BWINGljf.js";import{C as r}from"./ColorPicker-B_l4U-gd.js";import{T as i}from"./Text-9aeIDhQ2.js";import{a as N}from"./TooltipContext-C-9LO0ZZ.js";import"./preact.module-C06nO-nz.js";import"./compat.module-DSB5hssq.js";import"./typedForwardRef-BtG8EZfd.js";import"./color-C4wFq2U9.js";import"./useStringInput-DXX1tuwF.js";import"./Select-CRL4OKf7.js";import"./Icon-tINMxteJ.js";import"./chevronDown-H9cucJds.js";import"./MenuContainer-BVVNV8JR.js";import"./chevronUp-xF5Py006.js";import"./MenuDivider-C1ivzsh3.js";import"./MenuItemOption-Czb7w3PU.js";import"./check-BWphfORf.js";import"./Input-Dl12Gun6.js";import"./useNumericInput-DN6prgmR.js";import"./ControlGroup-V_YVwwkQ.js";import"./TooltipContainer-BVa1RtHA.js";const U={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorPicker 
  defaultColor={{ r: 1, g: 0, b: 0, a: 1 }}
  defaultType="hex"
/>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:e(r,{defaultColor:{r:1,g:0,b:0,a:1},defaultType:"hex"})})},D={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [type, setType] = useState("hex")
const [color, setColor] = useState({ r: 1, g: 0, b: 0, a: 1 })

<ColorPicker
  type={type}
  color={color}
  onColorChange={(args) => setColor(args.color)}
  onTypeChange={(args) => setType(args.type)}
/>
`}}},render:()=>{const[t,A]=c("hex"),[o,V]=c({r:1,g:0,b:0,a:1});return e("div",{className:"sb-column sb-width-420 sb-gap-16",children:[e(i,{children:["type: ",t]}),e(i,{children:["color: ",o.r,", ",o.g,", ",o.b,", ",o.a]}),e(r,{type:t,color:o,onColorChange:d=>V(d.color),onTypeChange:d=>A(d.type)})]})}},O={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorPicker defaultType="hex"/>

<ColorPicker defaultType="hexAlpha"/>

<ColorPicker defaultType="rgba"/>
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-40",children:[e(r,{defaultType:"hex"}),e(r,{defaultType:"hexAlpha"}),e(r,{defaultType:"rgba"})]})},_={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorPicker width={207}/>

<ColorPicker fullWidth/>
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-40",children:[e(r,{width:300}),e(r,{fullWidth:!0})]})},te={title:"Components/ColorPicker",component:r,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},defaultType:{control:{type:"radio"},options:["rgba","hex","hexAlpha"],defaultValue:{summary:"hex"},description:"Picker mode for uncontrolled state.",table:{type:{summary:"ColorPickerType",detail:'"rgba" | "hex" | "hexAlpha"'}}},type:{control:{disable:!0},options:["rgba","hex","hexAlpha"],description:"Picker mode for controlled state.",table:{type:{summary:"ColorPickerType",detail:'"rgba" | "hex" | "hexAlpha"'}}},types:{control:{type:"check"},options:["rgba","hex","hexAlpha"],defaultValue:{summary:'["hex", "hexAlpha", "rgba"]'},description:"Allowed color picker modes in the picker.",table:{type:{summary:"ColorPickerType[]",detail:'["rgba", "hex", "hexAlpha"]'}}},defaultColor:{control:{type:"object"},description:"Color value for uncontrolled state.",defaultValue:{summary:"{ r: 1, g: 0, b: 0, a: 1 }"},table:{type:{summary:"Color",detail:`
{
  r: number
  g: number
  b: number
  a: number
}
`}}},color:{control:{disable:!0},description:"Color value for controlled state.",table:{type:{summary:"Color",detail:`
{
  r: number
  g: number
  b: number
  a: number
}
`}}},showControls:{control:{type:"boolean"},defaultValue:{summary:"true"}},alpha:{control:{type:"boolean"},defaultValue:{summary:"true"},description:"When false, hides hexAlpha mode and opacity controls in other modes."},width:{control:{type:"number"},defaultValue:{summary:"207"}},fullWidth:{control:{type:"boolean"},defaultValue:{summary:"false"},description:"Overrides `width` property."},onTypeChange:{table:{type:{summary:"(args) => void",detail:`
args:{
  type: ColorPickerType
}
`}}},onColorChange:{table:{type:{summary:"(args) => void",detail:`
args:{
  color: Color
  hex: string
  opacity: number
}
`}}}}},a={tags:["!autodocs"],args:{id:void 0,className:"",defaultType:"hex",types:["rgba","hex","hexAlpha"],alpha:!0,defaultColor:{r:1,g:0,b:0,a:1},showControls:!0,width:207,fullWidth:!1,onColorChange:W()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorPicker {...args} />
`}}},render:t=>e("div",{className:"sb-column sb-width-full",children:e(N,{children:e(r,{...t})})})},l=U,s=D,n=O,p=_;var u,m,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    defaultType: 'hex',
    types: ['rgba', 'hex', 'hexAlpha'],
    alpha: true,
    defaultColor: {
      r: 1,
      g: 0,
      b: 0,
      a: 1
    },
    showControls: true,
    width: 207,
    fullWidth: false,
    onColorChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<ColorPicker {...args} />
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <TooltipContext>
        <ColorPicker {...args} />
      </TooltipContext>
    </div>
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var y,g,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:"UncontrolledStory",...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,C,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"ControlledStory",...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var T,w,k;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:"TypeStory",...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var v,P,S;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:"WidthStory",...(S=(P=p.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const ae=["Demo","Uncontrolled","Controlled","Type","Width"];export{s as Controlled,a as Demo,n as Type,l as Uncontrolled,p as Width,ae as __namedExportsOrder,te as default};
