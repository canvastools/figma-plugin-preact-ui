import { StoryObj } from '@storybook/preact'

import { Checkbox } from '../Checkbox'

type Story = StoryObj<typeof Checkbox>

export const DisabledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Checkbox disabled />
`,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-40">
      <div className="sb-column sb-width-full sb-gap-16">
        <Checkbox defaultChecked={true} label="Checked True" disabled />
        <Checkbox defaultChecked={false} label="Checked False" disabled />
        <Checkbox defaultChecked={true} mixed={true} label="Checked True Mixed" disabled />
        <Checkbox defaultChecked={false} mixed={true} label="Checked False Mixed" disabled />
      </div>

      <div className="sb-column sb-width-full sb-gap-16">
        <Checkbox intent="brand" defaultChecked={true} label="Checked True" disabled />
        <Checkbox intent="brand" defaultChecked={false} label="Checked False" disabled />
        <Checkbox intent="brand" defaultChecked={true} mixed={true} label="Checked True Mixed" disabled />
        <Checkbox intent="brand" defaultChecked={false} mixed={true} label="Checked False Mixed" disabled />
      </div>
    </div>
  ),
}
