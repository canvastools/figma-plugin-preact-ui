import type { Meta, StoryObj } from '@storybook/preact-vite';
import { Tab } from './Tab';
declare const meta: Meta<typeof Tab>;
export default meta;
type Story = StoryObj<typeof Tab>;
export declare const Demo: Story;
export declare const Variant: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Tab.types").TabProps & {
    ref?: import("preact").Ref<HTMLButtonElement> | undefined;
}>;
export declare const Prefix: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Tab.types").TabProps & {
    ref?: import("preact").Ref<HTMLButtonElement> | undefined;
}>;
export declare const Suffix: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Tab.types").TabProps & {
    ref?: import("preact").Ref<HTMLButtonElement> | undefined;
}>;
export declare const CustomChildren: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Tab.types").TabProps & {
    ref?: import("preact").Ref<HTMLButtonElement> | undefined;
}>;
