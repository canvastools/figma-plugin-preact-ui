import { Meta, StoryObj } from "@storybook/preact"

import { Section } from "./Section"

import { Text } from "../Text/Text"

const meta: Meta<typeof Section> = {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A component that creates a section with built-in padding.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    fullHeight: {
      control: { type: "boolean" },
      description:
        "Set the height to 100% to occupy the entire height in flex containers.",
    },
    children: {
      control: { disable: true },
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Section>

export const Demo: Story = {
  args: {
    className: "sb-container",
    fullHeight: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-height-300">
      <Section {...args}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Section>
    </div>
  ),
}
