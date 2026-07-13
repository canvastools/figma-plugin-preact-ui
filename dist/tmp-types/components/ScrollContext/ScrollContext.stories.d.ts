import type { Meta, StoryObj } from '@storybook/preact-vite';
import { ScrollContext } from './ScrollContext';
declare const meta: Meta<typeof ScrollContext>;
export default meta;
type Story = StoryObj<typeof ScrollContext>;
export declare const Demo: Story;
export declare const Uncontrolled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("../ScrollContainer/ScrollContainer.types").ScrollContainerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("../ScrollContainer/ScrollContainer.types").ScrollContainerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const SpyScroll: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("../ScrollContainer/ScrollContainer.types").ScrollContainerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
