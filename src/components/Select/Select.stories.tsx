import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useState, useEffect, useRef } from "preact/hooks"

import { Select } from "./Select"

import {
  Stack,
  Text,
  Icon,
  search as searchGlyph,
  check as checkGlyph,
  useMenuContext,
  bem,
} from "../../index"

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    className: { control: { type: "text" } },
    options: {
      table: {
        type: {
          summary:
            "SelectOption[] | SelectOption[][] | SelectCustomMenuOption[] | SelectCustomMenuOption[][]",
        },
      },
      control: { disable: true },
      description: `Array of items to manage.
      <pre>interface SelectOption {
  label: string
  value: string
  disabled?: boolean
  children?: preact.ComponentChildren
}</pre>`,
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text to display when no option is selected.",
    },
    value: {
      control: { disable: true },
      description: "Value for the controlled mode.",
      table: { type: { summary: "string" } },
    },
    defaultValue: {
      control: { type: "text" },
      description: "Default value for the uncontrolled mode.",
      table: { type: { summary: "string" } },
    },
    grouped: {
      control: { type: "radio" },
      options: ["none", "left", "right", "both"],
      defaultValue: { summary: "none" },
    },
    error: { control: { type: "boolean" }, defaultValue: { summary: "false" } },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: "false" },
    },
    menuWidth: {
      control: { type: "number" },
      defaultValue: { summary: "auto" },
      description: "Width of the menu.",
    },
    tooltip: {
      control: { disable: true },
      description: "Tooltip content.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    onBlur: {
      control: { disable: true },
      description: "Callback when the input is blurred.",
      table: { type: { summary: "() => void" } },
    },
    onFocus: {
      control: { disable: true },
      description: "Callback when the input is focused.",
      table: { type: { summary: "() => void" } },
    },
    onChange: {
      control: { disable: true },
      description: "Callback when the value is changed.",
      table: {
        type: {
          summary: "(args: { event: MouseEvent, value: string }) => void",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    placeholder: "Choose an option",
    defaultValue: "",
    grouped: "none",
    error: false,
    disabled: false,
    menuWidth: 208,
    onBlur: fn(),
    onFocus: fn(),
    onChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const sampleOptions = [
      { value: "opt-1", label: "Option one" },
      { value: "opt-2", label: "Option two" },
      { value: "opt-3", label: "Option three" },
    ]

    return (
      <div className="sb-column sb-width-300">
        <Select options={sampleOptions} {...args} />
      </div>
    )
  },
}

export const Uncontrolled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const sampleOptions = [
      { value: "opt-1", label: "Option one" },
      { value: "opt-2", label: "Option two" },
      { value: "opt-3", label: "Option three" },
    ]

    return (
      <div className="sb-column sb-width-300">
        <Select
          options={sampleOptions}
          placeholder="Choose an option"
          defaultValue="opt-1"
        />
      </div>
    )
  },
}

export const Controlled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [value, setValue] = useState("opt-1")

    const sampleOptions = [
      { value: "opt-1", label: "Option one" },
      { value: "opt-2", label: "Option two" },
      { value: "opt-3", label: "Option three" },
    ]

    return (
      <div className="sb-column sb-width-300">
        <Stack spacing={400}>
          <Text>Value: {value}</Text>
          <Select
            placeholder="Choose an option"
            options={sampleOptions}
            value={value}
            onChange={(e) => setValue(e.value)}
          />
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
  render: () => {
    const sampleOptions = [
      { value: "opt-1", label: "Option one" },
      { value: "opt-2", label: "Option two" },
      { value: "opt-3", label: "Option three" },
    ]

    return (
      <div className="sb-column sb-width-300">
        <Select options={sampleOptions} placeholder="Choose an option" />
      </div>
    )
  },
}

export const Grouped: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const sampleOptions = [
      { value: "opt-1", label: "Option one" },
      { value: "opt-2", label: "Option two" },
      { value: "opt-3", label: "Option three" },
    ]

    return (
      <div className="sb-column sb-width-300">
        <Stack direction="row">
          <Select
            options={sampleOptions}
            placeholder="Choose an option"
            defaultValue="opt-1"
            grouped="right"
          />
          <Select
            options={sampleOptions}
            placeholder="Choose an option"
            defaultValue="opt-2"
            grouped="both"
          />
          <Select
            options={sampleOptions}
            placeholder="Choose an option"
            defaultValue="opt-3"
            grouped="left"
          />
        </Stack>
      </div>
    )
  },
}

export const GroupedOptions: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const sampleOptionsWithGroups = [
      [
        { value: "opt-1", label: "Option one" },
        { value: "opt-2", label: "Option two" },
        { value: "opt-3", label: "Option three" },
      ],
      [
        { value: "opt-4", label: "Option four" },
        { value: "opt-5", label: "Option five" },
        { value: "opt-6", label: "Option six" },
      ],
    ]

    return (
      <div className="sb-column sb-width-300">
        <Select
          options={sampleOptionsWithGroups}
          placeholder="Choose an option"
          defaultValue="opt-1"
          grouped="right"
        />
      </div>
    )
  },
}

