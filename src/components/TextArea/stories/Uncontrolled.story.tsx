import { StoryObj } from '@storybook/preact-vite'

import { TextArea } from '../TextArea'

type Story = StoryObj<typeof TextArea>

export const UncontrolledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<TextArea defaultValue="Hello World!" />
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      <TextArea defaultValue="Hello World!" />
    </div>
  ),
}
