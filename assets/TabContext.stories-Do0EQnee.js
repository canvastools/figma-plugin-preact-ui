import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,w as n}from"./compat.module-gcU-nFZT.js";import{n as r,t as i}from"./jsxRuntime.module-CNTwvFFH.js";import{n as a,t as o}from"./Text-Cr-51GRl.js";import{n as s,t as c}from"./Section-DkP7unPH.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./TabList-Cpn93ydS.js";import{n as h,t as g}from"./TabPanel-DaKnF7-p.js";var _;function v(){return(v=e((()=>{n(),s(),d(),u(),a(),h(),f(),i(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let[e,n]=t(`tab-1`);return r(`div`,{className:`sb-column sb-width-full`,children:r(l,{activeId:e,onTabChange:e=>n(e.id),children:[r(c,{children:r(m,{children:[r(p,{id:`tab-1`,children:`First Tab`}),r(p,{id:`tab-2`,children:`Second Tab`}),r(p,{id:`tab-3`,children:`Third Tab`})]})}),r(c,{children:[r(g,{tabId:`tab-1`,children:r(o,{children:`Tab 1 Panel`})}),r(g,{tabId:`tab-2`,children:r(o,{children:`Tab 2 Panel`})}),r(g,{tabId:`tab-3`,children:r(o,{children:`Tab 3 Panel`})})]})]})})}}})))()}var y;function b(){return(b=e((()=>{s(),d(),u(),a(),h(),f(),i(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full`,children:r(l,{defaultActiveId:`tab-1`,children:[r(c,{children:r(m,{children:[r(p,{id:`tab-1`,children:`First Tab`}),r(p,{id:`tab-2`,children:`Second Tab`}),r(p,{id:`tab-3`,children:`Third Tab`})]})}),r(c,{children:[r(g,{tabId:`tab-1`,children:r(o,{children:`Tab 1 Panel`})}),r(g,{tabId:`tab-2`,children:r(o,{children:`Tab 2 Panel`})}),r(g,{tabId:`tab-3`,children:r(o,{children:`Tab 3 Panel`})})]})]})})}})))()}var x,S,C,w,T,E;function D(){return(D=e((()=>{v(),b(),h(),d(),u(),a(),s(),f(),i(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/TabContext`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:`A context provider that manages states, focus, and keyboard navigation of Tab-related components.`}}},argTypes:{defaultActiveId:{control:{type:`text`},description:`Active tab ID for uncontrolled state.`},activeId:{control:{disable:!0},description:`Active tab ID for controlled state.`,table:{type:{summary:`string`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},onTabChange:{table:{type:{summary:`(args) => void`,detail:`
args: {
  id: string
}
`}}},useTabContext:{description:`Hook to access the context.`,table:{type:{summary:`Props`,detail:`
{
  activeId: string
  onTabChange: (id: string) => void
  setActiveTab: (id: string) => void
  registerTab: (id: string, ref: HTMLButtonElement | null) => void
  setFocusedTab: (id: string | undefined) => void
}
`}}}}},C={args:{defaultActiveId:`tab-1`,onTabChange:x()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:e=>r(`div`,{className:`sb-column sb-width-full`,children:r(l,{...e,defaultActiveId:`tab-1`,children:[r(c,{children:r(m,{children:[r(p,{id:`tab-1`,children:`Tab 1`}),r(p,{id:`tab-2`,children:`Tab 2`}),r(p,{id:`tab-3`,children:`Tab 3`})]})}),r(c,{children:[r(g,{tabId:`tab-1`,children:r(o,{children:`Tab 1 Panel`})}),r(g,{tabId:`tab-2`,children:r(o,{children:`Tab 2 Panel`})}),r(g,{tabId:`tab-3`,children:r(o,{children:`Tab 3 Panel`})})]})]})})},w=y,T=_,E=[`Demo`,`Uncontrolled`,`Controlled`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`UncontrolledStory`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`ControlledStory`,...T.parameters?.docs?.source}}}})))()}D();export{T as Controlled,C as Demo,w as Uncontrolled,E as __namedExportsOrder,S as default};