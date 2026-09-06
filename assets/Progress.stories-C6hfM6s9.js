import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{C as t,S as n,w as r}from"./compat.module-gcU-nFZT.js";import{n as i,t as a}from"./jsxRuntime.module-CNTwvFFH.js";import{i as o,n as s,r as c,t as l}from"./typedForwardRef-BIg2RNOP.js";import{n as u,t as d}from"./Text-Cr-51GRl.js";import{n as f,t as p}from"./Button-DTA_GS6N.js";import{n as m,t as h}from"./Stack-CRI7JcwR.js";var g,_;function v(){return(v=e((()=>{o(),l(),r(),a(),g=({id:e,className:r,variant:a=`indeterminate`,delay:o=0,value:s=0,...l},u)=>{let[d,f]=n(!1);t(()=>{let e=window.setTimeout(()=>{f(!0)},o);return()=>clearTimeout(e)},[o]);let p=c(`Progress`,void 0,{variant:a,visible:d});return i(`div`,{id:e,className:[p,r].join(` `).trim(),"data-pui-interactive":`true`,ref:u,...l,children:a===`determinate`&&i(`div`,{className:`Progress__bar`,style:{width:`${s}%`}})})},_=s(g)})))()}var y;function b(){return(b=e((()=>{r(),f(),u(),m(),v(),a(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [value, setValue] = useState(0)

<Progress
  variant="determinate"
  value={value}
/>
`}}},render:()=>{let[e,t]=n(0);return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(d,{children:[`Value: `,e]}),i(_,{variant:`determinate`,value:e}),i(h,{direction:`row`,spacing:200,children:[i(p,{intent:`brand`,onClick:()=>{let e=()=>{t(t=>{let n=Math.min(t+5,100);return n<100&&setTimeout(e,100),n})};e()},children:`Fill it!`}),i(p,{onClick:()=>t(0),children:`Reset`})]})]})}}})))()}var x;function S(){return(S=e((()=>{v(),a(),x={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Progress variant="indeterminate" />

<Progress 
  variant="determinate"
  value={30}
/>
`}}},render:()=>i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(_,{variant:`indeterminate`}),i(_,{variant:`determinate`,value:30})]})}})))()}var C,w,T,E,D;function O(){return(O=e((()=>{b(),S(),v(),a(),C={title:`Components/Progress`,component:_,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},variant:{control:{type:`radio`},options:[`indeterminate`,`determinate`],table:{defaultValue:{summary:`indeterminate`}}},delay:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Delay in milliseconds before the progress bar becomes visible. This helps prevent flicker when content loads quickly.`},value:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:"Value of the progress bar for `determinate` variant."}}},w={args:{id:void 0,className:``,variant:`indeterminate`,delay:0,value:30},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Progress {...args} />
`}}},render:e=>i(`div`,{className:`sb-column sb-width-full`,children:i(_,{...e})})},T=y,E=x,D=[`Demo`,`Controlled`,`Variant`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`ControlledStory`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`VariantStory`,...E.parameters?.docs?.source}}}})))()}O();export{T as Controlled,w as Demo,E as Variant,D as __namedExportsOrder,C as default};