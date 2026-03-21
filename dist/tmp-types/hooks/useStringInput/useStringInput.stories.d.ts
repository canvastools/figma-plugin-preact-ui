import { Meta, StoryObj } from '@storybook/preact';
import { useStringInput } from './useStringInput';
import type { StringInputConfig } from './useStringInput.types';
declare const meta: Meta<typeof useStringInput>;
export default meta;
type Story = StoryObj<typeof useStringInput>;
export declare const Demo: Story;
export declare const Normalization: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (config: StringInputConfig) => import("./useStringInput.types").StringInput> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (config: StringInputConfig) => import("./useStringInput.types").StringInput> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (config: StringInputConfig) => import("./useStringInput.types").StringInput, Partial<(config: StringInputConfig) => import("./useStringInput.types").StringInput>>, "story"> | undefined;
} & {
    args?: Partial<(config: StringInputConfig) => import("./useStringInput.types").StringInput> | undefined;
};
export declare const Mask: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (config: StringInputConfig) => import("./useStringInput.types").StringInput> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (config: StringInputConfig) => import("./useStringInput.types").StringInput> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (config: StringInputConfig) => import("./useStringInput.types").StringInput, Partial<(config: StringInputConfig) => import("./useStringInput.types").StringInput>>, "story"> | undefined;
} & {
    args?: Partial<(config: StringInputConfig) => import("./useStringInput.types").StringInput> | undefined;
};
