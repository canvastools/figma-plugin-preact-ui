import { StoryObj } from "@storybook/preact"

import { Icon, ai } from "../../../index"

import { ColorSwatch } from "../ColorSwatch"

type Story = StoryObj<typeof ColorSwatch>

export const ChildrenStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
import { ai } from "figma-plugin-preact-ui"

<ColorSwatch>
  <Icon glyph={ai} size={16} />
</ColorSwatch> 

<ColorSwatch>
  <img src="https://placehold.co/48x48" />
</ColorSwatch> 
`,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-16">
      <ColorSwatch value={{ r: 255, g: 0, b: 0, a: 0.5 }}>
        <Icon glyph={ai} size={16} />
      </ColorSwatch>
      <ColorSwatch>
        <img src="https://placehold.co/48x48" />
      </ColorSwatch>
    </div>
  ),
}
