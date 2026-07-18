import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,w as n}from"./compat.module-BiyPQZFw.js";import{n as r,t as i}from"./jsxRuntime.module-XYsEgyrh.js";import{t as a}from"./Text-Dx8we2OT.js";import{Zn as o,n as s,r as c,t as l}from"./src-BW54aR7x.js";var u,d=e((()=>{c(),i(),u={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<TimePicker defaultDate={new Date()}/>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:r(s,{defaultDate:new Date})})}})),f,p=e((()=>{n(),l(),c(),i(),f={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [date, setDate] = useState("9:41")

<TimePicker
  date={date}
  onTimeChange={(args) => setDate(args.time)}
/>
`}}},render:()=>{let[e,n]=t(`9:41`);return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(a,{children:[`date: `,e]}),r(s,{date:e,onTimeChange:e=>n(e.time)})]})}}})),m,h=e((()=>{c(),i(),m={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<TimePicker variant="default" />

<TimePicker variant="list" />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-40`,children:[r(s,{variant:`default`,label:`Label`,defaultDate:new Date}),r(s,{variant:`list`,label:`Label`,defaultDate:new Date})]})}})),g,_=e((()=>{c(),i(),g={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{language:`tsx`,code:`
<TimePicker
  hourPlaceholder="HH"
  minutePlaceholder="mm"
/>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300`,children:r(s,{hourPlaceholder:`HH`,minutePlaceholder:`mm`})})}})),v,y=e((()=>{c(),i(),v={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<TimePicker disabled />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(s,{disabled:!0}),r(s,{disabled:!0,date:`9:41`})]})}})),b,x,S,C,w,T,E,D,O;e((()=>{l(),d(),p(),h(),_(),y(),c(),i(),{fn:b}=__STORYBOOK_MODULE_TEST__,x={title:`Components/TimePicker`,component:s,parameters:{docs:{description:{component:`A styled wrapper around the [react-time-picker](https://github.com/wojtekmaj/react-time-picker) component.`}}},tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},locale:{control:{type:`text`},table:{defaultValue:{summary:`en-US`}}},variant:{control:{type:`radio`},table:{defaultValue:{summary:`default`}},options:[`default`,`list`]},label:{control:{type:`text`}},defaultDate:{control:{type:`date`},description:`Date for uncontrolled state.`,table:{type:{summary:`TimePickerDate`,detail:`Date | string | number | null`}}},date:{control:{disable:!0},description:`Date for controlled state.`,table:{defaultValue:{summary:`null`},type:{summary:`TimePickerDate`,detail:`Date | string | number | null`}}},format:{control:{type:`text`},table:{defaultValue:{summary:`HH:mm`}},desription:"Supported values are: `H`, `HH`, `h`, `hh`, `m`, `mm`, `s`, `ss`, `a`"},hourPlaceholder:{control:{type:`text`},table:{defaultValue:{summary:`HH`}}},minutePlaceholder:{control:{type:`text`},table:{defaultValue:{summary:`mm`}}},maxTime:{control:{type:`text`},table:{defaultValue:{summary:`23:59`}}},minTime:{control:{type:`text`},table:{defaultValue:{summary:`00:00`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},autoFocus:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},tooltip:{control:{type:`text`}},grouped:{control:{type:`radio`},table:{defaultValue:{summary:`undefined`}},options:[void 0,`first`,`last`,`middle`]},maxWidth:{control:{type:`number`},description:"Maximum width of the TimePicker (excluding label). Only applicable when variant is `list`.",table:{type:{summary:`number | string`}}},onTimeChange:{description:"`date` argument will be returned as `Date` if the `date` or `defaultDate` is provided as Date, otherwise it will be `undefined`.",table:{type:{summary:`(args) => void`,detail:`
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
}`}}}}},S={args:{id:void 0,className:``,locale:`en-US`,variant:`default`,label:`Label`,defaultDate:new Date,format:`HH:mm`,hourPlaceholder:`HH`,minutePlaceholder:`mm`,maxTime:`23:59`,minTime:`00:00`,disabled:!1,autoFocus:!1,tooltip:`TimePicker tooltip`,maxWidth:void 0,grouped:void 0,onTimeChange:b(),onBlur:b(),onFocus:b(),onKeyDown:b()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<TimePicker {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <TimePicker {...args} />
</TooltipContext>
`}}},render:e=>r(`div`,{className:`sb-column sb-width-300`,children:r(o,{children:r(s,{...e})})})},C=u,w=f,T=m,E=g,D=v,S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`UncontrolledStory`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`ControlledStory`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`VariantStory`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`PlaceholderStory`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`DisabledStory`,...D.parameters?.docs?.source}}},O=[`Demo`,`Uncontrolled`,`Controlled`,`Variant`,`Placeholder`,`Disabled`]}))();export{w as Controlled,S as Demo,D as Disabled,E as Placeholder,C as Uncontrolled,T as Variant,O as __namedExportsOrder,x as default};