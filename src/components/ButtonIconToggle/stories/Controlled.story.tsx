import { StoryObj } from "@storybook/preact"

import { useState } from "preact/hooks"

import { Text, link } from "../../../index"

import { ButtonIconToggle } from "../ButtonIconToggle"

type Story = StoryObj<typeof ButtonIconToggle>

export const ControlledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
const [isSelected, setIsSelected] = useState(false)

<ButtonIconToggle
  selected={isSelected}
  onSelectedChange={(args) => setIsSelected(args.selected)}
>
  {children}
</ButtonIconToggle>
`,
      },
    },
  },
  render: () => {
    const [isSelected, setIsSelected] = useState(false)

    return (
      <div className="sb-column sb-width-420 sb-gap-16">
        <Text>selected: {isSelected ? "true" : "false"}</Text>
        <ButtonIconToggle
          selected={isSelected}
          onSelectedChange={(args) => setIsSelected(args.selected)}
          icon={{ glyph: link }}
        />
      </div>
    )
  },
}
