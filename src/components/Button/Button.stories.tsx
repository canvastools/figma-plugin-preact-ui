import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { Button } from "./Button"

import { Icon, Stack, link as linkGlyph } from "../../index"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    intent: {
      control: { type: "radio" },
      options: ["neutral", "neutral-inverted", "brand", "danger", "success"],
      defaultValue: { summary: "neutral" },
    },
    intentModifiers: {
      control: { type: "radio" },
      options: ["default", "secondary", "brand", "danger", "success"],
      defaultValue: { summary: "default" },
    },
    ghost: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    size: {
      control: { type: "radio" },
      options: ["medium", "large"],
      defaultValue: { summary: "medium" },
    },
    grouped: {
      control: { type: "radio" },
      options: ["none", "left", "right", "both"],
      defaultValue: { summary: "none" },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    fullWidth: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    prefix: {
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
      description: "Element displayed before children.",
      control: { disable: true },
    },
    suffix: {
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
      description: "Element displayed after children.",
      control: { disable: true },
    },
    children: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      control: { type: "text" },
      description: "Usually text content.",
    },
    onClick: {
      action: "clicked",
      description: "Callback when the button is clicked.",
      table: {
        type: {
          summary: "(args: {event: MouseEvent}) => void",
        },
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof Button>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    intent: "neutral",
    intentModifiers: "default",
    size: "medium",
    grouped: "none",
    ghost: false,
    disabled: false,
    fullWidth: false,
    children: "Button",
    onClick: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Button {...args} />
    </div>
  ),
}

export const Intent: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Button intent="neutral" intentModifiers="default">
          Neutral
        </Button>
        <Button intent="neutral" intentModifiers="default" ghost>
          Neutral Ghost
        </Button>
        <Button intent="neutral" intentModifiers="brand">
          Neutral Brand
        </Button>
        <Button intent="neutral" intentModifiers="brand" ghost>
          Neutral Brand Ghost
        </Button>
        <Button intent="neutral" intentModifiers="danger">
          Neutral Danger
        </Button>
        <Button intent="neutral" intentModifiers="danger" ghost>
          Neutral Danger Ghost
        </Button>
        <Button intent="neutral-inverted" intentModifiers="default">
          Neutral Inverted
        </Button>
        <Button intent="brand" intentModifiers="default">
          Brand
        </Button>
        <Button intent="danger" intentModifiers="default">
          Danger
        </Button>
        <Button intent="success" intentModifiers="default">
          Success
        </Button>
      </Stack>
    </div>
  ),
}

