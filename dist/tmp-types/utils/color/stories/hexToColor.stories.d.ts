import { Meta, StoryObj } from '@storybook/preact';
import { hexToColor } from '../color';
declare const meta: Meta<typeof hexToColor>;
export default meta;
type Story = StoryObj<typeof hexToColor>;
export declare const Demo: Story;
