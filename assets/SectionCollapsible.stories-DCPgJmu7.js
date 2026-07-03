import{d as V,h as A,u as e}from"./hooks.module-BOklADZz.js";import{t as F,b as L}from"./typedForwardRef-IM0ZXC4v.js";import{I as q}from"./Icon-CUZDBV4V.js";import{c as G}from"./chevronRight-RF2gdZhL.js";import{c as H}from"./chevronDown-CZFzKRGi.js";import{S as s}from"./Section-MpxjUw2q.js";import{T as o}from"./Text-DWXnbeUo.js";import{D as S}from"./Divider-BUXpicHL.js";import"./preact.module-BEcQExD3.js";import"./compat.module-C06LZZ-F.js";const J=({id:t,className:i,collapsed:r,onCollapsedChange:g,sectionProps:E,children:d,tabIndex:B,...K},M)=>{const b=r!==void 0,[O,C]=V(r??!0);A(()=>{b&&C(!!r)},[r]);const a=b?!!r:O,R=L("SectionCollapsible",void 0,{collapsed:a}),f=n=>{const c=!a;b||C(c),g==null||g({event:n,collapsed:c})},j=n=>{f(n)},z=n=>{const{key:c}=n;(c==="Enter"||c===" "||c==="Spacebar")&&(n.preventDefault(),n.stopPropagation(),f(n))};return e("div",{id:t,className:[R,i].join(" ").trim(),ref:M,...K,children:[e("div",{className:"SectionCollapsible__trigger","data-pui-interactive":"true",role:"button","aria-expanded":!a,tabIndex:B??0,onClick:j,onKeyDown:z,children:[e("div",{className:"SectionCollapsible__trigger-icon",children:e(q,{glyph:a?G:H,size:16,intentModifier:"secondary"})}),e(s,{...E})]}),!a&&d!=null&&d!==!1&&d!==!0&&e("div",{className:"SectionCollapsible__content",children:d})]})},l=F(J),Q={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [collapsed, setCollapsed] = useState(false)

<SectionCollapsible
  collapsed={collapsed}
  onCollapsedChange={({ collapsed }) => setCollapsed(collapsed)}
  sectionProps={{ children: 'Section header' }}
>
  {children}
</SectionCollapsible>
`}}},render:()=>{const[t,i]=V(!1);return e("div",{className:"sb-column sb-width-full",children:e(l,{collapsed:t,onCollapsedChange:({collapsed:r})=>i(r),sectionProps:{variant:"default",children:e(o,{strong:!0,children:t?"Click to expand":"Click to collapse"})},children:e(o,{children:"Controlled collapsible content"})})})}},W={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<SectionCollapsible
  sectionProps={{
    children: 'Section header',
  }}
>
  {children}
</SectionCollapsible>
`}}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(l,{sectionProps:{variant:"default",children:e(o,{strong:!0,children:"Click to toggle"})},children:e(o,{children:"Uncontrolled collapsible content"})})})},X={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>e("div",{className:"sb-column sb-width-full",children:[e(l,{sectionProps:{variant:"default",children:e(o,{strong:!0,children:"Click to toggle"})},children:e(s,{padding:{top:"0"},children:e(o,{children:"Uncontrolled collapsible content"})})}),e(S,{}),e(l,{sectionProps:{variant:"default",children:e(o,{strong:!0,children:"Click to toggle"})},children:e(s,{padding:{top:"0"},children:e(o,{children:"Uncontrolled collapsible content"})})}),e(S,{}),e(l,{sectionProps:{variant:"default",children:e(o,{strong:!0,children:"Click to toggle"})},children:e(s,{padding:{top:"0"},children:e(o,{children:"Uncontrolled collapsible content"})})}),e(S,{}),e(l,{sectionProps:{variant:"default",children:e(o,{strong:!0,children:"Click to toggle"})},children:e(s,{padding:{top:"0"},children:e(o,{children:"Uncontrolled collapsible content"})})})]})},ce={title:"Layout/SectionCollapsible",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"A collapsible wrapper around `Section` that toggles content visibility on click."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},collapsed:{control:{disable:!0},description:"Controlled collapsed state.",table:{type:{summary:"boolean"}}},onCollapsedChange:{action:"collapsedChange",table:{type:{summary:"(args) => void",detail:`
args: {
  event: MouseEvent
  collapsed: boolean
}
`}}},sectionProps:{control:{disable:!0},table:{type:{summary:"Pick<SectionProps>",detail:`
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
`}}},children:{control:{type:"text"},description:"Content shown when expanded.",table:{type:{summary:"preact.ComponentChildren"}}},tabIndex:{control:{type:"number"},description:"Tab order of the focusable element. Omit to keep the default focus behavior.",table:{type:{summary:"number"}}}}},p={tags:["!autodocs"],args:{id:void 0,className:"sb-container",sectionProps:{variant:"default",children:"Section header"},children:"Collapsible content"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<SectionCollapsible sectionProps={{ children: 'Section header' }}>
  {children}
</SectionCollapsible>
`}}},render:t=>{var i;return e("div",{className:"sb-column sb-width-full",children:e(l,{...t,sectionProps:{children:e(o,{strong:!0,children:(i=t.sectionProps)==null?void 0:i.children})},children:e(o,{children:t.children})})})}},u=W,h=Q,m=X;var v,y,x;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!autodocs'],
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
        language: 'tsx',
        code: \`
<SectionCollapsible sectionProps={{ children: 'Section header' }}>
  {children}
</SectionCollapsible>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      {/* @ts-expect-error Storybook spread */}
      <SectionCollapsible {...args} sectionProps={{
      children: <Text strong>{args.sectionProps?.children}</Text>
    }}>
        {/* @ts-expect-error Storybook spread */}
        <Text>{args.children}</Text>
      </SectionCollapsible>
    </div>
}`,...(x=(y=p.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var P,w,k;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:"UncontrolledStory",...(k=(w=u.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var T,N,D;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:"ControlledStory",...(D=(N=h.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var U,_,I;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:"StackingStory",...(I=(_=m.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const ae=["Demo","Uncontrolled","Controlled","Stacking"];export{h as Controlled,p as Demo,m as Stacking,u as Uncontrolled,ae as __namedExportsOrder,ce as default};
