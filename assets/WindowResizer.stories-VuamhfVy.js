import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{n as r,t as i}from"./WindowResizer-CSrzyg5a.js";var a,o,s,c;function l(){return(l=e((()=>{r(),n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Layout/WindowResizer`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`A plugin window resizer control. Demo window is non-resizable.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},minWidth:{control:{type:`number`},description:`<strong>*</strong>`},minHeight:{control:{type:`number`},description:`<strong>*</strong>`},maxWidth:{control:{type:`number`},description:`<strong>*</strong>`},maxHeight:{control:{type:`number`},description:`<strong>*</strong>`},onResize:{table:{type:{summary:`(args) => void`,detail:`
args: { 
  width: number
  height: number
}
          `}}}}},s={args:{id:void 0,className:``,minWidth:380,minHeight:480,maxWidth:800,maxHeight:600,onResize:a()},globals:{background:`secondary`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<WindowResizer 
  minWidth={380}
  minHeight={480}
  maxWidth={800}
  maxHeight={600}
  {...args} 
/>
`}}},render:e=>t(`div`,{className:`sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center`,children:t(i,{...e})})},c=[`Demo`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    minWidth: 380,
    minHeight: 480,
    maxWidth: 800,
    maxHeight: 600,
    onResize: fn()
  },
  globals: {
    background: 'secondary'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<WindowResizer 
  minWidth={380}
  minHeight={480}
  maxWidth={800}
  maxHeight={600}
  {...args} 
/>
\`
      }
    }
  },
  render: args => <div className="sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center">
      <WindowResizer {...args} />
    </div>
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Demo,c as __namedExportsOrder,o as default};