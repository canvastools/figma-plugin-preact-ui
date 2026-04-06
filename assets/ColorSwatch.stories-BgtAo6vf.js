import{u as e,d as u}from"./hooks.module-BMDhD8C6.js";import{f as R}from"./index-Bk8NU0jy.js";import{C as o}from"./ColorSwatch-BULtME7J.js";import{T as g}from"./Text-DSWvyrh8.js";import{I as U}from"./Icon-CwUXZnq_.js";import{a as W}from"./ai-qFJrJYUd.js";import{a as j}from"./TooltipContext-Be-KFfgH.js";import"./preact.module-DhLccOoG.js";import"./typedForwardRef-BBQ-rOPo.js";import"./compat.module-BB5nNOI3.js";import"./color-C4wFq2U9.js";import"./TooltipContainer-DWitGrs9.js";const M={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch size="small"/>

<ColorSwatch size="medium"/>

<ColorSwatch size="large"/>
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(o,{size:"small"}),e(o,{size:"medium"}),e(o,{size:"large"})]})},O={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 1 }}/>
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(o,{fill:{r:255,g:0,b:0,a:1}}),e(o,{fill:{r:255,g:0,b:0,a:.5}}),e(o,{fill:{r:255,g:0,b:0,a:0}})]})},q={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Disabled swatch stops receiving hover and focus events."},source:{language:"tsx",code:`
<ColorSwatch disabled/>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:e(o,{disabled:!0})})},A={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch selected />

<ColorSwatch
  selection="rainbow"
  selected
/>
`}}},render:()=>{const[r,p]=u(!0),[t,m]=u(!0);return e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(g,{fullWidth:!0,children:["default, ",r?"true":"false"]}),e(o,{selected:r,onClick:()=>p(!r)}),e(o,{fill:{r:255,g:0,b:0,a:1},selected:r,onClick:()=>p(!r)})]}),e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(g,{fullWidth:!0,children:["rainbow, ",t?"true":"false"]}),e(o,{selection:"rainbow",selected:t,onClick:()=>m(!t)}),e(o,{fill:{r:255,g:0,b:0,a:1},selection:"rainbow",selected:t,onClick:()=>m(!t)})]})]})}},B={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
import { ai } from "figma-plugin-preact-ui"

<ColorSwatch>
  <Icon glyph={ai} size={16} />
</ColorSwatch> 

<ColorSwatch>
  <img src="https://placehold.co/48x48" />
</ColorSwatch> 
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(o,{fill:{r:255,g:0,b:0,a:.5},children:e(U,{glyph:W,size:16})}),e(o,{children:e("img",{src:"https://placehold.co/48x48"})})]})},F={type:"gradient-linear",gradientHandlePositions:[{x:0,y:.5},{x:1,y:.5},{x:0,y:0}],gradientStops:[{position:0,color:{r:1,g:.4,b:.4,a:1}},{position:1,color:{r:1,g:.7,b:.4,a:1}}]},J={type:"gradient-radial",gradientHandlePositions:[{x:.5,y:.5},{x:.5,y:1},{x:1,y:.5}],gradientStops:[{position:0,color:{r:.4,g:.6,b:1,a:1}},{position:1,color:{r:.2,g:.2,b:.6,a:1}}]},K={type:"gradient-angular",gradientHandlePositions:[{x:.5,y:.5},{x:1,y:.5},{x:.5,y:1}],gradientStops:[{position:0,color:{r:1,g:.4,b:.4,a:1}},{position:.5,color:{r:.4,g:1,b:.4,a:1}},{position:1,color:{r:.4,g:.4,b:1,a:1}}]},L={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch fill={{ type: 'gradient-linear', ... }} />
<ColorSwatch fill={{ type: 'gradient-radial', ... }} />
<ColorSwatch fill={{ type: 'gradient-angular', ... }} />
<ColorSwatch fill={{ type: 'gradient-diamond', ... }} />
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(o,{fill:F,size:"large"}),e(o,{fill:J,size:"large"}),e(o,{fill:K,size:"large"})]})},ie={title:"Components/ColorSwatch",component:o,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},size:{control:{type:"radio"},options:["small","medium","large"],defaultValue:{summary:"medium"}},fill:{control:{type:"object"},table:{type:{summary:"Color | GradientPaint",detail:`
Color:{
  r: number
  g: number
  b: number
  a: number
}

GradientPaint:{
  type: 'gradient-linear' | 'gradient-radial' | 'gradient-angular'
  gradientHandlePositions: [Vector, Vector, Vector]
  gradientStops: ColorStop[]
}

ColorStop: {
  color: Color
  position: number
}

Vector: {
  x: number
  y: number
}
`}}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},selected:{control:{type:"boolean"},defaultValue:{summary:!1}},selection:{control:{type:"radio"},options:["default","rainbow"],description:"Selection border style.",defaultValue:{summary:"default"}},tooltip:{control:{type:"text"},description:"Tooltip content.",table:{type:{summary:"preact.ComponentChildren"}}},children:{control:{disable:!0},table:{type:{summary:"preact.ComponentChildren"}}},onClick:{table:{type:{summary:"(args) => void",detail:`
args: { 
  event: MouseEvent
  fill: Color | undefined
}
          `}}}}},a={tags:["!autodocs"],args:{id:void 0,className:"",size:"medium",fill:{r:1,g:0,b:0,a:1},disabled:!1,selected:!1,selection:"default",tooltip:"ColorSwatch tooltip",onClick:R()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <ColorSwatch {...args}/>
</TooltipContext>
`}}},render:r=>e("div",{className:"sb-column sb-width-full",children:e(j,{children:e(o,{...r})})})},l=M,s=O,i=q,n=A,c=B,d=L;var b,f,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    size: 'medium',
    fill: {
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
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var h,C,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:"SizeStory",...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var y,x,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"ColorStory",...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var z,V,N;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:"DisabledStory",...(N=(V=i.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var T,k,D;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:"SelectionStory",...(D=(k=n.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var G,P,H;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:"ChildrenStory",...(H=(P=c.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var _,I,E;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:"GradientStory",...(E=(I=d.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const ne=["Demo","Size","_Color","Disabled","Selection","Children","Gradient"];export{c as Children,a as Demo,i as Disabled,d as Gradient,n as Selection,l as Size,s as _Color,ne as __namedExportsOrder,ie as default};
