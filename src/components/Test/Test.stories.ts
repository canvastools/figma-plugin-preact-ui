/** @jsx h */

import { h } from 'preact'

/* Storybook */

import { Meta, StoryObj } from '@storybook/preact'
import { fn } from '@storybook/test'

/* Component */

import { Test, TestProps } from './Test'

const meta: Meta<TestProps> = {
  title: 'Components/Lists/Testo',
  component: Test,
  tags: ['autodocs'],
  args: {
    title: 'keke'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Hello world!'
  }
}
