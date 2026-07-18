import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-XYsEgyrh.js";import{B as r,Ht as i,Kt as a,R as o,Wt as s,t as c,z as l}from"./src-BW54aR7x.js";var u,d=e((()=>{c(),l(),n(),u={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"When `paddingLikeOption` is `true`, the content of an item gets extra padding to align with options."},source:{code:`
<MenuItemGroup paddingLikeOption>
  {children}
</MenuItemGroup>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(a,{width:208,children:[t(o,{children:`No padding`}),t(r,{children:`Action 1`}),t(r,{children:`Action 2`}),t(r,{children:`Action 3`}),t(i,{}),t(o,{paddingLikeOption:!0,children:`With padding`}),t(s,{defaultSelected:!0,children:`Option 1`}),t(s,{children:`Option 2`}),t(s,{children:`Option 3`})]})})}})),f,p,m,h;e((()=>{d(),c(),l(),n(),f={title:`Components/MenuItemGroup`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:"A component for creating a menu group title. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>."}}},argTypes:{className:{control:{type:`text`}},children:{control:{type:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},paddingLikeOption:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Add padding to the left of the content to make it aligned with options.`}}},p={args:{className:``,paddingLikeOption:!1,children:`Group`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContainer>
  <MenuItemGroup {...args}>{children}</MenuItemGroup>
</MenuContainer>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,children:t(a,{width:208,children:t(o,{...e,children:e.children})})})},m=u,p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    className: '',
    paddingLikeOption: false,
    children: 'Group'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<MenuContainer>
  <MenuItemGroup {...args}>{children}</MenuItemGroup>
</MenuContainer>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <MenuContainer width={208}>
        <MenuItemGroup {...args}>{args.children}</MenuItemGroup>
      </MenuContainer>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`PaddingStory`,...m.parameters?.docs?.source}}},h=[`Demo`,`Padding`]}))();export{p as Demo,m as Padding,h as __namedExportsOrder,f as default};