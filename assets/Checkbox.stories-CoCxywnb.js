import{u as e,d as _}from"./hooks.module-Dxk9uxGs.js";import{f as O}from"./index-BWINGljf.js";import{C as a}from"./Checkbox-D8VWU4Bi.js";import{T as j}from"./Text-Dvytwbdg.js";import{S as r}from"./Section-45ajfN6P.js";import{S as u}from"./Stack-CayROFGf.js";import"./preact.module-DKQ80Dzn.js";import"./Icon-C8lq2hDK.js";import"./typedForwardRef-cP-mn0Xe.js";import"./compat.module-c0s5p6eE.js";const R={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},checked:{control:{type:"boolean"}},defaultChecked:{control:{type:"boolean"},description:"Initial checked state for uncontrolled mode.",table:{type:{summary:"boolean"}}},mixed:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},label:{control:{type:"text"}},onChange:{action:"clicked",description:"Callback function that is called when the checkbox is clicked.",table:{type:{summary:"(args: {event: MouseEvent; checked: boolean}) => void"}}}}},n={tags:["!autodocs"],args:{className:"",defaultChecked:!1,mixed:!1,disabled:!1,label:"Checkbox",onChange:O()},parameters:{viewport:{defaultViewport:"large"}},render:l=>e("div",{className:"sb-column sb-width-full",children:e(r,{children:e(a,{...l})})})},s={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{children:e(a,{defaultChecked:!0,label:"Checked True"})})})},t={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[l,E]=_(!1);return e("div",{className:"sb-column sb-width-full",children:[e(r,{children:e(j,{children:["Value: ",l?"true":"false"]})}),e(r,{children:e(a,{checked:l,label:"Checked True",onChange:U=>E(U.checked)})})]})}},c={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{children:e(u,{spacing:400,children:[e(a,{defaultChecked:!0,label:"Checked True"}),e(a,{defaultChecked:!1,label:"Checked False"})]})})})},d={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{children:e(u,{spacing:400,children:[e(a,{defaultChecked:!0,mixed:!0,label:"Checkbox True Mixed"}),e(a,{defaultChecked:!1,mixed:!0,label:"Checkbox False Mixed"})]})})})},o={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{children:e(u,{spacing:400,children:[e(a,{defaultChecked:!0,disabled:!0,label:"Checked True Disabled"}),e(a,{defaultChecked:!1,disabled:!0,label:"Checked False Disabled"}),e(a,{checked:!0,disabled:!0,mixed:!0,label:"Checkbox True Mixed Disabled"}),e(a,{checked:!1,disabled:!0,mixed:!0,label:"Checkbox False Mixed Disabled"})]})})})},i={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{children:e(u,{spacing:400,children:[e(a,{label:"Labelled"}),e(a,{})]})})})};var b,h,m;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      <Section>
        <Checkbox {...args} />
      </Section>
    </div>
}`,...(m=(h=n.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,k,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Section>
        <Checkbox defaultChecked={true} label="Checked True" />
      </Section>
    </div>
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var C,x,g;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        <Section>
          <Text>Value: {isChecked ? "true" : "false"}</Text>
        </Section>
        <Section>
          <Checkbox checked={isChecked} label="Checked True" onChange={args => setIsChecked(args.checked)} />
        </Section>
      </div>;
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var w,v,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Section>
        <Stack spacing={400}>
          <Checkbox defaultChecked={true} label="Checked True" />
          <Checkbox defaultChecked={false} label="Checked False" />
        </Stack>
      </Section>
    </div>
}`,...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var N,T,V;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Section>
        <Stack spacing={400}>
          <Checkbox defaultChecked={true} mixed={true} label="Checkbox True Mixed" />
          <Checkbox defaultChecked={false} mixed={true} label="Checkbox False Mixed" />
        </Stack>
      </Section>
    </div>
}`,...(V=(T=d.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var D,y,M;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Section>
        <Stack spacing={400}>
          <Checkbox defaultChecked={true} disabled label="Checked True Disabled" />
          <Checkbox defaultChecked={false} disabled label="Checked False Disabled" />
          <Checkbox checked={true} disabled mixed label="Checkbox True Mixed Disabled" />
          <Checkbox checked={false} disabled mixed label="Checkbox False Mixed Disabled" />
        </Stack>
      </Section>
    </div>
}`,...(M=(y=o.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var F,I,L;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Section>
        <Stack spacing={400}>
          <Checkbox label="Labelled" />
          <Checkbox />
        </Stack>
      </Section>
    </div>
}`,...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const W=["Demo","Uncontrolled","Controlled","Checked","Mixed","Disabled","Label"];export{c as Checked,t as Controlled,n as Demo,o as Disabled,i as Label,d as Mixed,s as Uncontrolled,W as __namedExportsOrder,R as default};
