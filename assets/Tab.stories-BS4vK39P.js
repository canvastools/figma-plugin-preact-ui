import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{i as r,r as i}from"./Tooltip-DsjGtgh5.js";import{n as a,t as o}from"./Icon-Brb725mi.js";import{i as s,n as c,r as l,t as u}from"./info-Bg1Mnm6Y.js";import{n as d,t as f}from"./link-DAdg43gf.js";import{n as p,t as m}from"./Section-DkP7unPH.js";import{a as h,i as g,n as _,o as v,r as y,t as b}from"./TabList-Cpn93ydS.js";var x;function S(){return(S=e((()=>{v(),p(),_(),g(),n(),x={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Tab variant="default">{children}</Tab>

<Tab variant="single">{children}</Tab>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:[t(h,{defaultActiveId:`tab-1`,children:t(m,{children:t(b,{children:[t(y,{variant:`default`,id:`tab-1`,children:`First Tab`}),t(y,{variant:`default`,id:`tab-2`,children:`Second Tab`})]})})}),t(h,{defaultActiveId:`tab-1`,children:t(m,{children:t(b,{children:t(y,{variant:`single`,id:`tab-1`,children:`Single`})})})})]})}})))()}var C;function w(){return(w=e((()=>{v(),p(),_(),a(),f(),g(),n(),C={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Tab prefix={
    <Icon glyph={link} />
  }
>
  {children}
</Tab>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:[t(h,{defaultActiveId:`tab-1`,children:t(m,{children:t(b,{children:[t(y,{variant:`default`,id:`tab-1`,prefix:t(o,{glyph:d}),children:`First Tab`}),t(y,{variant:`default`,id:`tab-2`,prefix:t(o,{glyph:d}),children:`Second Tab`})]})})}),t(h,{defaultActiveId:`tab-1`,children:t(m,{children:t(b,{children:t(y,{variant:`single`,id:`tab-1`,prefix:t(o,{glyph:d}),children:`Single`})})})})]})}})))()}var T;function E(){return(E=e((()=>{v(),p(),_(),a(),f(),g(),n(),T={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Tab suffix={
    <Icon glyph={link} />
  }
>
  {children}
</Tab>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:[t(h,{defaultActiveId:`tab-1`,children:t(m,{children:t(b,{children:[t(y,{variant:`default`,id:`tab-1`,suffix:t(o,{glyph:d}),children:`First Tab`}),t(y,{variant:`default`,id:`tab-2`,suffix:t(o,{glyph:d}),children:`Second Tab`})]})})}),t(h,{defaultActiveId:`tab-1`,children:t(m,{children:t(b,{children:t(y,{variant:`single`,id:`tab-1`,suffix:t(o,{glyph:d}),children:`Single`})})})})]})}})))()}var D;function O(){return(O=e((()=>{v(),p(),_(),a(),s(),c(),g(),n(),D={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(h,{defaultActiveId:`tab-1`,children:t(m,{children:t(b,{children:[t(y,{variant:`default`,id:`tab-1`,children:t(o,{glyph:l})}),t(y,{variant:`default`,id:`tab-2`,children:t(o,{glyph:u})})]})})})})}})))()}var k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{S(),w(),E(),O(),v(),_(),p(),r(),g(),n(),{fn:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/Tab`,component:y,tags:[`autodocs`],parameters:{docs:{description:{component:"The component is always used within <a href='/docs/components-tabcontext--docs'>`<TabContext/>`</a>, and optionally in combination with <a href='/docs/components-tablist--docs'>`<TabList/>`</a>."}}},argTypes:{id:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`string`}}},className:{control:{type:`text`}},variant:{control:{type:`radio`},options:[`default`,`single`],table:{defaultValue:{summary:`default`}}},prefix:{control:{disable:!0},description:`Element displayed before children.`,table:{type:{summary:`preact.ComponentChildren`}}},suffix:{control:{disable:!0},description:`Element displayed after children.`,table:{type:{summary:`preact.ComponentChildren`}}},tooltip:{control:{type:`text`},description:`Tooltip content.`,table:{type:{summary:`preact.ComponentChildren`}}},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},tabIndex:{control:{type:`number`},description:`Tab order of the tab button. Omit for roving tabindex (active: 0, inactive: -1).`,table:{type:{summary:`number`}}},onClick:{table:{type:{summary:`(args) => void`,detail:`
args: {
  event: MouseEvent
  id: string
}
`}}}}},j={args:{className:``,variant:`default`,tooltip:`Tab tooltip`,onClick:k()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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
        `}}},render:e=>e.variant==="default"?t(`div`,{className:`sb-column sb-width-full`,children:t(i,{children:t(h,{defaultActiveId:`tab-1`,children:t(m,{children:t(b,{children:[t(y,{...e,id:`tab-1`,children:`Tab 1`}),t(y,{...e,id:`tab-2`,children:`Tab 2`}),t(y,{...e,id:`tab-3`,children:`Tab 3`})]})})})})}):t(`div`,{className:`sb-column sb-width-full`,children:t(i,{children:t(h,{defaultActiveId:`tab-1`,children:t(m,{children:t(b,{children:t(y,{...e,id:`tab-1`,variant:`single`,children:`Single`})})})})})})},M=x,N=C,P=T,F=D,I=[`Demo`,`Variant`,`Prefix`,`Suffix`,`CustomChildren`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`VariantStory`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`PrefixStory`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`SuffixStory`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`CustomChildrenStory`,...F.parameters?.docs?.source}}}})))()}L();export{F as CustomChildren,j as Demo,N as Prefix,P as Suffix,M as Variant,I as __namedExportsOrder,A as default};