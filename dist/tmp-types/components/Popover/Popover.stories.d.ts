import { Meta, StoryObj } from '@storybook/preact-vite';
import { Popover } from './Popover';
declare const meta: Meta<typeof Popover>;
export default meta;
type Story = StoryObj<typeof Popover>;
export declare const Demo: Story;
export declare const Uncontrolled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Popover.types").PopoverProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Popover.types").PopoverProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Arrow: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Popover.types").PopoverProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Reposition: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Popover.types").PopoverProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
