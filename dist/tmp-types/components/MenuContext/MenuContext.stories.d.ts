import { Meta, StoryObj } from '@storybook/preact-vite';
import { MenuContext } from './MenuContext';
declare const meta: Meta;
export default meta;
type Story = StoryObj<typeof MenuContext>;
export declare const Demo: Story;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./MenuContext.types").MenuContextProps>;
export declare const CustomItem: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./MenuContext.types").MenuContextProps>;
