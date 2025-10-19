import{u as e,d as H}from"./hooks.module-Dxk9uxGs.js";import{f as m}from"./index-BWINGljf.js";import{S as o}from"./Select-BWPc3EmO.js";import{S as j}from"./Stack-CNzGXmi4.js";import{I as J}from"./Icon-Btq4UltS.js";import{c as K}from"./chevronDown-CnPbqtrs.js";import"./preact.module-DKQ80Dzn.js";import"./OverlayPositioner-BnCjn4Ny.js";import"./compat.module-CA66vPNl.js";import"./typedForwardRef-Bwgl65_g.js";import"./MenuContainer-x2qcv_BJ.js";import"./MenuItemOption-B3TP46TC.js";import"./check-z8WFgJZW.js";import"./Text-C438qO9S.js";const le={title:"Components/Select",component:o,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},options:{table:{type:{summary:"SelectOption[]"}},control:{disable:!0},description:`Array of items to manage.
      <pre>interface SelectOption {
  label: string
  value: string
}</pre>
      `},placeholder:{control:{type:"text"},description:"Placeholder text to display when no option is selected."},value:{control:{disable:!0},description:"Value for the controlled mode.",table:{type:{summary:"string"}}},defaultValue:{control:{type:"text"},description:"Default value for the uncontrolled mode.",table:{type:{summary:"string"}}},grouped:{control:{type:"select"},options:["none","left","right","both"],defaultValue:{summary:"none"}},error:{control:{type:"boolean"},defaultValue:{summary:"false"}},disabled:{control:{type:"boolean"},defaultValue:{summary:"false"}},menuWidth:{control:{type:"number"},defaultValue:{summary:"auto"},description:"Width of the menu."},onBlur:{control:{disable:!0},description:"Callback when the input is blurred.",table:{type:{summary:"() => void"}}},onFocus:{control:{disable:!0},description:"Callback when the input is focused.",table:{type:{summary:"() => void"}}},onChange:{control:{disable:!0},description:"Callback when the value is changed.",table:{type:{summary:"(args: { event: MouseEvent, id: string }) => void"}}}}},t=[{value:"opt-1",label:"Option one"},{value:"opt-2",label:"Option two"},{value:"opt-3",label:"Option three"}],r={tags:["!autodocs"],args:{className:"",options:t,placeholder:"Choose an option",defaultValue:"",grouped:"none",error:!1,disabled:!1,menuWidth:208,onBlur:m(),onFocus:m(),onChange:m()},parameters:{viewport:{defaultViewport:"large"}},render:u=>e("div",{className:"sb-column sb-width-300",children:e(o,{...u})})},a={render:()=>e("div",{className:"sb-column sb-width-300",children:e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-1"})})},n={parameters:{viewport:{defaultViewport:"large"}},render:()=>{const[u,q]=H("opt-1");return e("div",{className:"sb-column sb-width-300",children:e(o,{placeholder:"Choose an option",options:t,value:u,onChange:z=>q(z.value)})})}},s={parameters:{viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(o,{options:t,placeholder:"Choose an option"})})},l={parameters:{viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(j,{direction:"row",children:[e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-1",grouped:"right"}),e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-2",grouped:"both"}),e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-3",grouped:"left"})]})})},p={parameters:{viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-1",error:!0})})},i={parameters:{viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(j,{spacing:400,children:[e(o,{options:t,placeholder:"Choose an option",disabled:!0}),e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-1",disabled:!0})]})})},d={parameters:{viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-1",prefix:e(J,{glyph:K,intent:"neutral",intentModifiers:"secondary",variant:"scaled"})})})},c={parameters:{viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-1",menuWidth:300})})};var h,f,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    options: sampleOptions,
    placeholder: "Choose an option",
    defaultValue: "",
    grouped: "none",
    error: false,
    disabled: false,
    menuWidth: 208,
    onBlur: fn(),
    onFocus: fn(),
    onChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-width-300">
      <Select {...args} />
    </div>
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var v,g,w;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="sb-column sb-width-300">
      <Select options={sampleOptions} placeholder="Choose an option" defaultValue="opt-1" />
    </div>
}`,...(w=(g=a.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var V,C,S;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [value, setValue] = useState("opt-1");
    return <div className="sb-column sb-width-300">
        <Select placeholder="Choose an option" options={sampleOptions} value={value} onChange={e => setValue(e.value)} />
      </div>;
  }
}`,...(S=(C=n.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var y,N,O;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Select options={sampleOptions} placeholder="Choose an option" />
    </div>
}`,...(O=(N=s.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var x,k,W;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Stack direction="row">
        <Select options={sampleOptions} placeholder="Choose an option" defaultValue="opt-1" grouped="right" />
        <Select options={sampleOptions} placeholder="Choose an option" defaultValue="opt-2" grouped="both" />
        <Select options={sampleOptions} placeholder="Choose an option" defaultValue="opt-3" grouped="left" />
      </Stack>
    </div>
}`,...(W=(k=l.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var D,M,P;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Select options={sampleOptions} placeholder="Choose an option" defaultValue="opt-1" error={true} />
    </div>
}`,...(P=(M=p.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var E,B,F;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Stack spacing={400}>
        <Select options={sampleOptions} placeholder="Choose an option" disabled={true} />
        <Select options={sampleOptions} placeholder="Choose an option" defaultValue="opt-1" disabled={true} />
      </Stack>
    </div>
}`,...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,I,U;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Select options={sampleOptions} placeholder="Choose an option" defaultValue="opt-1" prefix={<Icon glyph={chevronDownGlyph} intent="neutral" intentModifiers="secondary" variant="scaled" />} />
    </div>
}`,...(U=(I=d.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var _,A,T;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Select options={sampleOptions} placeholder="Choose an option" defaultValue="opt-1" menuWidth={300} />
    </div>
}`,...(T=(A=c.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const pe=["Demo","Uncontrolled","Controlled","Placeholder","Grouped","Error","Disabled","Prefix","MenuWidth"];export{n as Controlled,r as Demo,i as Disabled,p as Error,l as Grouped,c as MenuWidth,s as Placeholder,d as Prefix,a as Uncontrolled,pe as __namedExportsOrder,le as default};
