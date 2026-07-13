import { Meta, StoryObj } from '@storybook/preact-vite';
import { Badge } from './Badge';
declare const meta: Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof Badge>;
export declare const Demo: Story;
export declare const Intent: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Badge.types").BadgeProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Prefix: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Badge.types").BadgeProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Suffix: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Badge.types").BadgeProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
