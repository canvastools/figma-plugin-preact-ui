import { StoryObj } from '@storybook/preact'

import { Input } from '../Input'

type Story = StoryObj<typeof Input>

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
<Input placeholder="Placeholder" />
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      <Input placeholder="Placeholder" />
    </div>
  ),
}
