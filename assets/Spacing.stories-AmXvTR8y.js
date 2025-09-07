import{u as e}from"./hooks.module-Dxk9uxGs.js";import{t as u,b as S}from"./typedForwardRef-cP-mn0Xe.js";import{A as n}from"./Avatar-BEUu0_hx.js";import{S as g}from"./Stack-CayROFGf.js";import{S as b}from"./Section-45ajfN6P.js";import{s as v}from"./spacing-DUhwfx1q.js";const f=({className:a,size:i,direction:m="column",...p},l)=>{const d=S("Spacing",void 0,{size:String(i),direction:m});return e("div",{className:[d,a].join(" ").trim(),ref:l,...p})},t=u(f),y={title:"Layout/Spacing",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A component that creates a space between components."}}},argTypes:{className:{control:{type:"text"}},direction:{control:{type:"radio"},options:["row","column"],defaultValue:{summary:"column"}},size:{control:{type:"radio"},options:[...Object.keys(v.variables).map(Number)]}}},r={args:{className:"sb-container",direction:"column",size:400},parameters:{viewport:{defaultViewport:"large"}},render:a=>e("div",{className:"sb-column sb-width-full",children:e(b,{children:e(g,{direction:a.direction,children:[e(n,{children:"A"}),e(t,{...a}),e(n,{children:"B"}),e(t,{...a}),e(n,{children:"C"}),e(t,{...a})]})})})};var o,s,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      <Section>
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
      </Section>
    </div>
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const A=["Demo"],j=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,__namedExportsOrder:A,default:y},Symbol.toStringTag,{value:"Module"}));export{r as D,t as S,j as a};
