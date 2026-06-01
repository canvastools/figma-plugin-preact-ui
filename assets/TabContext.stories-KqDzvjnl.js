import{d as x,u as a}from"./hooks.module-6Sbq__eq.js";import{f as C}from"./index-B4E_jmCM.js";import{T as o,a as T,b as e}from"./TabList-CJQbGAtU.js";import{S as n}from"./Section-f0GkCzPh.js";import{T as t}from"./TabPanel-Bb2r_h6y.js";import{T as b}from"./Text-BbQ_b1VF.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./TooltipContext-e3IspsuS.js";import"./TooltipContainer-CJCq4A9v.js";import"./Icon-C6_npEhI.js";const S={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>{const[l,v]=x("tab-1");return a("div",{className:"sb-column sb-width-full",children:a(o,{activeId:l,onTabChange:f=>v(f.id),children:[a(n,{children:a(T,{children:[a(e,{id:"tab-1",children:"First Tab"}),a(e,{id:"tab-2",children:"Second Tab"}),a(e,{id:"tab-3",children:"Third Tab"})]})}),a(n,{children:[a(t,{tabId:"tab-1",children:a(b,{children:"Tab 1 Panel"})}),a(t,{tabId:"tab-2",children:a(b,{children:"Tab 2 Panel"})}),a(t,{tabId:"tab-3",children:a(b,{children:"Tab 3 Panel"})})]})]})})}},A={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:a(o,{defaultActiveId:"tab-1",children:[a(n,{children:a(T,{children:[a(e,{id:"tab-1",children:"First Tab"}),a(e,{id:"tab-2",children:"Second Tab"}),a(e,{id:"tab-3",children:"Third Tab"})]})}),a(n,{children:[a(t,{tabId:"tab-1",children:a(b,{children:"Tab 1 Panel"})}),a(t,{tabId:"tab-2",children:a(b,{children:"Tab 2 Panel"})}),a(t,{tabId:"tab-3",children:a(b,{children:"Tab 3 Panel"})})]})]})})},B={title:"Components/TabContext",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A context provider that manages states, focus, and keyboard navigation of Tab-related components."}}},argTypes:{defaultActiveId:{control:{type:"text"},description:"Active tab ID for uncontrolled state."},activeId:{control:{disable:!0},description:"Active tab ID for controlled state.",table:{type:{summary:"string"}}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},onTabChange:{table:{type:{summary:"(args) => void",detail:`
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
`}}},render:l=>a("div",{className:"sb-column sb-width-full",children:a(o,{...l,defaultActiveId:"tab-1",children:[a(n,{children:a(T,{children:[a(e,{id:"tab-1",children:"Tab 1"}),a(e,{id:"tab-2",children:"Tab 2"}),a(e,{id:"tab-3",children:"Tab 3"})]})}),a(n,{children:[a(t,{tabId:"tab-1",children:a(b,{children:"Tab 1 Panel"})}),a(t,{tabId:"tab-2",children:a(b,{children:"Tab 2 Panel"})}),a(t,{tabId:"tab-3",children:a(b,{children:"Tab 3 Panel"})})]})]})})},d=A,i=S;var s,c,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var h,u,p;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:"UncontrolledStory",...(p=(u=d.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var P,g,I;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:"ControlledStory",...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const M=["Demo","Uncontrolled","Controlled"];export{i as Controlled,r as Demo,d as Uncontrolled,M as __namedExportsOrder,B as default};