export const Size: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-row sb-width-full">
      <Stack spacing={400} direction="row">
        <Stack spacing={400}>
          <Button intent="neutral" intentModifiers="default">
            Neutral
          </Button>
          <Button intent="neutral" intentModifiers="default" ghost>
            Neutral Ghost
          </Button>
          <Button intent="neutral" intentModifiers="brand">
            Neutral Brand
          </Button>
          <Button intent="neutral" intentModifiers="brand" ghost>
            Neutral Brand Ghost
          </Button>
          <Button intent="neutral" intentModifiers="danger">
            Neutral Danger
          </Button>
          <Button intent="neutral" intentModifiers="danger" ghost>
            Neutral Danger Ghost
          </Button>
          <Button intent="neutral-inverted" intentModifiers="default">
            Neutral Inverted
          </Button>
          <Button intent="brand" intentModifiers="default">
            Brand
          </Button>
          <Button intent="danger" intentModifiers="default">
            Danger
          </Button>
          <Button intent="success" intentModifiers="default">
            Success
          </Button>
        </Stack>

        <Stack spacing={400}>
          <Stack spacing={400}>
            <Button intent="neutral" intentModifiers="default" size="large">
              Neutral
            </Button>
            <Button
              intent="neutral"
              intentModifiers="default"
              ghost
              size="large"
            >
              Neutral Ghost
            </Button>
            <Button intent="neutral" intentModifiers="brand" size="large">
              Neutral Brand
            </Button>
            <Button intent="neutral" intentModifiers="brand" ghost size="large">
              Neutral Brand Ghost
            </Button>
            <Button intent="neutral" intentModifiers="danger" size="large">
              Neutral Danger
            </Button>
            <Button
              intent="neutral"
              intentModifiers="danger"
              ghost
              size="large"
            >
              Neutral Danger Ghost
            </Button>
            <Button
              intent="neutral-inverted"
              intentModifiers="default"
              size="large"
            >
              Neutral Inverted
            </Button>
            <Button intent="brand" intentModifiers="default" size="large">
              Brand
            </Button>
            <Button intent="danger" intentModifiers="default" size="large">
              Danger
            </Button>
            <Button intent="success" intentModifiers="default" size="large">
              Success
            </Button>
          </Stack>
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
    <div className="sb-row sb-gap-16">
      <Stack spacing={400} direction="row">
        <Stack spacing={400}>
          <Button intent="neutral" intentModifiers="default" disabled>
            Neutral
          </Button>
          <Button intent="neutral" intentModifiers="default" ghost disabled>
            Neutral Ghost
          </Button>
          <Button intent="neutral" intentModifiers="brand" disabled>
            Neutral Brand
          </Button>
          <Button intent="neutral" intentModifiers="brand" ghost disabled>
            Neutral Brand Ghost
          </Button>
          <Button intent="neutral" intentModifiers="danger" disabled>
            Neutral Danger
          </Button>
          <Button intent="neutral" intentModifiers="danger" ghost disabled>
            Neutral Danger Ghost
          </Button>
          <Button intent="neutral-inverted" intentModifiers="default" disabled>
            Neutral Inverted
          </Button>
          <Button intent="brand" intentModifiers="default" disabled>
            Brand
          </Button>
          <Button intent="danger" intentModifiers="default" disabled>
            Danger
          </Button>
          <Button intent="success" intentModifiers="default" disabled>
            Success
          </Button>
        </Stack>

        <Stack spacing={400}>
          <Button
            intent="neutral"
            intentModifiers="default"
            size="large"
            disabled
          >
            Neutral
          </Button>
          <Button
            intent="neutral"
            intentModifiers="default"
            ghost
            size="large"
            disabled
          >
            Neutral Ghost
          </Button>
          <Button
            intent="neutral"
            intentModifiers="brand"
            size="large"
            disabled
          >
            Neutral Brand
          </Button>
          <Button
            intent="neutral"
            intentModifiers="brand"
            ghost
            size="large"
            disabled
          >
            Neutral Brand Ghost
          </Button>
          <Button
            intent="neutral"
            intentModifiers="danger"
            size="large"
            disabled
          >
            Neutral Danger
          </Button>
          <Button
            intent="neutral"
            intentModifiers="danger"
            ghost
            size="large"
            disabled
          >
            Neutral Danger Ghost
          </Button>
          <Button
            intent="neutral-inverted"
            intentModifiers="default"
            size="large"
            disabled
          >
            Neutral Inverted
          </Button>
          <Button
            intent="brand"
            intentModifiers="default"
            size="large"
            disabled
          >
            Brand
          </Button>
          <Button
            intent="danger"
            intentModifiers="default"
            size="large"
            disabled
          >
            Danger
          </Button>
          <Button
            intent="success"
            intentModifiers="default"
            size="large"
            disabled
          >
            Success
          </Button>
        </Stack>
      </Stack>
    </div>
  ),
}

