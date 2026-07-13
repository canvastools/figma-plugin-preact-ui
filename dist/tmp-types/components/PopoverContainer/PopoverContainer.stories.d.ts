import { Meta, StoryObj } from '@storybook/preact-vite';
import { PopoverContainer } from './PopoverContainer';
declare const meta: Meta<typeof PopoverContainer>;
export default meta;
type Story = StoryObj<typeof PopoverContainer>;
export declare const Demo: Story;
export declare const Size: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./PopoverContainer.types").PopoverContainerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
