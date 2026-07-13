import { StoryObj } from '@storybook/preact-vite'

import { Text } from '../../../index'

import { link } from '../glyphs'

import { Icon } from '../Icon'
import type { IconProps } from '../Icon.types'

type Story = StoryObj<typeof Icon>

const validDisabledCombinations = [
  // neutral
  {
    bg: '--pui-color-neutral-bg',
    disabledBg: false,
    intent: 'neutral',
  },
  {
    bg: '--pui-color-neutral-bg',
    disabledBg: true,
    intent: 'neutral',
  },

  // neutral-inverted
  {
    bg: '--pui-color-neutral-inverted-bg',
    disabledBg: true,
    intent: 'neutral-inverted',
  },

  // neutral-inverted-fixed
  {
    bg: '--pui-color-neutral-inverted-fixed-bg',
    disabledBg: true,
    intent: 'neutral-inverted-fixed',
  },

  // brand
  {
    bg: '--pui-color-brand-bg',
    disabledBg: true,
    intent: 'brand',
  },

  // danger
  {
    bg: '--pui-color-danger-bg',
    disabledBg: true,
    intent: 'danger',
  },

  // warning
  {
    bg: '--pui-color-warning-bg',
    disabledBg: true,
    intent: 'warning',
  },

  // success
  {
    bg: '--pui-color-success-bg',
    disabledBg: true,
    intent: 'success',
  },
]

const disabledCombinations = () => {
  return validDisabledCombinations.map(({ bg, disabledBg, intent }) => (
    <div className="sb-row sb-width-full sb-gap-16" style={{ alignItems: 'center' }}>
      <Text fullWidth>{intent}, disabled</Text>

      <div
        style={{
          backgroundColor: `var(${bg}-default)`,
        }}
      >
        <div
          className="sb-padding-16"
          style={{
            backgroundColor: disabledBg ? `var(${bg}-disabled)` : 'unset',
          }}
        >
          <Icon glyph={link} intent={intent as IconProps['intent']} disabled />
        </div>
      </div>
    </div>
  ))
}

export const DisabledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Icon
  glyph={help}
  disabled
/>
`,
      },
    },
  },
  render: () => <div className="sb-column sb-width-420 sb-gap-16">{disabledCombinations()}</div>,
}
