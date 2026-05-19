import { StoryObj } from '@storybook/preact'

import { Stack, ColorSwatch, Text } from '../../../index'

import { Button } from '../Button'

type Story = StoryObj<typeof Button>

export const CustomChildrenStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `<Button>
  <ColorSwatch 
    fill={{ r: 255, g: 0, b: 0, a: 1 }}
    disabled
    size="small"
  />
  <Text>Hello</Text>
</Button>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400} fullWidth>
        <Button onClick={() => console.log('Button clicked')}>
          <Stack spacing={100} direction="row">
            <ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 1 }} disabled size="small" />
            <Text>Custom Button</Text>
          </Stack>
        </Button>

        <Button fullWidth onClick={() => console.log('Button clicked')}>
          <Stack spacing={100} direction="row">
            <ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 1 }} disabled size="small" />
            <Text>Custom Button</Text>
          </Stack>
        </Button>
      </Stack>
    </div>
  ),
}
