import { Meta, StoryObj } from '@storybook/preact-vite';
import { MenuDivider } from './MenuDivider';
declare const meta: Meta<typeof MenuDivider>;
export default meta;
type Story = StoryObj<typeof MenuDivider>;
export declare const Demo: Story;
export declare const Variant: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./MenuDivider.types").MenuDividerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
