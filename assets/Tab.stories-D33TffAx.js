import{u as a}from"./hooks.module-DDuEt2mE.js";import{f as k}from"./index-B4E_jmCM.js";import{T as t,a as r,b as e}from"./TabList-D5m5vtc4.js";import{S as i}from"./Section-msxZwlsp.js";import{I as o}from"./Icon-C_1AiDxm.js";import{l as n}from"./link-DCFG2DBQ.js";import{h as N,i as V}from"./info-BBp1ycsX.js";import{a as u}from"./Tooltip-2n7DDmmb.js";import"./preact.module-D68vdB8i.js";import"./Text-BooB5DEX.js";import"./typedForwardRef-eUJP59ez.js";import"./compat.module-AmaJGl25.js";import"./TooltipContainer-BRY08nvC.js";const E={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Tab variant="default">{children}</Tab>

<Tab variant="single">{children}</Tab>
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:[a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:[a(e,{variant:"default",id:"tab-1",children:"First Tab"}),a(e,{variant:"default",id:"tab-2",children:"Second Tab"})]})})}),a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:a(e,{variant:"single",id:"tab-1",children:"Single"})})})})]})},F={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Tab prefix={
    <Icon glyph={link} />
  }
>
  {children}
</Tab>
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:[a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:[a(e,{variant:"default",id:"tab-1",prefix:a(o,{glyph:n}),children:"First Tab"}),a(e,{variant:"default",id:"tab-2",prefix:a(o,{glyph:n}),children:"Second Tab"})]})})}),a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:a(e,{variant:"single",id:"tab-1",prefix:a(o,{glyph:n}),children:"Single"})})})})]})},D={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Tab suffix={
    <Icon glyph={link} />
  }
>
  {children}
</Tab>
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:[a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:[a(e,{variant:"default",id:"tab-1",suffix:a(o,{glyph:n}),children:"First Tab"}),a(e,{variant:"default",id:"tab-2",suffix:a(o,{glyph:n}),children:"Second Tab"})]})})}),a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:a(e,{variant:"single",id:"tab-1",suffix:a(o,{glyph:n}),children:"Single"})})})})]})},O={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>a("div",{className:"sb-column sb-width-full",children:a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:[a(e,{variant:"default",id:"tab-1",children:a(o,{glyph:N})}),a(e,{variant:"default",id:"tab-2",children:a(o,{glyph:V})})]})})})})},W={title:"Components/Tab",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"The component is always used within <a href='/docs/components-tabcontext--docs'>`<TabContext/>`</a>, and optionally in combination with <a href='/docs/components-tablist--docs'>`<TabList/>`</a>."}}},argTypes:{id:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"string"}}},className:{control:{type:"text"}},variant:{control:{type:"radio"},options:["default","single"],defaultValue:{summary:"default"}},prefix:{control:{disable:!0},description:"Element displayed before children.",table:{type:{summary:"preact.ComponentChildren"}}},suffix:{control:{disable:!0},description:"Element displayed after children.",table:{type:{summary:"preact.ComponentChildren"}}},tooltip:{control:{type:"text"},description:"Tooltip content.",table:{type:{summary:"preact.ComponentChildren"}}},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},tabIndex:{control:{type:"number"},description:"Tab order of the tab button. Omit for roving tabindex (active: 0, inactive: -1).",table:{type:{summary:"number"}}},onClick:{table:{type:{summary:"(args) => void",detail:`
args: {
  event: MouseEvent
  id: string
}
`}}}}},d={tags:["!autodocs"],args:{className:"",variant:"default",tooltip:"Tab tooltip",onClick:k()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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

// Use TooltipContext to make tooltips work

<TooltipContext>
  <TabContext defaultActiveId="tab-1">
    ...
  </TabContext>
</TooltipContext>
        `}}},render:l=>l.variant==="default"?a("div",{className:"sb-column sb-width-full",children:a(u,{children:a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:[a(e,{...l,id:"tab-1",children:"Tab 1"}),a(e,{...l,id:"tab-2",children:"Tab 2"}),a(e,{...l,id:"tab-3",children:"Tab 3"})]})})})})}):a("div",{className:"sb-column sb-width-full",children:a(u,{children:a(t,{defaultActiveId:"tab-1",children:a(i,{children:a(r,{children:a(e,{...l,id:"tab-1",variant:"single",children:"Single"})})})})})})},s=E,c=F,b=D,p=O;var m,T,h;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    className: '',
    variant: 'default',
    tooltip: 'Tab tooltip',
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

// Use TooltipContext to make tooltips work

<TooltipContext>
  <TabContext defaultActiveId="tab-1">
    ...
  </TabContext>
</TooltipContext>
        \`
      }
    }
  },
  render: args => {
    // @ts-expect-error Storybook control value
    if (args.variant === 'default') {
      return <div className="sb-column sb-width-full">
          <TooltipContext>
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
          </TooltipContext>
        </div>;
    } else {
      return <div className="sb-column sb-width-full">
          <TooltipContext>
            <TabContext defaultActiveId="tab-1">
              <Section>
                <TabList>
                  <Tab {...args} id="tab-1" variant="single">
                    Single
                  </Tab>
                </TabList>
              </Section>
            </TabContext>
          </TooltipContext>
        </div>;
    }
  }
}`,...(h=(T=d.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var f,g,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"VariantStory",...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,C,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"PrefixStory",...(y=(C=c.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var S,I,w;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:"SuffixStory",...(w=(I=b.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var P,A,L;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:"CustomChildrenStory",...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const X=["Demo","Variant","Prefix","Suffix","CustomChildren"];export{p as CustomChildren,d as Demo,c as Prefix,b as Suffix,s as Variant,X as __namedExportsOrder,W as default};
