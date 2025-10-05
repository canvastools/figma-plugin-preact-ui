import{u as e}from"./hooks.module-Dxk9uxGs.js";import{t as u,b as g}from"./typedForwardRef-Bwgl65_g.js";import{s as S}from"./spacing-DUhwfx1q.js";import{S as b}from"./Stack-CNzGXmi4.js";import{A as o}from"./Avatar-CT0srIRA.js";const v=({className:a,size:i,direction:m="column",...p},l)=>{const d=g("Spacing",void 0,{size:String(i),direction:m});return e("div",{className:[d,a].join(" ").trim(),ref:l,...p})},t=u(v),f={title:"Layout/Spacing",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A component that creates a space between components."}}},argTypes:{className:{control:{type:"text"}},direction:{control:{type:"radio"},options:["row","column"],defaultValue:{summary:"column"}},size:{control:{type:"radio"},options:[...Object.keys(S.variables).map(Number)]}}},r={args:{className:"sb-container",direction:"column",size:400},parameters:{viewport:{defaultViewport:"large"}},render:a=>e("div",{className:"sb-column sb-width-full",children:e(b,{direction:a.direction,children:[e(o,{children:"A"}),e(t,{...a}),e(o,{children:"B"}),e(t,{...a}),e(o,{children:"C"}),e(t,{...a})]})})};var n,s,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    className: "sb-container",
    direction: "column",
    size: 400
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <Stack direction={
    // @ts-expect-error - Storybook types hack
    args.direction}>
        <Avatar>A</Avatar>
        <Spacing {...args} />
        <Avatar>B</Avatar>
        <Spacing {...args} />
        <Avatar>C</Avatar>
        <Spacing {...args} />
      </Stack>
    </div>
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const y=["Demo"],k=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{r as D,t as S,k as a};
