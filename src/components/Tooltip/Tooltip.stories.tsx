import { Meta, StoryObj } from '@storybook/preact'

import { useRef } from 'preact/hooks'

import { Text, TooltipContext } from '../../index'

import { Tooltip } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A facade component that provides a simplified API for tooltips.',
      },
    },
  },
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    className: {
      control: { type: 'text' },
    },
    children: {
      control: { control: 'text' },
      description: '<strong>*</strong>',
      table: {
        type: { summary: 'JSX.Element' },
      },
    },
    '...TooltipContainerProps': {
      control: { disable: true },
      table: {
        type: {
          summary: 'Pick<TooltipContainerProps>',
          detail: `
{
  width: number
  height: number
  showArrow: boolean
}
          `,
        },
      },
    },
    '...OverlayPositionerProps': {
      control: { disable: true },
      table: {
        type: {
          summary: 'Pick<OverlayPositionerProps>',
          detail: `
{
  anchorRef: RefObject | null
  placement: OverlayPositionerPlacement
  placementFallback: OverlayPositionerPlacement[]
  offsetX: number
  offsetY: number
  offsetEdge: number
  onOpen: () => void
  onClose: () => void
}
          `,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    children: 'Tooltip content',
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
const anchorRef = useRef(null)

<TooltipContext>
  <Text ref={anchorRef}>Hover to see Tooltip</Text>
  
  <Tooltip
    anchorRef={anchorRef}
    {...args}
  >
    {children}
  </Tooltip>
</TooltipContext>
`,
      },
    },
  },
  render: (args) => {
    const anchorRef = useRef<HTMLDivElement | null>(null)

    return (
      <div className="sb-column sb-width-300 sb-container">
        <TooltipContext>
          <Text ref={anchorRef}>Hover to see Tooltip.</Text>
          {/* @ts-expect-error Storybook spread */}
          <Tooltip anchorRef={anchorRef} {...args} />
        </TooltipContext>
      </div>
    )
  },
}
