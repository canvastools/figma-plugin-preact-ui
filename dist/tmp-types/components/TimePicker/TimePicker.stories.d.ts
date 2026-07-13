import { Meta, StoryObj } from '@storybook/preact-vite';
import { TimePicker } from './TimePicker';
declare const meta: Meta<typeof TimePicker>;
export default meta;
type Story = StoryObj<typeof TimePicker>;
export declare const Demo: Story;
export declare const Uncontrolled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./TimePicker.types").TimePickerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./TimePicker.types").TimePickerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Variant: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./TimePicker.types").TimePickerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Placeholder: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./TimePicker.types").TimePickerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Disabled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./TimePicker.types").TimePickerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
