import{u as t}from"./hooks.module-Dxk9uxGs.js";import{S as o}from"./Section-45ajfN6P.js";import{T as s}from"./Text-Dvytwbdg.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-cP-mn0Xe.js";import"./compat.module-c0s5p6eE.js";const g={title:"Components/Section",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A component that creates a section with built-in padding."}}},argTypes:{className:{control:{type:"text"}},padding:{control:{disable:!0},description:`Custom padding for the section. Using the spacing variables names.
      <pre>
  padding?: {
    top?: SectionPadding
    right?: SectionPadding
    bottom?: SectionPadding
    left?: SectionPadding
  }</pre>`,table:{type:{summary:"SectionPadding = keyof typeof spacing.variables"}}},children:{control:{disable:!0},table:{type:{summary:"string | number | JSX.Element"}}}}},e={args:{className:"sb-container"},parameters:{viewport:{defaultViewport:"large"}},render:r=>t("div",{className:"sb-column sb-height-300",children:t(o,{...r,children:t(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})};var i,n,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const b=["Demo"];export{e as Demo,b as __namedExportsOrder,g as default};
