import { Meta, StoryObj } from "@storybook/preact"
import { useState } from "preact/hooks"
import { fn } from "@storybook/test"

import { Calendar } from "./Calendar"
import { CalendarValue } from "./Calendar.types"

import { Stack, Text } from "../../index"

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component:
          "Calendar component is a wrapper around the [react-calendar](https://github.com/wojtekmaj/react-calendar?tab=readme-ov-file) component. It provides a consistent interface for the calendar component and is styled to match the design system. Listed props are fully supported.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    locale: {
      control: { type: "text" },
      defaultValue: { summary: "en-US" },
      description: "Locale of the calendar.",
    },
    calendarType: {
      control: { type: "radio" },
      options: ["iso8601", "islamic", "hebrew", "gregory"],
      defaultValue: { summary: "iso8601" },
    },
    defaultView: {
      control: { type: "radio" },
      options: [null, "month", "year", "decade", "century"],
      defaultValue: { summary: "month" },
      description: "Default uncontrolled view of the calendar.",
    },
    view: {
      control: { type: "radio" },
      options: [null, "month", "year", "decade", "century"],
      description: "Controlled view of the calendar.",
    },
    defaultValue: {
      control: { type: "date" },
      defaultValue: { summary: "null" },
      description: "Default uncontrolled value of the calendar.",
    },
    value: {
      control: { type: "date" },
      description: `Controlled value of the calendar.
      <pre>type CalendarValue = Date | [Date | null, Date | null] | null</pre>`,
    },
    minDate: {
      control: { type: "date" },
      defaultValue: { summary: "-5 years" },
      description: "Minimum selectable date of the calendar.",
    },
    maxDate: {
      control: { type: "date" },
      defaultValue: { summary: "+5 years" },
      description: "Maximum selectable date of the calendar.",
    },
    minDetail: {
      control: { type: "radio" },
      options: ["century", "decade", "year", "month"],
      defaultValue: { summary: "century" },
      description: "Minimum detail level of the calendar.",
    },
    maxDetail: {
      control: { type: "radio" },
      options: ["century", "decade", "year", "month"],
      defaultValue: { summary: "month" },
      description: "Maximum detail level of the calendar.",
    },
    onChange: {
      action: "onChange",
      description: "Callback when the value is changed.",
      table: {
        type: {
          summary: "(args: { value: CalendarValue }) => void",
        },
      },
    },
    onDrillUp: {
      action: "onDrillUp",
      description: "Callback when the view is drilled up.",
      table: {
        type: {
          summary:
            "(args: { action: string; activeStartDate: Date | null; value: CalendarValue; view: string }) => void",
        },
      },
    },
    onDrillDown: {
      action: "onDrillDown",
      description: "Callback when the view is drilled down.",
      table: {
        type: {
          summary:
            "(args: { action: string; activeStartDate: Date | null; value: CalendarValue; view: string }) => void",
        },
      },
    },
    onViewChange: {
      action: "onViewChange",
      description: "Callback when the view is changed.",
      table: {
        type: {
          summary:
            "(args: { action: string; activeStartDate: Date | null; value: CalendarValue; view: string }) => void",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    locale: "en-US",
    calendarType: "iso8601",
    defaultView: "month",
    view: null,
    defaultValue: new Date(),
    value: null,
    minDate: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
    maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 5)),
    minDetail: "century",
    maxDetail: "month",
    onChange: fn(),
    onDrillUp: fn(),
    onDrillDown: fn(),
    onViewChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-300">
      <Calendar {...args} />
    </div>
  ),
}

export const Uncontrolled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-300">
        <Calendar defaultValue={new Date()} />
      </div>
    )
  },
}

export const Controlled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [value, setValue] = useState<CalendarValue>(new Date())

    return (
      <Stack spacing={400}>
        <Text>Value: {value?.toString()}</Text>
        <div className="sb-column sb-width-300">
          <Calendar value={value} onChange={(args) => setValue(args.value)} />
        </div>
      </Stack>
    )
  },
}

export const View: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-300">
        <Stack spacing={400}>
          <Calendar view="month" />
          <Calendar view="year" />
          <Calendar view="decade" />
          <Calendar view="century" />
        </Stack>
      </div>
    )
  },
}

export const MinMaxDate: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-300">
        <Calendar
          minDate={new Date(new Date().setDate(new Date().getDate() - 7))}
          maxDate={new Date(new Date().setDate(new Date().getDate() + 7))}
        />
      </div>
    )
  },
}

export const MinMaxDetail: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-300">
        <Calendar minDetail="decade" maxDetail="year" />
      </div>
    )
  },
}
