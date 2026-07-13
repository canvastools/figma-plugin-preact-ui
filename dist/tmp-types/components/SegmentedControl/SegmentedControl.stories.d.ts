import { Meta, StoryObj } from '@storybook/preact-vite';
import { SegmentedControl } from './SegmentedControl';
declare const meta: Meta<typeof SegmentedControl>;
export default meta;
type Story = StoryObj<typeof SegmentedControl>;
export declare const Demo: Story;
export declare const Uncontrolled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./SegmentedControl.types").SegmentedControlProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./SegmentedControl.types").SegmentedControlProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Disabled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./SegmentedControl.types").SegmentedControlProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Icons: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./SegmentedControl.types").SegmentedControlProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
