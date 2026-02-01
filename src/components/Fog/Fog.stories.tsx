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
        component: `The component blocks mouse interaction with the entire parent container.<br/>User can still navigate the page using keyboard (you should prevent it with your own code).`,
      },
    },
  },
  argTypes: {
    id: {
      control: { type: "text" },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    className: {
      control: { type: "text" },
    },
    delay: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description:
        "Once mounted, it already blocks mouse interactions, but you can set a delay (in milliseconds) before it becomes visible. This helps prevent flicker when content loads quickly.",
    },
    children: {
      control: { type: "text" },
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Fog>

export const Demo: Story = {
  args: {
    id: undefined,
    className: "",
    delay: 1000,
    children: "",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Fog {...args}>{children}</Fog>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full sb-gap-16">
      <Fog {...args}>
        {/* @ts-ignore-next-line */}
        <Text>{args.children}</Text>
      </Fog>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa
        aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque
        asperiores quisquam, repudiandae similique magnam aspernatur esse
        dignissimos molestiae.
      </Text>
      <Button
        onClick={() => {
          alert(
            "User can still navigate the page using keyboard (you should prevent it with your own code)"
          )
        }}
      >
        You can't click me
      </Button>
    </div>
  ),
}
