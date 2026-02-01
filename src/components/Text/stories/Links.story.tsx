import { StoryObj } from "@storybook/preact"

import { Text } from "../Text"

type Story = StoryObj<typeof Text>

export const LinksStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      description: {
        story: "Links can be rendered using markdown syntax.",
      },
      source: {
        language: "tsx",
        code: `
<Text>
  Lorem Ipsum is simply [dummy text](https://www.google.com) of the printing and typesetting industry.
</Text>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-16">
      <Text>
        Lorem Ipsum is simply [dummy text](https://www.google.com) of the
        printing and typesetting industry.{" "}
      </Text>
    </div>
  ),
}
