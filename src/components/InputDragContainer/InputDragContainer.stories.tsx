import { Meta, StoryObj } from '@storybook/preact-vite'
import { useState } from 'preact/hooks'

import { Input, Icon, opacity as opacityGlyph, useNumericInput } from '../../index'

import { InputDragContainer } from './InputDragContainer'

const meta: Meta<typeof InputDragContainer> = {
  title: 'Components/InputDragContainer',
  component: InputDragContainer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Wraps an `Input` prefix / suffix so the field value can be scrubbed by dragging the icon horizontally. Takes the props returned by `useNumericInput().getDragProps()`.',
      },
    },
  },
  argTypes: {
    className: {
      control: { type: 'text' },
    },
    drag: {
      control: false,
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: 'NumericInputDragProps',
        },
      },
    },
    children: {
      control: false,
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof InputDragContainer>

/* --- */

const DragDemo = () => {
  const [value, setValue] = useState('50%')

  const numericInput = useNumericInput({
    value,
    unit: '%',
    required: true,
    min: 0,
    max: 100,
    step: 1,
    stepLarge: 10,
    normalizeOnError: true,
  })

  const format = (next: number | string) => numericInput.parse(String(next)).formattedValue ?? String(next)

  const drag = numericInput.getDragProps({
    onChange: (next) => setValue(String(format(next as number))),
    onCommit: (next) => setValue(String(format(next as number))),
  })

  return (
    <Input
      value={value}
      tooltip="Opacity"
      focusOnPrefix
      selectOnFocus
      prefix={
        <InputDragContainer drag={drag}>
          <Icon glyph={opacityGlyph} intentModifier="secondary" />
        </InputDragContainer>
      }
      onValueChange={(args) => setValue(args.value)}
      onKeyDown={(args) => numericInput.handleKeyDown(args, (next) => setValue(String(format(next as number))))}
      onBlur={(args) => setValue(String(format(numericInput.parse(args.value).normalizedValue ?? value)))}
    />
  )
}

export const Demo: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      source: {
        code: `
const drag = numericInput.getDragProps({
  onChange: (next) => setValue(String(next)),
  onCommit: (next) => setValue(String(next)),
})

<Input
  value={value}
  focusOnPrefix
  prefix={
    <InputDragContainer drag={drag}>
      <Icon glyph={opacity} intentModifier="secondary" />
    </InputDragContainer>
  }
/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300">
      <DragDemo />
    </div>
  ),
}
