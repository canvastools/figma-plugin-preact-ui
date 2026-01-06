import { StoryObj } from "@storybook/preact"

import { link } from "../glyphs"

import { Icon } from "../Icon"

type Story = StoryObj<typeof Icon>

export const SizeStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Icon
  glyph={link}
  size={24}
/>

<Icon
  glyph={link}
  size={16}
/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-16">
      <Icon glyph={link} size={24} />
      <Icon glyph={link} size={16} />
    </div>
  ),
}
