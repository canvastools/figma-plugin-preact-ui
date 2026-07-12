import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,w as n}from"./compat.module-BbhDrffC.js";import{n as r,t as i}from"./jsxRuntime.module-B_u_rUE0.js";import{t as a}from"./Text-Bf8YN4P6.js";import{Gt as o,Jt as s,Kt as c,Vn as l,Wt as u,fn as d,m as f,t as p}from"./src-Ch66eTMx.js";var m,h=e((()=>{p(),o(),i(),m={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuItemOption defaultSelected={true}>
  {children}
</MenuItemOption>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full`,children:r(c,{width:208,children:[r(u,{defaultSelected:!0,children:`Menu Item Option 1`}),r(u,{children:`Menu Item Option 2`}),r(u,{children:`Menu Item Option 3`})]})})}})),g,_=e((()=>{n(),p(),o(),i(),g={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [selected, setSelected] = useState("option-1")

<MenuItemOption
  id="option-1"
  selected={selected === "option-1"}
  onSelectedChange={(args) => setSelected(args.id)}
>
  {children}
</MenuItemOption>
`}}},render:()=>{let[e,n]=t(`option-1`);return r(`div`,{className:`sb-column sb-width-full sb-gap-16`,children:r(f,{spacing:400,children:[r(a,{children:[`Selected: `,e]}),r(c,{width:208,children:[r(u,{id:`option-1`,selected:e===`option-1`,onSelectedChange:e=>n(e.id),children:`Menu Item Option 1`}),r(u,{id:`option-2`,selected:e===`option-2`,onSelectedChange:e=>n(e.id),children:`Menu Item Option 2`}),r(u,{id:`option-3`,selected:e===`option-3`,onSelectedChange:e=>n(e.id),children:`Menu Item Option 3`})]})]})})}}})),v,y=e((()=>{p(),o(),i(),v={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuItemOption disabled>{children}</MenuItemOption>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full`,children:r(c,{width:208,children:[r(u,{defaultSelected:!0,children:`Menu Item Option 1`}),r(u,{disabled:!0,children:`Menu Item Option 2`}),r(u,{children:`Menu Item Option 3`})]})})}})),b,x=e((()=>{p(),o(),i(),b={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full`,children:r(c,{width:208,children:[r(u,{defaultSelected:!0,prefix:r(l,{glyph:d,size:16,intent:`neutral-inverted-fixed`}),children:`Menu Item Option 1`}),r(u,{prefix:r(l,{glyph:d,size:16,intent:`neutral-inverted-fixed`}),children:`Menu Item Option 2`}),r(u,{prefix:r(l,{glyph:d,size:16,intent:`neutral-inverted-fixed`}),children:`Menu Item Option 3`})]})})}})),S,C=e((()=>{p(),o(),i(),S={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>r(`div`,{className:`sb-column sb-width-full`,children:r(c,{width:208,children:[r(u,{defaultSelected:!0,suffix:r(a,{intent:`neutral-inverted-fixed`,intentModifier:`secondary`,children:`Suffix`}),children:`Menu Item Option 1`}),r(u,{suffix:r(l,{glyph:d,size:16,intent:`neutral-inverted-fixed`}),children:`Menu Item Option 2`}),r(u,{suffix:r(l,{glyph:d,size:16,intent:`neutral-inverted-fixed`}),children:`Menu Item Option 3`})]})})}})),w,T,E,D,O,k,A,j,M;e((()=>{h(),_(),y(),x(),C(),p(),o(),i(),{fn:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/MenuItemOption`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:"A component for selecting an option from a list within a menu. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>."}}},argTypes:{id:{control:{type:`text`},description:`Unique identifier for the menu item used to track focus the item in the menu context. If not provided, a random UUID will be generated.`,table:{type:{summary:`string`}}},className:{control:{type:`text`}},defaultSelected:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Value for uncontrolled state.`},selected:{control:{disable:!0},description:`Value for controlled state.`,table:{type:{summary:`boolean`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},focused:{control:{type:`boolean`},description:"Works only when the componet is inside `<MenuContext/>`.",table:{defaultValue:{summary:`false`}}},prefix:{control:{disable:!0},description:`Element displayed before children.`,table:{type:{summary:`preact.ComponentChildren`}}},suffix:{control:{disable:!0},description:`Element displayed after children.`,table:{type:{summary:`preact.ComponentChildren`}}},children:{control:{type:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},tabIndex:{control:{type:`number`},description:`Tab order of the menu item. Omit for -1 (roving focus in menus).`,table:{type:{summary:`number`}}},onSelectedChange:{table:{type:{summary:`(args) => void`,detail:`
args: {
  event: MouseEvent
  id: string
  selected: boolean
}
`}}}}},E={args:{id:`menu-item-option`,className:``,defaultSelected:!0,disabled:!1,focused:!1,children:`Menu Item Option`,onSelectedChange:w()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<MenuContainer>
  <MenuItemOption {...args}>{children}</MenuItemOption>
</MenuContainer>
`}}},render:e=>r(`div`,{className:`sb-column sb-width-full`,children:r(s,{children:r(c,{width:208,children:r(u,{...e,children:e.children})})})})},D=m,O=g,k=v,A=b,j=S,E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`UncontrolledStory`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`ControlledStory`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`DisabledStory`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`PrefixStory`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`SuffixStory`,...j.parameters?.docs?.source}}},M=[`Demo`,`Uncontrolled`,`Controlled`,`Disabled`,`Prefix`,`Suffix`]}))();export{O as Controlled,E as Demo,k as Disabled,A as Prefix,j as Suffix,D as Uncontrolled,M as __namedExportsOrder,T as default};