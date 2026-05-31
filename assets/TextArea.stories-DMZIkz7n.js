import{d as g,A as k,F as $e,_ as q,y as J,u as t}from"./hooks.module-6Sbq__eq.js";import{f as v}from"./index-B4E_jmCM.js";import{S as Be}from"./preact.module-gH5CyEHP.js";import{t as Ye,b as Ge}from"./typedForwardRef-CtFJgl6m.js";import{T as xe}from"./Text-BbQ_b1VF.js";import{T as Ke,a as Xe}from"./TooltipContext-DB8mQxid.js";import"./compat.module-CHmB9zKI.js";import"./TooltipContainer-CJCq4A9v.js";const U=24;function I(n,s,r){return Math.min(r,Math.max(s,Math.round(n)))}function O(n){const s=getComputedStyle(n),r=parseFloat(s.minHeight),c=Number.isFinite(r)&&r>0?r:U,h=parseFloat(s.maxHeight),i=Number.isFinite(h)?Math.max(c,h):Number.MAX_SAFE_INTEGER;return{minPx:c,maxPx:i}}const je=({id:n,className:s,variant:r="default",label:c,placeholder:h,value:i,defaultValue:ve,error:we=!1,disabled:f=!1,minLength:Te=0,maxLength:Ve,tooltip:W,autoFocus:$=!1,selectOnFocus:Pe=!1,maxWidth:y,minHeight:d,maxHeight:u,resize:l,onValueChange:H,onBlur:L,onFocus:N,onKeyDown:E,tabIndex:B,...Ce},Ae)=>{const b=i!==void 0,[Y,Se]=g(()=>ve??""),[He,G]=g(!1),[Le,F]=g(!!(i??Y??"")),[Ne,K]=g(U),_=k(null),m=k(null),R=k(null);$e(Ae,()=>_.current,[]);const X=b?i??"":Y,Ee=l!=="y";q(()=>{if(l!=="y"||!m.current)return;const{minPx:e,maxPx:a}=O(m.current);K(p=>I(p,e,a))},[l,d,u]),q(()=>{const e=R.current,a=m.current;if(!e||!a)return;if(l==="y"){e.style.removeProperty("height");return}e.style.height="0px";const{minPx:p,maxPx:D}=O(a),M=I(e.scrollHeight,p,D);e.style.height=`${M}px`},[l,u,d,X]),J(()=>{if(!$)return;const e=window.setTimeout(()=>{var a;(a=R.current)==null||a.focus()},25);return()=>clearTimeout(e)},[$]),J(()=>{b&&i!==void 0&&F(i.length>0)},[b,i]);const Fe=Ge("TextArea",void 0,{filled:Le,disabled:f,variant:r,label:!!c,focused:He,error:we,resizeY:l==="y",autoGrow:Ee}),_e=e=>{if(f||l!=="y"||!m.current)return;e.preventDefault(),e.stopPropagation();const a=m.current,p=e.currentTarget,D=e.clientY,M=a.getBoundingClientRect().height,{minPx:Oe,maxPx:Ue}=O(a);p.setPointerCapture(e.pointerId);const j=z=>{const We=M+(z.clientY-D);K(I(We,Oe,Ue))},x=z=>{window.removeEventListener("pointermove",j),window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x);try{p.releasePointerCapture(z.pointerId)}catch{}};window.addEventListener("pointermove",j),window.addEventListener("pointerup",x),window.addEventListener("pointercancel",x)},Re=e=>{e.stopPropagation();const a=e.currentTarget.value;b||Se(a),F(a.length>0),H==null||H({event:e,value:a})},De=e=>{e.stopPropagation(),G(!1),F(e.currentTarget.value.length>0),L==null||L({event:e,value:e.currentTarget.value})},Me=e=>{if(e.stopPropagation(),G(!0),Pe){const a=e.currentTarget;setTimeout(()=>a.select(),0)}N==null||N({event:e,value:e.currentTarget.value})},ze=e=>{e.stopPropagation(),E==null||E({event:e,value:e.currentTarget.value}),(e.key==="Escape"||e.key==="Esc")&&e.currentTarget.blur()},ke=e=>{e.stopPropagation()},Ie={maxWidth:r==="default"?void 0:typeof y=="number"?`${y}px`:y,flexShrink:y?0:void 0,minHeight:d!==void 0?typeof d=="number"?`${d}px`:d:l==="y"?`${U}px`:void 0,maxHeight:u!==void 0?typeof u=="number"?`${u}px`:u:void 0,height:l==="y"?`${Ne}px`:void 0};return t(Be,{children:[t("div",{id:n,className:[Fe,s].join(" ").trim(),"data-pui-interactive":"true",ref:_,...Ce,children:[c&&t(xe,{className:"TextArea__label",intentModifier:"secondary",size:r==="list"?"medium":"small",truncate:!0,children:c}),t("div",{className:"TextArea__container",style:Ie,ref:m,children:[t("textarea",{className:"TextArea__textarea-native",rows:1,ref:e=>{R.current=e},minLength:Te,maxLength:Ve,disabled:f,...B!==void 0?{tabIndex:B}:{},placeholder:h,value:X,onChange:Re,onClick:ke,onBlur:De,onFocus:Me,onKeyDown:ze}),l==="y"&&!f&&t("div",{className:"TextArea__resizeHandle","data-pui-interactive":"true",onPointerDown:_e})]})]}),W&&t(Ke,{anchorRef:_,children:W})]})},o=Ye(je),qe={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TextArea defaultValue="Hello World!" />
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-16",children:t(o,{defaultValue:"Hello World!"})})},Je={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [value, setValue] = useState("Hello World!")

<TextArea
  value={value}
  onValueChange={(args) => setValue(args.value)}
/>
`}}},render:()=>{const[n,s]=g("Hello World!");return t("div",{className:"sb-column sb-width-300 sb-gap-16",children:[t(xe,{children:["value: ",n]}),t(o,{value:n,onValueChange:r=>s(r.value)})]})}},Qe={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Layout variants with optional label."},source:{language:"tsx",code:`
<TextArea variant="default" label="Label" />

<TextArea variant="list" label="Label" />
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-40",children:[t(o,{defaultValue:`Line one
Line two`,label:"Label",variant:"default"}),t(o,{defaultValue:`Line one
Line two`,label:"Label",variant:"list"})]})},Ze={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TextArea placeholder="Placeholder" />
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-16",children:t(o,{placeholder:"Placeholder"})})},et={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TextArea disabled />

<TextArea disabled placeholder="Placeholder" />
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-16",children:[t(o,{disabled:!0}),t(o,{disabled:!0,placeholder:"Placeholder"}),t(o,{disabled:!0,defaultValue:"Default Value"})]})},tt={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Hover the field to show the corner handle. Drag vertically to resize."},source:{language:"tsx",code:`
<TextArea
  resize="y"
  minHeight={72}
  maxHeight={136}
  label="Resizable"
  defaultValue="Hover the corner, then drag."
/>
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-40",children:t(o,{resize:"y",minHeight:72,maxHeight:136,label:"Resizable",defaultValue:`Hover the corner, then drag.

Height is clamped between minHeight and maxHeight.`})})},dt={title:"Components/TextArea",component:o,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["default","list"],defaultValue:{summary:"default"}},label:{control:{type:"text"}},placeholder:{control:{type:"text"}},defaultValue:{control:{type:"text"},description:"Value for uncontrolled state."},value:{control:{disable:!0},description:"Value for controlled state.",table:{type:{summary:"string"}}},error:{control:{type:"boolean"},defaultValue:{summary:!1}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},minLength:{control:{type:"number"},defaultValue:{summary:0},description:"Minimum length of the field value."},maxLength:{control:{type:"number"},defaultValue:{summary:1/0},description:"Maximum length of the field value."},tooltip:{control:{type:"text"},description:"Tooltip content.",table:{type:{summary:"preact.ComponentChildren"}}},autoFocus:{control:{type:"boolean"},defaultValue:{summary:!1}},selectOnFocus:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Select all text when the textarea receives focus."},maxWidth:{control:{type:"number"},description:"Maximum width of the field (excluding label). Only applicable when variant is `list`.",table:{type:{summary:"number | string"}}},minHeight:{control:{type:"number"},description:'Minimum container height. With `resize="y"`, clamps drag.',table:{type:{summary:"number | string"}}},maxHeight:{control:{type:"number"},description:'Optional max container height. Without `resize`, the field grows with text (uncapped if omitted).<br/>With `resize="y"`, clamps drag.',table:{type:{summary:"number | string"}}},resize:{control:{type:"radio"},options:[void 0,"y"],table:{type:{summary:"'y'"}}},tabIndex:{control:{type:"number"},description:"Tab order of the focusable element. Omit to keep the default focus behavior.",table:{type:{summary:"number"}}},onValueChange:{table:{type:{summary:"(args) => void",detail:`
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
          `}}}}},w={tags:["!autodocs"],args:{id:void 0,className:"",variant:"default",label:"Label",placeholder:"Placeholder",defaultValue:"",error:!1,disabled:!1,tooltip:"TextArea tooltip",minLength:0,maxLength:9999,autoFocus:!1,selectOnFocus:!1,maxWidth:void 0,minHeight:40,maxHeight:136,resize:"y",onValueChange:v(),onBlur:v(),onFocus:v(),onKeyDown:v()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TextArea {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <TextArea {...args} />
</TooltipContext>
`}}},render:n=>t("div",{className:"sb-column sb-width-300",children:t(Xe,{children:t(o,{...n})})})},T=qe,V=Je,P=Qe,C=Ze,A=et,S=tt;var Q,Z,ee;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,re;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:"UncontrolledStory",...(re=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,ne,le;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:"ControlledStory",...(le=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var se,ie,ce;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:"VariantStory",...(ce=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,me;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:"PlaceholderStory",...(me=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,he;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:"DisabledStory",...(he=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var fe,ye,be;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:"ResizeStory",...(be=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};const ut=["Demo","Uncontrolled","Controlled","Variant","Placeholder","Disabled","Resize"];export{V as Controlled,w as Demo,A as Disabled,C as Placeholder,S as Resize,T as Uncontrolled,P as Variant,ut as __namedExportsOrder,dt as default};
