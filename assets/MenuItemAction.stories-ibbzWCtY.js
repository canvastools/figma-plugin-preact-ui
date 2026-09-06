import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{n as r,t as i}from"./MenuContainer-mmwPsDY6.js";import{n as a,t as o}from"./Text-Cr-51GRl.js";import{n as s,t as c}from"./Icon-Brb725mi.js";import{n as l,t as u}from"./link-DAdg43gf.js";import{n as d,t as f}from"./MenuItemOption-DjtbD26i.js";import{n as p,t as m}from"./MenuDivider-CppPeNf-.js";import{n as h,t as g}from"./MenuItemAction-B1sv30zB.js";var _;function v(){return(v=e((()=>{r(),h(),n(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuItemAction intentModifier="default">
  {children}
</MenuItemAction>

<MenuItemAction intentModifier="danger">
  {children}
</MenuItemAction>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(i,{width:208,children:[t(g,{children:`Action 1`}),t(g,{intentModifier:`danger`,children:`Action 2`})]})})}})))()}var y;function b(){return(b=e((()=>{r(),h(),n(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuItemAction disabled>{children}</MenuItemAction>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:t(i,{width:208,children:[t(g,{children:`Action 1`}),t(g,{disabled:!0,children:`Action 2`}),t(g,{children:`Action 3`})]})})}})))()}var x;function S(){return(S=e((()=>{s(),u(),r(),h(),n(),x={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuItemAction 
  prefix={
    <Icon 
      glyph={link}
      size={16}
      intent="neutral-inverted-fixed" 
    />
  }
>
  {children}
</MenuItemAction>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(i,{width:208,children:[t(g,{prefix:t(c,{glyph:l,size:16,intent:`neutral-inverted-fixed`}),children:`Action 1`}),t(g,{prefix:t(c,{glyph:l,size:16,intent:`neutral-inverted-fixed`}),children:`Action 2`}),t(g,{prefix:t(c,{glyph:l,size:16,intent:`neutral-inverted-fixed`}),children:`Action 3`})]})})}})))()}var C;function w(){return(w=e((()=>{s(),u(),r(),a(),h(),n(),C={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuItemAction 
  suffix={
    <Icon 
      glyph={link}
      size={16}
      intent="neutral-inverted-fixed" 
    />
  }
>
  {children}
</MenuItemAction>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(i,{width:208,children:[t(g,{suffix:t(o,{intent:`neutral-inverted-fixed`,intentModifier:`secondary`,children:`Suffix`}),children:`Action 1`}),t(g,{suffix:t(c,{glyph:l,size:16,intent:`neutral-inverted-fixed`}),children:`Action 2`}),t(g,{suffix:t(c,{glyph:l,size:16,intent:`neutral-inverted-fixed`}),children:`Action 3`})]})})}})))()}var T;function E(){return(E=e((()=>{r(),p(),d(),h(),n(),T={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"When `paddingLikeOption` is `true`, the content of an item gets extra padding to align with options."},source:{code:`
<MenuItemAction paddingLikeOption>
  {children}
</MenuItemAction>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(i,{width:208,children:[t(g,{paddingLikeOption:!0,children:`Action 1`}),t(g,{paddingLikeOption:!0,children:`Action 2`}),t(g,{paddingLikeOption:!0,children:`Action 3`}),t(m,{}),t(f,{defaultSelected:!0,children:`Option 1`}),t(f,{children:`Option 2`}),t(f,{children:`Option 3`})]})})}})))()}var D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{v(),b(),S(),w(),E(),r(),h(),n(),{fn:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/MenuItemAction`,component:g,tags:[`autodocs`],parameters:{docs:{description:{component:"A component for creating a menu action. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>."}}},argTypes:{id:{control:{type:`text`},description:`Unique identifier for the menu item used to track focus the item in the menu context. If not provided, a random UUID will be generated.`,table:{type:{summary:`string`}}},className:{control:{type:`text`}},intentModifier:{control:{type:`radio`},table:{defaultValue:{summary:`default`}},options:[`default`,`danger`]},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:"Works only when the componet is inside `<MenuContext/>`.",table:{defaultValue:{summary:`false`}}},prefix:{control:{disable:!0},description:`Element displayed before children.`,table:{type:{summary:`preact.ComponentChildren`}}},suffix:{control:{disable:!0},description:`Element displayed after children.`,table:{type:{summary:`preact.ComponentChildren`}}},children:{control:{type:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},paddingLikeOption:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Add padding to the left of the content to make it aligned with options.`},tabIndex:{control:{type:`number`},description:`Tab order of the menu item. Omit for -1 (roving focus in menus).`,table:{type:{summary:`number`}}},onClick:{table:{type:{summary:`(args) => void`,detail:`
args: {
  event: MouseEvent
  id: string
}
`}}}}},k={args:{id:`menu-item-action`,className:``,intentModifier:`default`,disabled:!1,focused:!1,paddingLikeOption:!1,children:`Action`,onClick:D()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContainer>
  <MenuItemAction {...args}>{children}</MenuItemAction>
</MenuContainer>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,children:t(i,{width:208,children:t(g,{...e,children:e.children})})})},A=_,j=y,M=x,N=C,P=T,F=[`Demo`,`Intent`,`Disabled`,`Prefix`,`Suffix`,`Padding`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'menu-item-action',
    className: '',
    intentModifier: 'default',
    disabled: false,
    focused: false,
    paddingLikeOption: false,
    children: 'Action',
    onClick: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<MenuContainer>
  <MenuItemAction {...args}>{children}</MenuItemAction>
</MenuContainer>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemAction {...args}>{args.children}</MenuItemAction>
      </MenuContainer>
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`IntentStory`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`DisabledStory`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`PrefixStory`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`SuffixStory`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`PaddingStory`,...P.parameters?.docs?.source}}}})))()}I();export{k as Demo,j as Disabled,A as Intent,P as Padding,M as Prefix,N as Suffix,F as __namedExportsOrder,O as default};