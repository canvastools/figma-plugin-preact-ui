import { Meta, StoryObj } from '@storybook/preact-vite';
import { ControlGroup } from './ControlGroup';
declare const meta: Meta<typeof ControlGroup>;
export default meta;
type Story = StoryObj<typeof ControlGroup>;
export declare const Demo: Story;
export declare const GroupFocus: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ControlGroup.types").ControlGroupProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Combinations: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ControlGroup.types").ControlGroupProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Disabled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./ControlGroup.types").ControlGroupProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
