import { StoryObj } from '@storybook/preact'

import { Checkbox } from '../Checkbox'

type Story = StoryObj<typeof Checkbox>

export const MixedStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Checkbox mixed />
`,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-40">
      <div className="sb-column sb-width-full sb-gap-16">
        <Checkbox defaultChecked={true} label="Checked True" />
        <Checkbox defaultChecked={false} label="Checked False" />
        <Checkbox defaultChecked={true} mixed={true} label="Checked True Mixed" />
        <Checkbox defaultChecked={false} mixed={true} label="Checked False Mixed" />
      </div>

      <div className="sb-column sb-width-full sb-gap-16">
        <Checkbox intent="brand" defaultChecked={true} label="Checked True" />
        <Checkbox intent="brand" defaultChecked={false} label="Checked False" />
        <Checkbox intent="brand" defaultChecked={true} mixed={true} label="Checked True Mixed" />
        <Checkbox intent="brand" defaultChecked={false} mixed={true} label="Checked False Mixed" />
      </div>
    </div>
  ),
}
