import { StoryObj } from "@storybook/preact"

import { ColorSwatch } from "../ColorSwatch"

type Story = StoryObj<typeof ColorSwatch>

export const ValueStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<ColorSwatch value={{ r: 255, g: 0, b: 0, a: 1 }}/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-16">
      <ColorSwatch value={{ r: 255, g: 0, b: 0, a: 1 }} />
      <ColorSwatch value={{ r: 255, g: 0, b: 0, a: 0.5 }} />
      <ColorSwatch value={{ r: 255, g: 0, b: 0, a: 0 }} />
    </div>
  ),
}
