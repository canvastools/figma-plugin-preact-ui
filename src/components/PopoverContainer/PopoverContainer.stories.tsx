import { Meta, StoryObj } from "@storybook/preact"

import { SizeStory } from "./stories/Size.story"

import { Text } from "../../index"

import { PopoverContainer } from "./PopoverContainer"

const meta: Meta<typeof PopoverContainer> = {
  title: "Components/PopoverContainer",
  component: PopoverContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A wrapper component that displays the popover content.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    width: {
      control: { type: "number" },
      description: "Takes the width of the content if not provided.",
    },
    height: {
      control: { type: "number" },
      description: "Takes the height of the content if not provided.",
    },
    showArrow: {
      control: { type: "boolean" },
      description:
        "Shows the arrow on the container based on the `<OverlayPositioner/>` placement.",
    },
    children: {
      control: { type: "text" },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof PopoverContainer>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    width: 300,
    height: 300,
    children: "Popover content",
    showArrow: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<PopoverContainer {...args}>
  {children}
</PopoverContainer>
`,
      },
    },
  },
  render: (args) => {
    return (
      <div
        className="sb-column sb-width-300"
        style={"--overlay-arrow-left: 150px; --overlay-arrow-top: 0px;"}
      >
        <PopoverContainer {...args}>
          {/* @ts-ignore-next-line */}
          <Text>{args.children}</Text>
        </PopoverContainer>
      </div>
    )
  },
}

export const Size = SizeStory
