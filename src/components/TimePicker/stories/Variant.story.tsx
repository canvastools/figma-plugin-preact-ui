import { StoryObj } from '@storybook/preact-vite'

import { TimePicker } from '../TimePicker'

type Story = StoryObj<typeof TimePicker>

export const VariantStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<TimePicker variant="default" />

<TimePicker variant="list" />
`,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-300 sb-gap-40">
        <TimePicker variant="default" label="Label" defaultDate={new Date()} />
        <TimePicker variant="list" label="Label" defaultDate={new Date()} />
      </div>
    )
  },
}
