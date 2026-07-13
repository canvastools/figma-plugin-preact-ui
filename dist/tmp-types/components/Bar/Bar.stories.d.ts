import { Meta } from '@storybook/preact-vite';
import { Bar } from './Bar';
declare const meta: Meta<typeof Bar>;
export default meta;
export declare const Demo: {
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
                code: string;
            };
        };
    };
    render: (args: import("./Bar.types").BarProps) => import("preact").JSX.Element;
};
export declare const Sticky: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Bar.types").BarProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
