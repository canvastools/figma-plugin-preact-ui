import { StoryObj } from '@storybook/preact-vite'

import { Code, Stack, Text } from '../../../index'

type Story = StoryObj

export const ModifiersStory: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
import { bem } from "figma-plugin-preact-ui"

const classNameBlock = bem("Block") // Block
const classNameElementWithModifiers = bem("Block", "element", { modifier1: "value", modifier2: true }) // Block__element_modifier1-value Block__element_modifier2

<div className={classNameBlock}>
  <div className={classNameElementWithModifiers}>
    {children}
  </div>
</div>
        `,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing="200">
          <Code variant="inline">{'bem("Block", "element", { modifier1: "value", modifier2: true })'}</Code>
          <Text>→</Text>
          <Code variant="inline">"Block__element_modifier1-value Block__element_modifier2"</Code>
        </Stack>
      </div>
    )
  },
}
