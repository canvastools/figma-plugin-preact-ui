/** @jsx h */

import { h } from 'preact'

/* Storybook */

import { Meta, StoryObj } from '@storybook/preact'
import { fn } from '@storybook/test'

/* Component */

import { Loader, LoaderProps } from './Loader'

const meta: Meta<LoaderProps> = {
  title: 'Components/State/Loader',
  component: Loader
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
