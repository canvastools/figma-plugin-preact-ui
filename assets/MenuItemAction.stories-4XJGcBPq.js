import{u as e}from"./hooks.module-6Sbq__eq.js";import{f as D}from"./index-B4E_jmCM.js";import{M as t}from"./MenuItemAction-C8vpGxZU.js";import{M as n}from"./MenuContainer-CKfCUuSm.js";import{I as r}from"./Icon-C6_npEhI.js";import{l as i}from"./link-BlSd8q6h.js";import{T as L}from"./Text-BbQ_b1VF.js";import{M as P}from"./MenuDivider-AltCHnUL.js";import{M as u}from"./MenuItemOption-HNGDXGBU.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./chevronUp-CJIqewiB.js";import"./chevronDown-CECORTRu.js";import"./check-CPtlZW3F.js";const z={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuItemAction intentModifier="default">
  {children}
</MenuItemAction>

<MenuItemAction intentModifier="danger">
  {children}
</MenuItemAction>
`}}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(n,{width:208,children:[e(t,{children:"Action 1"}),e(t,{intentModifier:"danger",children:"Action 2"})]})})},E={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuItemAction disabled>{children}</MenuItemAction>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-16",children:e(n,{width:208,children:[e(t,{children:"Action 1"}),e(t,{disabled:!0,children:"Action 2"}),e(t,{children:"Action 3"})]})})},T={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(n,{width:208,children:[e(t,{prefix:e(r,{glyph:i,size:16,intent:"neutral-inverted-fixed"}),children:"Action 1"}),e(t,{prefix:e(r,{glyph:i,size:16,intent:"neutral-inverted-fixed"}),children:"Action 2"}),e(t,{prefix:e(r,{glyph:i,size:16,intent:"neutral-inverted-fixed"}),children:"Action 3"})]})})},U={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(n,{width:208,children:[e(t,{suffix:e(L,{intent:"neutral-inverted-fixed",intentModifier:"secondary",children:"Suffix"}),children:"Action 1"}),e(t,{suffix:e(r,{glyph:i,size:16,intent:"neutral-inverted-fixed"}),children:"Action 2"}),e(t,{suffix:e(r,{glyph:i,size:16,intent:"neutral-inverted-fixed"}),children:"Action 3"})]})})},W={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"When `paddingLikeOption` is `true`, the content of an item gets extra padding to align with options."},source:{language:"tsx",code:`
<MenuItemAction paddingLikeOption>
  {children}
</MenuItemAction>
`}}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(n,{width:208,children:[e(t,{paddingLikeOption:!0,children:"Action 1"}),e(t,{paddingLikeOption:!0,children:"Action 2"}),e(t,{paddingLikeOption:!0,children:"Action 3"}),e(P,{}),e(u,{defaultSelected:!0,children:"Option 1"}),e(u,{children:"Option 2"}),e(u,{children:"Option 3"})]})})},ee={title:"Components/MenuItemAction",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A component for creating a menu action. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>."}}},argTypes:{id:{control:{type:"text"},description:"Unique identifier for the menu item used to track focus the item in the menu context. If not provided, a random UUID will be generated.",table:{type:{summary:"string"}}},className:{control:{type:"text"}},intentModifier:{control:{type:"radio"},defaultValue:{summary:"default"},options:["default","danger"]},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},focused:{control:{type:"boolean"},description:"Works only when the componet is inside `<MenuContext/>`.",defaultValue:{summary:!1}},prefix:{control:{disable:!0},description:"Element displayed before children.",table:{type:{summary:"preact.ComponentChildren"}}},suffix:{control:{disable:!0},description:"Element displayed after children.",table:{type:{summary:"preact.ComponentChildren"}}},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},paddingLikeOption:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Add padding to the left of the content to make it aligned with options."},tabIndex:{control:{type:"number"},description:"Tab order of the menu item. Omit for -1 (roving focus in menus).",table:{type:{summary:"number"}}},onClick:{table:{type:{summary:"(args) => void",detail:`
args: {
  event: MouseEvent
  id: string
}
`}}}}},o={tags:["!autodocs"],args:{id:"menu-item-action",className:"",intentModifier:"default",disabled:!1,focused:!1,paddingLikeOption:!1,children:"Action",onClick:D()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuContainer>
  <MenuItemAction {...args}>{children}</MenuItemAction>
</MenuContainer>
`}}},render:m=>e("div",{className:"sb-column sb-width-full",children:e(n,{width:208,children:e(t,{...m,children:m.children})})})},a=z,d=E,s=T,c=U,l=W;var p,f,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!autodocs'],
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
        language: 'tsx',
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
        {/* @ts-expect-error Storybook spread */}
        <MenuItemAction {...args}>{args.children}</MenuItemAction>
      </MenuContainer>
    </div>
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,y,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"IntentStory",...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,M,A;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:"DisabledStory",...(A=(M=d.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var w,I,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:"PrefixStory",...(v=(I=s.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var S,C,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:"SuffixStory",...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var O,V,N;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:"PaddingStory",...(N=(V=l.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const te=["Demo","Intent","Disabled","Prefix","Suffix","Padding"];export{o as Demo,d as Disabled,a as Intent,l as Padding,s as Prefix,c as Suffix,te as __namedExportsOrder,ee as default};
