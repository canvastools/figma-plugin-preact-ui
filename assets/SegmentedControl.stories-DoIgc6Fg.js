import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,w as n}from"./compat.module-gcU-nFZT.js";import{n as r,t as i}from"./jsxRuntime.module-CNTwvFFH.js";import{i as a,r as o}from"./Tooltip-DsjGtgh5.js";import{n as s,t as c}from"./Text-Cr-51GRl.js";import{n as l,t as u}from"./link-DAdg43gf.js";import{n as d,t as f}from"./SegmentedControl-DqFdzUOP.js";var p;function m(){return(m=e((()=>{d(),i(),p={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300`,children:r(f,{options:[{value:`list`,label:`List view`},{value:`grid`,label:`Grid view`}],defaultValue:`list`})})}})))()}var h;function g(){return(g=e((()=>{n(),s(),d(),i(),h={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let[e,n]=t(`list`);return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{children:[`value: `,e]}),r(f,{options:[{value:`list`,label:`List view`},{value:`grid`,label:`Grid view`}],value:e,onValueChange:e=>n(e.value)})]})}}})))()}var _;function v(){return(v=e((()=>{d(),i(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<SegmentedControl disabled />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300`,children:r(f,{options:[{value:`list`,label:`List view`},{value:`grid`,label:`Grid view`}],defaultValue:`list`,disabled:!0})})}})))()}var y;function b(){return(b=e((()=>{u(),a(),d(),i(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300`,children:r(o,{children:r(f,{options:[{value:`list`,label:`List view`,icon:{glyph:l,size:24}},{value:`grid`,label:`Grid view`,icon:{glyph:l,size:24}}],defaultValue:`list`})})})}})))()}var x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{m(),g(),v(),b(),d(),i(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/SegmentedControl`,component:f,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},options:{control:{disable:!0},description:`<strong>*</strong>Array of options to render in the control.`,table:{type:{summary:`SegmentedControlOptionData[]`,detail:`
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
          `}}}}},C={args:{id:void 0,className:``,defaultValue:`list`,disabled:!1,fullWidth:!1,onValueChange:x()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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

<SegmentedControl options={options} {...args} />`}}},render:e=>{let t=[{value:`list`,label:`List view`},{value:`grid`,label:`Grid view`}];return r(`div`,{className:`sb-column`,children:r(f,{...e,options:t})})}},w=p,T=h,E=_,D=y,O=[`Demo`,`Uncontrolled`,`Controlled`,`Disabled`,`Icons`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`UncontrolledStory`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`ControlledStory`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`DisabledStory`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`IconsStory`,...D.parameters?.docs?.source}}}})))()}k();export{T as Controlled,C as Demo,E as Disabled,D as Icons,w as Uncontrolled,O as __namedExportsOrder,S as default};