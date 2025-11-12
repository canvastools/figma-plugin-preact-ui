import{y as N,u as d}from"./hooks.module-Dxk9uxGs.js";import{f as D}from"./index-BWINGljf.js";import{t as F,b as j}from"./typedForwardRef-Bwgl65_g.js";const k=({className:i,minWidth:m,minHeight:c,maxWidth:l,maxHeight:u,onResize:o,...x},L)=>{const M=j("WindowResizer",void 0,void 0);return N(()=>{const r=document.getElementById("WindowResizer");if(!r)return;let w,p,g,h,e=null,v=0,b=0;const H=()=>{o==null||o({width:v,height:b}),e=null},s=n=>{const R=Math.min(Math.max(g+n.clientX-w,m),l),_=Math.min(Math.max(h+n.clientY-p,c),u);v=R,b=_,e===null&&(e=requestAnimationFrame(H))},a=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",a),e!==null&&(cancelAnimationFrame(e),e=null)},W=n=>{n.preventDefault(),w=n.clientX,p=n.clientY,g=window.innerWidth,h=window.innerHeight,document.addEventListener("mousemove",s),document.addEventListener("mouseup",a)};return r.addEventListener("mousedown",W),()=>{r.removeEventListener("mousedown",W),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",a)}},[m,c,l,u,o]),d("div",{id:"WindowResizer",className:[M,i,"no-drag"].join(" ").trim(),ref:L,...x})},E=F(k),A={title:"Layout/WindowResizer",component:E,tags:["autodocs"],parameters:{docs:{description:{component:"A component that creates a window resizer control. Demo window is non-resizable."}}},argTypes:{className:{control:{type:"text"}},minWidth:{control:{type:"number"}},minHeight:{control:{type:"number"}},maxWidth:{control:{type:"number"}},maxHeight:{control:{type:"number"}},onResize:{action:"changed",description:"Callback when user resizes the window.",table:{type:{summary:"(args: { width: number; height: number }) => void"}}}}},t={args:{className:"",minWidth:380,minHeight:480,maxWidth:800,maxHeight:600,onResize:D()},globals:{background:"secondary"},parameters:{viewport:{defaultViewport:"large"}},render:i=>d("div",{className:"sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center",children:d(E,{...i})})};var f,y,z;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    className: "",
    minWidth: 380,
    minHeight: 480,
    maxWidth: 800,
    maxHeight: 600,
    onResize: fn()
  },
  globals: {
    background: "secondary"
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center">
      <WindowResizer {...args} />
    </div>
}`,...(z=(y=t.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};const O=["Demo"],C=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:O,default:A},Symbol.toStringTag,{value:"Module"}));export{t as D,E as W,C as a};
