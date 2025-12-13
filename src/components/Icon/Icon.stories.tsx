import { Meta, StoryObj } from "@storybook/preact"

import { Icon } from "./Icon"

import * as glyphs from "../Icon/glyphs"
import { Text, type TextProps, Section } from "../../index"

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    glyph: {
      control: { type: "select" },
      options: Object.keys(glyphs),
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    intent: {
      control: { type: "radio" },
      options: [
        "neutral",
        "neutral-inverted",
        "neutral-inverted-fixed",
        "brand",
        "danger",
        "warning",
        "success",
      ],
      defaultValue: { summary: "neutral" },
    },
    intentModifiers: {
      control: { type: "radio" },
      options: [
        "default",
        "secondary",
        "brand",
        "danger",
        "warning",
        "success",
      ],
      defaultValue: { summary: "default" },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    interactive: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description:
        "Allows using colours for interactive states within the intent.",
    },
    selected: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
      description:
        "Enables the modifier for the selected state. Only works if interactive is enabled.",
    },
    fill: {
      control: { type: "color" },
      description: "Overrides the intent color.",
      table: {
        type: {
          summary: "HEX | RGB | RGBA | var()",
        },
      },
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "scaled"],
      defaultValue: { summary: "default" },
      description:
        "Some icons may have glyph variations (e.g. size) while preserving the container dimensions.",
    },
    size: {
      control: { type: "radio" },
      options: [16, 24],
      defaultValue: { summary: "24" },
      description: "The size of the icon container.",
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    glyph: "link",
    intent: "neutral",
    intentModifiers: "default",
    disabled: false,
    interactive: false,
    selected: false,
    variant: "default",
    size: 24,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    // @ts-expect-error: Storybook types hack
    const { glyph, ...rest } = args as {
      glyph: keyof typeof glyphs
    } & import("./Icon.types").IconProps

    return (
      <div className="sb-column sb-width-full">
        <Section>
          <Icon {...rest} glyph={glyphs[glyph]} />
        </Section>
      </div>
    )
  },
}

const glyphCombinations = (glyph: string) => {
  // @ts-expect-error: Storybook types hack
  const combinations = meta.argTypes.variant.options.flatMap((i) =>
    // @ts-expect-error: Storybook types hack
    meta.argTypes.size.options.map((j) => [i, j])
  )

  return combinations.map(([variant, size]) => {
    try {
      // Probe support for this size/variant pair
      glyphs[glyph as keyof typeof glyphs]!({ variant, size })

      return (
        <td style={{ verticalAlign: "top", width: "100%", padding: "16px" }}>
          <Text intent="neutral" intentModifiers="secondary">
            {size}, {variant}
          </Text>
          <br />
          <Icon
            glyph={glyphs[glyph as keyof typeof glyphs]}
            variant={variant}
            size={size}
            intent="neutral"
          />
        </td>
      )
    } catch (e) {
      return (
        <td style={{ verticalAlign: "top", width: "100%", padding: "16px" }}>
          <Text intent="neutral" intentModifiers="danger">
            {size}, {variant}
          </Text>
        </td>
      )
    }
  })
}

export const Glyphs: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <table className="sb-column sb-gap-16">
      {Object.keys(glyphs).map((glyph) => {
        return (
          <tr
            style={{
              borderBottom: "1px solid var(--pui-color-neutral-border-default)",
            }}
          >
            <td className="sb-width-full">
              <Text variant="heading">{glyph}</Text>
            </td>

            {glyphCombinations(glyph)}
          </tr>
        )
      })}
    </table>
  ),
}

const intentCombinations = () => {
  const validCombinations = {
    // intent, interactive, selected
    neutral: [
      ["default", false, false],
      ["default", true, false],
      ["default", true, true],

      ["secondary", false, false],
      ["secondary", true, false],

      ["brand", false, false],
      ["brand", true, false],

      ["danger", false, false],
      ["danger", true, false],

      ["warning", false, false],
      ["success", false, false],
    ],
    "neutral-inverted": [
      ["default", false, false],
      ["default", true, false],
    ],
    "neutral-inverted-fixed": [
      ["default", false, false],
      ["default", true, false],

      ["secondary", false, false],
      ["secondary", true, false],
    ],
    brand: [
      ["default", false, false],
      ["default", true, false],
    ],
    danger: [
      ["default", false, false],
      ["default", true, false],
    ],
    warning: [["default", false, false]],
    success: [
      ["default", false, false],
      ["default", true, false],
    ],
  }

  return Object.keys(validCombinations).map((intent) => (
    <div className="sb-column sb-width-full sb-gap-16">
      {validCombinations[intent].map(([modifier, interactive, selected]) => (
        <div
          className="sb-row sb-gap-16 sb-width-full sb-padding-16"
          style={{
            backgroundColor: `var(--pui-color-${intent}-bg-default${
              interactive ? "-interactive" : ""
            }${selected ? "-selected" : ""})`,
            alignItems: "center",
          }}
        >
          <div className="sb-width-full">
            <Text
              intent={intent as TextProps["intent"]}
              intentModifiers={modifier as TextProps["intentModifiers"]}
              interactive={interactive as TextProps["interactive"]}
              selected={selected as TextProps["selected"]}
            >
              {intent}
              {modifier === "default" ? "" : `-${modifier}`}
              {interactive ? ", interactive" : ""}{" "}
              {selected ? ", selected" : ""}
            </Text>
          </div>
          <Icon
            glyph={glyphs.link}
            variant="default"
            size={24}
            intent={intent as TextProps["intent"]}
            intentModifiers={modifier as TextProps["intentModifiers"]}
            interactive={interactive as TextProps["interactive"]}
            selected={selected as TextProps["selected"]}
          />
          <Icon
            glyph={glyphs.link}
            variant="scaled"
            size={24}
            intent={intent as TextProps["intent"]}
            intentModifiers={modifier as TextProps["intentModifiers"]}
            interactive={interactive as TextProps["interactive"]}
            selected={selected as TextProps["selected"]}
          />
          <Icon
            glyph={glyphs.link}
            variant="default"
            size={16}
            intent={intent as TextProps["intent"]}
            intentModifiers={modifier as TextProps["intentModifiers"]}
            interactive={interactive as TextProps["interactive"]}
            selected={selected as TextProps["selected"]}
          />
        </div>
      ))}
    </div>
  ))
}

