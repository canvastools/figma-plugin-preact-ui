import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-XYsEgyrh.js";import{t as r}from"./Text-Dx8we2OT.js";import{B as i,Gn as a,Ht as o,Kt as s,V as c,Wt as l,mn as u,t as d}from"./src-BW54aR7x.js";var f,p=e((()=>{d(),c(),n(),f={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuItemAction intentModifier="default">
  {children}
</MenuItemAction>

<MenuItemAction intentModifier="danger">
  {children}
</MenuItemAction>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(s,{width:208,children:[t(i,{children:`Action 1`}),t(i,{intentModifier:`danger`,children:`Action 2`})]})})}})),m,h=e((()=>{d(),c(),n(),m={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuItemAction disabled>{children}</MenuItemAction>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:t(s,{width:208,children:[t(i,{children:`Action 1`}),t(i,{disabled:!0,children:`Action 2`}),t(i,{children:`Action 3`})]})})}})),g,_=e((()=>{d(),c(),n(),g={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(s,{width:208,children:[t(i,{prefix:t(a,{glyph:u,size:16,intent:`neutral-inverted-fixed`}),children:`Action 1`}),t(i,{prefix:t(a,{glyph:u,size:16,intent:`neutral-inverted-fixed`}),children:`Action 2`}),t(i,{prefix:t(a,{glyph:u,size:16,intent:`neutral-inverted-fixed`}),children:`Action 3`})]})})}})),v,y=e((()=>{d(),c(),n(),v={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(s,{width:208,children:[t(i,{suffix:t(r,{intent:`neutral-inverted-fixed`,intentModifier:`secondary`,children:`Suffix`}),children:`Action 1`}),t(i,{suffix:t(a,{glyph:u,size:16,intent:`neutral-inverted-fixed`}),children:`Action 2`}),t(i,{suffix:t(a,{glyph:u,size:16,intent:`neutral-inverted-fixed`}),children:`Action 3`})]})})}})),b,x=e((()=>{d(),c(),n(),b={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"When `paddingLikeOption` is `true`, the content of an item gets extra padding to align with options."},source:{code:`
<MenuItemAction paddingLikeOption>
  {children}
</MenuItemAction>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(s,{width:208,children:[t(i,{paddingLikeOption:!0,children:`Action 1`}),t(i,{paddingLikeOption:!0,children:`Action 2`}),t(i,{paddingLikeOption:!0,children:`Action 3`}),t(o,{}),t(l,{defaultSelected:!0,children:`Option 1`}),t(l,{children:`Option 2`}),t(l,{children:`Option 3`})]})})}})),S,C,w,T,E,D,O,k,A;e((()=>{p(),h(),_(),y(),x(),d(),c(),n(),{fn:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/MenuItemAction`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"A component for creating a menu action. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>."}}},argTypes:{id:{control:{type:`text`},description:`Unique identifier for the menu item used to track focus the item in the menu context. If not provided, a random UUID will be generated.`,table:{type:{summary:`string`}}},className:{control:{type:`text`}},intentModifier:{control:{type:`radio`},table:{defaultValue:{summary:`default`}},options:[`default`,`danger`]},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:"Works only when the componet is inside `<MenuContext/>`.",table:{defaultValue:{summary:`false`}}},prefix:{control:{disable:!0},description:`Element displayed before children.`,table:{type:{summary:`preact.ComponentChildren`}}},suffix:{control:{disable:!0},description:`Element displayed after children.`,table:{type:{summary:`preact.ComponentChildren`}}},children:{control:{type:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},paddingLikeOption:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Add padding to the left of the content to make it aligned with options.`},tabIndex:{control:{type:`number`},description:`Tab order of the menu item. Omit for -1 (roving focus in menus).`,table:{type:{summary:`number`}}},onClick:{table:{type:{summary:`(args) => void`,detail:`
args: {
  event: MouseEvent
  id: string
}
`}}}}},w={args:{id:`menu-item-action`,className:``,intentModifier:`default`,disabled:!1,focused:!1,paddingLikeOption:!1,children:`Action`,onClick:S()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContainer>
  <MenuItemAction {...args}>{children}</MenuItemAction>
</MenuContainer>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,children:t(s,{width:208,children:t(i,{...e,children:e.children})})})},T=f,E=m,D=g,O=v,k=b,w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`IntentStory`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`DisabledStory`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`PrefixStory`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`SuffixStory`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`PaddingStory`,...k.parameters?.docs?.source}}},A=[`Demo`,`Intent`,`Disabled`,`Prefix`,`Suffix`,`Padding`]}))();export{w as Demo,E as Disabled,T as Intent,k as Padding,D as Prefix,O as Suffix,A as __namedExportsOrder,C as default};