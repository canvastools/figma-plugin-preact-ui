import{u as e,d as j}from"./hooks.module-Dxk9uxGs.js";import{f as l}from"./index-BWINGljf.js";import{I as n}from"./Input-Cd8rGMV0.js";import{S as t}from"./Section-45ajfN6P.js";import{S as m}from"./Stack-CayROFGf.js";import{I as a}from"./Icon-C8lq2hDK.js";import{T as q}from"./Text-Dvytwbdg.js";import{B as h}from"./ButtonIcon-DcWQ0H1k.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-cP-mn0Xe.js";import"./compat.module-c0s5p6eE.js";const ne={title:"Components/Input",component:n,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},placeholder:{control:{type:"text"}},defaultValue:{control:{type:"text"},description:"Initial value for uncontrolled mode."},value:{control:{disable:!0},description:"Value for controlled mode.",table:{type:{summary:"string"}}},ghost:{control:{type:"boolean"}},error:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},prefix:{table:{type:{summary:"JSX.Element"}},description:"Element inserted before value.",control:{disable:!0}},suffix:{table:{type:{summary:"JSX.Element"}},description:"Element inserted after value. Visible on hover/focus.",control:{disable:!0}},focusOnDoubleClick:{control:{type:"boolean"},description:"Enables double-click focus"},onChange:{action:"changed",description:"Callback function that is called when the value is changed.",table:{type:{summary:"(args: { event: MouseEvent; value: string }) => void"}}},onBlur:{action:"blurred",description:"Callback function that is called when the input is blurred.",table:{type:{summary:"(args: { event: MouseEvent; value: string }) => void"}}},onFocus:{action:"focused",description:"Callback function that is called when the input is focused.",table:{type:{summary:"(args: { event: MouseEvent; value: string }) => void"}}},onKeyDown:{action:"keydown",description:"Callback function that is called when the input is keyed down.",table:{type:{summary:"(args: { event: KeyboardEvent; value: string }) => void"}}}}},s={tags:["!autodocs"],args:{className:"",placeholder:"Placeholder",defaultValue:"",ghost:!1,error:!1,disabled:!1,focusOnDoubleClick:!1,onChange:l(),onBlur:l(),onFocus:l(),onKeyDown:l()},parameters:{viewport:{defaultViewport:"large"}},render:r=>e("div",{className:"sb-column sb-gap-16",style:{width:"30%"},children:e(t,{children:e(n,{...r})})})},o={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full sb-width-300",children:e(t,{children:e(n,{defaultValue:"Default Value"})})})},i={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[r,X]=j("");return e("div",{className:"sb-column sb-width-full sb-width-300",children:[e(t,{children:e(q,{children:["Value: ",r]})}),e(t,{children:e(n,{value:r,onChange:_=>X(_.value)})})]})}},d={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full sb-width-300",children:e(t,{children:e(m,{spacing:400,children:[e(n,{}),e(n,{placeholder:"Placeholder"})]})})})},c={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full sb-width-300",children:e(t,{children:e(n,{defaultValue:"Default Value",ghost:!0})})})},u={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full sb-width-300",children:e(t,{children:e(m,{spacing:400,children:[e(n,{disabled:!0}),e(n,{disabled:!0,placeholder:"Placeholder"}),e(n,{disabled:!0,defaultValue:"Default Value"})]})})})},p={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full sb-width-300",children:e(t,{children:e(m,{spacing:400,children:[e(n,{prefix:e(a,{glyph:"search",intent:"neutral",intentModifiers:"secondary",variant:"scaled"})}),e(n,{placeholder:"Placeholder",prefix:e(a,{glyph:"search",intent:"neutral",intentModifiers:"secondary",variant:"scaled"})}),e(n,{defaultValue:"Default Value",prefix:e(a,{glyph:"search",intent:"neutral",intentModifiers:"secondary",variant:"scaled"})})]})})})},f={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full sb-width-300",children:e(t,{children:e(m,{spacing:400,children:[e(n,{suffix:e(h,{intent:"neutral",intentModifiers:"default",translucent:!0,children:e(a,{glyph:"link",intent:"neutral",intentModifiers:"default",variant:"scaled"})})}),e(n,{placeholder:"Placeholder",suffix:e(h,{intent:"neutral",intentModifiers:"default",translucent:!0,children:e(a,{glyph:"link",intent:"neutral",intentModifiers:"default",variant:"scaled"})})}),e(n,{defaultValue:"Default Value",suffix:e(h,{intent:"neutral",intentModifiers:"default",translucent:!0,children:e(a,{glyph:"link",intent:"neutral",intentModifiers:"default",variant:"scaled"})})})]})})})};var b,v,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    placeholder: "Placeholder",
    defaultValue: "",
    ghost: false,
    error: false,
    disabled: false,
    focusOnDoubleClick: false,
    onChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
    onKeyDown: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-gap-16" style={{
    width: "30%"
  }}>
      <Section>
        <Input {...args} />
      </Section>
    </div>
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var w,y,V;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full sb-width-300">
      <Section>
        <Input defaultValue="Default Value" />
      </Section>
    </div>
}`,...(V=(y=o.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var S,I,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [value, setValue] = useState("");
    return <div className="sb-column sb-width-full sb-width-300">
        <Section>
          <Text>Value: {value}</Text>
        </Section>
        <Section>
          <Input value={value} onChange={args => setValue(args.value)} />
        </Section>
      </div>;
  }
}`,...(x=(I=i.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var k,M,D;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full sb-width-300">
      <Section>
        <Stack spacing={400}>
          <Input />
          <Input placeholder="Placeholder" />
        </Stack>
      </Section>
    </div>
}`,...(D=(M=d.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var N,C,P;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full sb-width-300">
      <Section>
        <Input defaultValue="Default Value" ghost />
      </Section>
    </div>
}`,...(P=(C=c.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var B,E,T;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full sb-width-300">
      <Section>
        <Stack spacing={400}>
          <Input disabled />
          <Input disabled placeholder="Placeholder" />
          <Input disabled defaultValue="Default Value" />
        </Stack>
      </Section>
    </div>
}`,...(T=(E=u.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var K,O,F;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full sb-width-300">
      <Section>
        <Stack spacing={400}>
          <Input prefix={<Icon glyph="search" intent="neutral" intentModifiers="secondary" variant="scaled" />} />
          <Input placeholder="Placeholder" prefix={<Icon glyph="search" intent="neutral" intentModifiers="secondary" variant="scaled" />} />
          <Input defaultValue="Default Value" prefix={<Icon glyph="search" intent="neutral" intentModifiers="secondary" variant="scaled" />} />
        </Stack>
      </Section>
    </div>
}`,...(F=(O=p.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var G,J,U;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full sb-width-300">
      <Section>
        <Stack spacing={400}>
          <Input suffix={<ButtonIcon intent="neutral" intentModifiers="default" translucent>
                <Icon glyph="link" intent="neutral" intentModifiers="default" variant="scaled" />
              </ButtonIcon>} />
          <Input placeholder="Placeholder" suffix={<ButtonIcon intent="neutral" intentModifiers="default" translucent>
                <Icon glyph="link" intent="neutral" intentModifiers="default" variant="scaled" />
              </ButtonIcon>} />
          <Input defaultValue="Default Value" suffix={<ButtonIcon intent="neutral" intentModifiers="default" translucent>
                <Icon glyph="link" intent="neutral" intentModifiers="default" variant="scaled" />
              </ButtonIcon>} />
        </Stack>
      </Section>
    </div>
}`,...(U=(J=f.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};const te=["Demo","Uncontrolled","Controlled","Placeholder","Ghost","Disabled","Prefix","Suffix"];export{i as Controlled,s as Demo,u as Disabled,c as Ghost,d as Placeholder,p as Prefix,f as Suffix,o as Uncontrolled,te as __namedExportsOrder,ne as default};
