import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,w as n}from"./compat.module-BbhDrffC.js";import{n as r,t as i}from"./jsxRuntime.module-B_u_rUE0.js";import{t as a}from"./Text-Bf8YN4P6.js";import{Ft as o,Pt as s,Zt as c,t as l}from"./src-nP44HpfJ.js";var u,d=e((()=>{n(),l(),s(),i(),u={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`To replicate an experience similar to Figma, errors should be avoided and default values should be applied in most cases.<br/>Value normalisation, trimming and allowed characters ensure that a value is always returned.`},source:{code:`
const stringInput = useStringInput({
  value: "",
  minLength: 3,
  maxLength: 12,
  required: false,
  trim: true,
  allowedCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-!*()[] .",
  normalizeOnError: true,
})

const [inputValue, setInputValue] = useState(stringInput.formattedValue ?? "")     

<Input
  value={inputValue}
  placeholder="Any string"
  onValueChange={(e) => {
    setInputValue(e.value)
  }}
  onBlur={(e) => {
    const parsed = stringInput.parse(e.value)

    if (
      parsed.error === "required" ||
      parsed.error === "too_short"
    ) {
      setInputValue("Hello world!")
      return
    }

    setInputValue(parsed.formattedValue ?? "")
  }}
/>`}}},render:()=>{let e=o({value:`abc/*123`,minLength:3,maxLength:12,required:!1,trim:!0,allowedCharacters:`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,normalizeOnError:!0}),[n,i]=t(e.formattedValue??``),[s,l]=t({rawValue:`abc/*123`,normalizedValue:`abc123`});return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{value:n,placeholder:`Any string`,onValueChange:e=>{i(e.value)},onBlur:t=>{let n=e.parse(t.value);if(l({rawValue:n.rawValue,normalizedValue:n.normalizedValue??``}),n.error===`required`||n.error===`too_short`){i(`Hello world!`);return}i(n.formattedValue??``)}}),r(a,{children:[`rawValue: "`,s.rawValue,`"`]}),r(a,{children:[`normalizedValue: "`,s.normalizedValue,`"`]})]})}}})),f,p=e((()=>{n(),l(),s(),i(),f={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`A mask function can be provided to format the input value as desired.`},source:{code:`
const stringInput = useStringInput({
  value: "",
  minLength: 4,
  maxLength: 4,
  required: false,
  trim: true,
  allowedCharacters: "0123456789:",
  format: (value) => {
    const digits = value.replace(/[^0-9]/g, "")

    if (digits.length <= 2) {
      return \`\${digits.padStart(2, "0")}:00\`
    }

    return digits
      .padStart(4, "0")
      .slice(0, 4)
      .replace(/([0-9]{2})([0-9]{2})/, "$1:$2")
  },
  normalizeOnError: true,
})

const [inputValue, setInputValue] = useState(stringInput.formattedValue ?? "")     

<Input
  value={inputValue}
  placeholder="HH:MM"
  onValueChange={(e) => {
    setInputValue(e.value)
  }}
  onBlur={(e) => {
    const parsed = stringInput.parse(e.value)

    if (
      parsed.error === "required" ||
      parsed.error === "too_short"
    ) {
      setInputValue("Username")
      return
    }

    setInputValue(parsed.formattedValue ?? "")
  }}
/>`}}},render:()=>{let e=o({value:`9h41`,minLength:4,maxLength:4,required:!1,trim:!0,allowedCharacters:`0123456789:`,format:e=>{let t=e.replace(/[^0-9]/g,``);return t.length<=2?`${t.padStart(2,`0`)}:00`:t.padStart(4,`0`).slice(0,4).replace(/([0-9]{2})([0-9]{2})/,`$1:$2`)},normalizeOnError:!0}),[n,i]=t(e.formattedValue??``),[s,l]=t({rawValue:`9h41`,normalizedValue:`941`,formattedValue:`9:41`});return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{value:n,placeholder:`HH:MM`,onValueChange:e=>{i(e.value)},onBlur:t=>{let n=e.parse(t.value);if(l({rawValue:n.rawValue,normalizedValue:n.normalizedValue??``,formattedValue:n.formattedValue??``}),n.error===`required`||n.error===`too_short`){i(`00:00`);return}i(n.formattedValue??``)}}),r(a,{children:[`rawValue: "`,s.rawValue,`"`]}),r(a,{children:[`normalizedValue: "`,s.normalizedValue,`"`]}),r(a,{children:[`formattedValue: "`,s.formattedValue,`"`]})]})}}})),m,h,g,_,v;e((()=>{n(),d(),p(),l(),s(),i(),m={title:`Hooks/useStringInput`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`A hook that validates and formats a string input based on the provided configuration.`}}},argTypes:{value:{control:{type:`text`},description:`<strong>*</strong>Initial string value`},minLength:{control:{type:`number`},description:`Minimum allowed string length.`},maxLength:{control:{type:`number`},description:`Maximum allowed string length.`},allowedCharacters:{control:{type:`text`},description:`Optional set of allowed characters. Any character not included here will be treated as invalid.`},required:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},trim:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Trim the string before validation.`},normalizeOnError:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:"Whether to normalize and format the raw value on error, otherwise `undefined` will be returned for normalized value and formatted value."},format:{control:{disable:!0},description:`Optional formatter function that receives the normalized value and returns a formatted display string (e.g. for masks).`,table:{type:{summary:`(value: string) => string`}}},useStringInput:{control:{disable:!0},table:{type:{summary:`Hook`,detail:`
{
  handleKeyDown: (
    args: { 
      event: KeyboardEvent
      value: string
    }
    onValueChange: (next: string) => void
  parse: (raw: string) => StringInputParseResult
}  

// Types

type StringInputParseResult = {
  rawValue: string
  normalizedValue: string | undefined
  formattedValue: string | undefined
  error: StringInputError | null
}

type StringInputError = "required" | "too_short" | "too_long" | "invalid_characters"
          `}}}}},h={args:{value:`Hello world!`,minLength:3,maxLength:12,required:!1,trim:!1,allowedCharacters:``,normalizeOnError:!1},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
const stringInput = useStringInput({
  value: "Hello world!",
  minLength: 3,
  maxLength: 12,
  required: false,
  trim: false,
  normalizeOnError: false,
})

const [inputValue, setInputValue] = useState(stringInput.formattedValue ?? "")  
const [error, setError] = useState(null)

<Input
  value={inputValue}
  placeholder="Any string"
  onValueChange={(e) => {
    setInputValue(e.value)
  }}
  onBlur={(e) => {
    const parsed = stringInput.parse(e.value)

    if (parsed.error) {
      setInputValue(parsed.rawValue)
      setError(parsed.error)
      return
    }

    setInputValue(parsed.formattedValue ?? "")
    setError(null)
  }}
/>`}}},render:e=>{let n=o(e),[i,s]=t(n.formattedValue??``),[l,u]=t(null);return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{value:i,error:!!l,placeholder:`Any string`,onValueChange:e=>{s(e.value)},onBlur:e=>{let t=n.parse(e.value);if(t.error){s(t.rawValue),u(t.error);return}s(t.formattedValue??``),u(null)}}),r(a,{intentModifier:l?`danger`:`default`,children:l||`No errors`})]})}},g=u,_=f,h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Hello world!',
    minLength: 3,
    maxLength: 12,
    required: false,
    trim: false,
    allowedCharacters: '',
    normalizeOnError: false
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
const stringInput = useStringInput({
  value: "Hello world!",
  minLength: 3,
  maxLength: 12,
  required: false,
  trim: false,
  normalizeOnError: false,
})

const [inputValue, setInputValue] = useState(stringInput.formattedValue ?? "")  
const [error, setError] = useState(null)

<Input
  value={inputValue}
  placeholder="Any string"
  onValueChange={(e) => {
    setInputValue(e.value)
  }}
  onBlur={(e) => {
    const parsed = stringInput.parse(e.value)

    if (parsed.error) {
      setInputValue(parsed.rawValue)
      setError(parsed.error)
      return
    }

    setInputValue(parsed.formattedValue ?? "")
    setError(null)
  }}
/>\`
      }
    }
  },
  render: args => {
    const stringInput = useStringInput(args as unknown as StringInputConfig);
    const [inputValue, setInputValue] = useState(stringInput.formattedValue ?? '');
    const [error, setError] = useState<StringInputError | null>(null);
    return <div className="sb-column sb-width-300 sb-gap-16">
        <Input value={inputValue} error={!!error} placeholder="Any string" onValueChange={e => {
        setInputValue(e.value);
      }} onBlur={e => {
        const parsed = stringInput.parse(e.value);
        if (parsed.error) {
          setInputValue(parsed.rawValue);
          setError(parsed.error);
          return;
        }
        setInputValue(parsed.formattedValue ?? '');
        setError(null);
      }} />
        <Text intentModifier={error ? 'danger' : 'default'}>{error || 'No errors'}</Text>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`NormalizationStory`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`MaskStory`,..._.parameters?.docs?.source}}},v=[`Demo`,`Normalization`,`Mask`]}))();export{h as Demo,_ as Mask,g as Normalization,v as __namedExportsOrder,m as default};