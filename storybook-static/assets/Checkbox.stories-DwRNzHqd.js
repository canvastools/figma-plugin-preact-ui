import{u as e,d as j}from"./hooks.module-Dxk9uxGs.js";import{f as q}from"./index-BWINGljf.js";import{C as a}from"./Checkbox-zeB5Riup.js";import{S as r}from"./Stack-CNzGXmi4.js";import{T as z}from"./Text-C438qO9S.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";import"./Icon-Btq4UltS.js";import"./check-z8WFgJZW.js";import"./mixed-CVum6wgS.js";const Z={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},intent:{control:{type:"radio"},options:["neutral","brand"],defaultValue:{summary:"neutral"}},intentModifiers:{control:{type:"radio"},options:["default"],defaultValue:{summary:"default"}},checked:{control:{disable:!0},table:{type:{summary:"boolean"}}},defaultChecked:{control:{type:"boolean"},description:"Initial checked state for uncontrolled mode.",defaultValue:{summary:!1},table:{type:{summary:"boolean"}}},mixed:{control:{type:"boolean"},defaultValue:{summary:!1}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},label:{control:{type:"text"}},onChange:{action:"clicked",description:"Callback when the checkbox is clicked.",table:{type:{summary:"(args: {event: MouseEvent; checked: boolean}) => void"}}}}},l={tags:["!autodocs"],args:{className:"",intent:"neutral",intentModifiers:"default",defaultChecked:!1,mixed:!1,disabled:!1,label:"Checkbox",onChange:q()},parameters:{viewport:{defaultViewport:"large"}},render:t=>e("div",{className:"sb-column sb-width-full",children:e(a,{...t})})},n={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(a,{defaultChecked:!0,label:"Checked True"})})},s={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[t,_]=j(!1);return e("div",{className:"sb-column sb-width-full",children:e(r,{spacing:400,children:[e(z,{children:["Value: ",t?"true":"false"]}),e(a,{checked:t,label:"Checked True",onChange:O=>_(O.checked)})]})})}},d={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{spacing:400,children:[e(a,{intent:"brand",intentModifiers:"default",label:"Brand Default",checked:!0}),e(a,{intent:"brand",intentModifiers:"default",label:"Brand Default"}),e(a,{intent:"neutral",intentModifiers:"default",label:"Neutral Default",checked:!0}),e(a,{intent:"neutral",intentModifiers:"default",label:"Neutral Default"})]})})},c={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{spacing:400,children:[e(a,{defaultChecked:!0,label:"Checked True"}),e(a,{defaultChecked:!1,label:"Checked False"})]})})},o={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{spacing:400,children:[e(a,{defaultChecked:!0,mixed:!0,label:"Checkbox True Mixed"}),e(a,{defaultChecked:!1,mixed:!0,label:"Checkbox False Mixed"})]})})},i={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{spacing:400,children:[e(a,{defaultChecked:!0,disabled:!0,label:"Checked True Disabled"}),e(a,{defaultChecked:!1,disabled:!0,label:"Checked False Disabled"}),e(a,{checked:!0,disabled:!0,mixed:!0,label:"Checkbox True Mixed Disabled"}),e(a,{checked:!1,disabled:!0,mixed:!0,label:"Checkbox False Mixed Disabled"})]})})},u={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{spacing:400,children:[e(a,{label:"Labelled"}),e(a,{})]})})};var b,m,p;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    intent: "neutral",
    intentModifiers: "default",
    defaultChecked: false,
    mixed: false,
    disabled: false,
    label: "Checkbox",
    onChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <Checkbox {...args} />
    </div>
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,f,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Checkbox defaultChecked={true} label="Checked True" />
    </div>
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var C,x,g;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [isChecked, setIsChecked] = useState(false);
    return <div className="sb-column sb-width-full">
        <Stack spacing={400}>
          <Text>Value: {isChecked ? "true" : "false"}</Text>
          <Checkbox checked={isChecked} label="Checked True" onChange={args => setIsChecked(args.checked)} />
        </Stack>
      </div>;
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var w,v,N;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Checkbox intent="brand" intentModifiers="default" label="Brand Default" checked={true} />
        <Checkbox intent="brand" intentModifiers="default" label="Brand Default" />

        <Checkbox intent="neutral" intentModifiers="default" label="Neutral Default" checked={true} />
        <Checkbox intent="neutral" intentModifiers="default" label="Neutral Default" />
      </Stack>
    </div>
}`,...(N=(v=d.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var S,V,M;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Checkbox defaultChecked={true} label="Checked True" />
        <Checkbox defaultChecked={false} label="Checked False" />
      </Stack>
    </div>
}`,...(M=(V=c.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var D,y,T;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Checkbox defaultChecked={true} mixed={true} label="Checkbox True Mixed" />
        <Checkbox defaultChecked={false} mixed={true} label="Checkbox False Mixed" />
      </Stack>
    </div>
}`,...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var F,I,B;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Checkbox defaultChecked={true} disabled label="Checked True Disabled" />
        <Checkbox defaultChecked={false} disabled label="Checked False Disabled" />
        <Checkbox checked={true} disabled mixed label="Checkbox True Mixed Disabled" />
        <Checkbox checked={false} disabled mixed label="Checkbox False Mixed Disabled" />
      </Stack>
    </div>
}`,...(B=(I=i.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var L,E,U;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Checkbox label="Labelled" />
        <Checkbox />
      </Stack>
    </div>
}`,...(U=(E=u.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};const $=["Demo","Uncontrolled","Controlled","Intent","Checked","Mixed","Disabled","Label"];export{c as Checked,s as Controlled,l as Demo,i as Disabled,d as Intent,u as Label,o as Mixed,n as Uncontrolled,$ as __namedExportsOrder,Z as default};
