import{u as e,d as M}from"./hooks.module-Dxk9uxGs.js";import{f as N}from"./index-BWINGljf.js";import{c as a,T as i,b as r,a as u}from"./TabPanel-BxaS1c0m.js";import{B as v}from"./Badge-DX80nvIq.js";import{I as T}from"./Icon-C8lq2hDK.js";import{S as t}from"./Section-45ajfN6P.js";import{T as f}from"./Text-Dvytwbdg.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-cP-mn0Xe.js";import"./compat.module-c0s5p6eE.js";const O={title:"Components/Tab",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Always used within &lt;TabContext&gt;, optionally in combination with &lt;TabList&gt; and &lt;TabPanel&gt;"}}},argTypes:{className:{control:{type:"text"}},value:{control:{disable:!0},table:{type:{summary:"string"}},description:"Value of the tab."},variant:{control:{type:"radio"},options:["default","single"],defaultValue:"default"},prefix:{table:{type:{summary:"JSX.Element"}},description:"Element inserted before children.",control:{disable:!0}},suffix:{table:{type:{summary:"JSX.Element"}},description:"Element inserted after children.",control:{disable:!0}},children:{table:{type:{summary:"string | number | JSX.Element"}},control:{disable:!0},description:"Usually a text content."},onClick:{action:"clicked",description:"Callback function that is called when the tab is clicked. Returns its value.",table:{type:{summary:"(args: {event: MouseEvent; value: string}) => void"}}}}},l={tags:["!autodocs"],args:{className:"",value:"tab-1",variant:"default",onClick:N()},parameters:{viewport:{defaultViewport:"large"}},render:n=>n.variant==="default"?e("div",{className:"sb-column sb-width-full",children:e(i,{defaultValue:"tab-1",children:[e(t,{children:e(r,{children:[e(a,{...n,value:"tab-1",children:"Tab 1"}),e(a,{...n,value:"tab-2",children:"Tab 2"}),e(a,{...n,value:"tab-3",children:"Tab 3"})]})}),e(t,{children:[e(u,{value:"tab-1",children:e(f,{children:"Tab 1 Panel"})}),e(u,{value:"tab-2",children:e(f,{children:"Tab 2 Panel"})}),e(u,{value:"tab-3",children:e(f,{children:"Tab 3 Panel"})})]})]})}):e("div",{className:"sb-column sb-width-full",children:e(i,{value:"tab-1",children:e(t,{children:e(r,{children:e(a,{...n,value:"tab-1",variant:"single",children:"Single"})})})})})},s={parameters:{controls:{disable:!0},docs:{description:{story:"The 'single' variant can essentially act as a heading in cases where tabs may replace the heading."}},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:[e(i,{defaultValue:"tab-1",children:e(t,{children:e(r,{children:[e(a,{variant:"default",value:"tab-1",children:"First Tab"}),e(a,{variant:"default",value:"tab-2",children:"Second Tab"})]})})}),e(i,{value:"tab-1",children:e(t,{children:e(r,{children:e(a,{variant:"single",value:"tab-1",children:"Single"})})})})]})},d={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[n,o]=M("tab-1");return e("div",{className:"sb-column sb-width-full",children:[e(i,{value:n,onChange:b=>{o(b.value)},children:e(t,{children:e(r,{children:[e(a,{variant:"default",value:"tab-1",prefix:e(T,{glyph:"settings",variant:"scaled",intent:"neutral",intentModifiers:"default",interactive:!0}),children:"First Tab"}),e(a,{variant:"default",value:"tab-2",prefix:e(T,{glyph:"search",variant:"scaled",intent:"neutral",intentModifiers:"default",interactive:!0}),children:"Second Tab"})]})})}),e(i,{defaultValue:"tab-1",children:e(t,{children:e(r,{children:e(a,{variant:"single",value:"tab-1",prefix:e(T,{glyph:"settings",variant:"scaled",intent:"neutral",intentModifiers:"default"}),children:"Single"})})})})]})}},c={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[n,o]=M("tab-1");return e("div",{className:"sb-column sb-width-full",children:[e(i,{value:n,onChange:b=>{o(b.value)},children:e(t,{children:e(r,{children:[e(a,{variant:"default",value:"tab-1",suffix:e("div",{style:{paddingLeft:"var(--pui-spacing-100)"},children:e(v,{intent:n==="tab-1"?"neutral":"brand",intentModifiers:"default",children:"1"})}),children:"First Tab"}),e(a,{variant:"default",value:"tab-2",suffix:e("div",{style:{paddingLeft:"var(--pui-spacing-100)"},children:e(v,{intent:n==="tab-2"?"neutral":"brand",intentModifiers:"default",children:"2"})}),children:"Second Tab"})]})})}),e(i,{defaultValue:"tab-1",children:e(t,{children:e(r,{children:e(a,{variant:"single",value:"tab-1",suffix:e("div",{style:{paddingLeft:"var(--pui-spacing-100)"},children:e(v,{intent:"neutral",intentModifiers:"default",children:"1"})}),children:"Single"})})})})]})}};var p,h,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(h=l.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,x,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var y,w,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
              <Tab variant="default" value="tab-1" prefix={<Icon glyph="settings" variant="scaled" intent="neutral" intentModifiers="default" interactive />}>
                First Tab
              </Tab>
              <Tab variant="default" value="tab-2" prefix={<Icon glyph="search" variant="scaled" intent="neutral" intentModifiers="default" interactive />}>
                Second Tab
              </Tab>
            </TabList>
          </Section>
        </TabContext>

        <TabContext defaultValue="tab-1">
          <Section>
            <TabList>
              <Tab variant="single" value="tab-1" prefix={<Icon glyph="settings" variant="scaled" intent="neutral" intentModifiers="default" />}>
                Single
              </Tab>
            </TabList>
          </Section>
        </TabContext>
      </div>;
  }
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var L,V,P;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(P=(V=c.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};const R=["Demo","Variant","Prefix","Suffix"];export{l as Demo,d as Prefix,c as Suffix,s as Variant,R as __namedExportsOrder,O as default};
