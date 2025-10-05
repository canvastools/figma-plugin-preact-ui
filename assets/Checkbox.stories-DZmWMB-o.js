import{u as e,d as U}from"./hooks.module-Dxk9uxGs.js";import{f as _}from"./index-BWINGljf.js";import{C as a}from"./Checkbox-CoZjP9EM.js";import{S as r}from"./Stack-CNzGXmi4.js";import{T as O}from"./Text-C438qO9S.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";import"./Icon-Btq4UltS.js";import"./check-z8WFgJZW.js";import"./mixed-CVum6wgS.js";const R={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},checked:{control:{disable:!0},table:{type:{summary:"boolean"}}},defaultChecked:{control:{type:"boolean"},description:"Initial checked state for uncontrolled mode.",defaultValue:{summary:!1},table:{type:{summary:"boolean"}}},mixed:{control:{type:"boolean"},defaultValue:{summary:!1}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},label:{control:{type:"text"}},onChange:{action:"clicked",description:"Callback when the checkbox is clicked.",table:{type:{summary:"(args: {event: MouseEvent; checked: boolean}) => void"}}}}},s={tags:["!autodocs"],args:{className:"",defaultChecked:!1,mixed:!1,disabled:!1,label:"Checkbox",onChange:_()},parameters:{viewport:{defaultViewport:"large"}},render:l=>e("div",{className:"sb-column sb-width-full",children:e(a,{...l})})},t={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(a,{defaultChecked:!0,label:"Checked True"})})},d={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[l,L]=U(!1);return e("div",{className:"sb-column sb-width-full",children:e(r,{spacing:400,children:[e(O,{children:["Value: ",l?"true":"false"]}),e(a,{checked:l,label:"Checked True",onChange:E=>L(E.checked)})]})})}},c={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{spacing:400,children:[e(a,{defaultChecked:!0,label:"Checked True"}),e(a,{defaultChecked:!1,label:"Checked False"})]})})},n={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{spacing:400,children:[e(a,{defaultChecked:!0,mixed:!0,label:"Checkbox True Mixed"}),e(a,{defaultChecked:!1,mixed:!0,label:"Checkbox False Mixed"})]})})},o={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{spacing:400,children:[e(a,{defaultChecked:!0,disabled:!0,label:"Checked True Disabled"}),e(a,{defaultChecked:!1,disabled:!0,label:"Checked False Disabled"}),e(a,{checked:!0,disabled:!0,mixed:!0,label:"Checkbox True Mixed Disabled"}),e(a,{checked:!1,disabled:!0,mixed:!0,label:"Checkbox False Mixed Disabled"})]})})},i={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{spacing:400,children:[e(a,{label:"Labelled"}),e(a,{})]})})};var u,b,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
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
}`,...(m=(b=s.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var h,p,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(p=t.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var f,C,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(C=d.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var g,w,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(w=c.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var S,V,N;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(N=(V=n.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var T,y,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(y=o.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var M,F,I;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(I=(F=i.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const W=["Demo","Uncontrolled","Controlled","Checked","Mixed","Disabled","Label"];export{c as Checked,d as Controlled,s as Demo,o as Disabled,i as Label,n as Mixed,t as Uncontrolled,W as __namedExportsOrder,R as default};
