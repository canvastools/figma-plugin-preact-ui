import{u as e,A as b}from"./hooks.module-6Sbq__eq.js";import{M as n}from"./MenuContainer-D7I4Bl73.js";import{M as t}from"./MenuItemAction-BgxFZQBA.js";import{B as w}from"./Button-SFpoFkob.js";import{M as v}from"./Menu-DnkrBu-J.js";import{M as d}from"./MenuDivider-AltCHnUL.js";import{M as c}from"./MenuItemOption--423OxRJ.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./Icon-C6_npEhI.js";import"./chevronUp-CJIqewiB.js";import"./chevronDown-CECORTRu.js";import"./Text-BbQ_b1VF.js";import"./TooltipContext-DB8mQxid.js";import"./TooltipContainer-CJCq4A9v.js";import"./check-CPtlZW3F.js";const A={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuContainer
  width={200}
  height={300}
>
  {children}
</MenuContainer>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-40",children:[e(n,{children:e(t,{children:"No width or height"})}),e(n,{width:200,children:e(t,{children:"Width: 200"})}),e(n,{height:300,children:e(t,{children:"Height: 300"})}),e(n,{width:200,height:300,children:e(t,{children:"Width: 200, Height: 300"})})]})},I={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const triggerRef = useRef(null)

const items = Array.from({ length: 100 }, (_, i) => ({
  type: "action",
  id: \`action-\${i + 1}\`,
  children: \`Action \${i + 1}\`,
  closeOnClick: true,
  onClick: () => console.log(\`action-\${i + 1} clicked\`),
}))

<Button ref={triggerRef}>Open Menu</Button>
<Menu triggerRef={triggerRef} items={items} />
`}}},render:()=>{const i=b(null),y=Array.from({length:100},(C,s)=>({type:"action",id:`action-${s+1}`,children:`Action ${s+1}`,closeOnClick:!0,onClick:()=>console.log(`action-${s+1} clicked`)}));return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(w,{ref:i,children:"Open Menu (100 items)"}),e(v,{triggerRef:i,items:y})]})}},U={title:"Components/MenuContainer",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that displays menu items. Used inside <a href='/docs/components-menucontext--docs'>`<MenuContext/>`</a>."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},width:{control:{type:"number"},description:"Takes the width of the menu items if not provided."},height:{control:{type:"number"},description:"Takes the height of the menu items if not provided."},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},tabIndex:{control:{type:"number"},description:"Tab order of the menu container wrapper. Omit when it should not be in the tab sequence.",table:{type:{summary:"number"}}}}},r={tags:["!autodocs"],args:{id:void 0,className:"",width:208,height:300},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuContainer {...args}>{children}</MenuContainer>
`}}},render:i=>e("div",{className:"sb-column sb-width-full",children:e(n,{...i,children:[e(t,{paddingLikeOption:!0,children:"Action 1"}),e(t,{paddingLikeOption:!0,children:"Action 2"}),e(t,{paddingLikeOption:!0,children:"Action 3"}),e(d,{variant:"inset"}),e(c,{defaultSelected:!0,children:"Option 1"}),e(c,{children:"Option 2"}),e(c,{children:"Option 3"}),e(d,{variant:"full"}),e(t,{paddingLikeOption:!0,intentModifier:"danger",children:"Destructive action"})]})})},o=A,a=I;var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    width: 208,
    height: 300
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<MenuContainer {...args}>{children}</MenuContainer>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <MenuContainer {...args}>
        <MenuItemAction paddingLikeOption>Action 1</MenuItemAction>
        <MenuItemAction paddingLikeOption>Action 2</MenuItemAction>
        <MenuItemAction paddingLikeOption>Action 3</MenuItemAction>
        <MenuDivider variant="inset" />
        <MenuItemOption defaultSelected>Option 1</MenuItemOption>
        <MenuItemOption>Option 2</MenuItemOption>
        <MenuItemOption>Option 3</MenuItemOption>
        <MenuDivider variant="full" />
        <MenuItemAction paddingLikeOption intentModifier="danger">
          Destructive action
        </MenuItemAction>
      </MenuContainer>
    </div>
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,h,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"SizeStory",...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var M,f,O;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:"ManyItemsStory",...(O=(f=a.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};const j=["Demo","Size","ManyItems"];export{r as Demo,a as ManyItems,o as Size,j as __namedExportsOrder,U as default};
