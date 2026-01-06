import { StoryObj } from "@storybook/preact"

import { Text } from "../Text"

type Story = StoryObj<typeof Text>

export const StrongStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Text strong>{children}</Text>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-40">
      <div className="sb-row sb-gap-40">
        <div className="sb-column sb-gap-16">
          <Text variant="heading" size="large">
            Heading Large
          </Text>
          <Text variant="heading" size="medium">
            Heading Medium
          </Text>
          <Text variant="heading" size="small">
            Heading Small
          </Text>
        </div>

        <div className="sb-column sb-gap-16">
          <Text variant="heading" size="large" strong>
            Heading Large Strong
          </Text>
          <Text variant="heading" size="medium" strong>
            Heading Medium Strong
          </Text>
          <Text variant="heading" size="small" strong>
            Heading Small Strong
          </Text>
        </div>
      </div>

      <div className="sb-row sb-gap-40">
        <div className="sb-column sb-gap-16">
          <Text variant="body" size="large">
            Body Large
          </Text>
          <Text variant="body" size="medium">
            Body Medium
          </Text>
          <Text variant="body" size="small">
            Body Small
          </Text>
        </div>

        <div className="sb-column sb-gap-16">
          <Text variant="body" size="large" strong>
            Body Large Strong
          </Text>
          <Text variant="body" size="medium" strong>
            Body Medium Strong
          </Text>
          <Text variant="body" size="small" strong>
            Body Small Strong
          </Text>
        </div>
      </div>
    </div>
  ),
}
