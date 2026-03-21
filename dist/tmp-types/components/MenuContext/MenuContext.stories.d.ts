import { Meta, StoryObj } from '@storybook/preact';
import { MenuContext } from './MenuContext';
declare const meta: Meta;
export default meta;
type Story = StoryObj<typeof MenuContext>;
export declare const Demo: Story;
export declare const Controlled: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, ({ triggerRef, anchorRef, open, setOpen, children }: import("./MenuContext.types").MenuContextProps) => import("preact").JSX.Element> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, ({ triggerRef, anchorRef, open, setOpen, children }: import("./MenuContext.types").MenuContextProps) => import("preact").JSX.Element> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, ({ triggerRef, anchorRef, open, setOpen, children }: import("./MenuContext.types").MenuContextProps) => import("preact").JSX.Element, Partial<({ triggerRef, anchorRef, open, setOpen, children }: import("./MenuContext.types").MenuContextProps) => import("preact").JSX.Element>>, "story"> | undefined;
} & {
    args?: Partial<({ triggerRef, anchorRef, open, setOpen, children }: import("./MenuContext.types").MenuContextProps) => import("preact").JSX.Element> | undefined;
};
export declare const CustomItem: import("@storybook/core/csf").BaseAnnotations<import("@storybook/preact").PreactRenderer, ({ triggerRef, anchorRef, open, setOpen, children }: import("./MenuContext.types").MenuContextProps) => import("preact").JSX.Element> & {
    name?: import("@storybook/core/csf").StoryName;
    storyName?: import("@storybook/core/csf").StoryName;
    play?: import("@storybook/core/csf").PlayFunction<import("@storybook/preact").PreactRenderer, ({ triggerRef, anchorRef, open, setOpen, children }: import("./MenuContext.types").MenuContextProps) => import("preact").JSX.Element> | undefined;
    globals?: import("@storybook/core/csf").Globals;
    story?: Omit<import("@storybook/core/csf").StoryAnnotations<import("@storybook/preact").PreactRenderer, ({ triggerRef, anchorRef, open, setOpen, children }: import("./MenuContext.types").MenuContextProps) => import("preact").JSX.Element, Partial<({ triggerRef, anchorRef, open, setOpen, children }: import("./MenuContext.types").MenuContextProps) => import("preact").JSX.Element>>, "story"> | undefined;
} & {
    args?: Partial<({ triggerRef, anchorRef, open, setOpen, children }: import("./MenuContext.types").MenuContextProps) => import("preact").JSX.Element> | undefined;
};
