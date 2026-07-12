import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{C as t,P as n,S as r,j as i,v as a,w as o}from"./compat.module-BbhDrffC.js";import{n as s,t as c}from"./jsxRuntime.module-B_u_rUE0.js";import{t as l}from"./Text-Bf8YN4P6.js";import{Bt as u,Nn as d,Vn as f,Vt as p,Xt as m,fn as h,qn as g,t as _,un as v,zn as y}from"./src-Ch66eTMx.js";var b,x=e((()=>{p(),c(),b={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>s(`div`,{className:`sb-column sb-width-300`,children:s(u,{options:[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`}],defaultValue:`option-1`})})}})),S,C=e((()=>{o(),_(),p(),c(),S={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let[e,t]=r(`option-1`);return s(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[s(l,{children:[`value: `,e]}),s(u,{options:[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`}],value:e,onValueChange:e=>t(e.value)})]})}}})),w,T=e((()=>{p(),c(),w={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{language:`tsx`,code:`
<Select placeholder="Placeholder"/>
`}}},render:()=>s(`div`,{className:`sb-column sb-width-300`,children:s(u,{options:[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`}],placeholder:`Placeholder`})})}})),E,D=e((()=>{p(),c(),E={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Select disabled />
`}}},render:()=>{let e=[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`}];return s(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[s(u,{options:e,placeholder:`Placeholder`,disabled:!0}),s(u,{options:e,defaultValue:`option-1`,disabled:!0})]})}}})),O,k=e((()=>{_(),p(),c(),O={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Select
  prefix={
    <Icon 
      glyph={search}
      intentModifier="secondary"
    />
  }
/>
`}}},render:()=>{let e=[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`}];return s(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[s(u,{options:e,defaultValue:`option-1`,prefix:s(f,{glyph:v,intentModifier:`secondary`})}),s(u,{options:e,defaultValue:`option-1`,prefix:s(y,{translucent:!0,icon:{glyph:h}})})]})}}})),A,j=e((()=>{p(),c(),A={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"Use an array of arrays for the `items` property to group options."},source:{code:`
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
`}}},render:()=>s(`div`,{className:`sb-column sb-width-300`,children:s(u,{options:[[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`}],[{value:`option-4`,label:`Option four`},{value:`option-5`,label:`Option five`},{value:`ooptionpt-6`,label:`Option six`}]],defaultValue:`option-1`})})}})),M,N=e((()=>{n(),o(),_(),p(),c(),M={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`Custom items can be created using the useMenuContext hook to register the item and access the context for managing its states.<br/>It requires a custom CSS styling to be applied as well.`},source:{code:`
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
`}}},render:()=>s(`div`,{className:`sb-column sb-width-300`,children:s(u,{options:[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`},{value:`custom-value`,label:`Custom option`,children:s(({label:e,value:n,disabled:r,focused:o,selected:c,onChange:u})=>{let{registerItem:p,clearFocus:h,setHoveredItem:g}=m(),_=n??`custom-id`,v=a(null);return t(()=>p({id:_,ref:v,disabled:r}),[r,_,p]),s(i,{children:[s(`style`,{children:`
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
            `}),s(`div`,{id:_,className:`CustomMenuItem`,ref:v,onClick:e=>{if(r){e.preventDefault();return}e.stopPropagation(),u?.({event:e,value:_})},onMouseEnter:()=>{r||(h(),g(_))},onMouseLeave:()=>{r||g(null)},children:s(`div`,{className:`CustomMenuItem__content`,children:[s(`div`,{style:{width:16,height:16},children:c&&s(f,{glyph:d,size:16,intent:o?`brand`:`neutral-inverted-fixed`,disabled:r})}),s(l,{intent:`neutral-inverted-fixed`,children:[e,o?` [focused]`:null]})]})})]})},{})}],defaultValue:`option-1`,onValueChange:e=>console.log(`onValueChange`,e)})})}})),P,F,I,L,R,z,B,V,H,U,W;e((()=>{x(),C(),T(),D(),k(),j(),N(),_(),p(),c(),{fn:P}=__STORYBOOK_MODULE_TEST__,F={title:`Components/Select`,component:u,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},options:{control:{disable:!0},description:`Array of options to render in the select.`,table:{type:{summary:`SelectOptionData[] | SelectOptionData[][]`,detail:`
{
  label: string // required
  value: string // required
  disabled: boolean
  children: preact.ComponentChildren
}
            `}}},placeholder:{control:{type:`text`}},value:{control:{disable:!0},description:`Value for controlled state.`,table:{type:{summary:`string`}}},defaultValue:{control:{type:`text`},description:`Value for uncontrolled state.`,table:{type:{summary:`string`}}},grouped:{control:{type:`radio`},options:[void 0,`first`,`last`,`middle`]},ghost:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},error:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},prefix:{control:{disable:!0},description:`Element displayed before value.`,table:{type:{summary:`preact.ComponentChildren`}}},tooltip:{control:{control:`text`},table:{type:{summary:`preact.ComponentChildren`}}},tabIndex:{control:{type:`number`},description:`Tab order of the select trigger. Omit for 0 when enabled and -1 when disabled.`,table:{type:{summary:`number`}}},onBlur:{table:{type:{summary:`() => void`}}},onFocus:{table:{type:{summary:`() => void`}}},onValueChange:{table:{type:{summary:`(args) => void`,detail:`
args: {
  event: MouseEvent
  value: string
}
          `}}},menuContainerProps:{control:{disable:!0},table:{type:{summary:`Pick<MenuContainerProps>`,detail:`
{
  width: number
}
          `}}}}},I={args:{id:void 0,className:``,placeholder:`Placeholder`,defaultValue:``,grouped:void 0,ghost:!1,error:!1,disabled:!1,tooltip:`Select tooltip`,onBlur:P(),onFocus:P(),onValueChange:P()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Select {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Select {...args} />
</TooltipContext>
`}}},render:e=>s(`div`,{className:`sb-column sb-width-300`,children:s(g,{children:s(u,{options:[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`}],...e})})})},L=b,R=S,z=w,B=E,V=O,H=A,U=M,I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    placeholder: 'Placeholder',
    defaultValue: '',
    grouped: undefined,
    ghost: false,
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`UncontrolledStory`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`ControlledStory`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`PlaceholderStory`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`DisabledStory`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`PrefixStory`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`ItemGroupsStory`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`CustomItemStory`,...U.parameters?.docs?.source}}},W=[`Demo`,`Uncontrolled`,`Controlled`,`Placeholder`,`Disabled`,`Prefix`,`ItemGroups`,`CustomItem`]}))();export{R as Controlled,U as CustomItem,I as Demo,B as Disabled,H as ItemGroups,z as Placeholder,V as Prefix,L as Uncontrolled,W as __namedExportsOrder,F as default};