import { Meta, StoryObj } from '@storybook/preact-vite';
import { Progress } from './Progress';
declare const meta: Meta<typeof Progress>;
export default meta;
type Story = StoryObj<typeof Progress>;
export declare const Demo: Story;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Progress.types").ProgressProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Variant: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Progress.types").ProgressProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
