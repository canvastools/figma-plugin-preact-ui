import { Meta, StoryObj } from '@storybook/preact-vite';
import { TextArea } from './TextArea';
declare const meta: Meta<typeof TextArea>;
export default meta;
type Story = StoryObj<typeof TextArea>;
export declare const Demo: Story;
export declare const Uncontrolled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./TextArea.types").TextAreaProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./TextArea.types").TextAreaProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Variant: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./TextArea.types").TextAreaProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Placeholder: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./TextArea.types").TextAreaProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Disabled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./TextArea.types").TextAreaProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Resize: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./TextArea.types").TextAreaProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
