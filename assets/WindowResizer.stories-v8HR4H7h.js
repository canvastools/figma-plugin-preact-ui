import{u as e}from"./hooks.module-CGIakYml.js";import{f as a}from"./index-BWINGljf.js";import{W as r}from"./WindowResizer-BJoboTd5.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";const u={title:"Layout/WindowResizer",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A plugin window resizer control. Demo window is non-resizable."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},minWidth:{control:{type:"number"},description:"<strong>*</strong>"},minHeight:{control:{type:"number"},description:"<strong>*</strong>"},maxWidth:{control:{type:"number"},description:"<strong>*</strong>"},maxHeight:{control:{type:"number"},description:"<strong>*</strong>"},onResize:{table:{type:{summary:"(args) => void",detail:`
args: { 
  width: number
  height: number
}
          `}}}}},n={args:{id:void 0,className:"",minWidth:380,minHeight:480,maxWidth:800,maxHeight:600,onResize:a()},globals:{background:"secondary"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<WindowResizer 
  minWidth={380}
  minHeight={480}
  maxWidth={800}
  maxHeight={600}
  {...args} 
/>
`}}},render:s=>e("div",{className:"sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center",children:e(r,{...s})})};var i,t,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
        language: 'tsx',
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
}`,...(o=(t=n.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const w=["Demo"];export{n as Demo,w as __namedExportsOrder,u as default};
