import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-B_u_rUE0.js";import{t as r}from"./Text-Bf8YN4P6.js";import{F as i,P as a,t as o}from"./src-CnP2aPTs.js";var s,c=e((()=>{o(),i(),n(),s={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<PopoverContainer
  width={200}
  height={300}
>
  {children}
</PopoverContainer>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[t(a,{children:t(r,{children:`No width or height`})}),t(a,{width:200,children:t(r,{children:`Width: 200`})}),t(a,{height:300,children:t(r,{children:`Height: 300`})}),t(a,{width:200,height:300,children:t(r,{children:`Width: 200, Height: 300`})})]})}})),l,u,d,f;e((()=>{c(),o(),i(),n(),l={title:`Components/PopoverContainer`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`A wrapper component that displays the popover content.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},width:{control:{type:`number`},description:`Takes the width of the content if not provided.`},height:{control:{type:`number`},description:`Takes the height of the content if not provided.`},showArrow:{control:{type:`boolean`},description:"Shows the arrow on the container based on the `<OverlayPositioner/>` placement."},children:{control:{type:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},tabIndex:{control:{type:`number`},description:`Tab order of the popover container. Omit for -1 (programmatic focus when opened).`,table:{type:{summary:`number`}}}}},u={args:{id:void 0,className:``,width:300,height:300,children:`Popover content`,showArrow:!1},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<PopoverContainer {...args}>{children}</PopoverContainer>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-300`,style:`--overlay-arrow-left: 150px; --overlay-arrow-top: 0px;`,children:t(a,{...e,children:t(r,{children:e.children})})})},d=s,u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
        code: \`
<PopoverContainer {...args}>{children}</PopoverContainer>
\`
      }
    }
  },
  render: args => {
    return <div className="sb-column sb-width-300" style={'--overlay-arrow-left: 150px; --overlay-arrow-top: 0px;'}>
        <PopoverContainer {...args}>
          <Text>{args.children}</Text>
        </PopoverContainer>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`SizeStory`,...d.parameters?.docs?.source}}},f=[`Demo`,`Size`]}))();export{u as Demo,d as Size,f as __namedExportsOrder,l as default};