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
    imageSrc?: string | undefined | null;
    fillBg?: string;
    fillText?: string;
    children?: preact.ComponentChildren;
}

declare const Avatar: (props: AvatarProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

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
}) => preact$1.VNode | null;

interface BarProps {
    className?: string;
    borderTop?: boolean;
    borderBottom?: boolean;
    children?: preact.ComponentChildren;
}

declare const Bar: (props: BarProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

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
}) => preact$1.VNode | null;

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
}) => preact$1.VNode | null;

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
}) => preact$1.VNode | null;

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
}) => preact$1.VNode | null;

type Color = {
    r: number;
    g: number;
    b: number;
    a: number;
};
interface ColorPickerProps {
    className?: string;
    defaultType?: "rgba" | "hex" | "hexAlpha";
    types?: ("rgba" | "hex" | "hexAlpha")[];
    value?: Color | null;
    controls?: boolean;
    onChange?: (args: {
        rgba: Color;
        hex: string;
        opacity: number;
    }) => void;
}

declare const ColorPicker: (props: ColorPickerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface ColorSwatchProps {
    className?: string;
    variant?: "fill" | "image";
    size?: "small" | "medium";
    hex?: string;
    imageSrc?: string;
}

declare const ColorSwatch: (props: ColorSwatchProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface DividerProps {
    className?: string;
    variant?: "full" | "inset";
}

declare const Divider: (props: DividerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface GlyphProps {
    variant: IconProps["variant"];
    size: number;
}
type Glyph = (props: GlyphProps) => preact.VNode;
interface IconProps {
    className?: string;
    glyph?: Glyph;
    intent?: "neutral" | "neutral-inverted" | "neutral-inverted-fixed" | "brand" | "danger" | "warning" | "success";
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
}) => preact$1.VNode | null;

declare const adjust: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const ai: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const check: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const chevronDown: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const chevronRight: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const close: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const copy: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const dragHandle: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const duplicate: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const help: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const home: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const imports: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const info: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const insert: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const filter: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const filterFilled: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const link: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const plus: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const minus: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const mixed: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const more: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const search: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const select: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const settings: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const updates: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const viewGrid: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const viewList: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const warning: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const index_d_adjust: typeof adjust;
declare const index_d_ai: typeof ai;
declare const index_d_check: typeof check;
declare const index_d_chevronDown: typeof chevronDown;
declare const index_d_chevronRight: typeof chevronRight;
declare const index_d_close: typeof close;
declare const index_d_copy: typeof copy;
declare const index_d_dragHandle: typeof dragHandle;
declare const index_d_duplicate: typeof duplicate;
declare const index_d_filter: typeof filter;
declare const index_d_filterFilled: typeof filterFilled;
declare const index_d_help: typeof help;
declare const index_d_home: typeof home;
declare const index_d_imports: typeof imports;
declare const index_d_info: typeof info;
declare const index_d_insert: typeof insert;
declare const index_d_link: typeof link;
declare const index_d_minus: typeof minus;
declare const index_d_mixed: typeof mixed;
declare const index_d_more: typeof more;
declare const index_d_plus: typeof plus;
declare const index_d_search: typeof search;
declare const index_d_select: typeof select;
declare const index_d_settings: typeof settings;
declare const index_d_updates: typeof updates;
declare const index_d_viewList: typeof viewList;
declare const index_d_warning: typeof warning;
declare namespace index_d {
  export {
    index_d_adjust as adjust,
    index_d_ai as ai,
    index_d_check as check,
    index_d_chevronDown as chevronDown,
    index_d_chevronRight as chevronRight,
    index_d_close as close,
    index_d_copy as copy,
    index_d_dragHandle as dragHandle,
    index_d_duplicate as duplicate,
    index_d_filter as filter,
    index_d_filterFilled as filterFilled,
    index_d_help as help,
    index_d_home as home,
    index_d_imports as imports,
    index_d_info as info,
    index_d_insert as insert,
    index_d_link as link,
    index_d_minus as minus,
    index_d_mixed as mixed,
    index_d_more as more,
    index_d_plus as plus,
    index_d_search as search,
    index_d_select as select,
    index_d_settings as settings,
    index_d_updates as updates,
    index_d_viewGrid as viewGrid,
    index_d_viewList as viewList,
    index_d_warning as warning,
  };
}

interface InputProps {
    className?: string;
    type?: "text" | "number";
    placeholder?: string;
    defaultValue?: string;
    value?: string;
    ghost?: boolean;
    grouped?: "none" | "left" | "right" | "both";
    error?: boolean;
    disabled?: boolean;
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    suffixOnHover?: boolean;
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
}) => preact$1.VNode | null;

interface ListContainerProps {
    className?: string;
    children: preact.ComponentChildren;
}

declare const ListContainer: (props: ListContainerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

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
    reducedPaddingRight?: boolean;
}

declare const ListItem: (props: ListItemProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface MenuContainerProps {
    className?: string;
    width?: number | "auto";
    height?: number | "auto";
    children: preact.ComponentChildren;
}

declare const MenuContainer: (props: MenuContainerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface MenuDividerProps {
    className?: string;
}

declare const MenuDivider: (props: MenuDividerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface MenuItemProps {
    className?: string;
    disabled?: boolean;
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    children: preact.ComponentChildren;
    reducedPaddingRight?: boolean;
    onClick?: (args: {
        event: MouseEvent;
    }) => void;
}

declare const MenuItem: (props: MenuItemProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface MenuItemOptionProps {
    className?: string;
    defaultSelected?: boolean;
    selected?: boolean;
    disabled?: boolean;
    reducedPaddingRight?: boolean;
    suffix?: preact.ComponentChildren;
    children: preact.ComponentChildren;
    onChange?: (args: {
        event: MouseEvent;
        selected: boolean;
    }) => void;
}

declare const MenuItemOption: (props: MenuItemOptionProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

type OverlayPlacement = "over" | "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "left" | "left-top" | "left-bottom" | "right" | "right-top" | "right-bottom";
interface OverlayPositionerProps {
    className?: string;
    anchorRef: preact.RefObject<HTMLElement>;
    open?: boolean;
    defaultOpen?: boolean;
    placement?: OverlayPlacement;
    placementFallback?: false | OverlayPlacement[];
    trigger?: "click" | "hover";
    visibilityDelay?: number;
    paddingX?: number;
    paddingY?: number;
    edgePadding?: number;
    closeOnOutsideClick?: boolean;
    arrow?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    children: preact.ComponentChildren;
}

declare const OverlayPositioner: (props: OverlayPositionerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface PopoverProps {
    className?: string;
    width?: number | "auto";
    height?: number | "auto";
    children: preact.ComponentChildren;
}

declare const Popover: (props: PopoverProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

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
}) => preact$1.VNode | null;

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
}) => preact$1.VNode | null;

interface SelectOption {
    label: string;
    value: string;
}
interface SelectProps {
    className?: string;
    options?: SelectOption[];
    placeholder?: string;
    defaultValue?: string;
    value?: string;
    grouped?: "none" | "left" | "right" | "both";
    error?: boolean;
    disabled?: boolean;
    prefix?: preact.ComponentChildren;
    menuWidth?: number | "auto";
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: (args: {
        event: MouseEvent;
        value: string;
    }) => void;
}

declare const Select: (props: SelectProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface SpacingProps {
    className?: string;
    size?: keyof typeof spacing.variables;
    direction?: "row" | "column";
}

declare const Spacing: (props: SpacingProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface SpinnerProps {
    className?: string;
}

declare const Spinner: (props: SpinnerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

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
}) => preact$1.VNode | null;

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
}) => preact$1.VNode | null;

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
}) => preact$1.VNode | null;

interface TabPanelProps {
    className?: string;
    value: string;
    fullHeight?: boolean;
    children: preact.ComponentChildren;
}

declare const TabPanel: (props: TabPanelProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface TextProps {
    className?: string;
    intent?: "neutral" | "neutral-inverted" | "neutral-inverted-fixed" | "brand" | "danger" | "warning" | "success";
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
    noWrap?: boolean;
    children: preact.ComponentChildren;
}

declare const Text: (props: TextProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface TooltipProps {
    className?: string;
    width?: number | "auto";
    height?: number | "auto";
    children: preact.ComponentChildren;
}

declare const Tooltip: (props: TooltipProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

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
}) => preact$1.VNode | null;

type StringValidationError = "required" | "too_short" | "too_long" | "invalid";
type StringValidationConfig = {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    trim?: boolean;
};
declare const useStringValidator: (config: StringValidationConfig) => {
    isValid: (value: unknown) => value is string;
    getErrorCode: (value: unknown) => StringValidationError | null;
};

type NumberValidationError = "required" | "less_than_min" | "greater_than_max" | "not_integer";
type NumberValidationConfig = {
    required?: boolean;
    min?: number;
    max?: number;
    integer?: boolean;
};
declare const useNumberValidator: (config: NumberValidationConfig) => {
    isValid: (value: unknown) => value is number;
    getErrorCode: (value: unknown) => NumberValidationError | null;
};

declare const clamp: (value: number, min: number, max: number) => number;
declare const colorToHex: (color: Pick<Color, "r" | "g" | "b">) => string;
declare const hexToColor: (hex: string, alpha?: number) => Color | null;

declare const colorToHexAlpha: (color: Color) => string;
declare const hexAlphaToColor: (hex: string) => Color | null;
declare const roundAlpha: (a: number) => number;

export { Avatar, Badge, Bar, Button, ButtonIcon, ButtonIconToggle, Checkbox, ColorPicker, ColorSwatch, Divider, Icon, Input, ListContainer, ListContext, ListItem, MenuContainer, MenuDivider, MenuItem, MenuItemOption, OverlayPositioner, Popover, ScrollContainer, ScrollContext, Section, Select, Spacing, Spinner, Stack, Tab, TabContext, TabList, TabPanel, Text, Tooltip, WindowResizer, clamp, colorToHex, colorToHexAlpha, figmaDark, figmaLight, index_d as glyphs, hexAlphaToColor, hexToColor, radius, roundAlpha, spacing, useListContext, useNumberValidator, useScrollContext, useStringValidator, useTabContext };
export type { AvatarProps, BadgeProps, BarProps, ButtonIconProps, ButtonIconToggleProps, ButtonProps, CheckboxProps, CheckboxValue, Color, ColorPickerProps, ColorSwatchProps, DividerProps, Glyph, GlyphProps, IconProps, InputProps, ListContainerProps, ListContextProps, ListContextValue, ListItemData, ListItemProps, MenuContainerProps, MenuDividerProps, MenuItemOptionProps, MenuItemProps, NumberValidationConfig, NumberValidationError, OverlayPlacement, OverlayPositionerProps, PopoverProps, ScrollContainerProps, ScrollContextProps, ScrollContextValue, SectionPadding, SectionProps, SelectOption, SelectProps, SpacingProps, SpinnerProps, StackProps, StringValidationConfig, StringValidationError, TabContextProps, TabContextValue, TabListProps, TabPanelProps, TabProps, TextProps, TooltipProps, WindowResizerProps };
