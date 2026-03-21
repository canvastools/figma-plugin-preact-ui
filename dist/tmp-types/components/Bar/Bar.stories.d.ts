import { Meta } from '@storybook/preact';
import { Bar } from './Bar';
declare const meta: Meta<typeof Bar>;
export default meta;
export declare const Demo: {
    tags: string[];
    args: {
        id: undefined;
        className: string;
        showDividerTop: boolean;
        showDividerBottom: boolean;
        children: string;
    };
    parameters: {
        viewport: {
            defaultViewport: string;
        };
        docs: {
            source: {
                language: string;
                code: string;
            };
        };
    };
    render: (args: any) => import("preact").JSX.Element;
};
export declare const Sticky: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, (props: import("./Bar.types").BarProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}) => preact.VNode | null> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, (props: import("./Bar.types").BarProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, (props: import("./Bar.types").BarProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null, Partial<(props: import("./Bar.types").BarProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null>>, "story"> | undefined;
} & {
    args?: Partial<(props: import("./Bar.types").BarProps & {
        ref?: import("preact").Ref<HTMLDivElement> | undefined;
    }) => preact.VNode | null> | undefined;
};
