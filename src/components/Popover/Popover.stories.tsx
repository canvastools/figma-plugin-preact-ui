import { Meta, StoryObj } from "@storybook/preact"

import { useRef } from "preact/hooks"

import { ControlledStory } from "./stories/Controlled.story"
import { UncontrolledStory } from "./stories/Uncontrolled.story"
import { ArrowStory } from "./stories/Arrow.story"

import { Text, Section, Button } from "../../index"

import { Popover } from "./Popover"

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A facade component that provides a simplified API for popovers.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    headerChildren: {
      control: { type: "text" },
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
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
    _: {
      control: { disable: true },
      table: {
        type: {
          summary: "...rest",
          detail: `
Pick<
  PopoverContextProps, 
  PopoverContainerProps,
  OverlayPositionerProps
>`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Popover>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    headerChildren: "Header",
    children: "Content",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Popover {...args}>
  {children}
</Popover>
`,
      },
    },
  },
  render: (args) => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Button ref={triggerRef}>Open Popover</Button>

        <Popover triggerRef={triggerRef} {...args}>
          <Section>
            <Text>
              {/* @ts-ignore-next-line */}
              {args.children}
            </Text>
          </Section>
        </Popover>
      </div>
    )
  },
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const Arrow = ArrowStory
