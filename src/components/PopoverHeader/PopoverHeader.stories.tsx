import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { PopoverHeader } from "./PopoverHeader"

import { PopoverContainer, PopoverContext, Text, Section } from "../../index"

const meta: Meta<typeof PopoverHeader> = {
  title: "Components/PopoverHeader",
  component: PopoverHeader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A component that creates a header for a popover. Used inside &lt;PopoverContainer/&gt; component.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
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
type Story = StoryObj<typeof PopoverHeader>

export const Demo: Story = {
  args: {
    className: "",
    onClose: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    return (
      <div className="sb-column sb-width-full">
        <PopoverContext open={true}>
          <PopoverContainer>
            <PopoverHeader {...args}>Header</PopoverHeader>
            <Section>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam
                eos animi id nam tenetur adipisci? Amet nisi doloremque
                asperiores quisquam, repudiandae similique magnam aspernatur
                esse dignissimos molestiae.
              </Text>
            </Section>
          </PopoverContainer>
        </PopoverContext>
      </div>
    )
  },
}
