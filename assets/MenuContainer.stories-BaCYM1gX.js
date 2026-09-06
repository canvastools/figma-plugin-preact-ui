import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,v as n,w as r}from"./compat.module-gcU-nFZT.js";import{n as i,t as a}from"./jsxRuntime.module-CNTwvFFH.js";import{n as o,t as s}from"./MenuContainer-mmwPsDY6.js";import{n as c,t as l}from"./Button-DTA_GS6N.js";import{n as u,t as d}from"./Icon-Brb725mi.js";import{n as f,t as p}from"./image-BxYKrweI.js";import{n as m,t as h}from"./MenuItemOption-DjtbD26i.js";import{n as g,t as _}from"./MenuDivider-CppPeNf-.js";import{n as v,t as y}from"./MenuItemAction-B1sv30zB.js";import{n as b,t as x}from"./MenuItemGroup-Bv-yrMps.js";import{n as S,t as C}from"./Menu-CMRXfizp.js";var w;function T(){return(T=e((()=>{v(),o(),a(),w={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContainer
  width={200}
  height={300}
>
  {children}
</MenuContainer>
`}}},render:()=>i(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[i(s,{children:i(y,{children:`No width or height`})}),i(s,{width:200,children:i(y,{children:`Width: 200`})}),i(s,{height:300,children:i(y,{children:`Height: 300`})}),i(s,{width:200,height:300,children:i(y,{children:`Width: 200, Height: 300`})})]})}})))()}var E;function D(){return(D=e((()=>{r(),c(),S(),a(),E={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let e=n(null),t=Array.from({length:100},(e,t)=>({type:`action`,id:`action-${t+1}`,children:`Action ${t+1}`,closeOnClick:!0,onClick:()=>console.log(`action-${t+1} clicked`)}));return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(l,{ref:e,children:`Open Menu (100 items)`}),i(C,{triggerRef:e,items:t})]})}}})))()}var O;function k(){return(k=e((()=>{r(),c(),S(),a(),O={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let e=n(null),[r,a]=t(`option-80`),o=Array.from({length:100},(e,t)=>{let n=`option-${t+1}`;return{type:`option`,id:n,selected:r===n,children:`Option ${t+1}`,onSelectedChange:({selected:e})=>a(e?n:null)}});return i(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:[i(l,{ref:e,children:`Open Menu (selected #80)`}),i(C,{triggerRef:e,items:o,height:300})]})}}})))()}var A,j,M,N,P,F;function I(){return(I=e((()=>{T(),D(),k(),o(),g(),v(),m(),b(),u(),f(),a(),A={title:`Components/MenuContainer`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:"A wrapper component that displays menu items. Used inside <a href='/docs/components-menucontext--docs'>`<MenuContext/>`</a>."}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},width:{control:{type:`number`},description:`Takes the width of the menu items if not provided.`},height:{control:{type:`number`},description:`Takes the height of the menu items if not provided.`},children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},j={args:{id:void 0,className:``,width:208,height:300},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContainer {...args}>{children}</MenuContainer>
`}}},render:e=>i(`div`,{className:`sb-column sb-width-full`,children:i(s,{...e,children:[i(x,{children:`Group 1`}),i(y,{children:`Action 1`}),i(y,{children:`Action 2`}),i(_,{variant:`inset`}),i(x,{children:`Group 2`}),i(y,{paddingLikeOption:!0,children:`Action 1`}),i(y,{paddingLikeOption:!0,children:`Action 2`}),i(x,{children:`Group 3`}),i(y,{prefix:i(d,{glyph:p,size:16}),children:`Action 1`}),i(y,{prefix:i(d,{glyph:p,size:16}),children:`Action 2`}),i(_,{variant:`inset`}),i(x,{paddingLikeOption:!0,children:`Group 4`}),i(h,{defaultSelected:!0,children:`Option 1`}),i(h,{children:`Option 2`}),i(_,{variant:`full`}),i(y,{paddingLikeOption:!0,intentModifier:`danger`,children:`Destructive action`})]})})},M=w,N=E,P=O,F=[`Demo`,`Size`,`ManyItems`,`ScrollToSelected`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`SizeStory`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`ManyItemsStory`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`ScrollToSelectedStory`,...P.parameters?.docs?.source}}}})))()}I();export{j as Demo,N as ManyItems,P as ScrollToSelected,M as Size,F as __namedExportsOrder,A as default};