import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{n as r,t as i}from"./Text-Cr-51GRl.js";import{n as a,t as o}from"./PopoverContainer-BE6zrWED.js";var s;function c(){return(c=e((()=>{r(),a(),n(),s={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<PopoverContainer
  width={200}
  height={300}
>
  {children}
</PopoverContainer>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[t(o,{children:t(i,{children:`No width or height`})}),t(o,{width:200,children:t(i,{children:`Width: 200`})}),t(o,{height:300,children:t(i,{children:`Height: 300`})}),t(o,{width:200,height:300,children:t(i,{children:`Width: 200, Height: 300`})})]})}})))()}var l,u,d,f;function p(){return(p=e((()=>{c(),r(),a(),n(),l={title:`Components/PopoverContainer`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`A wrapper component that displays the popover content.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},width:{control:{type:`number`},description:`Takes the width of the content if not provided.`},height:{control:{type:`number`},description:`Takes the height of the content if not provided.`},showArrow:{control:{type:`boolean`},description:"Shows the arrow on the container based on the `<OverlayPositioner/>` placement."},children:{control:{type:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},tabIndex:{control:{type:`number`},description:`Tab order of the popover container. Omit for -1 (programmatic focus when opened).`,table:{type:{summary:`number`}}}}},u={args:{id:void 0,className:``,width:300,height:300,children:`Popover content`,showArrow:!1},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<PopoverContainer {...args}>{children}</PopoverContainer>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-300`,style:`--overlay-arrow-left: 150px; --overlay-arrow-top: 0px;`,children:t(o,{...e,children:t(i,{children:e.children})})})},d=s,f=[`Demo`,`Size`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`SizeStory`,...d.parameters?.docs?.source}}}})))()}p();export{u as Demo,d as Size,f as __namedExportsOrder,l as default};