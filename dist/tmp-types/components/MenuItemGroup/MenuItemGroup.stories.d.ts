import { Meta, StoryObj } from '@storybook/preact-vite';
import { MenuItemGroup } from './MenuItemGroup';
declare const meta: Meta<typeof MenuItemGroup>;
export default meta;
type Story = StoryObj<typeof MenuItemGroup>;
export declare const Demo: Story;
export declare const Padding: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./MenuItemGroup.types").MenuItemGroupProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
