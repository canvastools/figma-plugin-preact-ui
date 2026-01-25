import { Meta, StoryObj } from "@storybook/preact"
import { useRef } from "preact/hooks"

import {
  Button,
  Stack,
  Tooltip,
  Input,
  Text,
  SegmentedControl,
  link,
  Select,
  ButtonIcon,
  ButtonIconToggle,
  ColorSwatch,
} from "../../index"

import { TooltipContext } from "./TooltipContext"

const meta: Meta<typeof TooltipContext> = {
  title: "Components/TooltipContext",
  component: TooltipContext,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A context provider that manages visibility of multiple tooltips.",
      },
    },
  },
  argTypes: {
    children: {
      control: { disable: true },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
    useTooltipContext: {
      description: "Hook to access the context.",
      table: {
        type: {
          summary: "Props",
          detail: `
{
  registerHoverStart: (
    ref: preact.RefObject,
    setOpen: (open: boolean) => void
  ) => void
  registerHoverEnd: (
    ref: preact.RefObject,
    setOpen: (open: boolean) => void
  ) => void
}
`,
        },
      },
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
    docs: {
      source: {
        language: "tsx",
        code: `
const triggerRef = useRef(null)

<TooltipContext>
  <Text ref={triggerRef}>{children}</Text>
  
  <Tooltip triggerRef={triggerRef}>Tooltip 1</Tooltip>

  <Button tooltip="Tooltip 2">{children}</Button>
</TooltipContext>
        `,
      },
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLDivElement | null>(null)

    return (
      <div className="sb-column sb-width-300">
        <TooltipContext>
          <Stack spacing={400}>
            <Text ref={triggerRef}>Hover to see Tooltip 1</Text>
            <Tooltip anchorRef={triggerRef}>Text Tooltip 1</Tooltip>

            <Button tooltip="Button Tooltip">Hover to see Tooltip</Button>

            <ButtonIcon
              icon={{ glyph: link, variant: "scaled", size: 24 }}
              tooltip="ButtonIcon Tooltip"
            />

            <ButtonIconToggle
              icon={{ glyph: link, variant: "scaled", size: 24 }}
              tooltip="ButtonIcon Tooltip"
            />

            <ColorSwatch tooltip="ColorSwatch Tooltip" />

            <Input tooltip="Input Tooltip" placeholder="Placeholder" />

            <SegmentedControl
              defaultValue="list"
              items={[
                {
                  value: "list",
                  label: "List",
                  icon: { glyph: link, variant: "scaled", size: 24 },
                },
                {
                  value: "grid",
                  label: "Grid",
                  icon: { glyph: link, variant: "scaled", size: 24 },
                },
              ]}
            />

            <Select
              items={[
                { value: "list", label: "List" },
                { value: "grid", label: "Grid" },
              ]}
              defaultValue="list"
              placeholder="Select an option"
              tooltip="Select Tooltip"
            />
          </Stack>
        </TooltipContext>
      </div>
    )
  },
}
