import { Meta, StoryObj } from "@storybook/preact"

import { PopoverContainer } from "./PopoverContainer"

import { Text, Stack, Section } from "../../index"

const meta: Meta<typeof PopoverContainer> = {
  title: "Components/PopoverContainer",
  component: PopoverContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A component that creates a container for a popover overlay.",
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
type Story = StoryObj<typeof PopoverContainer>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    width: 300,
    height: 300,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    return (
      <div className="sb-column sb-width-full">
        <PopoverContainer {...args}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae
            autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi
            id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam,
            repudiandae similique magnam aspernatur esse dignissimos molestiae.
          </Text>
        </PopoverContainer>
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
          <PopoverContainer width={300}>
            <Section>
              <Text>Width: 300</Text>
            </Section>
          </PopoverContainer>
          <PopoverContainer width="auto">
            <Section>
              <Text>Width: auto</Text>
            </Section>
          </PopoverContainer>
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
          <PopoverContainer height={200}>
            <Section>
              <Text>Height: 200</Text>
            </Section>
          </PopoverContainer>
          <PopoverContainer height="auto">
            <Section>
              <Text>Height: auto</Text>
            </Section>
          </PopoverContainer>
        </Stack>
      </div>
    )
  },
}
