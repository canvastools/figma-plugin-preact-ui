import { Meta, StoryObj } from '@storybook/preact';
import { useNumericInput } from './useNumericInput';
import { type NumericInputConfig } from './useNumericInput.types';
declare const meta: Meta<typeof useNumericInput>;
export default meta;
type Story = StoryObj<typeof useNumericInput>;
export declare const Demo: Story;
export declare const Normalization: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (config: NumericInputConfig) => import("./useNumericInput.types").NumericInput> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (config: NumericInputConfig) => import("./useNumericInput.types").NumericInput> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (config: NumericInputConfig) => import("./useNumericInput.types").NumericInput, Partial<(config: NumericInputConfig) => import("./useNumericInput.types").NumericInput>>, "story"> | undefined;
} & {
    args?: Partial<(config: NumericInputConfig) => import("./useNumericInput.types").NumericInput> | undefined;
};
export declare const DoubleValue: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (config: NumericInputConfig) => import("./useNumericInput.types").NumericInput> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (config: NumericInputConfig) => import("./useNumericInput.types").NumericInput> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (config: NumericInputConfig) => import("./useNumericInput.types").NumericInput, Partial<(config: NumericInputConfig) => import("./useNumericInput.types").NumericInput>>, "story"> | undefined;
} & {
    args?: Partial<(config: NumericInputConfig) => import("./useNumericInput.types").NumericInput> | undefined;
};
export declare const Math: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (config: NumericInputConfig) => import("./useNumericInput.types").NumericInput> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (config: NumericInputConfig) => import("./useNumericInput.types").NumericInput> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (config: NumericInputConfig) => import("./useNumericInput.types").NumericInput, Partial<(config: NumericInputConfig) => import("./useNumericInput.types").NumericInput>>, "story"> | undefined;
} & {
    args?: Partial<(config: NumericInputConfig) => import("./useNumericInput.types").NumericInput> | undefined;
};
