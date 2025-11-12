import{u as e}from"./hooks.module-Dxk9uxGs.js";import{S as s}from"./Stack-CNzGXmi4.js";import{s as l}from"./spacing-DUhwfx1q.js";import{S as c}from"./Section-yfO0z026.js";import{A as r}from"./Avatar-CT0srIRA.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";import"./Text-C438qO9S.js";const v={title:"Layout/Stack",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that aligns components inside."}}},argTypes:{className:{control:{type:"text"}},direction:{control:{type:"radio"},options:["row","row-reverse","column","column-reverse"],defaultValue:{summary:"column"}},spacing:{control:{type:"radio"},options:[...Object.keys(l.variables).map(Number)]},x:{control:{type:"radio"},options:["start","center","end"],defaultValue:{summary:"start"},description:"Horizontal alignment of the children."},y:{control:{type:"radio"},options:["start","center","end"],defaultValue:{summary:"start"},description:"Horizontal alignment of the children."},fullHeight:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Set the height to 100% to occupy the entire height in flex containers. May requires &lt;ScrollContainer/&gt; to be used as it uses `overflow: hidden`."},fullWidth:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Set the width to 100% to occupy the entire width in container.",table:{type:{summary:"boolean"}}},children:{control:{disable:!0},table:{type:{summary:"JSX.Element"}}}}},t={args:{className:"sb-container",spacing:400,direction:"column",x:"start",y:"start",fullHeight:!1},parameters:{viewport:{defaultViewport:"large"}},render:i=>e("div",{className:"sb-column sb-height-300",children:e(c,{children:e(s,{...i,children:[e(r,{children:"A"}),e(r,{children:"B"}),e(r,{children:"C"})]})})})};var a,o,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    className: "sb-container",
    spacing: 400,
    direction: "column",
    x: "start",
    y: "start",
    fullHeight: false
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-height-300">
      <Section>
        <Stack {...args}>
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>
        </Stack>
      </Section>
    </div>
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const S=["Demo"];export{t as Demo,S as __namedExportsOrder,v as default};
