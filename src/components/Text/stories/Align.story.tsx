import { StoryObj } from '@storybook/preact'

import { Text } from '../Text'

type Story = StoryObj<typeof Text>

export const AlignStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Text align="left">{children}</Text>

<Text align="center">{children}</Text>

<Text align="right">{children}</Text>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-16">
      <Text variant="heading" align="left">
        Heading Left
      </Text>
      <Text variant="heading" align="center">
        Heading Center
      </Text>
      <Text variant="heading" align="right">
        Heading Right
      </Text>
      <Text variant="body" align="left">
        Body Left
      </Text>
      <Text variant="body" align="center">
        Body Center
      </Text>
      <Text variant="body" align="right">
        Body Right
      </Text>
    </div>
  ),
}
