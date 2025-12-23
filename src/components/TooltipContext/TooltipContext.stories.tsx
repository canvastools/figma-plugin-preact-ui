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
  Select,
  ButtonIcon,
  ButtonIconToggle,
  ColorSwatch,
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
      description: `Use this hook inside a child component to access the shared tooltip logic. <br/>
      <pre>
      interface TooltipContextValue {
        registerHoverStart: (ref: preact.RefObject<HTMLElement>, setOpen: (open: boolean) => void) => void
        registerHoverEnd: (ref: preact.RefObject<HTMLElement>, setOpen: (open: boolean) => void) => void
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
            <Tooltip triggerRef={triggerRef}>Text Tooltip 1</Tooltip>

            <Text ref={triggerRef2}>Hover to see Tooltip 2</Text>
            <Tooltip triggerRef={triggerRef2}>Text Tooltip 2</Tooltip>

            <Button tooltip="Button Tooltip">Hover to see Tooltip</Button>

            <ColorSwatch tooltip="ColorSwatch Tooltip" />

            <ButtonIcon
              icon={{ glyph: viewListGlyph }}
              tooltip="ButtonIcon Tooltip"
            />

            <ButtonIconToggle
              icon={{ glyph: viewListGlyph }}
              tooltip="ButtonIcon Tooltip"
            />

            <Input tooltip="Input Tooltip" placeholder="Placeholder" />

            <SegmentedControl
              defaultValue="list"
              options={[
                { value: "list", title: "List", icon: viewListGlyph },
                { value: "grid", title: "Grid", icon: viewGridGlyph },
              ]}
            />

            <Select
              options={[
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
