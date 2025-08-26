import{u as a}from"./jsxRuntime.module-CXXlufuJ.js";import{b as t,a as s,T as r,c as T}from"./TabPanel-BniaG_Eb.js";import"./preact.module-DKQ80Dzn.js";import"./Text-Zs2635gN.js";import"./typedForwardRef-DzGXX2Gk.js";import"./compat.module-C_m5Zvzo.js";const v={title:"Components/TabPanel",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that displays tab's content. Always used within &lt;TabContext/&gt;."}}},argTypes:{className:{control:{type:"string"}},value:{table:{type:{summary:"string"}},description:"Value of the tab panel for any mode."},children:{table:{type:{summary:"JSX.Element"}},control:{disable:!0}}}},e={args:{className:""},render:n=>a(T,{defaultValue:"tab-1",children:[a(s,{children:[a(r,{value:"tab-1",children:"Tab 1"}),a(r,{value:"tab-2",children:"Tab 2"}),a(r,{value:"tab-3",children:"Tab 3"})]}),a("br",{}),a(t,{...n,value:"tab-1",children:"Tab 1 Content"}),a(t,{...n,value:"tab-2",children:"Tab 2 Content"}),a(t,{...n,value:"tab-3",children:"Tab 3 Content"})]})};var b,o,l;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    className: ""
  },
  render: args => <TabContext defaultValue="tab-1">
      <TabList>
        <Tab value="tab-1">Tab 1</Tab>
        <Tab value="tab-2">Tab 2</Tab>
        <Tab value="tab-3">Tab 3</Tab>
      </TabList>
      <br />
      <TabPanel {...args} value="tab-1">
        Tab 1 Content
      </TabPanel>
      <TabPanel {...args} value="tab-2">
        Tab 2 Content
      </TabPanel>
      <TabPanel {...args} value="tab-3">
        Tab 3 Content
      </TabPanel>
    </TabContext>
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const h=["Demo"];export{e as Demo,h as __namedExportsOrder,v as default};
