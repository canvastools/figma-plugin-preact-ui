import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-B_u_rUE0.js";import{Vn as r,_n as i,b as a,c as o,fn as s,l as c,o as l,qn as u,t as d,u as f,yn as p}from"./src-CnP2aPTs.js";var m,h=e((()=>{d(),c(),n(),m={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Tab variant="default">{children}</Tab>

<Tab variant="single">{children}</Tab>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:[t(f,{defaultActiveId:`tab-1`,children:t(a,{children:t(l,{children:[t(o,{variant:`default`,id:`tab-1`,children:`First Tab`}),t(o,{variant:`default`,id:`tab-2`,children:`Second Tab`})]})})}),t(f,{defaultActiveId:`tab-1`,children:t(a,{children:t(l,{children:t(o,{variant:`single`,id:`tab-1`,children:`Single`})})})})]})}})),g,_=e((()=>{d(),c(),n(),g={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Tab prefix={
    <Icon glyph={link} />
  }
>
  {children}
</Tab>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:[t(f,{defaultActiveId:`tab-1`,children:t(a,{children:t(l,{children:[t(o,{variant:`default`,id:`tab-1`,prefix:t(r,{glyph:s}),children:`First Tab`}),t(o,{variant:`default`,id:`tab-2`,prefix:t(r,{glyph:s}),children:`Second Tab`})]})})}),t(f,{defaultActiveId:`tab-1`,children:t(a,{children:t(l,{children:t(o,{variant:`single`,id:`tab-1`,prefix:t(r,{glyph:s}),children:`Single`})})})})]})}})),v,y=e((()=>{d(),c(),n(),v={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Tab suffix={
    <Icon glyph={link} />
  }
>
  {children}
</Tab>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:[t(f,{defaultActiveId:`tab-1`,children:t(a,{children:t(l,{children:[t(o,{variant:`default`,id:`tab-1`,suffix:t(r,{glyph:s}),children:`First Tab`}),t(o,{variant:`default`,id:`tab-2`,suffix:t(r,{glyph:s}),children:`Second Tab`})]})})}),t(f,{defaultActiveId:`tab-1`,children:t(a,{children:t(l,{children:t(o,{variant:`single`,id:`tab-1`,suffix:t(r,{glyph:s}),children:`Single`})})})})]})}})),b,x=e((()=>{d(),c(),n(),b={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(f,{defaultActiveId:`tab-1`,children:t(a,{children:t(l,{children:[t(o,{variant:`default`,id:`tab-1`,children:t(r,{glyph:p})}),t(o,{variant:`default`,id:`tab-2`,children:t(r,{glyph:i})})]})})})})}})),S,C,w,T,E,D,O,k;e((()=>{h(),_(),y(),x(),d(),c(),n(),{fn:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/Tab`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:"The component is always used within <a href='/docs/components-tabcontext--docs'>`<TabContext/>`</a>, and optionally in combination with <a href='/docs/components-tablist--docs'>`<TabList/>`</a>."}}},argTypes:{id:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`string`}}},className:{control:{type:`text`}},variant:{control:{type:`radio`},options:[`default`,`single`],table:{defaultValue:{summary:`default`}}},prefix:{control:{disable:!0},description:`Element displayed before children.`,table:{type:{summary:`preact.ComponentChildren`}}},suffix:{control:{disable:!0},description:`Element displayed after children.`,table:{type:{summary:`preact.ComponentChildren`}}},tooltip:{control:{type:`text`},description:`Tooltip content.`,table:{type:{summary:`preact.ComponentChildren`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},tabIndex:{control:{type:`number`},description:`Tab order of the tab button. Omit for roving tabindex (active: 0, inactive: -1).`,table:{type:{summary:`number`}}},onClick:{table:{type:{summary:`(args) => void`,detail:`
args: {
  event: MouseEvent
  id: string
}
`}}}}},w={args:{className:``,variant:`default`,tooltip:`Tab tooltip`,onClick:S()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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
        `}}},render:e=>e.variant==="default"?t(`div`,{className:`sb-column sb-width-full`,children:t(u,{children:t(f,{defaultActiveId:`tab-1`,children:t(a,{children:t(l,{children:[t(o,{...e,id:`tab-1`,children:`Tab 1`}),t(o,{...e,id:`tab-2`,children:`Tab 2`}),t(o,{...e,id:`tab-3`,children:`Tab 3`})]})})})})}):t(`div`,{className:`sb-column sb-width-full`,children:t(u,{children:t(f,{defaultActiveId:`tab-1`,children:t(a,{children:t(l,{children:t(o,{...e,id:`tab-1`,variant:`single`,children:`Single`})})})})})})},T=m,E=g,D=v,O=b,w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`VariantStory`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`PrefixStory`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`SuffixStory`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`CustomChildrenStory`,...O.parameters?.docs?.source}}},k=[`Demo`,`Variant`,`Prefix`,`Suffix`,`CustomChildren`]}))();export{O as CustomChildren,w as Demo,E as Prefix,D as Suffix,T as Variant,k as __namedExportsOrder,C as default};