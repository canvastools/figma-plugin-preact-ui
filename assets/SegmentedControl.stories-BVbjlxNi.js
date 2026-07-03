import{u as e,d as I}from"./hooks.module-DDuEt2mE.js";import{f as L}from"./index-B4E_jmCM.js";import{S as o}from"./SegmentedControl-Ddp8sqsd.js";import{T as N}from"./Text-BooB5DEX.js";import{a as T}from"./Tooltip-2n7DDmmb.js";import{l as d}from"./link-DCFG2DBQ.js";import"./preact.module-D68vdB8i.js";import"./Icon-C_1AiDxm.js";import"./typedForwardRef-eUJP59ez.js";import"./compat.module-AmaJGl25.js";import"./TooltipContainer-BRY08nvC.js";const D={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const options = [
  {
    value: "list",
    label: "List view",
  },
  {
    value: "grid",
    label: "Grid view",
  },
]

<SegmentedControl
  defaultValue="list"
  options={options}
/>
`}}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(o,{options:[{value:"list",label:"List view"},{value:"grid",label:"Grid view"}],defaultValue:"list"})})},O={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [value, setValue] = useState("list")

const options = [
  {
    value: "list",
    label: "List view",
  },
  {
    value: "grid",
    label: "Grid view",
  },
]

<SegmentedControl
  value={value}
  onValueChange={(args) => setValue(args.value)}
  options={options}
/>
`}}},render:()=>{const[t,n]=I("list");return e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(N,{children:["value: ",t]}),e(o,{options:[{value:"list",label:"List view"},{value:"grid",label:"Grid view"}],value:t,onValueChange:G=>n(G.value)})]})}},k={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<SegmentedControl disabled />
`}}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(o,{options:[{value:"list",label:"List view"},{value:"grid",label:"Grid view"}],defaultValue:"list",disabled:!0})})},W={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
import { viewList, viewGrid } from "figma-plugin-preact-ui"

const options = [
  {
    value: "list",
    label: "List view",
    icon: {
      glyph: link,
      size: 24,
    },
  },
  {
    value: "grid",
    label: "Grid view",
    icon: {
      glyph: link,
      size: 24,
    },
  },
]

<SegmentedControl
  options={options}
  defaultValue="list"
/>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <SegmentedControl
    options={options}
    defaultValue="list"
  />
</TooltipContext>
`}}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(T,{children:e(o,{options:[{value:"list",label:"List view",icon:{glyph:d,size:24}},{value:"grid",label:"Grid view",icon:{glyph:d,size:24}}],defaultValue:"list"})})})},H={title:"Components/SegmentedControl",component:o,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},options:{control:{disable:!0},description:"<strong>*</strong>Array of options to render in the control.",table:{type:{summary:"SegmentedControlOptionData[]",detail:`
{
  value: string // required
  label: string // required
  icon: IconPropsPick 
}

// Types

type IconPropsPick = {
  glyph: Glyph
  variant: "default" | "upscaled"
  size: 16 | 24
}

          `}}},value:{control:{disable:!0},description:"Value for controlled state.",table:{type:{summary:"string"}}},defaultValue:{control:{type:"text"},description:"Value for uncontrolled state.",table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},fullWidth:{control:{type:"boolean"},defaultValue:{summary:!1}},tabIndex:{control:{type:"number"},description:"Tab order of the active segment button. Inactive segments stay at -1. Omit for roving tabindex (active: 0).",table:{type:{summary:"number"}}},onValueChange:{table:{type:{summary:"(args) => void",detail:`
args: {
  event: MouseEvent | KeyboardEvent
  value: string
}
          `}}}}},s={tags:["!autodocs"],args:{id:void 0,className:"",defaultValue:"list",disabled:!1,fullWidth:!1,onValueChange:L()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{code:`
const options = [
  {
    value: "list",
    label: "List view",
  },
  {
    value: "grid",
    label: "Grid view",
  },
]

<SegmentedControl options={options} {...args} />`}}},render:t=>e("div",{className:"sb-column",children:e(o,{options:[{value:"list",label:"List view"},{value:"grid",label:"Grid view"}],...t})})},a=D,l=O,r=k,i=W;var u,c,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    defaultValue: 'list',
    disabled: false,
    fullWidth: false,
    onValueChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
const options = [
  {
    value: "list",
    label: "List view",
  },
  {
    value: "grid",
    label: "Grid view",
  },
]

<SegmentedControl options={options} {...args} />\`
      }
    }
  },
  render: args => {
    const sampleOptionsWithoutIcons: SegmentedControlOptionData[] = [{
      value: 'list',
      label: 'List view'
    }, {
      value: 'grid',
      label: 'Grid view'
    }];
    return <div className="sb-column">
        <SegmentedControl options={sampleOptionsWithoutIcons} {...args} />
      </div>;
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"UncontrolledStory",...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,f,w;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"ControlledStory",...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var y,h,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:"DisabledStory",...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var V,C,x;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:"IconsStory",...(x=(C=i.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const J=["Demo","Uncontrolled","Controlled","Disabled","Icons"];export{l as Controlled,s as Demo,r as Disabled,i as Icons,a as Uncontrolled,J as __namedExportsOrder,H as default};
