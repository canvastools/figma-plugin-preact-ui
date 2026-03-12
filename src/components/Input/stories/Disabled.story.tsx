import { StoryObj } from '@storybook/preact'

import { Input } from '../Input'

type Story = StoryObj<typeof Input>

export const DisabledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Input disabled />
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      <Input disabled />
      <Input disabled placeholder="Placeholder" />
      <Input disabled defaultValue="Default Value" />
    </div>
  ),
}
