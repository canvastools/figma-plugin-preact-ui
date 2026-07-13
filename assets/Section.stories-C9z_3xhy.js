import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./jsxRuntime.module-B_u_rUE0.js";import{t as r}from"./Text-Bf8YN4P6.js";import{b as i,m as a,t as o,x as s}from"./src-nP44HpfJ.js";var c,l=e((()=>{o(),s(),n(),c={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Section variant="default">
  {children}
</Section>

<Section variant="stacked">
  {children}
</Section>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full sb-gap-40`,children:[t(i,{variant:`default`,className:`sb-container`,children:t(r,{children:`Default Section`})}),t(a,{direction:`column`,children:[t(i,{variant:`stacked`,className:`sb-container`,children:t(r,{children:`Stacked Section`})}),t(i,{variant:`stacked`,className:`sb-container`,children:t(r,{children:`Stacked Section`})}),t(i,{variant:`stacked`,className:`sb-container`,children:t(r,{children:`Stacked Section`})})]})]})}})),u,d=e((()=>{o(),s(),n(),u={parameters:{controls:{disable:!0},viewport:{defaultViewport:`large`},docs:{source:{code:`
<Section padding={{ top: 400 }}>
  {children}
</Section>
`}}},render:()=>t(`div`,{className:`sb-column sb-width-full`,children:t(i,{className:`sb-container`,padding:{top:400},children:t(r,{children:`Padding Top: 400`})})})}})),f,p,m,h,g;e((()=>{l(),d(),o(),s(),n(),f={title:`Layout/Section`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`A wrapper component that creates a typical section layout with built-in padding.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},variant:{control:{type:`radio`},options:[`default`,`stacked`],table:{defaultValue:{summary:`default`}}},padding:{control:{type:`object`},table:{type:{summary:`object`,detail:`
padding?: {
  top?: SectionPadding
  right?: SectionPadding
  bottom?: SectionPadding
  left?: SectionPadding
}

// Types

type SectionPadding = keyof typeof spacing.variables // string | number
`}}},children:{control:{control:`text`},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}}}},p={args:{id:void 0,className:`sb-container`,variant:`default`,padding:{},children:`Lorem ipsum dolor sit amet.`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
<Section {...args}>{children}</Section>
`}}},render:e=>t(`div`,{className:`sb-column sb-width-fullk`,children:t(i,{...e,children:t(r,{children:e.children})})})},m=c,h=u,p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`StackedStory`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`PaddingStory`,...h.parameters?.docs?.source}}},g=[`Demo`,`Stacked`,`Padding`]}))();export{p as Demo,h as Padding,m as Stacked,g as __namedExportsOrder,f as default};