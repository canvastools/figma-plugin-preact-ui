import{u as e,d as N}from"./hooks.module-6Sbq__eq.js";import{f as r}from"./index-B4E_jmCM.js";import{T as t}from"./TimePicker-2RwUjXRq.js";import{T as U}from"./Text-BbQ_b1VF.js";import{a as F}from"./TooltipContext-DB8mQxid.js";import"./preact.module-gH5CyEHP.js";import"./compat.module-CHmB9zKI.js";import"./clsx-D-sk6UNw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./typedForwardRef-CtFJgl6m.js";import"./TooltipContainer-CJCq4A9v.js";const E={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TimePicker defaultDate={new Date()}/>
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:e(t,{defaultDate:new Date})})},K={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [date, setDate] = useState("9:41")

<TimePicker
  date={date}
  onTimeChange={(args) => setDate(args.time)}
/>
`}}},render:()=>{const[a,C]=N("9:41");return e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(U,{children:["date: ",a]}),e(t,{date:a,onTimeChange:H=>C(H.time)})]})}},L={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TimePicker variant="default" />

<TimePicker variant="list" />
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-40",children:[e(t,{variant:"default",label:"Label",defaultDate:new Date}),e(t,{variant:"list",label:"Label",defaultDate:new Date})]})},B={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TimePicker
  hourPlaceholder="HH"
  minutePlaceholder="mm"
/>
`}}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(t,{hourPlaceholder:"HH",minutePlaceholder:"mm"})})},W={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TimePicker disabled />
`}}},render:()=>e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(t,{disabled:!0}),e(t,{disabled:!0,date:"9:41"})]})},R={title:"Components/TimePicker",component:t,parameters:{docs:{description:{component:"A styled wrapper around the [react-time-picker](https://github.com/wojtekmaj/react-time-picker) component."}}},tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},locale:{control:{type:"text"},defaultValue:{summary:"en-US"}},variant:{control:{type:"radio"},defaultValue:{summary:"default"},options:["default","list"]},label:{control:{type:"text"}},defaultDate:{control:{type:"date"},description:"Date for uncontrolled state.",table:{type:{summary:"TimePickerDate",detail:"Date | string | number | null"}}},date:{control:{disable:!0},defaultValue:{summary:"null"},description:"Date for controlled state.",table:{type:{summary:"TimePickerDate",detail:"Date | string | number | null"}}},format:{control:{type:"text"},defaultValue:{summary:"HH:mm"},desription:"Supported values are: `H`, `HH`, `h`, `hh`, `m`, `mm`, `s`, `ss`, `a`"},hourPlaceholder:{control:{type:"text"},defaultValue:{summary:"HH"}},minutePlaceholder:{control:{type:"text"},defaultValue:{summary:"mm"}},maxTime:{control:{type:"text"},defaultValue:{summary:"23:59"}},minTime:{control:{type:"text"},defaultValue:{summary:"00:00"}},disabled:{control:{type:"boolean"},defaultValue:{summary:"false"}},autoFocus:{control:{type:"boolean"},defaultValue:{summary:"false"}},tooltip:{control:{type:"text"}},grouped:{control:{type:"radio"},defaultValue:{summary:"undefined"},options:[void 0,"first","last","middle"]},maxWidth:{control:{type:"number"},description:"Maximum width of the TimePicker (excluding label). Only applicable when variant is `list`.",table:{type:{summary:"number | string"}}},onTimeChange:{description:"`date` argument will be returned as `Date` if the `date` or `defaultDate` is provided as Date, otherwise it will be `undefined`.",table:{type:{summary:"(args) => void",detail:`
args: {
  date: TimePickerDate | undefined
  time: string
}`}}},onBlur:{table:{type:{summary:"(args) => void",detail:`
args: {
    event: FocusEvent
  date: TimePickerDate | undefined
  time: string
}`}}},onFocus:{table:{type:{summary:"(args) => void",detail:`
args: {
  event: FocusEvent
  date: TimePickerDate | undefined
  time: string
}`}}},onKeyDown:{table:{type:{summary:"(args) => void",detail:`
args: {
  event: KeyboardEvent
  date: TimePickerDate | undefined
  time: string
}`}}}}},o={tags:["!autodocs"],args:{id:void 0,className:"",locale:"en-US",variant:"default",label:"Label",defaultDate:new Date,format:"HH:mm",hourPlaceholder:"HH",minutePlaceholder:"mm",maxTime:"23:59",minTime:"00:00",disabled:!1,autoFocus:!1,tooltip:"TimePicker tooltip",maxWidth:void 0,grouped:void 0,onTimeChange:r(),onBlur:r(),onFocus:r(),onKeyDown:r()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TimePicker {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <TimePicker {...args} />
</TooltipContext>
`}}},render:a=>e("div",{className:"sb-column sb-width-300",children:e(F,{children:e(t,{...a})})})},n=E,s=K,l=L,i=B,d=W;var m,c,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!autodocs'],
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
        language: 'tsx',
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
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,g,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"UncontrolledStory",...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,y,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:"ControlledStory",...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var T,v,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:"VariantStory",...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var D,x,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:"PlaceholderStory",...(P=(x=i.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var k,V,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:"DisabledStory",...(S=(V=d.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};const X=["Demo","Uncontrolled","Controlled","Variant","Placeholder","Disabled"];export{s as Controlled,o as Demo,d as Disabled,i as Placeholder,n as Uncontrolled,l as Variant,X as __namedExportsOrder,R as default};
