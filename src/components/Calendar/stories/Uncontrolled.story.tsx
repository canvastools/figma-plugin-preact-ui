import { StoryObj } from '@storybook/preact'

import { Calendar } from '../Calendar'

type Story = StoryObj<typeof Calendar>

export const UncontrolledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Calendar defaultDate={new Date()}/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      <Calendar defaultDate={new Date()} />
    </div>
  ),
}
