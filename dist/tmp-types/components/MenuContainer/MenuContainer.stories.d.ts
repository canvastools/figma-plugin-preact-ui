import { Meta, StoryObj } from '@storybook/preact-vite';
import { MenuContainer } from './MenuContainer';
declare const meta: Meta<typeof MenuContainer>;
export default meta;
type Story = StoryObj<typeof MenuContainer>;
export declare const Demo: Story;
export declare const Size: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./MenuContainer.types").MenuContainerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const ManyItems: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("../Menu/Menu.types").MenuProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const ScrollToSelected: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("../Menu/Menu.types").MenuProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
