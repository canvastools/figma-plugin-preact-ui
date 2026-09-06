import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{C as t,P as n,S as r,j as i,v as a,w as o,x as s,y as c}from"./compat.module-gcU-nFZT.js";import{n as l,t as u}from"./jsxRuntime.module-CNTwvFFH.js";import{i as d,n as f,r as p,t as m}from"./typedForwardRef-BIg2RNOP.js";import{i as h,n as g,r as _,t as v}from"./Tooltip-DsjGtgh5.js";import{n as y,t as b}from"./Text-Cr-51GRl.js";function x(e,t,n){return Math.min(n,Math.max(t,Math.round(e)))}function S(e){let t=getComputedStyle(e),n=parseFloat(t.minHeight),r=Number.isFinite(n)&&n>0?n:C,i=parseFloat(t.maxHeight);return{minPx:r,maxPx:Number.isFinite(i)?Math.max(r,i):2**53-1}}var C,w,T;function E(){return(E=e((()=>{n(),o(),d(),m(),g(),y(),u(),C=24,w=({id:e,className:n,variant:o=`default`,label:u,placeholder:d,value:f,defaultValue:m,error:h=!1,disabled:g=!1,minLength:_=0,maxLength:y,tooltip:w,autoFocus:T=!1,selectOnFocus:E=!1,maxWidth:D,minHeight:O,maxHeight:k,resize:A,onValueChange:j,onBlur:M,onFocus:N,onKeyDown:P,tabIndex:F,...I},L)=>{let R=f!==void 0,[z,B]=r(()=>m??``),[V,H]=r(!1),[U,W]=r(!!(f??z??``)),[G,K]=r(C),q=a(null),J=a(null),Y=a(null),X=a(null);t(()=>()=>{let e=X.current;e&&(window.removeEventListener(`pointermove`,e.move),window.removeEventListener(`pointerup`,e.up),window.removeEventListener(`pointercancel`,e.up),X.current=null)},[]),c(L,()=>q.current,[]);let Z=R?f??``:z,Q=A!==`y`;s(()=>{if(A!==`y`||!J.current)return;let{minPx:e,maxPx:t}=S(J.current);K(n=>x(n,e,t))},[A,O,k]),s(()=>{let e=Y.current,t=J.current;if(!e||!t)return;if(A===`y`){e.style.removeProperty(`height`);return}e.style.height=`0px`;let{minPx:n,maxPx:r}=S(t),i=x(e.scrollHeight,n,r);e.style.height=`${i}px`},[A,k,O,Z]),t(()=>{if(!T)return;let e=window.setTimeout(()=>{Y.current?.focus()},25);return()=>clearTimeout(e)},[T]),t(()=>{R&&f!==void 0&&W(f.length>0)},[R,f]);let $=p(`TextArea`,void 0,{filled:U,disabled:g,variant:o,label:!!u,focused:V,error:h,resizeY:A===`y`,autoGrow:Q}),ee=e=>{if(g||A!==`y`||!J.current)return;e.preventDefault(),e.stopPropagation();let t=J.current,n=e.currentTarget,r=e.clientY,i=t.getBoundingClientRect().height,{minPx:a,maxPx:o}=S(t);n.setPointerCapture(e.pointerId);let s=e=>{let t=i+(e.clientY-r);K(x(t,a,o))},c=e=>{window.removeEventListener(`pointermove`,s),window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),X.current=null;try{n.releasePointerCapture(e.pointerId)}catch{}};X.current={move:s,up:c},window.addEventListener(`pointermove`,s),window.addEventListener(`pointerup`,c),window.addEventListener(`pointercancel`,c)},te=e=>{e.stopPropagation();let t=e.currentTarget.value;R||B(t),W(t.length>0),j?.({event:e,value:t})},ne=e=>{e.stopPropagation(),H(!1),W(e.currentTarget.value.length>0),M?.({event:e,value:e.currentTarget.value})},re=e=>{if(e.stopPropagation(),H(!0),E){let t=e.currentTarget;setTimeout(()=>t.select(),0)}N?.({event:e,value:e.currentTarget.value})},ie=e=>{e.stopPropagation(),P?.({event:e,value:e.currentTarget.value}),(e.key===`Escape`||e.key===`Esc`)&&e.currentTarget.blur()},ae=e=>{e.stopPropagation()},oe={maxWidth:o==="default"?void 0:typeof D==`number`?`${D}px`:D,flexShrink:D?0:void 0,minHeight:O===void 0?A===`y`?`${C}px`:void 0:typeof O==`number`?`${O}px`:O,maxHeight:k===void 0?void 0:typeof k==`number`?`${k}px`:k,height:A===`y`?`${G}px`:void 0};return l(i,{children:[l(`div`,{id:e,className:[$,n].join(` `).trim(),"data-pui-interactive":`true`,ref:q,...I,children:[u&&l(b,{className:`TextArea__label`,intentModifier:`secondary`,size:o===`list`?`medium`:`small`,truncate:!0,children:u}),l(`div`,{className:`TextArea__container`,style:oe,ref:J,children:[l(`textarea`,{className:`TextArea__textarea-native`,rows:1,ref:e=>{Y.current=e},minLength:_,maxLength:y,disabled:g,...F===void 0?{}:{tabIndex:F},placeholder:d,value:Z,onInput:te,onClick:ae,onBlur:ne,onFocus:re,onKeyDown:ie}),A===`y`&&!g&&l(`div`,{className:`TextArea__resizeHandle`,"data-pui-interactive":`true`,onPointerDown:ee})]})]}),w&&l(v,{anchorRef:q,children:w})]})},T=f(w)})))()}var D;function O(){return(O=e((()=>{E(),u(),D={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<TextArea defaultValue="Hello World!" />
`}}},render:()=>l(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:l(T,{defaultValue:`Hello World!`})})}})))()}var k;function A(){return(A=e((()=>{o(),y(),E(),u(),k={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [value, setValue] = useState("Hello World!")

<TextArea
  value={value}
  onValueChange={(args) => setValue(args.value)}
/>
`}}},render:()=>{let[e,t]=r(`Hello World!`);return l(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[l(b,{children:[`value: `,e]}),l(T,{value:e,onValueChange:e=>t(e.value)})]})}}})))()}var j;function M(){return(M=e((()=>{E(),u(),j={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`Layout variants with optional label.`},source:{code:`
<TextArea variant="default" label="Label" />

<TextArea variant="list" label="Label" />
`}}},render:()=>l(`div`,{className:`sb-column sb-width-300 sb-gap-40`,children:[l(T,{defaultValue:`Line one
Line two`,label:`Label`,variant:`default`}),l(T,{defaultValue:`Line one
Line two`,label:`Label`,variant:`list`})]})}})))()}var N;function P(){return(P=e((()=>{E(),u(),N={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<TextArea placeholder="Placeholder" />
`}}},render:()=>l(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:l(T,{placeholder:`Placeholder`})})}})))()}var F;function I(){return(I=e((()=>{E(),u(),F={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<TextArea disabled />

<TextArea disabled placeholder="Placeholder" />
`}}},render:()=>l(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[l(T,{disabled:!0}),l(T,{disabled:!0,placeholder:`Placeholder`}),l(T,{disabled:!0,defaultValue:`Default Value`})]})}})))()}var L;function R(){return(R=e((()=>{E(),u(),L={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`Hover the field to show the corner handle. Drag vertically to resize.`},source:{code:`
<TextArea
  resize="y"
  minHeight={72}
  maxHeight={136}
  label="Resizable"
  defaultValue="Hover the corner, then drag."
/>
`}}},render:()=>l(`div`,{className:`sb-column sb-width-300 sb-gap-40`,children:l(T,{resize:`y`,minHeight:72,maxHeight:136,label:`Resizable`,defaultValue:`Hover the corner, then drag.

Height is clamped between minHeight and maxHeight.`})})}})))()}var z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{O(),A(),M(),P(),I(),R(),h(),E(),u(),{fn:z}=__STORYBOOK_MODULE_TEST__,B={title:`Components/TextArea`,component:T,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},variant:{control:{type:`radio`},options:[`default`,`list`],table:{defaultValue:{summary:`default`}}},label:{control:{type:`text`}},placeholder:{control:{type:`text`}},defaultValue:{control:{type:`text`},description:`Value for uncontrolled state.`},value:{control:{disable:!0},description:`Value for controlled state.`,table:{type:{summary:`string`}}},error:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},minLength:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Minimum length of the field value.`},maxLength:{control:{type:`number`},table:{defaultValue:{summary:`Infinity`}},description:`Maximum length of the field value.`},tooltip:{control:{type:`text`},description:`Tooltip content.`,table:{type:{summary:`preact.ComponentChildren`}}},autoFocus:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},selectOnFocus:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Select all text when the textarea receives focus.`},maxWidth:{control:{type:`number`},description:"Maximum width of the field (excluding label). Only applicable when variant is `list`.",table:{type:{summary:`number | string`}}},minHeight:{control:{type:`number`},description:'Minimum container height. With `resize="y"`, clamps drag.',table:{type:{summary:`number | string`}}},maxHeight:{control:{type:`number`},description:'Optional max container height. Without `resize`, the field grows with text (uncapped if omitted).<br/>With `resize="y"`, clamps drag.',table:{type:{summary:`number | string`}}},resize:{control:{type:`radio`},options:[void 0,`y`],table:{type:{summary:`'y'`}}},tabIndex:{control:{type:`number`},description:`Tab order of the focusable element. Omit to keep the default focus behavior.`,table:{type:{summary:`number`}}},onValueChange:{table:{type:{summary:`(args) => void`,detail:`
args: { 
  event: MouseEvent
  value: string
}
          `}}},onBlur:{table:{type:{summary:`(args) => void`,detail:`
args: { 
  event: FocusEvent
  value: string
}
          `}}},onFocus:{table:{type:{summary:`(args) => void`,detail:`
args: { 
  event: FocusEvent
  value: string
}
          `}}},onKeyDown:{table:{type:{summary:`(args) => void`,detail:`
args: { 
  event: KeyboardEvent
  value: string
}
          `}}}}},V={args:{id:void 0,className:``,variant:`default`,label:`Label`,placeholder:`Placeholder`,defaultValue:``,error:!1,disabled:!1,tooltip:`TextArea tooltip`,minLength:0,maxLength:9999,autoFocus:!1,selectOnFocus:!1,maxWidth:void 0,minHeight:40,maxHeight:136,resize:`y`,onValueChange:z(),onBlur:z(),onFocus:z(),onKeyDown:z()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<TextArea {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <TextArea {...args} />
</TooltipContext>
`}}},render:e=>l(`div`,{className:`sb-column sb-width-300`,children:l(_,{children:l(T,{...e})})})},H=D,U=k,W=j,G=N,K=F,q=L,J=[`Demo`,`Uncontrolled`,`Controlled`,`Variant`,`Placeholder`,`Disabled`,`Resize`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    variant: 'default',
    label: 'Label',
    placeholder: 'Placeholder',
    defaultValue: '',
    error: false,
    disabled: false,
    tooltip: 'TextArea tooltip',
    minLength: 0,
    maxLength: 9999,
    autoFocus: false,
    selectOnFocus: false,
    maxWidth: undefined,
    minHeight: 40,
    maxHeight: 136,
    resize: 'y',
    onValueChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
    onKeyDown: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<TextArea {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <TextArea {...args} />
</TooltipContext>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-300">
      <TooltipContext>
        <TextArea {...args} />
      </TooltipContext>
    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`UncontrolledStory`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`ControlledStory`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`VariantStory`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`PlaceholderStory`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`DisabledStory`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`ResizeStory`,...q.parameters?.docs?.source}}}})))()}Y();export{U as Controlled,V as Demo,K as Disabled,G as Placeholder,q as Resize,H as Uncontrolled,W as Variant,J as __namedExportsOrder,B as default};