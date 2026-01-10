import { StoryObj } from "@storybook/preact"

import { Icon, link } from "../../../index"

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
    <Icon
      glyph={search}
      intentModifier="secondary"
      variant="scaled"
    />
  }
/>

<Input
  showPrefixOnHover
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
        placeholder="Input with suffix"
        suffix={
          <Icon glyph={link} intentModifier="secondary" variant="scaled" />
        }
      />

      <Input
        placeholder="Show suffix on hover"
        showSuffixOnHover
        suffix={
          <Icon glyph={link} intentModifier="secondary" variant="scaled" />
        }
      />
    </div>
  ),
}
