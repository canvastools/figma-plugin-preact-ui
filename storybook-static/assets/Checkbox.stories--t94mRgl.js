import{u as e}from"./jsxRuntime.module-CXXlufuJ.js";import{f as I}from"./index-BWINGljf.js";import{d as E}from"./compat.module-C_m5Zvzo.js";import{T as P}from"./Text-Zs2635gN.js";import{I as k}from"./Icon-DvMK2avU.js";import{t as j,b as B}from"./typedForwardRef-DzGXX2Gk.js";import"./preact.module-DKQ80Dzn.js";const O=({className:i,checked:M,mixed:b,disabled:r,label:m,onChange:c,..._},w)=>{const[l,R]=E(M),L=B("Checkbox",void 0,{checked:l,mixed:b,disabled:r,label:!!m}),S=s=>{if(r){s.preventDefault();return}s.stopPropagation(),c==null||c({event:s,checked:!l})},z=s=>{var h;if(r){(h=s.preventDefault)==null||h.call(s);return}s.stopPropagation(),c==null||c({event:s,checked:!l})};return e("div",{className:[L,i].join(" ").trim(),..._,children:[e("div",{className:"Checkbox__input",children:[e("input",{className:"Checkbox__input-native",type:"checkbox",ref:w,checked:l,disabled:r,onChange:z}),l&&!b&&e(k,{glyph:"check",size:16}),l&&b&&e(k,{glyph:"mixed",size:16})]}),m&&e(P,{variant:"body",size:"medium",context:"inherit",children:e("div",{className:"Checkbox__label",onClick:S,children:m})})]})},a=j(O),U={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},checked:{control:{type:"boolean"}},mixed:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},label:{control:{type:"text"}},onChange:{action:"clicked",description:"Callback function that is called when the checkbox is clicked.",table:{type:{summary:"(args: {event: MouseEvent; checked: boolean}) => void"}}}}},d={tags:["!autodocs"],args:{className:"",checked:!1,mixed:!1,disabled:!1,label:"Checkbox",onChange:I()},render:i=>e(a,{...i})},o={tags:["!dev"],parameters:{controls:{disable:!0}},render:()=>e("div",{className:"sb-row sb-gap-16",children:[e("div",{className:"sb-column sb-gap-16",children:[e(a,{checked:!0,label:"Checked True"}),e(a,{checked:!1,label:"Checked False"})]}),e("div",{className:"sb-column sb-gap-16",children:[e(a,{checked:!0,mixed:!0,label:"Checkbox True Mixed"}),e(a,{checked:!1,mixed:!0,label:"Checkbox False Mixed"})]})]})},n={tags:["!dev"],parameters:{controls:{disable:!0}},render:()=>e("div",{className:"sb-row sb-gap-16",children:[e("div",{className:"sb-column sb-gap-16",children:[e(a,{checked:!0,disabled:!0,label:"Checked True Disabled"}),e(a,{checked:!1,disabled:!0,label:"Checked False Disabled"})]}),e("div",{className:"sb-column sb-gap-16",children:[e(a,{checked:!0,disabled:!0,mixed:!0,label:"Checkbox True Mixed Disabled"}),e(a,{checked:!1,disabled:!0,mixed:!0,label:"Checkbox False Mixed Disabled"})]})]})},t={tags:["!dev"],parameters:{controls:{disable:!0}},render:()=>e("div",{className:"sb-column sb-gap-16",children:[e(a,{label:"Labelled"}),e(a,{})]})};var u,p,x;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    checked: false,
    mixed: false,
    disabled: false,
    label: "Checkbox",
    onChange: fn()
  },
  render: args => <Checkbox {...args} />
}`,...(x=(p=d.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var C,g,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Checkbox checked={true} label="Checked True" />
        <Checkbox checked={false} label="Checked False" />
      </div>
      <div className="sb-column sb-gap-16">
        <Checkbox checked={true} mixed={true} label="Checkbox True Mixed" />
        <Checkbox checked={false} mixed={true} label="Checkbox False Mixed" />
      </div>
    </div>
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,N,D;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Checkbox checked={true} disabled label="Checked True Disabled" />
        <Checkbox checked={false} disabled label="Checked False Disabled" />
      </div>
      <div className="sb-column sb-gap-16">
        <Checkbox checked={true} disabled mixed label="Checkbox True Mixed Disabled" />
        <Checkbox checked={false} disabled mixed label="Checkbox False Mixed Disabled" />
      </div>
    </div>
}`,...(D=(N=n.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var y,T,F;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="sb-column sb-gap-16">
      <Checkbox label="Labelled" />
      <Checkbox />
    </div>
}`,...(F=(T=t.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const V=["Demo","Checked","Disabled","Label"];export{o as Checked,d as Demo,n as Disabled,t as Label,V as __namedExportsOrder,U as default};
