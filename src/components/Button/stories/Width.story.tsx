import { StoryObj } from '@storybook/preact-vite'

import { Stack } from '../../../index'

import { Button } from '../Button'

type Story = StoryObj<typeof Button>

export const WidthStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Button widthFull>{children}</Button>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400} fullWidth>
        <Button intent="neutral" intentModifier="brand" fullWidth ghost>
          Neutral Brand Ghost
        </Button>

        <Button intent="neutral" intentModifier="brand" fullWidth>
          Neutral Brand
        </Button>

        <Button intent="brand" fullWidth>
          Brand
        </Button>

        <Button intent="neutral" intentModifier="danger" size="large" fullWidth ghost>
          Neutral Danger Ghost
        </Button>

        <Button intent="neutral" intentModifier="danger" size="large" fullWidth>
          Neutral Danger
        </Button>

        <Button intent="danger" size="large" fullWidth>
          Danger
        </Button>
      </Stack>
    </div>
  ),
}
