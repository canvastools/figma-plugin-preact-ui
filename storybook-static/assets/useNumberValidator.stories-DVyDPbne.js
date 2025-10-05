import{d as t,u as r}from"./hooks.module-Dxk9uxGs.js";import{u as c}from"./useNumberValidator-DzDmHLjB.js";import{I as h}from"./Input-Byaypgcn.js";import{S as I}from"./Section-Jgq_uI8f.js";import{S}from"./Stack-CNzGXmi4.js";import{T as y}from"./Text-C438qO9S.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";const B={title:"Hooks/useNumberValidator",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"A hook that validates a number based on the provided configuration."}}},argTypes:{required:{control:{type:"boolean"}},min:{control:{type:"number"}},max:{control:{type:"number"}},integer:{control:{type:"boolean"},description:"Validate the number as an integer."}}},n={args:{required:!1,min:5,max:10,integer:!1},parameters:{viewport:{defaultViewport:"large"}},render:m=>{const[f,g]=t(""),[v,a]=t(!1),{isValid:V,getErrorCode:E}=c(m),[o,s]=t(null),b=e=>{V(e)?(a(!1),s(null)):(a(!0),s(E(e)))};return r("div",{className:"sb-column sb-width-300",children:r(I,{children:r(S,{spacing:200,children:[r(h,{value:f,error:v,placeholder:"Input number",onKeyDown:e=>{var l,u;e.event.key==="Enter"&&((u=(l=e.event).preventDefault)==null||u.call(l),e.event.currentTarget.blur())},onChange:e=>{g(e.value)},onBlur:e=>b(e.value)}),r(y,{intentModifiers:o?"danger":"default",children:o||"No errors"})]})})})}};var i,d,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    required: false,
    min: 5,
    max: 10,
    integer: false
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
    } = useNumberValidator(args as NumberValidationConfig);
    const [valueErrors, setValueErrors] = useState<NumberValidationError | null>(null);
    const handleValidation = (value: string) => {
      if (isValid(value)) {
        setInputError(false);
        setValueErrors(null);
      } else {
        setInputError(true);
        setValueErrors(getErrorCode(value));
      }
    };
    return <div className="sb-column sb-width-300">
        <Section>
          <Stack spacing={200}>
            <Input value={inputValue} error={inputError} placeholder="Input number" onKeyDown={e => {
            if (e.event.key === "Enter") {
              e.event.preventDefault?.();
              (e.event.currentTarget as HTMLInputElement).blur();
            }
          }} onChange={e => {
            setInputValue(e.value);
          }} onBlur={e => handleValidation(e.value)} />
            <Text intentModifiers={valueErrors ? "danger" : "default"}>
              {valueErrors || "No errors"}
            </Text>
          </Stack>
        </Section>
      </div>;
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const H=["Demo"];export{n as Demo,H as __namedExportsOrder,B as default};
