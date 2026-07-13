import { Meta, StoryObj } from '@storybook/preact-vite';
import { Menu } from './Menu';
declare const meta: Meta;
export default meta;
type Story = StoryObj<typeof Menu>;
export declare const Demo: Story;
export declare const Uncontrolled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Menu.types").MenuProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Menu.types").MenuProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const CustomItem: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Menu.types").MenuProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
