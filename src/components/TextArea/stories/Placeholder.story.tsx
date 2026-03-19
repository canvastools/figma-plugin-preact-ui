import { StoryObj } from '@storybook/preact'

import { TextArea } from '../TextArea'

type Story = StoryObj<typeof TextArea>

export const PlaceholderStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<TextArea placeholder="Placeholder" />
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      <TextArea placeholder="Placeholder" />
    </div>
  ),
}
