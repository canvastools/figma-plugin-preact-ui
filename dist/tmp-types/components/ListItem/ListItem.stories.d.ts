import type { Meta, StoryObj } from '@storybook/preact-vite';
import { ListItem } from './ListItem';
declare const meta: Meta<typeof ListItem>;
export default meta;
type Story = StoryObj<typeof ListItem>;
export declare const Demo: Story;
export declare const Variant: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ListItem.types").ListItemProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Collapsable: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ListItem.types").ListItemProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Padding: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ListItem.types").ListItemProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Content: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ListItem.types").ListItemProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
