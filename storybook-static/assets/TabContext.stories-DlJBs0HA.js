import{d as x,u as a}from"./hooks.module-CGIakYml.js";import{f as C}from"./index-BWINGljf.js";import{T as l,a as T,b as e}from"./TabList-dLY1c_qU.js";import{S as n}from"./Section-CXCQgqof.js";import{T as t}from"./TabPanel-D07aTsKR.js";import{T as b}from"./Text-9aeIDhQ2.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./Icon-DYEerEJN.js";const S={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [activeTab, setActiveTab] = useState("tab-1")

<TabContext 
  activeId={activeTab}
  onTabChange={(args) => setActiveTab(args.id)}
>

  <TabList>
    <Tab id="tab-1">First Tab</Tab>
    <Tab id="tab-2">Second Tab</Tab>
    <Tab id="tab-3">Third Tab</Tab>
  </TabList>

  <TabPanel tabId="tab-1">Tab 1 Panel</TabPanel>
  <TabPanel tabId="tab-2">Tab 2 Panel</TabPanel>
  <TabPanel tabId="tab-3">Tab 3 Panel</TabPanel>
  
</TabContext>
`}}},render:()=>{const[o,v]=x("tab-1");return a("div",{className:"sb-column sb-width-full",children:a(l,{activeId:o,onTabChange:f=>v(f.id),children:[a(n,{children:a(T,{children:[a(e,{id:"tab-1",children:"First Tab"}),a(e,{id:"tab-2",children:"Second Tab"}),a(e,{id:"tab-3",children:"Third Tab"})]})}),a(n,{children:[a(t,{tabId:"tab-1",children:a(b,{children:"Tab 1 Panel"})}),a(t,{tabId:"tab-2",children:a(b,{children:"Tab 2 Panel"})}),a(t,{tabId:"tab-3",children:a(b,{children:"Tab 3 Panel"})})]})]})})}},A={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TabContext defaultActiveId="tab-1">

  <TabList>
    <Tab id="tab-1">First Tab</Tab>
    <Tab id="tab-2">Second Tab</Tab>
    <Tab id="tab-3">Third Tab</Tab>
  </TabList>

  <TabPanel tabId="tab-1">Tab 1 Panel</TabPanel>
  <TabPanel tabId="tab-2">Tab 2 Panel</TabPanel>
  <TabPanel tabId="tab-3">Tab 3 Panel</TabPanel>

</TabContext>
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:a(l,{defaultActiveId:"tab-1",children:[a(n,{children:a(T,{children:[a(e,{id:"tab-1",children:"First Tab"}),a(e,{id:"tab-2",children:"Second Tab"}),a(e,{id:"tab-3",children:"Third Tab"})]})}),a(n,{children:[a(t,{tabId:"tab-1",children:a(b,{children:"Tab 1 Panel"})}),a(t,{tabId:"tab-2",children:a(b,{children:"Tab 2 Panel"})}),a(t,{tabId:"tab-3",children:a(b,{children:"Tab 3 Panel"})})]})]})})},H={title:"Components/TabContext",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"A context provider that manages states, focus, and keyboard navigation of Tab-related components."}}},argTypes:{defaultActiveId:{control:{type:"text"},description:"Active tab ID for uncontrolled state."},activeId:{control:{disable:!0},description:"Active tab ID for controlled state.",table:{type:{summary:"string"}}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},onTabChange:{table:{type:{summary:"(args) => void",detail:`
args: {
  id: string
}
`}}},useTabContext:{description:"Hook to access the context.",table:{type:{summary:"Props",detail:`
{
  activeId: string
  onTabChange: (id: string) => void
  setActiveTab: (id: string) => void
  registerTab: (id: string, ref: HTMLButtonElement | null) => void
  setFocusedTab: (id: string | undefined) => void
}
`}}}}},r={tags:["!autodocs"],args:{defaultActiveId:"tab-1",onTabChange:C()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TabContext defaultActiveId="tab-1" {...args}>

  <TabList>
    <Tab id="tab-1">Tab 1</Tab>
    <Tab id="tab-2">Tab 2</Tab>
    <Tab id="tab-3">Tab 3</Tab>
  </TabList>

  <TabPanel tabId="tab-1">Tab 1 Panel</TabPanel>
  <TabPanel tabId="tab-2">Tab 2 Panel</TabPanel>
  <TabPanel tabId="tab-3">Tab 3 Panel</TabPanel>
  
</TabContext>
`}}},render:o=>a("div",{className:"sb-column sb-width-full",children:a(l,{...o,defaultActiveId:"tab-1",children:[a(n,{children:a(T,{children:[a(e,{id:"tab-1",children:"Tab 1"}),a(e,{id:"tab-2",children:"Tab 2"}),a(e,{id:"tab-3",children:"Tab 3"})]})}),a(n,{children:[a(t,{tabId:"tab-1",children:a(b,{children:"Tab 1 Panel"})}),a(t,{tabId:"tab-2",children:a(b,{children:"Tab 2 Panel"})}),a(t,{tabId:"tab-3",children:a(b,{children:"Tab 3 Panel"})})]})]})})},d=A,i=S;var s,c,h;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    defaultActiveId: 'tab-1',
    onTabChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<TabContext defaultActiveId="tab-1" {...args}>

  <TabList>
    <Tab id="tab-1">Tab 1</Tab>
    <Tab id="tab-2">Tab 2</Tab>
    <Tab id="tab-3">Tab 3</Tab>
  </TabList>

  <TabPanel tabId="tab-1">Tab 1 Panel</TabPanel>
  <TabPanel tabId="tab-2">Tab 2 Panel</TabPanel>
  <TabPanel tabId="tab-3">Tab 3 Panel</TabPanel>
  
</TabContext>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <TabContext {...args} defaultActiveId="tab-1">
        <Section>
          <TabList>
            <Tab id="tab-1">Tab 1</Tab>
            <Tab id="tab-2">Tab 2</Tab>
            <Tab id="tab-3">Tab 3</Tab>
          </TabList>
        </Section>
        <Section>
          <TabPanel tabId="tab-1">
            <Text>Tab 1 Panel</Text>
          </TabPanel>
          <TabPanel tabId="tab-2">
            <Text>Tab 2 Panel</Text>
          </TabPanel>
          <TabPanel tabId="tab-3">
            <Text>Tab 3 Panel</Text>
          </TabPanel>
        </Section>
      </TabContext>
    </div>
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var m,u,p;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:"UncontrolledStory",...(p=(u=d.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var P,g,I;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:"ControlledStory",...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const _=["Demo","Uncontrolled","Controlled"];export{i as Controlled,r as Demo,d as Uncontrolled,_ as __namedExportsOrder,H as default};
