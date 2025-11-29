import { Meta, StoryObj } from "@storybook/preact"

import { Section } from "./Section"

import { Text, Stack } from "../../index"

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
    variant: {
      control: { type: "select" },
      options: ["default", "stacked"],
      defaultValue: { summary: "default" },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    padding: {
      control: { type: "object" },
      description: `Custom padding for the section. Using the spacing variables names.
      <pre>
  padding?: {
    top?: SectionPadding
    right?: SectionPadding
    bottom?: SectionPadding
    left?: SectionPadding
  }</pre>`,
      table: {
        type: {
          summary: "SectionPadding = keyof typeof spacing.variables",
        },
      },
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
    padding: {},
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

export const Stacked: Story = {
  render: () => (
    <div className="sb-column sb-height-300">
      <Stack direction="column" spacing={400} fullWidth>
        <Section variant="default" className="sb-container">
          <Text>Default Section</Text>
        </Section>

        <Stack direction="column" fullWidth>
          <Section variant="stacked" className="sb-container">
            <Text>Stacked Section</Text>
          </Section>
          <Section variant="stacked" className="sb-container">
            <Text>Stacked Section</Text>
          </Section>
          <Section variant="stacked" className="sb-container">
            <Text>Stacked Section</Text>
          </Section>
        </Stack>
      </Stack>
    </div>
  ),
}
