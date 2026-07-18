import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,v as n,w as r}from"./compat.module-BiyPQZFw.js";import{n as i,t as a}from"./jsxRuntime.module-XYsEgyrh.js";import{B as o,Gn as s,Ht as c,I as l,Kt as u,R as d,Wt as f,qn as p,qt as m,t as h,xn as g}from"./src-BW54aR7x.js";var _,v=e((()=>{h(),m(),a(),_={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContainer
  width={200}
  height={300}
>
  {children}
</MenuContainer>
`}}},render:()=>i(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[i(u,{children:i(o,{children:`No width or height`})}),i(u,{width:200,children:i(o,{children:`Width: 200`})}),i(u,{height:300,children:i(o,{children:`Height: 300`})}),i(u,{width:200,height:300,children:i(o,{children:`Width: 200, Height: 300`})})]})}})),y,b=e((()=>{r(),h(),a(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let e=n(null),t=Array.from({length:100},(e,t)=>({type:`action`,id:`action-${t+1}`,children:`Action ${t+1}`,closeOnClick:!0,onClick:()=>console.log(`action-${t+1} clicked`)}));return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(p,{ref:e,children:`Open Menu (100 items)`}),i(l,{triggerRef:e,items:t})]})}}})),x,S=e((()=>{r(),h(),a(),x={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let e=n(null),[r,a]=t(`option-80`),o=Array.from({length:100},(e,t)=>{let n=`option-${t+1}`;return{type:`option`,id:n,selected:r===n,children:`Option ${t+1}`,onSelectedChange:({selected:e})=>a(e?n:null)}});return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(p,{ref:e,children:`Open Menu (selected #80)`}),i(l,{triggerRef:e,items:o,height:300})]})}}})),C,w,T,E,D,O;e((()=>{v(),b(),S(),m(),h(),a(),C={title:`Components/MenuContainer`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:"A wrapper component that displays menu items. Used inside <a href='/docs/components-menucontext--docs'>`<MenuContext/>`</a>."}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},width:{control:{type:`number`},description:`Takes the width of the menu items if not provided.`},height:{control:{type:`number`},description:`Takes the height of the menu items if not provided.`},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},w={args:{id:void 0,className:``,width:208,height:300},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContainer {...args}>{children}</MenuContainer>
`}}},render:e=>i(`div`,{className:`sb-column sb-width-full`,children:i(u,{...e,children:[i(d,{children:`Group 1`}),i(o,{children:`Action 1`}),i(o,{children:`Action 2`}),i(c,{variant:`inset`}),i(d,{children:`Group 2`}),i(o,{paddingLikeOption:!0,children:`Action 1`}),i(o,{paddingLikeOption:!0,children:`Action 2`}),i(d,{children:`Group 3`}),i(o,{prefix:i(s,{glyph:g,size:16}),children:`Action 1`}),i(o,{prefix:i(s,{glyph:g,size:16}),children:`Action 2`}),i(c,{variant:`inset`}),i(d,{paddingLikeOption:!0,children:`Group 4`}),i(f,{defaultSelected:!0,children:`Option 1`}),i(f,{children:`Option 2`}),i(c,{variant:`full`}),i(o,{paddingLikeOption:!0,intentModifier:`danger`,children:`Destructive action`})]})})},T=_,E=y,D=x,w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
        <MenuDivider variant="inset" />
        <MenuItemGroup>Group 2</MenuItemGroup>
        <MenuItemAction paddingLikeOption>Action 1</MenuItemAction>
        <MenuItemAction paddingLikeOption>Action 2</MenuItemAction>
        <MenuItemGroup>Group 3</MenuItemGroup>
        <MenuItemAction prefix={<Icon glyph={image} size={16} />}>Action 1</MenuItemAction>
        <MenuItemAction prefix={<Icon glyph={image} size={16} />}>Action 2</MenuItemAction>
        <MenuDivider variant="inset" />
        <MenuItemGroup paddingLikeOption>Group 4</MenuItemGroup>
        <MenuItemOption defaultSelected>Option 1</MenuItemOption>
        <MenuItemOption>Option 2</MenuItemOption>
        <MenuDivider variant="full" />
        <MenuItemAction paddingLikeOption intentModifier="danger">
          Destructive action
        </MenuItemAction>
      </MenuContainer>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`SizeStory`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`ManyItemsStory`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`ScrollToSelectedStory`,...D.parameters?.docs?.source}}},O=[`Demo`,`Size`,`ManyItems`,`ScrollToSelected`]}))();export{w as Demo,E as ManyItems,D as ScrollToSelected,T as Size,O as __namedExportsOrder,C as default};