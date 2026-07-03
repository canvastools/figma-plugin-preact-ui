import{u as a}from"./hooks.module-DDuEt2mE.js";import{T as e}from"./TabPanel-D7kF8lRV.js";import{T as d,a as T,b as n}from"./TabList-D5m5vtc4.js";import{S as i}from"./Section-msxZwlsp.js";import{T as r}from"./Text-BooB5DEX.js";import"./preact.module-D68vdB8i.js";import"./typedForwardRef-eUJP59ez.js";import"./compat.module-AmaJGl25.js";import"./Icon-C_1AiDxm.js";import"./Tooltip-2n7DDmmb.js";import"./TooltipContainer-BRY08nvC.js";const C={title:"Components/TabPanel",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"The component is always used within <a href='/docs/components-tabcontext--docs'>`<TabContext/>`</a>."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},tabId:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"string"}}},fullHeight:{control:{type:"boolean"},defaultValue:{summary:!1}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},t={parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},args:{id:void 0,className:"sb-container",fullHeight:!1},render:b=>a("div",{className:"sb-column sb-width-full sb-height-300",children:a(d,{defaultActiveId:"tab-1",children:[a(i,{children:a(T,{children:[a(n,{id:"tab-1",children:"Tab 1"}),a(n,{id:"tab-2",children:"Tab 2"}),a(n,{id:"tab-3",children:"Tab 3"})]})}),a(i,{children:[a(e,{...b,tabId:"tab-1",children:a(r,{children:"Tab 1 Panel"})}),a(e,{...b,tabId:"tab-2",children:a(r,{children:"Tab 2 Panel"})}),a(e,{...b,tabId:"tab-3",children:a(r,{children:"Tab 3 Panel"})})]})]})})};var l,o,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const v=["Demo"];export{t as Demo,v as __namedExportsOrder,C as default};
