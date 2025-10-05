import{d as t,u as r}from"./hooks.module-Dxk9uxGs.js";import{u as c}from"./useStringValidator-fjvzrMhg.js";import{I as S}from"./Input-Byaypgcn.js";import{S as I}from"./Section-Jgq_uI8f.js";import{S as b}from"./Stack-CNzGXmi4.js";import{T as y}from"./Text-C438qO9S.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";const M={title:"Hooks/useStringValidator",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"A hook that validates a string based on the provided configuration."}}},argTypes:{required:{control:{type:"boolean"}},minLength:{control:{type:"number"}},maxLength:{control:{type:"number"}},pattern:{control:{type:"string"},description:"Regular expression to validate the string."},trim:{control:{type:"boolean"},description:"Trim the string before validation."}}},n={args:{required:!1,minLength:3,maxLength:8,pattern:null,trim:!1},parameters:{viewport:{defaultViewport:"large"}},render:m=>{const[g,f]=t(""),[v,o]=t(!1),{isValid:h,getErrorCode:E}=c(m),[a,i]=t(null),V=e=>{h(e)?(o(!1),i(null)):(o(!0),i(E(e)))};return r("div",{className:"sb-column sb-width-300",children:r(I,{children:r(b,{spacing:200,children:[r(S,{value:g,error:v,placeholder:"Input string",onKeyDown:e=>{var s,l;e.event.key==="Enter"&&((l=(s=e.event).preventDefault)==null||l.call(s),e.event.currentTarget.blur())},onChange:e=>{f(e.value)},onBlur:e=>V(e.value)}),r(y,{intentModifiers:a?"danger":"default",children:a||"No errors"})]})})})}};var u,p,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    required: false,
    minLength: 3,
    maxLength: 8,
    pattern: null,
    trim: false
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => {
    const [inputValue, setInputValue] = useState("");
    const [inputError, setInputError] = useState(false);
    const {
      isValid,
      getErrorCode
    } = useStringValidator(args as StringValidationConfig);
    const [valueError, setValueError] = useState<StringValidationError | null>(null);
    const handleValidation = (value: string) => {
      if (isValid(value)) {
        setInputError(false);
        setValueError(null);
      } else {
        setInputError(true);
        setValueError(getErrorCode(value));
      }
    };
    return <div className="sb-column sb-width-300">
        <Section>
          <Stack spacing={200}>
            <Input value={inputValue} error={inputError} placeholder="Input string" onKeyDown={e => {
            if (e.event.key === "Enter") {
              e.event.preventDefault?.();
              (e.event.currentTarget as HTMLInputElement).blur();
            }
          }} onChange={e => {
            setInputValue(e.value);
          }} onBlur={e => handleValidation(e.value)} />
            <Text intentModifiers={valueError ? "danger" : "default"}>
              {valueError || "No errors"}
            </Text>
          </Stack>
        </Section>
      </div>;
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const B=["Demo"];export{n as Demo,B as __namedExportsOrder,M as default};
