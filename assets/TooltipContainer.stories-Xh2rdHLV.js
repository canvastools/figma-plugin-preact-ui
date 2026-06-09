import{u as e}from"./hooks.module-6Sbq__eq.js";import{T as o}from"./TooltipContainer-CJCq4A9v.js";import"./preact.module-gH5CyEHP.js";import"./Text-BbQ_b1VF.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";const p={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TooltipContainer
  width={200}
  height={300}
>
  {children}
</TooltipContainer>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-40",children:[e(o,{children:"No width or height"}),e(o,{width:200,children:"Width: 200"}),e(o,{height:300,children:"Height: 300"}),e(o,{width:200,height:300,children:"Width: 200, Height: 300"})]})},b={title:"Components/TooltipContainer",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that displays the tooltip content."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},width:{control:{type:"number"}},height:{control:{type:"number"}},showArrow:{control:{type:"boolean"},description:"Shows the arrow on the container based on the `<OverlayPositioner/>` placement."},children:{control:{control:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},t={tags:["!autodocs"],args:{id:void 0,className:"",width:300,height:100,showArrow:!1,children:"Tooltip content"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TooltipContainer {...args}>{children}</TooltipContainer>
`}}},render:n=>e("div",{className:"sb-column sb-width-full",style:"--overlay-arrow-left: 150px; --overlay-arrow-top: 0px;",children:e(o,{...n,children:n.children})})},r=p;var a,i,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    width: 300,
    height: 100,
    showArrow: false,
    children: 'Tooltip content'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<TooltipContainer {...args}>{children}</TooltipContainer>
\`
      }
    }
  },
  render: args => {
    return <div className="sb-column sb-width-full" style={'--overlay-arrow-left: 150px; --overlay-arrow-top: 0px;'}>
        <TooltipContainer {...args}>
          {/* @ts-expect-error Storybook spread */}
          {args.children}
        </TooltipContainer>
      </div>;
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"SizeStory",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const f=["Demo","Size"];export{t as Demo,r as Size,f as __namedExportsOrder,b as default};
