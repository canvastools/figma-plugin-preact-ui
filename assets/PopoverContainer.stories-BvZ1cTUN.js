import{u as e}from"./hooks.module-DDuEt2mE.js";import{P as r}from"./PopoverContainer-W4y52T6r.js";import{T as o}from"./Text-BooB5DEX.js";import"./preact.module-D68vdB8i.js";import"./typedForwardRef-eUJP59ez.js";import"./compat.module-AmaJGl25.js";const h={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<PopoverContainer
  width={200}
  height={300}
>
  {children}
</PopoverContainer>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-40",children:[e(r,{children:e(o,{children:"No width or height"})}),e(r,{width:200,children:e(o,{children:"Width: 200"})}),e(r,{height:300,children:e(o,{children:"Height: 300"})}),e(r,{width:200,height:300,children:e(o,{children:"Width: 200, Height: 300"})})]})},b={title:"Components/PopoverContainer",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that displays the popover content."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},width:{control:{type:"number"},description:"Takes the width of the content if not provided."},height:{control:{type:"number"},description:"Takes the height of the content if not provided."},showArrow:{control:{type:"boolean"},description:"Shows the arrow on the container based on the `<OverlayPositioner/>` placement."},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},tabIndex:{control:{type:"number"},description:"Tab order of the popover container. Omit for -1 (programmatic focus when opened).",table:{type:{summary:"number"}}}}},t={tags:["!autodocs"],args:{id:void 0,className:"",width:300,height:300,children:"Popover content",showArrow:!1},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<PopoverContainer {...args}>{children}</PopoverContainer>
`}}},render:a=>e("div",{className:"sb-column sb-width-300",style:"--overlay-arrow-left: 150px; --overlay-arrow-top: 0px;",children:e(r,{...a,children:e(o,{children:a.children})})})},n=h;var i,s,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    width: 300,
    height: 300,
    children: 'Popover content',
    showArrow: false
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<PopoverContainer {...args}>{children}</PopoverContainer>
\`
      }
    }
  },
  render: args => {
    return <div className="sb-column sb-width-300" style={'--overlay-arrow-left: 150px; --overlay-arrow-top: 0px;'}>
        <PopoverContainer {...args}>
          {/* @ts-expect-error Storybook spread */}
          <Text>{args.children}</Text>
        </PopoverContainer>
      </div>;
  }
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,p,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"SizeStory",...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const f=["Demo","Size"];export{t as Demo,n as Size,f as __namedExportsOrder,b as default};
