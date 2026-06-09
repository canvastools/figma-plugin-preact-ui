import{u as a}from"./hooks.module-6Sbq__eq.js";import{T as d,a as e,b as t}from"./TabList-CrcKBNcJ.js";import{S as n}from"./Section-f0GkCzPh.js";import{S as g}from"./Stack-FIJoWfyG.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./TooltipContext-Csm2MW4s.js";import"./TooltipContainer-CJCq4A9v.js";import"./Text-BbQ_b1VF.js";import"./Icon-DqIclgYW.js";const v={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TabContext defaultActiveId="tab-1">
  <TabList>
    <Tab id="tab-1">{children}</Tab>
    <Tab id="tab-2">{children}</Tab>
    ...
  </TabList>
</TabContext>
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:a(d,{defaultActiveId:"tab-1",children:a(n,{children:a(e,{children:[a(t,{id:"tab-1",children:"First Tab"}),a(t,{id:"tab-2",children:"Second Tab"}),a(t,{id:"tab-3",children:"Third Tab"}),a(t,{id:"tab-4",children:"Fourth Tab"}),a(t,{id:"tab-5",children:"Fifth Tab"}),a(t,{id:"tab-6",children:"Sixth Tab"}),a(t,{id:"tab-7",children:"Seventh Tab"}),a(t,{id:"tab-8",children:"Eighth Tab"}),a(t,{id:"tab-9",children:"Ninth Tab"}),a(t,{id:"tab-10",children:"Tenth Tab"}),a(t,{id:"tab-11",children:"Eleventh Tab"}),a(t,{id:"tab-12",children:"Twelfth Tab"}),a(t,{id:"tab-13",children:"Thirteenth Tab"}),a(t,{id:"tab-14",children:"Fourteenth Tab"}),a(t,{id:"tab-15",children:"Fifteenth Tab"})]})})})})},S={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TabContext defaultActiveId="tab-1">
  <TabList>
    <Tab id="tab-1">{children}</Tab>
    <Tab id="tab-2">{children}</Tab>
    ...
  </TabList>

  <TabList variant="list">
    <Tab id="tab-1">{children}</Tab>
    <Tab id="tab-2">{children}</Tab>
    ...
  </TabList>
</TabContext>
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:a(n,{children:a(g,{direction:"row",spacing:"400",children:[a(d,{defaultActiveId:"tab-1",children:a(e,{children:[a(t,{id:"tab-1",children:"First Tab"}),a(t,{id:"tab-2",children:"Second Tab"}),a(t,{id:"tab-3",children:"Third Tab"}),a(t,{id:"tab-4",children:"Fourth Tab"}),a(t,{id:"tab-5",children:"Fifth Tab"})]})}),a(d,{defaultActiveId:"tab-1",children:a(e,{variant:"list",children:[a(t,{id:"tab-1",children:"First Tab"}),a(t,{id:"tab-2",children:"Second Tab"}),a(t,{id:"tab-3",children:"Third Tab"}),a(t,{id:"tab-4",children:"Fourth Tab"}),a(t,{id:"tab-5",children:"Fifth Tab"})]})})]})})})},z={title:"Components/TabList",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component for aligning a list of <a href='/docs/components-tab--docs'>`<Tab/>`</a> components."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["default","list"],defaultValue:{summary:"default"}},scrollable:{control:{type:"boolean"},defaultValue:{summary:"true"}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},r={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TabContext defaultActiveId="tab-1">

  <TabList {...args}>
    <Tab id="tab-1">Tab 1</Tab>
    <Tab id="tab-2">Tab 2</Tab>
    <Tab id="tab-3">Tab 3</Tab>
  </TabList>

  <TabPanel tabId="tab-1">Tab 1 Panel</TabPanel>
  <TabPanel tabId="tab-2">Tab 2 Panel</TabPanel>
  <TabPanel tabId="tab-3">Tab 3 Panel</TabPanel>

</TabContext>
`}}},args:{id:void 0,className:"sb-container-inset",variant:"default",scrollable:!0},render:f=>a("div",{className:"sb-column sb-width-full",children:a(d,{defaultActiveId:"tab-1",children:a(n,{children:a(e,{...f,children:[a(t,{id:"tab-1",children:"Tab 1"}),a(t,{id:"tab-2",children:"Tab 2"}),a(t,{id:"tab-3",children:"Tab 3"})]})})})})},i=v,b=S;var o,l,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<TabContext defaultActiveId="tab-1">

  <TabList {...args}>
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
  args: {
    id: undefined,
    className: 'sb-container-inset',
    variant: 'default',
    scrollable: true
  },
  render: args => <div className="sb-column sb-width-full">
      <TabContext defaultActiveId="tab-1">
        <Section>
          <TabList {...args}>
            <Tab id="tab-1">Tab 1</Tab>
            <Tab id="tab-2">Tab 2</Tab>
            <Tab id="tab-3">Tab 3</Tab>
          </TabList>
        </Section>
      </TabContext>
    </div>
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var s,T,h;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:"HorizontalScrollStory",...(h=(T=i.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var u,m,p;b.parameters={...b.parameters,docs:{...(u=b.parameters)==null?void 0:u.docs,source:{originalSource:"VariantStory",...(p=(m=b.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const H=["Demo","HorizontalScroll","Variant"];export{r as Demo,i as HorizontalScroll,b as Variant,H as __namedExportsOrder,z as default};
