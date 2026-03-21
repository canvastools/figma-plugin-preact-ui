import { Meta, StoryObj } from '@storybook/preact';
import { MenuContainer } from './MenuContainer';
declare const meta: Meta<typeof MenuContainer>;
export default meta;
type Story = StoryObj<typeof MenuContainer>;
export declare const Demo: Story;
export declare const Size: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (props: import("./MenuContainer.types").MenuContainerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}) => preact.VNode | null> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (props: import("./MenuContainer.types").MenuContainerProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (props: import("./MenuContainer.types").MenuContainerProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null, Partial<(props: import("./MenuContainer.types").MenuContainerProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null>>, "story"> | undefined;
} & {
    args?: Partial<(props: import("./MenuContainer.types").MenuContainerProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null> | undefined;
};
export declare const ManyItems: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (props: import("../Menu/Menu.types").MenuProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}) => preact.VNode | null> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (props: import("../Menu/Menu.types").MenuProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (props: import("../Menu/Menu.types").MenuProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null, Partial<(props: import("../Menu/Menu.types").MenuProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null>>, "story"> | undefined;
} & {
    args?: Partial<(props: import("../Menu/Menu.types").MenuProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null> | undefined;
};
