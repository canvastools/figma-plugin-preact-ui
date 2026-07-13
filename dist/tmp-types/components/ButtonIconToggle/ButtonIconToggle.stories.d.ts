import { Meta, StoryObj } from '@storybook/preact-vite';
import { ButtonIconToggle } from './ButtonIconToggle';
declare const meta: Meta<typeof ButtonIconToggle>;
export default meta;
type Story = StoryObj<typeof ButtonIconToggle>;
export declare const Demo: Story;
export declare const Uncontrolled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ButtonIconToggle.types").ButtonIconToggleProps & {
    ref?: import("preact").Ref<HTMLButtonElement> | undefined;
}>;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ButtonIconToggle.types").ButtonIconToggleProps & {
    ref?: import("preact").Ref<HTMLButtonElement> | undefined;
}>;
