import { StoryObj } from "@storybook/preact"

import { Icon, search } from "../../../index"

import { Input } from "../Input"

type Story = StoryObj<typeof Input>

export const PrefixStory: Story = {
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
  prefix={
    <Icon
      glyph={search}
      intentModifier="secondary"
      variant="scaled"
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
        placeholder="Input with prefix"
        prefix={
          <Icon glyph={search} intentModifier="secondary" variant="scaled" />
        }
      />
    </div>
  ),
}
