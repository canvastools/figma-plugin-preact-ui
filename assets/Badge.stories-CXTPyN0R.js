import{u as n}from"./hooks.module-Dxk9uxGs.js";import{B as e}from"./Badge-DPBljnKj.js";import{S as d}from"./Stack-CNzGXmi4.js";import{I as t}from"./Icon-Btq4UltS.js";import{h as r}from"./help-BnFRtrMN.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";import"./Text-C438qO9S.js";const k={title:"Components/Badge",component:e,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},intent:{control:{type:"radio"},options:["neutral","neutral-inverted","brand","danger","warning","success"],defaultValue:{summary:"neutral"}},intentModifiers:{control:{type:"radio"},options:["default","secondary","brand","danger","warning","success"],defaultValue:{summary:"default"}},prefix:{table:{type:{summary:"JSX.Element"}},control:{disable:!0},description:"Element inserted before children."},suffix:{table:{type:{summary:"JSX.Element"}},control:{disable:!0},description:"Element inserted after children."},children:{table:{type:{summary:"string | number | JSX.Element"}},control:{type:"text"}}}},i={tags:["!autodocs"],args:{className:"",intent:"neutral",intentModifiers:"default",children:"Badge"},parameters:{viewport:{defaultViewport:"large"}},render:N=>n("div",{className:"sb-column sb-width-full",children:n(e,{...N})})},a={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>n("div",{className:"sb-column sb-width-full",children:n(d,{spacing:400,children:[n(e,{intent:"neutral",children:"Neutral"}),n(e,{intent:"neutral",intentModifiers:"secondary",children:"Neutral Secondary"}),n(e,{intent:"neutral",intentModifiers:"brand",children:"Neutral Brand"}),n(e,{intent:"neutral",intentModifiers:"danger",children:"Neutral Danger"}),n(e,{intent:"neutral",intentModifiers:"warning",children:"Neutral Warning"}),n(e,{intent:"neutral",intentModifiers:"success",children:"Neutral Success"}),n(e,{intent:"neutral-inverted",children:"Neutral Inverted"}),n(e,{intent:"brand",children:"Brand"}),n(e,{intent:"danger",children:"Danger"}),n(e,{intent:"warning",children:"Warning"}),n(e,{intent:"success",children:"Success"})]})})},s={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>n("div",{className:"sb-column sb-width-full",children:n(d,{spacing:400,children:[n(e,{intent:"neutral",prefix:n(t,{glyph:r,size:16,intent:"neutral"}),children:"Neutral"}),n(e,{intent:"neutral",intentModifiers:"secondary",prefix:n(t,{glyph:r,size:16,intent:"neutral",intentModifiers:"secondary"}),children:"Neutral Secondary"}),n(e,{intent:"neutral",intentModifiers:"brand",prefix:n(t,{glyph:r,size:16,intent:"neutral",intentModifiers:"brand"}),children:"Neutral Brand"}),n(e,{intent:"neutral",intentModifiers:"danger",prefix:n(t,{glyph:r,size:16,intent:"neutral",intentModifiers:"danger"}),children:"Neutral Danger"}),n(e,{intent:"neutral",intentModifiers:"warning",prefix:n(t,{glyph:r,size:16,intent:"neutral",intentModifiers:"warning"}),children:"Neutral Warning"}),n(e,{intent:"neutral",intentModifiers:"success",prefix:n(t,{glyph:r,size:16,intent:"neutral",intentModifiers:"success"}),children:"Neutral Success"}),n(e,{intent:"neutral-inverted",prefix:n(t,{glyph:r,size:16,intent:"neutral-inverted"}),children:"Neutral Inverted"}),n(e,{intent:"brand",prefix:n(t,{glyph:r,size:16,intent:"brand"}),children:"Brand"}),n(e,{intent:"danger",prefix:n(t,{glyph:r,size:16,intent:"danger"}),children:"Danger"}),n(e,{intent:"warning",prefix:n(t,{glyph:r,size:16,intent:"warning"}),children:"Warning"}),n(e,{intent:"success",prefix:n(t,{glyph:r,size:16,intent:"success"}),children:"Success"})]})})},l={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>n("div",{className:"sb-column sb-width-full",children:n(d,{spacing:400,children:[n(e,{intent:"neutral",suffix:n(t,{glyph:r,size:16,intent:"neutral"}),children:"Neutral"}),n(e,{intent:"neutral",intentModifiers:"secondary",suffix:n(t,{glyph:r,size:16,intent:"neutral",intentModifiers:"secondary"}),children:"Neutral Secondary"}),n(e,{intent:"neutral",intentModifiers:"brand",suffix:n(t,{glyph:r,size:16,intent:"neutral",intentModifiers:"brand"}),children:"Neutral Brand"}),n(e,{intent:"neutral",intentModifiers:"danger",suffix:n(t,{glyph:r,size:16,intent:"neutral",intentModifiers:"danger"}),children:"Neutral Danger"}),n(e,{intent:"neutral",intentModifiers:"warning",suffix:n(t,{glyph:r,size:16,intent:"neutral",intentModifiers:"warning"}),children:"Neutral Warning"}),n(e,{intent:"neutral",intentModifiers:"success",suffix:n(t,{glyph:r,size:16,intent:"neutral",intentModifiers:"success"}),children:"Neutral Success"}),n(e,{intent:"neutral-inverted",suffix:n(t,{glyph:r,size:16,intent:"neutral-inverted"}),children:"Neutral Inverted"}),n(e,{intent:"brand",suffix:n(t,{glyph:r,size:16,intent:"brand"}),children:"Brand"}),n(e,{intent:"danger",suffix:n(t,{glyph:r,size:16,intent:"danger"}),children:"Danger"}),n(e,{intent:"warning",suffix:n(t,{glyph:r,size:16,intent:"warning"}),children:"Warning"}),n(e,{intent:"success",suffix:n(t,{glyph:r,size:16,intent:"success"}),children:"Success"})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    intent: "neutral",
    intentModifiers: "default",
    children: "Badge"
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <Badge {...args} />
    </div>
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var o,p,f;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        <Badge intent="neutral">Neutral</Badge>
        <Badge intent="neutral" intentModifiers="secondary">
          Neutral Secondary
        </Badge>
        <Badge intent="neutral" intentModifiers="brand">
          Neutral Brand
        </Badge>
        <Badge intent="neutral" intentModifiers="danger">
          Neutral Danger
        </Badge>
        <Badge intent="neutral" intentModifiers="warning">
          Neutral Warning
        </Badge>
        <Badge intent="neutral" intentModifiers="success">
          Neutral Success
        </Badge>
        <Badge intent="neutral-inverted">Neutral Inverted</Badge>
        <Badge intent="brand">Brand</Badge>
        <Badge intent="danger">Danger</Badge>
        <Badge intent="warning">Warning</Badge>
        <Badge intent="success">Success</Badge>
      </Stack>
    </div>
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,y,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
        <Badge intent="neutral" prefix={<Icon glyph={glyphs.help} size={16} intent="neutral" />}>
          Neutral
        </Badge>
        <Badge intent="neutral" intentModifiers="secondary" prefix={<Icon glyph={glyphs.help} size={16} intent="neutral" intentModifiers="secondary" />}>
          Neutral Secondary
        </Badge>
        <Badge intent="neutral" intentModifiers="brand" prefix={<Icon glyph={glyphs.help} size={16} intent="neutral" intentModifiers="brand" />}>
          Neutral Brand
        </Badge>
        <Badge intent="neutral" intentModifiers="danger" prefix={<Icon glyph={glyphs.help} size={16} intent="neutral" intentModifiers="danger" />}>
          Neutral Danger
        </Badge>
        <Badge intent="neutral" intentModifiers="warning" prefix={<Icon glyph={glyphs.help} size={16} intent="neutral" intentModifiers="warning" />}>
          Neutral Warning
        </Badge>
        <Badge intent="neutral" intentModifiers="success" prefix={<Icon glyph={glyphs.help} size={16} intent="neutral" intentModifiers="success" />}>
          Neutral Success
        </Badge>
        <Badge intent="neutral-inverted" prefix={<Icon glyph={glyphs.help} size={16} intent="neutral-inverted" />}>
          Neutral Inverted
        </Badge>
        <Badge intent="brand" prefix={<Icon glyph={glyphs.help} size={16} intent="brand" />}>
          Brand
        </Badge>
        <Badge intent="danger" prefix={<Icon glyph={glyphs.help} size={16} intent="danger" />}>
          Danger
        </Badge>
        <Badge intent="warning" prefix={<Icon glyph={glyphs.help} size={16} intent="warning" />}>
          Warning
        </Badge>
        <Badge intent="success" prefix={<Icon glyph={glyphs.help} size={16} intent="success" />}>
          Success
        </Badge>
      </Stack>
    </div>
}`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var m,x,M;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        <Badge intent="neutral" suffix={<Icon glyph={glyphs.help} size={16} intent="neutral" />}>
          Neutral
        </Badge>
        <Badge intent="neutral" intentModifiers="secondary" suffix={<Icon glyph={glyphs.help} size={16} intent="neutral" intentModifiers="secondary" />}>
          Neutral Secondary
        </Badge>
        <Badge intent="neutral" intentModifiers="brand" suffix={<Icon glyph={glyphs.help} size={16} intent="neutral" intentModifiers="brand" />}>
          Neutral Brand
        </Badge>
        <Badge intent="neutral" intentModifiers="danger" suffix={<Icon glyph={glyphs.help} size={16} intent="neutral" intentModifiers="danger" />}>
          Neutral Danger
        </Badge>
        <Badge intent="neutral" intentModifiers="warning" suffix={<Icon glyph={glyphs.help} size={16} intent="neutral" intentModifiers="warning" />}>
          Neutral Warning
        </Badge>
        <Badge intent="neutral" intentModifiers="success" suffix={<Icon glyph={glyphs.help} size={16} intent="neutral" intentModifiers="success" />}>
          Neutral Success
        </Badge>
        <Badge intent="neutral-inverted" suffix={<Icon glyph={glyphs.help} size={16} intent="neutral-inverted" />}>
          Neutral Inverted
        </Badge>
        <Badge intent="brand" suffix={<Icon glyph={glyphs.help} size={16} intent="brand" />}>
          Brand
        </Badge>
        <Badge intent="danger" suffix={<Icon glyph={glyphs.help} size={16} intent="danger" />}>
          Danger
        </Badge>
        <Badge intent="warning" suffix={<Icon glyph={glyphs.help} size={16} intent="warning" />}>
          Warning
        </Badge>
        <Badge intent="success" suffix={<Icon glyph={glyphs.help} size={16} intent="success" />}>
          Success
        </Badge>
      </Stack>
    </div>
}`,...(M=(x=l.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};const E=["Demo","Intent","Prefix","Suffix"];export{i as Demo,a as Intent,s as Prefix,l as Suffix,E as __namedExportsOrder,k as default};
