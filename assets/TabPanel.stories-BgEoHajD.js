import{u as a}from"./hooks.module-BMDhD8C6.js";import{T as t}from"./TabPanel-DoYzQHX9.js";import{T as d,a as T,b as n}from"./TabList-Deyu40JN.js";import{S as i}from"./Section-BpHcE_3_.js";import{T as r}from"./Text-DSWvyrh8.js";import"./preact.module-DhLccOoG.js";import"./typedForwardRef-BBQ-rOPo.js";import"./compat.module-BB5nNOI3.js";import"./Icon-CwUXZnq_.js";const I={title:"Components/TabPanel",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"The component is always used within <a href='/docs/components-tabcontext--docs'>`<TabContext/>`</a>."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},tabId:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"string"}}},fullHeight:{control:{type:"boolean"},defaultValue:{summary:!1}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},e={parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},args:{id:void 0,className:"sb-container",fullHeight:!1},render:b=>a("div",{className:"sb-column sb-width-full sb-height-300",children:a(d,{defaultActiveId:"tab-1",children:[a(i,{children:a(T,{children:[a(n,{id:"tab-1",children:"Tab 1"}),a(n,{id:"tab-2",children:"Tab 2"}),a(n,{id:"tab-3",children:"Tab 3"})]})}),a(i,{children:[a(t,{...b,tabId:"tab-1",children:a(r,{children:"Tab 1 Panel"})}),a(t,{...b,tabId:"tab-2",children:a(r,{children:"Tab 2 Panel"})}),a(t,{...b,tabId:"tab-3",children:a(r,{children:"Tab 3 Panel"})})]})]})})};var l,o,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const y=["Demo"];export{e as Demo,y as __namedExportsOrder,I as default};
