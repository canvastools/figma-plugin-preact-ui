import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-B_u_rUE0.js";import{t as r}from"./Text-Bf8YN4P6.js";import{a as i,b as a,c as o,i as s,o as c,t as l,u}from"./src-nP44HpfJ.js";var d,f,p;e((()=>{i(),l(),n(),d={title:`Components/TabPanel`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:"The component is always used within <a href='/docs/components-tabcontext--docs'>`<TabContext/>`</a>."}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},tabId:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`string`}}},fullHeight:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},f={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},args:{id:void 0,className:`sb-container`,fullHeight:!1},render:e=>t(`div`,{className:`sb-column sb-width-full sb-height-300`,children:t(u,{defaultActiveId:`tab-1`,children:[t(a,{children:t(c,{children:[t(o,{id:`tab-1`,children:`Tab 1`}),t(o,{id:`tab-2`,children:`Tab 2`}),t(o,{id:`tab-3`,children:`Tab 3`})]})}),t(a,{children:[t(s,{...e,tabId:`tab-1`,children:t(r,{children:`Tab 1 Panel`})}),t(s,{...e,tabId:`tab-2`,children:t(r,{children:`Tab 2 Panel`})}),t(s,{...e,tabId:`tab-3`,children:t(r,{children:`Tab 3 Panel`})})]})]})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Demo`]}))();export{f as Demo,p as __namedExportsOrder,d as default};