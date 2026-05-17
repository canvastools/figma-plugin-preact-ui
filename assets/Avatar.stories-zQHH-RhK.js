import{u as r}from"./hooks.module-6Sbq__eq.js";import{A as e}from"./Avatar-D_LKqPxg.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./Text-BbQ_b1VF.js";const z={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Avatar variant="circle">{children}</Avatar>

<Avatar variant="square">{children}</Avatar>
  `}}},render:()=>r("div",{className:"sb-row sb-width-full sb-gap-40",children:[r("div",{className:"sb-row sb-gap-16",children:[r(e,{src:"https://thispersondoesnotexist.com/",variant:"circle",children:"A"}),r(e,{variant:"circle",children:"A"})]}),r("div",{className:"sb-row sb-gap-16",children:[r(e,{src:"https://thispersondoesnotexist.com/",variant:"square",children:"A"}),r(e,{variant:"square",children:"A"})]})]})},S={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Avatar size="small">{children}</Avatar>

<Avatar size="medium">{children}</Avatar>

<Avatar size="large">{children}</Avatar>
  `}}},render:()=>r("div",{className:"sb-row sb-width-full sb-gap-40",children:[r("div",{className:"sb-column sb-gap-16",children:[r("div",{className:"sb-row sb-gap-16",children:[r(e,{src:"https://thispersondoesnotexist.com/",size:"small",children:"A"}),r(e,{size:"small",children:"A"})]}),r("div",{className:"sb-row sb-gap-16",children:[r(e,{src:"https://thispersondoesnotexist.com/",size:"medium",children:"A"}),r(e,{size:"medium",children:"A"})]}),r("div",{className:"sb-row sb-gap-16",children:[r(e,{src:"https://thispersondoesnotexist.com/",size:"large",children:"A"}),r(e,{size:"large",children:"A"})]})]}),r("div",{className:"sb-column sb-gap-16",children:[r("div",{className:"sb-row sb-gap-16",children:[r(e,{src:"https://thispersondoesnotexist.com/",size:"small",variant:"square",children:"A"}),r(e,{size:"small",variant:"square",children:"A"})]}),r("div",{className:"sb-row sb-gap-16",children:[r(e,{src:"https://thispersondoesnotexist.com/",size:"medium",variant:"square",children:"A"}),r(e,{size:"medium",variant:"square",children:"A"})]}),r("div",{className:"sb-row sb-gap-16",children:[r(e,{src:"https://thispersondoesnotexist.com/",size:"large",variant:"square",children:"A"}),r(e,{size:"large",variant:"square",children:"A"})]})]})]})},N={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Avatar src="https://thispersondoesnotexist.com/">{children}</Avatar>
`}}},render:()=>r("div",{className:"sb-row sb-width-full sb-gap-16",children:[r(e,{src:"https://thispersondoesnotexist.com/",children:"A"}),r(e,{children:"A"})]})},C={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Avatar 
  backgroundColor="var(--pui-color-brand-bg-default)"
  textColor="#ffff00"
>
  {children}
</Avatar>

<Avatar 
  backgroundColor="rgb(0, 255, 0, 0.5)"
  textColor="rgb(0, 0, 0)"
>
  {children}
</Avatar>

`}}},render:()=>r("div",{className:"sb-column sb-width-full",children:r(e,{backgroundColor:"var(--pui-color-brand-bg-default)",textColor:"#ffff00",children:"A"})})},I={title:"Components/Avatar",component:e,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["circle","square"],defaultValue:{summary:"circle"}},size:{control:{type:"radio"},options:["small","medium","large"],defaultValue:{summary:"medium"}},src:{control:{type:"text"},description:"Image URL or data URI."},backgroundColor:{control:{type:"color"},description:"Background color for the avatar container when no image is provided.",table:{type:{summary:"HEX | RGB | RGBA | var()"},defaultValue:{summary:"var(--pui-color-neutral-inverted-bg-default)"}}},textColor:{control:{type:"color"},description:"Text color for the children text content when no image is provided.",table:{type:{summary:"HEX | RGB | RGBA | var()"},defaultValue:{summary:"var(--pui-color-neutral-inverted-text-default)"}}},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},a={tags:["!autodocs"],args:{id:void 0,className:"",variant:"circle",size:"medium",src:"",children:"A"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:"<Avatar {...args}>{children}</Avatar>"}}},render:y=>r("div",{className:"sb-column sb-width-full",children:r(e,{...y})})},s=z,t=S,o=N,i=C;var c,n,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    variant: 'circle',
    size: 'medium',
    src: '',
    children: 'A'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`<Avatar {...args}>{children}</Avatar>\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      {/* @ts-expect-error Storybook spread */}
      <Avatar {...args} />
    </div>
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"VariantStory",...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"SizeStory",...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,b,A;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"SrcStory",...(A=(b=o.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var f,w,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"ColorStory",...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const E=["Demo","Variant","Size","Image","Color"];export{i as Color,a as Demo,o as Image,t as Size,s as Variant,E as __namedExportsOrder,I as default};
