import { Meta, StoryObj } from "@storybook/preact"

import { Fog } from "./Fog"

import { Text, Button } from "../../index"

const meta: Meta<typeof Fog> = {
  title: "Layout/Fog",
  component: Fog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A component that displays a fog overlay with an optional spinner. Blocks interaction with the entire parent container.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    timeout: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description:
        "Delay in milliseconds before the fog becomes visible. May be useful to avoid flickering when the content is loading fast.",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    spinner: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Show the spinner.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof Fog>

export const Demo: Story = {
  args: {
    className: "",
    timeout: 1000,
    spinner: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Fog {...args} />
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa
        aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque
        asperiores quisquam, repudiandae similique magnam aspernatur esse
        dignissimos molestiae.
      </Text>
      <Button
        onClick={() => {
          console.log("Oh, no!")
        }}
      >
        You can't click me
      </Button>
    </div>
  ),
}
