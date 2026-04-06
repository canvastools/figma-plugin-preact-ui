import{d as g,A as k,F as We,_ as j,y as q,u as t}from"./hooks.module-BMDhD8C6.js";import{f as v}from"./index-Bk8NU0jy.js";import{S as $e}from"./preact.module-DhLccOoG.js";import{t as Be,b as Oe}from"./typedForwardRef-BBQ-rOPo.js";import{T as be}from"./Text-DSWvyrh8.js";import{T as Ye,a as Ge}from"./TooltipContext-Be-KFfgH.js";import"./compat.module-BB5nNOI3.js";import"./TooltipContainer-DWitGrs9.js";const W=24;function I(n,s,r){return Math.min(r,Math.max(s,Math.round(n)))}function U(n){const s=getComputedStyle(n),r=parseFloat(s.minHeight),c=Number.isFinite(r)&&r>0?r:W,h=parseFloat(s.maxHeight),i=Number.isFinite(h)?Math.max(c,h):Number.MAX_SAFE_INTEGER;return{minPx:c,maxPx:i}}const Ke=({id:n,className:s,variant:r="default",label:c,placeholder:h,value:i,defaultValue:xe,error:ve=!1,disabled:f=!1,minLength:we=0,maxLength:Te,tooltip:$,autoFocus:B=!1,maxWidth:y,minHeight:d,maxHeight:u,resize:l,onValueChange:H,onBlur:L,onFocus:N,onKeyDown:E,...Ve},Pe)=>{const b=i!==void 0,[O,Ce]=g(()=>xe??""),[Ae,Y]=g(!1),[Se,_]=g(!!(i??O??"")),[He,G]=g(W),F=k(null),p=k(null),R=k(null);We(Pe,()=>F.current,[]);const K=b?i??"":O,Le=l!=="y";j(()=>{if(l!=="y"||!p.current)return;const{minPx:e,maxPx:a}=U(p.current);G(m=>I(m,e,a))},[l,d,u]),j(()=>{const e=R.current,a=p.current;if(!e||!a)return;if(l==="y"){e.style.removeProperty("height");return}e.style.height="0px";const{minPx:m,maxPx:D}=U(a),M=I(e.scrollHeight,m,D);e.style.height=`${M}px`},[l,u,d,K]),q(()=>{if(!B)return;const e=window.setTimeout(()=>{var a;(a=R.current)==null||a.focus()},25);return()=>clearTimeout(e)},[B]),q(()=>{b&&i!==void 0&&_(i.length>0)},[b,i]);const Ne=Oe("TextArea",void 0,{filled:Se,disabled:f,variant:r,label:!!c,focused:Ae,error:ve,resizeY:l==="y",autoGrow:Le}),Ee=e=>{if(f||l!=="y"||!p.current)return;e.preventDefault(),e.stopPropagation();const a=p.current,m=e.currentTarget,D=e.clientY,M=a.getBoundingClientRect().height,{minPx:ke,maxPx:Ie}=U(a);m.setPointerCapture(e.pointerId);const X=z=>{const Ue=M+(z.clientY-D);G(I(Ue,ke,Ie))},x=z=>{window.removeEventListener("pointermove",X),window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x);try{m.releasePointerCapture(z.pointerId)}catch{}};window.addEventListener("pointermove",X),window.addEventListener("pointerup",x),window.addEventListener("pointercancel",x)},_e=e=>{e.stopPropagation();const a=e.currentTarget.value;b||Ce(a),_(a.length>0),H==null||H({event:e,value:a})},Fe=e=>{e.stopPropagation(),Y(!1),_(e.currentTarget.value.length>0),L==null||L({event:e,value:e.currentTarget.value})},Re=e=>{e.stopPropagation(),Y(!0),N==null||N({event:e,value:e.currentTarget.value})},De=e=>{e.stopPropagation(),E==null||E({event:e,value:e.currentTarget.value}),(e.key==="Escape"||e.key==="Esc")&&e.currentTarget.blur()},Me=e=>{e.stopPropagation()},ze={maxWidth:r==="default"?void 0:typeof y=="number"?`${y}px`:y,flexShrink:y?0:void 0,minHeight:d!==void 0?typeof d=="number"?`${d}px`:d:l==="y"?`${W}px`:void 0,maxHeight:u!==void 0?typeof u=="number"?`${u}px`:u:void 0,height:l==="y"?`${He}px`:void 0};return t($e,{children:[t("div",{id:n,className:[Ne,s].join(" ").trim(),"data-pui-interactive":"true",ref:F,...Ve,children:[c&&t(be,{className:"TextArea__label",intentModifier:"secondary",size:r==="list"?"medium":"small",truncate:!0,children:c}),t("div",{className:"TextArea__container",style:ze,ref:p,children:[t("textarea",{className:"TextArea__textarea-native",rows:1,ref:e=>{R.current=e},minLength:we,maxLength:Te,disabled:f,placeholder:h,value:K,onChange:_e,onClick:Me,onBlur:Fe,onFocus:Re,onKeyDown:De}),l==="y"&&!f&&t("div",{className:"TextArea__resizeHandle","data-pui-interactive":"true",onPointerDown:Ee})]})]}),$&&t(Ye,{anchorRef:F,children:$})]})},o=Be(Ke),Xe={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TextArea defaultValue="Hello World!" />
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-16",children:t(o,{defaultValue:"Hello World!"})})},je={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [value, setValue] = useState("Hello World!")

<TextArea
  value={value}
  onValueChange={(args) => setValue(args.value)}
/>
`}}},render:()=>{const[n,s]=g("Hello World!");return t("div",{className:"sb-column sb-width-300 sb-gap-16",children:[t(be,{children:["value: ",n]}),t(o,{value:n,onValueChange:r=>s(r.value)})]})}},qe={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Layout variants with optional label."},source:{language:"tsx",code:`
<TextArea variant="default" label="Label" />

<TextArea variant="list" label="Label" />
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-40",children:[t(o,{defaultValue:`Line one
Line two`,label:"Label",variant:"default"}),t(o,{defaultValue:`Line one
Line two`,label:"Label",variant:"list"})]})},Je={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TextArea placeholder="Placeholder" />
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-16",children:t(o,{placeholder:"Placeholder"})})},Qe={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TextArea disabled />

<TextArea disabled placeholder="Placeholder" />
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-16",children:[t(o,{disabled:!0}),t(o,{disabled:!0,placeholder:"Placeholder"}),t(o,{disabled:!0,defaultValue:"Default Value"})]})},Ze={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Hover the field to show the corner handle. Drag vertically to resize."},source:{language:"tsx",code:`
<TextArea
  resize="y"
  minHeight={72}
  maxHeight={136}
  label="Resizable"
  defaultValue="Hover the corner, then drag."
/>
`}}},render:()=>t("div",{className:"sb-column sb-width-300 sb-gap-40",children:t(o,{resize:"y",minHeight:72,maxHeight:136,label:"Resizable",defaultValue:`Hover the corner, then drag.

Height is clamped between minHeight and maxHeight.`})})},it={title:"Components/TextArea",component:o,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["default","list"],defaultValue:{summary:"default"}},label:{control:{type:"text"}},placeholder:{control:{type:"text"}},defaultValue:{control:{type:"text"},description:"Value for uncontrolled state."},value:{control:{disable:!0},description:"Value for controlled state.",table:{type:{summary:"string"}}},error:{control:{type:"boolean"},defaultValue:{summary:!1}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},minLength:{control:{type:"number"},defaultValue:{summary:0},description:"Minimum length of the field value."},maxLength:{control:{type:"number"},defaultValue:{summary:1/0},description:"Maximum length of the field value."},tooltip:{control:{type:"text"},description:"Tooltip content.",table:{type:{summary:"preact.ComponentChildren"}}},autoFocus:{control:{type:"boolean"},defaultValue:{summary:!1}},maxWidth:{control:{type:"number"},description:"Maximum width of the field (excluding label). Only applicable when variant is `list`.",table:{type:{summary:"number | string"}}},minHeight:{control:{type:"number"},description:'Minimum container height. With `resize="y"`, clamps drag.',table:{type:{summary:"number | string"}}},maxHeight:{control:{type:"number"},description:'Optional max container height. Without `resize`, the field grows with text (uncapped if omitted).<br/>With `resize="y"`, clamps drag.',table:{type:{summary:"number | string"}}},resize:{control:{type:"radio"},options:[void 0,"y"],table:{type:{summary:"'y'"}}},onValueChange:{table:{type:{summary:"(args) => void",detail:`
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
          `}}}}},w={tags:["!autodocs"],args:{id:void 0,className:"",variant:"default",label:"Label",placeholder:"Placeholder",defaultValue:"",error:!1,disabled:!1,tooltip:"TextArea tooltip",minLength:0,maxLength:9999,autoFocus:!1,maxWidth:void 0,minHeight:40,maxHeight:136,resize:"y",onValueChange:v(),onBlur:v(),onFocus:v(),onKeyDown:v()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TextArea {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <TextArea {...args} />
</TooltipContext>
`}}},render:n=>t("div",{className:"sb-column sb-width-300",children:t(Ge,{children:t(o,{...n})})})},T=Xe,V=je,P=qe,C=Je,A=Qe,S=Ze;var J,Q,Z;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,ae;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:"UncontrolledStory",...(ae=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,oe,ne;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:"ControlledStory",...(ne=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,se,ie;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:"VariantStory",...(ie=(se=P.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,de,ue;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:"PlaceholderStory",...(ue=(de=C.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,ge;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:"DisabledStory",...(ge=(me=A.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,fe,ye;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:"ResizeStory",...(ye=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};const ct=["Demo","Uncontrolled","Controlled","Variant","Placeholder","Disabled","Resize"];export{V as Controlled,w as Demo,A as Disabled,C as Placeholder,S as Resize,T as Uncontrolled,P as Variant,ct as __namedExportsOrder,it as default};
