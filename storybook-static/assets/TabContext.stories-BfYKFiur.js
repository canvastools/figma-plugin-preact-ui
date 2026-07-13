import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,w as n}from"./compat.module-BbhDrffC.js";import{n as r,t as i}from"./jsxRuntime.module-B_u_rUE0.js";import{t as a}from"./Text-Bf8YN4P6.js";import{b as o,c as s,d as c,i as l,o as u,t as d,u as f}from"./src-CnP2aPTs.js";var p,m=e((()=>{n(),d(),c(),i(),p={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let[e,n]=t(`tab-1`);return r(`div`,{className:`sb-column sb-width-full`,children:r(f,{activeId:e,onTabChange:e=>n(e.id),children:[r(o,{children:r(u,{children:[r(s,{id:`tab-1`,children:`First Tab`}),r(s,{id:`tab-2`,children:`Second Tab`}),r(s,{id:`tab-3`,children:`Third Tab`})]})}),r(o,{children:[r(l,{tabId:`tab-1`,children:r(a,{children:`Tab 1 Panel`})}),r(l,{tabId:`tab-2`,children:r(a,{children:`Tab 2 Panel`})}),r(l,{tabId:`tab-3`,children:r(a,{children:`Tab 3 Panel`})})]})]})})}}})),h,g=e((()=>{d(),c(),i(),h={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full`,children:r(f,{defaultActiveId:`tab-1`,children:[r(o,{children:r(u,{children:[r(s,{id:`tab-1`,children:`First Tab`}),r(s,{id:`tab-2`,children:`Second Tab`}),r(s,{id:`tab-3`,children:`Third Tab`})]})}),r(o,{children:[r(l,{tabId:`tab-1`,children:r(a,{children:`Tab 1 Panel`})}),r(l,{tabId:`tab-2`,children:r(a,{children:`Tab 2 Panel`})}),r(l,{tabId:`tab-3`,children:r(a,{children:`Tab 3 Panel`})})]})]})})}})),_,v,y,b,x,S;e((()=>{m(),g(),d(),c(),i(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/TabContext`,component:f,tags:[`autodocs`],parameters:{docs:{description:{component:`A context provider that manages states, focus, and keyboard navigation of Tab-related components.`}}},argTypes:{defaultActiveId:{control:{type:`text`},description:`Active tab ID for uncontrolled state.`},activeId:{control:{disable:!0},description:`Active tab ID for controlled state.`,table:{type:{summary:`string`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},onTabChange:{table:{type:{summary:`(args) => void`,detail:`
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
`}}}}},y={args:{defaultActiveId:`tab-1`,onTabChange:_()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:e=>r(`div`,{className:`sb-column sb-width-full`,children:r(f,{...e,defaultActiveId:`tab-1`,children:[r(o,{children:r(u,{children:[r(s,{id:`tab-1`,children:`Tab 1`}),r(s,{id:`tab-2`,children:`Tab 2`}),r(s,{id:`tab-3`,children:`Tab 3`})]})}),r(o,{children:[r(l,{tabId:`tab-1`,children:r(a,{children:`Tab 1 Panel`})}),r(l,{tabId:`tab-2`,children:r(a,{children:`Tab 2 Panel`})}),r(l,{tabId:`tab-3`,children:r(a,{children:`Tab 3 Panel`})})]})]})})},b=h,x=p,y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`UncontrolledStory`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`ControlledStory`,...x.parameters?.docs?.source}}},S=[`Demo`,`Uncontrolled`,`Controlled`]}))();export{x as Controlled,y as Demo,b as Uncontrolled,S as __namedExportsOrder,v as default};