import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./jsxRuntime.module-CNTwvFFH.js";import{n as r,t as i}from"./Text-Cr-51GRl.js";import{n as a,t as o}from"./Section-DkP7unPH.js";import{n as s,t as c}from"./Stack-CRI7JcwR.js";var l;function u(){return(u=e((()=>{s(),r(),a(),n(),l={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Section variant="default">
  {children}
</Section>

<Section variant="stacked">
  {children}
</Section>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[t(o,{variant:`default`,className:`sb-container`,children:t(i,{children:`Default Section`})}),t(c,{direction:`column`,children:[t(o,{variant:`stacked`,className:`sb-container`,children:t(i,{children:`Stacked Section`})}),t(o,{variant:`stacked`,className:`sb-container`,children:t(i,{children:`Stacked Section`})}),t(o,{variant:`stacked`,className:`sb-container`,children:t(i,{children:`Stacked Section`})})]})]})}})))()}var d;function f(){return(f=e((()=>{r(),a(),n(),d={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Section padding={{ top: 400 }}>
  {children}
</Section>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(o,{className:`sb-container`,padding:{top:400},children:t(i,{children:`Padding Top: 400`})})})}})))()}var p,m,h,g,_;function v(){return(v=e((()=>{u(),f(),r(),a(),n(),p={title:`Layout/Section`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`A wrapper component that creates a typical section layout with built-in padding.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},variant:{control:{type:`radio`},options:[`default`,`stacked`],table:{defaultValue:{summary:`default`}}},padding:{control:{type:`object`},table:{type:{summary:`object`,detail:`
padding?: {
  top?: SectionPadding
  right?: SectionPadding
  bottom?: SectionPadding
  left?: SectionPadding
}

// Types

type SectionPadding = keyof typeof spacing.variables // string | number
`}}},children:{control:{control:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},m={args:{id:void 0,className:`sb-container`,variant:`default`,padding:{},children:`Lorem ipsum dolor sit amet.`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Section {...args}>{children}</Section>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-fullk`,children:t(o,{...e,children:t(i,{children:e.children})})})},h=l,g=d,_=[`Demo`,`Stacked`,`Padding`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: 'sb-container',
    variant: 'default',
    padding: {},
    children: 'Lorem ipsum dolor sit amet.'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        code: \`
<Section {...args}>{children}</Section>
\`
      }
    }
  },
  render: args => <div className="sb-column sb-width-fullk">
      <Section {...args}>
        <Text>{args.children}</Text>
      </Section>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`StackedStory`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`PaddingStory`,...g.parameters?.docs?.source}}}})))()}v();export{m as Demo,g as Padding,h as Stacked,_ as __namedExportsOrder,p as default};