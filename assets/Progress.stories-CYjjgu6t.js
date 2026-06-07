import{d as V,y as T,u as e}from"./hooks.module-6Sbq__eq.js";import{t as k,b as _}from"./typedForwardRef-CtFJgl6m.js";import{T as F}from"./Text-BbQ_b1VF.js";import{S as D}from"./Stack-FIJoWfyG.js";import{B as m}from"./Button-BSvkVMXR.js";import"./preact.module-gH5CyEHP.js";import"./compat.module-CHmB9zKI.js";import"./TooltipContext-De9eEHJA.js";import"./TooltipContainer-CJCq4A9v.js";const B=({id:r,className:s,variant:d="indeterminate",delay:t=0,value:c=0,...o},P)=>{const[x,N]=V(!1);T(()=>{const C=window.setTimeout(()=>{N(!0)},t);return()=>clearTimeout(C)},[t]);const S=_("Progress",void 0,{variant:d,visible:x});return e("div",{id:r,className:[S,s].join(" ").trim(),"data-pui-interactive":"true",ref:P,...o,children:d==="determinate"&&e("div",{className:"Progress__bar",style:{width:`${c}%`}})})},a=k(B),I={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [value, setValue] = useState(0)

<Progress
  variant="determinate"
  value={value}
/>
`}}},render:()=>{const[r,s]=V(0);return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(F,{children:["Value: ",r]}),e(a,{variant:"determinate",value:r}),e(D,{direction:"row",spacing:200,children:[e(m,{intent:"brand",onClick:()=>{const t=()=>{s(c=>{const o=Math.min(c+5,100);return o<100&&setTimeout(t,100),o})};t()},children:"Fill it!"}),e(m,{onClick:()=>s(0),children:"Reset"})]})]})}},R={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Progress variant="indeterminate" />

<Progress 
  variant="determinate"
  value={30}
/>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(a,{variant:"indeterminate"}),e(a,{variant:"determinate",value:30})]})},H={title:"Components/Progress",component:a,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["indeterminate","determinate"],defaultValue:{summary:"indeterminate"}},delay:{control:{type:"number"},defaultValue:{summary:0},description:"Delay in milliseconds before the progress bar becomes visible. This helps prevent flicker when content loads quickly."},value:{control:{type:"number"},defaultValue:{summary:0},description:"Value of the progress bar for `determinate` variant."}}},n={tags:["!autodocs"],args:{id:void 0,className:"",variant:"indeterminate",delay:0,value:30},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Progress {...args} />
`}}},render:r=>e("div",{className:"sb-column sb-width-full",children:e(a,{...r})})},i=I,l=R;var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    variant: 'indeterminate',
    delay: 0,
    value: 30
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<Progress {...args} />
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <Progress {...args} />
    </div>
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,b,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:"ControlledStory",...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,h,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:"VariantStory",...(w=(h=l.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const J=["Demo","Controlled","Variant"];export{i as Controlled,n as Demo,l as Variant,J as __namedExportsOrder,H as default};
