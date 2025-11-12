import{u as a}from"./hooks.module-Dxk9uxGs.js";import{b as T,T as h,c as e,a as b}from"./TabPanel-DAIv0vwk.js";import{S as r}from"./Section-yfO0z026.js";import{T as l}from"./Text-C438qO9S.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";const P={title:"Components/TabList",component:T,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component for aligning a list of &lt;Tab&gt; components."}}},argTypes:{className:{control:{type:"text"}},children:{table:{type:{summary:"JSX.Element"}},control:{disable:!0},description:"Usually &lt;Tab&gt; components."}}},t={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"large"}},args:{className:"sb-container-inset"},render:v=>a("div",{className:"sb-column sb-width-full",children:a(h,{defaultValue:"tab-1",children:[a(r,{children:a(T,{...v,children:[a(e,{value:"tab-1",children:"Tab 1"}),a(e,{value:"tab-2",children:"Tab 2"}),a(e,{value:"tab-3",children:"Tab 3"})]})}),a(r,{children:[a(b,{value:"tab-1",children:a(l,{children:"Tab 1 Panel"})}),a(b,{value:"tab-2",children:a(l,{children:"Tab 2 Panel"})}),a(b,{value:"tab-3",children:a(l,{children:"Tab 3 Panel"})})]})]})})},n={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>a("div",{className:"sb-column sb-width-full",children:a(h,{defaultValue:"tab-1",children:a(r,{children:a(T,{children:[a(e,{value:"tab-1",children:"First Tab"}),a(e,{value:"tab-2",children:"Second Tab"}),a(e,{value:"tab-3",children:"Third Tab"}),a(e,{value:"tab-4",children:"Fourth Tab"}),a(e,{value:"tab-5",children:"Fifth Tab"}),a(e,{value:"tab-6",children:"Sixth Tab"}),a(e,{value:"tab-7",children:"Seventh Tab"}),a(e,{value:"tab-8",children:"Eighth Tab"}),a(e,{value:"tab-9",children:"Ninth Tab"}),a(e,{value:"tab-10",children:"Tenth Tab"}),a(e,{value:"tab-11",children:"Eleventh Tab"}),a(e,{value:"tab-12",children:"Twelfth Tab"}),a(e,{value:"tab-13",children:"Thirteenth Tab"}),a(e,{value:"tab-14",children:"Fourteenth Tab"}),a(e,{value:"tab-15",children:"Fifteenth Tab"})]})})})})};var i,o,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  args: {
    className: "sb-container-inset"
  },
  render: args => <div className="sb-column sb-width-full">
      <TabContext defaultValue="tab-1">
        <Section>
          <TabList {...args}>
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
              <Tab value="tab-4">Fourth Tab</Tab>
              <Tab value="tab-5">Fifth Tab</Tab>
              <Tab value="tab-6">Sixth Tab</Tab>
              <Tab value="tab-7">Seventh Tab</Tab>
              <Tab value="tab-8">Eighth Tab</Tab>
              <Tab value="tab-9">Ninth Tab</Tab>
              <Tab value="tab-10">Tenth Tab</Tab>
              <Tab value="tab-11">Eleventh Tab</Tab>
              <Tab value="tab-12">Twelfth Tab</Tab>
              <Tab value="tab-13">Thirteenth Tab</Tab>
              <Tab value="tab-14">Fourteenth Tab</Tab>
              <Tab value="tab-15">Fifteenth Tab</Tab>
            </TabList>
          </Section>
        </TabContext>
      </div>;
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const F=["Demo","HorizontalScroll"];export{t as Demo,n as HorizontalScroll,F as __namedExportsOrder,P as default};
