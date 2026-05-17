import{u as e,d as E}from"./hooks.module-6Sbq__eq.js";import{f as P}from"./index-B4E_jmCM.js";import{M as t}from"./MenuItemOption-B-6tHtAZ.js";import{M as r,a as T}from"./MenuContainer-DIktfDZk.js";import{S as _}from"./Stack-FIJoWfyG.js";import{T as D}from"./Text-BbQ_b1VF.js";import{I as i}from"./Icon-C6_npEhI.js";import{l as s}from"./link-BlSd8q6h.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./check-CPtlZW3F.js";import"./chevronUp-CJIqewiB.js";import"./chevronDown-CECORTRu.js";const q={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuItemOption defaultSelected={true}>
  {children}
</MenuItemOption>
`}}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{width:208,children:[e(t,{defaultSelected:!0,children:"Menu Item Option 1"}),e(t,{children:"Menu Item Option 2"}),e(t,{children:"Menu Item Option 3"})]})})},A={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [selected, setSelected] = useState("option-1")

<MenuItemOption
  id="option-1"
  selected={selected === "option-1"}
  onSelectedChange={(args) => setSelected(args.id)}
>
  {children}
</MenuItemOption>
`}}},render:()=>{const[n,m]=E("option-1");return e("div",{className:"sb-column sb-width-full sb-gap-16",children:e(_,{spacing:400,children:[e(D,{children:["Selected: ",n]}),e(r,{width:208,children:[e(t,{id:"option-1",selected:n==="option-1",onSelectedChange:o=>m(o.id),children:"Menu Item Option 1"}),e(t,{id:"option-2",selected:n==="option-2",onSelectedChange:o=>m(o.id),children:"Menu Item Option 2"}),e(t,{id:"option-3",selected:n==="option-3",onSelectedChange:o=>m(o.id),children:"Menu Item Option 3"})]})]})})}},W={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuItemOption disabled>{children}</MenuItemOption>
`}}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{width:208,children:[e(t,{defaultSelected:!0,children:"Menu Item Option 1"}),e(t,{disabled:!0,children:"Menu Item Option 2"}),e(t,{children:"Menu Item Option 3"})]})})},j={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{width:208,children:[e(t,{defaultSelected:!0,prefix:e(i,{glyph:s,size:16,intent:"neutral-inverted-fixed"}),children:"Menu Item Option 1"}),e(t,{prefix:e(i,{glyph:s,size:16,intent:"neutral-inverted-fixed"}),children:"Menu Item Option 2"}),e(t,{prefix:e(i,{glyph:s,size:16,intent:"neutral-inverted-fixed"}),children:"Menu Item Option 3"})]})})},B={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(r,{width:208,children:[e(t,{defaultSelected:!0,suffix:e(D,{intent:"neutral-inverted-fixed",intentModifier:"secondary",children:"Suffix"}),children:"Menu Item Option 1"}),e(t,{suffix:e(i,{glyph:s,size:16,intent:"neutral-inverted-fixed"}),children:"Menu Item Option 2"}),e(t,{suffix:e(i,{glyph:s,size:16,intent:"neutral-inverted-fixed"}),children:"Menu Item Option 3"})]})})},ne={title:"Components/MenuItemOption",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A component for selecting an option from a list within a menu. Used inside <a href='/docs/components-menucontainer--docs'>`<MenuContainer/>`</a>."}}},argTypes:{id:{control:{type:"text"},description:"Unique identifier for the menu item used to track focus the item in the menu context. If not provided, a random UUID will be generated.",table:{type:{summary:"string"}}},className:{control:{type:"text"}},defaultSelected:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Value for uncontrolled state."},selected:{control:{disable:!0},description:"Value for controlled state.",table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},focused:{control:{type:"boolean"},description:"Works only when the componet is inside `<MenuContext/>`.",defaultValue:{summary:!1}},prefix:{control:{disable:!0},description:"Element displayed before children.",table:{type:{summary:"preact.ComponentChildren"}}},suffix:{control:{disable:!0},description:"Element displayed after children.",table:{type:{summary:"preact.ComponentChildren"}}},children:{control:{type:"text"},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},onSelectedChange:{table:{type:{summary:"(args) => void",detail:`
args: {
  event: MouseEvent
  id: string
  selected: boolean
}
`}}}}},a={tags:["!autodocs"],args:{id:"menu-item-option",className:"",defaultSelected:!0,disabled:!1,focused:!1,children:"Menu Item Option",onSelectedChange:P()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<MenuContainer>
  <MenuItemOption {...args}>{children}</MenuItemOption>
</MenuContainer>
`}}},render:n=>e("div",{className:"sb-column sb-width-full",children:e(T,{children:e(r,{width:208,children:e(t,{...n,children:n.children})})})})},d=q,l=A,c=W,u=j,p=B;var f,h,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!autodocs'],
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
        language: 'tsx',
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
          {/* @ts-expect-error Storybook spread */}
          <MenuItemOption {...args}>{args.children}</MenuItemOption>
        </MenuContainer>
      </MenuContext>
    </div>
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var M,b,x;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:"UncontrolledStory",...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,S,I;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:"ControlledStory",...(I=(S=l.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var O,w,C;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:"DisabledStory",...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var v,V,N;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:"PrefixStory",...(N=(V=u.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var U,k,z;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:"SuffixStory",...(z=(k=p.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const re=["Demo","Uncontrolled","Controlled","Disabled","Prefix","Suffix"];export{l as Controlled,a as Demo,c as Disabled,u as Prefix,p as Suffix,d as Uncontrolled,re as __namedExportsOrder,ne as default};
