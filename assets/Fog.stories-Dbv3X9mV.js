import{d as b,y as v,u as e}from"./hooks.module-6Sbq__eq.js";import{t as f,b as w}from"./typedForwardRef-CtFJgl6m.js";import{T as a}from"./Text-BbQ_b1VF.js";import{B as x}from"./Button-D1gxCxM9.js";import"./preact.module-gH5CyEHP.js";import"./compat.module-CHmB9zKI.js";import"./TooltipContext-DB8mQxid.js";import"./TooltipContainer-CJCq4A9v.js";const k=({id:t,className:u,delay:s=0,children:o,...c},p)=>{const[g,y]=b(!1);v(()=>{const n=window.setTimeout(()=>{y(!0)},s);return()=>clearTimeout(n)},[s]);const h=w("Fog",void 0,{visible:g});return e("div",{id:t,className:[h,u].join(" ").trim(),ref:p,...c,children:[e("div",{className:"Fog__overlay",onClick:n=>{n.stopPropagation(),n.preventDefault()}}),o&&e("div",{className:"Fog__children",children:o})]})},l=f(k),I={title:"Layout/Fog",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"The component blocks mouse interaction with the entire parent container.<br/>User can still navigate the page using keyboard (you should prevent it with your own code)."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},delay:{control:{type:"number"},defaultValue:{summary:0},description:"Once mounted, it already blocks mouse interactions, but you can set a delay (in milliseconds) before it becomes visible. This helps prevent flicker when content loads quickly."},children:{control:{type:"text"},table:{type:{summary:"preact.ComponentChildren"}}}}},i={args:{id:void 0,className:"",delay:1e3,children:""},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Fog {...args}>{children}</Fog>
`}}},render:t=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(l,{...t,children:e(a,{children:t.children})}),e(a,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique magnam aspernatur esse dignissimos molestiae."}),e(x,{onClick:()=>{alert("User can still navigate the page using keyboard (you should prevent it with your own code)")},children:"You can't click me"})]})};var r,m,d;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        language: 'tsx',
        code: \`
<Fog {...args}>{children}</Fog>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full sb-gap-16">
      <Fog {...args}>
        {/* @ts-expect-error Storybook spread */}
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
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const D=["Demo"];export{i as Demo,D as __namedExportsOrder,I as default};
