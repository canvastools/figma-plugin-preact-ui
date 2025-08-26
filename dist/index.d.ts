import * as preact$1 from 'preact';

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
    context?: "neutral" | "neutral-secondary" | "neutral-brand" | "neutral-danger" | "neutral-warning" | "neutral-success" | "neutral-inverted" | "brand" | "danger" | "warning" | "success";
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    children?: preact.ComponentChildren;
}

declare const Badge: (props: BadgeProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface ButtonProps {
    className?: string;
    context?: "neutral" | "neutral-ghost" | "neutral-brand" | "neutral-brand-ghost" | "neutral-danger" | "neutral-danger-ghost" | "neutral-inverted" | "brand" | "danger" | "success";
    size?: "medium" | "large";
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
    context?: "neutral" | "neutral-ghost";
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
    check: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    chevronDown: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    chevronRight: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    close: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    dragHandle: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    help: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    link: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    minus: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    mixed: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    more: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    plus: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    search: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
    settings: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;
};

interface GlyphProps {
    variant: IconProps["variant"];
    size: number;
}
interface IconProps {
    className?: string;
    glyph?: keyof typeof glyphs;
    context?: "inherit" | "neutral" | "neutral-secondary" | "neutral-brand" | "neutral-danger" | "neutral-warning" | "neutral-success" | "neutral-inverted" | "brand" | "danger" | "warning" | "success";
    variant?: "default" | "scaled";
    size?: 16 | 24;
    children?: preact.ComponentChildren;
}

declare const Icon: (props: IconProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
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
    selectAll: () => void;
    deselectAll: () => void;
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

interface SectionProps {
    className?: string;
    children?: preact.ComponentChildren;
}

declare const Section: (props: SectionProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface SpinnerProps {
    className?: string;
}

declare const Spinner: (props: SpinnerProps & {
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
    onChange?: (args: {
        value: string;
    }) => void;
    children: preact.ComponentChildren;
}

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
    children: preact.ComponentChildren;
}

declare const TabPanel: (props: TabPanelProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

interface TextProps {
    className?: string;
    context?: "inherit" | "neutral" | "neutral-secondary" | "neutral-brand" | "neutral-danger" | "neutral-warning" | "neutral-success" | "neutral-inverted" | "brand" | "danger" | "warning" | "success";
    variant?: "heading" | "body";
    size?: "small" | "medium" | "large";
    strong?: boolean;
    align?: "left" | "center" | "right";
    children: preact.ComponentChildren;
}

declare const Text: (props: TextProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode;

export { Avatar, Badge, Button, ButtonIcon, ButtonIconToggle, Checkbox, Divider, Icon, ListContainer, ListContext, ListItem, Section, Spinner, Tab, TabContext, TabList, TabPanel, Text };
export type { AvatarProps, BadgeProps, ButtonIconProps, ButtonIconToggleProps, ButtonProps, CheckboxProps, CheckboxValue, DividerProps, IconProps, ListContainerProps, ListContextProps, ListContextValue, ListItemData, ListItemProps, SectionProps, SpinnerProps, TabContextProps, TabContextValue, TabListProps, TabPanelProps, TabProps, TextProps };
