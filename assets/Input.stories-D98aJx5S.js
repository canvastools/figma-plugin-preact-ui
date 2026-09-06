import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,w as n}from"./compat.module-gcU-nFZT.js";import{n as r,t as i}from"./jsxRuntime.module-CNTwvFFH.js";import{i as a,r as o}from"./Tooltip-DsjGtgh5.js";import{n as s,t as c}from"./Text-Cr-51GRl.js";import{n as l,t as u}from"./Icon-Brb725mi.js";import{n as d,t as f}from"./ButtonIcon-CpTDZvwn.js";import{n as p,t as m}from"./link-DAdg43gf.js";import{n as h,t as g}from"./search-CK9O9oNg.js";import{n as _,t as v}from"./Input-CyseSWne.js";var y;function b(){return(b=e((()=>{_(),i(),y={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Input defaultValue="Hello World!" />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:r(v,{defaultValue:`Hello World!`})})}})))()}var x;function S(){return(S=e((()=>{n(),s(),_(),i(),x={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [value, setValue] = useState("Hello World!")

<Input
  value={value}
  onValueChange={(args) => setValue(args.value)}
/>
`}}},render:()=>{let[e,n]=t(`Hello World!`);return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{children:[`value: `,e]}),r(v,{value:e,onValueChange:e=>n(e.value)})]})}}})))()}var C;function w(){return(w=e((()=>{_(),i(),C={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`If there is no label, the component will be displayed in the default variant.`},source:{code:`
<Input variant="default" />

<Input variant="list" />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-40`,children:[r(v,{defaultValue:`Hello World!`,label:`Label`,variant:`default`}),r(v,{defaultValue:`Hello World!`,label:`Label`,variant:`list`})]})}})))()}var T;function E(){return(E=e((()=>{_(),i(),T={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Input placeholder="Placeholder" />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:r(v,{placeholder:`Placeholder`})})}})))()}var D;function O(){return(O=e((()=>{_(),i(),D={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Input disabled />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(v,{disabled:!0}),r(v,{disabled:!0,placeholder:`Placeholder`}),r(v,{disabled:!0,defaultValue:`Default Value`})]})}})))()}var k;function A(){return(A=e((()=>{l(),g(),_(),i(),k={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Input
  prefix={
    <Icon
      glyph={search}
      intentModifier="secondary"
    />
  }
/>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(v,{placeholder:`Input with prefix`,prefix:r(u,{glyph:h,intentModifier:`secondary`})}),r(v,{placeholder:`Input with prefix (focusOnPrefix)`,focusOnPrefix:!0,prefix:r(u,{glyph:h,intentModifier:`secondary`})})]})}})))()}var j;function M(){return(M=e((()=>{m(),d(),_(),i(),j={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Input
  suffix={
    <ButtonIcon 
      icon={{ glyph: link }} 
      translucent
    />
  }
/>

<Input
  showSuffixOnHover
  suffix={
    <ButtonIcon 
      icon={{ glyph: link }} 
      translucent
    />
  }
/>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(v,{placeholder:`Input with suffix`,suffix:r(f,{icon:{glyph:p},translucent:!0})}),r(v,{placeholder:`Show suffix on hover`,showSuffixOnHover:!0,suffix:r(f,{icon:{glyph:p},translucent:!0})})]})}})))()}var N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{b(),S(),w(),E(),O(),A(),M(),a(),_(),i(),{fn:N}=__STORYBOOK_MODULE_TEST__,P={title:`Components/Input`,component:v,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},variant:{control:{type:`radio`},options:[`default`,`list`],table:{defaultValue:{summary:`default`}}},label:{control:{type:`text`}},placeholder:{control:{type:`text`}},type:{control:{type:`radio`},options:[`text`,`number`],table:{defaultValue:{summary:`text`}}},defaultValue:{control:{type:`text`},description:`Value for uncontrolled state.`},value:{control:{disable:!0},description:`Value for controlled state.`,table:{type:{summary:`string`}}},selected:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},ghost:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},grouped:{control:{type:`radio`},options:[void 0,`first`,`last`,`middle`]},error:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},prefix:{control:{disable:!0},description:`Element displayed before value.`,table:{type:{summary:`preact.ComponentChildren`}}},suffix:{control:{disable:!0},description:`Element displayed after value.`,table:{type:{summary:`preact.ComponentChildren`}}},dragHandle:{control:{disable:!0},description:"Props from `useNumericInput().getDragProps()`. Turns the left edge of the field into a scrub handle",table:{type:{summary:`NumericInputDragProps`}}},showSuffixOnHover:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},focusOnDoubleClick:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},focusOnPrefix:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},minLength:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Minimum length of the input value.`},maxLength:{control:{type:`number`},table:{defaultValue:{summary:`Infinity`}},description:`Maximum length of the input value.`},tooltip:{control:{type:`text`},description:`Tooltip content.`,table:{type:{summary:`preact.ComponentChildren`}}},autoFocus:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},selectOnFocus:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Select all text when the input receives focus.`},maxWidth:{control:{type:`number`},description:"Maximum width of the input (excluding label). Only applicable when variant is `list`.",table:{type:{summary:`number | string`}}},tabIndex:{control:{type:`number`},description:`Tab order of the focusable element (input, or display container when focusOnDoubleClick is enabled). Applied to a single tab stop only. Omit to keep the default.`,table:{type:{summary:`number`}}},onValueChange:{table:{type:{summary:`(args) => void`,detail:`
args: { 
  event: MouseEvent
  value: string
}
          `}}},onBlur:{table:{type:{summary:`(args) => void`,detail:`
args: { 
  event: FocusEvent
  value: string
}
          `}}},onFocus:{table:{type:{summary:`(args) => void`,detail:`
args: { 
  event: FocusEvent
  value: string
}
          `}}},onKeyDown:{table:{type:{summary:`(args) => void`,detail:`
args: { 
  event: KeyboardEvent
  value: string
}
          `}}}}},F={args:{id:void 0,className:``,variant:`default`,label:`Label`,type:`text`,placeholder:`Placeholder`,defaultValue:``,selected:!1,ghost:!1,grouped:void 0,error:!1,disabled:!1,showSuffixOnHover:!1,focusOnDoubleClick:!1,tooltip:`Input tooltip`,minLength:0,maxLength:9999,autoFocus:!1,selectOnFocus:!1,maxWidth:void 0,onValueChange:N(),onBlur:N(),onFocus:N(),onKeyDown:N()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Input {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Input {...args} />
</TooltipContext>
`}}},render:e=>r(`div`,{className:`sb-column sb-width-300`,children:r(o,{children:r(v,{...e})})})},I=y,L=x,R=C,z=T,B=D,V=k,H=j,U=[`Demo`,`Uncontrolled`,`Controlled`,`Variant`,`Placeholder`,`Disabled`,`Prefix`,`Suffix`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    variant: 'default',
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder',
    defaultValue: '',
    selected: false,
    ghost: false,
    grouped: undefined,
    error: false,
    disabled: false,
    showSuffixOnHover: false,
    focusOnDoubleClick: false,
    tooltip: 'Input tooltip',
    minLength: 0,
    maxLength: 9999,
    autoFocus: false,
    selectOnFocus: false,
    maxWidth: undefined,
    onValueChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
    onKeyDown: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<Input {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Input {...args} />
</TooltipContext>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-300">
      <TooltipContext>
        <Input {...args} />
      </TooltipContext>
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`UncontrolledStory`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`ControlledStory`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`VariantStory`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`PlaceholderStory`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`DisabledStory`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`PrefixStory`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`SuffixStory`,...H.parameters?.docs?.source}}}})))()}W();export{L as Controlled,F as Demo,B as Disabled,z as Placeholder,V as Prefix,H as Suffix,I as Uncontrolled,R as Variant,U as __namedExportsOrder,P as default};