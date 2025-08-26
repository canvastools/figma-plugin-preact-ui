import{u as e}from"./jsxRuntime.module-CXXlufuJ.js";import{B as n}from"./Badge-BUMJ-q_a.js";import{I as r}from"./Icon-DvMK2avU.js";import"./preact.module-DKQ80Dzn.js";import"./Text-Zs2635gN.js";import"./typedForwardRef-DzGXX2Gk.js";import"./compat.module-C_m5Zvzo.js";const D={title:"Components/Badge",component:n,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},context:{control:{type:"radio"},options:["neutral","neutral-secondary","neutral-brand","neutral-danger","neutral-warning","neutral-success","neutral-inverted","brand","danger","warning","success"],defaultValue:{summary:"neutral"}},prefix:{table:{type:{summary:"string | number | JSX.Element"}},control:{disable:!0},description:"Element inserted before children."},suffix:{table:{type:{summary:"string | number | JSX.Element"}},control:{disable:!0},description:"Element inserted after children."},children:{table:{type:{summary:"string | number | JSX.Element"}},control:{type:"text"}}}},a={tags:["!autodocs"],args:{className:"",context:"neutral",children:"Badge"},render:y=>e(n,{...y})},t={tags:["!dev"],parameters:{controls:{disable:!0}},render:()=>e("div",{className:"sb-column sb-gap-16",children:[e(n,{context:"neutral",children:"Neutral"}),e(n,{context:"neutral-secondary",children:"Neutral Secondary"}),e(n,{context:"neutral-brand",children:"Brand Secondary"}),e(n,{context:"neutral-danger",children:"Danger"}),e(n,{context:"neutral-warning",children:"Warning"}),e(n,{context:"neutral-success",children:"Success"}),e(n,{context:"neutral-inverted",children:"Neutral Inverted"}),e(n,{context:"brand",children:"Brand"}),e(n,{context:"danger",children:"Danger"}),e(n,{context:"warning",children:"Warning"}),e(n,{context:"success",children:"Success"})]})},s={tags:["!dev"],parameters:{controls:{disable:!0}},render:()=>e("div",{className:"sb-column sb-gap-16",children:e("div",{className:"sb-column sb-gap-16",children:[e(n,{context:"neutral",prefix:e(r,{glyph:"help",size:16}),children:"Neutral"}),e(n,{context:"neutral-secondary",prefix:e(r,{glyph:"help",size:16}),children:"Neutral Secondary"}),e(n,{context:"neutral-brand",prefix:e(r,{glyph:"help",size:16}),children:"Neutral Brand"}),e(n,{context:"neutral-danger",prefix:e(r,{glyph:"help",size:16}),children:"Neutral Danger"}),e(n,{context:"neutral-warning",prefix:e(r,{glyph:"help",size:16}),children:"Neutral Warning"}),e(n,{context:"neutral-success",prefix:e(r,{glyph:"help",size:16}),children:"Neutral Success"}),e(n,{context:"neutral-inverted",prefix:e(r,{glyph:"help",size:16}),children:"Neutral Inverted"}),e(n,{context:"brand",prefix:e(r,{glyph:"help",size:16}),children:"Brand"}),e(n,{context:"danger",prefix:e(r,{glyph:"help",size:16}),children:"Danger"}),e(n,{context:"warning",prefix:e(r,{glyph:"help",size:16}),children:"Warning"}),e(n,{context:"success",prefix:e(r,{glyph:"help",size:16}),children:"Success"})]})})},l={tags:["!dev"],parameters:{controls:{disable:!0}},render:()=>e("div",{className:"sb-column sb-gap-16",children:e("div",{className:"sb-column sb-gap-16",children:[e(n,{context:"neutral",suffix:e(r,{glyph:"help",size:16}),children:"Neutral"}),e(n,{context:"neutral-secondary",suffix:e(r,{glyph:"help",size:16}),children:"Neutral Secondary"}),e(n,{context:"neutral-brand",suffix:e(r,{glyph:"help",size:16}),children:"Neutral Brand"}),e(n,{context:"neutral-danger",suffix:e(r,{glyph:"help",size:16}),children:"Neutral Danger"}),e(n,{context:"neutral-warning",suffix:e(r,{glyph:"help",size:16}),children:"Neutral Warning"}),e(n,{context:"neutral-success",suffix:e(r,{glyph:"help",size:16}),children:"Neutral Success"}),e(n,{context:"neutral-inverted",suffix:e(r,{glyph:"help",size:16}),children:"Neutral Inverted"}),e(n,{context:"brand",suffix:e(r,{glyph:"help",size:16}),children:"Brand"}),e(n,{context:"danger",suffix:e(r,{glyph:"help",size:16}),children:"Danger"}),e(n,{context:"warning",suffix:e(r,{glyph:"help",size:16}),children:"Warning"}),e(n,{context:"success",suffix:e(r,{glyph:"help",size:16}),children:"Success"})]})})};var c,d,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    context: "neutral",
    children: "Badge"
  },
  render: args => <Badge {...args} />
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var o,g,u;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="sb-column sb-gap-16">
      <Badge context="neutral">Neutral</Badge>
      <Badge context="neutral-secondary">Neutral Secondary</Badge>
      <Badge context="neutral-brand">Brand Secondary</Badge>
      <Badge context="neutral-danger">Danger</Badge>
      <Badge context="neutral-warning">Warning</Badge>
      <Badge context="neutral-success">Success</Badge>
      <Badge context="neutral-inverted">Neutral Inverted</Badge>
      <Badge context="brand">Brand</Badge>
      <Badge context="danger">Danger</Badge>
      <Badge context="warning">Warning</Badge>
      <Badge context="success">Success</Badge>
    </div>
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var p,h,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="sb-column sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Badge context="neutral" prefix={<Icon glyph="help" size={16} />}>
          Neutral
        </Badge>
        <Badge context="neutral-secondary" prefix={<Icon glyph="help" size={16} />}>
          Neutral Secondary
        </Badge>
        <Badge context="neutral-brand" prefix={<Icon glyph="help" size={16} />}>
          Neutral Brand
        </Badge>
        <Badge context="neutral-danger" prefix={<Icon glyph="help" size={16} />}>
          Neutral Danger
        </Badge>
        <Badge context="neutral-warning" prefix={<Icon glyph="help" size={16} />}>
          Neutral Warning
        </Badge>
        <Badge context="neutral-success" prefix={<Icon glyph="help" size={16} />}>
          Neutral Success
        </Badge>
        <Badge context="neutral-inverted" prefix={<Icon glyph="help" size={16} />}>
          Neutral Inverted
        </Badge>
        <Badge context="brand" prefix={<Icon glyph="help" size={16} />}>
          Brand
        </Badge>
        <Badge context="danger" prefix={<Icon glyph="help" size={16} />}>
          Danger
        </Badge>
        <Badge context="warning" prefix={<Icon glyph="help" size={16} />}>
          Warning
        </Badge>
        <Badge context="success" prefix={<Icon glyph="help" size={16} />}>
          Success
        </Badge>
      </div>
    </div>
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var B,f,m;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="sb-column sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Badge context="neutral" suffix={<Icon glyph="help" size={16} />}>
          Neutral
        </Badge>
        <Badge context="neutral-secondary" suffix={<Icon glyph="help" size={16} />}>
          Neutral Secondary
        </Badge>
        <Badge context="neutral-brand" suffix={<Icon glyph="help" size={16} />}>
          Neutral Brand
        </Badge>
        <Badge context="neutral-danger" suffix={<Icon glyph="help" size={16} />}>
          Neutral Danger
        </Badge>
        <Badge context="neutral-warning" suffix={<Icon glyph="help" size={16} />}>
          Neutral Warning
        </Badge>
        <Badge context="neutral-success" suffix={<Icon glyph="help" size={16} />}>
          Neutral Success
        </Badge>
        <Badge context="neutral-inverted" suffix={<Icon glyph="help" size={16} />}>
          Neutral Inverted
        </Badge>
        <Badge context="brand" suffix={<Icon glyph="help" size={16} />}>
          Brand
        </Badge>
        <Badge context="danger" suffix={<Icon glyph="help" size={16} />}>
          Danger
        </Badge>
        <Badge context="warning" suffix={<Icon glyph="help" size={16} />}>
          Warning
        </Badge>
        <Badge context="success" suffix={<Icon glyph="help" size={16} />}>
          Success
        </Badge>
      </div>
    </div>
}`,...(m=(f=l.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const W=["Demo","Variant","Prefix","Suffix"];export{a as Demo,s as Prefix,l as Suffix,t as Variant,W as __namedExportsOrder,D as default};
