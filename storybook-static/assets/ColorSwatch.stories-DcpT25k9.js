import{u as e,d as p}from"./hooks.module-CGIakYml.js";import{f as E}from"./index-BWINGljf.js";import{C as o}from"./ColorSwatch-ioiL30rG.js";import{T as u}from"./Text-9aeIDhQ2.js";import{I as R}from"./Icon-DYEerEJN.js";import{a as U}from"./ai-CNuL1FuG.js";import{a as W}from"./TooltipContext-DJAjWLpJ.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./color-C4wFq2U9.js";import"./TooltipContainer-BVa1RtHA.js";const j={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch size="small"/>

<ColorSwatch size="medium"/>

<ColorSwatch size="large"/>
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(o,{size:"small"}),e(o,{size:"medium"}),e(o,{size:"large"})]})},M={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch color={{ r: 255, g: 0, b: 0, a: 1 }}/>
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(o,{color:{r:255,g:0,b:0,a:1}}),e(o,{color:{r:255,g:0,b:0,a:.5}}),e(o,{color:{r:255,g:0,b:0,a:0}})]})},O={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Disabled swatch stops receiving hover and focus events."},source:{language:"tsx",code:`
<ColorSwatch disabled/>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:e(o,{disabled:!0})})},q={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch selected />

<ColorSwatch
  selection="rainbow"
  selected
/>
`}}},render:()=>{const[r,d]=p(!0),[t,m]=p(!0);return e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(u,{fullWidth:!0,children:["default, ",r?"true":"false"]}),e(o,{selected:r,onClick:()=>d(!r)}),e(o,{color:{r:255,g:0,b:0,a:1},selected:r,onClick:()=>d(!r)})]}),e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(u,{fullWidth:!0,children:["rainbow, ",t?"true":"false"]}),e(o,{selection:"rainbow",selected:t,onClick:()=>m(!t)}),e(o,{color:{r:255,g:0,b:0,a:1},selection:"rainbow",selected:t,onClick:()=>m(!t)})]})]})}},A={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
import { ai } from "figma-plugin-preact-ui"

<ColorSwatch>
  <Icon glyph={ai} size={16} />
</ColorSwatch> 

<ColorSwatch>
  <img src="https://placehold.co/48x48" />
</ColorSwatch> 
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(o,{color:{r:255,g:0,b:0,a:.5},children:e(R,{glyph:U,size:16})}),e(o,{children:e("img",{src:"https://placehold.co/48x48"})})]})},$={title:"Components/ColorSwatch",component:o,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},size:{control:{type:"radio"},options:["small","medium","large"],defaultValue:{summary:"medium"}},color:{control:{type:"object"},table:{type:{summary:"Color",detail:`
{
  r: number
  g: number
  b: number
  a: number
}
`}}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},selected:{control:{type:"boolean"},defaultValue:{summary:!1}},selection:{control:{type:"radio"},options:["default","rainbow"],description:"Selection border style.",defaultValue:{summary:"default"}},tooltip:{control:{type:"text"},description:"Tooltip content.",table:{type:{summary:"preact.ComponentChildren"}}},children:{control:{disable:!0},table:{type:{summary:"preact.ComponentChildren"}}},onClick:{table:{type:{summary:"(args) => void",detail:`
args: { 
  event: MouseEvent
  color: Color | undefined
}
          `}}}}},a={tags:["!autodocs"],args:{id:void 0,className:"",size:"medium",color:{r:1,g:0,b:0,a:1},disabled:!1,selected:!1,selection:"default",tooltip:"ColorSwatch tooltip",onClick:E()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <ColorSwatch {...args}/>
</TooltipContext>
`}}},render:r=>e("div",{className:"sb-column sb-width-full",children:e(W,{children:e(o,{...r})})})},s=j,l=M,c=O,i=q,n=A;var b,g,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    size: 'medium',
    color: {
      r: 1,
      g: 0,
      b: 0,
      a: 1
    } as Color,
    disabled: false,
    selected: false,
    selection: 'default',
    tooltip: 'ColorSwatch tooltip',
    onClick: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<ColorSwatch {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <ColorSwatch {...args}/>
</TooltipContext>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <TooltipContext>
        <ColorSwatch {...args} />
      </TooltipContext>
    </div>
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var w,C,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:"SizeStory",...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var S,y,v;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:"ColorStory",...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,z,T;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"DisabledStory",...(T=(z=c.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var N,k,V;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:"SelectionStory",...(V=(k=i.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var D,_,I;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:"ChildrenStory",...(I=(_=n.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const ee=["Demo","Size","_Color","Disabled","Selection","Children"];export{n as Children,a as Demo,c as Disabled,i as Selection,s as Size,l as _Color,ee as __namedExportsOrder,$ as default};
