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
    tooltip?: preact.ComponentChildren;
    onClick?: (args: {
        event: MouseEvent;
    }) => void;
}

declare const Button: (props: ButtonProps & {
    ref?: preact$1.Ref<HTMLButtonElement> | undefined;
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

interface ButtonIconProps {
    className?: string;
    intent?: "neutral";
    intentModifiers?: "default" | "secondary";
    ghost?: boolean;
    size?: "medium" | "large";
    grouped?: "none" | "left" | "right" | "both";
    translucent?: boolean;
    disabled?: boolean;
    selected?: boolean;
    icon?: {
        glyph: Glyph;
        variant?: IconProps["variant"];
        size?: IconProps["size"];
    };
    children?: preact.ComponentChildren;
    tooltip?: preact.ComponentChildren;
    onClick?: (args: {
        event: MouseEvent;
    }) => void;
}

declare const ButtonIcon: (props: ButtonIconProps & {
    ref?: preact$1.Ref<HTMLButtonElement> | undefined;
}) => preact$1.VNode | null;

interface ButtonIconToggleProps extends ButtonIconProps {
    defaultSelected?: boolean;
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
    intent?: "neutral" | "brand";
    intentModifiers?: "default";
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

interface CodeProps {
    className?: string;
    variant?: "inline" | "block";
    children: string;
}

declare const Code: (props: CodeProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
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
    width?: number | "auto";
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
    size?: "small" | "medium" | "large";
    hex?: string;
    imageSrc?: string;
    interactive?: boolean;
    selected?: boolean;
    selection?: "default" | "rainbow";
    tooltip?: preact.ComponentChildren;
    children?: preact.ComponentChildren;
    onClick?: (args: {
        event: MouseEvent;
        hex: string | undefined;
        imageSrc: string | undefined;
    }) => void;
}

declare const ColorSwatch: (props: ColorSwatchProps & {
    ref?: preact$1.Ref<HTMLDivElement | HTMLButtonElement> | undefined;
}) => preact$1.VNode | null;

type CalendarValue = Date | [Date | null, Date | null] | null;
interface CalendarProps {
    className?: string;
    locale?: string;
    calendarType?: "iso8601" | "islamic" | "hebrew" | "gregory";
    defaultView?: "month" | "year" | "decade" | "century";
    view?: "month" | "year" | "decade" | "century";
    defaultValue?: CalendarValue;
    value?: CalendarValue;
    minDate?: Date;
    maxDate?: Date;
    minDetail?: "century" | "decade" | "year" | "month";
    maxDetail?: "century" | "decade" | "year" | "month";
    navigation?: "full" | "simple" | "none";
    onChange?: (args: {
        value: CalendarValue;
    }) => void;
    onDrillUp?: (args: {
        action: "onChange" | "prev" | "prev2" | "next" | "next2" | "drillUp" | "drillDown";
        activeStartDate: Date | null;
        value: CalendarValue;
        view: "month" | "year" | "decade" | "century";
    }) => void;
    onDrillDown?: (args: {
        action: "onChange" | "prev" | "prev2" | "next" | "next2" | "drillUp" | "drillDown";
        activeStartDate: Date | null;
        value: CalendarValue;
        view: "month" | "year" | "decade" | "century";
    }) => void;
    onViewChange?: (args: {
        action: "onChange" | "prev" | "prev2" | "next" | "next2" | "drillUp" | "drillDown";
        activeStartDate: Date | null;
        value: CalendarValue;
        view: "month" | "year" | "decade" | "century";
    }) => void;
}

declare const Calendar: (props: CalendarProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface DividerProps {
    className?: string;
    variant?: "full" | "inset";
}

declare const Divider: (props: DividerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

declare const Icon: (props: IconProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

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
    tooltip?: preact.ComponentChildren;
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
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface InputGroupProps {
    className?: string;
    children: preact.ComponentChildren;
}

declare const InputGroup: (props: InputGroupProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
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

type MenuItemData = ({
    type: "action";
    closeOnClick?: boolean;
} & Omit<MenuItemActionProps, "focused">) | ({
    type: "option";
    closeOnClick?: boolean;
} & Omit<MenuItemOptionProps, "focused">) | ({
    type: "divider";
} & MenuDividerProps);
interface MenuProps {
    className?: string;
    triggerRef?: preact.RefObject<HTMLElement | null>;
    anchorRef?: preact.RefObject<HTMLElement | null>;
    items: MenuItemData[];
    defaultOpen?: boolean;
    open?: boolean | undefined;
    width?: number | "auto";
    placement?: OverlayPlacement;
    placementFallback?: false | OverlayPlacement[];
    paddingX?: number;
    paddingY?: number;
    edgePadding?: number;
    onOpen?: () => void;
    onClose?: () => void;
}

declare const Menu: (props: MenuProps & {
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

interface MenuItemMetadata {
    id: string;
    ref: preact.RefObject<HTMLElement>;
    disabled?: boolean;
}
interface MenuContextValue {
    triggerRef?: preact.RefObject<HTMLElement> | null;
    anchorRef?: preact.RefObject<HTMLElement> | null;
    open?: boolean;
    setOpen: (open: boolean) => void;
    registerItem: (meta: MenuItemMetadata) => () => void;
    focusedItemId: string | null;
    focusItem: (id?: string) => void;
    clearFocusedItem: () => void;
    setHoveredItem: (id: string | null) => void;
    keyboardInteraction: boolean;
}
interface MenuContextProps {
    triggerRef?: preact.RefObject<HTMLElement | null>;
    anchorRef?: preact.RefObject<HTMLElement | null>;
    open?: boolean;
    setOpen?: (open: boolean) => void;
    children: preact.ComponentChildren;
}

declare const useMenuContext: () => MenuContextValue;
declare const MenuContext: ({ triggerRef, anchorRef, open, setOpen, children, }: MenuContextProps) => preact$1.JSX.Element;

interface MenuDividerProps {
    className?: string;
    variant?: "full" | "inset";
}

declare const MenuDivider: (props: MenuDividerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface MenuItemActionProps {
    id?: string;
    className?: string;
    intentModifiers?: "default" | "danger";
    disabled?: boolean;
    focused?: boolean;
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    children: preact.ComponentChildren;
    optionLikePadding?: boolean;
    onClick?: (args: {
        event: MouseEvent;
    }) => void;
}

declare const MenuItemAction: (props: MenuItemActionProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface MenuItemOptionProps {
    id?: string;
    className?: string;
    defaultSelected?: boolean;
    selected?: boolean;
    disabled?: boolean;
    focused?: boolean;
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
    draggable?: boolean;
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
    triggerRef?: preact.RefObject<HTMLElement | null>;
    anchorRef?: preact.RefObject<HTMLElement | null>;
    defaultOpen?: boolean;
    open?: boolean;
    header: preact.ComponentChildren | string;
    draggable?: boolean;
    width?: number | "auto";
    height?: number | "auto";
    placement?: OverlayPlacement;
    placementFallback?: false | OverlayPlacement[];
    paddingX?: number;
    paddingY?: number;
    edgePadding?: number;
    children: preact.ComponentChildren;
    onOpen?: () => void;
    onClose?: () => void;
}

declare const Popover: (props: PopoverProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface PopoverContainerProps {
    className?: string;
    width?: number | "auto";
    height?: number | "auto";
    children: preact.ComponentChildren;
}

declare const PopoverContainer: (props: PopoverContainerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface PopoverContextValue {
    triggerRef?: preact.RefObject<HTMLElement | null>;
    anchorRef?: preact.RefObject<HTMLElement | null>;
    open?: boolean;
    setOpen?: (open: boolean) => void;
}
interface PopoverContextProps {
    triggerRef?: preact.RefObject<HTMLElement | null>;
    anchorRef?: preact.RefObject<HTMLElement | null>;
    open?: boolean;
    setOpen?: (open: boolean) => void;
    children: preact.ComponentChildren;
}

declare const usePopoverContext: () => PopoverContextValue;
declare const PopoverContext: ({ triggerRef, anchorRef, open, setOpen, children, }: PopoverContextProps) => preact$1.JSX.Element;

interface PopoverHeaderProps {
    className?: string;
    children: preact.ComponentChildren;
    onClose?: () => void;
}

declare const PopoverHeader: (props: PopoverHeaderProps & {
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
    variant?: "default" | "stacked";
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

interface SegmentedControlOption {
    value: string;
    title: string;
    icon?: Glyph | preact.ComponentChildren;
}
interface SegmentedControlProps {
    className?: string;
    options: SegmentedControlOption[];
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    onChange?: (args: {
        event: MouseEvent | KeyboardEvent;
        value: string;
    }) => void;
}

declare const SegmentedControl: (props: SegmentedControlProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}
interface SelectProps {
    className?: string;
    options?: SelectOption[] | SelectOption[][];
    placeholder?: string;
    defaultValue?: string;
    value?: string;
    grouped?: "none" | "left" | "right" | "both";
    error?: boolean;
    disabled?: boolean;
    prefix?: preact.ComponentChildren;
    menuWidth?: number | "auto";
    tooltip?: preact.ComponentChildren;
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
    registerTab: (value: string, ref: HTMLButtonElement | null) => void;
    focusTab: (id?: string) => void;
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
    triggerRef?: preact.RefObject<HTMLElement | null>;
    anchorRef?: preact.RefObject<HTMLElement | null>;
    width?: number | "auto";
    height?: number | "auto";
    placement?: OverlayPlacement;
    placementFallback?: false | OverlayPlacement[];
    paddingX?: number;
    paddingY?: number;
    edgePadding?: number;
    children: preact.ComponentChildren;
    onOpen?: () => void;
    onClose?: () => void;
}

declare const Tooltip: (props: TooltipProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface TooltipContainerProps {
    className?: string;
    width?: number | "auto";
    height?: number | "auto";
    children: preact.ComponentChildren;
}

declare const TooltipContainer: (props: TooltipContainerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface TooltipContextValue {
    registerHoverStart: (ref: preact.RefObject<HTMLElement>, setOpen: (open: boolean) => void) => void;
    registerHoverEnd: (ref: preact.RefObject<HTMLElement>, setOpen: (open: boolean) => void) => void;
}
interface TooltipContextProps {
    children: preact.ComponentChildren;
}

declare const useTooltipContext: () => TooltipContextValue | undefined;
declare const TooltipContext: ({ children }: TooltipContextProps) => preact$1.JSX.Element;

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

type NumericInputError = "required" | "invalid_number" | "less_than_min" | "greater_than_max" | "not_integer";
interface NumericInputConfig {
    value: number | string;
    unit?: string;
    min?: number;
    max?: number;
    precision?: number;
    step?: number;
    stepLarge?: number;
    required?: boolean;
    normalizeOnError?: boolean;
    doubleValue?: boolean;
}
interface NumericInputParseResult {
    rawValue: string;
    normalizedValue: number | undefined;
    formattedValue: string | undefined;
    normalizedValues?: [number, number] | undefined;
    formattedValues?: [string, string] | undefined;
    error: NumericInputError | null;
    unit: string | undefined;
}
interface NumericInput extends NumericInputParseResult {
    handleKeyDown: (args: {
        event: KeyboardEvent;
        value: string;
    }, onValueChange?: (next: number) => void) => void;
    parse: (raw: string, unit?: string) => NumericInputParseResult;
}

declare const useNumericInput: (config: NumericInputConfig) => NumericInput;

type StringInputError = "required" | "too_short" | "too_long" | "invalid_characters";
type StringInputConfig = {
    value: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    allowedCharacters?: string;
    trim?: boolean;
    mask?: (value: string) => string;
    normalizeOnError?: boolean;
};
interface StringInputParseResult {
    rawValue: string;
    normalizedValue: string | undefined;
    formattedValue: string | undefined;
    error: StringInputError | null;
}
interface StringInput extends StringInputParseResult {
    handleKeyDown: (args: {
        event: KeyboardEvent;
        value: string;
    }) => void;
    parse: (raw: string) => StringInputParseResult;
}

declare const useStringInput: (config: StringInputConfig) => StringInput;

declare const clamp: (value: number, min: number, max: number) => number;
declare const colorToHex: (color: Pick<Color, "r" | "g" | "b">) => string;
declare const hexToColor: (hex: string, alpha?: number) => Color | null;

declare const colorToHexAlpha: (color: Color) => string;
declare const hexAlphaToColor: (hex: string) => Color | null;
declare const roundAlpha: (a: number) => number;

declare const adjust: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const ai: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const check: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const chevronDoubleDown: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const chevronDoubleLeft: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const chevronDoubleRight: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const chevronDoubleUp: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const chevronDown: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const chevronLeft: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const chevronRight: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const chevronUp: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const close: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const copy: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const corners: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const dragHandle: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const duplicate: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const eyeDropper: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const help: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const home: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const imports: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const info: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const insert: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const filter: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const filterFilled: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const letterSpacing: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const lineHeight: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const link: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const lowercase: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const plus: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const radiusBottomLeft: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const radiusBottomRight: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const radiusTopLeft: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const radiusTopRight: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const minus: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const mixed: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const more: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const opacity: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const paddingBottom: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const paddingHorizontal: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const paddingLeft: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const paddingRight: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const paddingSides: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const paddingTop: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const paddingVertical: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const rotation: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const search: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const select: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const settings: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const spacingHorizontal: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const spacingVertical: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const strikethrough: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const strokeDash: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const strokeSolid: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const strokeWidth: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const titleCase: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const underline: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const updates: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const uppercase: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const viewGrid: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const viewList: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const warning: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

export { Avatar, Badge, Bar, Button, ButtonIcon, ButtonIconToggle, Calendar, Checkbox, Code, ColorPicker, ColorSwatch, Divider, Icon, Input, InputGroup, ListContainer, ListContext, ListItem, Menu, MenuContainer, MenuContext, MenuDivider, MenuItemAction, MenuItemOption, OverlayPositioner, Popover, PopoverContainer, PopoverContext, PopoverHeader, ScrollContainer, ScrollContext, Section, SegmentedControl, Select, Spacing, Spinner, Stack, Tab, TabContext, TabList, TabPanel, Text, Tooltip, TooltipContainer, TooltipContext, WindowResizer, adjust, ai, check, chevronDoubleDown, chevronDoubleLeft, chevronDoubleRight, chevronDoubleUp, chevronDown, chevronLeft, chevronRight, chevronUp, clamp, close, colorToHex, colorToHexAlpha, copy, corners, dragHandle, duplicate, eyeDropper, figmaDark, figmaLight, filter, filterFilled, help, hexAlphaToColor, hexToColor, home, imports, info, insert, letterSpacing, lineHeight, link, lowercase, minus, mixed, more, opacity, paddingBottom, paddingHorizontal, paddingLeft, paddingRight, paddingSides, paddingTop, paddingVertical, plus, radius, radiusBottomLeft, radiusBottomRight, radiusTopLeft, radiusTopRight, rotation, roundAlpha, search, select, settings, spacing, spacingHorizontal, spacingVertical, strikethrough, strokeDash, strokeSolid, strokeWidth, titleCase, underline, updates, uppercase, useListContext, useMenuContext, useNumericInput, usePopoverContext, useScrollContext, useStringInput, useTabContext, useTooltipContext, viewGrid, viewList, warning };
export type { AvatarProps, BadgeProps, BarProps, ButtonIconProps, ButtonIconToggleProps, ButtonProps, CalendarProps, CheckboxProps, CheckboxValue, CodeProps, Color, ColorPickerProps, ColorSwatchProps, DividerProps, Glyph, GlyphProps, IconProps, InputGroupProps, InputProps, ListContainerProps, ListContextProps, ListContextValue, ListItemData, ListItemProps, MenuContainerProps, MenuContextProps, MenuContextValue, MenuDividerProps, MenuItemActionProps, MenuItemData, MenuItemOptionProps, MenuProps, NumericInputConfig, NumericInputError, NumericInputParseResult, OverlayPlacement, OverlayPositionerProps, PopoverContainerProps, PopoverContextProps, PopoverContextValue, PopoverHeaderProps, PopoverProps, ScrollContainerProps, ScrollContextProps, ScrollContextValue, SectionPadding, SectionProps, SegmentedControlOption, SegmentedControlProps, SelectOption, SelectProps, SpacingProps, SpinnerProps, StackProps, StringInputConfig, StringInputError, StringInputParseResult, TabContextProps, TabContextValue, TabListProps, TabPanelProps, TabProps, TextProps, TooltipContainerProps, TooltipContextProps, TooltipContextValue, TooltipProps, WindowResizerProps };
