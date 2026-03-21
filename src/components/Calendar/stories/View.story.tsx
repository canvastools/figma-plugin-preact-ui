import { StoryObj } from '@storybook/preact'

import { Calendar } from '../Calendar'

type Story = StoryObj<typeof Calendar>

export const ViewStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Calendar view="month" />

<Calendar view="year" />

<Calendar view="decade" />

<Calendar view="century" />
`,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-300 sb-gap-40">
        <Calendar view="month" />
        <Calendar view="year" />
        <Calendar view="decade" />
        <Calendar view="century" />
      </div>
    )
  },
}
