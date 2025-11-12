import{u as e,d as Q}from"./hooks.module-Dxk9uxGs.js";import{f as h}from"./index-BWINGljf.js";import{S as o}from"./Select-Dzu1jbXZ.js";import{S as b}from"./Stack-CNzGXmi4.js";import{T as R}from"./Text-C438qO9S.js";import{I as X}from"./Icon-Btq4UltS.js";import{s as Y}from"./search-GiDdSaGr.js";import"./preact.module-DKQ80Dzn.js";import"./OverlayPositioner-BuTO9s3R.js";import"./compat.module-CA66vPNl.js";import"./typedForwardRef-Bwgl65_g.js";import"./MenuContainer-JAFlFUYZ.js";import"./MenuItemOption-DaaOUhuO.js";import"./check-z8WFgJZW.js";import"./MenuDivider-Bo3vdwZN.js";import"./chevronDown-CnPbqtrs.js";const be={title:"Components/Select",component:o,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},options:{table:{type:{summary:"SelectOption[] | SelectOption[][]"}},control:{disable:!0},description:`Array of items to manage.
      <pre>interface SelectOption {
  label: string
  value: string
}</pre>
      `},placeholder:{control:{type:"text"},description:"Placeholder text to display when no option is selected."},value:{control:{disable:!0},description:"Value for the controlled mode.",table:{type:{summary:"string"}}},defaultValue:{control:{type:"text"},description:"Default value for the uncontrolled mode.",table:{type:{summary:"string"}}},grouped:{control:{type:"select"},options:["none","left","right","both"],defaultValue:{summary:"none"}},error:{control:{type:"boolean"},defaultValue:{summary:"false"}},disabled:{control:{type:"boolean"},defaultValue:{summary:"false"}},menuWidth:{control:{type:"number"},defaultValue:{summary:"auto"},description:"Width of the menu."},onBlur:{control:{disable:!0},description:"Callback when the input is blurred.",table:{type:{summary:"() => void"}}},onFocus:{control:{disable:!0},description:"Callback when the input is focused.",table:{type:{summary:"() => void"}}},onChange:{control:{disable:!0},description:"Callback when the value is changed.",table:{type:{summary:"(args: { event: MouseEvent, id: string }) => void"}}}}},t=[{value:"opt-1",label:"Option one"},{value:"opt-2",label:"Option two"},{value:"opt-3",label:"Option three"}],Z=[[{value:"opt-1",label:"Option one"},{value:"opt-2",label:"Option two"},{value:"opt-3",label:"Option three"}],[{value:"opt-4",label:"Option four"},{value:"opt-5",label:"Option five"},{value:"opt-6",label:"Option six"}]],a={tags:["!autodocs"],args:{className:"",options:t,placeholder:"Choose an option",defaultValue:"",grouped:"none",error:!1,disabled:!1,menuWidth:208,onBlur:h(),onFocus:h(),onChange:h()},parameters:{viewport:{defaultViewport:"large"}},render:r=>e("div",{className:"sb-column sb-width-300",children:e(o,{...r})})},n={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-1"})})},s={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[r,K]=Q("opt-1");return e("div",{className:"sb-column sb-width-300",children:e(b,{spacing:400,children:[e(R,{children:["Value: ",r]}),e(o,{placeholder:"Choose an option",options:t,value:r,onChange:L=>K(L.value)})]})})}},l={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(o,{options:t,placeholder:"Choose an option"})})},i={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(b,{direction:"row",children:[e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-1",grouped:"right"}),e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-2",grouped:"both"}),e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-3",grouped:"left"})]})})},p={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(o,{options:Z,placeholder:"Choose an option",defaultValue:"opt-1",grouped:"right"})})},d={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-1",error:!0})})},c={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(b,{spacing:400,children:[e(o,{options:t,placeholder:"Choose an option",disabled:!0}),e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-1",disabled:!0})]})})},u={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-1",prefix:e(X,{glyph:Y,intent:"neutral",intentModifiers:"secondary",variant:"scaled"})})})},m={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(o,{options:t,placeholder:"Choose an option",defaultValue:"opt-1",menuWidth:300})})};var f,v,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var w,V,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Select options={sampleOptions} placeholder="Choose an option" defaultValue="opt-1" />
    </div>
}`,...(S=(V=n.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var C,y,O;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [value, setValue] = useState("opt-1");
    return <div className="sb-column sb-width-300">
        <Stack spacing={400}>
          <Text>Value: {value}</Text>
          <Select placeholder="Choose an option" options={sampleOptions} value={value} onChange={e => setValue(e.value)} />
        </Stack>
      </div>;
  }
}`,...(O=(y=s.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var N,x,k;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Select options={sampleOptions} placeholder="Choose an option" />
    </div>
}`,...(k=(x=l.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var W,G,D;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
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
}`,...(D=(G=i.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var M,P,T;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Select options={sampleOptionsWithGroups} placeholder="Choose an option" defaultValue="opt-1" grouped="right" />
    </div>
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var E,B,F;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Select options={sampleOptions} placeholder="Choose an option" defaultValue="opt-1" error={true} />
    </div>
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var I,U,_;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
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
}`,...(_=(U=c.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var A,j,q;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Select options={sampleOptions} placeholder="Choose an option" defaultValue="opt-1" prefix={<Icon glyph={searchGlyph} intent="neutral" intentModifiers="secondary" variant="scaled" />} />
    </div>
}`,...(q=(j=u.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,H,J;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Select options={sampleOptions} placeholder="Choose an option" defaultValue="opt-1" menuWidth={300} />
    </div>
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const fe=["Demo","Uncontrolled","Controlled","Placeholder","Grouped","GroupedOptions","Error","Disabled","Prefix","MenuWidth"];export{s as Controlled,a as Demo,c as Disabled,d as Error,i as Grouped,p as GroupedOptions,m as MenuWidth,l as Placeholder,u as Prefix,n as Uncontrolled,fe as __namedExportsOrder,be as default};
