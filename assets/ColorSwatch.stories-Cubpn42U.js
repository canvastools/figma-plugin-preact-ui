import{u as a}from"./hooks.module-Dxk9uxGs.js";import{C as e}from"./ColorSwatch-mGfwUEyj.js";import{S as l}from"./Stack-CNzGXmi4.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";const C={title:"Components/ColorSwatch",component:e,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["fill","image"],defaultValue:{summary:"fill"}},size:{control:{type:"radio"},options:["small","medium"],defaultValue:{summary:"medium"}},hex:{control:{type:"color"},table:{type:{summary:"HEX | RGB | RGBA | var()"}}},imageSrc:{control:{disable:!0},table:{type:{summary:"string"}},description:"Image source URL. Applies only to the image variant."}}},r={tags:["!autodocs"],args:{className:"",variant:"fill",size:"medium",hex:"#FF0000"},parameters:{viewport:{defaultViewport:"large"}},render:v=>a("div",{className:"sb-column sb-width-full",children:a(e,{...v})})},t={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>a("div",{className:"sb-column",children:a(l,{spacing:400,direction:"row",children:[a(e,{variant:"fill"}),a(e,{variant:"fill",hex:"#FF0000"}),a(e,{variant:"fill",hex:"#FF00004D"}),a(e,{variant:"image",imageSrc:"https://placehold.co/48x48"})]})})},i={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>a("div",{className:"sb-column",children:a(l,{spacing:400,children:[a(l,{spacing:400,direction:"row",children:[a(e,{variant:"fill",size:"small"}),a(e,{variant:"fill",hex:"#FF0000",size:"small"}),a(e,{variant:"fill",hex:"#FF00004D",size:"small"}),a(e,{variant:"image",imageSrc:"https://placehold.co/48x48",size:"small"})]}),a(l,{spacing:400,direction:"row",children:[a(e,{variant:"fill"}),a(e,{variant:"fill",hex:"#FF0000"}),a(e,{variant:"fill",hex:"#FF00004D"}),a(e,{variant:"image",imageSrc:"https://placehold.co/48x48"})]})]})})};var o,n,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    variant: "fill",
    size: "medium",
    hex: "#FF0000"
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <ColorSwatch {...args} />
    </div>
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column">
      <Stack spacing={400} direction="row">
        <ColorSwatch variant="fill" />
        <ColorSwatch variant="fill" hex="#FF0000" />
        <ColorSwatch variant="fill" hex="#FF00004D" />
        <ColorSwatch variant="image" imageSrc="https://placehold.co/48x48" />
      </Stack>
    </div>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,h,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column">
      <Stack spacing={400}>
        <Stack spacing={400} direction="row">
          <ColorSwatch variant="fill" size="small" />
          <ColorSwatch variant="fill" hex="#FF0000" size="small" />
          <ColorSwatch variant="fill" hex="#FF00004D" size="small" />
          <ColorSwatch variant="image" imageSrc="https://placehold.co/48x48" size="small" />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch variant="fill" />
          <ColorSwatch variant="fill" hex="#FF0000" />
          <ColorSwatch variant="fill" hex="#FF00004D" />
          <ColorSwatch variant="image" imageSrc="https://placehold.co/48x48" />
        </Stack>
      </Stack>
    </div>
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const b=["Demo","Variant","Size"];export{r as Demo,i as Size,t as Variant,b as __namedExportsOrder,C as default};
