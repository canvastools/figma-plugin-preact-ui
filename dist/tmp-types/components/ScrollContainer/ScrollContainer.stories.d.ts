import type { Meta, StoryObj } from '@storybook/preact';
import { ScrollContainer } from './ScrollContainer';
declare const meta: Meta<typeof ScrollContainer>;
export default meta;
type Story = StoryObj<typeof ScrollContainer>;
export declare const Demo: Story;
export declare const DynamicContent: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (props: import("./ScrollContainer.types").ScrollContainerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}) => preact.VNode | null> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (props: import("./ScrollContainer.types").ScrollContainerProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (props: import("./ScrollContainer.types").ScrollContainerProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null, Partial<(props: import("./ScrollContainer.types").ScrollContainerProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null>>, "story"> | undefined;
} & {
    args?: Partial<(props: import("./ScrollContainer.types").ScrollContainerProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null> | undefined;
};
