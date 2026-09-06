import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{n as r,t as i}from"./Text-Cr-51GRl.js";import{n as a,t as o}from"./Section-DkP7unPH.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./TabList-Cpn93ydS.js";import{n as p,t as m}from"./TabPanel-DaKnF7-p.js";var h,g,_;function v(){return(v=e((()=>{p(),u(),l(),c(),a(),r(),n(),h={title:`Components/TabPanel`,component:m,tags:[`autodocs`],parameters:{docs:{description:{component:"The component is always used within <a href='/docs/components-tabcontext--docs'>`<TabContext/>`</a>."}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},tabId:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`string`}}},fullHeight:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},g={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<TabContext defaultActiveId="tab-1">

  <TabList>
    <Tab id="tab-1">Tab 1</Tab>
    <Tab id="tab-2">Tab 2</Tab>
    <Tab id="tab-3">Tab 3</Tab>
  </TabList>

  <TabPanel tabId="tab-1" {...args}>{children}</TabPanel>
  <TabPanel tabId="tab-2" {...args}>{children}</TabPanel>
  <TabPanel tabId="tab-3" {...args}>{children}</TabPanel>

</TabContext>
`}}},args:{id:void 0,className:`sb-container`,fullHeight:!1},render:e=>t(`div`,{className:`sb-column sb-width-full sb-height-300`,children:t(s,{defaultActiveId:`tab-1`,children:[t(o,{children:t(f,{children:[t(d,{id:`tab-1`,children:`Tab 1`}),t(d,{id:`tab-2`,children:`Tab 2`}),t(d,{id:`tab-3`,children:`Tab 3`})]})}),t(o,{children:[t(m,{...e,tabId:`tab-1`,children:t(i,{children:`Tab 1 Panel`})}),t(m,{...e,tabId:`tab-2`,children:t(i,{children:`Tab 2 Panel`})}),t(m,{...e,tabId:`tab-3`,children:t(i,{children:`Tab 3 Panel`})})]})]})})},_=[`Demo`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<TabContext defaultActiveId="tab-1">

  <TabList>
    <Tab id="tab-1">Tab 1</Tab>
    <Tab id="tab-2">Tab 2</Tab>
    <Tab id="tab-3">Tab 3</Tab>
  </TabList>

  <TabPanel tabId="tab-1" {...args}>{children}</TabPanel>
  <TabPanel tabId="tab-2" {...args}>{children}</TabPanel>
  <TabPanel tabId="tab-3" {...args}>{children}</TabPanel>

</TabContext>
\`
      }
    }
  },
  args: {
    id: undefined,
    className: 'sb-container',
    fullHeight: false
  },
  render: args => <div className="sb-column sb-width-full sb-height-300">
      <TabContext defaultActiveId="tab-1">
        <Section>
          <TabList>
            <Tab id="tab-1">Tab 1</Tab>
            <Tab id="tab-2">Tab 2</Tab>
            <Tab id="tab-3">Tab 3</Tab>
          </TabList>
        </Section>
        <Section>
          <TabPanel {...args} tabId="tab-1">
            <Text>Tab 1 Panel</Text>
          </TabPanel>
          <TabPanel {...args} tabId="tab-2">
            <Text>Tab 2 Panel</Text>
          </TabPanel>
          <TabPanel {...args} tabId="tab-3">
            <Text>Tab 3 Panel</Text>
          </TabPanel>
        </Section>
      </TabContext>
    </div>
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as Demo,_ as __namedExportsOrder,h as default};