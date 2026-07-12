import { Meta, StoryObj } from '@storybook/preact-vite'
import { fn } from 'storybook/test'

import { UncontrolledStory } from './stories/Uncontrolled.story'
import { ControlledStory } from './stories/Controlled.story'
import { ViewStory } from './stories/View.story'
import { DatesStory } from './stories/Dates.story'
import { DetailsStory } from './stories/Details.story'

import { Calendar } from './Calendar'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: 'A styled wrapper around the [react-calendar](https://github.com/wojtekmaj/react-calendar) component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    className: {
      control: { type: 'text' },
    },
    locale: {
      control: { type: 'text' },
      table: { defaultValue: { summary: 'en-US' } },
    },
    type: {
      control: { type: 'radio' },
      options: ['iso8601', 'islamic', 'hebrew', 'gregory'],
      table: { defaultValue: { summary: 'iso8601' } },
    },
    defaultView: {
      control: { type: 'radio' },
      options: ['month', 'year', 'decade', 'century'],
      table: { defaultValue: { summary: 'month' } },
      description: 'View for uncontrolled state.',
    },
    view: {
      control: { disable: true },
      options: ['month', 'year', 'decade', 'century'],
      description: 'View for controlled state.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    defaultDate: {
      control: { type: 'date' },
      description: 'Date for uncontrolled state.',
      table: {
        defaultValue: { summary: 'null' },
        type: {
          summary: 'CalendarDate',
          detail: `Date | [Date | null, Date | null] | null`,
        },
      },
    },
    date: {
      control: { disable: true },
      description: `Date for controlled state.`,
      table: {
        type: {
          summary: 'CalendarDate',
          detail: `Date | [Date | null, Date | null] | null`,
        },
      },
    },
    minDate: {
      control: { type: 'date' },
      description: 'Minimum selectable date of the calendar.',
      table: {
        defaultValue: { summary: '-5 years' },
        type: {
          summary: 'Date',
        },
      },
    },
    maxDate: {
      control: { type: 'date' },
      description: 'Maximum selectable date of the calendar.',
      table: {
        defaultValue: { summary: '+5 years' },
        type: {
          summary: 'Date',
        },
      },
    },
    minDetail: {
      control: { type: 'radio' },
      options: ['century', 'decade', 'year', 'month'],
      table: { defaultValue: { summary: 'century' } },
      description: 'Minimum detail level of the calendar.',
    },
    maxDetail: {
      control: { type: 'radio' },
      options: ['century', 'decade', 'year', 'month'],
      table: { defaultValue: { summary: 'month' } },
      description: 'Maximum detail level of the calendar.',
    },
    showNavigation: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'true' } },
    },
    navigation: {
      control: { type: 'radio' },
      options: ['full', 'simple'],
      table: { defaultValue: { summary: 'full' } },
    },
    onDateChange: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args:{
  date: CalendarDate
}
`,
        },
      },
    },
    onDetailUp: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args:{
  action: string
  activeStartDate: Date | null
  date: CalendarDate
  view: string
}
`,
        },
      },
    },
    onDetailDown: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args:{
  action: string
  activeStartDate: Date | null
  date: CalendarDate
  view: string
}
`,
        },
      },
    },
    onViewChange: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args:{
  action: string
  activeStartDate: Date | null
  date: CalendarDate
  view: string
}
`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Calendar>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    locale: 'en-US',
    type: 'iso8601',
    defaultView: 'month',
    view: undefined,
    defaultDate: new Date(),
    date: null,
    minDate: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
    maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 5)),
    minDetail: 'century',
    maxDetail: 'month',
    showNavigation: true,
    navigation: 'full',
    onDateChange: fn(),
    onDetailUp: fn(),
    onDetailDown: fn(),
    onViewChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Calendar {...args} />
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-300">
      <Calendar {...args} />
    </div>
  ),
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const View = ViewStory
export const Dates = DatesStory
export const Details = DetailsStory
