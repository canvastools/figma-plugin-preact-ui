import{u as e}from"./hooks.module-DDuEt2mE.js";import{B as r}from"./Bar-BqlJgG_A.js";import{S as f,a as g,u as l}from"./ScrollContainer-Dm2KObw9.js";import{S as o}from"./Section-msxZwlsp.js";import{T as a}from"./Text-BooB5DEX.js";import"./preact.module-D68vdB8i.js";import"./typedForwardRef-eUJP59ez.js";import"./compat.module-AmaJGl25.js";const x={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"By combining the scroll-related components with <a href='/docs/components-bar--docs'>`<Bar/>`</a>, you can simulate sticky elements.<br/>The visibility of the dividers is managed using the values from <a href='/docs/layout-scrollcontext--docs'>`<ScrollContext/>`</a>."},source:{language:"tsx",code:`
const { isAtTop, isAtBottom } = useScrollContext()

<ScrollContext>

  <Bar showDividerBottom={!isAtTop}>
    <Section>
      <Text>Top Bar</Text>
    </Section>
  </Bar>

  <ScrollContainer>
    <Section>
      <Text
        variant="body"
        size="medium"
      >
        {children}
      </Text>
    </Section>
  </ScrollContainer>

  <Bar showDividerTop={!isAtBottom}>
    <Section>
      <Text>Bottom Bar</Text>
    </Section>
  </Bar>

</ScrollContext>

`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-height-300",children:e(f,{children:[e(()=>{const{isAtTop:u}=l();return e(r,{showDividerBottom:!u,children:e(o,{children:e(a,{variant:"heading",size:"small",children:"Top Bar"})})})},{}),e(g,{children:e(o,{children:e(a,{variant:"body",size:"medium",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(()=>{const{isAtBottom:u}=l();return e(r,{showDividerTop:!u,children:e(o,{children:e(a,{variant:"heading",size:"small",children:"Bottom Bar"})})})},{})]})})},C={title:"Layout/Bar",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component for fixed panels with top/bottom dividers."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},showDividerTop:{control:{type:"boolean"},defaultValue:{summary:!1}},showDividerBottom:{control:{type:"boolean"},defaultValue:{summary:!1}},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},i={tags:["!autodocs"],args:{id:void 0,className:"",showDividerTop:!1,showDividerBottom:!1,children:"Bar content"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Bar {...args}>
  <Section>
    <Text>{children}</Text>
  </Section>
</Bar>
`}}},render:n=>e("div",{className:"sb-column sb-width-full",children:e(r,{...n,children:e(o,{children:e(a,{children:n.children})})})})},t=x;var s,c,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    showDividerTop: false,
    showDividerBottom: false,
    children: 'Bar content'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<Bar {...args}>
  <Section>
    <Text>{children}</Text>
  </Section>
</Bar>
\`
      }
    }
  },
  render: (args: import('./Bar.types').BarProps) => <div className="sb-column sb-width-full">
      <Bar {...args}>
        <Section>
          <Text>{args.children}</Text>
        </Section>
      </Bar>
    </div>
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"StickyStory",...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const E=["Demo","Sticky"];export{i as Demo,t as Sticky,E as __namedExportsOrder,C as default};
