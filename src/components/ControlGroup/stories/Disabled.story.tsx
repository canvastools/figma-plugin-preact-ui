import { StoryObj } from '@storybook/preact-vite'

import { Input, Button, ButtonIcon, Icon, link, chevronDown, TimePicker, Select } from '../../../index'

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
    icon={{ glyph: chevronDown, variant: 'downscaled' }}
  />
</ControlGroup>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-420 sb-gap-40">
      <ControlGroup disabled fullWidth>
        <Button disabled>Button</Button>
        <Button disabled>Button</Button>
        <Button disabled>Button</Button>
      </ControlGroup>

      <ControlGroup disabled fullWidth>
        <Button disabled>Button</Button>
        <Button disabled>Button</Button>
        <ButtonIcon disabled icon={{ glyph: link }} />
      </ControlGroup>

      <ControlGroup disabled fullWidth>
        <ButtonIcon disabled icon={{ glyph: link }} />
        <ButtonIcon disabled icon={{ glyph: link }} />
        <ButtonIcon disabled icon={{ glyph: link }} />
      </ControlGroup>

      <ControlGroup disabled fullWidth>
        <Input disabled placeholder="Input" />
        <Input disabled placeholder="Input" />
      </ControlGroup>

      <ControlGroup disabled fullWidth>
        <Input disabled placeholder="Input" />
        <TimePicker disabled />
      </ControlGroup>

      <ControlGroup disabled fullWidth>
        <Input disabled placeholder="Input" />
        <Select
          disabled
          placeholder="Select an option"
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
          ]}
          fullWidth={true}
        />
      </ControlGroup>

      <ControlGroup disabled fullWidth>
        <Input disabled placeholder="Input" />
        <Button disabled>Button</Button>
      </ControlGroup>

      <ControlGroup disabled fullWidth>
        <Input disabled placeholder="Input" />
        <ButtonIcon disabled intentModifier="secondary">
          <Icon glyph={chevronDown} variant="downscaled" disabled />
        </ButtonIcon>
      </ControlGroup>

      <ControlGroup disabled fullWidth>
        <Select
          disabled
          placeholder="Select an option"
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
          ]}
          fullWidth={true}
        />
        <Input disabled placeholder="Input" />
      </ControlGroup>

      <ControlGroup disabled fullWidth>
        <Button disabled>Button</Button>
        <Input disabled placeholder="Input" />
      </ControlGroup>

      <ControlGroup disabled fullWidth>
        <ButtonIcon disabled intentModifier="secondary">
          <Icon glyph={chevronDown} variant="downscaled" disabled />
        </ButtonIcon>
        <Input disabled placeholder="Input" />
      </ControlGroup>
    </div>
  ),
}
