import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{S as t,w as n}from"./compat.module-gcU-nFZT.js";import{n as r,t as i}from"./jsxRuntime.module-CNTwvFFH.js";import{n as a,t as o}from"./Icon-Brb725mi.js";import{n as s,t as c}from"./opacity-BnD1btHk.js";import{n as l,t as u}from"./Input-CyseSWne.js";import{n as d,t as f}from"./useNumericInput-H7Xa6yRZ.js";var p;function m(){return(m=e((()=>{i(),p=({className:e,drag:t,children:n})=>r(`span`,{className:[`InputDragContainer`,e].join(` `).trim(),...t,children:n})})))()}var h,g,_,v;function y(){return(y=e((()=>{n(),l(),a(),c(),f(),m(),i(),h={title:`Components/InputDragContainer`,component:p,tags:[`autodocs`],parameters:{docs:{description:{component:"Wraps an `Input` prefix / suffix so the field value can be scrubbed by dragging the icon horizontally. Takes the props returned by `useNumericInput().getDragProps()`."}}},argTypes:{className:{control:{type:`text`}},drag:{control:!1,description:`<strong>*</strong>`,table:{type:{summary:`NumericInputDragProps`}}},children:{control:!1,table:{type:{summary:`preact.ComponentChildren`}}}}},g=()=>{let[e,n]=t(`50%`),i=d({value:e,unit:`%`,required:!0,min:0,max:100,step:1,stepLarge:10,normalizeOnError:!0}),a=e=>i.parse(String(e)).formattedValue??String(e),c=i.getDragProps({onChange:e=>n(String(a(e))),onCommit:e=>n(String(a(e)))});return r(u,{value:e,tooltip:`Opacity`,focusOnPrefix:!0,selectOnFocus:!0,prefix:r(p,{drag:c,children:r(o,{glyph:s,intentModifier:`secondary`})}),onValueChange:e=>n(e.value),onKeyDown:e=>i.handleKeyDown(e,e=>n(String(a(e)))),onBlur:t=>n(String(a(i.parse(t.value).normalizedValue??e)))})},_={parameters:{controls:{disable:!0},docs:{source:{code:`
const drag = numericInput.getDragProps({
  onChange: (next) => setValue(String(next)),
  onCommit: (next) => setValue(String(next)),
})

<Input
  value={value}
  focusOnPrefix
  prefix={
    <InputDragContainer drag={drag}>
      <Icon glyph={opacity} intentModifier="secondary" />
    </InputDragContainer>
  }
/>
`}}},render:()=>r(`div`,{className:`sb-column sb-width-300`,children:r(g,{})})},v=[`Demo`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      source: {
        code: \`
const drag = numericInput.getDragProps({
  onChange: (next) => setValue(String(next)),
  onCommit: (next) => setValue(String(next)),
})

<Input
  value={value}
  focusOnPrefix
  prefix={
    <InputDragContainer drag={drag}>
      <Icon glyph={opacity} intentModifier="secondary" />
    </InputDragContainer>
  }
/>
\`
      }
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <DragDemo />
    </div>
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as Demo,v as __namedExportsOrder,h as default};