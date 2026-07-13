import { StoryObj } from '@storybook/preact-vite'

import { Input, Button, ButtonIcon, Icon, link, chevronDown, TimePicker } from '../../../index'

import { ControlGroup } from '../ControlGroup'

type Story = StoryObj<typeof ControlGroup>

export const CombinationsStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<ControlGroup>
  <Button>Button</Button>
  <Button>Button</Button>
  <Button>Button</Button>
</ControlGroup>

<ControlGroup>
  <Input/>
  <Input/>
</ControlGroup>

<ControlGroup>
  <Input/>
  <ButtonIcon
    intentModifier="secondary"
    icon={{ glyph: chevronDown }}
  />
</ControlGroup>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-420 sb-gap-40">
      <ControlGroup>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ControlGroup>

      <ControlGroup>
        <Button>Button</Button>
        <Button>Button</Button>
        <ButtonIcon icon={{ glyph: link }} />
      </ControlGroup>

      <ControlGroup>
        <ButtonIcon icon={{ glyph: link }} />
        <ButtonIcon icon={{ glyph: link }} />
        <ButtonIcon icon={{ glyph: link }} />
      </ControlGroup>

      <ControlGroup groupFocus fullWidth>
        <Input placeholder="Input" />
        <Input placeholder="Input" />
      </ControlGroup>

      <ControlGroup groupFocus fullWidth>
        <Input placeholder="Input" />
        <ButtonIcon intentModifier="secondary">
          <Icon glyph={chevronDown} intentModifier="default" />
        </ButtonIcon>
      </ControlGroup>

      <ControlGroup groupFocus fullWidth>
        <Input placeholder="Input" />
        <TimePicker />
      </ControlGroup>
    </div>
  ),
}
