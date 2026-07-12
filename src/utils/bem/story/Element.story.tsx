import { StoryObj } from '@storybook/preact-vite'

import { Code, Stack, Text } from '../../../index'

type Story = StoryObj

export const ElementStory: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
import { bem } from "figma-plugin-preact-ui"

const classNameBlock = bem("Block") // Block
const classNameElement = bem("Block", "element") // Block__element

<div className={classNameBlock}>
  <div className={classNameElement}> 
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
          <Code variant="inline">{'bem("Block", "element")'}</Code>
          <Text>→</Text>
          <Code variant="inline">"Block__element"</Code>
        </Stack>
      </div>
    )
  },
}
