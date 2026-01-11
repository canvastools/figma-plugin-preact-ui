import { StoryObj } from "@storybook/preact"

import { link, ButtonIcon } from "../../../index"

import { Input } from "../Input"

type Story = StoryObj<typeof Input>

export const SuffixStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Input
  suffix={
    <ButtonIcon 
      icon={{ 
        glyph: link,
        variant: "scaled"
      }} 
      translucent
    />
  }
/>

<Input
  showSuffixOnHover
  suffix={
    <ButtonIcon 
      icon={{ 
        glyph: link,
        variant: "scaled"
      }} 
      translucent
    />
  }
/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      <Input
        placeholder="Input with suffix"
        suffix={
          <ButtonIcon icon={{ glyph: link, variant: "scaled" }} translucent />
        }
      />

      <Input
        placeholder="Show suffix on hover"
        showSuffixOnHover
        suffix={
          <ButtonIcon icon={{ glyph: link, variant: "scaled" }} translucent />
        }
      />
    </div>
  ),
}
