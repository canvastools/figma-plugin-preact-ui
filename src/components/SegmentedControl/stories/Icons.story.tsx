import { StoryObj } from '@storybook/preact'

import { link, TooltipContext } from '../../../index'

import { SegmentedControl } from '../SegmentedControl'
import { SegmentedControlOptionData } from '../SegmentedControl.types'

type Story = StoryObj<typeof SegmentedControl>

export const IconsStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
import { viewList, viewGrid } from "figma-plugin-preact-ui"

const options = [
  {
    value: "list",
    label: "List view",
    icon: {
      glyph: link,
      size: 24,
    },
  },
  {
    value: "grid",
    label: "Grid view",
    icon: {
      glyph: link,
      size: 24,
    },
  },
]

<SegmentedControl
  options={options}
  defaultValue="list"
/>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <SegmentedControl
    options={options}
    defaultValue="list"
  />
</TooltipContext>
`,
      },
    },
  },
  render: () => {
    const options: SegmentedControlOptionData[] = [
      {
        value: 'list',
        label: 'List view',
        icon: {
          glyph: link,
          size: 24,
        },
      },
      {
        value: 'grid',
        label: 'Grid view',
        icon: {
          glyph: link,
          size: 24,
        },
      },
    ]

    return (
      <div className="sb-column sb-width-300">
        <TooltipContext>
          <SegmentedControl options={options} defaultValue="list" />
        </TooltipContext>
      </div>
    )
  },
}
