import{u as a}from"./jsxRuntime.module-CXXlufuJ.js";import{f as B}from"./index-BWINGljf.js";import{d as N}from"./compat.module-C_m5Zvzo.js";import{T as e,a as n,b as u,c as r}from"./TabPanel-BniaG_Eb.js";import{B as v}from"./Badge-BUMJ-q_a.js";import{I as T}from"./Icon-DvMK2avU.js";import"./preact.module-DKQ80Dzn.js";import"./Text-Zs2635gN.js";import"./typedForwardRef-DzGXX2Gk.js";const _={title:"Components/Tab",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Always used within &lt;TabContext&gt;, optionally in combination with &lt;TabList&gt; and &lt;TabPanel&gt;"}}},argTypes:{className:{control:{type:"text"}},value:{control:{disable:!0},table:{type:{summary:"string"}},description:"Value of the tab panel for any mode."},variant:{control:{type:"radio"},options:["default","single"],defaultValue:"default"},prefix:{table:{type:{summary:"string | number | JSX.Element"}},description:"Element inserted before children.",control:{disable:!0}},suffix:{table:{type:{summary:"string | number | JSX.Element"}},description:"Element inserted after children.",control:{disable:!0}},children:{table:{type:{summary:"string | number | JSX.Element"}},control:{disable:!0},description:"Usually a text content."},onClick:{action:"clicked",description:"Callback function that is called when the tab is clicked. Returns its value.",table:{type:{summary:"(args: {event: MouseEvent; value: string}) => void"}}}}},i={tags:["!autodocs"],args:{className:"",value:"tab-1",variant:"default",onClick:B()},render:t=>t.variant==="default"?a(r,{defaultValue:"tab-1",children:[a(n,{children:[a(e,{...t,value:"tab-1",children:"Tab 1"}),a(e,{...t,value:"tab-2",children:"Tab 2"}),a(e,{...t,value:"tab-3",children:"Tab 3"})]}),a("br",{}),a(u,{value:"tab-1",children:"Tab 1 Content"}),a(u,{value:"tab-2",children:"Tab 2 Content"}),a(u,{value:"tab-3",children:"Tab 3 Content"})]}):a(r,{value:"tab-1",children:a(n,{children:a(e,{...t,value:"tab-1",variant:"single",children:"Tab 1"})})})},l={tags:["!dev"],parameters:{controls:{disable:!0},docs:{description:{story:"The 'single' variant can essentially act as a heading in cases where tabs may replace the heading."}}},render:t=>a("div",{className:"sb-column sb-gap-16",children:[a(r,{defaultValue:"tab-1",children:a(n,{children:[a(e,{variant:"default",value:"tab-1",children:"First Tab"}),a(e,{variant:"default",value:"tab-2",children:"Seconda Tab"})]})}),a(r,{value:"tab-1",children:a(n,{children:a(e,{variant:"single",value:"tab-1",children:"Single"})})})]})},s={tags:["!dev"],parameters:{controls:{disable:!0}},render:t=>{const[d,c]=N("tab-1");return a("div",{className:"sb-column sb-gap-16",children:[a(r,{defaultValue:"tab-1",onChange:o=>{c(o)},children:a(n,{children:[a(e,{variant:"default",value:"tab-1",prefix:a(T,{glyph:"settings",variant:"scaled"}),children:"First Tab"}),a(e,{variant:"default",value:"tab-2",prefix:a(T,{glyph:"search",variant:"scaled"}),children:"Second Tab"})]})}),a(r,{defaultValue:"tab-1",children:a(n,{children:a(e,{variant:"single",value:"tab-1",prefix:a(T,{glyph:"settings",variant:"scaled"}),children:"Single"})})})]})}},b={tags:["!dev"],parameters:{controls:{disable:!0}},render:t=>{const[d,c]=N("tab-1");return a("div",{className:"sb-column sb-gap-16",children:[a(r,{defaultValue:"tab-1",onChange:o=>{c(o)},children:a(n,{children:[a(e,{variant:"default",value:"tab-1",suffix:a("div",{style:{paddingLeft:"var(--pui-space-100)"},children:a(v,{context:d==="tab-1"?"neutral-brand":"brand",children:"1"})}),children:"First Tab"}),a(e,{variant:"default",value:"tab-2",suffix:a("div",{style:{paddingLeft:"var(--pui-space-100)"},children:a(v,{context:d==="tab-2"?"neutral-brand":"brand",children:"2"})}),children:"Second Tab"})]})}),a(r,{defaultValue:"tab-1",children:a(n,{children:a(e,{variant:"single",value:"tab-1",suffix:a("div",{style:{paddingLeft:"var(--pui-space-100)"},children:a(v,{context:"neutral-brand",children:"1"})}),children:"Single"})})})]})}};var p,g,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    value: "tab-1",
    variant: "default",
    onClick: fn()
  },
  render: (args: any) => {
    if (args.variant === "default") {
      return <TabContext defaultValue="tab-1">
          <TabList>
            <Tab {...args} value="tab-1">
              Tab 1
            </Tab>
            <Tab {...args} value="tab-2">
              Tab 2
            </Tab>
            <Tab {...args} value="tab-3">
              Tab 3
            </Tab>
          </TabList>
          <br />
          <TabPanel value="tab-1">Tab 1 Content</TabPanel>
          <TabPanel value="tab-2">Tab 2 Content</TabPanel>
          <TabPanel value="tab-3">Tab 3 Content</TabPanel>
        </TabContext>;
    } else {
      return <TabContext value="tab-1">
          <TabList>
            <Tab {...args} value="tab-1" variant="single">
              Tab 1
            </Tab>
          </TabList>
        </TabContext>;
    }
  }
}`,...(m=(g=i.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var f,h,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "The 'single' variant can essentially act as a heading in cases where tabs may replace the heading."
      }
    }
  },
  render: args => <div className="sb-column sb-gap-16">
      <TabContext defaultValue="tab-1">
        <TabList>
          <Tab variant="default" value="tab-1">
            First Tab
          </Tab>
          <Tab variant="default" value="tab-2">
            Seconda Tab
          </Tab>
        </TabList>
      </TabContext>
      <TabContext value="tab-1">
        <TabList>
          <Tab variant="single" value="tab-1">
            Single
          </Tab>
        </TabList>
      </TabContext>
    </div>
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,C,L;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const [activeTab, setActiveTab] = useState("tab-1");
    return <div className="sb-column sb-gap-16">
        <TabContext defaultValue="tab-1" onChange={value => {
        setActiveTab(value);
      }}>
          <TabList>
            <Tab variant="default" value="tab-1" prefix={<Icon glyph="settings" variant="scaled" />}>
              First Tab
            </Tab>
            <Tab variant="default" value="tab-2" prefix={<Icon glyph="search" variant="scaled" />}>
              Second Tab
            </Tab>
          </TabList>
        </TabContext>
        <TabContext defaultValue="tab-1">
          <TabList>
            <Tab variant="single" value="tab-1" prefix={<Icon glyph="settings" variant="scaled" />}>
              Single
            </Tab>
          </TabList>
        </TabContext>
      </div>;
  }
}`,...(L=(C=s.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var S,V,P;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const [activeTab, setActiveTab] = useState("tab-1");
    return <div className="sb-column sb-gap-16">
        <TabContext defaultValue="tab-1" onChange={value => {
        setActiveTab(value);
      }}>
          <TabList>
            <Tab variant="default" value="tab-1" suffix={<div style={{
            paddingLeft: "var(--pui-space-100)"
          }}>
                  <Badge context={activeTab === "tab-1" ? "neutral-brand" : "brand"}>
                    1
                  </Badge>
                </div>}>
              First Tab
            </Tab>
            <Tab variant="default" value="tab-2" suffix={<div style={{
            paddingLeft: "var(--pui-space-100)"
          }}>
                  <Badge context={activeTab === "tab-2" ? "neutral-brand" : "brand"}>
                    2
                  </Badge>
                </div>}>
              Second Tab
            </Tab>
          </TabList>
        </TabContext>
        <TabContext defaultValue="tab-1">
          <TabList>
            <Tab variant="single" value="tab-1" suffix={<div style={{
            paddingLeft: "var(--pui-space-100)"
          }}>
                  <Badge context="neutral-brand">1</Badge>
                </div>}>
              Single
            </Tab>
          </TabList>
        </TabContext>
      </div>;
  }
}`,...(P=(V=b.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};const M=["Demo","Variant","Prefix","Suffix"];export{i as Demo,s as Prefix,b as Suffix,l as Variant,M as __namedExportsOrder,_ as default};
