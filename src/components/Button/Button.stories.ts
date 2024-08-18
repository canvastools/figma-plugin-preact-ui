/** @jsx h */

import { h } from 'preact'

/* Storybook */

import { Meta, StoryObj } from '@storybook/preact'
import { fn } from '@storybook/test'

/* Component */

import { Button, ButtonProps } from './Button'

const meta: Meta<ButtonProps> = {
  title: 'Components/Actions/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    title: 'uuu',
    onClick: fn()
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const ButtonPreview: Story = {}
