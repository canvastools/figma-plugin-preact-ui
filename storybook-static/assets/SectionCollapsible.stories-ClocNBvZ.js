import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,S as n,w as r}from"./compat.module-BbhDrffC.js";import{n as i,t as a}from"./jsxRuntime.module-B_u_rUE0.js";import{_ as o,s,t as c}from"./utils-k8SxZ3Xg.js";import{t as l}from"./Text-Bf8YN4P6.js";import{Cn as u,Dn as d,Hn as f,Vn as p,b as m,nn as h,t as g,x as _}from"./src-CnP2aPTs.js";import{t as v}from"./Divider-CU4Az6Sc.js";var y=e((()=>{})),b,x,S=e((()=>{r(),c(),f(),_(),h(),y(),a(),b=({id:e,className:r,collapsed:a,onCollapsedChange:s,sectionProps:c,children:l,tabIndex:f,...h},g)=>{let _=a!==void 0,[v,y]=n(a??!0);t(()=>{_&&y(!!a)},[a]);let b=_?!!a:v,x=o(`SectionCollapsible`,void 0,{collapsed:b}),S=e=>{let t=!b;_||y(t),s?.({event:e,collapsed:t})},C=e=>{S(e)},w=e=>{let{key:t}=e;(t===`Enter`||t===` `||t===`Spacebar`)&&(e.preventDefault(),e.stopPropagation(),S(e))};return i(`div`,{id:e,className:[x,r].join(` `).trim(),ref:g,...h,children:[i(`div`,{className:`SectionCollapsible__trigger`,"data-pui-interactive":`true`,role:`button`,"aria-expanded":!b,tabIndex:f??0,onClick:C,onKeyDown:w,children:[i(`div`,{className:`SectionCollapsible__trigger-icon`,children:i(p,{glyph:b?u:d,size:16,intentModifier:`secondary`})}),i(m,{...c})]}),!b&&l!=null&&l!==!1&&l!==!0&&i(`div`,{className:`SectionCollapsible__content`,children:l})]})},x=s(b)})),C,w=e((()=>{r(),g(),S(),a(),C={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [collapsed, setCollapsed] = useState(false)

<SectionCollapsible
  collapsed={collapsed}
  onCollapsedChange={({ collapsed }) => setCollapsed(collapsed)}
  sectionProps={{ children: 'Section header' }}
>
  {children}
</SectionCollapsible>
`}}},render:()=>{let[e,t]=n(!1);return i(`div`,{className:`sb-column sb-width-full`,children:i(x,{collapsed:e,onCollapsedChange:({collapsed:e})=>t(e),sectionProps:{variant:`default`,children:i(l,{strong:!0,children:e?`Click to expand`:`Click to collapse`})},children:i(l,{children:`Controlled collapsible content`})})})}}})),T,E=e((()=>{g(),S(),a(),T={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<SectionCollapsible
  sectionProps={{
    children: 'Section header',
  }}
>
  {children}
</SectionCollapsible>
`}}},render:()=>i(`div`,{className:`sb-column sb-width-full`,children:i(x,{sectionProps:{variant:`default`,children:i(l,{strong:!0,children:`Click to toggle`})},children:i(l,{children:`Uncontrolled collapsible content`})})})}})),D,O=e((()=>{g(),S(),a(),D={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<SectionCollapsible
  sectionProps={{
    variant: 'default',
    children: <Text strong>Section header</Text>,
  }}
>
  <Section padding={{ top: '0' }}>
    <Text>{children}</Text>
  </Section>
</SectionCollapsible>

<Divider />

<SectionCollapsible
  sectionProps={{
    variant: 'default',
    children: <Text strong>Section header</Text>,
  }}
>
  <Section padding={{ top: '0' }}>
    <Text>{children}</Text>
  </Section>
</SectionCollapsible>
`}}},render:()=>i(`div`,{className:`sb-column sb-width-full`,children:[i(x,{sectionProps:{variant:`default`,children:i(l,{strong:!0,children:`Click to toggle`})},children:i(m,{padding:{top:`0`},children:i(l,{children:`Uncontrolled collapsible content`})})}),i(v,{}),i(x,{sectionProps:{variant:`default`,children:i(l,{strong:!0,children:`Click to toggle`})},children:i(m,{padding:{top:`0`},children:i(l,{children:`Uncontrolled collapsible content`})})}),i(v,{}),i(x,{sectionProps:{variant:`default`,children:i(l,{strong:!0,children:`Click to toggle`})},children:i(m,{padding:{top:`0`},children:i(l,{children:`Uncontrolled collapsible content`})})}),i(v,{}),i(x,{sectionProps:{variant:`default`,children:i(l,{strong:!0,children:`Click to toggle`})},children:i(m,{padding:{top:`0`},children:i(l,{children:`Uncontrolled collapsible content`})})})]})}})),k,A,j,M,N,P;e((()=>{w(),E(),O(),g(),S(),a(),k={title:`Layout/SectionCollapsible`,component:x,tags:[`autodocs`],parameters:{docs:{description:{component:"A collapsible wrapper around `Section` that toggles content visibility on click."}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},collapsed:{control:{disable:!0},description:`Controlled collapsed state.`,table:{type:{summary:`boolean`}}},onCollapsedChange:{action:`collapsedChange`,table:{type:{summary:`(args) => void`,detail:`
args: {
  event: MouseEvent
  collapsed: boolean
}
`}}},sectionProps:{control:{disable:!0},table:{type:{summary:`Pick<SectionProps>`,detail:`
{
  variant: 'default' | 'stacked'
  padding: {
    top: SectionPadding
    right: SectionPadding
    bottom: SectionPadding
    left: SectionPadding
  }
  children: preact.ComponentChildren
}
`}}},children:{control:{type:`text`},description:`Content shown when expanded.`,table:{type:{summary:`preact.ComponentChildren`}}},tabIndex:{control:{type:`number`},description:`Tab order of the focusable element. Omit to keep the default focus behavior.`,table:{type:{summary:`number`}}}}},A={args:{id:void 0,className:`sb-container`,sectionProps:{variant:`default`,children:`Section header`},children:`Collapsible content`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<SectionCollapsible sectionProps={{ children: 'Section header' }}>
  {children}
</SectionCollapsible>
`}}},render:e=>i(`div`,{className:`sb-column sb-width-full`,children:i(x,{...e,sectionProps:{children:i(l,{strong:!0,children:e.sectionProps?.children})},children:i(l,{children:e.children})})})},j=T,M=C,N=D,A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: 'sb-container',
    sectionProps: {
      variant: 'default',
      children: 'Section header'
    },
    children: 'Collapsible content'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<SectionCollapsible sectionProps={{ children: 'Section header' }}>
  {children}
</SectionCollapsible>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <SectionCollapsible {...args} sectionProps={{
      children: <Text strong>{args.sectionProps?.children}</Text>
    }}>
        <Text>{args.children}</Text>
      </SectionCollapsible>
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`UncontrolledStory`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`ControlledStory`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`StackingStory`,...N.parameters?.docs?.source}}},P=[`Demo`,`Uncontrolled`,`Controlled`,`Stacking`]}))();export{M as Controlled,A as Demo,N as Stacking,j as Uncontrolled,P as __namedExportsOrder,k as default};