import{u as a}from"./hooks.module-6Sbq__eq.js";import{f as L}from"./index-B4E_jmCM.js";import{a as t,b as r,T as e}from"./TabList-DMzPZMVR.js";import{S as i}from"./Section-f0GkCzPh.js";import{I as n}from"./Icon-C6_npEhI.js";import{l}from"./link-BlSd8q6h.js";import{h as N,i as V}from"./info-queW7RjB.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./Text-BbQ_b1VF.js";const k={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Tab variant="default">{children}</Tab>

<Tab variant="single">{children}</Tab>
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:[a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:[a(e,{variant:"default",id:"tab-1",children:"First Tab"}),a(e,{variant:"default",id:"tab-2",children:"Second Tab"})]})})}),a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:a(e,{variant:"single",id:"tab-1",children:"Single"})})})})]})},E={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Tab prefix={
    <Icon glyph={link} />
  }
>
  {children}
</Tab>
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:[a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:[a(e,{variant:"default",id:"tab-1",prefix:a(n,{glyph:l}),children:"First Tab"}),a(e,{variant:"default",id:"tab-2",prefix:a(n,{glyph:l}),children:"Second Tab"})]})})}),a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:a(e,{variant:"single",id:"tab-1",prefix:a(n,{glyph:l}),children:"Single"})})})})]})},F={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Tab suffix={
    <Icon glyph={link} />
  }
>
  {children}
</Tab>
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:[a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:[a(e,{variant:"default",id:"tab-1",suffix:a(n,{glyph:l}),children:"First Tab"}),a(e,{variant:"default",id:"tab-2",suffix:a(n,{glyph:l}),children:"Second Tab"})]})})}),a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:a(e,{variant:"single",id:"tab-1",suffix:a(n,{glyph:l}),children:"Single"})})})})]})},D={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<TabContext defaultActiveId="tab-1">
	<TabList>
		<Tab id="tab-1">
			<Icon glyph={home} />
		</Tab>
		<Tab id="tab-2">
			<Icon glyph={info} />
		</Tab>
	</TabList>
</TabContext>
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:[a(e,{variant:"default",id:"tab-1",children:a(n,{glyph:N})}),a(e,{variant:"default",id:"tab-2",children:a(n,{glyph:V})})]})})})})},Q={title:"Components/Tab",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"The component is always used within <a href='/docs/components-tabcontext--docs'>`<TabContext/>`</a>, and optionally in combination with <a href='/docs/components-tablist--docs'>`<TabList/>`</a>."}}},argTypes:{id:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"string"}}},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["default","single"],defaultValue:{summary:"default"}},prefix:{control:{disable:!0},description:"Element displayed before children.",table:{type:{summary:"preact.ComponentChildren"}}},suffix:{control:{disable:!0},description:"Element displayed after children.",table:{type:{summary:"preact.ComponentChildren"}}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},onClick:{table:{type:{summary:"(args) => void",detail:`
args: {
  event: MouseEvent
  id: string
}
`}}}}},s={tags:["!autodocs"],args:{className:"",variant:"default",onClick:L()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
        `}}},render:d=>d.variant==="default"?a("div",{className:"sb-column sb-width-full",children:a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:[a(e,{...d,id:"tab-1",children:"Tab 1"}),a(e,{...d,id:"tab-2",children:"Tab 2"}),a(e,{...d,id:"tab-3",children:"Tab 3"})]})})})}):a("div",{className:"sb-column sb-width-full",children:a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:a(e,{...d,id:"tab-1",variant:"single",children:"Single"})})})})})},o=k,c=E,b=F,u=D;var p,m,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var T,f,g;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:"VariantStory",...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,x,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:"PrefixStory",...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,C,I;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:"SuffixStory",...(I=(C=b.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var w,P,A;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:"CustomChildrenStory",...(A=(P=u.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const R=["Demo","Variant","Prefix","Suffix","CustomChildren"];export{u as CustomChildren,s as Demo,c as Prefix,b as Suffix,o as Variant,R as __namedExportsOrder,Q as default};
