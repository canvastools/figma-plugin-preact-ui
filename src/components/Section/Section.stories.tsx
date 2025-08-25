import { Meta, StoryObj } from "@storybook/preact"

import { Section } from "./Section"
import type { SectionProps } from "./Section.types"

import { Text } from "../Text/Text"
import { Divider } from "../Divider/Divider"

const meta: Meta<SectionProps> = {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
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
type Story = StoryObj<SectionProps>

export const Demo: Story = {
  args: {
    className: "",
    children: "Section",
  },
  render: (args) => (
    <div className="sb-column">
      <Divider variant="full" />
      <Section>
        <Text context="neutral" variant="body" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Section>
      <Divider variant="full" />
    </div>
  ),
}
