import { Meta, StoryObj } from '@storybook/preact-vite';
import { MenuItemOption } from './MenuItemOption';
declare const meta: Meta<typeof MenuItemOption>;
export default meta;
type Story = StoryObj<typeof MenuItemOption>;
export declare const Demo: Story;
export declare const Uncontrolled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./MenuItemOption.types").MenuItemOptionProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./MenuItemOption.types").MenuItemOptionProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Disabled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./MenuItemOption.types").MenuItemOptionProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Prefix: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./MenuItemOption.types").MenuItemOptionProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Suffix: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./MenuItemOption.types").MenuItemOptionProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
