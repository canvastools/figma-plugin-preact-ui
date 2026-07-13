import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,w as n}from"./compat.module-BbhDrffC.js";import{n as r,t as i}from"./jsxRuntime.module-B_u_rUE0.js";import{t as a}from"./Text-Bf8YN4P6.js";import{It as o,Lt as s,Zt as c,t as l}from"./src-nP44HpfJ.js";var u,d=e((()=>{n(),l(),o(),i(),u={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`To replicate an experience similar to Figma, errors should be avoided and default values should be applied in most cases.<br/>Value normalisation ensures that a value is always returned.`},source:{code:`
const numericInput = useNumericInput({
  value: "",
  unit: "°",
  min: -180,
  max: 180,
  precision: 0,
  step: 1,
  stepLarge: 10,
  required: false,
  normalizeOnError: true,
})

const [inputValue, setInputValue] = useState(numericInput.formattedValue ?? "")

<Input
  value={inputValue}
  placeholder="Rotation angle"
  onValueChange={(args) => setInputValue(args.value)}
  onBlur={(args) => {
    const parsed = numericInput.parse(args.value)

    if (
      parsed.error === "required" ||
      parsed.error === "invalid_number"
    ) {
      setInputValue(String("Auto"))
      return
    }
    
    setInputValue(String(parsed.formattedValue))
  }}
  onKeyDown={(args) =>
    numericInput.handleKeyDown(args, (next) => setInputValue(String(next)))
  }
/>`}}},render:()=>{let e=s({value:45,unit:`°`,min:-180,max:180,precision:0,step:1,stepLarge:10,required:!1,doubleValue:!1,normalizeOnError:!0}),[n,i]=t(e.formattedValue??``),[o,l]=t({rawValue:`45`,normalizedValue:45,formattedValue:`45°`});return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{value:n,placeholder:`Rotation angle`,onValueChange:e=>i(e.value),onBlur:t=>{let n=e.parse(t.value);if(l({rawValue:n.rawValue,normalizedValue:n.normalizedValue??0,formattedValue:n.formattedValue??``}),n.error===`required`||n.error===`invalid_number`){i(`Auto`);return}i(String(n.formattedValue))},onKeyDown:t=>e.handleKeyDown(t,e=>i(String(e)))}),r(a,{children:[`rawValue: "`,o.rawValue,`"`]}),r(a,{children:[`normalizedValue: `,o.normalizedValue]}),r(a,{children:[`formattedValue: "`,o.formattedValue,`"`]})]})}}})),f,p=e((()=>{n(),l(),o(),i(),f={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`A double value can be used for fields that combine pairs of values, such as padding top/bottom and left/right.<br/>When a comma is present, the hook returns an array of values.`},source:{code:`
const numericInput = useNumericInput({
  value: "",
  min: 0,
  max: 100,
  precision: 0,
  step: 1,
  stepLarge: 10,
  required: false,
  doubleValue: true,
  normalizeOnError: true,
})

const [inputValue, setInputValue] = useState(numericInput.formattedValues?.join(", ") ?? numericInput.formattedValue ?? "")

<Input
  value={inputValue}
  placeholder="10, 20"
  onValueChange={(args) => setInputValue(args.value)}
  onBlur={(args) => {
    const parsed = numericInput.parse(args.value)

    if (
      parsed.error === "required" ||
      parsed.error === "invalid_number"
    ) {
      setInputValue(String("Auto"))
      return
    }

    if (parsed.formattedValues) {
      setInputValue(parsed.formattedValues.join(", "))
    } else {
      setInputValue(parsed.formattedValue ?? "")
    }
  }}
  onKeyDown={(args) =>
    numericInput.handleKeyDown(args, (next) => setInputValue(String(next)))
  }
/>

`}}},render:()=>{let e=s({value:`25,75`,doubleValue:!0,min:0,max:100,precision:0,step:1,stepLarge:10,required:!1,normalizeOnError:!0}),[n,i]=t(e.formattedValues?.join(`, `)??e.formattedValue??``),[o,l]=t({rawValue:`25,75`,normalizedValues:[25,75],formattedValues:[`25`,`75`]});return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{value:n,placeholder:`10, 20`,onValueChange:e=>i(e.value),onBlur:t=>{let n=e.parse(t.value);if(l({rawValue:n.rawValue,normalizedValues:n.normalizedValues??[],formattedValues:n.formattedValues??[]}),n.error===`required`||n.error===`invalid_number`){i(`Auto`);return}n.formattedValues?i(n.formattedValues.join(`, `)):i(n.formattedValue??``)},onKeyDown:t=>e.handleKeyDown(t,e=>i(String(e)))}),r(a,{children:[`rawValue: "`,o.rawValue,`"`]}),r(a,{children:[`normalizedValues: [`,o.normalizedValues[0],`, `,o.normalizedValues[1],`]`]}),r(a,{children:[`formattedValues: ["`,o.formattedValues[0],`", "`,o.formattedValues[1],`"]`]})]})}}})),m,h=e((()=>{n(),l(),o(),i(),m={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"Math expressions can be evaluated before validation and formatting.<br/>Supported operators are `+`, `-`, `*`, `/` and `()`."},source:{code:`
const numericInput = useNumericInput({
  value: "",
  unit: "°",
  min: -180,
  max: 180,
  precision: 0,
  step: 1,
  stepLarge: 10,
  required: false,
  normalizeOnError: true,
  math: true,
})

const [inputValue, setInputValue] = useState(numericInput.formattedValue ?? "")

<Input
  value={inputValue}
  placeholder="Rotation angle"
  onValueChange={(args) => setInputValue(args.value)}
  onBlur={(args) => {
    const parsed = numericInput.parse(args.value)

    if (
      parsed.error === "required" ||
      parsed.error === "invalid_number"
    ) {
      setInputValue(String("Auto"))
      return
    }
    
    setInputValue(String(parsed.formattedValue))
  }}
  onKeyDown={(args) =>
    numericInput.handleKeyDown(args, (next) => setInputValue(String(next)))
  }
/>`}}},render:()=>{let e=s({value:55,unit:`°`,min:-180,max:180,precision:0,step:1,stepLarge:10,required:!1,doubleValue:!1,normalizeOnError:!0,math:!0}),[n,i]=t(e.formattedValue??``),[o,l]=t({rawValue:`45+10`,normalizedValue:55,formattedValue:`55°`});return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{value:n,placeholder:`Rotation angle`,onValueChange:e=>i(e.value),onBlur:t=>{let n=e.parse(t.value);if(l({rawValue:n.rawValue,normalizedValue:n.normalizedValue??0,formattedValue:n.formattedValue??``}),n.error===`required`||n.error===`invalid_number`){i(`Auto`);return}i(String(n.formattedValue))},onKeyDown:t=>e.handleKeyDown(t,e=>i(String(e)))}),r(a,{children:[`rawValue: "`,o.rawValue,`"`]}),r(a,{children:[`normalizedValue: `,o.normalizedValue]}),r(a,{children:[`formattedValue: "`,o.formattedValue,`"`]})]})}}})),g,_,v,y,b,x;e((()=>{n(),d(),p(),h(),l(),o(),i(),g={title:`Hooks/useNumericInput`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`A hook that validates and formats a numeric input based on the provided configuration.`}}},argTypes:{value:{control:{type:`text`},description:`<strong>*</strong>Initial numeric value`,table:{type:{summary:`number | string`}}},unit:{control:{type:`text`},description:`Unit of the value.`},min:{control:{type:`number`},description:`Minimum value of the input.`},max:{control:{type:`number`},description:`Maximum value of the input.`},precision:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Precision of the value. If 0, the value will be rounded to the nearest integer, otherwise it will be rounded to the nearest precision like 1 = 0.1, 2 = 0.01, etc.`},step:{control:{type:`number`},table:{defaultValue:{summary:`1`}},description:`Step size for changing the value.`},stepLarge:{control:{type:`number`},table:{defaultValue:{summary:`10`}},description:"Step size for changing the value when `Shift` key is pressed."},required:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Whether the value is required.`},normalizeOnError:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:"Whether to normalize and format the raw value on error, otherwise `undefined` will be returned for normalized value and formatted value."},doubleValue:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:'When true, parses a comma-separated pair of numbers (e.g. "12,24") and exposes both values in `normalizedValues` / `formattedValues`.'},math:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Evaluates simple arithmetic expressions before validation and formatting.`},trimTrailingZeros:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Whether to trim trailing zeros from the formatted value.`},useNumericInput:{control:{disable:!0},table:{type:{summary:`Hook`,detail:`
{
  handleKeyDown: (
    args: { 
      event: KeyboardEvent
      value: string
    }
    onValueChange: (next: number | string) => void
  ) => void
  parse: (
    raw: string // required
    unit: string
  ) => NumericInputParseResult 
}
  
// Types

type NumericInputParseResult = {
  rawValue: string
  normalizedValue: number | undefined
  formattedValue: string | undefined
  normalizedValues: [number, number] | undefined
  formattedValues: [string, string] | undefined
  error: NumericInputError | null
  unit: string | undefined
}

type NumericInputError = "required" | "invalid_number" | "less_than_min" | "greater_than_max" | "not_integer"
`}}}}},_={args:{value:`45`,unit:`°`,min:-180,max:180,precision:0,step:1,stepLarge:10,required:!1,doubleValue:!1,normalizeOnError:!1,math:!1,trimTrailingZeros:!1},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
const numericInput = useNumericInput({
  value: "",
  unit: "°",
  min: -180,
  max: 180,
  precision: 0,
  step: 1,
  stepLarge: 10,
  required: false,
})

const [inputValue, setInputValue] = useState(numericInput.formattedValue ?? "")
const [error, setError] = useState(null)

<Input
  value={inputValue}
  error={!!error}
  onValueChange={(args) => setInputValue(args.value)}
  onBlur={(args) => {
    const parsed = numericInput.parse(args.value)

    if (parsed.error) {
      setInputValue(parsed.rawValue)
      setError(parsed.error)
      return
    }

    setError(null)

    setInputValue(parsed.formattedValue ?? "")
  }}
  onKeyDown={(e) =>
    numericInput.handleKeyDown(e, (next) => setInputValue(numericInput.parse(String(next)).formattedValue ?? ""))
  }
/>
`}}},render:e=>{let n=s(e),[i,o]=t(n.formattedValue??``),[l,u]=t(null);return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{value:i,error:!!l,placeholder:`Rotation angle`,onValueChange:e=>o(e.value),onBlur:e=>{let t=n.parse(e.value);if(t.error){o(t.rawValue),u(t.error);return}u(null),t.formattedValues?o(t.formattedValues.join(`, `)??``):o(t.formattedValue??``)},onKeyDown:e=>n.handleKeyDown(e,e=>o(n.parse(String(e)).formattedValue??``))}),r(a,{intentModifier:l?`danger`:`default`,children:l||`No errors`})]})}},v=u,y=f,b=m,_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: '45',
    unit: '°',
    min: -180,
    max: 180,
    precision: 0,
    step: 1,
    stepLarge: 10,
    required: false,
    doubleValue: false,
    normalizeOnError: false,
    math: false,
    trimTrailingZeros: false
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
const numericInput = useNumericInput({
  value: "",
  unit: "°",
  min: -180,
  max: 180,
  precision: 0,
  step: 1,
  stepLarge: 10,
  required: false,
})

const [inputValue, setInputValue] = useState(numericInput.formattedValue ?? "")
const [error, setError] = useState(null)

<Input
  value={inputValue}
  error={!!error}
  onValueChange={(args) => setInputValue(args.value)}
  onBlur={(args) => {
    const parsed = numericInput.parse(args.value)

    if (parsed.error) {
      setInputValue(parsed.rawValue)
      setError(parsed.error)
      return
    }

    setError(null)

    setInputValue(parsed.formattedValue ?? "")
  }}
  onKeyDown={(e) =>
    numericInput.handleKeyDown(e, (next) => setInputValue(numericInput.parse(String(next)).formattedValue ?? ""))
  }
/>
\`
      }
    }
  },
  render: args => {
    const numericInput = useNumericInput(args as unknown as NumericInputConfig);
    const [inputValue, setInputValue] = useState(numericInput.formattedValue ?? '');
    const [error, setError] = useState<NumericInputError | null>(null);
    return <div className="sb-column sb-width-300 sb-gap-16">
        <Input value={inputValue} error={!!error} placeholder="Rotation angle" onValueChange={args => setInputValue(args.value)} onBlur={args => {
        const parsed = numericInput.parse(args.value);
        if (parsed.error) {
          setInputValue(parsed.rawValue);
          setError(parsed.error);
          return;
        }
        setError(null);
        if (parsed.formattedValues) {
          setInputValue(parsed.formattedValues.join(', ') ?? '');
        } else {
          setInputValue(parsed.formattedValue ?? '');
        }
      }} onKeyDown={e => numericInput.handleKeyDown(e, next => setInputValue(numericInput.parse(String(next)).formattedValue ?? ''))} />
        <Text intentModifier={error ? 'danger' : 'default'}>{error || 'No errors'}</Text>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`NormalizationStory`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`DoubleValueStory`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`MathStory`,...b.parameters?.docs?.source}}},x=[`Demo`,`Normalization`,`DoubleValue`,`Math`]}))();export{_ as Demo,y as DoubleValue,b as Math,v as Normalization,x as __namedExportsOrder,g as default};