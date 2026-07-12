import { StoryObj } from '@storybook/preact-vite'

import { Calendar } from '../Calendar'

type Story = StoryObj<typeof Calendar>

export const DetailsStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Calendar
  minDetail="decade"
  maxDetail="year"
/>
`,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-300 sb-gap-40">
        <Calendar minDetail="decade" maxDetail="year" />
      </div>
    )
  },
}
