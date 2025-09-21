import { useState } from "preact/hooks"
import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { Input } from "./Input"

import { Section } from "../Section/Section"
import { Stack } from "../Stack/Stack"
import { Icon } from "../Icon/Icon"
import { Text } from "../Text/Text"
import { ButtonIcon } from "../ButtonIcon/ButtonIcon"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    placeholder: {
      control: { type: "text" },
    },
    type: {
      control: { type: "select", options: ["text", "number"] },
      defaultValue: { summary: "text" },
    },
    defaultValue: {
      control: { type: "text" },
      description: "Initial value for uncontrolled mode.",
    },
    value: {
      control: { disable: true },
      description: "Value for controlled mode.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    ghost: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    prefix: {
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
      description: "Element inserted before value.",
      control: { disable: true },
    },
    suffix: {
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
      description: "Element inserted after value. Visible on hover/focus.",
      control: { disable: true },
    },
    focusOnDoubleClick: {
      control: { type: "boolean" },
      description: "Enables double-click focus",
    },
    onChange: {
      action: "changed",
      description:
        "Callback function that is called when the value is changed.",
      table: {
        type: {
          summary: "(args: { event: MouseEvent; value: string }) => void",
        },
      },
    },
    onBlur: {
      action: "blurred",
      description:
        "Callback function that is called when the input is blurred.",
      table: {
        type: {
          summary: "(args: { event: MouseEvent; value: string }) => void",
        },
      },
    },
    onFocus: {
      action: "focused",
      description:
        "Callback function that is called when the input is focused.",
      table: {
        type: {
          summary: "(args: { event: MouseEvent; value: string }) => void",
        },
      },
    },
    onKeyDown: {
      action: "keydown",
      description:
        "Callback function that is called when the input is keyed down.",
      table: {
        type: {
          summary: "(args: { event: KeyboardEvent; value: string }) => void",
        },
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof Input>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    placeholder: "Placeholder",
    defaultValue: "",
    ghost: false,
    error: false,
    disabled: false,
    focusOnDoubleClick: false,
    onChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
    onKeyDown: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-300">
      <Section>
        <Input {...args} />
      </Section>
    </div>
  ),
}

export const Uncontrolled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <Section>
        <Input defaultValue="Default Value" />
      </Section>
    </div>
  ),
}

export const Controlled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="sb-column sb-width-300">
        <Section>
          <Text>Value: {value}</Text>
        </Section>
        <Section>
          <Input value={value} onChange={(args) => setValue(args.value)} />
        </Section>
      </div>
    )
  },
}

export const Placeholder: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <Section>
        <Stack spacing={400}>
          <Input />
          <Input placeholder="Placeholder" />
        </Stack>
      </Section>
    </div>
  ),
}

export const Ghost: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <Section>
        <Input defaultValue="Default Value" ghost />
      </Section>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <Section>
        <Stack spacing={400}>
          <Input disabled />
          <Input disabled placeholder="Placeholder" />
          <Input disabled defaultValue="Default Value" />
        </Stack>
      </Section>
    </div>
  ),
}

export const Prefix: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <Section>
        <Stack spacing={400}>
          <Input
            prefix={
              <Icon
                glyph="search"
                intent="neutral"
                intentModifiers="secondary"
                variant="scaled"
              />
            }
          />
          <Input
            placeholder="Placeholder"
            prefix={
              <Icon
                glyph="search"
                intent="neutral"
                intentModifiers="secondary"
                variant="scaled"
              />
            }
          />
          <Input
            defaultValue="Default Value"
            prefix={
              <Icon
                glyph="search"
                intent="neutral"
                intentModifiers="secondary"
                variant="scaled"
              />
            }
          />
        </Stack>
      </Section>
    </div>
  ),
}

export const Suffix: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <Section>
        <Stack spacing={400}>
          <Input
            suffix={
              <ButtonIcon
                intent="neutral"
                intentModifiers="default"
                translucent
              >
                <Icon
                  glyph="link"
                  intent="neutral"
                  intentModifiers="default"
                  variant="scaled"
                />
              </ButtonIcon>
            }
          />
          <Input
            placeholder="Placeholder"
            suffix={
              <ButtonIcon
                intent="neutral"
                intentModifiers="default"
                translucent
              >
                <Icon
                  glyph="link"
                  intent="neutral"
                  intentModifiers="default"
                  variant="scaled"
                />
              </ButtonIcon>
            }
          />
          <Input
            defaultValue="Default Value"
            suffix={
              <ButtonIcon
                intent="neutral"
                intentModifiers="default"
                translucent
              >
                <Icon
                  glyph="link"
                  intent="neutral"
                  intentModifiers="default"
                  variant="scaled"
                />
              </ButtonIcon>
            }
          />
        </Stack>
      </Section>
    </div>
  ),
}
