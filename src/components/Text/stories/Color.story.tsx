import { StoryObj } from "@storybook/preact"

import { Text } from "../Text"

type Story = StoryObj<typeof Text>

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
<Text textColor="#00FF00">{children}</Text>

<Text textColor="rgb(0, 255, 0, 0.5)">{children}</Text>

<Text textColor="rgb(0, 255, 0)">{children}</Text>

<Text textColor="var(--pui-color-brand-text-default)">{children}</Text>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-16">
      <Text textColor="#00FF00" variant="heading">
        Heading
      </Text>
      <Text textColor="#00FF00" variant="body">
        Body
      </Text>
    </div>
  ),
}
