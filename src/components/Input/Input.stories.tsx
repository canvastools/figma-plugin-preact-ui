import { useState } from "preact/hooks"
import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { Input } from "./Input"

import { Stack } from "../../index"
import { Icon } from "../../index"
import { Text } from "../../index"
import { ButtonIcon } from "../../index"
import { search as searchGlyph, link as linkGlyph } from "../../index"

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
      control: { type: "radio" },
      options: ["text", "number"],
      defaultValue: { summary: "text" },
      table: {
        type: {
          summary: "string",
        },
      },
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
      defaultValue: { summary: false },
    },
    grouped: {
      control: { radio: "select" },
      options: ["none", "left", "right", "both"],
      defaultValue: { summary: "none" },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    error: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    prefix: {
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
      description: "Element displayed before value.",
      control: { disable: true },
    },
    suffix: {
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
      description: "Element displayed after value. Visible on hover/focus.",
      control: { disable: true },
    },
    suffixOnHover: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Whether the suffix should be visible on hover.",
    },
    focusOnDoubleClick: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description: "Enables double-click focus",
    },
    onChange: {
      action: "changed",
      description: "Callback when the value is changed.",
      table: {
        type: {
          summary: "(args: { event: MouseEvent; value: string }) => void",
        },
      },
    },
    onBlur: {
      action: "blurred",
      description: "Callback when the input is blurred.",
      table: {
        type: {
          summary: "(args: { event: MouseEvent; value: string }) => void",
        },
      },
    },
    onFocus: {
      action: "focused",
      description: "Callback when the input is focused.",
      table: {
        type: {
          summary: "(args: { event: MouseEvent; value: string }) => void",
        },
      },
    },
    onKeyDown: {
      action: "keydown",
      description: "Callback when the input is keyed down.",
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
    type: "text",
    placeholder: "Placeholder",
    defaultValue: "",
    ghost: false,
    error: false,
    disabled: false,
    grouped: "none",
    suffixOnHover: false,
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
      <Input {...args} />
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
      <Input defaultValue="Default Value" />
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
        <Stack spacing={400}>
          <Text>Value: {value}</Text>
          <Input value={value} onChange={(args) => setValue(args.value)} />
        </Stack>
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
      <Stack spacing={400}>
        <Input />
        <Input placeholder="Placeholder" />
      </Stack>
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
      <Input defaultValue="Default Value" ghost />
    </div>
  ),
}

export const Grouped: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <Stack spacing={400}>
        <Text>Grouped</Text>
        <Stack spacing={0} direction="row">
          <Input defaultValue="Default Value" grouped="right" />
          <Input defaultValue="Default Value" grouped="both" />
          <Input defaultValue="Default Value" grouped="left" />
        </Stack>
        <Text>Grouped with .InputGrouped class wrapper</Text>
        <Stack spacing={0} direction="row" className="InputGrouped">
          <Input defaultValue="Default Value" grouped="right" />
          <Input defaultValue="Default Value" grouped="both" />
          <Input defaultValue="Default Value" grouped="left" />
        </Stack>
      </Stack>
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
      <Stack spacing={400}>
        <Input disabled />
        <Input disabled placeholder="Placeholder" />
        <Input disabled defaultValue="Default Value" />
      </Stack>
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
      <Stack spacing={400}>
        <Input
          prefix={
            <Icon
              glyph={searchGlyph}
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
              glyph={searchGlyph}
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
              glyph={searchGlyph}
              intent="neutral"
              intentModifiers="secondary"
              variant="scaled"
            />
          }
        />
      </Stack>
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
      <Stack spacing={400}>
        <Input
          suffix={
            <ButtonIcon intent="neutral" intentModifiers="default" translucent>
              <Icon
                glyph={linkGlyph}
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
            <ButtonIcon intent="neutral" intentModifiers="default" translucent>
              <Icon
                glyph={linkGlyph}
                intent="neutral"
                intentModifiers="default"
                variant="scaled"
              />
            </ButtonIcon>
          }
        />
        <Input
          defaultValue="Suffix on hover"
          suffixOnHover
          suffix={
            <ButtonIcon intent="neutral" intentModifiers="default" translucent>
              <Icon
                glyph={linkGlyph}
                intent="neutral"
                intentModifiers="default"
                variant="scaled"
              />
            </ButtonIcon>
          }
        />
      </Stack>
    </div>
  ),
}

export const FocusOnDoubleClick: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <Input focusOnDoubleClick value="Focus on double click" />
    </div>
  ),
}
