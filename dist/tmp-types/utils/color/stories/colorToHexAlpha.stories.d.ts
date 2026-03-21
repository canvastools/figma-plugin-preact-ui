import { Meta, StoryObj } from '@storybook/preact';
import { colorToHexAlpha } from '../color';
declare const meta: Meta<typeof colorToHexAlpha>;
export default meta;
type Story = StoryObj<typeof colorToHexAlpha>;
export declare const Demo: Story;
