import { StoryObj } from "@storybook/preact"

import { useRef } from "preact/hooks"

import { Stack, Text } from "../../../index"

import { Section } from "../Section"

type Story = StoryObj<typeof Section>

export const PaddingStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Section padding={{ top: 400 }}>
  {children}
</Section>
`,
      },
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full s">
        <Section className="sb-container" padding={{ top: 400 }}>
          <Text>Padding Top: 400</Text>
        </Section>
      </div>
    )
  },
}
