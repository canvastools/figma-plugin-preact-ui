import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,w as n}from"./compat.module-gcU-nFZT.js";import{n as r,t as i}from"./jsxRuntime.module-CNTwvFFH.js";import{i as a,n as o,r as s,t as c}from"./MenuContainer-mmwPsDY6.js";import{n as l,t as u}from"./Text-Cr-51GRl.js";import{n as d,t as f}from"./Icon-Brb725mi.js";import{n as p,t as m}from"./link-DAdg43gf.js";import{n as h,t as g}from"./MenuItemOption-DjtbD26i.js";import{n as _,t as v}from"./Stack-CRI7JcwR.js";var y;function b(){return(b=e((()=>{o(),h(),i(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuItemOption defaultSelected={true}>
  {children}
</MenuItemOption>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full`,children:r(c,{width:208,children:[r(g,{defaultSelected:!0,children:`Menu Item Option 1`}),r(g,{children:`Menu Item Option 2`}),r(g,{children:`Menu Item Option 3`})]})})}})))()}var x;function S(){return(S=e((()=>{n(),l(),o(),_(),h(),i(),x={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [selected, setSelected] = useState("option-1")

<MenuItemOption
  id="option-1"
  selected={selected === "option-1"}
  onSelectedChange={(args) => setSelected(args.id)}
>
  {children}
</MenuItemOption>
`}}},render:()=>{let[e,n]=t(`option-1`);return r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:r(v,{spacing:400,children:[r(u,{children:[`Selected: `,e]}),r(c,{width:208,children:[r(g,{id:`option-1`,selected:e===`option-1`,onSelectedChange:e=>n(e.id),children:`Menu Item Option 1`}),r(g,{id:`option-2`,selected:e===`option-2`,onSelectedChange:e=>n(e.id),children:`Menu Item Option 2`}),r(g,{id:`option-3`,selected:e===`option-3`,onSelectedChange:e=>n(e.id),children:`Menu Item Option 3`})]})]})})}}})))()}var C;function w(){return(w=e((()=>{o(),h(),i(),C={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuItemOption disabled>{children}</MenuItemOption>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full`,children:r(c,{width:208,children:[r(g,{defaultSelected:!0,children:`Menu Item Option 1`}),r(g,{disabled:!0,children:`Menu Item Option 2`}),r(g,{children:`Menu Item Option 3`})]})})}})))()}var T;function E(){return(E=e((()=>{d(),m(),o(),h(),i(),T={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuItemOption 
  prefix={
    <Icon 
      glyph={link}
      size={16}
      intent="neutral-inverted-fixed" 
    />
  }
>
  {children}
</MenuItemOption>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full`,children:r(c,{width:208,children:[r(g,{defaultSelected:!0,prefix:r(f,{glyph:p,size:16,intent:`neutral-inverted-fixed`}),children:`Menu Item Option 1`}),r(g,{prefix:r(f,{glyph:p,size:16,intent:`neutral-inverted-fixed`}),children:`Menu Item Option 2`}),r(g,{prefix:r(f,{glyph:p,size:16,intent:`neutral-inverted-fixed`}),children:`Menu Item Option 3`})]})})}})))()}var D;function O(){return(O=e((()=>{d(),m(),o(),l(),h(),i(),D={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuItemOption 
  suffix={
    <Icon 
      glyph={link}
      size={16}
      intent="neutral-inverted-fixed" 
    />
  }
>
  {children}
</MenuItemOption>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full`,children:r(c,{width:208,children:[r(g,{defaultSelected:!0,suffix:r(u,{intent:`neutral-inverted-fixed`,intentModifier:`secondary`,children:`Suffix`}),children:`Menu Item Option 1`}),r(g,{suffix:r(f,{glyph:p,size:16,intent:`neutral-inverted-fixed`}),children:`Menu Item Option 2`}),r(g,{suffix:r(f,{glyph:p,size:16,intent:`neutral-inverted-fixed`}),children:`Menu Item Option 3`})]})})}})))()}var k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{b(),S(),w(),E(),O(),o(),a(),h(),i(),{fn:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/MenuItemOption`,component:g,tags:[`autodocs`],parameters:{docs:{description:{component:"A component for selecting an option from a list within a menu. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>."}}},argTypes:{id:{control:{type:`text`},description:`Unique identifier for the menu item used to track focus the item in the menu context. If not provided, a random UUID will be generated.`,table:{type:{summary:`string`}}},className:{control:{type:`text`}},defaultSelected:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Value for uncontrolled state.`},selected:{control:{disable:!0},description:`Value for controlled state.`,table:{type:{summary:`boolean`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:"Works only when the componet is inside `<MenuContext/>`.",table:{defaultValue:{summary:`false`}}},prefix:{control:{disable:!0},description:`Element displayed before children.`,table:{type:{summary:`preact.ComponentChildren`}}},suffix:{control:{disable:!0},description:`Element displayed after children.`,table:{type:{summary:`preact.ComponentChildren`}}},children:{control:{type:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},tabIndex:{control:{type:`number`},description:`Tab order of the menu item. Omit for -1 (roving focus in menus).`,table:{type:{summary:`number`}}},onSelectedChange:{table:{type:{summary:`(args) => void`,detail:`
args: {
  event: MouseEvent
  id: string
  selected: boolean
}
`}}}}},j={args:{id:`menu-item-option`,className:``,defaultSelected:!0,disabled:!1,focused:!1,children:`Menu Item Option`,onSelectedChange:k()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContainer>
  <MenuItemOption {...args}>{children}</MenuItemOption>
</MenuContainer>
`}}},render:e=>r(`div`,{className:`sb-column sb-width-full`,children:r(s,{children:r(c,{width:208,children:r(g,{...e,children:e.children})})})})},M=y,N=x,P=C,F=T,I=D,L=[`Demo`,`Uncontrolled`,`Controlled`,`Disabled`,`Prefix`,`Suffix`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'menu-item-option',
    className: '',
    defaultSelected: true,
    disabled: false,
    focused: false,
    children: 'Menu Item Option',
    onSelectedChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<MenuContainer>
  <MenuItemOption {...args}>{children}</MenuItemOption>
</MenuContainer>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-full">
      <MenuContext>
        <MenuContainer width={208}>
          <MenuItemOption {...args}>{args.children}</MenuItemOption>
        </MenuContainer>
      </MenuContext>
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`UncontrolledStory`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`ControlledStory`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`DisabledStory`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`PrefixStory`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`SuffixStory`,...I.parameters?.docs?.source}}}})))()}R();export{N as Controlled,j as Demo,P as Disabled,F as Prefix,I as Suffix,M as Uncontrolled,L as __namedExportsOrder,A as default};