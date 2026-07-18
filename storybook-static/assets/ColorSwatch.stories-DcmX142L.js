import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,w as n}from"./compat.module-BiyPQZFw.js";import{n as r,t as i}from"./jsxRuntime.module-XYsEgyrh.js";import{t as a}from"./Text-Dx8we2OT.js";import{At as o,Gn as s,Zn as c,jt as l,m as u,t as d,zn as f}from"./src-fsSRAyCS.js";var p,m=e((()=>{l(),i(),p={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ColorSwatch size="small"/>

<ColorSwatch size="medium"/>

<ColorSwatch size="large"/>
`}}},render:()=>r(`div`,{className:`sb-row sb-width-full sb-gap-16`,children:[r(o,{size:`small`}),r(o,{size:`medium`}),r(o,{size:`large`})]})}})),h,g=e((()=>{l(),i(),h={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 1 }}/>
`}}},render:()=>r(`div`,{className:`sb-row sb-width-full sb-gap-16`,children:[r(o,{fill:{r:255,g:0,b:0,a:1}}),r(o,{fill:{r:255,g:0,b:0,a:.5}}),r(o,{fill:{r:255,g:0,b:0,a:0}})]})}})),_,v=e((()=>{l(),d(),i(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 1 }} alpha={false}/>
<ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 0.5 }} alpha={false}/>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[r(a,{children:`Alpha: true`}),r(u,{direction:`row`,spacing:`200`,children:[r(o,{fill:{r:255,g:0,b:0,a:1},alpha:!0}),r(o,{fill:{r:255,g:0,b:0,a:.5},alpha:!0}),r(o,{fill:{r:255,g:0,b:0,a:0},alpha:!0})]}),r(a,{children:`Alpha: false`}),r(u,{direction:`row`,spacing:`200`,children:[r(o,{fill:{r:255,g:0,b:0,a:1},alpha:!1}),r(o,{fill:{r:255,g:0,b:0,a:.5},alpha:!1}),r(o,{fill:{r:255,g:0,b:0,a:0},alpha:!1})]})]})}})),y,b=e((()=>{l(),i(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`Disabled swatch stops receiving hover and focus events.`},source:{code:`
<ColorSwatch disabled/>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:r(o,{disabled:!0})})}})),x,S=e((()=>{n(),d(),l(),i(),x={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ColorSwatch selected />

<ColorSwatch
  selection="rainbow"
  selected
/>
`}}},render:()=>{let[e,n]=t(!0),[i,s]=t(!0);return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(`div`,{className:`sb-row sb-width-full sb-gap-16`,children:[r(a,{fullWidth:!0,children:[`default, `,e?`true`:`false`]}),r(o,{selected:e,onClick:()=>n(!e)}),r(o,{fill:{r:255,g:0,b:0,a:1},selected:e,onClick:()=>n(!e)}),r(o,{fill:{r:255,g:0,b:0,a:1},selected:e,onClick:()=>n(!e),disabled:!0})]}),r(`div`,{className:`sb-row sb-width-full sb-gap-16`,children:[r(a,{fullWidth:!0,children:[`rainbow, `,i?`true`:`false`]}),r(o,{selection:`rainbow`,selected:i,onClick:()=>s(!i)}),r(o,{fill:{r:255,g:0,b:0,a:1},selection:`rainbow`,selected:i,onClick:()=>s(!i)}),r(o,{fill:{r:255,g:0,b:0,a:1},selection:`rainbow`,selected:i,onClick:()=>s(!i),disabled:!0})]})]})}}})),C,w=e((()=>{d(),l(),i(),C={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
import { ai } from "figma-plugin-preact-ui"

<ColorSwatch>
  <Icon glyph={ai} size={16} variant="downscaled" />
</ColorSwatch> 

<ColorSwatch>
  <img src="https://placehold.co/48x48" />
</ColorSwatch> 
`}}},render:()=>r(`div`,{className:`sb-row sb-width-full sb-gap-16`,children:[r(o,{fill:{r:255,g:0,b:0,a:.5},children:r(s,{glyph:f,size:16,variant:`downscaled`})}),r(o,{children:r(`img`,{src:`https://placehold.co/48x48`})})]})}})),T,E,D,O,k=e((()=>{l(),i(),T={type:`gradient-linear`,gradientHandlePositions:[{x:0,y:.5},{x:1,y:.5},{x:0,y:0}],gradientStops:[{position:0,color:{r:1,g:.4,b:.4,a:1}},{position:1,color:{r:1,g:.7,b:.4,a:1}}]},E={type:`gradient-radial`,gradientHandlePositions:[{x:.5,y:.5},{x:.5,y:1},{x:1,y:.5}],gradientStops:[{position:0,color:{r:.4,g:.6,b:1,a:1}},{position:1,color:{r:.2,g:.2,b:.6,a:.2}}]},D={type:`gradient-angular`,gradientHandlePositions:[{x:.5,y:.5},{x:1,y:.5},{x:.5,y:1}],gradientStops:[{position:0,color:{r:1,g:.4,b:.4,a:1}},{position:.5,color:{r:.4,g:1,b:.4,a:1}},{position:1,color:{r:.4,g:.4,b:1,a:1}}]},O={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<ColorSwatch fill={{ type: 'gradient-linear', ... }} />
<ColorSwatch fill={{ type: 'gradient-radial', ... }} />
<ColorSwatch fill={{ type: 'gradient-angular', ... }} />
<ColorSwatch fill={{ type: 'gradient-diamond', ... }} />
`}}},render:()=>r(`div`,{className:`sb-row sb-width-full sb-gap-16`,children:[r(o,{fill:T,size:`large`}),r(o,{fill:E,size:`large`}),r(o,{fill:D,size:`large`})]})}})),A,j,M,N,P,F,I,L,R=e((()=>{l(),d(),i(),A={type:`gradient-linear`,gradientHandlePositions:[{x:1,y:1},{x:0,y:0},{x:0,y:0}],gradientStops:[{position:0,color:{r:1,g:.4,b:.4,a:1}},{position:1,color:{r:1,g:.7,b:.4,a:1}}]},j={type:`gradient-radial`,gradientHandlePositions:[{x:.3,y:.3},{x:.3,y:1},{x:1,y:.3}],gradientStops:[{position:0,color:{r:1,g:1,b:1,a:1}},{position:1,color:{r:1,g:1,b:1,a:0}}]},M={type:`gradient-angular`,gradientHandlePositions:[{x:.5,y:.5},{x:1,y:.5},{x:.5,y:1}],gradientStops:[{position:0,color:{r:1,g:.4,b:.4,a:1}},{position:.5,color:{r:.4,g:1,b:.4,a:1}},{position:1,color:{r:.4,g:.4,b:1,a:1}}]},N={r:.2,g:.4,b:1,a:1},P={r:1,g:1,b:0,a:.8},F={r:1,g:.2,b:.6,a:.8},I={r:1,g:0,b:0,a:.4},L={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[r(a,{children:`Alpha: true`}),r(u,{direction:`row`,spacing:`200`,children:[r(o,{fill:[N,F],size:`large`,selection:`rainbow`}),r(o,{fill:[P,I],size:`large`,selection:`rainbow`}),r(o,{fill:[A,j],size:`large`,selection:`rainbow`}),r(o,{fill:[M,I],size:`large`,selection:`rainbow`})]}),r(a,{children:`Alpha: false`}),r(u,{direction:`row`,spacing:`200`,children:[r(o,{fill:[N,F],size:`large`,alpha:!1}),r(o,{fill:[P,I],size:`large`,alpha:!1}),r(o,{fill:[A,j],size:`large`,alpha:!1}),r(o,{fill:[M,I],size:`large`,alpha:!1})]})]})}})),z,B,V,H,U,W,G,K,q,J,Y,X;e((()=>{m(),g(),v(),b(),S(),w(),k(),R(),d(),l(),i(),{fn:z}=__STORYBOOK_MODULE_TEST__,B={title:`Components/ColorSwatch`,component:o,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},size:{control:{type:`radio`},options:[`small`,`medium`,`large`],table:{defaultValue:{summary:`medium`}}},fill:{control:{type:`object`},table:{type:{summary:`Color | GradientPaint | Array<Color | GradientPaint>`,detail:`
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
`}}},alpha:{control:{type:`boolean`},description:`When true, transparent solid colors are split into opaque + alpha halves to preview transparency.`,table:{defaultValue:{summary:`true`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},selected:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},selection:{control:{type:`radio`},options:[`default`,`rainbow`],description:`Selection border style.`,table:{defaultValue:{summary:`default`}}},tooltip:{control:{type:`text`},description:`Tooltip content.`,table:{type:{summary:`preact.ComponentChildren`}}},children:{control:{disable:!0},table:{type:{summary:`preact.ComponentChildren`}}},tabIndex:{control:{type:`number`},description:`Tab order of the swatch button. Omit for native button order when enabled; -1 when disabled.`,table:{type:{summary:`number`}}},onClick:{table:{type:{summary:`(args) => void`,detail:`
args: { 
  event: MouseEvent
  fill: Color | GradientPaint | Array<Color | GradientPaint> | undefined
}
          `}}}}},V={args:{id:void 0,className:``,size:`medium`,fill:{r:1,g:0,b:0,a:1},alpha:!0,disabled:!1,selected:!1,selection:`default`,tooltip:`ColorSwatch tooltip`,onClick:z()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<ColorSwatch {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <ColorSwatch {...args}/>
</TooltipContext>
`}}},render:e=>r(`div`,{className:`sb-column sb-width-full`,children:r(c,{children:r(o,{...e})})})},H=p,U=h,W=_,G=y,K=x,q=C,J=O,Y=L,V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`SizeStory`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`ColorStory`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`AlphaStory`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`DisabledStory`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`SelectionStory`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`ChildrenStory`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`GradientStory`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`MultipleStory`,...Y.parameters?.docs?.source}}},X=[`Demo`,`Size`,`_Color`,`Alpha`,`Disabled`,`Selection`,`Children`,`Gradient`,`Multiple`]}))();export{W as Alpha,q as Children,V as Demo,G as Disabled,J as Gradient,Y as Multiple,K as Selection,H as Size,U as _Color,X as __namedExportsOrder,B as default};