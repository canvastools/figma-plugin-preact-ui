import{u as e,A as k,d as N}from"./hooks.module-6Sbq__eq.js";import{a as o}from"./MenuContainer-D4tb0QRQ.js";import{M as t}from"./MenuItemAction-C9TbAS37.js";import{B as R}from"./Button-JBVOzb0B.js";import{M as x}from"./Menu-BFXFk7cY.js";import{M as g}from"./MenuDivider-AltCHnUL.js";import{M as p}from"./MenuItemOption-BDWCsalK.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./Icon-DqIclgYW.js";import"./chevronUp-CCKXm3lF.js";import"./chevronDown-DnBW--rf.js";import"./Text-BbQ_b1VF.js";import"./TooltipContext-Dv19iKcF.js";import"./TooltipContainer-CJCq4A9v.js";import"./check-BeUN7pdY.js";const L={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuContainer
  width={200}
  height={300}
>
  {children}
</MenuContainer>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-40",children:[e(o,{children:e(t,{children:"No width or height"})}),e(o,{width:200,children:e(t,{children:"Width: 200"})}),e(o,{height:300,children:e(t,{children:"Height: 300"})}),e(o,{width:200,height:300,children:e(t,{children:"Width: 200, Height: 300"})})]})},D={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>{const n=k(null),d=Array.from({length:100},(u,i)=>({type:"action",id:`action-${i+1}`,children:`Action ${i+1}`,closeOnClick:!0,onClick:()=>console.log(`action-${i+1} clicked`)}));return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(R,{ref:n,children:"Open Menu (100 items)"}),e(x,{triggerRef:n,items:d})]})}},T={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const triggerRef = useRef(null)
const [selected, setSelected] = useState("option-80")

const items = Array.from({ length: 100 }, (_, i) => {
  const id = \`option-\${i + 1}\`
  return {
    type: "option",
    id,
    selected: selected === id,
    children: \`Option \${i + 1}\`,
    onSelectedChange: ({ selected }) => setSelected(selected ? id : null),
  }
})

// On open, the selected option (#80) is scrolled into view automatically.
<Button ref={triggerRef}>Open Menu</Button>
<Menu triggerRef={triggerRef} items={items} height={300} />
`}}},render:()=>{const n=k(null),[d,u]=N("option-80"),i=Array.from({length:100},(B,m)=>{const l=`option-${m+1}`;return{type:"option",id:l,selected:d===l,children:`Option ${m+1}`,onSelectedChange:({selected:$})=>u($?l:null)}});return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(R,{ref:n,children:"Open Menu (selected #80)"}),e(x,{triggerRef:n,items:i,height:300})]})}},Z={title:"Components/MenuContainer",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that displays menu items. Used inside <a href='/docs/components-menucontext--docs'>`<MenuContext/>`</a>."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},width:{control:{type:"number"},description:"Takes the width of the menu items if not provided."},height:{control:{type:"number"},description:"Takes the height of the menu items if not provided."},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},r={tags:["!autodocs"],args:{id:void 0,className:"",width:208,height:300},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuContainer {...args}>{children}</MenuContainer>
`}}},render:n=>e("div",{className:"sb-column sb-width-full",children:e(o,{...n,children:[e(t,{paddingLikeOption:!0,children:"Action 1"}),e(t,{paddingLikeOption:!0,children:"Action 2"}),e(t,{paddingLikeOption:!0,children:"Action 3"}),e(g,{variant:"inset"}),e(p,{defaultSelected:!0,children:"Option 1"}),e(p,{children:"Option 2"}),e(p,{children:"Option 3"}),e(g,{variant:"full"}),e(t,{paddingLikeOption:!0,intentModifier:"danger",children:"Destructive action"})]})})},s=L,c=D,a=T;var h,f,M;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(M=(f=r.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var O,S,y;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:"SizeStory",...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var w,v,A;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:"ManyItemsStory",...(A=(v=c.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var b,C,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"ScrollToSelectedStory",...(I=(C=a.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const ee=["Demo","Size","ManyItems","ScrollToSelected"];export{r as Demo,c as ManyItems,a as ScrollToSelected,s as Size,ee as __namedExportsOrder,Z as default};