export const FullWidth: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-row sb-width-full">
      <Stack spacing={400} direction="row">
        <Stack spacing={400}>
          <Button intent="neutral" intentModifiers="default" fullWidth>
            Neutral
          </Button>
          <Button intent="neutral" intentModifiers="default" ghost fullWidth>
            Neutral Ghost
          </Button>
          <Button intent="neutral" intentModifiers="brand" fullWidth>
            Neutral Brand
          </Button>
          <Button intent="neutral" intentModifiers="brand" ghost fullWidth>
            Neutral Brand Ghost
          </Button>
          <Button intent="neutral" intentModifiers="danger" fullWidth>
            Neutral Danger
          </Button>
          <Button intent="neutral" intentModifiers="danger" ghost fullWidth>
            Neutral Danger Ghost
          </Button>
          <Button intent="neutral-inverted" intentModifiers="default" fullWidth>
            Neutral Inverted
          </Button>
          <Button intent="brand" intentModifiers="default" fullWidth>
            Brand
          </Button>
          <Button intent="danger" intentModifiers="default" fullWidth>
            Danger
          </Button>
          <Button intent="success" intentModifiers="default" fullWidth>
            Success
          </Button>
        </Stack>

        <Stack spacing={400}>
          <Button
            intent="neutral"
            intentModifiers="default"
            size="large"
            fullWidth
          >
            Neutral
          </Button>
          <Button
            intent="neutral"
            intentModifiers="default"
            ghost
            size="large"
            fullWidth
          >
            Neutral Ghost
          </Button>
          <Button
            intent="neutral"
            intentModifiers="brand"
            size="large"
            fullWidth
          >
            Neutral Brand
          </Button>
          <Button
            intent="neutral"
            intentModifiers="brand"
            ghost
            size="large"
            fullWidth
          >
            Neutral Brand Ghost
          </Button>
          <Button
            intent="neutral"
            intentModifiers="danger"
            size="large"
            fullWidth
          >
            Neutral Danger
          </Button>
          <Button
            intent="neutral"
            intentModifiers="danger"
            ghost
            size="large"
            fullWidth
          >
            Neutral Danger Ghost
          </Button>
          <Button
            intent="neutral-inverted"
            intentModifiers="default"
            size="large"
            fullWidth
          >
            Neutral Inverted
          </Button>
          <Button
            intent="brand"
            intentModifiers="default"
            size="large"
            fullWidth
          >
            Brand
          </Button>
          <Button
            intent="danger"
            intentModifiers="default"
            size="large"
            fullWidth
          >
            Danger
          </Button>
          <Button
            intent="success"
            intentModifiers="default"
            size="large"
            fullWidth
          >
            Success
          </Button>
        </Stack>
      </Stack>
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
    <div className="sb-column sb-width-full">
      <Stack spacing={400} direction="row">
        <Stack direction="row">
          <Button
            intent="neutral"
            intentModifiers="default"
            fullWidth
            grouped="right"
          >
            Grouped right
          </Button>
          <Button
            intent="neutral"
            intentModifiers="default"
            fullWidth
            grouped="both"
          >
            Grouped both
          </Button>
          <Button
            intent="neutral"
            intentModifiers="default"
            fullWidth
            grouped="left"
          >
            Grouped left
          </Button>
        </Stack>

        <Stack direction="row">
          <Button
            intent="neutral"
            intentModifiers="default"
            fullWidth
            grouped="right"
            size="large"
          >
            Grouped right
          </Button>
          <Button
            intent="neutral"
            intentModifiers="default"
            fullWidth
            grouped="both"
            size="large"
          >
            Grouped both
          </Button>
          <Button
            intent="neutral"
            intentModifiers="default"
            fullWidth
            grouped="left"
            size="large"
          >
            Grouped left
          </Button>
        </Stack>
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
    <div className="sb-row sb-width-full">
      <Stack spacing={400} direction="row">
        <Stack spacing={400}>
          <Button
            intent="neutral"
            intentModifiers="default"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="default"
                interactive
              />
            }
          >
            Neutral
          </Button>
          <Button
            intent="neutral"
            intentModifiers="default"
            ghost
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="default"
                interactive
              />
            }
          >
            Neutral Ghost
          </Button>
          <Button
            intent="neutral"
            intentModifiers="brand"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="brand"
                interactive
              />
            }
          >
            Neutral Brand
          </Button>
          <Button
            intent="neutral"
            intentModifiers="brand"
            ghost
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="brand"
                interactive
              />
            }
          >
            Neutral Brand Ghost
          </Button>
          <Button
            intent="neutral"
            intentModifiers="danger"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="danger"
                interactive
              />
            }
          >
            Neutral Danger
          </Button>
          <Button
            intent="neutral"
            intentModifiers="danger"
            ghost
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="danger"
                interactive
              />
            }
          >
            Neutral Danger Ghost
          </Button>
          <Button
            intent="neutral-inverted"
            intentModifiers="default"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral-inverted"
                intentModifiers="default"
                interactive
              />
            }
          >
            Neutral Inverted
          </Button>
          <Button
            intent="brand"
            intentModifiers="default"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="brand"
                intentModifiers="default"
                interactive
              />
            }
          >
            Brand
          </Button>
          <Button
            intent="danger"
            intentModifiers="default"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="danger"
                intentModifiers="default"
                interactive
              />
            }
          >
            Danger
          </Button>
          <Button
            intent="success"
            intentModifiers="default"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="success"
                intentModifiers="default"
                interactive
              />
            }
          >
            Success
          </Button>
        </Stack>

        <Stack spacing={400}>
          <Button
            intent="neutral"
            intentModifiers="default"
            size="large"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="default"
                interactive
              />
            }
          >
            Neutral
          </Button>
          <Button
            intent="neutral"
            intentModifiers="default"
            ghost
            size="large"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="default"
                interactive
              />
            }
          >
            Neutral Ghost
          </Button>
          <Button
            intent="neutral"
            intentModifiers="brand"
            size="large"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="brand"
                interactive
              />
            }
          >
            Neutral Brand
          </Button>
          <Button
            intent="neutral"
            intentModifiers="brand"
            ghost
            size="large"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="brand"
                interactive
              />
            }
          >
            Neutral Brand Ghost
          </Button>
          <Button
            intent="neutral"
            intentModifiers="danger"
            size="large"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="danger"
                interactive
              />
            }
          >
            Neutral Danger
          </Button>
          <Button
            intent="neutral"
            intentModifiers="danger"
            ghost
            size="large"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="danger"
                interactive
              />
            }
          >
            Neutral Danger Ghost
          </Button>
          <Button
            intent="neutral-inverted"
            intentModifiers="default"
            size="large"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral-inverted"
                intentModifiers="default"
                interactive
              />
            }
          >
            Neutral Inverted
          </Button>
          <Button
            intent="brand"
            intentModifiers="default"
            size="large"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="brand"
                intentModifiers="default"
                interactive
              />
            }
          >
            Brand
          </Button>
          <Button
            intent="danger"
            intentModifiers="default"
            size="large"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="danger"
                intentModifiers="default"
                interactive
              />
            }
          >
            Danger
          </Button>
          <Button
            intent="success"
            intentModifiers="default"
            size="large"
            prefix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="success"
                intentModifiers="default"
                interactive
              />
            }
          >
            Success
          </Button>
        </Stack>
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
    <div className="sb-row sb-width-full">
      <Stack spacing={400} direction="row">
        <Stack spacing={400}>
          <Button
            intent="neutral"
            intentModifiers="default"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="default"
                interactive
              />
            }
          >
            Neutral
          </Button>
          <Button
            intent="neutral"
            intentModifiers="default"
            ghost
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="default"
                interactive
              />
            }
          >
            Neutral Ghost
          </Button>
          <Button
            intent="neutral"
            intentModifiers="brand"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="brand"
                interactive
              />
            }
          >
            Neutral Brand
          </Button>
          <Button
            intent="neutral"
            intentModifiers="brand"
            ghost
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="brand"
                interactive
              />
            }
          >
            Neutral Brand Ghost
          </Button>
          <Button
            intent="neutral"
            intentModifiers="danger"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="danger"
                interactive
              />
            }
          >
            Neutral Danger
          </Button>
          <Button
            intent="neutral"
            intentModifiers="danger"
            ghost
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="danger"
                interactive
              />
            }
          >
            Neutral Danger Ghost
          </Button>
          <Button
            intent="neutral-inverted"
            intentModifiers="default"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral-inverted"
                intentModifiers="default"
                interactive
              />
            }
          >
            Neutral Inverted
          </Button>
          <Button
            intent="brand"
            intentModifiers="default"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="brand"
                intentModifiers="default"
                interactive
              />
            }
          >
            Brand
          </Button>
          <Button
            intent="danger"
            intentModifiers="default"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="danger"
                intentModifiers="default"
                interactive
              />
            }
          >
            Danger
          </Button>
          <Button
            intent="success"
            intentModifiers="default"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="success"
                intentModifiers="default"
                interactive
              />
            }
          >
            Success
          </Button>
        </Stack>

        <Stack spacing={400}>
          <Button
            intent="neutral"
            intentModifiers="default"
            size="large"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="default"
                interactive
              />
            }
          >
            Neutral
          </Button>
          <Button
            intent="neutral"
            intentModifiers="default"
            ghost
            size="large"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="default"
                interactive
              />
            }
          >
            Neutral Ghost
          </Button>
          <Button
            intent="neutral"
            intentModifiers="brand"
            size="large"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="brand"
                interactive
              />
            }
          >
            Neutral Brand
          </Button>
          <Button
            intent="neutral"
            intentModifiers="brand"
            ghost
            size="large"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="brand"
                interactive
              />
            }
          >
            Neutral Brand Ghost
          </Button>
          <Button
            intent="neutral"
            intentModifiers="danger"
            size="large"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="danger"
                interactive
              />
            }
          >
            Neutral Danger
          </Button>
          <Button
            intent="neutral"
            intentModifiers="danger"
            ghost
            size="large"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral"
                intentModifiers="danger"
                interactive
              />
            }
          >
            Neutral Danger Ghost
          </Button>
          <Button
            intent="neutral-inverted"
            intentModifiers="default"
            size="large"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="neutral-inverted"
                intentModifiers="default"
                interactive
              />
            }
          >
            Neutral Inverted
          </Button>
          <Button
            intent="brand"
            intentModifiers="default"
            size="large"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="brand"
                intentModifiers="default"
                interactive
              />
            }
          >
            Brand
          </Button>
          <Button
            intent="danger"
            intentModifiers="default"
            size="large"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="danger"
                intentModifiers="default"
                interactive
              />
            }
          >
            Danger
          </Button>
          <Button
            intent="success"
            intentModifiers="default"
            size="large"
            suffix={
              <Icon
                glyph={linkGlyph}
                variant="scaled"
                intent="success"
                intentModifiers="default"
                interactive
              />
            }
          >
            Success
          </Button>
        </Stack>
      </Stack>
    </div>
  ),
}

