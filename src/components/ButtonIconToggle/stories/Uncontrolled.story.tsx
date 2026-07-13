import { StoryObj } from '@storybook/preact-vite'

import { link } from '../../../index'

import { ButtonIconToggle } from '../ButtonIconToggle'

type Story = StoryObj<typeof ButtonIconToggle>

export const UncontrolledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<ButtonIconToggle defaultSelected={false}>{children}</ButtonIconToggle>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-420 sb-gap-16">
      <ButtonIconToggle defaultSelected={false} icon={{ glyph: link }} />
    </div>
  ),
}
