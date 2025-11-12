import{u as e,d as Z}from"./hooks.module-Dxk9uxGs.js";import{f as l}from"./index-BWINGljf.js";import{I as a}from"./Input-DsvIeshM.js";import{S as t}from"./Stack-CNzGXmi4.js";import{T as V}from"./Text-C438qO9S.js";import{I as n}from"./Icon-Btq4UltS.js";import{s as b}from"./search-GiDdSaGr.js";import{B as g}from"./ButtonIcon-CmvKCPtf.js";import{l as v}from"./link-rAUwSha6.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";const ce={title:"Components/Input",component:a,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},placeholder:{control:{type:"text"}},type:{control:{type:"radio"},options:["text","number"],defaultValue:{summary:"text"},table:{type:{summary:"string"}}},defaultValue:{control:{type:"text"},description:"Initial value for uncontrolled mode."},value:{control:{disable:!0},description:"Value for controlled mode.",table:{type:{summary:"string"}}},ghost:{control:{type:"boolean"},defaultValue:{summary:!1}},grouped:{control:{radio:"select"},options:["none","left","right","both"],defaultValue:{summary:"none"},table:{type:{summary:"string"}}},error:{control:{type:"boolean"},defaultValue:{summary:!1}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},prefix:{table:{type:{summary:"JSX.Element"}},description:"Element inserted before value.",control:{disable:!0}},suffix:{table:{type:{summary:"JSX.Element"}},description:"Element inserted after value. Visible on hover/focus.",control:{disable:!0}},suffixOnHover:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Whether the suffix should be visible on hover."},focusOnDoubleClick:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Enables double-click focus"},onChange:{action:"changed",description:"Callback when the value is changed.",table:{type:{summary:"(args: { event: MouseEvent; value: string }) => void"}}},onBlur:{action:"blurred",description:"Callback when the input is blurred.",table:{type:{summary:"(args: { event: MouseEvent; value: string }) => void"}}},onFocus:{action:"focused",description:"Callback when the input is focused.",table:{type:{summary:"(args: { event: MouseEvent; value: string }) => void"}}},onKeyDown:{action:"keydown",description:"Callback when the input is keyed down.",table:{type:{summary:"(args: { event: KeyboardEvent; value: string }) => void"}}}}},o={tags:["!autodocs"],args:{className:"",type:"text",placeholder:"Placeholder",defaultValue:"",ghost:!1,error:!1,disabled:!1,grouped:"none",suffixOnHover:!1,focusOnDoubleClick:!1,onChange:l(),onBlur:l(),onFocus:l(),onKeyDown:l()},parameters:{viewport:{defaultViewport:"large"}},render:r=>e("div",{className:"sb-column sb-width-300",children:e(a,{...r})})},s={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(a,{defaultValue:"Default Value"})})},u={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[r,R]=Z("");return e("div",{className:"sb-column sb-width-300",children:e(t,{spacing:400,children:[e(V,{children:["Value: ",r]}),e(a,{value:r,onChange:Y=>R(Y.value)})]})})}},i={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(t,{spacing:400,children:[e(a,{}),e(a,{placeholder:"Placeholder"})]})})},d={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(a,{defaultValue:"Default Value",ghost:!0})})},c={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(t,{spacing:400,children:[e(V,{children:"Grouped"}),e(t,{spacing:0,direction:"row",children:[e(a,{defaultValue:"Default Value",grouped:"right"}),e(a,{defaultValue:"Default Value",grouped:"both"}),e(a,{defaultValue:"Default Value",grouped:"left"})]}),e(V,{children:"Grouped with .InputGrouped class wrapper"}),e(t,{spacing:0,direction:"row",className:"InputGrouped",children:[e(a,{defaultValue:"Default Value",grouped:"right"}),e(a,{defaultValue:"Default Value",grouped:"both"}),e(a,{defaultValue:"Default Value",grouped:"left"})]})]})})},p={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(t,{spacing:400,children:[e(a,{disabled:!0}),e(a,{disabled:!0,placeholder:"Placeholder"}),e(a,{disabled:!0,defaultValue:"Default Value"})]})})},f={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(t,{spacing:400,children:[e(a,{prefix:e(n,{glyph:b,intent:"neutral",intentModifiers:"secondary",variant:"scaled"})}),e(a,{placeholder:"Placeholder",prefix:e(n,{glyph:b,intent:"neutral",intentModifiers:"secondary",variant:"scaled"})}),e(a,{defaultValue:"Default Value",prefix:e(n,{glyph:b,intent:"neutral",intentModifiers:"secondary",variant:"scaled"})})]})})},m={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(t,{spacing:400,children:[e(a,{suffix:e(g,{intent:"neutral",intentModifiers:"default",translucent:!0,children:e(n,{glyph:v,intent:"neutral",intentModifiers:"default",variant:"scaled"})})}),e(a,{placeholder:"Placeholder",suffix:e(g,{intent:"neutral",intentModifiers:"default",translucent:!0,children:e(n,{glyph:v,intent:"neutral",intentModifiers:"default",variant:"scaled"})})}),e(a,{defaultValue:"Suffix on hover",suffixOnHover:!0,suffix:e(g,{intent:"neutral",intentModifiers:"default",translucent:!0,children:e(n,{glyph:v,intent:"neutral",intentModifiers:"default",variant:"scaled"})})})]})})},h={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(a,{focusOnDoubleClick:!0,value:"Focus on double click"})})};var w,y,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    type: "text",
    placeholder: "Placeholder",
    defaultValue: "",
    ghost: false,
    error: false,
    disabled: false,
    grouped: "none",
    suffixOnHover: false,
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
  render: args => <div className="sb-column sb-width-300">
      <Input {...args} />
    </div>
}`,...(I=(y=o.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var x,k,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Input defaultValue="Default Value" />
    </div>
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var D,N,M;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    return <div className="sb-column sb-width-300">
        <Stack spacing={400}>
          <Text>Value: {value}</Text>
          <Input value={value} onChange={args => setValue(args.value)} />
        </Stack>
      </div>;
  }
}`,...(M=(N=u.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var C,G,P;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        <Input />
        <Input placeholder="Placeholder" />
      </Stack>
    </div>
}`,...(P=(G=i.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var O,B,E;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Input defaultValue="Default Value" ghost />
    </div>
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var T,F,H;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
        <Text>Grouped</Text>
        <Stack spacing={0} direction="row">
          <Input defaultValue="Default Value" grouped="right" />
          <Input defaultValue="Default Value" grouped="both" />
          <Input defaultValue="Default Value" grouped="left" />
        </Stack>
        <Text>Grouped with .InputGrouped class wrapper</Text>
        <Stack spacing={0} direction="row" className="InputGrouped">
          <Input defaultValue="Default Value" grouped="right" />
          <Input defaultValue="Default Value" grouped="both" />
          <Input defaultValue="Default Value" grouped="left" />
        </Stack>
      </Stack>
    </div>
}`,...(H=(F=c.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var K,J,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
        <Input disabled />
        <Input disabled placeholder="Placeholder" />
        <Input disabled defaultValue="Default Value" />
      </Stack>
    </div>
}`,...(U=(J=p.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var X,_,W;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
        <Input prefix={<Icon glyph={searchGlyph} intent="neutral" intentModifiers="secondary" variant="scaled" />} />
        <Input placeholder="Placeholder" prefix={<Icon glyph={searchGlyph} intent="neutral" intentModifiers="secondary" variant="scaled" />} />
        <Input defaultValue="Default Value" prefix={<Icon glyph={searchGlyph} intent="neutral" intentModifiers="secondary" variant="scaled" />} />
      </Stack>
    </div>
}`,...(W=(_=f.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var j,q,z;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        <Input suffix={<ButtonIcon intent="neutral" intentModifiers="default" translucent>
              <Icon glyph={linkGlyph} intent="neutral" intentModifiers="default" variant="scaled" />
            </ButtonIcon>} />
        <Input placeholder="Placeholder" suffix={<ButtonIcon intent="neutral" intentModifiers="default" translucent>
              <Icon glyph={linkGlyph} intent="neutral" intentModifiers="default" variant="scaled" />
            </ButtonIcon>} />
        <Input defaultValue="Suffix on hover" suffixOnHover suffix={<ButtonIcon intent="neutral" intentModifiers="default" translucent>
              <Icon glyph={linkGlyph} intent="neutral" intentModifiers="default" variant="scaled" />
            </ButtonIcon>} />
      </Stack>
    </div>
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var A,L,Q;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Input focusOnDoubleClick value="Focus on double click" />
    </div>
}`,...(Q=(L=h.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};const pe=["Demo","Uncontrolled","Controlled","Placeholder","Ghost","Grouped","Disabled","Prefix","Suffix","FocusOnDoubleClick"];export{u as Controlled,o as Demo,p as Disabled,h as FocusOnDoubleClick,d as Ghost,c as Grouped,i as Placeholder,f as Prefix,m as Suffix,s as Uncontrolled,pe as __namedExportsOrder,ce as default};
