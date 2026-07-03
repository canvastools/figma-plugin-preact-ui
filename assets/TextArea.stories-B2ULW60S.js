import{d as h,A as w,h as U,F as Be,_ as Q,u as t}from"./hooks.module-DDuEt2mE.js";import{f as T}from"./index-B4E_jmCM.js";import{S as Ye}from"./preact.module-D68vdB8i.js";import{T as Ge,a as Ke}from"./Tooltip-2n7DDmmb.js";import{T as ve}from"./Text-BooB5DEX.js";import{t as Xe,b as je}from"./typedForwardRef-eUJP59ez.js";import"./compat.module-AmaJGl25.js";import"./TooltipContainer-BRY08nvC.js";const B=24;function W(n,s,a){return Math.min(a,Math.max(s,Math.round(n)))}function $(n){const s=getComputedStyle(n),a=parseFloat(s.minHeight),c=Number.isFinite(a)&&a>0?a:B,f=parseFloat(s.maxHeight),i=Number.isFinite(f)?Math.max(c,f):Number.MAX_SAFE_INTEGER;return{minPx:c,maxPx:i}}const qe=({id:n,className:s,variant:a="default",label:c,placeholder:f,value:i,defaultValue:we,error:Te=!1,disabled:y=!1,minLength:Ve=0,maxLength:Pe,tooltip:Y,autoFocus:G=!1,selectOnFocus:Ce=!1,maxWidth:b,minHeight:d,maxHeight:u,resize:l,onValueChange:N,onBlur:E,onFocus:F,onKeyDown:R,tabIndex:K,...Ae},Le)=>{const x=i!==void 0,[X,Se]=h(()=>we??""),[He,j]=h(!1),[Ne,_]=h(!!(i??X??"")),[Ee,q]=h(B),D=w(null),p=w(null),M=w(null),v=w(null);U(()=>()=>{const e=v.current;e&&(window.removeEventListener("pointermove",e.move),window.removeEventListener("pointerup",e.up),window.removeEventListener("pointercancel",e.up),v.current=null)},[]),Be(Le,()=>D.current,[]);const J=x?i??"":X,Fe=l!=="y";Q(()=>{if(l!=="y"||!p.current)return;const{minPx:e,maxPx:r}=$(p.current);q(m=>W(m,e,r))},[l,d,u]),Q(()=>{const e=M.current,r=p.current;if(!e||!r)return;if(l==="y"){e.style.removeProperty("height");return}e.style.height="0px";const{minPx:m,maxPx:z}=$(r),I=W(e.scrollHeight,m,z);e.style.height=`${I}px`},[l,u,d,J]),U(()=>{if(!G)return;const e=window.setTimeout(()=>{var r;(r=M.current)==null||r.focus()},25);return()=>clearTimeout(e)},[G]),U(()=>{x&&i!==void 0&&_(i.length>0)},[x,i]);const Re=je("TextArea",void 0,{filled:Ne,disabled:y,variant:a,label:!!c,focused:He,error:Te,resizeY:l==="y",autoGrow:Fe}),_e=e=>{if(y||l!=="y"||!p.current)return;e.preventDefault(),e.stopPropagation();const r=p.current,m=e.currentTarget,z=e.clientY,I=r.getBoundingClientRect().height,{minPx:Ue,maxPx:We}=$(r);m.setPointerCapture(e.pointerId);const k=O=>{const $e=I+(O.clientY-z);q(W($e,Ue,We))},g=O=>{window.removeEventListener("pointermove",k),window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),v.current=null;try{m.releasePointerCapture(O.pointerId)}catch{}};v.current={move:k,up:g},window.addEventListener("pointermove",k),window.addEventListener("pointerup",g),window.addEventListener("pointercancel",g)},De=e=>{e.stopPropagation();const r=e.currentTarget.value;x||Se(r),_(r.length>0),N==null||N({event:e,value:r})},Me=e=>{e.stopPropagation(),j(!1),_(e.currentTarget.value.length>0),E==null||E({event:e,value:e.currentTarget.value})},ze=e=>{if(e.stopPropagation(),j(!0),Ce){const r=e.currentTarget;setTimeout(()=>r.select(),0)}F==null||F({event:e,value:e.currentTarget.value})},Ie=e=>{e.stopPropagation(),R==null||R({event:e,value:e.currentTarget.value}),(e.key==="Escape"||e.key==="Esc")&&e.currentTarget.blur()},ke=e=>{e.stopPropagation()},Oe={maxWidth:a==="default"?void 0:typeof b=="number"?`${b}px`:b,flexShrink:b?0:void 0,minHeight:d!==void 0?typeof d=="number"?`${d}px`:d:l==="y"?`${B}px`:void 0,maxHeight:u!==void 0?typeof u=="number"?`${u}px`:u:void 0,height:l==="y"?`${Ee}px`:void 0};return t(Ye,{children:[t("div",{id:n,className:[Re,s].join(" ").trim(),"data-pui-interactive":"true",ref:D,...Ae,children:[c&&t(ve,{className:"TextArea__label",intentModifier:"secondary",size:a==="list"?"medium":"small",truncate:!0,children:c}),t("div",{className:"TextArea__container",style:Oe,ref:p,children:[t("textarea",{className:"TextArea__textarea-native",rows:1,ref:e=>{M.current=e},minLength:Ve,maxLength:Pe,disabled:y,...K!==void 0?{tabIndex:K}:{},placeholder:f,value:J,onInput:De,onClick:ke,onBlur:Me,onFocus:ze,onKeyDown:Ie}),l==="y"&&!y&&t("div",{className:"TextArea__resizeHandle","data-pui-interactive":"true",onPointerDown:_e})]})]}),Y&&t(Ge,{anchorRef:D,children:Y})]})},o=Xe(qe),Je={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TextArea defaultValue="Hello World!" />
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-16",children:t(o,{defaultValue:"Hello World!"})})},Qe={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [value, setValue] = useState("Hello World!")

<TextArea
  value={value}
  onValueChange={(args) => setValue(args.value)}
/>
`}}},render:()=>{const[n,s]=h("Hello World!");return t("div",{className:"sb-column sb-width-300 sb-gap-16",children:[t(ve,{children:["value: ",n]}),t(o,{value:n,onValueChange:a=>s(a.value)})]})}},Ze={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Layout variants with optional label."},source:{language:"tsx",code:`
<TextArea variant="default" label="Label" />

<TextArea variant="list" label="Label" />
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-40",children:[t(o,{defaultValue:`Line one
Line two`,label:"Label",variant:"default"}),t(o,{defaultValue:`Line one
Line two`,label:"Label",variant:"list"})]})},et={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TextArea placeholder="Placeholder" />
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-16",children:t(o,{placeholder:"Placeholder"})})},tt={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TextArea disabled />

<TextArea disabled placeholder="Placeholder" />
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-16",children:[t(o,{disabled:!0}),t(o,{disabled:!0,placeholder:"Placeholder"}),t(o,{disabled:!0,defaultValue:"Default Value"})]})},rt={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Hover the field to show the corner handle. Drag vertically to resize."},source:{language:"tsx",code:`
<TextArea
  resize="y"
  minHeight={72}
  maxHeight={136}
  label="Resizable"
  defaultValue="Hover the corner, then drag."
/>
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-40",children:t(o,{resize:"y",minHeight:72,maxHeight:136,label:"Resizable",defaultValue:`Hover the corner, then drag.

Height is clamped between minHeight and maxHeight.`})})},ut={title:"Components/TextArea",component:o,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["default","list"],defaultValue:{summary:"default"}},label:{control:{type:"text"}},placeholder:{control:{type:"text"}},defaultValue:{control:{type:"text"},description:"Value for uncontrolled state."},value:{control:{disable:!0},description:"Value for controlled state.",table:{type:{summary:"string"}}},error:{control:{type:"boolean"},defaultValue:{summary:!1}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},minLength:{control:{type:"number"},defaultValue:{summary:0},description:"Minimum length of the field value."},maxLength:{control:{type:"number"},defaultValue:{summary:1/0},description:"Maximum length of the field value."},tooltip:{control:{type:"text"},description:"Tooltip content.",table:{type:{summary:"preact.ComponentChildren"}}},autoFocus:{control:{type:"boolean"},defaultValue:{summary:!1}},selectOnFocus:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Select all text when the textarea receives focus."},maxWidth:{control:{type:"number"},description:"Maximum width of the field (excluding label). Only applicable when variant is `list`.",table:{type:{summary:"number | string"}}},minHeight:{control:{type:"number"},description:'Minimum container height. With `resize="y"`, clamps drag.',table:{type:{summary:"number | string"}}},maxHeight:{control:{type:"number"},description:'Optional max container height. Without `resize`, the field grows with text (uncapped if omitted).<br/>With `resize="y"`, clamps drag.',table:{type:{summary:"number | string"}}},resize:{control:{type:"radio"},options:[void 0,"y"],table:{type:{summary:"'y'"}}},tabIndex:{control:{type:"number"},description:"Tab order of the focusable element. Omit to keep the default focus behavior.",table:{type:{summary:"number"}}},onValueChange:{table:{type:{summary:"(args) => void",detail:`
args: { 
  event: MouseEvent
  value: string
}
          `}}},onBlur:{table:{type:{summary:"(args) => void",detail:`
args: { 
  event: FocusEvent
  value: string
}
          `}}},onFocus:{table:{type:{summary:"(args) => void",detail:`
args: { 
  event: FocusEvent
  value: string
}
          `}}},onKeyDown:{table:{type:{summary:"(args) => void",detail:`
args: { 
  event: KeyboardEvent
  value: string
}
          `}}}}},V={tags:["!autodocs"],args:{id:void 0,className:"",variant:"default",label:"Label",placeholder:"Placeholder",defaultValue:"",error:!1,disabled:!1,tooltip:"TextArea tooltip",minLength:0,maxLength:9999,autoFocus:!1,selectOnFocus:!1,maxWidth:void 0,minHeight:40,maxHeight:136,resize:"y",onValueChange:T(),onBlur:T(),onFocus:T(),onKeyDown:T()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TextArea {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <TextArea {...args} />
</TooltipContext>
`}}},render:n=>t("div",{className:"sb-column sb-width-300",children:t(Ke,{children:t(o,{...n})})})},P=Je,C=Qe,A=Ze,L=et,S=tt,H=rt;var Z,ee,te;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!autodocs'],
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
        language: 'tsx',
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
}`,...(te=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,oe;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:"UncontrolledStory",...(oe=(ae=P.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,le,se;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:"ControlledStory",...(se=(le=C.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ie,ce,de;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:"VariantStory",...(de=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,me;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:"PlaceholderStory",...(me=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,he,fe;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:"DisabledStory",...(fe=(he=S.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ye,be,xe;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:"ResizeStory",...(xe=(be=H.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};const pt=["Demo","Uncontrolled","Controlled","Variant","Placeholder","Disabled","Resize"];export{C as Controlled,V as Demo,S as Disabled,L as Placeholder,H as Resize,P as Uncontrolled,A as Variant,pt as __namedExportsOrder,ut as default};
