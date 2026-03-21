import { Meta, StoryObj } from '@storybook/preact';
import { MenuDivider } from './MenuDivider';
declare const meta: Meta<typeof MenuDivider>;
export default meta;
type Story = StoryObj<typeof MenuDivider>;
export declare const Demo: Story;
export declare const Variant: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (props: import("./MenuDivider.types").MenuDividerProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}) => preact.VNode | null> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (props: import("./MenuDivider.types").MenuDividerProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (props: import("./MenuDivider.types").MenuDividerProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null, Partial<(props: import("./MenuDivider.types").MenuDividerProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null>>, "story"> | undefined;
} & {
    args?: Partial<(props: import("./MenuDivider.types").MenuDividerProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null> | undefined;
};
