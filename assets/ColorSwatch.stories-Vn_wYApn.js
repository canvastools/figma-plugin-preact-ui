import{u as e,d as w}from"./hooks.module-6Sbq__eq.js";import{f as Y}from"./index-B4E_jmCM.js";import{C as r}from"./ColorSwatch-BT_gS1uN.js";import{T as t}from"./Text-BbQ_b1VF.js";import{S as b}from"./Stack-FIJoWfyG.js";import{I as Z}from"./Icon-DqIclgYW.js";import{a as ee}from"./ai-CRIuSBz3.js";import{a as re}from"./TooltipContext-ARXbiFOo.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./color-C4wFq2U9.js";import"./TooltipContainer-CJCq4A9v.js";const ae={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch size="small"/>

<ColorSwatch size="medium"/>

<ColorSwatch size="large"/>
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(r,{size:"small"}),e(r,{size:"medium"}),e(r,{size:"large"})]})},oe={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 1 }}/>
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(r,{fill:{r:255,g:0,b:0,a:1}}),e(r,{fill:{r:255,g:0,b:0,a:.5}}),e(r,{fill:{r:255,g:0,b:0,a:0}})]})},te={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 1 }} alpha={false}/>
<ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 0.5 }} alpha={false}/>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(t,{children:"Alpha: true"}),e(b,{direction:"row",spacing:"200",children:[e(r,{fill:{r:255,g:0,b:0,a:1},alpha:!0}),e(r,{fill:{r:255,g:0,b:0,a:.5},alpha:!0}),e(r,{fill:{r:255,g:0,b:0,a:0},alpha:!0})]}),e(t,{children:"Alpha: false"}),e(b,{direction:"row",spacing:"200",children:[e(r,{fill:{r:255,g:0,b:0,a:1},alpha:!1}),e(r,{fill:{r:255,g:0,b:0,a:.5},alpha:!1}),e(r,{fill:{r:255,g:0,b:0,a:0},alpha:!1})]})]})},le={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Disabled swatch stops receiving hover and focus events."},source:{language:"tsx",code:`
<ColorSwatch disabled/>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:e(r,{disabled:!0})})},se={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch selected />

<ColorSwatch
  selection="rainbow"
  selected
/>
`}}},render:()=>{const[a,f]=w(!0),[o,h]=w(!0);return e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(t,{fullWidth:!0,children:["default, ",a?"true":"false"]}),e(r,{selected:a,onClick:()=>f(!a)}),e(r,{fill:{r:255,g:0,b:0,a:1},selected:a,onClick:()=>f(!a)}),e(r,{fill:{r:255,g:0,b:0,a:1},selected:a,onClick:()=>f(!a),disabled:!0})]}),e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(t,{fullWidth:!0,children:["rainbow, ",o?"true":"false"]}),e(r,{selection:"rainbow",selected:o,onClick:()=>h(!o)}),e(r,{fill:{r:255,g:0,b:0,a:1},selection:"rainbow",selected:o,onClick:()=>h(!o)}),e(r,{fill:{r:255,g:0,b:0,a:1},selection:"rainbow",selected:o,onClick:()=>h(!o),disabled:!0})]})]})}},ie={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
import { ai } from "figma-plugin-preact-ui"

<ColorSwatch>
  <Icon glyph={ai} size={16} variant="downscaled" />
</ColorSwatch> 

<ColorSwatch>
  <img src="https://placehold.co/48x48" />
</ColorSwatch> 
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(r,{fill:{r:255,g:0,b:0,a:.5},children:e(Z,{glyph:ee,size:16,variant:"downscaled"})}),e(r,{children:e("img",{src:"https://placehold.co/48x48"})})]})},ne={type:"gradient-linear",gradientHandlePositions:[{x:0,y:.5},{x:1,y:.5},{x:0,y:0}],gradientStops:[{position:0,color:{r:1,g:.4,b:.4,a:1}},{position:1,color:{r:1,g:.7,b:.4,a:1}}]},ce={type:"gradient-radial",gradientHandlePositions:[{x:.5,y:.5},{x:.5,y:1},{x:1,y:.5}],gradientStops:[{position:0,color:{r:.4,g:.6,b:1,a:1}},{position:1,color:{r:.2,g:.2,b:.6,a:.2}}]},de={type:"gradient-angular",gradientHandlePositions:[{x:.5,y:.5},{x:1,y:.5},{x:.5,y:1}],gradientStops:[{position:0,color:{r:1,g:.4,b:.4,a:1}},{position:.5,color:{r:.4,g:1,b:.4,a:1}},{position:1,color:{r:.4,g:.4,b:1,a:1}}]},pe={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch fill={{ type: 'gradient-linear', ... }} />
<ColorSwatch fill={{ type: 'gradient-radial', ... }} />
<ColorSwatch fill={{ type: 'gradient-angular', ... }} />
<ColorSwatch fill={{ type: 'gradient-diamond', ... }} />
`}}},render:()=>e("div",{className:"sb-row sb-width-full sb-gap-16",children:[e(r,{fill:ne,size:"large"}),e(r,{fill:ce,size:"large"}),e(r,{fill:de,size:"large"})]})},y={type:"gradient-linear",gradientHandlePositions:[{x:1,y:1},{x:0,y:0},{x:0,y:0}],gradientStops:[{position:0,color:{r:1,g:.4,b:.4,a:1}},{position:1,color:{r:1,g:.7,b:.4,a:1}}]},S={type:"gradient-radial",gradientHandlePositions:[{x:.3,y:.3},{x:.3,y:1},{x:1,y:.3}],gradientStops:[{position:0,color:{r:1,g:1,b:1,a:1}},{position:1,color:{r:1,g:1,b:1,a:0}}]},C={type:"gradient-angular",gradientHandlePositions:[{x:.5,y:.5},{x:1,y:.5},{x:.5,y:1}],gradientStops:[{position:0,color:{r:1,g:.4,b:.4,a:1}},{position:.5,color:{r:.4,g:1,b:.4,a:1}},{position:1,color:{r:.4,g:.4,b:1,a:1}}]},x={r:.2,g:.4,b:1,a:1},v={r:1,g:1,b:0,a:.8},z={r:1,g:.2,b:.6,a:.8},l={r:1,g:0,b:0,a:.4},ue={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch
  fill={[
    { r: 0.2, g: 0.4, b: 1, a: 1 },
    { r: 1, g: 0.2, b: 0.6, a: 0.5 },
  ]}
/>

<ColorSwatch
  fill={[
    { type: 'gradient-linear', ... },
    { type: 'gradient-radial', ... },
  ]}
/>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(t,{children:"Alpha: true"}),e(b,{direction:"row",spacing:"200",children:[e(r,{fill:[x,z],size:"large",selection:"rainbow"}),e(r,{fill:[v,l],size:"large",selection:"rainbow"}),e(r,{fill:[y,S],size:"large",selection:"rainbow"}),e(r,{fill:[C,l],size:"large",selection:"rainbow"})]}),e(t,{children:"Alpha: false"}),e(b,{direction:"row",spacing:"200",children:[e(r,{fill:[x,z],size:"large",alpha:!1}),e(r,{fill:[v,l],size:"large",alpha:!1}),e(r,{fill:[y,S],size:"large",alpha:!1}),e(r,{fill:[C,l],size:"large",alpha:!1})]})]})},Te={title:"Components/ColorSwatch",component:r,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},size:{control:{type:"radio"},options:["small","medium","large"],defaultValue:{summary:"medium"}},fill:{control:{type:"object"},table:{type:{summary:"Color | GradientPaint | Array<Color | GradientPaint>",detail:`
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
`}}},alpha:{control:{type:"boolean"},description:"When true, transparent solid colors are split into opaque + alpha halves to preview transparency.",defaultValue:{summary:!0}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},selected:{control:{type:"boolean"},defaultValue:{summary:!1}},selection:{control:{type:"radio"},options:["default","rainbow"],description:"Selection border style.",defaultValue:{summary:"default"}},tooltip:{control:{type:"text"},description:"Tooltip content.",table:{type:{summary:"preact.ComponentChildren"}}},children:{control:{disable:!0},table:{type:{summary:"preact.ComponentChildren"}}},tabIndex:{control:{type:"number"},description:"Tab order of the swatch button. Omit for native button order when enabled; -1 when disabled.",table:{type:{summary:"number"}}},onClick:{table:{type:{summary:"(args) => void",detail:`
args: { 
  event: MouseEvent
  fill: Color | GradientPaint | Array<Color | GradientPaint> | undefined
}
          `}}}}},s={tags:["!autodocs"],args:{id:void 0,className:"",size:"medium",fill:{r:1,g:0,b:0,a:1},alpha:!0,disabled:!1,selected:!1,selection:"default",tooltip:"ColorSwatch tooltip",onClick:Y()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<ColorSwatch {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <ColorSwatch {...args}/>
</TooltipContext>
`}}},render:a=>e("div",{className:"sb-column sb-width-full",children:e(re,{children:e(r,{...a})})})},i=ae,n=oe,c=te,d=le,p=se,u=ie,g=pe,m=ue;var V,T,N;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    alpha: true,
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
}`,...(N=(T=s.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var k,P,A;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:"SizeStory",...(A=(P=i.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var D,G,H;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:"ColorStory",...(H=(G=n.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var M,I,_;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:"AlphaStory",...(_=(I=c.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var W,E,O;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:"DisabledStory",...(O=(E=d.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var R,U,$;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:"SelectionStory",...($=(U=p.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var j,q,B;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:"ChildrenStory",...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var F,J,K;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:"GradientStory",...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,Q,X;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:"MultipleStory",...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ne=["Demo","Size","_Color","Alpha","Disabled","Selection","Children","Gradient","Multiple"];export{c as Alpha,u as Children,s as Demo,d as Disabled,g as Gradient,m as Multiple,p as Selection,i as Size,n as _Color,Ne as __namedExportsOrder,Te as default};
