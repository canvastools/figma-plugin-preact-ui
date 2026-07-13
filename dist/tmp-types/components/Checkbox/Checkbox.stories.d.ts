import { Meta, StoryObj } from '@storybook/preact-vite';
import { Checkbox } from './Checkbox';
declare const meta: Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof Checkbox>;
export declare const Demo: Story;
export declare const Uncontrolled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Checkbox.types").CheckboxProps & {
    ref?: import("preact").Ref<HTMLInputElement> | undefined;
}>;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Checkbox.types").CheckboxProps & {
    ref?: import("preact").Ref<HTMLInputElement> | undefined;
}>;
export declare const Intent: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Checkbox.types").CheckboxProps & {
    ref?: import("preact").Ref<HTMLInputElement> | undefined;
}>;
export declare const Mixed: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Checkbox.types").CheckboxProps & {
    ref?: import("preact").Ref<HTMLInputElement> | undefined;
}>;
export declare const Disabled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Checkbox.types").CheckboxProps & {
    ref?: import("preact").Ref<HTMLInputElement> | undefined;
}>;
