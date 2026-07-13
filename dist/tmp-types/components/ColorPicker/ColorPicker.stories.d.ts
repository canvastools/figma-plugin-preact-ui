import { Meta, StoryObj } from '@storybook/preact-vite';
import { ColorPicker } from './ColorPicker';
declare const meta: Meta<typeof ColorPicker>;
export default meta;
type Story = StoryObj<typeof ColorPicker>;
export declare const Demo: Story;
export declare const Uncontrolled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ColorPicker.types").ColorPickerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ColorPicker.types").ColorPickerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Type: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ColorPicker.types").ColorPickerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Width: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ColorPicker.types").ColorPickerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
