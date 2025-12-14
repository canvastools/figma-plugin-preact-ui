import { Meta, StoryObj } from "@storybook/preact"
import { useRef } from "preact/hooks"

import { TooltipContext } from "./TooltipContext"

import { Button, Stack, Tooltip } from "../../index"

const meta: Meta<typeof TooltipContext> = {
  title: "Components/TooltipContext",
  component: TooltipContext,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component that makes all tooltips in its context aware of each other. When one tooltip is opened, immediate hover on another tooltip will open it without a delay.",
      },
    },
  },
  argTypes: {
    children: {
      control: { disable: true },
      description: "Children elements.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    useTooltipContext: {
      table: {
        type: {
          summary: `Hook`,
        },
      },
      description: `Use this hook inside a child component to access the context. <br/>
      <pre>
      interface TooltipContextValue {
        lastTriggerLeaveTime: number | null
        lastVisibleTime: number | null
        registerHoverStart: () => number
        notifyVisible: () => void
        notifyHoverEnd: () => void
      }</pre>`,
    },
  },
}

export default meta
type Story = StoryObj<typeof TooltipContext>

export const Demo: Story = {
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const triggerRef2 = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <TooltipContext>
          <Stack spacing={400}>
            <Button ref={triggerRef}>Hover to see Tooltip 1</Button>
            <Button ref={triggerRef2}>Hover to see Tooltip2</Button>
            <Tooltip triggerRef={triggerRef}>
              Lorem ipsum dolor sit amet
            </Tooltip>
            <Tooltip triggerRef={triggerRef2}>
              Amet nisi doloremque asperiores
            </Tooltip>
          </Stack>
        </TooltipContext>
      </div>
    )
  },
}
