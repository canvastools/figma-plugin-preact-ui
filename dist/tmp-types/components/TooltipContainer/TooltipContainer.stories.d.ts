import { Meta, StoryObj } from '@storybook/preact-vite';
import { TooltipContainer } from './TooltipContainer';
declare const meta: Meta<typeof TooltipContainer>;
export default meta;
type Story = StoryObj<typeof TooltipContainer>;
export declare const Demo: Story;
export declare const Size: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./TooltipContainer.types").TooltipContainerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
