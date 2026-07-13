import { Meta, StoryObj } from '@storybook/preact-vite';
import { Calendar } from './Calendar';
declare const meta: Meta<typeof Calendar>;
export default meta;
type Story = StoryObj<typeof Calendar>;
export declare const Demo: Story;
export declare const Uncontrolled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Calendar.types").CalendarProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Controlled: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Calendar.types").CalendarProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const View: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Calendar.types").CalendarProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Dates: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Calendar.types").CalendarProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
export declare const Details: import("storybook/internal/csf").StoryAnnotations<import("@storybook/preact-vite").PreactRenderer, import("./Calendar.types").CalendarProps & {
    ref?: import("preact").Ref<HTMLDivElement> | undefined;
}>;
