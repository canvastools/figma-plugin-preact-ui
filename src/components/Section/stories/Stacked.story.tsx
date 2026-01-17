import { StoryObj } from "@storybook/preact"

import { useRef } from "preact/hooks"

import { Stack, Text } from "../../../index"

import { Section } from "../Section"

type Story = StoryObj<typeof Section>

export const StackedStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Section variant="default">
  {children}
</Section>

<Section variant="stacked">
  {children}
</Section>
`,
      },
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full sb-gap-40">
        <Section variant="default" className="sb-container">
          <Text>Default Section</Text>
        </Section>

        <Stack direction="column" fullWidth>
          <Section variant="stacked" className="sb-container">
            <Text>Stacked Section</Text>
          </Section>
          <Section variant="stacked" className="sb-container">
            <Text>Stacked Section</Text>
          </Section>
          <Section variant="stacked" className="sb-container">
            <Text>Stacked Section</Text>
          </Section>
        </Stack>
      </div>
    )
  },
}
