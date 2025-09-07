import * as preact$1 from 'preact';

declare const figmaLight: ColorTokenTree;

declare const figmaDark: ColorTokenTree;

declare const spacing: ColorTokenTree;

declare const radius: ColorTokenTree;

type ColorTokenBranch = {
    [key: string]: string | ColorTokenBranch;
};
type ColorTokenTree = {
    class: string;
    prefix?: string;
    variables: ColorTokenBranch;
};

interface AvatarProps {
    className?: string;
    size?: "small" | "medium" | "large";
    shape?: "circle" | "square";
    imageSrc?: string;
    fillBg?: string;
    fillText?: string;
    children?: preact.ComponentChildren;
}

declare const Avatar: (props: AvatarProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface BadgeProps {
    className?: string;
    intent?: "neutral" | "neutral-inverted" | "brand" | "danger" | "warning" | "success";
    intentModifiers?: "default" | "secondary" | "brand" | "danger" | "warning" | "success";
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    children?: preact.ComponentChildren;
}

declare const Badge: (props: BadgeProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface BarProps {
    className?: string;
    borderTop?: boolean;
    borderBottom?: boolean;
    children?: preact.ComponentChildren;
}

declare const Bar: (props: BarProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface ButtonProps {
    className?: string;
    intent?: "neutral" | "neutral-inverted" | "brand" | "danger" | "success";
    intentModifiers?: "default" | "secondary" | "brand" | "danger" | "warning" | "success";
    ghost?: boolean;
    size?: "medium" | "large";
    grouped?: "none" | "left" | "right" | "both";
    disabled?: boolean;
    fullWidth?: boolean;
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    children?: preact.ComponentChildren;
    onClick?: (args: {
        event: MouseEvent;
    }) => void;
}

declare const Button: (props: ButtonProps & {
    ref?: preact$1.Ref<HTMLButtonElement> | undefined;
}) => preact$1.VNode;

interface ButtonIconProps {
    className?: string;
    intent?: "neutral";
    intentModifiers?: "default";
    ghost?: boolean;
    size?: "medium" | "large";
    grouped?: "none" | "left" | "right" | "both";
    translucent?: boolean;
    disabled?: boolean;
    children?: preact.ComponentChildren;
    onClick?: (args: {
        event: MouseEvent;
    }) => void;
}

declare const ButtonIcon: (props: ButtonIconProps & {
    ref?: preact$1.Ref<HTMLButtonElement> | undefined;
}) => preact$1.VNode;

interface ButtonIconToggleProps extends ButtonIconProps {
    defaultSelected?: boolean;
    selected?: boolean;
    onChange?: (args: {
        event: MouseEvent;
        selected: boolean;
    }) => void;
}

declare const ButtonIconToggle: (props: ButtonIconToggleProps & {
    ref?: preact$1.Ref<HTMLButtonElement> | undefined;
}) => preact$1.VNode;

type CheckboxValue = boolean;
interface CheckboxProps {
    className?: string;
    checked?: CheckboxValue;
    defaultChecked?: CheckboxValue;
    mixed?: boolean;
    disabled?: boolean;
    label?: string;
    onChange?: (args: {
        event: MouseEvent;
        checked: CheckboxValue;
    }) => void;
}

declare const Checkbox: (props: CheckboxProps & {
    ref?: preact$1.Ref<HTMLInputElement> | undefined;
}) => preact$1.VNode;

interface DividerProps {
    className?: string;
    variant?: "full" | "inset";
}

declare const Divider: (props: DividerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

declare const glyphs: {
    adjust: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    ai: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    check: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    chevronDown: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    chevronRight: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    close: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    copy: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    dragHandle: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    duplicate: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    help: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    home: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    imports: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    info: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    insert: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    filter: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    filterFilled: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    link: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    minus: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    mixed: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    more: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    plus: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    search: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    select: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    settings: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    updates: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    viewGrid: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    viewList: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    warning: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
};

interface GlyphProps {
    variant: IconProps["variant"];
    size: number;
}
interface IconProps {
    className?: string;
    glyph?: keyof typeof glyphs;
    intent?: "neutral" | "neutral-inverted" | "brand" | "danger" | "warning" | "success";
    intentModifiers?: "default" | "secondary" | "brand" | "danger" | "warning" | "success";
    disabled?: boolean;
    interactive?: boolean;
    selected?: boolean;
    fill?: string;
    variant?: "default" | "scaled";
    size?: 16 | 24;
    children?: preact.ComponentChildren;
}

declare const Icon: (props: IconProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface InputProps {
    className?: string;
    placeholder?: string;
    defaultValue?: string;
    value?: string;
    ghost?: boolean;
    error?: boolean;
    disabled?: boolean;
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    focusOnDoubleClick?: boolean;
    onChange?: (args: {
        event: MouseEvent;
        value: string;
    }) => void;
    onBlur?: (args: {
        event: MouseEvent;
        value: string;
    }) => void;
    onFocus?: (args: {
        event: MouseEvent;
        value: string;
    }) => void;
    onKeyDown?: (args: {
        event: KeyboardEvent;
        value: string;
    }) => void;
}

declare const Input: (props: InputProps & {
    ref?: preact$1.Ref<HTMLInputElement> | undefined;
}) => preact$1.VNode;

interface ListContainerProps {
    className?: string;
    children: preact.ComponentChildren;
}

declare const ListContainer: (props: ListContainerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface ListItemData {
    id: string;
    selected?: boolean;
    children?: ListItemData[];
}
interface ListContextValue {
    items: ListItemData[];
    selectedItems: Set<string>;
    setSelection: (itemIds: string[], selected: boolean) => void;
    setExactSelection: (itemIds: string[]) => void;
    toggleSelect: (itemId: string, options?: {
        range?: boolean;
        additive?: boolean;
    }) => void;
    registerItemMeta?: (id: string, meta: {
        selectable?: boolean;
        selectionScope?: "item" | "withDescendants";
    }) => () => void;
    getPathForId?: (id: string) => number[] | null;
    registerItemPath?: (id: string, path: number[]) => () => void;
    reorderItems: (itemIds: string[], targetIndex: number, targetParentPath?: number[]) => void;
    selectionMode: "none" | "single" | "multi";
    registerRootElement?: (el: HTMLElement | null) => () => void;
    dragImage?: HTMLDivElement | null;
}
interface ListContextProps {
    items?: ListItemData[];
    selectedItems?: string[];
    selectionMode?: "none" | "single" | "multi";
    onItemsChange?: (args: {
        items: ListItemData[];
    }) => void;
    onSelectionChange?: (args: {
        selectedItems: string[];
    }) => void;
    children: preact.ComponentChildren;
}

declare const useListContext: () => ListContextValue;
declare const ListContext: ({ items: controlledItems, selectedItems: controlledSelectedItems, selectionMode, onItemsChange, onSelectionChange, children, }: ListContextProps) => preact$1.JSX.Element;

interface ListItemProps {
    className?: string;
    id: string;
    isNested?: boolean;
    nestingLevel?: number;
    draggable?: boolean;
    dragHandle?: "default" | "container";
    onDragStart?: (args: {
        event: DragEvent;
    }) => void;
    onDragEnd?: (args: {
        event: DragEvent;
    }) => void;
    acceptsChildren?: boolean;
    selectable?: boolean;
    selectionScope?: "item" | "withDescendants";
    onSelect?: (args: {
        event: MouseEvent;
        selected: boolean;
    }) => void;
    hoverable?: boolean;
    collapsed?: boolean;
    showCollapseControl?: boolean;
    onCollapsedChange?: (args: {
        event: MouseEvent;
        collapsed: boolean;
    }) => void;
    subItems?: preact.ComponentChildren;
    children?: preact.ComponentChildren;
}

declare const ListItem: (props: ListItemProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface ScrollContextValue {
    positionY: number;
    isAtTop: boolean;
    isAtBottom: boolean;
    onScroll: (event: Event) => void;
    setPositionY: (positionY: number) => void;
}
interface ScrollContextProps {
    defaultPositionY?: number;
    positionY?: number;
    onScroll?: (args: {
        positionY: number;
    }) => void;
    children: preact.ComponentChildren;
}

declare const useScrollContext: () => ScrollContextValue;
declare const ScrollContext: ({ defaultPositionY, positionY: controlledPositionY, onScroll, children, }: ScrollContextProps) => preact$1.JSX.Element;

interface ScrollContainerProps {
    className?: string;
    children: preact.ComponentChildren;
}

declare const ScrollContainer: (props: ScrollContainerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

type SectionPadding = keyof typeof spacing.variables;
interface SectionProps {
    className?: string;
    padding?: {
        top?: SectionPadding;
        right?: SectionPadding;
        bottom?: SectionPadding;
        left?: SectionPadding;
    };
    children?: preact.ComponentChildren;
}

declare const Section: (props: SectionProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface SpacingProps {
    className?: string;
    size?: keyof typeof spacing.variables;
    direction?: "row" | "column";
}

declare const Spacing: (props: SpacingProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface SpinnerProps {
    className?: string;
}

declare const Spinner: (props: SpinnerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface StackProps {
    className?: string;
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    spacing?: keyof typeof spacing.variables;
    x?: "start" | "center" | "end";
    y?: "start" | "center" | "end";
    fullHeight?: boolean;
    fullWidth?: boolean;
    children?: preact.ComponentChildren;
}

declare const Stack: (props: StackProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface TabProps {
    className?: string;
    value: string;
    variant?: "default" | "single";
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    children: preact.ComponentChildren;
    onClick?: (args: {
        event: MouseEvent;
        value: string;
    }) => void;
}

declare const Tab: (props: TabProps & {
    ref?: preact$1.Ref<HTMLButtonElement> | undefined;
}) => preact$1.VNode;

interface TabContextValue {
    value: string;
    onChange: (value: string) => void;
    setValue: (value: string) => void;
}
interface TabContextProps {
    defaultValue?: string;
    value?: string;
    children: preact.ComponentChildren;
    onChange?: (args: {
        value: string;
    }) => void;
}

declare const useTabContext: () => TabContextValue;
declare const TabContext: ({ defaultValue, value: controlledValue, onChange, children, }: TabContextProps) => preact$1.JSX.Element;

interface TabListProps {
    className?: string;
    children: preact.ComponentChildren;
}

declare const TabList: (props: TabListProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface TabPanelProps {
    className?: string;
    value: string;
    fullHeight?: boolean;
    children: preact.ComponentChildren;
}

declare const TabPanel: (props: TabPanelProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface TextProps {
    className?: string;
    intent?: "neutral" | "neutral-inverted" | "brand" | "danger" | "warning" | "success";
    intentModifiers?: "default" | "secondary" | "brand" | "danger" | "warning" | "success";
    disabled?: boolean;
    interactive?: boolean;
    selected?: boolean;
    fill?: string;
    variant?: "heading" | "body";
    size?: "small" | "medium" | "large";
    strong?: boolean;
    align?: "left" | "center" | "right";
    fullWidth?: boolean;
    children: preact.ComponentChildren;
}

declare const Text: (props: TextProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface WindowResizerProps {
    className?: string;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    onResize: (args: {
        width: number;
        height: number;
    }) => void;
}

declare const WindowResizer: (props: WindowResizerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

export { Avatar, Badge, Bar, Button, ButtonIcon, ButtonIconToggle, Checkbox, Divider, Icon, Input, ListContainer, ListContext, ListItem, ScrollContainer, ScrollContext, Section, Spacing, Spinner, Stack, Tab, TabContext, TabList, TabPanel, Text, WindowResizer, figmaDark, figmaLight, radius, spacing, useListContext, useScrollContext, useTabContext };
export type { AvatarProps, BadgeProps, BarProps, ButtonIconProps, ButtonIconToggleProps, ButtonProps, CheckboxProps, CheckboxValue, DividerProps, IconProps, InputProps, ListContainerProps, ListContextProps, ListContextValue, ListItemData, ListItemProps, ScrollContainerProps, ScrollContextProps, ScrollContextValue, SectionPadding, SectionProps, SpacingProps, SpinnerProps, StackProps, TabContextProps, TabContextValue, TabListProps, TabPanelProps, TabProps, TextProps, WindowResizerProps };
