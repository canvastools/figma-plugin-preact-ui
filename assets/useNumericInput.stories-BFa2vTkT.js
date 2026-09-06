import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,w as n}from"./compat.module-gcU-nFZT.js";import{n as r,t as i}from"./jsxRuntime.module-CNTwvFFH.js";import{n as a,t as o}from"./Text-Cr-51GRl.js";import{n as s,t as c}from"./Icon-Brb725mi.js";import{n as l,t as u}from"./opacity-BnD1btHk.js";import{n as d,t as f}from"./Input-CyseSWne.js";import{n as p,t as m}from"./useNumericInput-H7Xa6yRZ.js";var h;function g(){return(g=e((()=>{n(),d(),a(),m(),i(),h={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"To replicate an experience similar to Figma, errors should be avoided and default values should be applied in most cases.<br/>Value normalisation ensures that a value is always returned: out of range input is clamped to `min` / `max`, and input that cannot be read as a number at all falls back to the value the field currently holds - try `999` or `abc`.<br/>The `error` is still reported, so a caller that wants its own default for an emptied field can act on `required` before reading the value."},source:{code:`
const numericInput = useNumericInput({
  value: 45,
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

    // normalizeOnError always yields a value: out of range
    // clamps, unreadable input reverts to the current one
    setInputValue(String(parsed.formattedValue))
  }}
  onKeyDown={(args) =>
    numericInput.handleKeyDown(args, (next) => setInputValue(String(next)))
  }
/>`}}},render:()=>{let e=p({value:45,unit:`°`,min:-180,max:180,precision:0,step:1,stepLarge:10,required:!1,doubleValue:!1,normalizeOnError:!0}),[n,i]=t(e.formattedValue??``),[a,s]=t({rawValue:`45`,normalizedValue:45,formattedValue:`45°`});return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(f,{value:n,placeholder:`Rotation angle`,onValueChange:e=>i(e.value),onBlur:t=>{let n=e.parse(t.value);s({rawValue:n.rawValue,normalizedValue:n.normalizedValue??0,formattedValue:n.formattedValue??``}),i(String(n.formattedValue))},onKeyDown:t=>e.handleKeyDown(t,e=>i(String(e)))}),r(o,{children:[`rawValue: "`,a.rawValue,`"`]}),r(o,{children:[`normalizedValue: `,a.normalizedValue]}),r(o,{children:[`formattedValue: "`,a.formattedValue,`"`]})]})}}})))()}var _;function v(){return(v=e((()=>{n(),d(),a(),m(),i(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"A double value can be used for fields that combine pairs of values, such as padding top/bottom and left/right.<br/>When a comma is present, the hook returns an array of values.<br/>With `normalizeOnError`, each half is normalised on its own - try `120, 50` or `abc, 50`."},source:{code:`
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

    // normalizeOnError always yields values: each half clamps
    // on its own, and an unreadable one reverts to its current value
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

`}}},render:()=>{let e=p({value:`25,75`,doubleValue:!0,min:0,max:100,precision:0,step:1,stepLarge:10,required:!1,normalizeOnError:!0}),[n,i]=t(e.formattedValues?.join(`, `)??e.formattedValue??``),[a,s]=t({rawValue:`25,75`,normalizedValues:[25,75],formattedValues:[`25`,`75`]});return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(f,{value:n,placeholder:`10, 20`,onValueChange:e=>i(e.value),onBlur:t=>{let n=e.parse(t.value);s({rawValue:n.rawValue,normalizedValues:n.normalizedValues??[],formattedValues:n.formattedValues??[]}),n.formattedValues?i(n.formattedValues.join(`, `)):i(n.formattedValue??``)},onKeyDown:t=>e.handleKeyDown(t,e=>i(String(e)))}),r(o,{children:[`rawValue: "`,a.rawValue,`"`]}),r(o,{children:[`normalizedValues: [`,a.normalizedValues[0],`, `,a.normalizedValues[1],`]`]}),r(o,{children:[`formattedValues: ["`,a.formattedValues[0],`", "`,a.formattedValues[1],`"]`]})]})}}})))()}var y;function b(){return(b=e((()=>{n(),d(),a(),m(),i(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"Math expressions can be evaluated before validation and formatting.<br/>Supported operators are `+`, `-`, `*`, `/` and `()`.<br/>An expression that does not resolve to a number is an `invalid_number`, so with `normalizeOnError` it reverts to the current value - try `45+10`, then `45+`."},source:{code:`
const numericInput = useNumericInput({
  value: 55,
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

    // normalizeOnError always yields a value: out of range
    // clamps, unreadable input reverts to the current one
    setInputValue(String(parsed.formattedValue))
  }}
  onKeyDown={(args) =>
    numericInput.handleKeyDown(args, (next) => setInputValue(String(next)))
  }
/>`}}},render:()=>{let e=p({value:55,unit:`°`,min:-180,max:180,precision:0,step:1,stepLarge:10,required:!1,doubleValue:!1,normalizeOnError:!0,math:!0}),[n,i]=t(e.formattedValue??``),[a,s]=t({rawValue:`45+10`,normalizedValue:55,formattedValue:`55°`});return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(f,{value:n,placeholder:`Rotation angle`,onValueChange:e=>i(e.value),onBlur:t=>{let n=e.parse(t.value);s({rawValue:n.rawValue,normalizedValue:n.normalizedValue??0,formattedValue:n.formattedValue??``}),i(String(n.formattedValue))},onKeyDown:t=>e.handleKeyDown(t,e=>i(String(e)))}),r(o,{children:[`rawValue: "`,a.rawValue,`"`]}),r(o,{children:[`normalizedValue: `,a.normalizedValue]}),r(o,{children:[`formattedValue: "`,a.formattedValue,`"`]})]})}}})))()}var x;function S(){return(S=e((()=>{n(),s(),d(),a(),u(),m(),i(),x={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"Drag the prefix icon horizontally to scrub the value by `step` (`stepLarge` with Shift). The value moves live through `onChange` and lands on release through `onCommit`.<br/>`value` here is the input state, which holds whatever has been typed - so the fallback on blur comes from the last committed value rather than from the hook."},source:{code:`
const numericInput = useNumericInput({
  value: "50%",
  unit: "%",
  min: 0,
  max: 100,
  step: 1,
  stepLarge: 10,
})

const [inputValue, setInputValue] = useState("50%")

const dragProps = numericInput.getDragProps({
  disabled: false,
  onChange: (next) => setInputValue(numericInput.parse(String(next)).formattedValue ?? String(next)),
  onCommit: (next) => console.log("commit", next),
})

<Input
  value={inputValue}
  focusOnPrefix
  prefix={
    <span {...dragProps}>
      <Icon glyph={opacity} intentModifier="secondary" />
    </span>
  }
  onValueChange={(args) => setInputValue(args.value)}
  onKeyDown={(args) =>
    numericInput.handleKeyDown(args, (next) => setInputValue(String(next)))
  }
/>`}}},render:()=>{let[e,n]=t(`50%`),[i,a]=t(`50%`),s=p({value:e,unit:`%`,min:0,max:100,precision:0,step:1,stepLarge:10,required:!0,normalizeOnError:!0}),u=e=>s.parse(String(e)).formattedValue??String(e),d=s.getDragProps({onChange:e=>n(u(e)),onCommit:e=>a(u(e))});return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(f,{value:e,placeholder:`Opacity`,focusOnPrefix:!0,selectOnFocus:!0,prefix:r(`span`,{...d,style:{...d.style,display:`flex`,alignItems:`center`},children:r(c,{glyph:l,intentModifier:`secondary`})}),onValueChange:e=>n(e.value),onKeyDown:e=>s.handleKeyDown(e,e=>n(u(e))),onBlur:e=>n(s.parse(e.value).formattedValue??String(i))}),r(o,{children:[`committed: "`,i,`"`]})]})}}})))()}var C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),g(),v(),b(),S(),d(),a(),m(),i(),C={title:`Hooks/useNumericInput`,component:p,tags:[`autodocs`],parameters:{docs:{description:{component:`A hook that validates and formats a numeric input based on the provided configuration.`}}},argTypes:{value:{control:{type:`text`},description:`<strong>*</strong>Initial numeric value`,table:{type:{summary:`number | string`}}},unit:{control:{type:`text`},description:`Unit of the value.`},min:{control:{type:`number`},description:`Minimum value of the input.`},max:{control:{type:`number`},description:`Maximum value of the input.`},precision:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Precision of the value. If 0, the value will be rounded to the nearest integer, otherwise it will be rounded to the nearest precision like 1 = 0.1, 2 = 0.01, etc.`},step:{control:{type:`number`},table:{defaultValue:{summary:`1`}},description:`Step size for changing the value.`},stepLarge:{control:{type:`number`},table:{defaultValue:{summary:`10`}},description:"Step size for changing the value when `Shift` key is pressed."},required:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Whether the value is required.`},normalizeOnError:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:"Whether to normalize and format the raw value on error, so there is always something to show. Out of range input is clamped to `min` / `max`; input that cannot be read as a number at all (letters, an emptied required field) falls back to the value passed in `value`. Without it, `normalizedValue` and `formattedValue` come back `undefined` on every error."},doubleValue:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:'When true, parses a comma-separated pair of numbers (e.g. "12,24") and exposes both values in `normalizedValues` / `formattedValues`.'},math:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Evaluates simple arithmetic expressions before validation and formatting.`},trimTrailingZeros:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Whether to trim trailing zeros from the formatted value.`},useNumericInput:{control:{disable:!0},table:{type:{summary:`Hook`,detail:`
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
  getDragProps: (
    options: NumericInputDragOptions
  ) => NumericInputDragProps
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

type NumericInputDragOptions = {
  disabled: boolean
  onChange: (next: number | string) => void
  onCommit: (next: number | string) => void
}

type NumericInputDragProps = {
  style: { cursor: string | undefined }
  onMouseDown: ((event: MouseEvent) => void) | undefined
}
`}}}}},w={args:{value:`45`,unit:`°`,min:-180,max:180,precision:0,step:1,stepLarge:10,required:!1,doubleValue:!1,normalizeOnError:!1,math:!1,trimTrailingZeros:!1},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:e=>{let n=p(e),[i,a]=t(n.formattedValue??``),[s,c]=t(null);return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(f,{value:i,error:!!s,placeholder:`Rotation angle`,onValueChange:e=>a(e.value),onBlur:e=>{let t=n.parse(e.value);if(t.error){a(t.rawValue),c(t.error);return}c(null),t.formattedValues?a(t.formattedValues.join(`, `)??``):a(t.formattedValue??``)},onKeyDown:e=>n.handleKeyDown(e,e=>a(n.parse(String(e)).formattedValue??``))}),r(o,{intentModifier:s?`danger`:`default`,children:s||`No errors`})]})}},T=h,E=_,D=y,O=x,k=[`Demo`,`Normalization`,`DoubleValue`,`Math`,`Drag`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`NormalizationStory`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`DoubleValueStory`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`MathStory`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`DragStory`,...O.parameters?.docs?.source}}}})))()}A();export{w as Demo,E as DoubleValue,O as Drag,D as Math,T as Normalization,k as __namedExportsOrder,C as default};