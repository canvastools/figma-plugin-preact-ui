import{A as N,_ as Ze,y as k,d as A,q as er,T as re,u as i}from"./hooks.module-Dxk9uxGs.js";import{f as rr}from"./index-BWINGljf.js";import{R as f}from"./compat.module-CA66vPNl.js";import{t as nr,b as tr}from"./typedForwardRef-Bwgl65_g.js";import{u as Be}from"./useStringValidator-fjvzrMhg.js";import{S as se}from"./Select-BWPc3EmO.js";import{I as E}from"./Input-Byaypgcn.js";import{k as ce}from"./preact.module-DKQ80Dzn.js";import{u as ne}from"./useNumberValidator-DzDmHLjB.js";import{T as O}from"./Text-C438qO9S.js";import{S}from"./Stack-CNzGXmi4.js";import{C as ar}from"./ColorSwatch-i3Oq2z93.js";const G=(e,r,n)=>Math.min(Math.max(e,r),n),Z=e=>{const r=G(Math.round(e),0,255).toString(16);return r.length===1?"0"+r:r},or=e=>{const r=e.startsWith("#")?e.slice(1):e;return/^[0-9a-fA-F]{6}$/.test(r)?r.toUpperCase():null},T=e=>`#${Z(e.r)}${Z(e.g)}${Z(e.b)}`,ie=(e,r=1)=>{const n=or(e);if(!n)return null;const t=parseInt(n.slice(0,2),16),c=parseInt(n.slice(2,4),16),a=parseInt(n.slice(4,6),16);return{r:t,g:c,b:a,a:r}},Re=e=>{const r=T(e),t=G(Math.round(e.a*255),0,255).toString(16).padStart(2,"0").toUpperCase();return`${r}${t}`},lr=e=>{const r=e.startsWith("#")?e.slice(1):e;if(/^[0-9a-fA-F]{8}$/.test(r)){const n=parseInt(r.slice(0,2),16),t=parseInt(r.slice(2,4),16),c=parseInt(r.slice(4,6),16),a=parseInt(r.slice(6,8),16)/255;return{r:n,g:t,b:c,a}}if(/^[0-9a-fA-F]{6}$/.test(r)){const n=parseInt(r.slice(0,2),16),t=parseInt(r.slice(2,4),16),c=parseInt(r.slice(4,6),16);return{r:n,g:t,b:c,a:1}}return null},D=e=>Math.round(e*100)/100;function H(){return(H=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function ue(e,r){if(e==null)return{};var n,t,c={},a=Object.keys(e);for(t=0;t<a.length;t++)r.indexOf(n=a[t])>=0||(c[n]=e[n]);return c}function te(e){var r=N(e),n=N(function(t){r.current&&r.current(t)});return r.current=e,n.current}var q=function(e,r,n){return r===void 0&&(r=0),n===void 0&&(n=1),e>n?n:e<r?r:e},z=function(e){return"touches"in e},ae=function(e){return e&&e.ownerDocument.defaultView||self},he=function(e,r,n){var t=e.getBoundingClientRect(),c=z(r)?function(a,l){for(var u=0;u<a.length;u++)if(a[u].identifier===l)return a[u];return a[0]}(r.touches,n):r;return{left:q((c.pageX-(t.left+ae(e).pageXOffset))/t.width),top:q((c.pageY-(t.top+ae(e).pageYOffset))/t.height)}},ge=function(e){!z(e)&&e.preventDefault()},de=f.memo(function(e){var r=e.onMove,n=e.onKey,t=ue(e,["onMove","onKey"]),c=N(null),a=te(r),l=te(n),u=N(null),d=N(!1),s=re(function(){var X=function(v){ge(v),(z(v)?v.touches.length>0:v.buttons>0)&&c.current?a(he(c.current,v,u.current)):V(!1)},M=function(){return V(!1)};function V(v){var p=d.current,y=ae(c.current),C=v?y.addEventListener:y.removeEventListener;C(p?"touchmove":"mousemove",X),C(p?"touchend":"mouseup",M)}return[function(v){var p=v.nativeEvent,y=c.current;if(y&&(ge(p),!function(Y,J){return J&&!z(Y)}(p,d.current)&&y)){if(z(p)){d.current=!0;var C=p.changedTouches||[];C.length&&(u.current=C[0].identifier)}y.focus(),a(he(y,p,u.current)),V(!0)}},function(v){var p=v.which||v.keyCode;p<37||p>40||(v.preventDefault(),l({left:p===39?.05:p===37?-.05:0,top:p===40?.05:p===38?-.05:0}))},V]},[l,a]),o=s[0],g=s[1],b=s[2];return k(function(){return b},[b]),f.createElement("div",H({},t,{onTouchStart:o,onMouseDown:o,className:"react-colorful__interactive",ref:c,onKeyDown:g,tabIndex:0,role:"slider"}))}),U=function(e){return e.filter(Boolean).join(" ")},pe=function(e){var r=e.color,n=e.left,t=e.top,c=t===void 0?.5:t,a=U(["react-colorful__pointer",e.className]);return f.createElement("div",{className:a,style:{top:100*c+"%",left:100*n+"%"}},f.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},x=function(e,r,n){return r===void 0&&(r=0),n===void 0&&(n=Math.pow(10,r)),Math.round(n*e)/n},Le=function(e){return De(oe(e))},oe=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?x(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?x(parseInt(e.substring(6,8),16)/255,2):1}},We=function(e){return sr(ze(e))},je=function(e){var r=e.s,n=e.v,t=e.a,c=(200-r)*n/100;return{h:x(e.h),s:x(c>0&&c<200?r*n/100/(c<=100?c:200-c)*100:0),l:x(c/2),a:x(t,2)}},le=function(e){var r=je(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},ee=function(e){var r=je(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},ze=function(e){var r=e.h,n=e.s,t=e.v,c=e.a;r=r/360*6,n/=100,t/=100;var a=Math.floor(r),l=t*(1-n),u=t*(1-(r-a)*n),d=t*(1-(1-r+a)*n),s=a%6;return{r:x(255*[t,u,l,l,d,t][s]),g:x(255*[d,t,t,u,l,l][s]),b:x(255*[l,l,d,t,t,u][s]),a:x(c,2)}},K=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},sr=function(e){var r=e.r,n=e.g,t=e.b,c=e.a,a=c<1?K(x(255*c)):"";return"#"+K(r)+K(n)+K(t)+a},De=function(e){var r=e.r,n=e.g,t=e.b,c=e.a,a=Math.max(r,n,t),l=a-Math.min(r,n,t),u=l?a===r?(n-t)/l:a===n?2+(t-r)/l:4+(r-n)/l:0;return{h:x(60*(u<0?u+6:u)),s:x(a?l/a*100:0),v:x(a/255*100),a:c}},Ue=f.memo(function(e){var r=e.hue,n=e.onChange,t=U(["react-colorful__hue",e.className]);return f.createElement("div",{className:t},f.createElement(de,{onMove:function(c){n({h:360*c.left})},onKey:function(c){n({h:q(r+360*c.left,0,360)})},"aria-label":"Hue","aria-valuenow":x(r),"aria-valuemax":"360","aria-valuemin":"0"},f.createElement(pe,{className:"react-colorful__hue-pointer",left:r/360,color:le({h:r,s:100,v:100,a:1})})))}),Ke=f.memo(function(e){var r=e.hsva,n=e.onChange,t={backgroundColor:le({h:r.h,s:100,v:100,a:1})};return f.createElement("div",{className:"react-colorful__saturation",style:t},f.createElement(de,{onMove:function(c){n({s:100*c.left,v:100-100*c.top})},onKey:function(c){n({s:q(r.s+100*c.left,0,100),v:q(r.v-100*c.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+x(r.s)+"%, Brightness "+x(r.v)+"%"},f.createElement(pe,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:le(r)})))}),me=function(e,r){if(e===r)return!0;for(var n in e)if(e[n]!==r[n])return!1;return!0},Ge=function(e,r){return e.toLowerCase()===r.toLowerCase()||me(oe(e),oe(r))};function Xe(e,r,n){var t=te(n),c=A(function(){return e.toHsva(r)}),a=c[0],l=c[1],u=N({color:r,hsva:a});k(function(){if(!e.equal(r,u.current.color)){var s=e.toHsva(r);u.current={hsva:s,color:r},l(s)}},[r,e]),k(function(){var s;me(a,u.current.hsva)||e.equal(s=e.fromHsva(a),u.current.color)||(u.current={hsva:a,color:s},t(s))},[a,e,t]);var d=er(function(s){l(function(o){return Object.assign({},o,s)})},[]);return[a,d]}var cr=typeof window<"u"?Ze:k,ir=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},ve=new Map,Ye=function(e){cr(function(){var r=e.current?e.current.ownerDocument:document;if(r!==void 0&&!ve.has(r)){var n=r.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,ve.set(r,n);var t=ir();t&&n.setAttribute("nonce",t),r.head.appendChild(n)}},[])},ur=function(e){var r=e.className,n=e.colorModel,t=e.color,c=t===void 0?n.defaultColor:t,a=e.onChange,l=ue(e,["className","colorModel","color","onChange"]),u=N(null);Ye(u);var d=Xe(n,c,a),s=d[0],o=d[1],g=U(["react-colorful",r]);return f.createElement("div",H({},l,{ref:u,className:g}),f.createElement(Ke,{hsva:s,onChange:o}),f.createElement(Ue,{hue:s.h,onChange:o,className:"react-colorful__last-control"}))},dr={defaultColor:"000",toHsva:Le,fromHsva:function(e){return We({h:e.h,s:e.s,v:e.v,a:1})},equal:Ge},pr=function(e){return f.createElement(ur,H({},e,{colorModel:dr}))},mr=function(e){var r=e.className,n=e.hsva,t=e.onChange,c={backgroundImage:"linear-gradient(90deg, "+ee(Object.assign({},n,{a:0}))+", "+ee(Object.assign({},n,{a:1}))+")"},a=U(["react-colorful__alpha",r]),l=x(100*n.a);return f.createElement("div",{className:a},f.createElement("div",{className:"react-colorful__alpha-gradient",style:c}),f.createElement(de,{onMove:function(u){t({a:u.left})},onKey:function(u){t({a:q(n.a+u.left)})},"aria-label":"Alpha","aria-valuetext":l+"%","aria-valuenow":l,"aria-valuemin":"0","aria-valuemax":"100"},f.createElement(pe,{className:"react-colorful__alpha-pointer",left:n.a,color:ee(n)})))},Je=function(e){var r=e.className,n=e.colorModel,t=e.color,c=t===void 0?n.defaultColor:t,a=e.onChange,l=ue(e,["className","colorModel","color","onChange"]),u=N(null);Ye(u);var d=Xe(n,c,a),s=d[0],o=d[1],g=U(["react-colorful",r]);return f.createElement("div",H({},l,{ref:u,className:g}),f.createElement(Ke,{hsva:s,onChange:o}),f.createElement(Ue,{hue:s.h,onChange:o}),f.createElement(mr,{hsva:s,onChange:o,className:"react-colorful__last-control"}))},fr={defaultColor:"0001",toHsva:Le,fromHsva:We,equal:Ge},hr=function(e){return f.createElement(Je,H({},e,{colorModel:fr}))},gr={defaultColor:{r:0,g:0,b:0,a:1},toHsva:De,fromHsva:ze,equal:me},vr=function(e){return f.createElement(Je,H({},e,{colorModel:gr}))};const m={r:{min:0,max:255},g:{min:0,max:255},b:{min:0,max:255},a:{min:0,max:1}},I={a:{min:0,max:1}},br=[{value:"rgba",label:"RGB"},{value:"hex",label:"Hex"},{value:"hexAlpha",label:"Hex alpha"}],xr=({color:e,setColor:r,type:n,setType:t,options:c})=>{const[a,l]=A(e);k(()=>{l(e)},[e]);const{getErrorCode:u}=ne({required:!0,min:m.r.min,max:m.r.max}),{getErrorCode:d}=ne({required:!0,min:m.a.min,max:m.a.max});return i(ce,{children:[i("div",{style:{minWidth:"52px"},children:i(se,{options:c,value:n,onChange:s=>t(s.value),menuWidth:160})}),i("div",{className:"ColorPicker__controlsValues InputGrouped",children:[i(E,{className:"ColorPicker__inputCompact",type:"number",grouped:"right",value:a.r.toString(),onChange:s=>{const o=Number(s.value);Number.isFinite(o)&&l({...a,r:o})},onBlur:s=>{const o=Math.round(Number(s.value));u(o)==="required"&&(r({...e,r:m.r.min}),l({...a,r:m.r.min})),u(o)==="less_than_min"&&(r({...e,r:m.r.min}),l({...a,r:m.r.min})),u(o)==="greater_than_max"&&(r({...e,r:m.r.max}),l({...a,r:m.r.max})),u(o)===null&&(r({...e,r:o}),l({...a,r:o}))}}),i(E,{className:"ColorPicker__inputCompact",type:"number",grouped:"both",value:a.g.toString(),onChange:s=>{const o=Number(s.value);Number.isFinite(o)&&l({...a,g:o})},onBlur:s=>{const o=Math.round(Number(s.value));u(o)==="required"&&(r({...e,g:m.g.min}),l({...a,g:m.g.min})),u(o)==="less_than_min"&&(r({...e,g:m.g.min}),l({...a,g:m.g.min})),u(o)==="greater_than_max"&&(r({...e,g:m.g.max}),l({...a,g:m.g.max})),u(o)===null&&(r({...e,g:o}),l({...a,g:o}))}}),i(E,{className:"ColorPicker__inputCompact",type:"number",grouped:"both",value:a.b.toString(),onChange:s=>{const o=Number(s.value);Number.isFinite(o)&&l({...a,b:o})},onBlur:s=>{const o=Math.round(Number(s.value));u(o)==="required"&&(r({...e,b:m.b.min}),l({...a,b:m.b.min})),u(o)==="less_than_min"&&(r({...e,b:m.b.min}),l({...a,b:m.b.min})),u(o)==="greater_than_max"&&(r({...e,b:m.b.max}),l({...a,b:m.b.max})),u(o)===null&&(r({...e,b:o}),l({...a,b:o}))}}),i(E,{className:"ColorPicker__controlOpacity",type:"number",grouped:"left",value:Math.round(a.a*100).toString(),suffix:i(O,{intentModifiers:"secondary",children:i("div",{className:"ColorPicker__controlOpacityContainer",children:"%"})}),onChange:s=>{const o=Number(s.value);if(Number.isFinite(o)){const g=Math.round(o);l({...a,a:D(g/100)})}},onBlur:s=>{const o=D(Math.round(Number(s.value))/100);d(o)==="required"&&(r({...e,a:e.a}),l({...a,a:e.a})),d(o)==="less_than_min"&&(r({...e,a:m.a.min}),l({...a,a:m.a.min})),d(o)==="greater_than_max"&&(r({...e,a:m.a.max}),l({...a,a:m.a.max})),d(o)===null&&(r({...e,a:o}),l({...a,a:o}))}})]})]})},_r=({color:e,setColor:r,type:n,setType:t,options:c})=>{const[a,l]=A(T(e).slice(1));k(()=>{l(T(e).slice(1))},[e]);const{getErrorCode:u}=Be({required:!0,minLength:6,maxLength:6,pattern:/^[0-9a-fA-F]{6}$/,trim:!0});return i(ce,{children:[i("div",{style:{minWidth:"52px"},children:i(se,{options:c,value:n,onChange:d=>t(d.value),menuWidth:160})}),i("div",{className:"ColorPicker__controlsValues",children:i(E,{value:a.toUpperCase(),onChange:d=>{const s=d.value.replace(/^#/,"");l(s)},onBlur:d=>{const s=d.value.replace(/^#/,"").trim();if(u(s)===null){const g=ie(s,e.a);g&&r({...e,...g}),l(s)}else l(T(e).slice(1))}})})]})},yr=({color:e,setColor:r,type:n,setType:t,options:c})=>{const[a,l]=A(T(e).slice(1));k(()=>{l(T(e).slice(1))},[e]);const{getErrorCode:u}=Be({required:!0,minLength:6,maxLength:6,pattern:/^[0-9a-fA-F]{6}$/,trim:!0}),{getErrorCode:d}=ne({required:!0,min:I.a.min,max:I.a.max});return i(ce,{children:[i("div",{style:{minWidth:"52px"},children:i(se,{options:c,value:n,onChange:s=>t(s.value),menuWidth:160})}),i("div",{className:"ColorPicker__controlsValues InputGrouped",children:[i(E,{grouped:"right",value:a.toUpperCase(),onChange:s=>{const o=s.value.replace(/^#/,"");l(o)},onBlur:s=>{const o=s.value.replace(/^#/,"").trim();if(u(o)===null){const b=ie(o,e.a);b&&r({...e,...b}),l(o)}else l(T(e).slice(1))}}),i(E,{className:"ColorPicker__controlOpacity",grouped:"left",type:"number",value:Math.round(e.a*100).toString(),suffix:i(O,{intentModifiers:"secondary",children:i("div",{className:"ColorPicker__controlOpacityContainer",children:"%"})}),onChange:s=>{const o=Number(s.value);if(Number.isFinite(o)){const g=D(G(o/100,I.a.min,I.a.max));r({...e,a:g})}},onBlur:s=>{const o=D(Number(s.value)/100),g=d(o);g==="required"&&r({...e,a:e.a}),g==="less_than_min"&&r({...e,a:I.a.min}),g==="greater_than_max"&&r({...e,a:I.a.max}),g===null&&r({...e,a:o})}})]})]})},Cr=({className:e,defaultType:r="hex",types:n,value:t,controls:c=!0,width:a=207,onChange:l,...u},d)=>{const s=t!==void 0,[o,g]=A(t??{r:200,g:150,b:35,a:.5}),b=re(()=>n&&n.length?n:["hex","hexAlpha","rgba"],[n]),[X,M]=A(()=>b.includes(r)?r:b[0]);k(()=>{s&&t&&g({r:t.r,g:t.g,b:t.b,a:t.a})},[s,t]);const V=re(()=>b&&b.length?b.join("|"):"",[b]);k(()=>{const h=b.includes(r)?r:b[0];M(h)},[r,V,b]);const v=s&&t?t:o,p=X,y=N(null),C=N(null),Y=(h,_)=>h.r===_.r&&h.g===_.g&&h.b===_.b&&h.a===_.a,J=()=>{const h=y.current;if(y.current=null,C.current=null,!h)return;const _={...h,a:D(G(h.a,0,1))};s||Y(_,o)||g(_),l==null||l({rgba:_,hex:T(_),opacity:_.a})},P=h=>{y.current=h,C.current==null&&(C.current=window.requestAnimationFrame(J))};k(()=>()=>{C.current!=null&&(cancelAnimationFrame(C.current),C.current=null),y.current=null},[]);const Qe=tr("ColorPicker",void 0,{type:p,controls:c}),fe=br.filter(h=>b.includes(h.value)),Q=!b.includes("hex")&&b.includes("hexAlpha")?fe.map(h=>h.value==="hexAlpha"?{...h,label:"Hex"}:h):fe;return i("div",{className:[Qe,e].join(" ").trim(),ref:d,...u,style:{width:a==="auto"?void 0:a},children:[p==="hex"&&i(pr,{color:T(v),onChange:h=>{const _=ie(h,v.a);_&&P(_)}}),p==="hexAlpha"&&i(hr,{color:Re(v),onChange:h=>{const _=lr(h);_&&P(_)}}),p==="rgba"&&i(vr,{color:v,onChange:h=>{P(h)}}),c&&i("div",{className:"ColorPicker__controls",children:[p==="hex"&&i(_r,{color:v,setColor:P,type:p,setType:M,options:Q}),p==="hexAlpha"&&i(yr,{color:v,setColor:P,type:p,setType:M,options:Q}),p==="rgba"&&i(xr,{color:v,setColor:P,type:p,setType:M,options:Q})]})]})},w=nr(Cr),wr={title:"Components/ColorPicker",component:w,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},defaultType:{control:{type:"radio"},options:["rgba","hex","hexAlpha"],defaultValue:{summary:"hex"}},types:{control:{type:"check"},options:["rgba","hex","hexAlpha"],description:"Allowed color picker modes in the picker.",table:{type:{summary:"string[]"}}},value:{table:{type:{summary:"Color"}},control:{disable:!0},description:`<pre>type Color = {
  r: number
  g: number
  b: number
  a: number
}</pre>`},controls:{control:{type:"boolean"},defaultValue:{summary:"true"},description:"Show input controls for the color picker.",table:{type:{summary:"boolean"}}},width:{control:{type:"number"},defaultValue:{summary:"207"},description:"Width of the color picker.",table:{type:{summary:"number | 'auto'"}}},onChange:{action:"onChange",description:"Callback when the color is changed.",table:{type:{summary:"(args: { rgba: Color; hex: string; opacity: number }) => void"}}}}},F={tags:["!autodocs"],args:{className:"",defaultType:"hex",types:["rgba","hex","hexAlpha"],controls:!0,onChange:rr()},parameters:{viewport:{defaultViewport:"large"}},render:e=>i("div",{className:"sb-column sb-width-full",children:i(w,{...e})})},$={parameters:{viewport:{defaultViewport:"large"}},render:()=>i("div",{className:"sb-column sb-width-full",children:i(w,{defaultType:"hex",controls:!0})})},B={parameters:{viewport:{defaultViewport:"large"}},render:()=>{const[e,r]=A({rgba:{r:255,g:0,b:0,a:1},hex:"#FF0000",opacity:1});return i("div",{className:"sb-column sb-width-full",children:i(S,{spacing:400,children:[i(O,{children:["Value: ",e.hex,", ",e.opacity]}),i(ar,{hex:Re(e.rgba)}),i(w,{defaultType:"hex",value:e.rgba,controls:!0,onChange:n=>r(n)})]})})}},R={parameters:{viewport:{defaultViewport:"large"}},render:()=>i("div",{className:"sb-column sb-width-full",children:i(S,{spacing:400,children:[i(S,{spacing:400,children:[i(O,{children:"Hex"}),i(w,{defaultType:"hex"})]}),i(S,{spacing:400,children:[i(O,{children:"HexAlpha"}),i(w,{defaultType:"hexAlpha"})]}),i(S,{spacing:400,children:[i(O,{children:"RGBA"}),i(w,{defaultType:"rgba"})]})]})})},L={parameters:{viewport:{defaultViewport:"large"}},render:()=>i("div",{className:"sb-column sb-width-full",children:i(S,{spacing:400,children:[i(w,{defaultType:"hex",controls:!0}),i(w,{defaultType:"hex",controls:!1})]})})},W={parameters:{viewport:{defaultViewport:"large"},docs:{description:{story:"Allow the user to select the type of color picker to use (e.g. only Hex and HexAlpha)."}}},render:()=>i("div",{className:"sb-column sb-width-full",children:i(S,{spacing:400,children:i(w,{defaultType:"rgba",types:["rgba","hexAlpha"]})})})},j={parameters:{viewport:{defaultViewport:"large"}},render:()=>i("div",{className:"sb-column sb-width-full",children:i(S,{spacing:400,children:i(w,{defaultType:"hex",width:400})})})};var be,xe,_e;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    defaultType: "hex",
    types: ["rgba", "hex", "hexAlpha"],
    controls: true,
    onChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <ColorPicker {...args} />
    </div>
}`,...(_e=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:_e.source}}};var ye,Ce,we;$.parameters={...$.parameters,docs:{...(ye=$.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <ColorPicker defaultType="hex" controls={true} />
    </div>
}`,...(we=(Ce=$.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var Ne,ke,Te;B.parameters={...B.parameters,docs:{...(Ne=B.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [color, setColor] = useState({
      rgba: {
        r: 255,
        g: 0,
        b: 0,
        a: 1
      },
      hex: "#FF0000",
      opacity: 1
    });
    return <div className="sb-column sb-width-full">
        <Stack spacing={400}>
          <Text>
            Value: {color.hex}, {color.opacity}
          </Text>
          <ColorSwatch hex={colorToHexAlpha(color.rgba)} />
          <ColorPicker defaultType="hex" value={color.rgba} controls onChange={e => setColor(e)} />
        </Stack>
      </div>;
  }
}`,...(Te=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var Se,Ee,Ae;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Stack spacing={400}>
          <Text>Hex</Text>
          <ColorPicker defaultType="hex" />
        </Stack>

        <Stack spacing={400}>
          <Text>HexAlpha</Text>
          <ColorPicker defaultType="hexAlpha" />
        </Stack>

        <Stack spacing={400}>
          <Text>RGBA</Text>
          <ColorPicker defaultType="rgba" />
        </Stack>
      </Stack>
    </div>
}`,...(Ae=(Ee=R.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var He,Me,Ve;L.parameters={...L.parameters,docs:{...(He=L.parameters)==null?void 0:He.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <ColorPicker defaultType="hex" controls={true} />
        <ColorPicker defaultType="hex" controls={false} />
      </Stack>
    </div>
}`,...(Ve=(Me=L.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var Pe,Ie,Oe;W.parameters={...W.parameters,docs:{...(Pe=W.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    },
    docs: {
      description: {
        story: "Allow the user to select the type of color picker to use (e.g. only Hex and HexAlpha)."
      }
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <ColorPicker defaultType="rgba" types={["rgba", "hexAlpha"]} />
      </Stack>
    </div>
}`,...(Oe=(Ie=W.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var qe,Fe,$e;j.parameters={...j.parameters,docs:{...(qe=j.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <ColorPicker defaultType="hex" width={400} />
      </Stack>
    </div>
}`,...($e=(Fe=j.parameters)==null?void 0:Fe.docs)==null?void 0:$e.source}}};const Nr=["Demo","Uncontrolled","Controlled","Type","Controls","Types","Width"],Fr=Object.freeze(Object.defineProperty({__proto__:null,Controlled:B,Controls:L,Demo:F,Type:R,Types:W,Uncontrolled:$,Width:j,__namedExportsOrder:Nr,default:wr},Symbol.toStringTag,{value:"Module"}));export{w as C,F as D,Fr as a,Re as c};
