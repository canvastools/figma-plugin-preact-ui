import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,S as n,w as r}from"./compat.module-BbhDrffC.js";import{n as i,t as a}from"./jsxRuntime.module-B_u_rUE0.js";import{_ as o,s,t as c}from"./utils-k8SxZ3Xg.js";import{t as l}from"./Text-Bf8YN4P6.js";import{Un as u,m as d,t as f}from"./src-nP44HpfJ.js";var p=e((()=>{})),m,h,g=e((()=>{c(),r(),p(),a(),m=({id:e,className:r,variant:a=`indeterminate`,delay:s=0,value:c=0,...l},u)=>{let[d,f]=n(!1);return t(()=>{let e=window.setTimeout(()=>{f(!0)},s);return()=>clearTimeout(e)},[s]),i(`div`,{id:e,className:[o(`Progress`,void 0,{variant:a,visible:d}),r].join(` `).trim(),"data-pui-interactive":`true`,ref:u,...l,children:a===`determinate`&&i(`div`,{className:`Progress__bar`,style:{width:`${c}%`}})})},h=s(m)})),_,v=e((()=>{r(),f(),g(),a(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [value, setValue] = useState(0)

<Progress
  variant="determinate"
  value={value}
/>
`}}},render:()=>{let[e,t]=n(0);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(l,{children:[`Value: `,e]}),i(h,{variant:`determinate`,value:e}),i(d,{direction:`row`,spacing:200,children:[i(u,{intent:`brand`,onClick:()=>{let e=()=>{t(t=>{let n=Math.min(t+5,100);return n<100&&setTimeout(e,100),n})};e()},children:`Fill it!`}),i(u,{onClick:()=>t(0),children:`Reset`})]})]})}}})),y,b=e((()=>{g(),a(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Progress variant="indeterminate" />

<Progress 
  variant="determinate"
  value={30}
/>
`}}},render:()=>i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(h,{variant:`indeterminate`}),i(h,{variant:`determinate`,value:30})]})}})),x,S,C,w,T;e((()=>{v(),b(),g(),a(),x={title:`Components/Progress`,component:h,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},variant:{control:{type:`radio`},options:[`indeterminate`,`determinate`],table:{defaultValue:{summary:`indeterminate`}}},delay:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Delay in milliseconds before the progress bar becomes visible. This helps prevent flicker when content loads quickly.`},value:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:"Value of the progress bar for `determinate` variant."}}},S={args:{id:void 0,className:``,variant:`indeterminate`,delay:0,value:30},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Progress {...args} />
`}}},render:e=>i(`div`,{className:`sb-column sb-width-full`,children:i(h,{...e})})},C=_,w=y,S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
        code: \`
<Progress {...args} />
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <Progress {...args} />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`ControlledStory`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`VariantStory`,...w.parameters?.docs?.source}}},T=[`Demo`,`Controlled`,`Variant`]}))();export{C as Controlled,S as Demo,w as Variant,T as __namedExportsOrder,x as default};