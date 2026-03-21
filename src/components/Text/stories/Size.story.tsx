import { StoryObj } from '@storybook/preact'

import { Text } from '../Text'

type Story = StoryObj<typeof Text>

export const SizeStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Text size="small">{children}</Text>

<Text size="medium">{children}</Text>

<Text size="large">{children}</Text>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-40">
      <div className="sb-column sb-gap-16">
        <Text variant="heading" size="large">
          Heading Large
        </Text>
        <Text variant="body" size="large">
          Body Large. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Text>
      </div>

      <div className="sb-column sb-gap-16">
        <Text variant="heading" size="medium">
          Heading Medium
        </Text>
        <Text variant="body" size="medium">
          Body Medium. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Text>
      </div>

      <div className="sb-column sb-gap-16">
        <Text variant="heading" size="small">
          Heading Small
        </Text>
        <Text variant="body" size="small">
          Body Small. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Text>
      </div>
    </div>
  ),
}
