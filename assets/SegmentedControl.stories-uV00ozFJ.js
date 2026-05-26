import{u as e,d as L}from"./hooks.module-6Sbq__eq.js";import{f as I}from"./index-B4E_jmCM.js";import{S as o}from"./SegmentedControl-CZJcLYAO.js";import{T as N}from"./Text-BbQ_b1VF.js";import{a as D}from"./TooltipContext-DB8mQxid.js";import{l as d}from"./link-BlSd8q6h.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./Icon-C6_npEhI.js";import"./TooltipContainer-CJCq4A9v.js";const T={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(o,{options:[{value:"list",label:"List view"},{value:"grid",label:"Grid view"}],defaultValue:"list"})})},k={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>{const[t,n]=L("list");return e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(N,{children:["value: ",t]}),e(o,{options:[{value:"list",label:"List view"},{value:"grid",label:"Grid view"}],value:t,onValueChange:G=>n(G.value)})]})}},O={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(D,{children:e(o,{options:[{value:"list",label:"List view",icon:{glyph:d,size:24}},{value:"grid",label:"Grid view",icon:{glyph:d,size:24}}],defaultValue:"list"})})})},H={title:"Components/SegmentedControl",component:o,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},options:{control:{disable:!0},description:"<strong>*</strong>Array of options to render in the control.",table:{type:{summary:"SegmentedControlOptionData[]",detail:`
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

          `}}},value:{control:{disable:!0},description:"Value for controlled state.",table:{type:{summary:"string"}}},defaultValue:{control:{type:"text"},description:"Value for uncontrolled state.",table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},fullWidth:{control:{type:"boolean"},defaultValue:{summary:!1}},onValueChange:{table:{type:{summary:"(args) => void",detail:`
args: {
  event: MouseEvent | KeyboardEvent
  value: string
}
          `}}}}},s={tags:["!autodocs"],args:{id:void 0,className:"",defaultValue:"list",disabled:!1,fullWidth:!1,onValueChange:I()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{code:`
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

<SegmentedControl options={options} {...args} />`}}},render:t=>e("div",{className:"sb-column",children:e(o,{options:[{value:"list",label:"List view"},{value:"grid",label:"Grid view"}],...t})})},l=T,a=k,r=O,i=W;var u,c,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,v;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:"UncontrolledStory",...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,f,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"ControlledStory",...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var y,h,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:"DisabledStory",...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var V,C,x;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:"IconsStory",...(x=(C=i.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const J=["Demo","Uncontrolled","Controlled","Disabled","Icons"];export{a as Controlled,s as Demo,r as Disabled,i as Icons,l as Uncontrolled,J as __namedExportsOrder,H as default};
