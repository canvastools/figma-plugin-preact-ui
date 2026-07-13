import { Meta, StoryObj } from '@storybook/preact-vite';
import { SectionCollapsible } from './SectionCollapsible';
declare const meta: Meta<typeof SectionCollapsible>;
export default meta;
type Story = StoryObj<typeof SectionCollapsible>;
export declare const Demo: Story;
export declare const Uncontrolled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./SectionCollapsible.types").SectionCollapsibleProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./SectionCollapsible.types").SectionCollapsibleProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Stacking: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./SectionCollapsible.types").SectionCollapsibleProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
