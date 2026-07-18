import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,w as n}from"./compat.module-BiyPQZFw.js";import{n as r,t as i}from"./jsxRuntime.module-XYsEgyrh.js";import{t as a}from"./Text-Dx8we2OT.js";import{Zn as o,mn as s,t as c,v as l,y as u}from"./src-fsSRAyCS.js";var d,f=e((()=>{u(),i(),d={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300`,children:r(l,{options:[{value:`list`,label:`List view`},{value:`grid`,label:`Grid view`}],defaultValue:`list`})})}})),p,m=e((()=>{n(),c(),u(),i(),p={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let[e,n]=t(`list`);return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(a,{children:[`value: `,e]}),r(l,{options:[{value:`list`,label:`List view`},{value:`grid`,label:`Grid view`}],value:e,onValueChange:e=>n(e.value)})]})}}})),h,g=e((()=>{u(),i(),h={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<SegmentedControl disabled />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300`,children:r(l,{options:[{value:`list`,label:`List view`},{value:`grid`,label:`Grid view`}],defaultValue:`list`,disabled:!0})})}})),_,v=e((()=>{c(),u(),i(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300`,children:r(o,{children:r(l,{options:[{value:`list`,label:`List view`,icon:{glyph:s,size:24}},{value:`grid`,label:`Grid view`,icon:{glyph:s,size:24}}],defaultValue:`list`})})})}})),y,b,x,S,C,w,T,E;e((()=>{f(),m(),g(),v(),u(),i(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/SegmentedControl`,component:l,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},options:{control:{disable:!0},description:`<strong>*</strong>Array of options to render in the control.`,table:{type:{summary:`SegmentedControlOptionData[]`,detail:`
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

          `}}},value:{control:{disable:!0},description:`Value for controlled state.`,table:{type:{summary:`string`}}},defaultValue:{control:{type:`text`},description:`Value for uncontrolled state.`,table:{type:{summary:`string`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},fullWidth:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},tabIndex:{control:{type:`number`},description:`Tab order of the active segment button. Inactive segments stay at -1. Omit for roving tabindex (active: 0).`,table:{type:{summary:`number`}}},onValueChange:{table:{type:{summary:`(args) => void`,detail:`
args: {
  event: MouseEvent | KeyboardEvent
  value: string
}
          `}}}}},x={args:{id:void 0,className:``,defaultValue:`list`,disabled:!1,fullWidth:!1,onValueChange:y()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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

<SegmentedControl options={options} {...args} />`}}},render:e=>{let t=[{value:`list`,label:`List view`},{value:`grid`,label:`Grid view`}];return r(`div`,{className:`sb-column`,children:r(l,{...e,options:t})})}},S=d,C=p,w=h,T=_,x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
        <SegmentedControl {...args} options={sampleOptionsWithoutIcons} />
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`UncontrolledStory`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`ControlledStory`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`DisabledStory`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`IconsStory`,...T.parameters?.docs?.source}}},E=[`Demo`,`Uncontrolled`,`Controlled`,`Disabled`,`Icons`]}))();export{C as Controlled,x as Demo,w as Disabled,T as Icons,S as Uncontrolled,E as __namedExportsOrder,b as default};