export const Error: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const sampleOptions = [
      { value: "opt-1", label: "Option one" },
      { value: "opt-2", label: "Option two" },
      { value: "opt-3", label: "Option three" },
    ]

    return (
      <div className="sb-column sb-width-300">
        <Select
          options={sampleOptions}
          placeholder="Choose an option"
          defaultValue="opt-1"
          error={true}
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const sampleOptions = [
      { value: "opt-1", label: "Option one" },
      { value: "opt-2", label: "Option two" },
      { value: "opt-3", label: "Option three" },
    ]

    return (
      <div className="sb-column sb-width-300">
        <Stack spacing={400}>
          <Select
            options={sampleOptions}
            placeholder="Choose an option"
            disabled={true}
          />
          <Select
            options={sampleOptions}
            placeholder="Choose an option"
            defaultValue="opt-1"
            disabled={true}
          />
        </Stack>
      </div>
    )
  },
}

export const Prefix: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const sampleOptions = [
      { value: "opt-1", label: "Option one" },
      { value: "opt-2", label: "Option two" },
      { value: "opt-3", label: "Option three" },
    ]

    return (
      <div className="sb-column sb-width-300">
        <Select
          options={sampleOptions}
          placeholder="Choose an option"
          defaultValue="opt-1"
          prefix={
            <Icon
              glyph={searchGlyph}
              intent="neutral"
              intentModifiers="secondary"
              variant="scaled"
            />
          }
        />
      </div>
    )
  },
}

export const MenuWidth: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const sampleOptions = [
      { value: "opt-1", label: "Option one" },
      { value: "opt-2", label: "Option two" },
      { value: "opt-3", label: "Option three" },
    ]
    return (
      <div className="sb-column sb-width-300">
        <Select
          options={sampleOptions}
          placeholder="Choose an option"
          defaultValue="opt-1"
          menuWidth={200}
        />
      </div>
    )
  },
}

export const CustomMenuItems: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const CustomMenuItem = ({
      label,
      value,
      disabled,
      focused,
      selected,
      onChange,
    }: {
      label?: string
      value?: string
      disabled?: boolean
      focused?: boolean
      selected?: boolean
      onChange?: (args: { event: MouseEvent; selected: boolean }) => void
    }) => {
      const { registerItem, clearFocusedItem, setHoveredItem, focusItem } =
        useMenuContext()

      const id = value ?? "custom-id"
      const itemRef = useRef<HTMLElement>(null)

      useEffect(() => {
        const unregister = registerItem({
          id: id,
          ref: itemRef as preact.RefObject<HTMLElement>,
          disabled,
        })

        return unregister
      }, [disabled, id])

      const handleClick = (event: MouseEvent) => {
        if (!disabled) {
          event.stopPropagation()
          onChange?.({ event, selected: !selected })
          focusItem(id)
        }
      }

      const handleMouseEnter = () => {
        if (disabled) return
        clearFocusedItem()
        setHoveredItem(id)
      }

      const handleMouseLeave = () => {
        if (disabled) return
        clearFocusedItem()
      }

      const _className = bem("MenuItemCustom", undefined, {
        disabled,
        focused,
        selected: selected,
      })

      return (
        <div
          className={_className}
          ref={itemRef as preact.Ref<HTMLDivElement>}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            padding: "var(--pui-spacing-100) var(--pui-spacing-400)",
            backgroundColor: focused
              ? "var(--pui-color-brand-bg-default-interactive-hover)"
              : "transparent",
          }}
        >
          <Stack direction="row" spacing={100}>
            <div style={{ width: 16, height: 16 }}>
              {selected && (
                <Icon
                  glyph={checkGlyph}
                  size={16}
                  intent={focused ? "brand" : "neutral-inverted-fixed"}
                  disabled={disabled}
                  interactive={true}
                />
              )}
            </div>
            <Text intent="neutral-inverted-fixed" interactive>
              {label}
              {focused ? " [focused]" : null}
            </Text>
          </Stack>
        </div>
      )
    }

    const customOptions = [
      {
        value: "opt-1",
        label: "Option 1",
      },
      {
        value: "opt-2",
        label: "Option 2",
      },
      {
        value: "opt-3",
        label: "Custom option",
        disabled: false,
        children: <CustomMenuItem />,
      },
    ]

    return (
      <div className="sb-column sb-width-300">
        <Select
          options={customOptions}
          placeholder="Choose an option"
          defaultValue="opt-1"
          onChange={({ event, value }) => {
            console.log("onChange", event, value)
          }}
        />
      </div>
    )
  },
}
