import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,v as n,w as r}from"./compat.module-BbhDrffC.js";import{n as i,t as a}from"./jsxRuntime.module-B_u_rUE0.js";import{B as o,Ht as s,I as c,Kt as l,R as u,Un as d,Wt as f,qt as p,t as m}from"./src-Ch66eTMx.js";var h,g=e((()=>{m(),p(),a(),h={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContainer
  width={200}
  height={300}
>
  {children}
</MenuContainer>
`}}},render:()=>i(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[i(l,{children:i(o,{children:`No width or height`})}),i(l,{width:200,children:i(o,{children:`Width: 200`})}),i(l,{height:300,children:i(o,{children:`Height: 300`})}),i(l,{width:200,height:300,children:i(o,{children:`Width: 200, Height: 300`})})]})}})),_,v=e((()=>{r(),m(),a(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let e=n(null),t=Array.from({length:100},(e,t)=>({type:`action`,id:`action-${t+1}`,children:`Action ${t+1}`,closeOnClick:!0,onClick:()=>console.log(`action-${t+1} clicked`)}));return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(d,{ref:e,children:`Open Menu (100 items)`}),i(c,{triggerRef:e,items:t})]})}}})),y,b=e((()=>{r(),m(),a(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let e=n(null),[r,a]=t(`option-80`),o=Array.from({length:100},(e,t)=>{let n=`option-${t+1}`;return{type:`option`,id:n,selected:r===n,children:`Option ${t+1}`,onSelectedChange:({selected:e})=>a(e?n:null)}});return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(d,{ref:e,children:`Open Menu (selected #80)`}),i(c,{triggerRef:e,items:o,height:300})]})}}})),x,S,C,w,T,E;e((()=>{g(),v(),b(),p(),m(),a(),x={title:`Components/MenuContainer`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:"A wrapper component that displays menu items. Used inside <a href='/docs/components-menucontext--docs'>`<MenuContext/>`</a>."}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},width:{control:{type:`number`},description:`Takes the width of the menu items if not provided.`},height:{control:{type:`number`},description:`Takes the height of the menu items if not provided.`},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},S={args:{id:void 0,className:``,width:208,height:300},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContainer {...args}>{children}</MenuContainer>
`}}},render:e=>i(`div`,{className:`sb-column sb-width-full`,children:i(l,{...e,children:[i(u,{children:`Group 1`}),i(o,{children:`Action 1`}),i(o,{children:`Action 2`}),i(o,{children:`Action 3`}),i(s,{variant:`inset`}),i(u,{paddingLikeOption:!0,children:`Group 2`}),i(f,{defaultSelected:!0,children:`Option 1`}),i(f,{children:`Option 2`}),i(f,{children:`Option 3`}),i(s,{variant:`full`}),i(o,{paddingLikeOption:!0,intentModifier:`danger`,children:`Destructive action`})]})})},C=h,w=_,T=y,S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`SizeStory`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`ManyItemsStory`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`ScrollToSelectedStory`,...T.parameters?.docs?.source}}},E=[`Demo`,`Size`,`ManyItems`,`ScrollToSelected`]}))();export{S as Demo,w as ManyItems,T as ScrollToSelected,C as Size,E as __namedExportsOrder,x as default};