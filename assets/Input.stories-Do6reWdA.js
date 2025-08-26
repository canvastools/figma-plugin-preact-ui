import{u as t}from"./jsxRuntime.module-CXXlufuJ.js";import{f as d}from"./index-BWINGljf.js";import{d as B}from"./compat.module-C_m5Zvzo.js";import{T as g}from"./Text-Zs2635gN.js";import{t as M,b as z}from"./typedForwardRef-DzGXX2Gk.js";import"./preact.module-DKQ80Dzn.js";const D=({className:s,type:N="text",placeholder:I,value:u,disabled:p,prefix:r,suffix:o,onChange:l,onBlur:i,onFocus:c,..._},E)=>{const[P,m]=B(!1),T=z("Input",void 0,{filled:u!==void 0,disabled:p,prefix:!!r,suffix:!!o,focused:P}),k=e=>{e.stopPropagation(),l==null||l({event:e,value:e.currentTarget.value})},w=e=>{e.stopPropagation(),m(!1),i==null||i({event:e,value:e.currentTarget.value})},F=e=>{e.stopPropagation(),m(!0),c==null||c({event:e,value:e.currentTarget.value})},S=e=>{e.stopPropagation()};return t("div",{className:[T,s].join(" ").trim(),..._,children:[t(g,{variant:"body",size:"medium",context:"inherit",children:r&&t("div",{className:"Input__prefix",children:r})}),t("input",{className:"Input__input-native",ref:E,type:N,disabled:p,placeholder:I,value:u,onChange:k,onBlur:w,onFocus:F,onClick:S}),t(g,{variant:"body",size:"medium",context:"inherit",children:o&&t("div",{className:"Input__suffix",children:o})})]})},C=M(D),q={title:"Components/Input",component:C,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},type:{control:{type:"radio"},options:["text"],defaultValue:{summary:"text"}},placeholder:{control:{type:"text"}},disabled:{control:{type:"boolean"}},prefix:{table:{type:{summary:"string | number | JSX.Element"}},description:"Element inserted before value.",control:{disable:!0}},suffix:{table:{type:{summary:"string | number | JSX.Element"}},description:"Element inserted after value.",control:{disable:!0}},onChange:{action:"changed",description:"Callback function that is called when the value is changed.",table:{type:{summary:"(args: { event: MouseEvent; value: string }) => void"}}},onBlur:{action:"blurred",description:"Callback function that is called when the input is blurred.",table:{type:{summary:"(args: { event: MouseEvent; value: string }) => void"}}},onFocus:{action:"focused",description:"Callback function that is called when the input is focused.",table:{type:{summary:"(args: { event: MouseEvent; value: string }) => void"}}}}},a={tags:["!autodocs"],args:{className:"",type:"text",placeholder:"Placeholder",disabled:!1,onChange:d(),onBlur:d(),onFocus:d()},render:s=>t(C,{...s})},n={tags:["!dev"],parameters:{controls:{disable:!0}},render:()=>t("div",{className:"sb-column sb-gap-16",children:"..."})};var f,h,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    type: "text",
    placeholder: "Placeholder",
    disabled: false,
    onChange: fn(),
    onBlur: fn(),
    onFocus: fn()
  },
  render: args => <Input {...args} />
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,y,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="sb-column sb-gap-16">...</div>
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const A=["Demo","Context"];export{n as Context,a as Demo,A as __namedExportsOrder,q as default};
