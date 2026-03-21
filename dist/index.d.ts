import * as preact$1 from 'preact';

declare const figmaLight: ColorTokenTree;

declare const figmaDark: ColorTokenTree;

declare const figjamLight: ColorTokenTree;

declare const spacing: ColorTokenTree;

declare const radius: ColorTokenTree;

type TokenBranch = {
    [key: string]: string | TokenBranch;
};
type ColorTokenTree = {
    class: string;
    prefix?: string;
    variables: TokenBranch;
};

interface AvatarProps {
    id?: string;
    className?: string;
    variant?: 'circle' | 'square';
    size?: 'small' | 'medium' | 'large';
    src?: string | undefined | null;
    backgroundColor?: string;
    textColor?: string;
    children: preact.ComponentChildren;
}

declare const Avatar: (props: AvatarProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface BadgeProps {
    id?: string;
    className?: string;
    intent?: 'neutral' | 'neutral-inverted' | 'brand' | 'danger' | 'warning' | 'success';
    intentModifier?: 'default' | 'secondary' | 'brand' | 'danger' | 'warning' | 'success';
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    children: preact.ComponentChildren;
}

declare const Badge: (props: BadgeProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface BarProps {
    id?: string;
    className?: string;
    showDividerTop?: boolean;
    showDividerBottom?: boolean;
    children: preact.ComponentChildren;
}

declare const Bar: (props: BarProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface ButtonProps {
    id?: string;
    className?: string;
    intent?: 'neutral' | 'neutral-inverted' | 'brand' | 'danger' | 'success';
    intentModifier?: 'default' | 'secondary' | 'brand' | 'danger' | 'success';
    ghost?: boolean;
    size?: 'medium' | 'large';
    grouped?: 'first' | 'last' | 'middle';
    disabled?: boolean;
    fullWidth?: boolean;
    tooltip?: preact.ComponentChildren;
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    children: preact.ComponentChildren;
    onClick?: (args: {
        event: MouseEvent;
    }) => void;
}

declare const Button: (props: ButtonProps & {
    ref?: preact$1.Ref<HTMLButtonElement> | undefined;
}) => preact$1.VNode | null;

interface GlyphProps {
    variant: IconProps['variant'];
    size: number;
}
type Glyph = (props: GlyphProps) => preact.VNode;
interface IconProps {
    id?: string;
    className?: string;
    glyph?: Glyph;
    intent?: 'neutral' | 'neutral-inverted' | 'neutral-inverted-fixed' | 'brand' | 'danger' | 'warning' | 'success';
    intentModifier?: 'default' | 'secondary' | 'brand' | 'danger' | 'warning' | 'success' | 'component';
    variant?: 'default' | 'upscaled';
    size?: 16 | 24;
    disabled?: boolean;
    selected?: boolean;
    iconColor?: string;
    children?: preact.ComponentChildren;
}
type IconPropsPick = Pick<IconProps, 'glyph' | 'variant' | 'size'>;

interface ButtonIconProps {
    id?: string;
    className?: string;
    intent?: 'neutral';
    intentModifier?: 'default' | 'secondary';
    ghost?: boolean;
    size?: 'medium' | 'large';
    grouped?: 'first' | 'last' | 'middle';
    translucent?: boolean;
    disabled?: boolean;
    selected?: boolean;
    tooltip?: preact.ComponentChildren;
    children?: preact.ComponentChildren;
    icon?: IconPropsPick;
    onClick?: (args: {
        event: MouseEvent;
    }) => void;
}

declare const ButtonIcon: (props: ButtonIconProps & {
    ref?: preact$1.Ref<HTMLButtonElement> | undefined;
}) => preact$1.VNode | null;

interface ButtonIconToggleProps extends ButtonIconProps {
    selected?: boolean;
    defaultSelected?: boolean;
    onSelectedChange?: (args: {
        event: MouseEvent;
        selected: boolean;
    }) => void;
}

declare const ButtonIconToggle: (props: ButtonIconToggleProps & {
    ref?: preact$1.Ref<HTMLButtonElement> | undefined;
}) => preact$1.VNode | null;

type CheckboxValue = boolean;
interface CheckboxProps {
    id?: string;
    className?: string;
    intent?: 'neutral' | 'brand';
    intentModifier?: 'default';
    checked?: CheckboxValue;
    defaultChecked?: CheckboxValue;
    mixed?: boolean;
    disabled?: boolean;
    label?: string;
    onCheckedChange?: (args: {
        event: Event;
        checked: CheckboxValue;
    }) => void;
}

declare const Checkbox: (props: CheckboxProps & {
    ref?: preact$1.Ref<HTMLInputElement> | undefined;
}) => preact$1.VNode | null;

interface CodeProps {
    id?: string;
    className?: string;
    variant?: 'inline' | 'block';
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
type ColorPickerType = 'rgba' | 'hex' | 'hexAlpha';
interface ColorPickerProps {
    id?: string;
    className?: string;
    defaultType?: ColorPickerType;
    type?: ColorPickerType;
    types?: ColorPickerType[];
    color?: Color | null;
    defaultColor?: Color;
    showControls?: boolean;
    width?: number;
    fullWidth?: boolean;
    onTypeChange?: (args: {
        type: ColorPickerType;
    }) => void;
    onColorChange?: (args: {
        color: Color;
        hex: string;
        opacity: number;
    }) => void;
}

declare const ColorPicker: (props: ColorPickerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface ColorSwatchProps {
    id?: string;
    className?: string;
    size?: "small" | "medium" | "large";
    color?: Color;
    disabled?: boolean;
    selected?: boolean;
    selection?: "default" | "rainbow";
    tooltip?: preact.ComponentChildren;
    children?: preact.ComponentChildren;
    onClick?: (args: {
        event: MouseEvent;
        color: Color | undefined;
    }) => void;
}

declare const ColorSwatch: (props: ColorSwatchProps & {
    ref?: preact$1.Ref<HTMLDivElement | HTMLButtonElement> | undefined;
}) => preact$1.VNode | null;

interface ControlGroupProps {
    id?: string;
    className?: string;
    groupFocus?: boolean;
    fullWidth?: boolean;
    children: preact.ComponentChildren;
}

declare const ControlGroup: (props: ControlGroupProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

type CalendarDate = Date | [Date | null, Date | null] | null;
interface CalendarProps {
    id?: string;
    className?: string;
    locale?: string;
    type?: 'iso8601' | 'islamic' | 'hebrew' | 'gregory';
    defaultView?: 'month' | 'year' | 'decade' | 'century';
    view?: 'month' | 'year' | 'decade' | 'century';
    defaultDate?: CalendarDate;
    date?: CalendarDate;
    minDate?: Date;
    maxDate?: Date;
    minDetail?: 'century' | 'decade' | 'year' | 'month';
    maxDetail?: 'century' | 'decade' | 'year' | 'month';
    showNavigation?: boolean;
    navigation?: 'full' | 'simple';
    onDateChange?: (args: {
        date: CalendarDate;
    }) => void;
    onDetailUp?: (args: {
        action: 'onChange' | 'prev' | 'prev2' | 'next' | 'next2' | 'drillUp' | 'drillDown';
        activeStartDate: Date | null;
        date: CalendarDate;
        view: 'month' | 'year' | 'decade' | 'century';
    }) => void;
    onDetailDown?: (args: {
        action: 'onChange' | 'prev' | 'prev2' | 'next' | 'next2' | 'drillUp' | 'drillDown';
        activeStartDate: Date | null;
        date: CalendarDate;
        view: 'month' | 'year' | 'decade' | 'century';
    }) => void;
    onViewChange?: (args: {
        action: 'onChange' | 'prev' | 'prev2' | 'next' | 'next2' | 'drillUp' | 'drillDown';
        activeStartDate: Date | null;
        date: CalendarDate;
        view: 'month' | 'year' | 'decade' | 'century';
    }) => void;
}

declare const Calendar: (props: CalendarProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface DividerProps {
    id?: string;
    className?: string;
    variant?: 'full' | 'inset';
}

declare const Divider: (props: DividerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface FogProps {
    id?: string;
    className?: string;
    delay?: number;
    children?: preact.ComponentChildren;
}

declare const Fog: (props: FogProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

declare const Icon: (props: IconProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface InputProps {
    id?: string;
    className?: string;
    type?: 'text' | 'number';
    variant?: 'default' | 'list';
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    value?: string;
    ghost?: boolean;
    grouped?: 'first' | 'last' | 'middle';
    error?: boolean;
    disabled?: boolean;
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    showSuffixOnHover?: boolean;
    focusOnDoubleClick?: boolean;
    tooltip?: preact.ComponentChildren;
    minLength?: number;
    maxLength?: number;
    maxWidth?: number | string;
    autoFocus?: boolean;
    onValueChange?: (args: {
        event: Event;
        value: string;
    }) => void;
    onBlur?: (args: {
        event: FocusEvent;
        value: string;
    }) => void;
    onFocus?: (args: {
        event: FocusEvent;
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

type ListItemPropsPick = Pick<ListItemProps, 'variant' | 'padding' | 'draggable' | 'onDragStart' | 'onDragEnd' | 'acceptsChildren' | 'selectable' | 'selectionScope' | 'onSelect' | 'hoverable' | 'collapsed' | 'collapsable' | 'onCollapsedChange'>;
type ListContextPropsPick = Pick<ListContextProps, 'selectedItemIds' | 'selectionMode' | 'deselectOnClickOutside' | 'onItemsChange' | 'onSelectionChange'>;
interface ListProps extends ListContextPropsPick {
    id?: string;
    className?: string;
    items: ListItemData[];
    listItemProps: ListItemPropsPick | ((item: ListItemData) => ListItemPropsPick);
    renderItem?: (item: ListItemData) => preact.ComponentChildren;
}

declare const List: (props: ListProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface ListContainerProps {
    id?: string;
    className?: string;
    children: preact.ComponentChildren;
}

declare const ListContainer: (props: ListContainerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface ListItemData {
    id: string;
    selected?: boolean;
    items?: ListItemData[];
}
interface ListContextValue {
    items: ListItemData[];
    selectedItemIds: Set<string>;
    selectionOriginIds?: Set<string>;
    deselectOnClickOutside?: boolean;
    setSelection: (itemIds: string[]) => void;
    toggleSelect: (itemId: string, options?: {
        range?: boolean;
        additive?: boolean;
    }) => void;
    registerItem?: (id: string, meta: {
        selectable?: boolean;
        selectionScope?: 'individual' | 'withDescendants';
    }) => () => void;
    getPathForId?: (id: string) => number[] | null;
    registerItemPath?: (id: string, path: number[]) => () => void;
    reorderItems: (itemIds: string[], targetIndex: number, targetParentPath?: number[]) => void;
    selectionMode?: 'single' | 'multi';
    registerRootElement?: (el: HTMLElement | null) => () => void;
    dragImage?: HTMLDivElement | null;
}
interface ListContextProps {
    items?: ListItemData[];
    selectedItemIds?: string[];
    selectionMode?: 'single' | 'multi';
    deselectOnClickOutside?: boolean;
    onItemsChange?: (args: {
        items: ListItemData[];
    }) => void;
    onSelectionChange?: (args: {
        selectedItemIds: string[];
    }) => void;
    children: preact.ComponentChildren;
}

declare const useListContext: () => ListContextValue;
declare const ListContext: (props: ListContextProps) => preact$1.JSX.Element;

type ListItemPadding = keyof typeof spacing.variables;
interface ListItemProps {
    id: string;
    className?: string;
    nestingLevel: number;
    variant?: 'default' | 'layer';
    padding?: {
        top?: ListItemPadding;
        right?: ListItemPadding;
        bottom?: ListItemPadding;
        left?: ListItemPadding;
    };
    draggable?: boolean;
    onDragStart?: (args: {
        event: DragEvent;
    }) => void;
    onDragEnd?: (args: {
        event: DragEvent;
    }) => void;
    acceptsChildren?: boolean;
    selectable?: boolean;
    selectionScope?: 'individual' | 'withDescendants';
    onSelect?: (args: {
        event: MouseEvent;
        selected: boolean;
    }) => void;
    hoverable?: boolean;
    collapsed?: boolean;
    collapsable?: boolean;
    onCollapsedChange?: (args: {
        event: MouseEvent;
        collapsed: boolean;
    }) => void;
    items?: preact.ComponentChildren;
    children?: preact.ComponentChildren;
}

declare const ListItem: (props: ListItemProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

type MenuItemData = ({
    type: 'action';
    closeOnClick?: boolean;
} & Pick<MenuItemActionProps, 'id' | 'intentModifier' | 'disabled' | 'prefix' | 'suffix' | 'children' | 'paddingLikeOption' | 'onClick'>) | ({
    type: 'option';
    closeOnClick?: boolean;
} & Pick<MenuItemOptionProps, 'id' | 'defaultSelected' | 'selected' | 'disabled' | 'prefix' | 'suffix' | 'children' | 'onSelectedChange'>) | {
    type: 'custom';
    id?: string;
    disabled?: boolean;
    children?: preact.ComponentChildren;
    onClick?: (args: {
        event: MouseEvent;
        id: string;
    }) => void;
    closeOnClick?: boolean;
} | ({
    type: 'divider';
} & Pick<MenuDividerProps, 'className' | 'variant'>);
type MenuContextPropsPick = Pick<MenuContextProps, 'triggerRef' | 'anchorRef'>;
type MenuContainerPropsPick$1 = Pick<MenuContainerProps, 'width' | 'height'>;
type OverlayPositionerPropsPick$2 = Pick<OverlayPositionerProps, 'open' | 'defaultOpen' | 'placement' | 'placementFallback' | 'offsetX' | 'offsetY' | 'offsetEdge' | 'onOpen' | 'onClose'>;
interface MenuProps extends MenuContextPropsPick, MenuContainerPropsPick$1, OverlayPositionerPropsPick$2 {
    id?: string;
    className?: string;
    items: MenuItemData[];
}

declare const Menu: (props: MenuProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface MenuContainerProps {
    id?: string;
    className?: string;
    width?: number;
    height?: number;
    children: preact.ComponentChildren;
}
type MenuContainerPropsPick = Pick<MenuContainerProps, 'width'>;

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
    setFocusedItem: (id: string | null) => void;
    clearFocus: () => void;
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
declare const useMenuContextOptional: () => MenuContextValue | undefined;
declare const MenuContext: ({ triggerRef, anchorRef, open, setOpen, children }: MenuContextProps) => preact$1.JSX.Element;

interface MenuDividerProps {
    id?: string;
    className?: string;
    variant?: 'full' | 'inset';
}

declare const MenuDivider: (props: MenuDividerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface MenuItemActionProps {
    id?: string;
    className?: string;
    intentModifier?: 'default' | 'danger';
    disabled?: boolean;
    focused?: boolean;
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    children: preact.ComponentChildren;
    paddingLikeOption?: boolean;
    onClick?: (args: {
        event: MouseEvent;
        id: string;
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
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    children: preact.ComponentChildren;
    onSelectedChange?: (args: {
        event: MouseEvent;
        id: string;
        selected: boolean;
    }) => void;
}

declare const MenuItemOption: (props: MenuItemOptionProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

type OverlayPositionerPlacement = 'over' | 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'left-top' | 'left-bottom' | 'right' | 'right-top' | 'right-bottom';
interface OverlayPositionerProps {
    id?: string;
    className?: string;
    anchorRef: preact.RefObject<HTMLElement>;
    open?: boolean;
    defaultOpen?: boolean;
    placement?: OverlayPositionerPlacement;
    placementFallback?: OverlayPositionerPlacement[] | undefined;
    trigger?: 'click' | 'hover';
    draggable?: boolean;
    offsetX?: number;
    offsetY?: number;
    offsetEdge?: number;
    closeOnClickOutside?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    children: preact.ComponentChildren;
}

declare const OverlayPositioner: (props: OverlayPositionerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

type PopoverContextPropsPick = Pick<PopoverContextProps, 'triggerRef' | 'anchorRef'>;
type PopoverContainerPropsPick = Pick<PopoverContainerProps, 'width' | 'height' | 'showArrow'>;
type OverlayPositionerPropsPick$1 = Pick<OverlayPositionerProps, 'defaultOpen' | 'open' | 'placement' | 'placementFallback' | 'draggable' | 'offsetX' | 'offsetY' | 'offsetEdge' | 'onOpen' | 'onClose'>;
type PopoverHeaderPropsPick = Pick<PopoverHeaderProps, 'children'>;
interface PopoverProps extends PopoverContextPropsPick, OverlayPositionerPropsPick$1, PopoverContainerPropsPick {
    id?: string;
    className?: string;
    children: preact.ComponentChildren;
    popoverHeaderProps?: PopoverHeaderPropsPick;
}

declare const Popover: (props: PopoverProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface PopoverContainerProps {
    id?: string;
    className?: string;
    width?: number;
    height?: number;
    showArrow?: boolean;
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
declare const PopoverContext: ({ triggerRef, anchorRef, open, setOpen, children }: PopoverContextProps) => preact$1.JSX.Element;

interface PopoverHeaderProps {
    id?: string;
    className?: string;
    children: preact.ComponentChildren;
    onClose?: () => void;
}

declare const PopoverHeader: (props: PopoverHeaderProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface ProgressProps {
    id?: string;
    className?: string;
    variant?: 'indeterminate' | 'determinate';
    delay?: number;
    value?: number;
}

declare const Progress: (props: ProgressProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface ScrollContextValue {
    positionY: number;
    isAtTop: boolean;
    isAtBottom: boolean;
    onScroll: (event: Event) => void;
    setPositionY: (positionY: number) => void;
    resetPositionY: () => void;
    spyActiveId: string | null;
    registerSpyTarget: (id: string, ref: HTMLElement | null) => void;
    registerScrollRoot: (ref: HTMLElement | null) => void;
}
interface ScrollContextProps {
    defaultPositionY?: number;
    positionY?: number;
    onScroll?: (args: {
        positionY: number;
    }) => void;
    spyThreshold?: number;
    onSpyTargetChange?: (args: {
        id: string | null;
    }) => void;
    children: preact.ComponentChildren;
}

declare const useScrollContext: () => ScrollContextValue;
declare const useScrollContextOptional: () => ScrollContextValue | undefined;
declare const ScrollContext: ({ defaultPositionY, positionY: controlledPositionY, onScroll, spyThreshold, onSpyTargetChange, children, }: ScrollContextProps) => preact$1.JSX.Element;

interface ScrollContainerProps {
    id?: string;
    className?: string;
    children: preact.ComponentChildren;
}

declare const ScrollContainer: (props: ScrollContainerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

type SectionPadding = keyof typeof spacing.variables;
interface SectionProps {
    id?: string;
    className?: string;
    variant?: 'default' | 'stacked';
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

interface SegmentedControlOptionData {
    value: string;
    label: string;
    icon?: IconPropsPick;
}
interface SegmentedControlProps {
    id?: string;
    className?: string;
    options: SegmentedControlOptionData[];
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    onValueChange?: (args: {
        event: MouseEvent | KeyboardEvent;
        value: string;
    }) => void;
}

declare const SegmentedControl: (props: SegmentedControlProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface SelectOptionData {
    label: string;
    value: string;
    disabled?: boolean;
    children?: preact.ComponentChildren;
}
interface SelectProps {
    id?: string;
    className?: string;
    options?: SelectOptionData[] | SelectOptionData[][];
    placeholder?: string;
    defaultValue?: string;
    value?: string;
    grouped?: 'first' | 'last' | 'middle';
    error?: boolean;
    disabled?: boolean;
    prefix?: preact.ComponentChildren;
    tooltip?: preact.ComponentChildren;
    onBlur?: () => void;
    onFocus?: () => void;
    onValueChange?: (args: {
        event: MouseEvent;
        value: string;
    }) => void;
    menuContainerProps?: MenuContainerPropsPick;
}

declare const Select: (props: SelectProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface SpacingProps {
    id?: string;
    className?: string;
    direction?: 'row' | 'column';
    size: keyof typeof spacing.variables;
}

declare const Spacing: (props: SpacingProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface SpinnerProps {
    id?: string;
    className?: string;
    size?: 'small' | 'medium';
}

declare const Spinner: (props: SpinnerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface StackProps {
    id?: string;
    className?: string;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    spacing?: keyof typeof spacing.variables;
    x?: 'start' | 'center' | 'end';
    y?: 'start' | 'center' | 'end';
    fullHeight?: boolean;
    fullWidth?: boolean;
    children?: preact.ComponentChildren;
}

declare const Stack: (props: StackProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

type SwitchValue = boolean;
interface SwitchProps {
    id?: string;
    className?: string;
    checked?: SwitchValue;
    defaultChecked?: SwitchValue;
    disabled?: boolean;
    onCheckedChange?: (args: {
        event: Event;
        checked: SwitchValue;
    }) => void;
}

declare const Switch: (props: SwitchProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface TabProps {
    id: string;
    className?: string;
    variant?: 'default' | 'single';
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    children: preact.ComponentChildren;
    onClick?: (args: {
        event: MouseEvent;
        id: string;
    }) => void;
}

declare const Tab: (props: TabProps & {
    ref?: preact$1.Ref<HTMLButtonElement> | undefined;
}) => preact$1.VNode | null;

interface TabContextValue {
    activeId: string;
    onTabChange: (id: string) => void;
    setActiveTab: (id: string) => void;
    registerTab: (id: string, ref: HTMLButtonElement | null) => void;
    setFocusedTab: (id?: string) => void;
}
interface TabContextProps {
    defaultActiveId?: string;
    activeId?: string;
    children: preact.ComponentChildren;
    onTabChange?: (args: {
        id: string;
    }) => void;
}

declare const useTabContext: () => TabContextValue;
declare const TabContext: ({ defaultActiveId, activeId: controlledActiveId, onTabChange, children }: TabContextProps) => preact$1.JSX.Element;

interface TabListProps {
    id?: string;
    className?: string;
    variant?: 'default' | 'list';
    children: preact.ComponentChildren;
}

declare const TabList: (props: TabListProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface TabPanelProps {
    id?: string;
    className?: string;
    tabId: string;
    fullHeight?: boolean;
    children: preact.ComponentChildren;
}

declare const TabPanel: (props: TabPanelProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface TextProps {
    id?: string;
    className?: string;
    intent?: 'neutral' | 'neutral-inverted' | 'neutral-inverted-fixed' | 'brand' | 'danger' | 'warning' | 'success';
    intentModifier?: 'default' | 'secondary' | 'brand' | 'danger' | 'warning' | 'success' | 'component';
    variant?: 'heading' | 'body';
    size?: 'small' | 'medium' | 'large';
    strong?: boolean;
    align?: 'left' | 'center' | 'right';
    disabled?: boolean;
    selected?: boolean;
    textColor?: string;
    wrap?: boolean;
    truncate?: boolean;
    inline?: boolean;
    fullWidth?: boolean;
    children: preact.ComponentChildren;
}

declare const Text: (props: TextProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface TextAreaProps {
    id?: string;
    className?: string;
    variant?: 'default' | 'list';
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    value?: string;
    error?: boolean;
    disabled?: boolean;
    tooltip?: preact.ComponentChildren;
    minLength?: number;
    maxLength?: number;
    maxWidth?: number | string;
    minHeight?: number | string;
    maxHeight?: number | string;
    resize?: 'y';
    autoFocus?: boolean;
    onValueChange?: (args: {
        event: Event;
        value: string;
    }) => void;
    onBlur?: (args: {
        event: FocusEvent;
        value: string;
    }) => void;
    onFocus?: (args: {
        event: FocusEvent;
        value: string;
    }) => void;
    onKeyDown?: (args: {
        event: KeyboardEvent;
        value: string;
    }) => void;
}

declare const TextArea: (props: TextAreaProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

type TimePickerDate = Date | string | number | null;
interface TimePickerProps {
    id?: string;
    className?: string;
    locale?: string;
    variant?: 'default' | 'list';
    label?: preact.ComponentChildren;
    maxWidth?: number | string;
    defaultDate?: TimePickerDate;
    date?: TimePickerDate;
    format?: string;
    hourPlaceholder?: string;
    minutePlaceholder?: string;
    maxTime?: string;
    minTime?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    grouped?: 'first' | 'last' | 'middle';
    tooltip?: preact.ComponentChildren;
    onTimeChange?: (args: {
        date: TimePickerDate | undefined;
        time: string;
    }) => void;
    onBlur?: (args: {
        event: FocusEvent;
        date: TimePickerDate | undefined;
        time: string;
    }) => void;
    onFocus?: (args: {
        event: FocusEvent;
        date: TimePickerDate | undefined;
        time: string;
    }) => void;
    onKeyDown?: (args: {
        event: KeyboardEvent;
        date: TimePickerDate | undefined;
        time: string;
    }) => void;
}

declare const TimePicker: (props: TimePickerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

type TooltipContainerPropsPick = Pick<TooltipContainerProps, 'width' | 'height' | 'showArrow'>;
type OverlayPositionerPropsPick = Pick<OverlayPositionerProps, 'anchorRef' | 'placement' | 'placementFallback' | 'offsetX' | 'offsetY' | 'offsetEdge' | 'onOpen' | 'onClose'>;
interface TooltipProps extends OverlayPositionerPropsPick, TooltipContainerPropsPick {
    id?: string;
    className?: string;
    triggerRef?: preact.RefObject<HTMLElement | null>;
    children: preact.ComponentChildren;
}

declare const Tooltip: (props: TooltipProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface TooltipContainerProps {
    id?: string;
    className?: string;
    width?: number;
    height?: number;
    showArrow?: boolean;
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
    id?: string;
    className?: string;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    onResize?: (args: {
        width: number;
        height: number;
    }) => void;
}

declare const WindowResizer: (props: WindowResizerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

type NumericInputError = 'required' | 'invalid_number' | 'less_than_min' | 'greater_than_max' | 'not_integer';
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
    math?: boolean;
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
    /** `string` is used when `doubleValue` and the field contains a comma (pair display). */
    handleKeyDown: (args: {
        event: KeyboardEvent;
        value: string;
    }, onValueChange?: (next: number | string) => void) => void;
    parse: (raw: string, unit?: string) => NumericInputParseResult;
}

declare const useNumericInput: (config: NumericInputConfig) => NumericInput;

type StringInputError = 'required' | 'too_short' | 'too_long' | 'invalid_characters';
type StringInputConfig = {
    value: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    allowedCharacters?: string;
    trim?: boolean;
    format?: (value: string) => string;
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

type Modifiers = Record<string, string | boolean | undefined>;
/**
 * Generates BEM-style class names in the format Block[__Element][_modName-modVal or _modName]
 *
 * @param block - the block name
 * @param element - the element name (without __), if any
 * @param mods - an object with modifiers (string or boolean values)
 * @returns a space-separated string of class names
 */
declare const bem: (block: string, element?: string, mods?: Modifiers) => string;

/** Converts a `Color` (r, g, b in 0–1) to a 6-digit hex string. */
declare const colorToHex: (color: Pick<Color, "r" | "g" | "b">) => string;
/** Converts a 6-digit hex string to a `Color` with r, g, b in 0–1. */
declare const hexToColor: (hex: string, alpha?: number) => Color | undefined;

/** Converts a `Color` (r, g, b, a all in 0–1) to an 8-digit hex string (#RRGGBBAA). */
declare const colorToHexAlpha: (color: Color) => string;
/** Converts a 6- or 8-digit hex string to a `Color` with all channels in 0–1. */
declare const hexAlphaToColor: (hex: string) => Color | undefined;
/** RGBA with r, g, b in 0–255, a in 0–1. */
type Rgba = {
    r: number;
    g: number;
    b: number;
    a: number;
};
/** Converts a `Color` (0–1) to RGBA (r, g, b in 0–255, a in 0–1). */
declare const colorToRgba: (color: Color) => Rgba;
/** Converts RGBA (r, g, b in 0–255, a in 0–1) to a `Color` (0–1). */
declare const rgbaToColor: (rgba: Rgba) => Color;

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

declare const home: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const imports: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const info: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const insert: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const instance: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const filter: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const filterFilled: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const frame: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const letterSpacing: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const lineHeight: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const link: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const lowerCase: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const plus: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const radiusBottomLeft: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const radiusBottomRight: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const radiusTopLeft: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const radiusTopRight: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const refresh: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const returns: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

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

declare const people: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const person: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

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

declare const upperCase: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const viewGrid: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const viewList: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const warning: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

declare const widget: ({ variant, size }: GlyphProps) => preact$1.JSX.Element;

export { Avatar, Badge, Bar, Button, ButtonIcon, ButtonIconToggle, Calendar, Checkbox, Code, ColorPicker, ColorSwatch, ControlGroup, Divider, Fog, Icon, Input, List, ListContainer, ListContext, ListItem, Menu, MenuContainer, MenuContext, MenuDivider, MenuItemAction, MenuItemOption, OverlayPositioner, Popover, PopoverContainer, PopoverContext, PopoverHeader, Progress, ScrollContainer, ScrollContext, Section, SegmentedControl, Select, Spacing, Spinner, Stack, Switch, Tab, TabContext, TabList, TabPanel, Text, TextArea, TimePicker, Tooltip, TooltipContainer, TooltipContext, WindowResizer, adjust, ai, bem, check, chevronDoubleDown, chevronDoubleLeft, chevronDoubleRight, chevronDoubleUp, chevronDown, chevronLeft, chevronRight, chevronUp, close, colorToHex, colorToHexAlpha, colorToRgba, copy, corners, dragHandle, duplicate, eyeDropper, figjamLight, figmaDark, figmaLight, filter, filterFilled, frame, hexAlphaToColor, hexToColor, home, imports, info, insert, instance, letterSpacing, lineHeight, link, lowerCase, minus, mixed, more, opacity, paddingBottom, paddingHorizontal, paddingLeft, paddingRight, paddingSides, paddingTop, paddingVertical, people, person, plus, radius, radiusBottomLeft, radiusBottomRight, radiusTopLeft, radiusTopRight, refresh, returns, rgbaToColor, rotation, search, select, settings, spacing, spacingHorizontal, spacingVertical, strikethrough, strokeDash, strokeSolid, strokeWidth, titleCase, underline, upperCase, useListContext, useMenuContext, useMenuContextOptional, useNumericInput, usePopoverContext, useScrollContext, useScrollContextOptional, useStringInput, useTabContext, useTooltipContext, viewGrid, viewList, warning, widget };
export type { AvatarProps, BadgeProps, BarProps, ButtonIconProps, ButtonIconToggleProps, ButtonProps, CalendarDate, CalendarProps, CheckboxProps, CheckboxValue, CodeProps, Color, ColorPickerProps, ColorPickerType, ColorSwatchProps, ControlGroupProps, DividerProps, FogProps, Glyph, GlyphProps, IconProps, IconPropsPick, InputProps, ListContainerProps, ListContextProps, ListContextValue, ListItemData, ListItemProps, ListItemPropsPick, ListProps, MenuContainerProps, MenuContainerPropsPick, MenuContextProps, MenuContextValue, MenuDividerProps, MenuItemActionProps, MenuItemData, MenuItemOptionProps, MenuProps, NumericInputConfig, NumericInputError, NumericInputParseResult, OverlayPositionerPlacement, OverlayPositionerProps, PopoverContainerProps, PopoverContextProps, PopoverContextValue, PopoverHeaderProps, PopoverProps, ProgressProps, Rgba, ScrollContainerProps, ScrollContextProps, ScrollContextValue, SectionPadding, SectionProps, SegmentedControlOptionData, SegmentedControlProps, SelectOptionData, SelectProps, SpacingProps, SpinnerProps, StackProps, StringInputConfig, StringInputError, StringInputParseResult, SwitchProps, TabContextProps, TabContextValue, TabListProps, TabPanelProps, TabProps, TextAreaProps, TextProps, TimePickerDate, TimePickerProps, TooltipContainerProps, TooltipContextProps, TooltipContextValue, TooltipProps, WindowResizerProps };
