import { StoryObj } from '@storybook/preact-vite'

import { Input, Button, ButtonIcon, Icon, link, chevronDown, TimePicker } from '../../../index'

import { ControlGroup } from '../ControlGroup'

type Story = StoryObj<typeof ControlGroup>

export const DisabledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<ControlGroup disabled>
  <Button disabled>Button</Button>
  <Button disabled>Button</Button>
  <Button disabled>Button</Button>
</ControlGroup>

<ControlGroup disabled>
  <Input disabled/>
  <Input disabled/>
</ControlGroup>

<ControlGroup disabled>
  <Input disabled/>
  <ButtonIcon 
    disabled
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
      <ControlGroup disabled>
        <Button disabled>Button</Button>
        <Button disabled>Button</Button>
        <Button disabled>Button</Button>
      </ControlGroup>

      <ControlGroup disabled>
        <Button disabled>Button</Button>
        <Button disabled>Button</Button>
        <ButtonIcon icon={{ glyph: link }} disabled />
      </ControlGroup>

      <ControlGroup disabled>
        <ButtonIcon icon={{ glyph: link }} disabled />
        <ButtonIcon icon={{ glyph: link }} disabled />
        <ButtonIcon icon={{ glyph: link }} disabled />
      </ControlGroup>

      <ControlGroup groupFocus fullWidth disabled>
        <Input placeholder="Input" disabled />
        <Input placeholder="Input" disabled />
      </ControlGroup>

      <ControlGroup groupFocus fullWidth disabled>
        <Input placeholder="Input" disabled />
        <ButtonIcon intentModifier="secondary" disabled>
          <Icon glyph={chevronDown} intentModifier="default" disabled />
        </ButtonIcon>
      </ControlGroup>

      <ControlGroup groupFocus fullWidth disabled>
        <Input placeholder="Input" disabled />
        <TimePicker disabled />
      </ControlGroup>
    </div>
  ),
}
