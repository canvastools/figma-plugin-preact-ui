import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-XYsEgyrh.js";import{n as r,t as i}from"./TooltipContainer-CbKO0hms.js";var a,o=e((()=>{r(),n(),a={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<TooltipContainer
  width={200}
  height={300}
>
  {children}
</TooltipContainer>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[t(i,{children:`No width or height`}),t(i,{width:200,children:`Width: 200`}),t(i,{height:300,children:`Height: 300`}),t(i,{width:200,height:300,children:`Width: 200, Height: 300`})]})}})),s,c,l,u;e((()=>{o(),r(),n(),s={title:`Components/TooltipContainer`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`A wrapper component that displays the tooltip content.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},width:{control:{type:`number`}},height:{control:{type:`number`}},showArrow:{control:{type:`boolean`},description:"Shows the arrow on the container based on the `<OverlayPositioner/>` placement."},children:{control:{control:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},c={args:{id:void 0,className:``,width:300,height:100,showArrow:!1,children:`Tooltip content`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<TooltipContainer {...args}>{children}</TooltipContainer>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,style:`--overlay-arrow-left: 150px; --overlay-arrow-top: 0px;`,children:t(i,{...e,children:e.children})})},l=a,c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
        code: \`
<TooltipContainer {...args}>{children}</TooltipContainer>
\`
      }
    }
  },
  render: args => {
    return <div className="sb-column sb-width-full" style={'--overlay-arrow-left: 150px; --overlay-arrow-top: 0px;'}>
        <TooltipContainer {...args}>{args.children}</TooltipContainer>
      </div>;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`SizeStory`,...l.parameters?.docs?.source}}},u=[`Demo`,`Size`]}))();export{c as Demo,l as Size,u as __namedExportsOrder,s as default};