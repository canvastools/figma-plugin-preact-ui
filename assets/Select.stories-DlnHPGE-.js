import{u as e,d as Y,A as Z,y as $}from"./hooks.module-BMDhD8C6.js";import{f}from"./index-Bk8NU0jy.js";import{S as t}from"./Select-Bav1P2-c.js";import{T as K}from"./Text-DSWvyrh8.js";import{I as Q}from"./Icon-CwUXZnq_.js";import{s as ee}from"./search-nqmKeCtG.js";import{S as oe}from"./preact.module-DhLccOoG.js";import{u as te}from"./MenuContainer-FDtenmfL.js";import{c as ne}from"./check-BZ3_v_md.js";import{a as re}from"./TooltipContext-Be-KFfgH.js";import"./typedForwardRef-BBQ-rOPo.js";import"./compat.module-BB5nNOI3.js";import"./chevronDown-uTkeLA0V.js";import"./MenuDivider-BaQtBiWO.js";import"./MenuItemOption-Bmba2oM0.js";import"./chevronUp-Db5EIuox.js";import"./TooltipContainer-DWitGrs9.js";const ae={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const options = [
  { 
    value: "option-1",
    label: "Option one"
  },
  { 
    value: "option-2",
    label: "Option two"
  },
  {
    value: "option-3",
    label: "Option three"
  },
]

<Select
  defaultValue="option-1"
  options={options}
/>
`}}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(t,{options:[{value:"option-1",label:"Option one"},{value:"option-2",label:"Option two"},{value:"option-3",label:"Option three"}],defaultValue:"option-1"})})},le={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const [value, setValue] = useState("option-1")

const options = [
  { 
    value: "option-1",
    label: "Option one"
  },
  { 
    value: "option-2",
    label: "Option two"
  },
  {
    value: "option-3",
    label: "Option three"
  },
]

<Select
  options={options}
  value={value}
  onValueChange={(args) => setValue(args.value)}
/>
`}}},render:()=>{const[o,b]=Y("option-1");return e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(K,{children:["value: ",o]}),e(t,{options:[{value:"option-1",label:"Option one"},{value:"option-2",label:"Option two"},{value:"option-3",label:"Option three"}],value:o,onValueChange:g=>b(g.value)})]})}},se={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Select placeholder="Placeholder"/>
`}}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(t,{options:[{value:"option-1",label:"Option one"},{value:"option-2",label:"Option two"},{value:"option-3",label:"Option three"}],placeholder:"Placeholder"})})},ie={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Select disabled />
`}}},render:()=>{const o=[{value:"option-1",label:"Option one"},{value:"option-2",label:"Option two"},{value:"option-3",label:"Option three"}];return e("div",{className:"sb-column sb-width-300 sb-gap-16",children:[e(t,{options:o,placeholder:"Placeholder",disabled:!0}),e(t,{options:o,defaultValue:"option-1",disabled:!0})]})}},ue={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Select
  prefix={
    <Icon 
      glyph={search}
      intentModifier="secondary"
    />
  }
/>
`}}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(t,{options:[{value:"option-1",label:"Option one"},{value:"option-2",label:"Option two"},{value:"option-3",label:"Option three"}],defaultValue:"option-1",prefix:e(Q,{glyph:ee,intentModifier:"secondary"})})})},pe={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Use an array of arrays for the `items` property to group options."},source:{language:"tsx",code:`
const options = [
  [
    { value: "option-1", label: "Option one" },
    { value: "option-2", label: "Option two" },
    { value: "option-3", label: "Option three" },
  ],
  [
    { value: "option-4", label: "Option four" },
    { value: "option-5", label: "Option five" },
    { value: "ooptionpt-6", label: "Option six" },
  ],
]

<Select
  defaultValue="option-1"
  options={options}
/>
`}}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(t,{options:[[{value:"option-1",label:"Option one"},{value:"option-2",label:"Option two"},{value:"option-3",label:"Option three"}],[{value:"option-4",label:"Option four"},{value:"option-5",label:"Option five"},{value:"ooptionpt-6",label:"Option six"}]],defaultValue:"option-1"})})},ce={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Custom items can be created using the useMenuContext hook to register the item and access the context for managing its states.<br/>It requires a custom CSS styling to be applied as well."},source:{language:"tsx",code:`
const CustomItem = ({
  label,
  value,
  disabled,
  focused,
  selected,
  onChange,
}) => {
  const { registerItem, clearFocus, setHoveredItem, setFocusedItem } = useMenuContext()

  const id = value ?? "custom-id"
  const itemRef = useRef(null)

  useEffect(() => {
    const unregister = registerItem({
      id: id,
      ref: itemRef,
      disabled,
    })
    return unregister
  }, [disabled, id])

  const handleClick = (event: MouseEvent) => {
    if (disabled) {
      event.preventDefault()
      return
    }

    event.stopPropagation()
    onChange({ event, value: id })
  }

  const handleMouseEnter = () => {
    if (disabled) return
    clearFocus()
    setHoveredItem(id)
  }

  const handleMouseLeave = () => {
    if (disabled) return
    setHoveredItem(null)
  }

  return (
    <div
      className="CustomMenuItem"
      id={id}
      ref={itemRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="CustomMenuItem__content">

        {selected && (<Icon glyph={check} size={16} disabled={disabled}/>)}

        <Text intent="neutral-inverted-fixed">
          {label}
        </Text>
        
      </div>
    </div>
  )
}

const options = [
  { value: "option-1", label: "Option one" },
  { value: "option-2", label: "Option two" },
  { value: "option-3", label: "Option three" },
  { value: "custom-value", label: "Custom option", children: <CustomItem /> },
]

<Select
  options={options}
  defaultValue="option-1"
/>
`}}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(t,{options:[{value:"option-1",label:"Option one"},{value:"option-2",label:"Option two"},{value:"option-3",label:"Option three"},{value:"custom-value",label:"Custom option",children:e(({label:a,value:g,disabled:n,focused:y,selected:W,onChange:h})=>{const{registerItem:C,clearFocus:X,setHoveredItem:O}=te(),r=g??"custom-id",w=Z(null);return $(()=>C({id:r,ref:w,disabled:n}),[n,r,C]),e(oe,{children:[e("style",{children:`
            .CustomMenuItem {
              padding: 0 var(--pui-spacing-200);
            }

            .CustomMenuItem__content {
              display: flex;
              align-items: center;
              gap: var(--pui-spacing-100);
              padding: var(--pui-spacing-100) var(--pui-spacing-200);
              border-radius: var(--pui-radius-medium);
            }

            .CustomMenuItem:hover .CustomMenuItem__content {
              background-color: green;
            }
            `}),e("div",{id:r,className:"CustomMenuItem",ref:w,onClick:l=>{if(n){l.preventDefault();return}l.stopPropagation(),h==null||h({event:l,value:r})},onMouseEnter:()=>{n||(X(),O(r))},onMouseLeave:()=>{n||O(null)},children:e("div",{className:"CustomMenuItem__content",children:[e("div",{style:{width:16,height:16},children:W&&e(Q,{glyph:ne,size:16,intent:y?"brand":"neutral-inverted-fixed",disabled:n})}),e(K,{intent:"neutral-inverted-fixed",children:[a,y?" [focused]":null]})]})})]})},{})}],defaultValue:"option-1",onValueChange:a=>console.log("onValueChange",a)})})},Ee={title:"Components/Select",component:t,tags:["autodocs"],argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},options:{control:{disable:!0},description:"Array of options to render in the select.",table:{type:{summary:"SelectOptionData[] | SelectOptionData[][]",detail:`
{
  label: string // required
  value: string // required
  disabled: boolean
  children: preact.ComponentChildren
}
            `}}},placeholder:{control:{type:"text"}},value:{control:{disable:!0},description:"Value for controlled state.",table:{type:{summary:"string"}}},defaultValue:{control:{type:"text"},description:"Value for uncontrolled state.",table:{type:{summary:"string"}}},grouped:{control:{type:"radio"},options:[void 0,"first","last","middle"]},error:{control:{type:"boolean"},defaultValue:{summary:"false"}},disabled:{control:{type:"boolean"},defaultValue:{summary:"false"}},prefix:{control:{disable:!0},description:"Element displayed before value.",table:{type:{summary:"preact.ComponentChildren"}}},tooltip:{control:{control:"text"},table:{type:{summary:"preact.ComponentChildren"}}},onBlur:{table:{type:{summary:"() => void"}}},onFocus:{table:{type:{summary:"() => void"}}},onValueChange:{table:{type:{summary:"(args) => void",detail:`
args: {
  event: MouseEvent
  value: string
}
          `}}},menuContainerProps:{control:{disable:!0},table:{type:{summary:"Pick<MenuContainerProps>",detail:`
{
  width: number
}
          `}}}}},s={tags:["!autodocs"],args:{id:void 0,className:"",placeholder:"Placeholder",defaultValue:"",grouped:void 0,error:!1,disabled:!1,tooltip:"Select tooltip",onBlur:f(),onFocus:f(),onValueChange:f()},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
<Select {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Select {...args} />
</TooltipContext>
`}}},render:o=>e("div",{className:"sb-column sb-width-300",children:e(re,{children:e(t,{options:[{value:"option-1",label:"Option one"},{value:"option-2",label:"Option two"},{value:"option-3",label:"Option three"}],...o})})})},i=ae,u=le,p=se,c=ie,d=ue,m=pe,v=ce;var x,S,V;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    placeholder: 'Placeholder',
    defaultValue: '',
    grouped: undefined,
    error: false,
    disabled: false,
    tooltip: 'Select tooltip',
    onBlur: fn(),
    onFocus: fn(),
    onValueChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
