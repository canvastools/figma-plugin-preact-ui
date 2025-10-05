import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { WindowResizer } from "./WindowResizer"
import type { WindowResizerProps } from "./WindowResizer.types"

const meta: Meta<WindowResizerProps> = {
  title: "Layout/WindowResizer",
  component: WindowResizer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A component that creates a window resizer control. Demo window is non-resizable.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    minWidth: {
      control: { type: "number" },
    },
    minHeight: {
      control: { type: "number" },
    },
    maxWidth: {
      control: { type: "number" },
    },
    maxHeight: {
      control: { type: "number" },
    },
    onResize: {
      action: "changed",
      description: "Callback when user resizes the window.",
      table: {
        type: {
          summary: "(args: { width: number; height: number }) => void",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<WindowResizerProps>

export const Demo: Story = {
  args: {
    className: "",
    minWidth: 380,
    minHeight: 480,
    maxWidth: 800,
    maxHeight: 600,
    onResize: fn(),
  },
  globals: {
    background: "secondary",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center">
      <WindowResizer {...args} />
    </div>
  ),
}
