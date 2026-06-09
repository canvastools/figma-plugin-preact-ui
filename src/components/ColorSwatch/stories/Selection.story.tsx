import { StoryObj } from '@storybook/preact'

import { useState } from 'preact/hooks'

import { Text } from '../../../index'

import { ColorSwatch } from '../ColorSwatch'

type Story = StoryObj<typeof ColorSwatch>

export const SelectionStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<ColorSwatch selected />

<ColorSwatch
  selection="rainbow"
  selected
/>
`,
      },
    },
  },
  render: () => {
    const [selectedDefault, setSelectedDefault] = useState(true)
    const [selectedRainbow, setSelectedRainbow] = useState(true)

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <div className="sb-row sb-width-full sb-gap-16">
          <Text fullWidth>default, {selectedDefault ? 'true' : 'false'}</Text>
          <ColorSwatch selected={selectedDefault} onClick={() => setSelectedDefault(!selectedDefault)} />
          <ColorSwatch
            fill={{ r: 255, g: 0, b: 0, a: 1 }}
            selected={selectedDefault}
            onClick={() => setSelectedDefault(!selectedDefault)}
          />
          <ColorSwatch
            fill={{ r: 255, g: 0, b: 0, a: 1 }}
            selected={selectedDefault}
            onClick={() => setSelectedDefault(!selectedDefault)}
            disabled
          />
        </div>
        <div className="sb-row sb-width-full sb-gap-16">
          <Text fullWidth>rainbow, {selectedRainbow ? 'true' : 'false'}</Text>
          <ColorSwatch selection="rainbow" selected={selectedRainbow} onClick={() => setSelectedRainbow(!selectedRainbow)} />
          <ColorSwatch
            fill={{ r: 255, g: 0, b: 0, a: 1 }}
            selection="rainbow"
            selected={selectedRainbow}
            onClick={() => setSelectedRainbow(!selectedRainbow)}
          />
          <ColorSwatch
            fill={{ r: 255, g: 0, b: 0, a: 1 }}
            selection="rainbow"
            selected={selectedRainbow}
            onClick={() => setSelectedRainbow(!selectedRainbow)}
            disabled
          />
        </div>
      </div>
    )
  },
}
