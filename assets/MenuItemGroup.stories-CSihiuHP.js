import{u as e}from"./hooks.module-DDuEt2mE.js";import{M as r}from"./MenuItemGroup-hxsYARPS.js";import{a as l}from"./MenuContainer-ChtSSB35.js";import{M as o}from"./MenuItemAction-BEMpeBHe.js";import{M as g}from"./MenuDivider-Bcl4nNAT.js";import{M as i}from"./MenuItemOption-D_RuwYiC.js";import"./preact.module-D68vdB8i.js";import"./Text-BooB5DEX.js";import"./typedForwardRef-eUJP59ez.js";import"./compat.module-AmaJGl25.js";import"./Icon-C_1AiDxm.js";import"./chevronUp-6vZHMELz.js";import"./chevronDown-Jm7aV4hF.js";import"./check-2iQ1PIKG.js";const h={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"When `paddingLikeOption` is `true`, the content of an item gets extra padding to align with options."},source:{language:"tsx",code:`
<MenuItemGroup paddingLikeOption>
  {children}
</MenuItemGroup>
`}}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(l,{width:208,children:[e(r,{children:"No padding"}),e(o,{children:"Action 1"}),e(o,{children:"Action 2"}),e(o,{children:"Action 3"}),e(g,{}),e(r,{paddingLikeOption:!0,children:"With padding"}),e(i,{defaultSelected:!0,children:"Option 1"}),e(i,{children:"Option 2"}),e(i,{children:"Option 3"})]})})},L={title:"Components/MenuItemGroup",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A component for creating a menu group title. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>."}}},argTypes:{className:{control:{type:"text"}},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},paddingLikeOption:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Add padding to the left of the content to make it aligned with options."}}},n={tags:["!autodocs"],args:{className:"",paddingLikeOption:!1,children:"Group"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuContainer>
  <MenuItemGroup {...args}>{children}</MenuItemGroup>
</MenuContainer>
`}}},render:a=>e("div",{className:"sb-column sb-width-full",children:e(l,{width:208,children:e(r,{...a,children:a.children})})})},t=h;var d,s,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!autodocs'],
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
        language: 'tsx',
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
        {/* @ts-expect-error Storybook spread */}
        <MenuItemGroup {...args}>{args.children}</MenuItemGroup>
      </MenuContainer>
    </div>
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"PaddingStory",...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const S=["Demo","Padding"];export{n as Demo,t as Padding,S as __namedExportsOrder,L as default};
