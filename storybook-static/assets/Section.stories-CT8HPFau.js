import{u as e}from"./hooks.module-Dxk9uxGs.js";import{S as t}from"./Section-yfO0z026.js";import{T as a}from"./Text-C438qO9S.js";import{S as o}from"./Stack-CNzGXmi4.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";const k={title:"Components/Section",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A component that creates a section with built-in padding."}}},argTypes:{className:{control:{type:"text"}},variant:{control:{type:"select"},options:["default","stacked"],defaultValue:{summary:"default"},table:{type:{summary:"string"}}},padding:{control:{disable:!0},defaultValue:{summary:"default"},description:`Custom padding for the section. Using the spacing variables names.
      <pre>
  padding?: {
    top?: SectionPadding
    right?: SectionPadding
    bottom?: SectionPadding
    left?: SectionPadding
  }</pre>`,table:{type:{summary:"SectionPadding = keyof typeof spacing.variables"}}},children:{control:{disable:!0},table:{type:{summary:"string | number | JSX.Element"}}}}},n={args:{className:"sb-container"},parameters:{viewport:{defaultViewport:"large"}},render:u=>e("div",{className:"sb-column sb-height-300",children:e(t,{...u,children:e(a,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})},i={render:()=>e("div",{className:"sb-column sb-height-300",children:e(o,{direction:"column",spacing:400,fullWidth:!0,children:[e(t,{variant:"default",className:"sb-container",children:e(a,{children:"Default Section"})}),e(o,{direction:"column",fullWidth:!0,children:[e(t,{variant:"stacked",className:"sb-container",children:e(a,{children:"Stacked Section"})}),e(t,{variant:"stacked",className:"sb-container",children:e(a,{children:"Stacked Section"})}),e(t,{variant:"stacked",className:"sb-container",children:e(a,{children:"Stacked Section"})})]})]})})};var r,c,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    className: "sb-container"
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column sb-height-300">
      <Section {...args}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Section>
    </div>
}`,...(s=(c=n.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var d,l,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="sb-column sb-height-300">
      <Stack direction="column" spacing={400} fullWidth>
        <Section variant="default" className="sb-container">
          <Text>Default Section</Text>
        </Section>

        <Stack direction="column" fullWidth>
          <Section variant="stacked" className="sb-container">
            <Text>Stacked Section</Text>
          </Section>
          <Section variant="stacked" className="sb-container">
            <Text>Stacked Section</Text>
          </Section>
          <Section variant="stacked" className="sb-container">
            <Text>Stacked Section</Text>
          </Section>
        </Stack>
      </Stack>
    </div>
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const x=["Demo","Stacked"];export{n as Demo,i as Stacked,x as __namedExportsOrder,k as default};
