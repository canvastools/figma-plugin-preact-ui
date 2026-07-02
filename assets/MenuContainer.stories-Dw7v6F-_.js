import{u as e,A as R,d as N}from"./hooks.module-BOklADZz.js";import{a as r}from"./MenuContainer-7RiBAaMv.js";import{M as t}from"./MenuItemAction-CiPxLN8W.js";import{B as x}from"./Button-DZuIc4LK.js";import{M as $}from"./Menu-BWolwNm8.js";import{M as h}from"./MenuItemGroup-9vVjBch-.js";import{M as g}from"./MenuDivider-DCMEePNQ.js";import{M as u}from"./MenuItemOption-DsKPVta5.js";import"./preact.module-BEcQExD3.js";import"./typedForwardRef-IM0ZXC4v.js";import"./compat.module-C06LZZ-F.js";import"./Icon-CUZDBV4V.js";import"./chevronUp-Cq7Nn1oc.js";import"./chevronDown-CZFzKRGi.js";import"./Text-DWXnbeUo.js";import"./TooltipContext-AO-nQ0Om.js";import"./TooltipContainer-CxrP3vc5.js";import"./check-CJonqv9k.js";const D={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuContainer
  width={200}
  height={300}
>
  {children}
</MenuContainer>
`}}},render:()=>e("div",{className:"sb-column sb-width-full sb-gap-40",children:[e(r,{children:e(t,{children:"No width or height"})}),e(r,{width:200,children:e(t,{children:"Width: 200"})}),e(r,{height:300,children:e(t,{children:"Height: 300"})}),e(r,{width:200,height:300,children:e(t,{children:"Width: 200, Height: 300"})})]})},T={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>{const n=R(null),d=Array.from({length:100},(p,o)=>({type:"action",id:`action-${o+1}`,children:`Action ${o+1}`,closeOnClick:!0,onClick:()=>console.log(`action-${o+1} clicked`)}));return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(x,{ref:n,children:"Open Menu (100 items)"}),e($,{triggerRef:n,items:d})]})}},B={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>{const n=R(null),[d,p]=N("option-80"),o=Array.from({length:100},(_,m)=>{const l=`option-${m+1}`;return{type:"option",id:l,selected:d===l,children:`Option ${m+1}`,onSelectedChange:({selected:G})=>p(G?l:null)}});return e("div",{className:"sb-column sb-width-full sb-gap-16",children:[e(x,{ref:n,children:"Open Menu (selected #80)"}),e($,{triggerRef:n,items:o,height:300})]})}},te={title:"Components/MenuContainer",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that displays menu items. Used inside <a href='/docs/components-menucontext--docs'>`<MenuContext/>`</a>."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},width:{control:{type:"number"},description:"Takes the width of the menu items if not provided."},height:{control:{type:"number"},description:"Takes the height of the menu items if not provided."},children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}}}},i={tags:["!autodocs"],args:{id:void 0,className:"",width:208,height:300},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuContainer {...args}>{children}</MenuContainer>
`}}},render:n=>e("div",{className:"sb-column sb-width-full",children:e(r,{...n,children:[e(h,{children:"Group 1"}),e(t,{children:"Action 1"}),e(t,{children:"Action 2"}),e(t,{children:"Action 3"}),e(g,{variant:"inset"}),e(h,{paddingLikeOption:!0,children:"Group 2"}),e(u,{defaultSelected:!0,children:"Option 1"}),e(u,{children:"Option 2"}),e(u,{children:"Option 3"}),e(g,{variant:"full"}),e(t,{paddingLikeOption:!0,intentModifier:"danger",children:"Destructive action"})]})})},s=D,c=T,a=B;var M,f,S;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        <MenuItemGroup>Group 1</MenuItemGroup>
        <MenuItemAction>Action 1</MenuItemAction>
        <MenuItemAction>Action 2</MenuItemAction>
        <MenuItemAction>Action 3</MenuItemAction>
        <MenuDivider variant="inset" />
        <MenuItemGroup paddingLikeOption>Group 2</MenuItemGroup>
        <MenuItemOption defaultSelected>Option 1</MenuItemOption>
        <MenuItemOption>Option 2</MenuItemOption>
        <MenuItemOption>Option 3</MenuItemOption>
        <MenuDivider variant="full" />
        <MenuItemAction paddingLikeOption intentModifier="danger">
          Destructive action
        </MenuItemAction>
      </MenuContainer>
    </div>
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,O,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"SizeStory",...(w=(O=s.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var I,v,A;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:"ManyItemsStory",...(A=(v=c.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var b,C,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"ScrollToSelectedStory",...(k=(C=a.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const ne=["Demo","Size","ManyItems","ScrollToSelected"];export{i as Demo,c as ManyItems,a as ScrollToSelected,s as Size,ne as __namedExportsOrder,te as default};
