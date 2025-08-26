import{u as e}from"./jsxRuntime.module-CXXlufuJ.js";import{T as E}from"./Text-Zs2635gN.js";import{t as G,b as V}from"./typedForwardRef-DzGXX2Gk.js";import"./preact.module-DKQ80Dzn.js";import"./compat.module-C_m5Zvzo.js";const F=({className:o,size:l="medium",shape:q="circle",imageSrc:c,fillBg:B,fillText:T,children:m,..._},R)=>{const C=V("Avatar",void 0,{size:l,shape:q,image:!!c});return e("div",{className:[C,o].join(" ").trim(),ref:R,..._,style:{backgroundColor:B,color:T},children:[c&&e("img",{className:"Avatar__image",src:c,alt:"Avatar"}),m&&e(E,{variant:"body",size:l==="small"?"small":"large",strong:!0,context:"inherit",children:e("div",{className:"Avatar__children",children:m})})]})},s=G(F),j={title:"Components/Avatar",component:s,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},size:{control:{type:"select"},options:["small","medium","large"],defaultValue:{summary:"medium"}},shape:{control:{type:"select"},options:["circle","square"],defaultValue:{summary:"circle"}},imageSrc:{control:{type:"text"},description:"Image source URL."},fillBg:{table:{type:{summary:"HEX | RGB | RGBA | var()"},defaultValue:{summary:"var(--pui-color-neutral-inverted-bg-default)"}},control:{type:"color"},description:"Background color for the avatar container when no image is provided."},fillText:{table:{type:{summary:"HEX | RGB | RGBA | var()"},defaultValue:{summary:"var(--pui-color-neutral-inverted-text-default)"}},control:{type:"color"},description:"Text color for the children text content when no image is provided."},children:{table:{type:{summary:"string | number | JSX.Element"}},control:{type:"text"},description:"Content when no image is provided, usually a couple of letters."}}},a={tags:["!autodocs"],args:{className:"",shape:"circle",size:"medium",imageSrc:"",children:"A"},render:o=>e(s,{...o})},r={tags:["!dev"],parameters:{controls:{disable:!0}},render:()=>e("div",{className:"sb-column sb-gap-16",children:[e("div",{className:"sb-row sb-gap-16",children:[e(s,{imageSrc:"https://thispersondoesnotexist.com/",size:"small",children:"A"}),e(s,{size:"small",children:"A"})]}),e("div",{className:"sb-row sb-gap-16",children:[e(s,{imageSrc:"https://thispersondoesnotexist.com/",size:"medium",children:"A"}),e(s,{size:"medium",children:"A"})]}),e("div",{className:"sb-row sb-gap-16",children:[e(s,{imageSrc:"https://thispersondoesnotexist.com/",size:"large",children:"A"}),e(s,{size:"large",children:"A"})]})]})},t={tags:["!dev"],parameters:{controls:{disable:!0}},render:()=>e("div",{className:"sb-row sb-gap-16",children:[e("div",{className:"sb-column sb-gap-16",children:[e("div",{className:"sb-row sb-gap-16",children:[e(s,{imageSrc:"https://thispersondoesnotexist.com/",size:"small",children:"A"}),e(s,{size:"small",children:"A"})]}),e("div",{className:"sb-row sb-gap-16",children:[e(s,{imageSrc:"https://thispersondoesnotexist.com/",size:"medium",children:"A"}),e(s,{size:"medium",children:"A"})]}),e("div",{className:"sb-row sb-gap-16",children:[e(s,{imageSrc:"https://thispersondoesnotexist.com/",size:"large",children:"A"}),e(s,{size:"large",children:"A"})]})]}),e("div",{className:"sb-column sb-gap-16",children:[e("div",{className:"sb-row sb-gap-16",children:[e(s,{imageSrc:"https://thispersondoesnotexist.com/",size:"small",shape:"square",children:"A"}),e(s,{size:"small",shape:"square",children:"A"})]}),e("div",{className:"sb-row sb-gap-16",children:[e(s,{imageSrc:"https://thispersondoesnotexist.com/",size:"medium",shape:"square",children:"A"}),e(s,{size:"medium",shape:"square",children:"A"})]}),e("div",{className:"sb-row sb-gap-16",children:[e(s,{imageSrc:"https://thispersondoesnotexist.com/",size:"large",shape:"square",children:"A"}),e(s,{size:"large",shape:"square",children:"A"})]})]})]})},n={tags:["!dev"],parameters:{controls:{disable:!0}},render:()=>e("div",{className:"sb-column sb-gap-16",children:[e(s,{imageSrc:"https://thispersondoesnotexist.com/",children:"A"}),e(s,{children:"A"})]})},i={tags:["!dev"],parameters:{controls:{disable:!0}},render:()=>e("div",{className:"sb-column sb-gap-16",children:e(s,{fillBg:"var(--pui-color-brand-bg-default)",fillText:"#fff",children:"A"})})};var d,p,v;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    shape: "circle",
    size: "medium",
    imageSrc: "",
    children: "A"
  },
  render: args => <Avatar {...args} />
}`,...(v=(p=a.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var g,h,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="sb-column sb-gap-16">
      <div className="sb-row sb-gap-16">
        <Avatar imageSrc="https://thispersondoesnotexist.com/" size="small">
          A
        </Avatar>
        <Avatar size="small">A</Avatar>
      </div>
      <div className="sb-row sb-gap-16">
        <Avatar imageSrc="https://thispersondoesnotexist.com/" size="medium">
          A
        </Avatar>
        <Avatar size="medium">A</Avatar>
      </div>
      <div className="sb-row sb-gap-16">
        <Avatar imageSrc="https://thispersondoesnotexist.com/" size="large">
          A
        </Avatar>
        <Avatar size="large">A</Avatar>
      </div>
    </div>
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var A,b,z;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <div className="sb-row sb-gap-16">
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="small">
            A
          </Avatar>
          <Avatar size="small">A</Avatar>
        </div>
        <div className="sb-row sb-gap-16">
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="medium">
            A
          </Avatar>
          <Avatar size="medium">A</Avatar>
        </div>
        <div className="sb-row sb-gap-16">
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="large">
            A
          </Avatar>
          <Avatar size="large">A</Avatar>
        </div>
      </div>
      <div className="sb-column sb-gap-16">
        <div className="sb-row sb-gap-16">
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="small" shape="square">
            A
          </Avatar>
          <Avatar size="small" shape="square">
            A
          </Avatar>
        </div>
        <div className="sb-row sb-gap-16">
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="medium" shape="square">
            A
          </Avatar>
          <Avatar size="medium" shape="square">
            A
          </Avatar>
        </div>
        <div className="sb-row sb-gap-16">
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="large" shape="square">
            A
          </Avatar>
          <Avatar size="large" shape="square">
            A
          </Avatar>
        </div>
      </div>
    </div>
}`,...(z=(b=t.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var N,x,S;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="sb-column sb-gap-16">
      <Avatar imageSrc="https://thispersondoesnotexist.com/">A</Avatar>
      <Avatar>A</Avatar>
    </div>
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var f,w,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="sb-column sb-gap-16">
      <Avatar fillBg="var(--pui-color-brand-bg-default)" fillText="#fff">
        A
      </Avatar>
    </div>
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const J=["Demo","Size","Shape","ImageSrc","Fill"];export{a as Demo,i as Fill,n as ImageSrc,t as Shape,r as Size,J as __namedExportsOrder,j as default};