export const CustomIcon: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "The icon’s colours are overridden automatically when using the &lt;Icon&gt; component and SVGs must use the 'currentColor' value for all colour properties",
      },
    },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const customIcon = (
      <Icon
        glyph={linkGlyph}
        variant="scaled"
        intent="success"
        intentModifiers="default"
        interactive
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.755 7.23427C15.4526 7.41038 15.0708 7.42207 14.7499 7.23681C14.4289 7.05149 14.2481 6.71483 14.2496 6.36477C14.2518 5.84407 13.908 5.22635 13.212 5.10473C12.8177 5.03581 12.4126 5 11.9999 5C11.5873 5 11.1822 5.03582 10.7878 5.10474C10.0918 5.22636 9.74809 5.84409 9.75026 6.36479C9.75172 6.71485 9.57093 7.05152 9.24994 7.23684C8.92906 7.4221 8.54727 7.41041 8.24489 7.2343C7.79535 6.97249 7.09002 6.96142 6.63667 7.50141C6.1179 8.11934 5.70348 8.82895 5.42136 9.60311C5.17962 10.2665 5.54277 10.8723 5.99461 11.1305C6.29865 11.3042 6.49993 11.6292 6.49993 12C6.49993 12.3707 6.29864 12.6957 5.9946 12.8694C5.54276 13.1276 5.17959 13.7334 5.42133 14.3968C5.70344 15.171 6.11787 15.8806 6.63664 16.4986C7.08999 17.0386 7.79532 17.0275 8.24486 16.7657C8.54724 16.5896 8.92903 16.5779 9.2499 16.7631C9.57089 16.9485 9.75168 17.2851 9.75022 17.6352C9.74805 18.1559 10.0918 18.7736 10.7878 18.8953C11.1822 18.9642 11.5873 19 11.9999 19C12.4126 19 12.8177 18.9642 13.2121 18.8953C13.9081 18.7736 14.2518 18.1559 14.2496 17.6352C14.2481 17.2851 14.4289 16.9484 14.7499 16.7631C15.0708 16.5779 15.4526 16.5895 15.755 16.7657C16.2045 17.0275 16.9099 17.0386 17.3632 16.4986C17.882 15.8806 18.2964 15.171 18.5786 14.3968C18.8203 13.7334 18.4571 13.1276 18.0053 12.8694C17.7013 12.6957 17.5 12.3707 17.5 12C17.5 11.6292 17.7013 11.3042 18.0053 11.1305C18.4571 10.8723 18.8203 10.2665 18.5785 9.60313C18.2964 8.82895 17.882 8.11931 17.3632 7.50137C16.9098 6.96138 16.2045 6.97245 15.755 7.23427ZM14.2499 8.10284C14.8939 8.47463 15.6587 8.4476 16.2582 8.0984C16.3697 8.03351 16.5144 8.04562 16.5973 8.14436C17.0424 8.67449 17.3974 9.28272 17.639 9.94552C17.6832 10.0667 17.6212 10.1982 17.5092 10.2623C16.9063 10.6067 16.5 11.2559 16.5 12C16.5 12.744 16.9063 13.3932 17.5092 13.7377C17.6212 13.8017 17.6832 13.9332 17.639 14.0544C17.3975 14.7172 17.0424 15.3254 16.5974 15.8556C16.5145 15.9543 16.3697 15.9664 16.2583 15.9015C15.6587 15.5523 14.8939 15.5253 14.2499 15.8971C13.6057 16.269 13.2467 16.9452 13.2496 17.6394C13.2502 17.7685 13.1671 17.888 13.0399 17.9102C12.7021 17.9692 12.3546 18 11.9999 18C11.6452 18 11.2977 17.9692 10.9599 17.9102C10.8327 17.888 10.7497 17.7685 10.7502 17.6394C10.7531 16.9452 10.3941 16.269 9.7499 15.8971C9.10594 15.5253 8.34117 15.5523 7.74159 15.9015C7.63018 15.9664 7.48543 15.9543 7.40253 15.8556C6.95747 15.3254 6.60242 14.7172 6.36089 14.0544C6.31671 13.9332 6.3787 13.8017 6.49072 13.7377C7.09359 13.3932 7.49993 12.744 7.49993 12C7.49993 11.2559 7.0936 10.6067 6.49074 10.2622C6.37872 10.1982 6.31674 10.0667 6.36091 9.94551C6.60245 9.28272 6.9575 8.67451 7.40255 8.14439C7.48545 8.04565 7.6302 8.03354 7.74161 8.09843C8.3412 8.44763 9.10598 8.47466 9.74994 8.10286C10.3941 7.73094 10.7531 7.05475 10.7503 6.36062C10.7497 6.23151 10.8328 6.11203 10.9599 6.08981C11.2977 6.03078 11.6452 6 11.9999 6C12.3546 6 12.7021 6.03078 13.0399 6.0898C13.1671 6.11203 13.2501 6.2315 13.2496 6.36061C13.2467 7.05473 13.6057 7.73091 14.2499 8.10284ZM10.4999 12C10.4999 11.1716 11.1715 10.5 11.9999 10.5C12.8284 10.5 13.4999 11.1716 13.4999 12C13.4999 12.8284 12.8284 13.5 11.9999 13.5C11.1715 13.5 10.4999 12.8284 10.4999 12ZM11.9999 9.5C10.6192 9.5 9.49994 10.6193 9.49994 12C9.49994 13.3807 10.6192 14.5 11.9999 14.5C13.3807 14.5 14.4999 13.3807 14.4999 12C14.4999 10.6193 13.3807 9.5 11.9999 9.5Z"
          />
        </svg>
      </Icon>
    )

    return (
      <div className="sb-column sb-width-full">
        <Button
          intent="success"
          intentModifiers="default"
          size="large"
          suffix={customIcon}
        >
          Custom Icon
        </Button>
      </div>
    )
  },
}