export const Intent: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-16">
      {intentCombinations()}
    </div>
  ),
}

export const Fill: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-16">
      <Icon glyph={glyphs.link} fill="#00FF00" />
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
    <div className="sb-column sb-gap-16">
      <div
        className="sb-row sb-gap-8 sb-width-full sb-padding-16"
        style={{
          backgroundColor: "var(--pui-color-neutral-bg-disabled)",
          alignItems: "center",
        }}
      >
        <div className="sb-width-full">
          <Text intent="neutral" disabled>
            neutral, disabled
          </Text>
        </div>
        <Icon
          glyph={glyphs.link}
          intent="neutral"
          intentModifiers="default"
          disabled
        />
      </div>
      <div
        className="sb-row sb-gap-8 sb-width-full sb-padding-16"
        style={{
          backgroundColor: "var(--pui-color-neutral-inverted-bg-disabled)",
          alignItems: "center",
        }}
      >
        <div className="sb-width-full">
          <Text intent="neutral-inverted" disabled>
            neutral-inverted, disabled
          </Text>
        </div>
        <Icon
          glyph={glyphs.link}
          intent="neutral-inverted"
          intentModifiers="default"
          disabled
        />
      </div>
      <div
        className="sb-row sb-gap-8 sb-width-full sb-padding-16"
        style={{
          backgroundColor:
            "var(--pui-color-neutral-inverted-fixed-bg-disabled)",
          alignItems: "center",
        }}
      >
        <div className="sb-width-full">
          <Text intent="neutral-inverted-fixed" disabled>
            neutral-inverted-fixed, disabled
          </Text>
        </div>
        <Icon
          glyph={glyphs.link}
          intent="neutral-inverted-fixed"
          intentModifiers="default"
          disabled
        />
      </div>
      <div
        className="sb-row sb-gap-8 sb-width-full sb-padding-16"
        style={{
          backgroundColor: "var(--pui-color-brand-bg-disabled)",
          alignItems: "center",
        }}
      >
        <div className="sb-width-full">
          <Text intent="brand" disabled>
            brand, disabled
          </Text>
        </div>
        <Icon
          glyph={glyphs.link}
          intent="brand"
          intentModifiers="default"
          disabled
        />
      </div>
      <div
        className="sb-row sb-gap-8 sb-width-full sb-padding-16"
        style={{
          backgroundColor: "var(--pui-color-danger-bg-disabled)",
          alignItems: "center",
        }}
      >
        <div className="sb-width-full">
          <Text intent="danger" disabled>
            danger, disabled
          </Text>
        </div>
        <Icon
          glyph={glyphs.link}
          intent="danger"
          intentModifiers="default"
          disabled
        />
      </div>
      <div
        className="sb-row sb-gap-8 sb-width-full sb-padding-16"
        style={{
          backgroundColor: "var(--pui-color-success-bg-disabled)",
          alignItems: "center",
        }}
      >
        <div className="sb-width-full">
          <Text intent="success" disabled>
            success, disabled
          </Text>
        </div>
        <Icon
          glyph={glyphs.link}
          intent="success"
          intentModifiers="default"
          disabled
        />
      </div>
    </div>
  ),
}

export const Variant: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-row sb-gap-16">
      <Icon glyph={glyphs.link} variant="default" intent="neutral" />
      <Icon glyph={glyphs.link} variant="scaled" intent="neutral" />
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
    <div className="sb-row sb-gap-16">
      <Icon glyph={glyphs.link} size={24} intent="neutral" />
      <Icon glyph={glyphs.link} size={16} intent="neutral" />
    </div>
  ),
}

export const CustomGlyph: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "A custom SVG must use the 'currentColor' value for all colour properties in order to inherit the component’s intent.",
      },
    },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-gap-16">
        <Icon size={24} intent="neutral">
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
      </div>
    )
  },
}

export const ErrorHandling: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Some property combinations may not have corresponding glyphs. In such cases, an error is thrown.",
      },
    },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-gap-16">
        <Icon glyph={glyphs.link} size={16} variant="scaled"></Icon>
      </div>
    )
  },
}
