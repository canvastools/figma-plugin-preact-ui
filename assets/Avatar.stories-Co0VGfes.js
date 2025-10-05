import{u as e}from"./hooks.module-Dxk9uxGs.js";import{A as r}from"./Avatar-CT0srIRA.js";import{S as a}from"./Stack-CNzGXmi4.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";import"./Text-C438qO9S.js";const T={title:"Components/Avatar",component:r,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},size:{control:{type:"radio"},options:["small","medium","large"],defaultValue:{summary:"medium"}},shape:{control:{type:"radio"},options:["circle","square"],defaultValue:{summary:"circle"}},imageSrc:{control:{type:"text"},description:"Image source URL.",defaultValue:{summary:"undefined | null"}},fillBg:{table:{type:{summary:"HEX | RGB | RGBA | var()"},defaultValue:{summary:"var(--pui-color-neutral-inverted-bg-default)"}},control:{type:"color"},description:"Background color for the avatar container when no image is provided."},fillText:{table:{type:{summary:"HEX | RGB | RGBA | var()"},defaultValue:{summary:"var(--pui-color-neutral-inverted-text-default)"}},control:{type:"color"},description:"Text color for the children text content when no image is provided."},children:{table:{type:{summary:"string | number | JSX.Element"}},control:{type:"text"},description:"Content when no image is provided, usually a couple of letters."}}},t={tags:["!autodocs"],args:{className:"",shape:"circle",size:"medium",imageSrc:"",children:"A"},parameters:{viewport:{defaultViewport:"large"}},render:x=>e("div",{className:"sb-column sb-width-full",children:e(r,{...x})})},s={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(a,{spacing:400,children:[e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"small",children:"A"}),e(r,{size:"small",children:"A"})]}),e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"medium",children:"A"}),e(r,{size:"medium",children:"A"})]}),e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"large",children:"A"}),e(r,{size:"large",children:"A"})]})]})})},n={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-row sb-width-full",children:e(a,{spacing:400,direction:"row",children:[e(a,{spacing:400,children:[e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"small",children:"A"}),e(r,{size:"small",children:"A"})]}),e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"medium",children:"A"}),e(r,{size:"medium",children:"A"})]}),e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"large",children:"A"}),e(r,{size:"large",children:"A"})]})]}),e(a,{spacing:400,children:[e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"small",shape:"square",children:"A"}),e(r,{size:"small",shape:"square",children:"A"})]}),e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"medium",shape:"square",children:"A"}),e(r,{size:"medium",shape:"square",children:"A"})]}),e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"large",shape:"square",children:"A"}),e(r,{size:"large",shape:"square",children:"A"})]})]})]})})},i={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(a,{spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",children:"A"}),e(r,{children:"A"})]})})},o={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{fillBg:"var(--pui-color-brand-bg-default)",fillText:"#ffff00",children:"A"})})};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    shape: "circle",
    size: "medium",
    imageSrc: "",
    children: "A"
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <Avatar {...args} />
    </div>
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        <Stack direction="row" spacing={400}>
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="small">
            A
          </Avatar>
          <Avatar size="small">A</Avatar>
        </Stack>
        <Stack direction="row" spacing={400}>
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="medium">
            A
          </Avatar>
          <Avatar size="medium">A</Avatar>
        </Stack>
        <Stack direction="row" spacing={400}>
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="large">
            A
          </Avatar>
          <Avatar size="large">A</Avatar>
        </Stack>
      </Stack>
    </div>
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,A;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-row sb-width-full">
      <Stack spacing={400} direction="row">
        <Stack spacing={400}>
          <Stack direction="row" spacing={400}>
            <Avatar imageSrc="https://thispersondoesnotexist.com/" size="small">
              A
            </Avatar>
            <Avatar size="small">A</Avatar>
          </Stack>
          <Stack direction="row" spacing={400}>
            <Avatar imageSrc="https://thispersondoesnotexist.com/" size="medium">
              A
            </Avatar>
            <Avatar size="medium">A</Avatar>
          </Stack>
          <Stack direction="row" spacing={400}>
            <Avatar imageSrc="https://thispersondoesnotexist.com/" size="large">
              A
            </Avatar>
            <Avatar size="large">A</Avatar>
          </Stack>
        </Stack>

        <Stack spacing={400}>
          <Stack direction="row" spacing={400}>
            <Avatar imageSrc="https://thispersondoesnotexist.com/" size="small" shape="square">
              A
            </Avatar>
            <Avatar size="small" shape="square">
              A
            </Avatar>
          </Stack>
          <Stack direction="row" spacing={400}>
            <Avatar imageSrc="https://thispersondoesnotexist.com/" size="medium" shape="square">
              A
            </Avatar>
            <Avatar size="medium" shape="square">
              A
            </Avatar>
          </Stack>
          <Stack direction="row" spacing={400}>
            <Avatar imageSrc="https://thispersondoesnotexist.com/" size="large" shape="square">
              A
            </Avatar>
            <Avatar size="large" shape="square">
              A
            </Avatar>
          </Stack>
        </Stack>
      </Stack>
    </div>
}`,...(A=(g=n.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var v,S,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        <Avatar imageSrc="https://thispersondoesnotexist.com/">A</Avatar>
        <Avatar>A</Avatar>
      </Stack>
    </div>
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var f,z,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Avatar fillBg="var(--pui-color-brand-bg-default)" fillText="#ffff00">
        A
      </Avatar>
    </div>
}`,...(b=(z=o.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};const E=["Demo","Size","Shape","ImageSrc","Fill"];export{t as Demo,o as Fill,i as ImageSrc,n as Shape,s as Size,E as __namedExportsOrder,T as default};
