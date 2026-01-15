import { StoryObj } from "@storybook/preact"

import { useState } from "preact/hooks"

import { Button, Text, Stack } from "../../../index"

import { Progress } from "../Progress"

type Story = StoryObj<typeof Progress>

export const ControlledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
const [value, setValue] = useState(0)

<Progress
  variant="determinate"
  value={value}
/>
`,
      },
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
      <div className="sb-column sb-width-full sb-gap-16">
        <Text>Value: {value}</Text>
        <Progress variant="determinate" value={value} />
        <Stack direction="row" spacing={200}>
          <Button intent="brand" onClick={handleFill}>
            Fill it!
          </Button>
          <Button onClick={() => setValue(0)}>Reset</Button>
        </Stack>
      </div>
    )
  },
}
