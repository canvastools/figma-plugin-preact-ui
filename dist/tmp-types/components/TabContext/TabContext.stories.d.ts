import type { Meta, StoryObj } from '@storybook/preact-vite';
import { TabContext } from './TabContext';
declare const meta: Meta<typeof TabContext>;
export default meta;
type Story = StoryObj<typeof TabContext>;
export declare const Demo: Story;
export declare const Uncontrolled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("../Tab/Tab.types").TabProps & {
    ref?: import("preact").Ref<HTMLButtonElement> | undefined;
}>;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("../Tab/Tab.types").TabProps & {
    ref?: import("preact").Ref<HTMLButtonElement> | undefined;
}>;
