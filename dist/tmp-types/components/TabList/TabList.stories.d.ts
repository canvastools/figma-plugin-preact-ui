import type { Meta, StoryObj } from '@storybook/preact-vite';
import { TabList } from './TabList';
declare const meta: Meta<typeof TabList>;
export default meta;
type Story = StoryObj<typeof TabList>;
export declare const Demo: Story;
export declare const HorizontalScroll: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./TabList.types").TabListProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Variant: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./TabList.types").TabListProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
