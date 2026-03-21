import{d as i,u as t}from"./hooks.module-CGIakYml.js";import{u as g}from"./useStringInput-DXX1tuwF.js";import{I as V}from"./Input-DEoZ9WJj.js";import{T as u}from"./Text-9aeIDhQ2.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./TooltipContext-DJAjWLpJ.js";import"./TooltipContainer-BVa1RtHA.js";const E={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"To replicate an experience similar to Figma, errors should be avoided and default values should be applied in most cases.<br/>Value normalisation, trimming and allowed characters ensure that a value is always returned."},source:{language:"tsx",code:`
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
/>`}}},render:()=>{const o=g({value:"abc/*123",minLength:3,maxLength:12,required:!1,trim:!0,allowedCharacters:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",normalizeOnError:!0}),[s,n]=i(o.formattedValue??""),[a,l]=i({rawValue:"abc/*123",normalizedValue:"abc123"});return t("div",{className:"sb-column sb-width-300 sb-gap-16",children:[t(V,{value:s,placeholder:"Any string",onValueChange:r=>{n(r.value)},onBlur:r=>{const e=o.parse(r.value);if(l({rawValue:e.rawValue,normalizedValue:e.normalizedValue??""}),e.error==="required"||e.error==="too_short"){n("Hello world!");return}n(e.formattedValue??"")}}),t(u,{children:['rawValue: "',a.rawValue,'"']}),t(u,{children:['normalizedValue: "',a.normalizedValue,'"']})]})}},x={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"A mask function can be provided to format the input value as desired."},source:{language:"tsx",code:`
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
/>`}}},render:()=>{const o=g({value:"9h41",minLength:4,maxLength:4,required:!1,trim:!0,allowedCharacters:"0123456789:",format:r=>{const e=r.replace(/[^0-9]/g,"");return e.length<=2?`${e.padStart(2,"0")}:00`:e.padStart(4,"0").slice(0,4).replace(/([0-9]{2})([0-9]{2})/,"$1:$2")},normalizeOnError:!0}),[s,n]=i(o.formattedValue??""),[a,l]=i({rawValue:"9h41",normalizedValue:"941",formattedValue:"9:41"});return t("div",{className:"sb-column sb-width-300 sb-gap-16",children:[t(V,{value:s,placeholder:"HH:MM",onValueChange:r=>{n(r.value)},onBlur:r=>{const e=o.parse(r.value);if(l({rawValue:e.rawValue,normalizedValue:e.normalizedValue??"",formattedValue:e.formattedValue??""}),e.error==="required"||e.error==="too_short"){n("00:00");return}n(e.formattedValue??"")}}),t(u,{children:['rawValue: "',a.rawValue,'"']}),t(u,{children:['normalizedValue: "',a.normalizedValue,'"']}),t(u,{children:['formattedValue: "',a.formattedValue,'"']})]})}},B={title:"Hooks/useStringInput",component:g,tags:["autodocs"],parameters:{docs:{description:{component:"A hook that validates and formats a string input based on the provided configuration."}}},argTypes:{value:{control:{type:"text"},description:"<strong>*</strong>Initial string value"},minLength:{control:{type:"number"},description:"Minimum allowed string length."},maxLength:{control:{type:"number"},description:"Maximum allowed string length."},allowedCharacters:{control:{type:"text"},description:"Optional set of allowed characters. Any character not included here will be treated as invalid."},required:{control:{type:"boolean"},defaultValue:{summary:!1}},trim:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Trim the string before validation."},normalizeOnError:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Whether to normalize and format the raw value on error, otherwise `undefined` will be returned for normalized value and formatted value."},format:{control:{disable:!0},description:"Optional formatter function that receives the normalized value and returns a formatted display string (e.g. for masks).",table:{type:{summary:"(value: string) => string"}}},useStringInput:{control:{disable:!0},table:{type:{summary:"Hook",detail:`
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
          `}}}}},p={tags:["!autodocs"],args:{value:"Hello world!",minLength:3,maxLength:12,required:!1,trim:!1,allowedCharacters:"",normalizeOnError:!1},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
/>`}}},render:o=>{const s=g(o),[n,a]=i(s.formattedValue??""),[l,r]=i(null);return t("div",{className:"sb-column sb-width-300 sb-gap-16",children:[t(V,{value:n,error:!!l,placeholder:"Any string",onValueChange:e=>{a(e.value)},onBlur:e=>{const d=s.parse(e.value);if(d.error){a(d.rawValue),r(d.error);return}a(d.formattedValue??""),r(null)}}),t(u,{intentModifier:l?"danger":"default",children:l||"No errors"})]})}},m=E,c=x;var f,h,v;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!autodocs'],
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
        language: 'tsx',
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
}`,...(v=(h=p.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var I,w,b;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:"NormalizationStory",...(b=(w=m.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var y,S,z;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:"MaskStory",...(z=(S=c.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const T=["Demo","Normalization","Mask"];export{p as Demo,c as Mask,m as Normalization,T as __namedExportsOrder,B as default};
