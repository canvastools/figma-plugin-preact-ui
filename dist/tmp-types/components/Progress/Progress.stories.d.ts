import { Meta, StoryObj } from '@storybook/preact';
import { Progress } from './Progress';
declare const meta: Meta<typeof Progress>;
export default meta;
type Story = StoryObj<typeof Progress>;
export declare const Demo: Story;
export declare const Controlled: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (props: import("./Progress.types").ProgressProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}) => preact.VNode | null> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (props: import("./Progress.types").ProgressProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (props: import("./Progress.types").ProgressProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null, Partial<(props: import("./Progress.types").ProgressProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null>>, "story"> | undefined;
} & {
    args?: Partial<(props: import("./Progress.types").ProgressProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null> | undefined;
};
export declare const Variant: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (props: import("./Progress.types").ProgressProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}) => preact.VNode | null> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (props: import("./Progress.types").ProgressProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (props: import("./Progress.types").ProgressProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null, Partial<(props: import("./Progress.types").ProgressProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null>>, "story"> | undefined;
} & {
    args?: Partial<(props: import("./Progress.types").ProgressProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null> | undefined;
};
