import{u as t}from"./hooks.module-Dxk9uxGs.js";import{S as i}from"./Stack-CayROFGf.js";import{S as c}from"./Section-45ajfN6P.js";import{A as r}from"./Avatar-BEUu0_hx.js";import{s as l}from"./spacing-DUhwfx1q.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-cP-mn0Xe.js";import"./compat.module-c0s5p6eE.js";import"./Text-Dvytwbdg.js";const b={title:"Layout/Stack",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that aligns components inside."}}},argTypes:{className:{control:{type:"text"}},direction:{control:{type:"radio"},options:["row","row-reverse","column","column-reverse"],defaultValue:{summary:"column"}},spacing:{control:{type:"radio"},options:[...Object.keys(l.variables).map(Number)]},x:{control:{type:"radio"},options:["start","center","end"],defaultValue:{summary:"start"},description:"Horizontal alignment of the children."},y:{control:{type:"radio"},options:["start","center","end"],defaultValue:{summary:"start"},description:"Horizontal alignment of the children."},fullHeight:{control:{type:"boolean"},description:"Set the height to 100% to occupy the entire height in flex containers. May requires &lt;ScrollContainer/&gt; to be used as it uses `overflow: hidden`."},fullWidth:{control:{type:"boolean"},description:"Set the width to 100% to occupy the entire width in container."},children:{control:{disable:!0},table:{type:{summary:"JSX.Element"}}}}},e={args:{className:"sb-container",spacing:400,direction:"column",x:"start",y:"start",fullHeight:!1},parameters:{viewport:{defaultViewport:"large"}},render:s=>t("div",{className:"sb-column sb-height-300",children:t(c,{children:t(i,{...s,children:[t(r,{children:"A"}),t(r,{children:"B"}),t(r,{children:"C"})]})})})};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const S=["Demo"];export{e as Demo,S as __namedExportsOrder,b as default};
