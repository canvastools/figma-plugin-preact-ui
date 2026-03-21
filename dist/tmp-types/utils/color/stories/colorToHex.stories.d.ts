import { Meta, StoryObj } from '@storybook/preact';
import { colorToHex } from '../color';
declare const meta: Meta<typeof colorToHex>;
export default meta;
type Story = StoryObj<typeof colorToHex>;
export declare const Demo: Story;
