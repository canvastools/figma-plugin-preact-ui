import{u as e}from"./hooks.module-Dxk9uxGs.js";import{f as X}from"./index-BWINGljf.js";import{C as r}from"./ColorSwatch-BQGoc9j7.js";import{I as o}from"./Icon-Btq4UltS.js";import{S as a}from"./Stack-CNzGXmi4.js";import{a as t}from"./ai-DHHkDKoh.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";import"./OverlayPositioner-BuTO9s3R.js";import"./Tooltip-Dv-sYeCb.js";import"./Text-C438qO9S.js";const Y={title:"Components/ColorSwatch",component:r,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},size:{control:{type:"radio"},options:["small","medium","large"],defaultValue:{summary:"medium"}},hex:{control:{type:"color"},table:{type:{summary:"HEX | RGB | RGBA | var()"}}},imageSrc:{control:{disable:!0},table:{type:{summary:"string"}},description:"Image source URL. Applies only to the image variant."},title:{control:{type:"text"},defaultValue:{summary:void 0},description:"Title to display when the color swatch is hovered.",table:{type:{summary:"string"}}},hoverable:{control:{type:"boolean"},defaultValue:{summary:!1}},selected:{control:{type:"boolean"},defaultValue:{summary:!1}},selection:{control:{type:"radio"},options:["default","rainbow"],defaultValue:{summary:"default"}},children:{control:{disable:!0},description:"Children to display inside the color swatch.",table:{type:{summary:"JSX.Element"}}},onClick:{action:"clicked",description:"Callback when the color swatch is clicked.",table:{type:{summary:"(args: { event: MouseEvent; hex: string | undefined; imageSrc: string | undefined }) => void"}}}}},l={tags:["!autodocs"],args:{className:"",selection:"default",size:"medium",hex:"#FF0000",title:"Title",hoverable:!1,selected:!1,onClick:X()},parameters:{viewport:{defaultViewport:"large"}},render:B=>e("div",{className:"sb-column sb-width-full",children:e(r,{...B})})},c={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column",children:e(a,{spacing:400,direction:"row",children:[e(r,{}),e(r,{hex:"#FF0000"}),e(r,{hex:"#FF00004D"})]})})},s={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column",children:e(a,{spacing:400,direction:"row",children:[e(r,{}),e(r,{imageSrc:"https://placehold.co/48x48"})]})})},i={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column",children:e(a,{spacing:400,direction:"row",children:e(r,{hex:"#FF0000",title:"Red"})})})},n={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column",children:e(a,{spacing:400,children:[e(a,{spacing:400,direction:"row",children:[e(r,{size:"small"}),e(r,{hex:"#FF0000",size:"small"}),e(r,{hex:"#FF00004D",size:"small"}),e(r,{imageSrc:"https://placehold.co/48x48",size:"small"})]}),e(a,{spacing:400,direction:"row",children:[e(r,{}),e(r,{hex:"#FF0000"}),e(r,{hex:"#FF00004D"}),e(r,{imageSrc:"https://placehold.co/48x48"})]}),e(a,{spacing:400,direction:"row",children:[e(r,{size:"large"}),e(r,{hex:"#FF0000",size:"large"}),e(r,{hex:"#FF00004D",size:"large"}),e(r,{imageSrc:"https://placehold.co/48x48",size:"large"})]})]})})},d={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column",children:e(a,{spacing:400,children:[e(a,{spacing:400,direction:"row",children:[e(r,{size:"small",hoverable:!0}),e(r,{hex:"#FF0000",size:"small",hoverable:!0}),e(r,{hex:"#FF00004D",size:"small",hoverable:!0}),e(r,{imageSrc:"https://placehold.co/48x48",size:"small",hoverable:!0})]}),e(a,{spacing:400,direction:"row",children:[e(r,{hoverable:!0}),e(r,{hex:"#FF0000",hoverable:!0}),e(r,{hex:"#FF00004D",hoverable:!0}),e(r,{imageSrc:"https://placehold.co/48x48",hoverable:!0})]}),e(a,{spacing:400,direction:"row",children:[e(r,{size:"large",hoverable:!0}),e(r,{hex:"#FF0000",size:"large",hoverable:!0}),e(r,{hex:"#FF00004D",size:"large",hoverable:!0}),e(r,{imageSrc:"https://placehold.co/48x48",size:"large",hoverable:!0})]})]})})},h={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column",children:e(a,{spacing:400,direction:"column",children:[e(a,{spacing:1e3,direction:"row",children:[e(a,{spacing:400,direction:"row",children:[e(r,{size:"small",selected:!0}),e(r,{hex:"#FF0000",size:"small",selected:!0}),e(r,{hex:"#FF00004D",size:"small",selected:!0}),e(r,{imageSrc:"https://placehold.co/48x48",size:"small",selected:!0})]}),e(a,{spacing:400,direction:"row",children:[e(r,{size:"small",selection:"rainbow",selected:!0}),e(r,{hex:"#FF0000",size:"small",selection:"rainbow",selected:!0}),e(r,{hex:"#FF00004D",size:"small",selection:"rainbow",selected:!0}),e(r,{imageSrc:"https://placehold.co/48x48",size:"small",selection:"rainbow",selected:!0})]})]}),e(a,{spacing:1e3,direction:"row",children:[e(a,{spacing:400,direction:"row",children:[e(r,{size:"medium",selected:!0}),e(r,{hex:"#FF0000",size:"medium",selected:!0}),e(r,{hex:"#FF00004D",size:"medium",selected:!0}),e(r,{imageSrc:"https://placehold.co/48x48",size:"medium",selected:!0})]}),e(a,{spacing:400,direction:"row",children:[e(r,{size:"medium",selection:"rainbow",selected:!0}),e(r,{hex:"#FF0000",size:"medium",selection:"rainbow",selected:!0}),e(r,{hex:"#FF00004D",size:"medium",selection:"rainbow",selected:!0}),e(r,{imageSrc:"https://placehold.co/48x48",size:"medium",selection:"rainbow",selected:!0})]})]}),e(a,{spacing:1e3,direction:"row",children:[e(a,{spacing:400,direction:"row",children:[e(r,{size:"large",selected:!0}),e(r,{hex:"#FF0000",size:"large",selected:!0}),e(r,{hex:"#FF00004D",size:"large",selected:!0}),e(r,{imageSrc:"https://placehold.co/48x48",size:"large",selected:!0})]}),e(a,{spacing:400,direction:"row",children:[e(r,{size:"large",selection:"rainbow",selected:!0}),e(r,{hex:"#FF0000",size:"large",selection:"rainbow",selected:!0}),e(r,{hex:"#FF00004D",size:"large",selection:"rainbow",selected:!0}),e(r,{imageSrc:"https://placehold.co/48x48",size:"large",selection:"rainbow",selected:!0})]})]})]})})},m={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column",children:e(a,{spacing:400,direction:"row",children:[e(r,{children:e(o,{glyph:t,size:16})}),e(r,{hex:"#FF0000",children:e(o,{glyph:t,size:16})}),e(r,{hex:"#FF00004D",children:e(o,{glyph:t,size:16})}),e(r,{imageSrc:"https://placehold.co/48x48",children:e(o,{glyph:t,size:16})})]})})};var p,w,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    selection: "default",
    size: "medium",
    hex: "#FF0000",
    title: "Title",
    hoverable: false,
    selected: false,
    onClick: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <ColorSwatch {...args} />
    </div>
}`,...(u=(w=l.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var S,g,F;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        <ColorSwatch />
        <ColorSwatch hex="#FF0000" />
        <ColorSwatch hex="#FF00004D" />
      </Stack>
    </div>
}`,...(F=(g=c.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};var b,x,z;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
        <ColorSwatch />
        <ColorSwatch imageSrc="https://placehold.co/48x48" />
      </Stack>
    </div>
}`,...(z=(x=s.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var v,C,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        <ColorSwatch hex="#FF0000" title="Red" />
      </Stack>
    </div>
}`,...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var f,y,D;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
          <ColorSwatch size="small" />
          <ColorSwatch hex="#FF0000" size="small" />
          <ColorSwatch hex="#FF00004D" size="small" />
          <ColorSwatch imageSrc="https://placehold.co/48x48" size="small" />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch />
          <ColorSwatch hex="#FF0000" />
          <ColorSwatch hex="#FF00004D" />
          <ColorSwatch imageSrc="https://placehold.co/48x48" />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch size="large" />
          <ColorSwatch hex="#FF0000" size="large" />
          <ColorSwatch hex="#FF00004D" size="large" />
          <ColorSwatch imageSrc="https://placehold.co/48x48" size="large" />
        </Stack>
      </Stack>
    </div>
}`,...(D=(y=n.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var V,N,I;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
          <ColorSwatch size="small" hoverable />
          <ColorSwatch hex="#FF0000" size="small" hoverable />
          <ColorSwatch hex="#FF00004D" size="small" hoverable />
          <ColorSwatch imageSrc="https://placehold.co/48x48" size="small" hoverable />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch hoverable />
          <ColorSwatch hex="#FF0000" hoverable />
          <ColorSwatch hex="#FF00004D" hoverable />
          <ColorSwatch imageSrc="https://placehold.co/48x48" hoverable />
        </Stack>
        <Stack spacing={400} direction="row">
          <ColorSwatch size="large" hoverable />
          <ColorSwatch hex="#FF0000" size="large" hoverable />
          <ColorSwatch hex="#FF00004D" size="large" hoverable />
          <ColorSwatch imageSrc="https://placehold.co/48x48" size="large" hoverable />
        </Stack>
      </Stack>
    </div>
}`,...(I=(N=d.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var G,T,H;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column">
      <Stack spacing={400} direction="column">
        <Stack spacing={1000} direction="row">
          <Stack spacing={400} direction="row">
            <ColorSwatch size="small" selected />
            <ColorSwatch hex="#FF0000" size="small" selected />
            <ColorSwatch hex="#FF00004D" size="small" selected />
            <ColorSwatch imageSrc="https://placehold.co/48x48" size="small" selected />
          </Stack>

          <Stack spacing={400} direction="row">
            <ColorSwatch size="small" selection="rainbow" selected />
            <ColorSwatch hex="#FF0000" size="small" selection="rainbow" selected />
            <ColorSwatch hex="#FF00004D" size="small" selection="rainbow" selected />
            <ColorSwatch imageSrc="https://placehold.co/48x48" size="small" selection="rainbow" selected />
          </Stack>
        </Stack>

        <Stack spacing={1000} direction="row">
          <Stack spacing={400} direction="row">
            <ColorSwatch size="medium" selected />
            <ColorSwatch hex="#FF0000" size="medium" selected />
            <ColorSwatch hex="#FF00004D" size="medium" selected />
            <ColorSwatch imageSrc="https://placehold.co/48x48" size="medium" selected />
          </Stack>

          <Stack spacing={400} direction="row">
            <ColorSwatch size="medium" selection="rainbow" selected />
            <ColorSwatch hex="#FF0000" size="medium" selection="rainbow" selected />
            <ColorSwatch hex="#FF00004D" size="medium" selection="rainbow" selected />
            <ColorSwatch imageSrc="https://placehold.co/48x48" size="medium" selection="rainbow" selected />
          </Stack>
        </Stack>

        <Stack spacing={1000} direction="row">
          <Stack spacing={400} direction="row">
            <ColorSwatch size="large" selected />
            <ColorSwatch hex="#FF0000" size="large" selected />
            <ColorSwatch hex="#FF00004D" size="large" selected />
            <ColorSwatch imageSrc="https://placehold.co/48x48" size="large" selected />
          </Stack>

          <Stack spacing={400} direction="row">
            <ColorSwatch size="large" selection="rainbow" selected />
            <ColorSwatch hex="#FF0000" size="large" selection="rainbow" selected />
            <ColorSwatch hex="#FF00004D" size="large" selection="rainbow" selected />
            <ColorSwatch imageSrc="https://placehold.co/48x48" size="large" selection="rainbow" selected />
          </Stack>
        </Stack>
      </Stack>
    </div>
}`,...(H=(T=h.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var R,E,A;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
        <ColorSwatch>
          <Icon glyph={aiGlyph} size={16} />
        </ColorSwatch>
        <ColorSwatch hex="#FF0000">
          <Icon glyph={aiGlyph} size={16} />
        </ColorSwatch>
        <ColorSwatch hex="#FF00004D">
          <Icon glyph={aiGlyph} size={16} />
        </ColorSwatch>
        <ColorSwatch imageSrc="https://placehold.co/48x48">
          <Icon glyph={aiGlyph} size={16} />
        </ColorSwatch>
        {/* <ColorSwatch wheel>
          <Icon glyph={aiGlyph} size={16} />
         </ColorSwatch> */}
      </Stack>
    </div>
}`,...(A=(E=m.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const Z=["Demo","Hex","ImageSrc","Title","Size","Hoverable","Selection","Children"];export{m as Children,l as Demo,c as Hex,d as Hoverable,s as ImageSrc,h as Selection,n as Size,i as Title,Z as __namedExportsOrder,Y as default};
