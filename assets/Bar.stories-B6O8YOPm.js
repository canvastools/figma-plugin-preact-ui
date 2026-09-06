import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{n as r,t as i}from"./Text-Cr-51GRl.js";import{n as a,t as o}from"./Bar-ANyfK-CW.js";import{a as s,i as c,n as l,r as u,t as d}from"./ScrollContainer-DphjjfHg.js";import{n as f,t as p}from"./Section-DkP7unPH.js";var m;function h(){return(h=e((()=>{r(),f(),c(),l(),a(),n(),m={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"By combining the scroll-related components with <a href='/docs/components-bar--docs'>`<Bar/>`</a>, you can simulate sticky elements.<br/>The visibility of the dividers is managed using the values from <a href='/docs/layout-scrollcontext--docs'>`<ScrollContext/>`</a>."},source:{code:`
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

`}}},render:()=>t(`div`,{className:`sb-column sb-width-full sb-height-300`,children:t(u,{children:[t(()=>{let{isAtTop:e}=s();return t(o,{showDividerBottom:!e,children:t(p,{children:t(i,{variant:`heading`,size:`small`,children:`Top Bar`})})})},{}),t(d,{children:t(p,{children:t(i,{variant:`body`,size:`medium`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`})})}),t(()=>{let{isAtBottom:e}=s();return t(o,{showDividerTop:!e,children:t(p,{children:t(i,{variant:`heading`,size:`small`,children:`Bottom Bar`})})})},{})]})})}})))()}var g,_,v,y;function b(){return(b=e((()=>{h(),r(),f(),a(),n(),g={title:`Layout/Bar`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`A wrapper component for fixed panels with top/bottom dividers.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},showDividerTop:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},showDividerBottom:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},children:{control:{type:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},_={args:{id:void 0,className:``,showDividerTop:!1,showDividerBottom:!1,children:`Bar content`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Bar {...args}>
  <Section>
    <Text>{children}</Text>
  </Section>
</Bar>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,children:t(o,{...e,children:t(p,{children:t(i,{children:e.children})})})})},v=m,y=[`Demo`,`Sticky`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`StickyStory`,...v.parameters?.docs?.source}}}})))()}b();export{_ as Demo,v as Sticky,y as __namedExportsOrder,g as default};