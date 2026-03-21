import { Meta, StoryObj } from '@storybook/preact';
import { bem } from './bem';
declare const meta: Meta<typeof bem>;
export default meta;
type Story = StoryObj<typeof bem>;
export declare const Demo: Story;
export declare const Element: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (block: string, element?: string, mods?: {
    [x: string]: string | boolean | undefined;
}) => string> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (block: string, element?: string, mods?: {
        [x: string]: string | boolean | undefined;
    }) => string> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (block: string, element?: string, mods?: {
        [x: string]: string | boolean | undefined;
    }) => string, Partial<(block: string, element?: string, mods?: {
        [x: string]: string | boolean | undefined;
    }) => string>>, "story"> | undefined;
} & {
    args?: Partial<(block: string, element?: string, mods?: {
        [x: string]: string | boolean | undefined;
    }) => string> | undefined;
};
export declare const Modifiers: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (block: string, element?: string, mods?: {
    [x: string]: string | boolean | undefined;
}) => string> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (block: string, element?: string, mods?: {
        [x: string]: string | boolean | undefined;
    }) => string> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (block: string, element?: string, mods?: {
        [x: string]: string | boolean | undefined;
    }) => string, Partial<(block: string, element?: string, mods?: {
        [x: string]: string | boolean | undefined;
    }) => string>>, "story"> | undefined;
} & {
    args?: Partial<(block: string, element?: string, mods?: {
        [x: string]: string | boolean | undefined;
    }) => string> | undefined;
};
