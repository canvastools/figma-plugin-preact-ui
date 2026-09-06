import { StoryObj } from '@storybook/preact-vite'
import { useState } from 'preact/hooks'

import { Input, Button, ButtonIcon, Icon, link, chevronDown, TimePicker, Select, Checkbox } from '../../../index'

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
    icon={{ glyph: chevronDown, variant: 'downscaled' }}
  />
</ControlGroup>
`,
      },
    },
  },
  render: () => {
    const [groupFocus, setGroupfocus] = useState<boolean>(false)

    return (
      <div className="sb-column sb-width-420 sb-gap-40">
        <Checkbox label="Group Focus" checked={groupFocus} onCheckedChange={(args) => setGroupfocus(args.checked)} />

        <ControlGroup fullWidth>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ControlGroup>

        <ControlGroup fullWidth>
          <Button>Button</Button>
          <Button>Button</Button>
          <ButtonIcon icon={{ glyph: link }} />
        </ControlGroup>

        <ControlGroup fullWidth>
          <ButtonIcon icon={{ glyph: link }} />
          <ButtonIcon icon={{ glyph: link }} />
          <ButtonIcon icon={{ glyph: link }} />
        </ControlGroup>

        <ControlGroup groupFocus={groupFocus} fullWidth>
          <Input placeholder="Input" />
          <Input placeholder="Input" />
        </ControlGroup>

        <ControlGroup groupFocus={groupFocus} fullWidth>
          <Input placeholder="Input" />
          <TimePicker />
        </ControlGroup>

        <ControlGroup groupFocus={groupFocus} fullWidth>
          <Input placeholder="Input" />
          <Select
            placeholder="Select an option"
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
            ]}
            fullWidth={true}
          />
        </ControlGroup>

        <ControlGroup groupFocus={groupFocus} fullWidth>
          <Input placeholder="Input" />
          <Button>Button</Button>
        </ControlGroup>

        <ControlGroup groupFocus={groupFocus} fullWidth>
          <Input placeholder="Input" />
          <ButtonIcon intentModifier="secondary">
            <Icon glyph={chevronDown} variant="downscaled" />
          </ButtonIcon>
        </ControlGroup>

        <ControlGroup groupFocus={groupFocus} fullWidth>
          <Select
            placeholder="Select an option"
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
            ]}
            fullWidth={true}
          />
          <Input placeholder="Input" />
        </ControlGroup>

        <ControlGroup groupFocus={groupFocus} fullWidth>
          <Button>Button</Button>
          <Input placeholder="Input" />
        </ControlGroup>

        <ControlGroup groupFocus={groupFocus} fullWidth>
          <ButtonIcon intentModifier="secondary">
            <Icon glyph={chevronDown} variant="downscaled" />
          </ButtonIcon>
          <Input placeholder="Input" />
        </ControlGroup>
      </div>
    )
  },
}
