import { StoryObj } from '@storybook/preact'

import { useState } from 'preact/hooks'

import { Text } from '../../../index'

import { TimePicker } from '../TimePicker'
import type { TimePickerDate } from '../TimePicker.types'

type Story = StoryObj<typeof TimePicker>

export const ControlledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
const [date, setDate] = useState("9:41")

<TimePicker
  date={date}
  onTimeChange={(args) => setDate(args.time)}
/>
`,
      },
    },
  },
  render: () => {
    const [date, setDate] = useState<TimePickerDate>('9:41')

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Text>date: {date}</Text>
        <TimePicker date={date} onTimeChange={(args) => setDate(args.time as unknown as TimePickerDate)} />
      </div>
    )
  },
}
