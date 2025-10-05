import{u as e,d as N}from"./hooks.module-Dxk9uxGs.js";import{f as k}from"./index-BWINGljf.js";import{c as a,T as i,b as r,a as u}from"./TabPanel-B7SigB2y.js";import{S as t}from"./Section-Jgq_uI8f.js";import{T as v}from"./Text-C438qO9S.js";import{I as T}from"./Icon-Btq4UltS.js";import{B as f}from"./Badge-DPBljnKj.js";import{s as p}from"./settings-CIc1R3a7.js";import{s as B}from"./search-GiDdSaGr.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";const q={title:"Components/Tab",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Always used within &lt;TabContext&gt;, optionally in combination with &lt;TabList&gt; and &lt;TabPanel&gt;"}}},argTypes:{className:{control:{type:"text"}},value:{control:{disable:!0},table:{type:{summary:"string"}},description:"Value of the tab."},variant:{control:{type:"radio"},options:["default","single"],defaultValue:{summary:"default"}},prefix:{table:{type:{summary:"JSX.Element"}},description:"Element inserted before children.",control:{disable:!0}},suffix:{table:{type:{summary:"JSX.Element"}},description:"Element inserted after children.",control:{disable:!0}},children:{table:{type:{summary:"string | number | JSX.Element"}},control:{disable:!0},description:"Usually a text content."},onClick:{action:"clicked",description:"Callback when the tab is clicked. Returns its value.",table:{type:{summary:"(args: {event: MouseEvent; value: string}) => void"}}}}},l={tags:["!autodocs"],args:{className:"",value:"tab-1",variant:"default",onClick:k()},parameters:{viewport:{defaultViewport:"large"}},render:n=>n.variant==="default"?e("div",{className:"sb-column sb-width-full",children:e(i,{defaultValue:"tab-1",children:[e(t,{children:e(r,{children:[e(a,{...n,value:"tab-1",children:"Tab 1"}),e(a,{...n,value:"tab-2",children:"Tab 2"}),e(a,{...n,value:"tab-3",children:"Tab 3"})]})}),e(t,{children:[e(u,{value:"tab-1",children:e(v,{children:"Tab 1 Panel"})}),e(u,{value:"tab-2",children:e(v,{children:"Tab 2 Panel"})}),e(u,{value:"tab-3",children:e(v,{children:"Tab 3 Panel"})})]})]})}):e("div",{className:"sb-column sb-width-full",children:e(i,{value:"tab-1",children:e(t,{children:e(r,{children:e(a,{...n,value:"tab-1",variant:"single",children:"Single"})})})})})},s={parameters:{controls:{disable:!0},docs:{description:{story:"The 'single' variant can essentially act as a heading in cases where tabs may replace the heading."}},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:[e(i,{defaultValue:"tab-1",children:e(t,{children:e(r,{children:[e(a,{variant:"default",value:"tab-1",children:"First Tab"}),e(a,{variant:"default",value:"tab-2",children:"Second Tab"})]})})}),e(i,{value:"tab-1",children:e(t,{children:e(r,{children:e(a,{variant:"single",value:"tab-1",children:"Single"})})})})]})},d={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[n,o]=N("tab-1");return e("div",{className:"sb-column sb-width-full",children:[e(i,{value:n,onChange:b=>{o(b.value)},children:e(t,{children:e(r,{children:[e(a,{variant:"default",value:"tab-1",prefix:e(T,{glyph:p,variant:"scaled",intent:"neutral",intentModifiers:"default",interactive:!0}),children:"First Tab"}),e(a,{variant:"default",value:"tab-2",prefix:e(T,{glyph:B,variant:"scaled",intent:"neutral",intentModifiers:"default",interactive:!0}),children:"Second Tab"})]})})}),e(i,{defaultValue:"tab-1",children:e(t,{children:e(r,{children:e(a,{variant:"single",value:"tab-1",prefix:e(T,{glyph:p,variant:"scaled",intent:"neutral",intentModifiers:"default"}),children:"Single"})})})})]})}},c={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[n,o]=N("tab-1");return e("div",{className:"sb-column sb-width-full",children:[e(i,{value:n,onChange:b=>{o(b.value)},children:e(t,{children:e(r,{children:[e(a,{variant:"default",value:"tab-1",suffix:e("div",{style:{paddingLeft:"var(--pui-spacing-100)"},children:e(f,{intent:n==="tab-1"?"neutral":"brand",intentModifiers:"default",children:"1"})}),children:"First Tab"}),e(a,{variant:"default",value:"tab-2",suffix:e("div",{style:{paddingLeft:"var(--pui-spacing-100)"},children:e(f,{intent:n==="tab-2"?"neutral":"brand",intentModifiers:"default",children:"2"})}),children:"Second Tab"})]})})}),e(i,{defaultValue:"tab-1",children:e(t,{children:e(r,{children:e(a,{variant:"single",value:"tab-1",suffix:e("div",{style:{paddingLeft:"var(--pui-spacing-100)"},children:e(f,{intent:"neutral",intentModifiers:"default",children:"1"})}),children:"Single"})})})})]})}};var h,m,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    value: "tab-1",
    variant: "default",
    onClick: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => {
    // @ts-expect-error: Storybook types hack
    if (args.variant === "default") {
      return <div className="sb-column sb-width-full">
          <TabContext defaultValue="tab-1">
            <Section>
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
    } else {
      return <div className="sb-column sb-width-full">
          <TabContext value="tab-1">
            <Section>
              <TabList>
                <Tab {...args} value="tab-1" variant="single">
                  Single
                </Tab>
              </TabList>
            </Section>
          </TabContext>
        </div>;
    }
  }
}`,...(g=(m=l.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,S,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "The 'single' variant can essentially act as a heading in cases where tabs may replace the heading."
      }
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <TabContext defaultValue="tab-1">
        <Section>
          <TabList>
            <Tab variant="default" value="tab-1">
              First Tab
            </Tab>
            <Tab variant="default" value="tab-2">
              Second Tab
            </Tab>
          </TabList>
        </Section>
      </TabContext>
      <TabContext value="tab-1">
        <Section>
          <TabList>
            <Tab variant="single" value="tab-1">
              Single
            </Tab>
          </TabList>
        </Section>
      </TabContext>
    </div>
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var w,C,L;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
        <TabContext value={activeTab} onChange={args => {
        setActiveTab(args.value);
      }}>
          <Section>
            <TabList>
              <Tab variant="default" value="tab-1" prefix={<Icon glyph={glyphs.settings} variant="scaled" intent="neutral" intentModifiers="default" interactive />}>
                First Tab
              </Tab>
              <Tab variant="default" value="tab-2" prefix={<Icon glyph={glyphs.search} variant="scaled" intent="neutral" intentModifiers="default" interactive />}>
                Second Tab
              </Tab>
            </TabList>
          </Section>
        </TabContext>

        <TabContext defaultValue="tab-1">
          <Section>
            <TabList>
              <Tab variant="single" value="tab-1" prefix={<Icon glyph={glyphs.settings} variant="scaled" intent="neutral" intentModifiers="default" />}>
                Single
              </Tab>
            </TabList>
          </Section>
        </TabContext>
      </div>;
  }
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var V,P,M;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        <TabContext value={activeTab} onChange={args => {
        setActiveTab(args.value);
      }}>
          <Section>
            <TabList>
              <Tab variant="default" value="tab-1" suffix={<div style={{
              paddingLeft: "var(--pui-spacing-100)"
            }}>
                    <Badge intent={activeTab === "tab-1" ? "neutral" : "brand"} intentModifiers="default">
                      1
                    </Badge>
                  </div>}>
                First Tab
              </Tab>
              <Tab variant="default" value="tab-2" suffix={<div style={{
              paddingLeft: "var(--pui-spacing-100)"
            }}>
                    <Badge intent={activeTab === "tab-2" ? "neutral" : "brand"} intentModifiers="default">
                      2
                    </Badge>
                  </div>}>
                Second Tab
              </Tab>
            </TabList>
          </Section>
        </TabContext>

        <TabContext defaultValue="tab-1">
          <Section>
            <TabList>
              <Tab variant="single" value="tab-1" suffix={<div style={{
              paddingLeft: "var(--pui-spacing-100)"
            }}>
                    <Badge intent="neutral" intentModifiers="default">
                      1
                    </Badge>
                  </div>}>
                Single
              </Tab>
            </TabList>
          </Section>
        </TabContext>
      </div>;
  }
}`,...(M=(P=c.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};const z=["Demo","Variant","Prefix","Suffix"];export{l as Demo,d as Prefix,c as Suffix,s as Variant,z as __namedExportsOrder,q as default};
