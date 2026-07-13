import { StoryObj } from '@storybook/preact-vite'

import { Text } from '../../../index'

import { PopoverContainer } from '../PopoverContainer'

type Story = StoryObj<typeof PopoverContainer>

export const SizeStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<PopoverContainer
  width={200}
  height={300}
>
  {children}
</PopoverContainer>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-40">
      <PopoverContainer>
        <Text>No width or height</Text>
      </PopoverContainer>

      <PopoverContainer width={200}>
        <Text>Width: 200</Text>
      </PopoverContainer>

      <PopoverContainer height={300}>
        <Text>Height: 300</Text>
      </PopoverContainer>

      <PopoverContainer width={200} height={300}>
        <Text>Width: 200, Height: 300</Text>
      </PopoverContainer>
    </div>
  ),
}
