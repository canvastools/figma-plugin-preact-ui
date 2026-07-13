import type { Meta, StoryObj } from '@storybook/preact-vite';
import { ScrollContainer } from './ScrollContainer';
declare const meta: Meta<typeof ScrollContainer>;
export default meta;
type Story = StoryObj<typeof ScrollContainer>;
export declare const Demo: Story;
export declare const DynamicContent: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ScrollContainer.types").ScrollContainerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Popover: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ScrollContainer.types").ScrollContainerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
