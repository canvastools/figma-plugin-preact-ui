import { Meta, StoryObj } from "@storybook/preact"
import { useRef } from "preact/hooks"

import { TooltipContext } from "./TooltipContext"

import {
  Button,
  Stack,
  Tooltip,
  Input,
  Text,
  SegmentedControl,
  viewList as viewListGlyph,
  viewGrid as viewGridGlyph,
} from "../../index"

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
          summary: "Hook",
        },
      },
      description: `Use this hook inside a child component to access the context. <br/>
      <pre>
      interface TooltipContextValue {
        lastTriggerLeaveTime: number | null // time of the last trigger leave
        lastVisibleTime: number | null // time of the last visible
        registerHoverStart: () => number // register a hover start
        notifyVisible: () => void // notify a visible
        notifyHoverEnd: () => void // notify a hover end
        setActiveTooltip: (config: { id: symbol; close: () => void }) => void // set the active tooltip
        cancelPendingHide: (id: symbol) => void // cancel a pending hide
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
    const triggerRef = useRef<HTMLDivElement | null>(null)
    const triggerRef2 = useRef<HTMLDivElement | null>(null)

    return (
      <div className="sb-column sb-width-300">
        <TooltipContext>
          <Stack spacing={400}>
            <Text ref={triggerRef}>Hover to see Tooltip 1</Text>
            <Tooltip triggerRef={triggerRef}>
              Lorem ipsum dolor sit amet
            </Tooltip>

            <Text ref={triggerRef2}>Hover to see Tooltip 2</Text>
            <Tooltip triggerRef={triggerRef2}>
              Amet nisi doloremque asperiores
            </Tooltip>

            <Button tooltip="Quisquam, quos">Hover to see Tooltip 3</Button>

            <Input
              tooltip="Lorem ipsum dolor sit amet"
              placeholder="Placeholder"
            />

            <SegmentedControl
              defaultValue="list"
              options={[
                { value: "list", title: "List", icon: viewListGlyph },
                { value: "grid", title: "Grid", icon: viewGridGlyph },
              ]}
            />
          </Stack>
        </TooltipContext>
      </div>
    )
  },
}
