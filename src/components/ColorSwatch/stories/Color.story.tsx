import { StoryObj } from "@storybook/preact"

import { ColorSwatch } from "../ColorSwatch"

type Story = StoryObj<typeof ColorSwatch>

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
<ColorSwatch color={{ r: 255, g: 0, b: 0, a: 1 }}/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-16">
      <ColorSwatch color={{ r: 255, g: 0, b: 0, a: 1 }} />
      <ColorSwatch color={{ r: 255, g: 0, b: 0, a: 0.5 }} />
      <ColorSwatch color={{ r: 255, g: 0, b: 0, a: 0 }} />
    </div>
  ),
}