<Select {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Select {...args} />
</TooltipContext>
\`
      }
    }
  },
  render: args => {
    const options = [{
      value: 'option-1',
      label: 'Option one'
    }, {
      value: 'option-2',
      label: 'Option two'
    }, {
      value: 'option-3',
      label: 'Option three'
    }];
    return <div className="sb-column sb-width-300">
        <TooltipContext>
          <Select options={options} {...args} />
        </TooltipContext>
      </div>;
  }
}`,...(V=(S=s.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var I,M,P;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:"UncontrolledStory",...(P=(M=i.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var N,k,T;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:"ControlledStory",...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var E,D,_;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:"PlaceholderStory",...(_=(D=p.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var F,U,L;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:"DisabledStory",...(L=(U=c.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var R,G,H;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:"PrefixStory",...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var q,B,z;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:"ItemGroupsStory",...(z=(B=m.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var A,j,J;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:"CustomItemStory",...(J=(j=v.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};const De=["Demo","Uncontrolled","Controlled","Placeholder","Disabled","Prefix","ItemGroups","CustomItem"];export{u as Controlled,v as CustomItem,s as Demo,c as Disabled,m as ItemGroups,p as Placeholder,d as Prefix,i as Uncontrolled,De as __namedExportsOrder,Ee as default};
