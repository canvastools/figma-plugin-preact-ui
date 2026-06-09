import{d,u as t}from"./hooks.module-CGIakYml.js";import{u as p}from"./useNumericInput-DN6prgmR.js";import{I as g}from"./Input-Dl12Gun6.js";import{T as l}from"./Text-9aeIDhQ2.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./TooltipContext-C-9LO0ZZ.js";import"./TooltipContainer-BVa1RtHA.js";const K={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"To replicate an experience similar to Figma, errors should be avoided and default values should be applied in most cases.<br/>Value normalisation ensures that a value is always returned."},source:{language:"tsx",code:`
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
/>`}}},render:()=>{const o=p({value:45,unit:"°",min:-180,max:180,precision:0,step:1,stepLarge:10,required:!1,doubleValue:!1,normalizeOnError:!0}),[s,u]=d(o.formattedValue??""),[r,i]=d({rawValue:"45",normalizedValue:45,formattedValue:"45°"});return t("div",{className:"sb-column sb-width-300 sb-gap-16",children:[t(g,{value:s,placeholder:"Rotation angle",onValueChange:n=>u(n.value),onBlur:n=>{const e=o.parse(n.value);if(i({rawValue:e.rawValue,normalizedValue:e.normalizedValue??0,formattedValue:e.formattedValue??""}),e.error==="required"||e.error==="invalid_number"){u("Auto");return}u(String(e.formattedValue))},onKeyDown:n=>o.handleKeyDown(n,e=>u(String(e)))}),t(l,{children:['rawValue: "',r.rawValue,'"']}),t(l,{children:["normalizedValue: ",r.normalizedValue]}),t(l,{children:['formattedValue: "',r.formattedValue,'"']})]})}},q={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"A double value can be used for fields that combine pairs of values, such as padding top/bottom and left/right.<br/>When a comma is present, the hook returns an array of values."},source:{language:"tsx",code:`
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

`}}},render:()=>{var n;const o=p({value:"25,75",doubleValue:!0,min:0,max:100,precision:0,step:1,stepLarge:10,required:!1,normalizeOnError:!0}),[s,u]=d(((n=o.formattedValues)==null?void 0:n.join(", "))??o.formattedValue??""),[r,i]=d({rawValue:"25,75",normalizedValues:[25,75],formattedValues:["25","75"]});return t("div",{className:"sb-column sb-width-300 sb-gap-16",children:[t(g,{value:s,placeholder:"10, 20",onValueChange:e=>u(e.value),onBlur:e=>{const a=o.parse(e.value);if(i({rawValue:a.rawValue,normalizedValues:a.normalizedValues??[],formattedValues:a.formattedValues??[]}),a.error==="required"||a.error==="invalid_number"){u("Auto");return}a.formattedValues?u(a.formattedValues.join(", ")):u(a.formattedValue??"")},onKeyDown:e=>o.handleKeyDown(e,a=>u(String(a)))}),t(l,{children:['rawValue: "',r.rawValue,'"']}),t(l,{children:["normalizedValues: [",r.normalizedValues[0],", ",r.normalizedValues[1],"]"]}),t(l,{children:['formattedValues: ["',r.formattedValues[0],'", "',r.formattedValues[1],'"]']})]})}},_={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Math expressions can be evaluated before validation and formatting.<br/>Supported operators are `+`, `-`, `*`, `/` and `()`."},source:{language:"tsx",code:`
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
/>`}}},render:()=>{const o=p({value:55,unit:"°",min:-180,max:180,precision:0,step:1,stepLarge:10,required:!1,doubleValue:!1,normalizeOnError:!0,math:!0}),[s,u]=d(o.formattedValue??""),[r,i]=d({rawValue:"45+10",normalizedValue:55,formattedValue:"55°"});return t("div",{className:"sb-column sb-width-300 sb-gap-16",children:[t(g,{value:s,placeholder:"Rotation angle",onValueChange:n=>u(n.value),onBlur:n=>{const e=o.parse(n.value);if(i({rawValue:e.rawValue,normalizedValue:e.normalizedValue??0,formattedValue:e.formattedValue??""}),e.error==="required"||e.error==="invalid_number"){u("Auto");return}u(String(e.formattedValue))},onKeyDown:n=>o.handleKeyDown(n,e=>u(String(e)))}),t(l,{children:['rawValue: "',r.rawValue,'"']}),t(l,{children:["normalizedValue: ",r.normalizedValue]}),t(l,{children:['formattedValue: "',r.formattedValue,'"']})]})}},j={title:"Hooks/useNumericInput",component:p,tags:["autodocs"],parameters:{docs:{description:{component:"A hook that validates and formats a numeric input based on the provided configuration."}}},argTypes:{value:{control:{type:"text"},description:"<strong>*</strong>Initial numeric value",table:{type:{summary:"number | string"}}},unit:{control:{type:"text"},description:"Unit of the value."},min:{control:{type:"number"},description:"Minimum value of the input."},max:{control:{type:"number"},description:"Maximum value of the input."},precision:{control:{type:"number"},defaultValue:{summary:0},description:"Precision of the value. If 0, the value will be rounded to the nearest integer, otherwise it will be rounded to the nearest precision like 1 = 0.1, 2 = 0.01, etc."},step:{control:{type:"number"},defaultValue:{summary:1},description:"Step size for changing the value."},stepLarge:{control:{type:"number"},defaultValue:{summary:10},description:"Step size for changing the value when `Shift` key is pressed."},required:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Whether the value is required."},normalizeOnError:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Whether to normalize and format the raw value on error, otherwise `undefined` will be returned for normalized value and formatted value."},doubleValue:{control:{type:"boolean"},defaultValue:{summary:!1},description:'When true, parses a comma-separated pair of numbers (e.g. "12,24") and exposes both values in `normalizedValues` / `formattedValues`.'},math:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Evaluates simple arithmetic expressions before validation and formatting."},trimTrailingZeros:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Whether to trim trailing zeros from the formatted value."},useNumericInput:{control:{disable:!0},table:{type:{summary:"Hook",detail:`
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
`}}}}},m={tags:["!autodocs"],args:{value:"45",unit:"°",min:-180,max:180,precision:0,step:1,stepLarge:10,required:!1,doubleValue:!1,normalizeOnError:!1,math:!1,trimTrailingZeros:!1},parameters:{viewport:{defaultViewport:"large"},docs:{source:{code:`
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
`}}},render:o=>{const s=p(o),[u,r]=d(s.formattedValue??""),[i,n]=d(null);return t("div",{className:"sb-column sb-width-300 sb-gap-16",children:[t(g,{value:u,error:!!i,placeholder:"Rotation angle",onValueChange:e=>r(e.value),onBlur:e=>{const a=s.parse(e.value);if(a.error){r(a.rawValue),n(a.error);return}n(null),a.formattedValues?r(a.formattedValues.join(", ")??""):r(a.formattedValue??"")},onKeyDown:e=>s.handleKeyDown(e,a=>r(s.parse(String(a)).formattedValue??""))}),t(l,{intentModifier:i?"danger":"default",children:i||"No errors"})]})}},c=K,V=q,f=_;var h,I,v;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!autodocs'],
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
}`,...(v=(I=m.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var b,w,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:"NormalizationStory",...(y=(w=c.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,x,z;V.parameters={...V.parameters,docs:{...(S=V.parameters)==null?void 0:S.docs,source:{originalSource:"DoubleValueStory",...(z=(x=V.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var D,N,E;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:"MathStory",...(E=(N=f.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const P=["Demo","Normalization","DoubleValue","Math"];export{m as Demo,V as DoubleValue,f as Math,c as Normalization,P as __namedExportsOrder,j as default};
