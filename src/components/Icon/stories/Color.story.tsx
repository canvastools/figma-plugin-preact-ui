import { StoryObj } from "@storybook/preact"

import { link } from "../glyphs"

import { Icon } from "../Icon"

type Story = StoryObj<typeof Icon>

export const ColorStory: Story = {
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
  glyph={help}
  colorIcon="#00FF00"
/>

<Icon 
  glyph={link}
  colorIcon="rgb(0, 255, 0, 0.5)"
/>

<Icon 
  glyph={link}
  colorIcon="rgb(0, 255, 0"
/>

<Icon 
  glyph={link}
  colorIcon="var(--pui-color-brand-icon-default)"
/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-16">
      <Icon glyph={link} colorIcon="#00FF00" />
    </div>
  ),
}
