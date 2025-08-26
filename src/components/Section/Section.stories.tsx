import { Meta, StoryObj } from "@storybook/preact"

import { Section } from "./Section"
import type { SectionProps } from "./Secton.types"

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
    variant: {
      control: { type: "radio" },
      options: ["flat", "compact", "default", "spacious"],
    },
    children: {
      control: { type: "text" },
    },
  },
}

export default meta
type Story = StoryObj<SectionProps>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    variant: "default",
    children: "Section",
  },
  render: (args) => (
    <div className="sb-column">
      <Divider variant="full" />
      <Section variant={args.variant}>
        <Text context="neutral" variant="heading" size="small">
          {args.children}
        </Text>
      </Section>
      <Divider variant="full" />
      <Section variant={args.variant}>
        <Text context="neutral" variant="body" size="medium">
          {args.children}
        </Text>
      </Section>
      <Divider variant="full" />
    </div>
  ),
}

export const Variant: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column">
      <Divider variant="full" />
      <Section variant="flat">
        <Text context="neutral" variant="heading" size="small">
          Flat
        </Text>
      </Section>
      <Divider variant="full" />
      <Section variant="flat">
        <Text context="neutral" variant="body" size="medium">
          Flat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Section>
      <Divider variant="full" />
      <Section variant="compact">
        <Text context="neutral" variant="heading" size="small">
          Compact
        </Text>
      </Section>
      <Divider variant="full" />
      <Section variant="compact">
        <Text context="neutral" variant="body" size="medium">
          Compact. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Section>
      <Divider variant="full" />
      <Section variant="default">
        <Text context="neutral" variant="heading" size="small">
          Default
        </Text>
      </Section>
      <Divider variant="full" />
      <Section variant="default">
        <Text context="neutral" variant="body" size="medium">
          Default.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Section>
      <Divider variant="full" />
      <Section variant="spacious">
        <Text context="neutral" variant="heading" size="small">
          Spacious
        </Text>
      </Section>
      <Divider variant="full" />
      <Section variant="spacious">
        <Text context="neutral" variant="body" size="medium">
          Spacious. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
