import { Meta, StoryObj } from '@storybook/preact-vite';
import { Section } from './Section';
declare const meta: Meta<typeof Section>;
export default meta;
type Story = StoryObj<typeof Section>;
export declare const Demo: Story;
export declare const Stacked: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Section.types").SectionProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Padding: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Section.types").SectionProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
