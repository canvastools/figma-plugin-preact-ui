import { Meta, StoryObj } from '@storybook/preact';
import { rgbaToColor } from '../color';
declare const meta: Meta<typeof rgbaToColor>;
export default meta;
type Story = StoryObj<typeof rgbaToColor>;
export declare const Demo: Story;
