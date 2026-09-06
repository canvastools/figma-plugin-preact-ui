import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{C as t,S as n,w as r}from"./compat.module-gcU-nFZT.js";import{n as i,t as a}from"./jsxRuntime.module-CNTwvFFH.js";import{i as o,n as s,r as c,t as l}from"./typedForwardRef-BIg2RNOP.js";import{n as u,t as d}from"./Text-Cr-51GRl.js";import{n as f,t as p}from"./Button-DTA_GS6N.js";var m,h;function g(){return(g=e((()=>{o(),l(),r(),a(),m=({id:e,className:r,delay:a=0,children:o,...s},l)=>{let[u,d]=n(!1);t(()=>{let e=window.setTimeout(()=>{d(!0)},a);return()=>clearTimeout(e)},[a]);let f=c(`Fog`,void 0,{visible:u});return i(`div`,{id:e,className:[f,r].join(` `).trim(),ref:l,...s,children:[i(`div`,{className:`Fog__overlay`,onClick:e=>{e.stopPropagation(),e.preventDefault()}}),o&&i(`div`,{className:`Fog__children`,children:o})]})},h=s(m)})))()}var _,v,y;function b(){return(b=e((()=>{g(),u(),f(),a(),_={title:`Layout/Fog`,component:h,tags:[`autodocs`],parameters:{docs:{description:{component:`The component blocks mouse interaction with the entire parent container.<br/>User can still navigate the page using keyboard (you should prevent it with your own code).`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},delay:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Once mounted, it already blocks mouse interactions, but you can set a delay (in milliseconds) before it becomes visible. This helps prevent flicker when content loads quickly.`},children:{control:{type:`text`},table:{type:{summary:`preact.ComponentChildren`}}}}},v={args:{id:void 0,className:``,delay:1e3,children:``},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Fog {...args}>{children}</Fog>
`}}},render:e=>i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(h,{...e,children:i(d,{children:e.children})}),i(d,{children:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`}),i(p,{onClick:()=>{alert(`User can still navigate the page using keyboard (you should prevent it with your own code)`)},children:`You can't click me`})]})},y=[`Demo`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    delay: 1000,
    children: ''
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<Fog {...args}>{children}</Fog>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full sb-gap-16">
      <Fog {...args}>
        <Text>{args.children}</Text>
      </Fog>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Qui quae autem dolorum quibusdam
        necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam,
        repudiandae similique magnam aspernatur esse dignissimos molestiae.
      </Text>
      <Button onClick={() => {
      alert('User can still navigate the page using keyboard (you should prevent it with your own code)');
    }}>
        You can't click me
      </Button>
    </div>
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as Demo,y as __namedExportsOrder,_ as default};