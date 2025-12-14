import { Meta, StoryObj } from "@storybook/preact"
import { useRef } from "preact/hooks"

import { TooltipContainer } from "./TooltipContainer"

import { Stack, Text, OverlayPositioner } from "../../index"

const meta: Meta<typeof TooltipContainer> = {
  title: "Components/TooltipContainer",
  component: TooltipContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component that creates a tooltip-like container. Used inside &lt;OverlayPositioner/&gt; component.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    width: {
      control: { type: "number" },
      defaultValue: { summary: "auto" },
      table: {
        type: {
          summary: "number | 'auto'",
        },
      },
    },
    height: {
      control: { type: "number" },
      defaultValue: { summary: "auto" },
      table: {
        type: {
          summary: "number | 'auto'",
        },
      },
    },
    children: {
      control: { disable: true },
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof TooltipContainer>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    width: 300,
    height: 100,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    return (
      <div className="sb-column sb-width-full">
        <TooltipContainer {...args}>
          <Text intent="neutral-inverted-fixed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae
            autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi
            id nam tenetur adipisci?
          </Text>
        </TooltipContainer>
      </div>
    )
  },
}

export const Width: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={400}>
          <Text>Width: 200</Text>
          <TooltipContainer width={200}>TooltipContainer</TooltipContainer>
          <Text>Width: auto</Text>
          <TooltipContainer width="auto">
            Auto Size TooltipContainer
          </TooltipContainer>
        </Stack>
      </div>
    )
  },
}

export const Height: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={400}>
          <Text>Height: 100</Text>
          <TooltipContainer height={100}>TooltipContainer</TooltipContainer>
          <Text>Height: auto</Text>
          <TooltipContainer height="auto">
            Auto Size TooltipContainer
          </TooltipContainer>
        </Stack>
      </div>
    )
  },
}
