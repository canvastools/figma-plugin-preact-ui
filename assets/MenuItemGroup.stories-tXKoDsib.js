import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{n as r,t as i}from"./MenuContainer-mmwPsDY6.js";import{n as a,t as o}from"./MenuItemOption-DjtbD26i.js";import{n as s,t as c}from"./MenuDivider-CppPeNf-.js";import{n as l,t as u}from"./MenuItemAction-B1sv30zB.js";import{n as d,t as f}from"./MenuItemGroup-Bv-yrMps.js";var p;function m(){return(m=e((()=>{r(),s(),a(),l(),d(),n(),p={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"When `paddingLikeOption` is `true`, the content of an item gets extra padding to align with options."},source:{code:`
<MenuItemGroup paddingLikeOption>
  {children}
</MenuItemGroup>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(i,{width:208,children:[t(f,{children:`No padding`}),t(u,{children:`Action 1`}),t(u,{children:`Action 2`}),t(u,{children:`Action 3`}),t(c,{}),t(f,{paddingLikeOption:!0,children:`With padding`}),t(o,{defaultSelected:!0,children:`Option 1`}),t(o,{children:`Option 2`}),t(o,{children:`Option 3`})]})})}})))()}var h,g,_,v;function y(){return(y=e((()=>{m(),r(),d(),n(),h={title:`Components/MenuItemGroup`,component:f,tags:[`autodocs`],parameters:{docs:{description:{component:"A component for creating a menu group title. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>."}}},argTypes:{className:{control:{type:`text`}},children:{control:{type:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},paddingLikeOption:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Add padding to the left of the content to make it aligned with options.`}}},g={args:{className:``,paddingLikeOption:!1,children:`Group`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContainer>
  <MenuItemGroup {...args}>{children}</MenuItemGroup>
</MenuContainer>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-full`,children:t(i,{width:208,children:t(f,{...e,children:e.children})})})},_=p,v=[`Demo`,`Padding`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`PaddingStory`,..._.parameters?.docs?.source}}}})))()}y();export{g as Demo,_ as Padding,v as __namedExportsOrder,h as default};