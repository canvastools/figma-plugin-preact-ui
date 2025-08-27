import { useState } from "preact/hooks"
import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { Input } from "./Input"

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
    error: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    prefix: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      description: "Element inserted before value.",
      control: { disable: true },
    },
    suffix: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      description: "Element inserted after value. Visible on hover/focus.",
      control: { disable: true },
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
    error: false,
    disabled: false,
    onChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
  },
  render: (args) => (
    <div className="sb-column sb-gap-16" style={{ width: "30%" }}>
      <Input {...args} />
    </div>
  ),
}

export const Uncontrolled: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16" style={{ width: "30%" }}>
      <Input defaultValue="Default Value" />
    </div>
  ),
}

export const Controlled: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="sb-column sb-gap-16" style={{ width: "30%" }}>
        <Text>Value: {value}</Text>
        <Input value={value} onChange={(args) => setValue(args.value)} />
      </div>
    )
  },
}

export const Placeholder: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16" style={{ width: "30%" }}>
      <Input />
      <Input placeholder="Placeholder" />
    </div>
  ),
}

export const Disabled: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16" style={{ width: "30%" }}>
      <Input disabled />
      <Input disabled placeholder="Placeholder" />
      <Input disabled defaultValue="Default Value" />
    </div>
  ),
}

export const Prefix: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16" style={{ width: "30%" }}>
      <Input
        prefix={
          <Icon
            glyph="search"
            context="neutral"
            contextModifiers="secondary"
            variant="scaled"
          />
        }
      />
      <Input
        placeholder="Placeholder"
        prefix={
          <Icon
            glyph="search"
            context="neutral"
            contextModifiers="secondary"
            variant="scaled"
          />
        }
      />
      <Input
        defaultValue="Default Value"
        prefix={
          <Icon
            glyph="search"
            context="neutral"
            contextModifiers="secondary"
            variant="scaled"
          />
        }
      />
    </div>
  ),
}

export const Suffix: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="sb-column sb-gap-16" style={{ width: "30%" }}>
      <Input
        suffix={
          <ButtonIcon context="neutral" contextModifiers="default" translucent>
            <Icon
              glyph="link"
              context="neutral"
              contextModifiers="default"
              variant="scaled"
            />
          </ButtonIcon>
        }
      />
      <Input
        placeholder="Placeholder"
        suffix={
          <ButtonIcon context="neutral" contextModifiers="default" translucent>
            <Icon
              glyph="link"
              context="neutral"
              contextModifiers="default"
              variant="scaled"
            />
          </ButtonIcon>
        }
      />
      <Input
        defaultValue="Default Value"
        suffix={
          <ButtonIcon context="neutral" contextModifiers="default" translucent>
            <Icon
              glyph="link"
              context="neutral"
              contextModifiers="default"
              variant="scaled"
            />
          </ButtonIcon>
        }
      />
    </div>
  ),
}
