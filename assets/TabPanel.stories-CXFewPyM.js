import{u as e}from"./hooks.module-Dxk9uxGs.js";import{a as t,T as b,b as c,c as l}from"./TabPanel-DAIv0vwk.js";import{S as d}from"./Section-yfO0z026.js";import{T as r}from"./Text-C438qO9S.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";const v={title:"Components/TabPanel",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that displays tab's content. Always used within &lt;TabContext/&gt;."}}},argTypes:{className:{control:{type:"text"}},value:{table:{type:{summary:"string"}},description:"Value of the tab panel for controlled/uncontrolled mode."},fullHeight:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Set the height to 100% to occupy the entire height in flex containers. May requires &lt;ScrollContainer/&gt; to be used as it uses `overflow: hidden`."},children:{table:{type:{summary:"JSX.Element"}},control:{disable:!0}}}},a={parameters:{viewport:{defaultViewport:"large"}},args:{className:"sb-container",fullHeight:!1},render:n=>e("div",{className:"sb-column sb-width-full sb-height-300",children:e(b,{defaultValue:"tab-1",children:[e(d,{children:e(c,{children:[e(l,{value:"tab-1",children:"Tab 1"}),e(l,{value:"tab-2",children:"Tab 2"}),e(l,{value:"tab-3",children:"Tab 3"})]})}),e(t,{...n,value:"tab-1",children:e(r,{children:"Tab 1 Panel"})}),e(t,{...n,value:"tab-2",children:e(r,{children:"Tab 2 Panel"})}),e(t,{...n,value:"tab-3",children:e(r,{children:"Tab 3 Panel"})})]})})};var o,s,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  args: {
    className: "sb-container",
    fullHeight: false
  },
  render: args => <div className="sb-column sb-width-full sb-height-300">
      <TabContext defaultValue="tab-1">
        <Section>
          <TabList>
            <Tab value="tab-1">Tab 1</Tab>
            <Tab value="tab-2">Tab 2</Tab>
            <Tab value="tab-3">Tab 3</Tab>
          </TabList>
        </Section>
        <TabPanel {...args} value="tab-1">
          <Text>Tab 1 Panel</Text>
        </TabPanel>
        <TabPanel {...args} value="tab-2">
          <Text>Tab 2 Panel</Text>
        </TabPanel>
        <TabPanel {...args} value="tab-3">
          <Text>Tab 3 Panel</Text>
        </TabPanel>
      </TabContext>
    </div>
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const x=["Demo"];export{a as Demo,x as __namedExportsOrder,v as default};
