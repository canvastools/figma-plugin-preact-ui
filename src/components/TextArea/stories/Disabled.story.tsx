import { StoryObj } from '@storybook/preact'

import { TextArea } from '../TextArea'

type Story = StoryObj<typeof TextArea>

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
<TextArea disabled />

<TextArea disabled placeholder="Placeholder" />
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      <TextArea disabled />
      <TextArea disabled placeholder="Placeholder" />
      <TextArea disabled defaultValue="Default Value" />
    </div>
  ),
}
