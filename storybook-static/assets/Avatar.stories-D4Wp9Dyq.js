import{u as e}from"./hooks.module-Dxk9uxGs.js";import{A as r}from"./Avatar-BEUu0_hx.js";import{S as t}from"./Section-45ajfN6P.js";import{S as a}from"./Stack-CayROFGf.js";import"./preact.module-DKQ80Dzn.js";import"./Text-Dvytwbdg.js";import"./typedForwardRef-cP-mn0Xe.js";import"./compat.module-c0s5p6eE.js";const G={title:"Components/Avatar",component:r,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},size:{control:{type:"radio"},options:["small","medium","large"],defaultValue:{summary:"medium"}},shape:{control:{type:"radio"},options:["circle","square"],defaultValue:{summary:"circle"}},imageSrc:{control:{type:"text"},description:"Image source URL."},fillBg:{table:{type:{summary:"HEX | RGB | RGBA | var()"},defaultValue:{summary:"var(--pui-color-neutral-inverted-bg-default)"}},control:{type:"color"},description:"Background color for the avatar container when no image is provided."},fillText:{table:{type:{summary:"HEX | RGB | RGBA | var()"},defaultValue:{summary:"var(--pui-color-neutral-inverted-text-default)"}},control:{type:"color"},description:"Text color for the children text content when no image is provided."},children:{table:{type:{summary:"string | number | JSX.Element"}},control:{type:"text"},description:"Content when no image is provided, usually a couple of letters."}}},n={tags:["!autodocs"],args:{className:"",shape:"circle",size:"medium",imageSrc:"",children:"A"},parameters:{viewport:{defaultViewport:"large"}},render:k=>e("div",{className:"sb-column sb-width-full",children:e(t,{children:e(r,{...k})})})},s={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(t,{children:e(a,{spacing:400,children:[e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"small",children:"A"}),e(r,{size:"small",children:"A"})]}),e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"medium",children:"A"}),e(r,{size:"medium",children:"A"})]}),e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"large",children:"A"}),e(r,{size:"large",children:"A"})]})]})})})},i={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-row sb-width-full",children:[e(t,{children:e(a,{spacing:400,children:[e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"small",children:"A"}),e(r,{size:"small",children:"A"})]}),e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"medium",children:"A"}),e(r,{size:"medium",children:"A"})]}),e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"large",children:"A"}),e(r,{size:"large",children:"A"})]})]})}),e(t,{children:e(a,{spacing:400,children:[e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"small",shape:"square",children:"A"}),e(r,{size:"small",shape:"square",children:"A"})]}),e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"medium",shape:"square",children:"A"}),e(r,{size:"medium",shape:"square",children:"A"})]}),e(a,{direction:"row",spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",size:"large",shape:"square",children:"A"}),e(r,{size:"large",shape:"square",children:"A"})]})]})})]})},o={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(t,{children:e(a,{spacing:400,children:[e(r,{imageSrc:"https://thispersondoesnotexist.com/",children:"A"}),e(r,{children:"A"})]})})})},c={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(t,{children:e(r,{fillBg:"var(--pui-color-brand-bg-default)",fillText:"#ffff00",children:"A"})})})};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      <Section>
        <Avatar {...args} />
      </Section>
    </div>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,h,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      </Section>
    </div>
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,A,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-row sb-width-full">
      <Section>
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
      </Section>
      <Section>
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
      </Section>
    </div>
}`,...(v=(A=i.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var S,w,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
          <Avatar imageSrc="https://thispersondoesnotexist.com/">A</Avatar>
          <Avatar>A</Avatar>
        </Stack>
      </Section>
    </div>
}`,...(f=(w=o.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var z,b,x;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
        <Avatar fillBg="var(--pui-color-brand-bg-default)" fillText="#ffff00">
          A
        </Avatar>
      </Section>
    </div>
}`,...(x=(b=c.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const I=["Demo","Size","Shape","ImageSrc","Fill"];export{n as Demo,c as Fill,o as ImageSrc,i as Shape,s as Size,I as __namedExportsOrder,G as default};
