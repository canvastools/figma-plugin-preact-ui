import { StoryObj } from '@storybook/preact'

import { TimePicker } from '../TimePicker'

type Story = StoryObj<typeof TimePicker>

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
<TimePicker disabled />
`,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <TimePicker disabled />
        <TimePicker disabled date="9:41" />
      </div>
    )
  },
}
