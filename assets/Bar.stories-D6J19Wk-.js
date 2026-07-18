import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-XYsEgyrh.js";import{t as r}from"./Text-Dx8we2OT.js";import{E as i,S as a,b as o,nr as s,t as c,tr as l,w as u}from"./src-BW54aR7x.js";var d,f=e((()=>{c(),s(),n(),d={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"By combining the scroll-related components with <a href='/docs/components-bar--docs'>`<Bar/>`</a>, you can simulate sticky elements.<br/>The visibility of the dividers is managed using the values from <a href='/docs/layout-scrollcontext--docs'>`<ScrollContext/>`</a>."},source:{code:`
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

`}}},render:()=>t(`div`,{className:`sb-column sb-width-full sb-height-300`,children:t(u,{children:[t(()=>{let{isAtTop:e}=i();return t(l,{showDividerBottom:!e,children:t(o,{children:t(r,{variant:`heading`,size:`small`,children:`Top Bar`})})})},{}),t(a,{children:t(o,{children:t(r,{variant:`body`,size:`medium`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`})})}),t(()=>{let{isAtBottom:e}=i();return t(l,{showDividerTop:!e,children:t(o,{children:t(r,{variant:`heading`,size:`small`,children:`Bottom Bar`})})})},{})]})})}})),p,m,h,g;e((()=>{f(),c(),s(),n(),p={title:`Layout/Bar`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:`A wrapper component for fixed panels with top/bottom dividers.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},showDividerTop:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},showDividerBottom:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},children:{control:{type:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},m={args:{id:void 0,className:``,showDividerTop:!1,showDividerBottom:!1,children:`Bar content`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Bar {...args}>
  <Section>
    <Text>{children}</Text>
  </Section>
</Bar>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,children:t(l,{...e,children:t(o,{children:t(r,{children:e.children})})})})},h=d,m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`StickyStory`,...h.parameters?.docs?.source}}},g=[`Demo`,`Sticky`]}))();export{m as Demo,h as Sticky,g as __namedExportsOrder,p as default};