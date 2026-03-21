import type { Meta, StoryObj } from '@storybook/preact';
import { TabContext } from './TabContext';
declare const meta: Meta<typeof TabContext>;
export default meta;
type Story = StoryObj<typeof TabContext>;
export declare const Demo: Story;
export declare const Uncontrolled: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (props: import("../Tab/Tab.types").TabProps & {
    ref?: import("preact").Ref<HTMLButtonElement> | undefined;
}) => preact.VNode | null> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (props: import("../Tab/Tab.types").TabProps & {
        ref?: import("preact").Ref<HTMLButtonElement> | undefined;
    }) => preact.VNode | null> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (props: import("../Tab/Tab.types").TabProps & {
        ref?: import("preact").Ref<HTMLButtonElement> | undefined;
    }) => preact.VNode | null, Partial<(props: import("../Tab/Tab.types").TabProps & {
        ref?: import("preact").Ref<HTMLButtonElement> | undefined;
    }) => preact.VNode | null>>, "story"> | undefined;
} & {
    args?: Partial<(props: import("../Tab/Tab.types").TabProps & {
        ref?: import("preact").Ref<HTMLButtonElement> | undefined;
    }) => preact.VNode | null> | undefined;
};
export declare const Controlled: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (props: import("../Tab/Tab.types").TabProps & {
    ref?: import("preact").Ref<HTMLButtonElement> | undefined;
}) => preact.VNode | null> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (props: import("../Tab/Tab.types").TabProps & {
        ref?: import("preact").Ref<HTMLButtonElement> | undefined;
    }) => preact.VNode | null> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (props: import("../Tab/Tab.types").TabProps & {
        ref?: import("preact").Ref<HTMLButtonElement> | undefined;
    }) => preact.VNode | null, Partial<(props: import("../Tab/Tab.types").TabProps & {
        ref?: import("preact").Ref<HTMLButtonElement> | undefined;
    }) => preact.VNode | null>>, "story"> | undefined;
} & {
    args?: Partial<(props: import("../Tab/Tab.types").TabProps & {
        ref?: import("preact").Ref<HTMLButtonElement> | undefined;
    }) => preact.VNode | null> | undefined;
};
