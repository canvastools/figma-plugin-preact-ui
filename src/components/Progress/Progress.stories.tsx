import { Meta, StoryObj } from "@storybook/preact"

import { useState } from "preact/hooks"

import { Progress } from "./Progress"

import { Text, Button, Stack } from "../../index"

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "radio" },
      options: ["indeterminate", "determinate"],
      defaultValue: { summary: "indeterminate" },
      table: {
        type: {
          summary: "indeterminate | determinate",
        },
      },
    },
    timeout: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description:
        "Delay in milliseconds before the progress bar becomes visible. May be useful to avoid flickering when the content is loading fast.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    value: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description: "Value of the progress bar.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof Progress>

export const Demo: Story = {
  args: {
    className: "",
    variant: "indeterminate",
    timeout: 1000,
    value: 0,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Progress {...args} />
    </div>
  ),
}

export const Indeterminate: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Progress variant="indeterminate" />
    </div>
  ),
}

export const Determinate: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Progress variant="determinate" />
    </div>
  ),
}

export const Controlled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [value, setValue] = useState(0)

    const handleFill = () => {
      const step = () => {
        setValue((prev) => {
          const next = Math.min(prev + 5, 100)

          if (next < 100) {
            setTimeout(step, 100)
          }

          return next
        })
      }

      step()
    }

    return (
      <div className="sb-column sb-width-full">
        <Stack direction="column" spacing={400}>
          <Text>Value: {value}</Text>
          <Progress variant="determinate" value={value} />
          <Stack direction="row" spacing={200}>
            <Button intent="brand" onClick={handleFill}>
              Fill it!
            </Button>
            <Button onClick={() => setValue(0)}>Reset</Button>
          </Stack>
        </Stack>
      </div>
    )
  },
}
