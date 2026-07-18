import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,S as n,w as r}from"./compat.module-BiyPQZFw.js";import{n as i,t as a}from"./jsxRuntime.module-XYsEgyrh.js";import{D as o,s,t as c}from"./utils-DKF8LkKs.js";import{t as l}from"./Text-Dx8we2OT.js";import{qn as u,t as d}from"./src-BW54aR7x.js";var f=e((()=>{})),p,m,h=e((()=>{c(),r(),f(),a(),p=({id:e,className:r,delay:a=0,children:s,...c},l)=>{let[u,d]=n(!1);return t(()=>{let e=window.setTimeout(()=>{d(!0)},a);return()=>clearTimeout(e)},[a]),i(`div`,{id:e,className:[o(`Fog`,void 0,{visible:u}),r].join(` `).trim(),ref:l,...c,children:[i(`div`,{className:`Fog__overlay`,onClick:e=>{e.stopPropagation(),e.preventDefault()}}),s&&i(`div`,{className:`Fog__children`,children:s})]})},m=s(p)})),g,_,v;e((()=>{h(),d(),a(),g={title:`Layout/Fog`,component:m,tags:[`autodocs`],parameters:{docs:{description:{component:`The component blocks mouse interaction with the entire parent container.<br/>User can still navigate the page using keyboard (you should prevent it with your own code).`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},delay:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Once mounted, it already blocks mouse interactions, but you can set a delay (in milliseconds) before it becomes visible. This helps prevent flicker when content loads quickly.`},children:{control:{type:`text`},table:{type:{summary:`preact.ComponentChildren`}}}}},_={args:{id:void 0,className:``,delay:1e3,children:``},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Fog {...args}>{children}</Fog>
`}}},render:e=>i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(m,{...e,children:i(l,{children:e.children})}),i(l,{children:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae.`}),i(u,{onClick:()=>{alert(`User can still navigate the page using keyboard (you should prevent it with your own code)`)},children:`You can't click me`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Demo`]}))();export{_ as Demo,v as __namedExportsOrder,g as default};