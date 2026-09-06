import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,w as n}from"./compat.module-gcU-nFZT.js";import{n as r,t as i}from"./jsxRuntime.module-CNTwvFFH.js";import{i as a,r as o}from"./Tooltip-DsjGtgh5.js";import{n as s,t as c}from"./Text-Cr-51GRl.js";import{n as l,t as u}from"./TimePicker-CzSkusRz.js";var d;function f(){return(f=e((()=>{l(),i(),d={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<TimePicker defaultDate={new Date()}/>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:r(u,{defaultDate:new Date})})}})))()}var p;function m(){return(m=e((()=>{n(),s(),l(),i(),p={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [date, setDate] = useState("9:41")

<TimePicker
  date={date}
  onTimeChange={(args) => setDate(args.time)}
/>
`}}},render:()=>{let[e,n]=t(`9:41`);return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{children:[`date: `,e]}),r(u,{date:e,onTimeChange:e=>n(e.time)})]})}}})))()}var h;function g(){return(g=e((()=>{l(),i(),h={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<TimePicker variant="default" />

<TimePicker variant="list" />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-40`,children:[r(u,{variant:`default`,label:`Label`,defaultDate:new Date}),r(u,{variant:`list`,label:`Label`,defaultDate:new Date})]})}})))()}var _;function v(){return(v=e((()=>{l(),i(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{language:`tsx`,code:`
<TimePicker
  hourPlaceholder="HH"
  minutePlaceholder="mm"
/>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300`,children:r(u,{hourPlaceholder:`HH`,minutePlaceholder:`mm`})})}})))()}var y;function b(){return(b=e((()=>{l(),i(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<TimePicker disabled />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(u,{disabled:!0}),r(u,{disabled:!0,date:`9:41`})]})}})))()}var x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{a(),f(),m(),g(),v(),b(),l(),i(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/TimePicker`,component:u,parameters:{docs:{description:{component:`A styled wrapper around the [react-time-picker](https://github.com/wojtekmaj/react-time-picker) component.`}}},tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},locale:{control:{type:`text`},table:{defaultValue:{summary:`en-US`}}},variant:{control:{type:`radio`},table:{defaultValue:{summary:`default`}},options:[`default`,`list`]},label:{control:{type:`text`}},defaultDate:{control:{type:`date`},description:`Date for uncontrolled state.`,table:{type:{summary:`TimePickerDate`,detail:`Date | string | number | null`}}},date:{control:{disable:!0},description:`Date for controlled state.`,table:{defaultValue:{summary:`null`},type:{summary:`TimePickerDate`,detail:`Date | string | number | null`}}},format:{control:{type:`text`},table:{defaultValue:{summary:`HH:mm`}},desription:"Supported values are: `H`, `HH`, `h`, `hh`, `m`, `mm`, `s`, `ss`, `a`"},hourPlaceholder:{control:{type:`text`},table:{defaultValue:{summary:`HH`}}},minutePlaceholder:{control:{type:`text`},table:{defaultValue:{summary:`mm`}}},maxTime:{control:{type:`text`},table:{defaultValue:{summary:`23:59`}}},minTime:{control:{type:`text`},table:{defaultValue:{summary:`00:00`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},autoFocus:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},tooltip:{control:{type:`text`}},grouped:{control:{type:`radio`},table:{defaultValue:{summary:`undefined`}},options:[void 0,`first`,`last`,`middle`]},maxWidth:{control:{type:`number`},description:"Maximum width of the TimePicker (excluding label). Only applicable when variant is `list`.",table:{type:{summary:`number | string`}}},onTimeChange:{description:"`date` argument will be returned as `Date` if the `date` or `defaultDate` is provided as Date, otherwise it will be `undefined`.",table:{type:{summary:`(args) => void`,detail:`
args: {
  date: TimePickerDate | undefined
  time: string
}`}}},onBlur:{table:{type:{summary:`(args) => void`,detail:`
args: {
    event: FocusEvent
  date: TimePickerDate | undefined
  time: string
}`}}},onFocus:{table:{type:{summary:`(args) => void`,detail:`
args: {
  event: FocusEvent
  date: TimePickerDate | undefined
  time: string
}`}}},onKeyDown:{table:{type:{summary:`(args) => void`,detail:`
args: {
  event: KeyboardEvent
  date: TimePickerDate | undefined
  time: string
}`}}}}},C={args:{id:void 0,className:``,locale:`en-US`,variant:`default`,label:`Label`,defaultDate:new Date,format:`HH:mm`,hourPlaceholder:`HH`,minutePlaceholder:`mm`,maxTime:`23:59`,minTime:`00:00`,disabled:!1,autoFocus:!1,tooltip:`TimePicker tooltip`,maxWidth:void 0,grouped:void 0,onTimeChange:x(),onBlur:x(),onFocus:x(),onKeyDown:x()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<TimePicker {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <TimePicker {...args} />
</TooltipContext>
`}}},render:e=>r(`div`,{className:`sb-column sb-width-300`,children:r(o,{children:r(u,{...e})})})},w=d,T=p,E=h,D=_,O=y,k=[`Demo`,`Uncontrolled`,`Controlled`,`Variant`,`Placeholder`,`Disabled`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    locale: 'en-US',
    variant: 'default',
    label: 'Label',
    defaultDate: new Date(),
    format: 'HH:mm',
    hourPlaceholder: 'HH',
    minutePlaceholder: 'mm',
    maxTime: '23:59',
    minTime: '00:00',
    disabled: false,
    autoFocus: false,
    tooltip: 'TimePicker tooltip',
    maxWidth: undefined,
    grouped: undefined,
    onTimeChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
    onKeyDown: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<TimePicker {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <TimePicker {...args} />
</TooltipContext>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-300">
      <TooltipContext>
        <TimePicker {...args} />
      </TooltipContext>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`UncontrolledStory`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`ControlledStory`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`VariantStory`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`PlaceholderStory`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`DisabledStory`,...O.parameters?.docs?.source}}}})))()}A();export{T as Controlled,C as Demo,O as Disabled,D as Placeholder,w as Uncontrolled,E as Variant,k as __namedExportsOrder,S as default};