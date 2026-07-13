import { StoryObj } from '@storybook/preact-vite'

import { Text } from '../Text'

type Story = StoryObj<typeof Text>

export const VariantStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Text variant="heading">{children}</Text>

<Text variant="body">{children}</Text>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-16">
      <Text variant="heading">Heading</Text>
      <Text variant="body">Body</Text>
    </div>
  ),
}
