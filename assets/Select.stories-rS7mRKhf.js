import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{C as t,P as n,S as r,j as i,v as a,w as o}from"./compat.module-gcU-nFZT.js";import{n as s,t as c}from"./jsxRuntime.module-CNTwvFFH.js";import{a as l,i as u}from"./MenuContainer-mmwPsDY6.js";import{i as d,r as f}from"./Tooltip-DsjGtgh5.js";import{n as p,t as m}from"./Text-Cr-51GRl.js";import{n as h,t as g}from"./Icon-Brb725mi.js";import{n as _,t as v}from"./ButtonIcon-CpTDZvwn.js";import{n as y,t as b}from"./check-DM4xRwrZ.js";import{n as x,t as S}from"./link-DAdg43gf.js";import{n as C,t as w}from"./search-CK9O9oNg.js";import{n as T,t as E}from"./Select-TE3ZUDMN.js";var D;function O(){return(O=e((()=>{T(),c(),D={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>s(`div`,{className:`sb-column sb-width-300`,children:s(E,{options:[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`}],defaultValue:`option-1`})})}})))()}var k;function A(){return(A=e((()=>{o(),p(),T(),c(),k={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>{let[e,t]=r(`option-1`);return s(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[s(m,{children:[`value: `,e]}),s(E,{options:[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`}],value:e,onValueChange:e=>t(e.value)})]})}}})))()}var j;function M(){return(M=e((()=>{T(),c(),j={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{language:`tsx`,code:`
<Select placeholder="Placeholder"/>
`}}},render:()=>s(`div`,{className:`sb-column sb-width-300`,children:s(E,{options:[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`}],placeholder:`Placeholder`})})}})))()}var N;function P(){return(P=e((()=>{T(),c(),N={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Select disabled />
`}}},render:()=>{let e=[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`}];return s(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[s(E,{options:e,placeholder:`Placeholder`,disabled:!0}),s(E,{options:e,defaultValue:`option-1`,disabled:!0})]})}}})))()}var F;function I(){return(I=e((()=>{h(),_(),w(),S(),T(),c(),F={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Select
  prefix={
    <Icon 
      glyph={search}
      intentModifier="secondary"
    />
  }
/>
`}}},render:()=>{let e=[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`}];return s(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[s(E,{options:e,defaultValue:`option-1`,prefix:s(g,{glyph:C,intentModifier:`secondary`})}),s(E,{options:e,defaultValue:`option-1`,prefix:s(v,{translucent:!0,icon:{glyph:x}})})]})}}})))()}var L;function R(){return(R=e((()=>{T(),c(),L={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:"Use an array of arrays for the `items` property to group options."},source:{code:`
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
`}}},render:()=>s(`div`,{className:`sb-column sb-width-300`,children:s(E,{options:[[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`}],[{value:`option-4`,label:`Option four`},{value:`option-5`,label:`Option five`},{value:`ooptionpt-6`,label:`Option six`}]],defaultValue:`option-1`})})}})))()}var z;function B(){return(B=e((()=>{n(),o(),u(),p(),h(),y(),T(),c(),z={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`Custom items can be created using the useMenuContext hook to register the item and access the context for managing its states.<br/>It requires a custom CSS styling to be applied as well.`},source:{code:`
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
`}}},render:()=>s(`div`,{className:`sb-column sb-width-300`,children:s(E,{options:[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`},{value:`custom-value`,label:`Custom option`,children:s(({label:e,value:n,disabled:r,focused:o,selected:c,onChange:u})=>{let{registerItem:d,clearFocus:f,setHoveredItem:p}=l(),h=n??`custom-id`,_=a(null);return t(()=>d({id:h,ref:_,disabled:r}),[r,h,d]),s(i,{children:[s(`style`,{children:`
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
            `}),s(`div`,{id:h,className:`CustomMenuItem`,ref:_,onClick:e=>{if(r){e.preventDefault();return}e.stopPropagation(),u?.({event:e,value:h})},onMouseEnter:()=>{r||(f(),p(h))},onMouseLeave:()=>{r||p(null)},children:s(`div`,{className:`CustomMenuItem__content`,children:[s(`div`,{style:{width:16,height:16},children:c&&s(g,{glyph:b,size:16,intent:o?`brand`:`neutral-inverted-fixed`,disabled:r})}),s(m,{intent:`neutral-inverted-fixed`,children:[e,o?` [focused]`:null]})]})})]})},{})}],defaultValue:`option-1`,onValueChange:e=>console.log(`onValueChange`,e)})})}})))()}var V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{O(),A(),M(),P(),I(),R(),B(),d(),T(),c(),{fn:V}=__STORYBOOK_MODULE_TEST__,H={title:`Components/Select`,component:E,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},options:{control:{disable:!0},description:`Array of options to render in the select.`,table:{type:{summary:`SelectOptionData[] | SelectOptionData[][]`,detail:`
{
  label: string // required
  value: string // required
  disabled: boolean
  children: preact.ComponentChildren
}
            `}}},placeholder:{control:{type:`text`}},value:{control:{disable:!0},description:`Value for controlled state.`,table:{type:{summary:`string`}}},defaultValue:{control:{type:`text`},description:`Value for uncontrolled state.`,table:{type:{summary:`string`}}},grouped:{control:{type:`radio`},options:[void 0,`first`,`last`,`middle`]},selected:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},ghost:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},error:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},prefix:{control:{disable:!0},description:`Element displayed before value.`,table:{type:{summary:`preact.ComponentChildren`}}},tooltip:{control:{control:`text`},table:{type:{summary:`preact.ComponentChildren`}}},tabIndex:{control:{type:`number`},description:`Tab order of the select trigger. Omit for 0 when enabled and -1 when disabled.`,table:{type:{summary:`number`}}},onBlur:{table:{type:{summary:`() => void`}}},onFocus:{table:{type:{summary:`() => void`}}},onValueChange:{table:{type:{summary:`(args) => void`,detail:`
args: {
  event: MouseEvent
  value: string
}
          `}}},menuContainerProps:{control:{disable:!0},table:{type:{summary:`Pick<MenuContainerProps>`,detail:`
{
  id: string
  className: string
  width: number
  height: number
}
          `}}}}},U={args:{id:void 0,className:``,placeholder:`Placeholder`,defaultValue:``,grouped:void 0,selected:!1,ghost:!1,error:!1,disabled:!1,tooltip:`Select tooltip`,onBlur:V(),onFocus:V(),onValueChange:V()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Select {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Select {...args} />
</TooltipContext>
`}}},render:e=>s(`div`,{className:`sb-column sb-width-300`,children:s(f,{children:s(E,{options:[{value:`option-1`,label:`Option one`},{value:`option-2`,label:`Option two`},{value:`option-3`,label:`Option three`}],...e})})})},W=D,G=k,K=j,q=N,J=F,Y=L,X=z,Z=[`Demo`,`Uncontrolled`,`Controlled`,`Placeholder`,`Disabled`,`Prefix`,`ItemGroups`,`CustomItem`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    placeholder: 'Placeholder',
    defaultValue: '',
    grouped: undefined,
    selected: false,
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`UncontrolledStory`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`ControlledStory`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`PlaceholderStory`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`DisabledStory`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`PrefixStory`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`ItemGroupsStory`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`CustomItemStory`,...X.parameters?.docs?.source}}}})))()}Q();export{G as Controlled,X as CustomItem,U as Demo,q as Disabled,Y as ItemGroups,K as Placeholder,J as Prefix,W as Uncontrolled,Z as __namedExportsOrder,H as default};