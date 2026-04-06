import{u as a}from"./hooks.module-BMDhD8C6.js";import{f as P}from"./index-Bk8NU0jy.js";import{T as t,a as r,b as e}from"./TabList-Deyu40JN.js";import{S as i}from"./Section-BpHcE_3_.js";import{I as n}from"./Icon-CwUXZnq_.js";import{l}from"./link-DazgrNek.js";import"./preact.module-DhLccOoG.js";import"./typedForwardRef-BBQ-rOPo.js";import"./compat.module-BB5nNOI3.js";import"./Text-DSWvyrh8.js";const w={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Tab variant="default">{children}</Tab>

<Tab variant="single">{children}</Tab>
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:[a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:[a(e,{variant:"default",id:"tab-1",children:"First Tab"}),a(e,{variant:"default",id:"tab-2",children:"Second Tab"})]})})}),a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:a(e,{variant:"single",id:"tab-1",children:"Single"})})})})]})},C={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Tab prefix={
    <Icon glyph={link} />
  }
>
  {children}
</Tab>
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:[a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:[a(e,{variant:"default",id:"tab-1",prefix:a(n,{glyph:l}),children:"First Tab"}),a(e,{variant:"default",id:"tab-2",prefix:a(n,{glyph:l}),children:"Second Tab"})]})})}),a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:a(e,{variant:"single",id:"tab-1",prefix:a(n,{glyph:l}),children:"Single"})})})})]})},A={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Tab suffix={
    <Icon glyph={link} />
  }
>
  {children}
</Tab>
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:[a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:[a(e,{variant:"default",id:"tab-1",suffix:a(n,{glyph:l}),children:"First Tab"}),a(e,{variant:"default",id:"tab-2",suffix:a(n,{glyph:l}),children:"Second Tab"})]})})}),a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:a(e,{variant:"single",id:"tab-1",suffix:a(n,{glyph:l}),children:"Single"})})})})]})},j={title:"Components/Tab",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"The component is always used within <a href='/docs/components-tabcontext--docs'>`<TabContext/>`</a>, and optionally in combination with <a href='/docs/components-tablist--docs'>`<TabList/>`</a>."}}},argTypes:{id:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"string"}}},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["default","single"],defaultValue:{summary:"default"}},prefix:{control:{disable:!0},description:"Element displayed before children.",table:{type:{summary:"preact.ComponentChildren"}}},suffix:{control:{disable:!0},description:"Element displayed after children.",table:{type:{summary:"preact.ComponentChildren"}}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},onClick:{table:{type:{summary:"(args) => void",detail:`
args: {
  event: MouseEvent
  id: string
}
`}}}}},s={tags:["!autodocs"],args:{className:"",variant:"default",onClick:P()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TabContext defaultActiveId="tab-1">

  <TabList>
    <Tab id="tab-1" {...args}>{children}</Tab>
    <Tab id="tab-2" {...args}>{children}</Tab>
    <Tab id="tab-3" {...args}>{children}</Tab>
  </TabList>

  <TabPanel tabId="tab-1">Tab 1 Panel</TabPanel>
  <TabPanel tabId="tab-2">Tab 2 Panel</TabPanel>
  <TabPanel tabId="tab-3">Tab 3 Panel</TabPanel>
  
</TabContext>
        `}}},render:d=>d.variant==="default"?a("div",{className:"sb-column sb-width-full",children:a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:[a(e,{...d,id:"tab-1",children:"Tab 1"}),a(e,{...d,id:"tab-2",children:"Tab 2"}),a(e,{...d,id:"tab-3",children:"Tab 3"})]})})})}):a("div",{className:"sb-column sb-width-full",children:a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:a(e,{...d,id:"tab-1",variant:"single",children:"Single"})})})})})},o=w,c=C,b=A;var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    className: '',
    variant: 'default',
    onClick: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<TabContext defaultActiveId="tab-1">

  <TabList>
    <Tab id="tab-1" {...args}>{children}</Tab>
    <Tab id="tab-2" {...args}>{children}</Tab>
    <Tab id="tab-3" {...args}>{children}</Tab>
  </TabList>

  <TabPanel tabId="tab-1">Tab 1 Panel</TabPanel>
  <TabPanel tabId="tab-2">Tab 2 Panel</TabPanel>
  <TabPanel tabId="tab-3">Tab 3 Panel</TabPanel>
  
</TabContext>
        \`
      }
    }
  },
  render: args => {
    // @ts-expect-error Storybook control value
    if (args.variant === 'default') {
      return <div className="sb-column sb-width-full">
          <TabContext defaultActiveId="tab-1">
            <Section>
              <TabList>
                <Tab {...args} id="tab-1">
                  Tab 1
                </Tab>
                <Tab {...args} id="tab-2">
                  Tab 2
                </Tab>
                <Tab {...args} id="tab-3">
                  Tab 3
                </Tab>
              </TabList>
            </Section>
          </TabContext>
        </div>;
    } else {
      return <div className="sb-column sb-width-full">
          <TabContext defaultActiveId="tab-1">
            <Section>
              <TabList>
                <Tab {...args} id="tab-1" variant="single">
                  Single
                </Tab>
              </TabList>
            </Section>
          </TabContext>
        </div>;
    }
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var T,f,h;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:"VariantStory",...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,v,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:"PrefixStory",...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,S,I;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:"SuffixStory",...(I=(S=b.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const q=["Demo","Variant","Prefix","Suffix"];export{s as Demo,c as Prefix,b as Suffix,o as Variant,q as __namedExportsOrder,j as default};
