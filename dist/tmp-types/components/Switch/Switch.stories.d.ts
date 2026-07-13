import { Meta, StoryObj } from '@storybook/preact-vite';
import { Switch } from './Switch';
declare const meta: Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof Switch>;
export declare const Demo: Story;
export declare const Uncontrolled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Switch.types").SwitchProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Switch.types").SwitchProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Disabled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Switch.types").SwitchProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
