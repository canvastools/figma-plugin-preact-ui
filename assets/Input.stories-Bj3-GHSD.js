import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,w as n}from"./compat.module-BbhDrffC.js";import{n as r,t as i}from"./jsxRuntime.module-B_u_rUE0.js";import{t as a}from"./Text-Bf8YN4P6.js";import{Qt as o,Vn as s,Zt as c,fn as l,qn as u,t as d,un as f,zn as p}from"./src-Ch66eTMx.js";var m,h=e((()=>{o(),i(),m={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Input defaultValue="Hello World!" />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:r(c,{defaultValue:`Hello World!`})})}})),g,_=e((()=>{n(),d(),o(),i(),g={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
const [value, setValue] = useState("Hello World!")

<Input
  value={value}
  onValueChange={(args) => setValue(args.value)}
/>
`}}},render:()=>{let[e,n]=t(`Hello World!`);return r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(a,{children:[`value: `,e]}),r(c,{value:e,onValueChange:e=>n(e.value)})]})}}})),v,y=e((()=>{o(),i(),v={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{description:{story:`If there is no label, the component will be displayed in the default variant.`},source:{code:`
<Input variant="default" />

<Input variant="list" />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-40`,children:[r(c,{defaultValue:`Hello World!`,label:`Label`,variant:`default`}),r(c,{defaultValue:`Hello World!`,label:`Label`,variant:`list`})]})}})),b,x=e((()=>{o(),i(),b={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Input placeholder="Placeholder" />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:r(c,{placeholder:`Placeholder`})})}})),S,C=e((()=>{o(),i(),S={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Input disabled />
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{disabled:!0}),r(c,{disabled:!0,placeholder:`Placeholder`}),r(c,{disabled:!0,defaultValue:`Default Value`})]})}})),w,T=e((()=>{d(),o(),i(),w={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Input
  prefix={
    <Icon
      glyph={search}
      intentModifier="secondary"
    />
  }
/>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{placeholder:`Input with prefix`,prefix:r(s,{glyph:f,intentModifier:`secondary`})}),r(c,{placeholder:`Input with prefix (focusOnPrefix)`,focusOnPrefix:!0,prefix:r(s,{glyph:f,intentModifier:`secondary`})})]})}})),E,D=e((()=>{d(),o(),i(),E={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300 sb-gap-16`,children:[r(c,{placeholder:`Input with suffix`,suffix:r(p,{icon:{glyph:l},translucent:!0})}),r(c,{placeholder:`Show suffix on hover`,showSuffixOnHover:!0,suffix:r(p,{icon:{glyph:l},translucent:!0})})]})}})),O,k,A,j,M,N,P,F,I,L,R;e((()=>{h(),_(),y(),x(),C(),T(),D(),d(),o(),i(),{fn:O}=__STORYBOOK_MODULE_TEST__,k={title:`Components/Input`,component:c,tags:[`autodocs`],argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},variant:{control:{type:`radio`},options:[`default`,`list`],table:{defaultValue:{summary:`default`}}},label:{control:{type:`text`}},placeholder:{control:{type:`text`}},type:{control:{type:`radio`},options:[`text`,`number`],table:{defaultValue:{summary:`text`}}},defaultValue:{control:{type:`text`},description:`Value for uncontrolled state.`},value:{control:{disable:!0},description:`Value for controlled state.`,table:{type:{summary:`string`}}},ghost:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},grouped:{control:{type:`radio`},options:[void 0,`first`,`last`,`middle`]},error:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},disabled:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},prefix:{control:{disable:!0},description:`Element displayed before value.`,table:{type:{summary:`preact.ComponentChildren`}}},suffix:{control:{disable:!0},description:`Element displayed after value.`,table:{type:{summary:`preact.ComponentChildren`}}},showSuffixOnHover:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},focusOnDoubleClick:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},focusOnPrefix:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},minLength:{control:{type:`number`},table:{defaultValue:{summary:`0`}},description:`Minimum length of the input value.`},maxLength:{control:{type:`number`},table:{defaultValue:{summary:`Infinity`}},description:`Maximum length of the input value.`},tooltip:{control:{type:`text`},description:`Tooltip content.`,table:{type:{summary:`preact.ComponentChildren`}}},autoFocus:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}}},selectOnFocus:{control:{type:`boolean`},table:{defaultValue:{summary:`false`}},description:`Select all text when the input receives focus.`},maxWidth:{control:{type:`number`},description:"Maximum width of the input (excluding label). Only applicable when variant is `list`.",table:{type:{summary:`number | string`}}},tabIndex:{control:{type:`number`},description:`Tab order of the focusable element (input, or display container when focusOnDoubleClick is enabled). Applied to a single tab stop only. Omit to keep the default.`,table:{type:{summary:`number`}}},onValueChange:{table:{type:{summary:`(args) => void`,detail:`
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
          `}}}}},A={args:{id:void 0,className:``,variant:`default`,label:`Label`,type:`text`,placeholder:`Placeholder`,defaultValue:``,ghost:!1,grouped:void 0,error:!1,disabled:!1,showSuffixOnHover:!1,focusOnDoubleClick:!1,tooltip:`Input tooltip`,minLength:0,maxLength:9999,autoFocus:!1,selectOnFocus:!1,maxWidth:void 0,onValueChange:O(),onBlur:O(),onFocus:O(),onKeyDown:O()},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Input {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <Input {...args} />
</TooltipContext>
`}}},render:e=>r(`div`,{className:`sb-column sb-width-300`,children:r(u,{children:r(c,{...e})})})},j=m,M=g,N=v,P=b,F=S,I=w,L=E,A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    variant: 'default',
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder',
    defaultValue: '',
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`UncontrolledStory`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`ControlledStory`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`VariantStory`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`PlaceholderStory`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`DisabledStory`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`PrefixStory`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`SuffixStory`,...L.parameters?.docs?.source}}},R=[`Demo`,`Uncontrolled`,`Controlled`,`Variant`,`Placeholder`,`Disabled`,`Prefix`,`Suffix`]}))();export{M as Controlled,A as Demo,F as Disabled,P as Placeholder,I as Prefix,L as Suffix,j as Uncontrolled,N as Variant,R as __namedExportsOrder,k as default};