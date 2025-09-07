import{u as e,d as C}from"./hooks.module-Dxk9uxGs.js";import{f as w}from"./index-BWINGljf.js";import{T as s,b as T,c as n,a as t}from"./TabPanel-BxaS1c0m.js";import{T as a}from"./Text-Dvytwbdg.js";import{S as l}from"./Section-45ajfN6P.js";import{B as d}from"./Button-CIwLKvHk.js";import{S as y}from"./Stack-CayROFGf.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-cP-mn0Xe.js";import"./compat.module-c0s5p6eE.js";const I={title:"Components/TabContext",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that manages tab states. It must wrap all tab-related components."}}},argTypes:{defaultValue:{table:{type:{summary:"string"}},control:{disable:!0},description:"Initial value for uncontrolled mode."},value:{table:{type:{summary:"string"}},control:{disable:!0},description:"Value for controlled mode."},children:{table:{type:{summary:"JSX.Element"}},control:{disable:!0},description:"Usually &lt;Tab&gt; and &lt;TabPanel&gt; components."},onChange:{action:"changed",description:"Callback function that is called when the tab is changed. Returns the new value.",table:{type:{summary:"(args: {value: string}) => void"}}},useTabContext:{table:{type:{summary:"Hook"}},description:`Use this hook inside a child component to access the context. <br/>
        <pre>
        interface TabContextValue {
          value: string
          onChange: (value: string) => void
          setValue: (value: string) => void
        }
        </pre>
        `}}},i={tags:["!autodocs"],args:{onChange:w()},parameters:{viewport:{defaultViewport:"large"}},render:r=>e("div",{className:"sb-column sb-width-full sb-container",children:e(s,{...r,defaultValue:"tab-1",children:[e(l,{children:e(T,{children:[e(n,{value:"tab-1",children:"Tab 1"}),e(n,{value:"tab-2",children:"Tab 2"}),e(n,{value:"tab-3",children:"Tab 3"})]})}),e(l,{children:[e(t,{value:"tab-1",children:e(a,{children:"Tab 1 Panel"})}),e(t,{value:"tab-2",children:e(a,{children:"Tab 2 Panel"})}),e(t,{value:"tab-3",children:e(a,{children:"Tab 3 Panel"})})]})]})})},b={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(s,{defaultValue:"tab-1",children:[e(l,{children:e(T,{children:[e(n,{value:"tab-1",children:"First Tab"}),e(n,{value:"tab-2",children:"Second Tab"}),e(n,{value:"tab-3",children:"Third Tab"})]})}),e(l,{children:[e(t,{value:"tab-1",children:e(a,{children:"Tab 1 Panel"})}),e(t,{value:"tab-2",children:e(a,{children:"Tab 2 Panel"})}),e(t,{value:"tab-3",children:e(a,{children:"Tab 3 Panel"})})]})]})})},c={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[r,o]=C("tab-1");return e("div",{className:"sb-column sb-width-full",children:[e(l,{children:e(y,{direction:"row",spacing:400,y:"center",children:[e(a,{children:["Active Tab: ",r]}),e(d,{onClick:()=>o("tab-1"),children:"Set to First Tab"}),e(d,{onClick:()=>o("tab-2"),children:"Set to Second Tab"}),e(d,{onClick:()=>o("tab-3"),children:"Set to Third Tab"})]})}),e(s,{value:r,onChange:f=>{o(f.value)},children:[e(l,{children:e(T,{children:[e(n,{value:"tab-1",children:"First Tab"}),e(n,{value:"tab-2",children:"Second Tab"}),e(n,{value:"tab-3",children:"Third Tab"})]})}),e(l,{children:[e(t,{value:"tab-1",children:e(a,{children:"Tab 1 Panel"})}),e(t,{value:"tab-2",children:e(a,{children:"Tab 2 Panel"})}),e(t,{value:"tab-3",children:e(a,{children:"Tab 3 Panel"})})]})]})]})}};var u,h,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    onChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-width-full sb-container">
      <TabContext {...args} defaultValue="tab-1">
        <Section>
          <TabList>
            <Tab value="tab-1">Tab 1</Tab>
            <Tab value="tab-2">Tab 2</Tab>
            <Tab value="tab-3">Tab 3</Tab>
          </TabList>
        </Section>
        <Section>
          <TabPanel value="tab-1">
            <Text>Tab 1 Panel</Text>
          </TabPanel>
          <TabPanel value="tab-2">
            <Text>Tab 2 Panel</Text>
          </TabPanel>
          <TabPanel value="tab-3">
            <Text>Tab 3 Panel</Text>
          </TabPanel>
        </Section>
      </TabContext>
    </div>
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var m,p,g;b.parameters={...b.parameters,docs:{...(m=b.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    return <div className="sb-column sb-width-full">
        <TabContext defaultValue="tab-1">
          <Section>
            <TabList>
              <Tab value="tab-1">First Tab</Tab>
              <Tab value="tab-2">Second Tab</Tab>
              <Tab value="tab-3">Third Tab</Tab>
            </TabList>
          </Section>
          <Section>
            <TabPanel value="tab-1">
              <Text>Tab 1 Panel</Text>
            </TabPanel>
            <TabPanel value="tab-2">
              <Text>Tab 2 Panel</Text>
            </TabPanel>
            <TabPanel value="tab-3">
              <Text>Tab 3 Panel</Text>
            </TabPanel>
          </Section>
        </TabContext>
      </div>;
  }
}`,...(g=(p=b.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var P,S,x;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [activeTab, setActiveTab] = useState("tab-1");
    return <div className="sb-column sb-width-full">
        <Section>
          <Stack direction="row" spacing={400} y="center">
            <Text>Active Tab: {activeTab}</Text>
            <Button onClick={() => setActiveTab("tab-1")}>
              Set to First Tab
            </Button>
            <Button onClick={() => setActiveTab("tab-2")}>
              Set to Second Tab
            </Button>
            <Button onClick={() => setActiveTab("tab-3")}>
              Set to Third Tab
            </Button>
          </Stack>
        </Section>
        <TabContext value={activeTab} onChange={args => {
        setActiveTab(args.value);
      }}>
          <Section>
            <TabList>
              <Tab value="tab-1">First Tab</Tab>
              <Tab value="tab-2">Second Tab</Tab>
              <Tab value="tab-3">Third Tab</Tab>
            </TabList>
          </Section>
          <Section>
            <TabPanel value="tab-1">
              <Text>Tab 1 Panel</Text>
            </TabPanel>
            <TabPanel value="tab-2">
              <Text>Tab 2 Panel</Text>
            </TabPanel>
            <TabPanel value="tab-3">
              <Text>Tab 3 Panel</Text>
            </TabPanel>
          </Section>
        </TabContext>
      </div>;
  }
}`,...(x=(S=c.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const _=["Demo","Uncontrolled","Controlled"];export{c as Controlled,i as Demo,b as Uncontrolled,_ as __namedExportsOrder,I as default};
