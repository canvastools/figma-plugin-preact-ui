import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{C as t,S as n,w as r}from"./compat.module-gcU-nFZT.js";import{n as i,t as a}from"./jsxRuntime.module-CNTwvFFH.js";import{i as o,n as s,r as c,t as l}from"./typedForwardRef-BIg2RNOP.js";import{n as u,t as d}from"./Text-Cr-51GRl.js";import{n as f,t as p}from"./Icon-Brb725mi.js";import{t as m}from"./chevronDown-Dm7GGP_2.js";import{t as h}from"./chevronRight-BylVHmJd.js";import{n as g,t as _}from"./Divider-D7nwDni1.js";import{n as v,t as y}from"./Section-DkP7unPH.js";import{r as b}from"./Icon.stories-DfRijuNa.js";var x,S;function C(){return(C=e((()=>{r(),o(),l(),f(),v(),b(),a(),x=({className:e,collapsed:r,defaultCollapsed:a=!0,onCollapsedChange:o,sectionProps:s,children:l,tabIndex:u,...d},f)=>{let g=r!==void 0,[_,v]=n(a);t(()=>{g&&v(!!r)},[r]);let b=g?!!r:_,x=c(`SectionCollapsible`,void 0,{collapsed:b}),S=e=>{let t=!b;g||v(t),o?.({event:e,collapsed:t})},C=e=>{S(e)},w=e=>{let{key:t}=e;(t===`Enter`||t===` `||t===`Spacebar`)&&(e.preventDefault(),e.stopPropagation(),S(e))};return i(`div`,{className:[x,e].join(` `).trim(),ref:f,...d,children:[i(`div`,{className:`SectionCollapsible__trigger`,"data-pui-interactive":`true`,role:`button`,"aria-expanded":!b,tabIndex:u??0,onClick:C,onKeyDown:w,children:[i(`div`,{className:`SectionCollapsible__trigger-icon`,children:i(p,{glyph:b?h:m,size:16,intentModifier:`tertiary`,variant:`downscaled`})}),i(y,{className:`SectionCollapsible__section`,...s})]}),!b&&l!=null&&l!==!1&&l!==!0&&i(`div`,{className:`SectionCollapsible__content`,children:l})]})},S=s(x)})))()}var w;function T(){return(T=e((()=>{r(),u(),C(),a(),w={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [collapsed, setCollapsed] = useState(false)

<SectionCollapsible
  collapsed={collapsed}
  onCollapsedChange={({ collapsed }) => setCollapsed(collapsed)}
  sectionProps={{ children: 'Section header' }}
>
  {children}
</SectionCollapsible>
`}}},render:()=>{let[e,t]=n(!1);return i(`div`,{className:`sb-column sb-width-full`,children:i(S,{collapsed:e,onCollapsedChange:({collapsed:e})=>t(e),sectionProps:{variant:`default`,children:i(d,{strong:!0,children:e?`Click to expand`:`Click to collapse`})},children:i(d,{children:`Controlled collapsible content`})})})}}})))()}var E;function D(){return(D=e((()=>{u(),C(),a(),E={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<SectionCollapsible
  sectionProps={{
    children: 'Section header',
  }}
>
  {children}
</SectionCollapsible>
`}}},render:()=>i(`div`,{className:`sb-column sb-width-full`,children:i(S,{sectionProps:{variant:`default`,children:i(d,{strong:!0,children:`Click to toggle`})},children:i(d,{children:`Uncontrolled collapsible content`})})})}})))()}var O;function k(){return(k=e((()=>{u(),g(),v(),C(),a(),O={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>i(`div`,{className:`sb-column sb-width-full`,children:[i(S,{sectionProps:{variant:`default`,children:i(d,{strong:!0,children:`Click to toggle`})},children:i(y,{padding:{top:`0`},children:i(d,{children:`Uncontrolled collapsible content`})})}),i(_,{}),i(S,{sectionProps:{variant:`default`,children:i(d,{strong:!0,children:`Click to toggle`})},children:i(y,{padding:{top:`0`},children:i(d,{children:`Uncontrolled collapsible content`})})}),i(_,{}),i(S,{sectionProps:{variant:`default`,children:i(d,{strong:!0,children:`Click to toggle`})},children:i(y,{padding:{top:`0`},children:i(d,{children:`Uncontrolled collapsible content`})})}),i(_,{}),i(S,{sectionProps:{variant:`default`,children:i(d,{strong:!0,children:`Click to toggle`})},children:i(y,{padding:{top:`0`},children:i(d,{children:`Uncontrolled collapsible content`})})})]})}})))()}var A,j,M,N,P,F;function I(){return(I=e((()=>{T(),D(),k(),u(),C(),a(),A={title:`Layout/SectionCollapsible`,component:S,tags:[`autodocs`],parameters:{docs:{description:{component:"A collapsible wrapper around `Section` that toggles content visibility on click."}}},argTypes:{className:{control:{type:`text`}},collapsed:{control:{disable:!0},description:`Controlled collapsed state.`,table:{type:{summary:`boolean`}}},defaultCollapsed:{control:{type:`boolean`},description:`Initial collapsed state for uncontrolled state.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},onCollapsedChange:{action:`collapsedChange`,table:{type:{summary:`(args) => void`,detail:`
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
`}}},children:{control:{type:`text`},description:`Content shown when expanded.`,table:{type:{summary:`preact.ComponentChildren`}}},tabIndex:{control:{type:`number`},description:`Tab order of the focusable element. Omit to keep the default focus behavior.`,table:{type:{summary:`number`}}}}},j={args:{className:`sb-container`,defaultCollapsed:!0,sectionProps:{variant:`default`,children:`Section header`},children:`Collapsible content`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<SectionCollapsible sectionProps={{ children: 'Section header' }}>
  {children}
</SectionCollapsible>
`}}},render:e=>i(`div`,{className:`sb-column sb-width-full`,children:i(S,{...e,sectionProps:{children:i(d,{strong:!0,children:e.sectionProps?.children})},children:i(d,{children:e.children})})})},M=E,N=w,P=O,F=[`Demo`,`Uncontrolled`,`Controlled`,`Stacking`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'sb-container',
    defaultCollapsed: true,
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`UncontrolledStory`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`ControlledStory`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`StackingStory`,...P.parameters?.docs?.source}}}})))()}I();export{N as Controlled,j as Demo,P as Stacking,M as Uncontrolled,F as __namedExportsOrder,A as default};