import{u as e,A as v}from"./hooks.module-CGIakYml.js";import{a as n}from"./MenuContainer-3_R8VF1b.js";import{M as t}from"./MenuItemAction-Nw1tf0Io.js";import{B as w}from"./Button-2yuwlxjW.js";import{M as A}from"./Menu-DcSgvTPT.js";import{M as d}from"./MenuDivider-C1ivzsh3.js";import{M as c}from"./MenuItemOption-BgA39XLI.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./Icon-DYEerEJN.js";import"./chevronUp-CBO9Bw6D.js";import"./chevronDown-B_bnQDqi.js";import"./Text-9aeIDhQ2.js";import"./TooltipContext-DJAjWLpJ.js";import"./TooltipContainer-BVa1RtHA.js";import"./check-C21gnuYF.js";const I={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuContainer
  width={200}
  height={300}
>
  {children}
</MenuContainer>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-40",children:[e(n,{children:e(t,{children:"No width or height"})}),e(n,{width:200,children:e(t,{children:"Width: 200"})}),e(n,{height:300,children:e(t,{children:"Height: 300"})}),e(n,{width:200,height:300,children:e(t,{children:"Width: 200, Height: 300"})})]})},C={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>{const i=v(null),y=Array.from({length:100},(b,s)=>({type:"action",id:`action-${s+1}`,children:`Action ${s+1}`,closeOnClick:!0,onClick:()=>console.log(`action-${s+1} clicked`)}));return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(w,{ref:i,children:"Open Menu (100 items)"}),e(A,{triggerRef:i,items:y})]})}},j={title:"Components/MenuContainer",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that displays menu items. Used inside <a href='/docs/components-menucontext--docs'>`<MenuContext/>`</a>."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},width:{control:{type:"number"},description:"Takes the width of the menu items if not provided."},height:{control:{type:"number"},description:"Takes the height of the menu items if not provided."},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},r={tags:["!autodocs"],args:{id:void 0,className:"",width:208,height:300},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuContainer {...args}>{children}</MenuContainer>
`}}},render:i=>e("div",{className:"sb-column sb-width-full",children:e(n,{...i,children:[e(t,{paddingLikeOption:!0,children:"Action 1"}),e(t,{paddingLikeOption:!0,children:"Action 2"}),e(t,{paddingLikeOption:!0,children:"Action 3"}),e(d,{variant:"inset"}),e(c,{defaultSelected:!0,children:"Option 1"}),e(c,{children:"Option 2"}),e(c,{children:"Option 3"}),e(d,{variant:"full"}),e(t,{paddingLikeOption:!0,intentModifier:"danger",children:"Destructive action"})]})})},o=I,a=C;var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"SizeStory",...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var M,f,O;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:"ManyItemsStory",...(O=(f=a.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};const q=["Demo","Size","ManyItems"];export{r as Demo,a as ManyItems,o as Size,q as __namedExportsOrder,j as default};
