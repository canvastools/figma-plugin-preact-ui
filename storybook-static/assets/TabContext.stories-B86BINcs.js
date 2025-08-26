import{u as a}from"./jsxRuntime.module-CXXlufuJ.js";import{f as P}from"./index-BWINGljf.js";import{d as f}from"./compat.module-C_m5Zvzo.js";import{c as l,a as T,T as e,b as n}from"./TabPanel-BniaG_Eb.js";import"./preact.module-DKQ80Dzn.js";import"./Text-Zs2635gN.js";import"./typedForwardRef-DzGXX2Gk.js";const w={title:"Components/TabContext",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that manages tab states."}}},argTypes:{defaultValue:{table:{type:{summary:"string"}},control:{disable:!0},description:"Initial value for uncontrolled mode."},value:{table:{type:{summary:"string"}},control:{disable:!0},description:"Value for controlled mode."},children:{table:{type:{summary:"JSX.Element"}},control:{disable:!0},description:"Usually &lt;Tab&gt; and &lt;TabPanel&gt; components."},onChange:{action:"changed",description:"Callback function that is called when the tab is changed. Returns the new value.",table:{type:{summary:"(args: {value: string}) => void"}}}}},t={tags:["!autodocs"],args:{onChange:P()},render:o=>a(l,{defaultValue:"tab-1",onChange:o.onChange,children:[a(T,{children:[a(e,{value:"tab-1",children:"Tab 1"}),a(e,{value:"tab-2",children:"Tab 2"}),a(e,{value:"tab-3",children:"Tab 3"})]}),a("br",{}),a(n,{value:"tab-1",children:"Tab 1 Content"}),a(n,{value:"tab-2",children:"Tab 2 Content"}),a(n,{value:"tab-3",children:"Tab 3 Content"})]})},b={tags:["!dev"],render:()=>a(l,{defaultValue:"tab-1",children:[a(T,{children:[a(e,{value:"tab-1",children:"First Tab"}),a(e,{value:"tab-2",children:"Second Tab"}),a(e,{value:"tab-3",children:"Third Tab"})]}),a("br",{}),a(n,{value:"tab-1",children:"Tab 1 Content"}),a(n,{value:"tab-2",children:"Tab 2 Content"}),a(n,{value:"tab-3",children:"Tab 3 Content"})]})},r={tags:["!dev"],render:()=>{const[o,C]=f("tab-2");return a(l,{value:o,onChange:g=>{C(g.value)},children:[a(T,{children:[a(e,{value:"tab-1",children:"First Tab"}),a(e,{value:"tab-2",children:"Second Tab"}),a(e,{value:"tab-3",children:"Third Tab"})]}),a("br",{}),a(n,{value:"tab-1",children:"Tab 1 Content"}),a(n,{value:"tab-2",children:"Tab 2 Content"}),a(n,{value:"tab-3",children:"Tab 3 Content"})]})}};var s,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    onChange: fn()
  },
  render: (args: any) => <TabContext defaultValue="tab-1" onChange={args.onChange}>
      <TabList>
        <Tab value="tab-1">Tab 1</Tab>
        <Tab value="tab-2">Tab 2</Tab>
        <Tab value="tab-3">Tab 3</Tab>
      </TabList>
      <br />
      <TabPanel value="tab-1">Tab 1 Content</TabPanel>
      <TabPanel value="tab-2">Tab 2 Content</TabPanel>
      <TabPanel value="tab-3">Tab 3 Content</TabPanel>
    </TabContext>
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,i,v;b.parameters={...b.parameters,docs:{...(u=b.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    return <TabContext defaultValue="tab-1">
        <TabList>
          <Tab value="tab-1">First Tab</Tab>
          <Tab value="tab-2">Second Tab</Tab>
          <Tab value="tab-3">Third Tab</Tab>
        </TabList>
        <br />
        <TabPanel value="tab-1">Tab 1 Content</TabPanel>
        <TabPanel value="tab-2">Tab 2 Content</TabPanel>
        <TabPanel value="tab-3">Tab 3 Content</TabPanel>
      </TabContext>;
  }
}`,...(v=(i=b.parameters)==null?void 0:i.docs)==null?void 0:v.source}}};var h,m,p;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => {
    const [activeTab, setActiveTab] = useState("tab-2");
    return <TabContext value={activeTab} onChange={args => {
      setActiveTab(args.value);
    }}>
        <TabList>
          <Tab value="tab-1">First Tab</Tab>
          <Tab value="tab-2">Second Tab</Tab>
          <Tab value="tab-3">Third Tab</Tab>
        </TabList>
        <br />
        <TabPanel value="tab-1">Tab 1 Content</TabPanel>
        <TabPanel value="tab-2">Tab 2 Content</TabPanel>
        <TabPanel value="tab-3">Tab 3 Content</TabPanel>
      </TabContext>;
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const U=["Demo","Uncontrolled","Controlled"];export{r as Controlled,t as Demo,b as Uncontrolled,U as __namedExportsOrder,w as default};
