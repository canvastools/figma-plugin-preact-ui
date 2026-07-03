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
    intentModifier?: 'default' | 'secondary' | 'brand' | 'danger' | 'warning' | 'success' | 'component' | 'component-secondary' | 'slot' | 'slot-secondary';
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
    tabIndex?: number;
    onClick?: (args: {
        event: MouseEvent;
    }) => void;
}

declare const Button: (props: ButtonProps & {
    ref?: preact$1.Ref<HTMLButtonElement> | undefined;
}) => preact$1.VNode | null;

interface GlyphProps {
    variant: IconProps['variant'];
}
type Glyph = (props: GlyphProps) => preact.VNode;
interface IconProps {
    id?: string;
    className?: string;
    glyph?: Glyph;
    intent?: 'neutral' | 'neutral-inverted' | 'neutral-inverted-fixed' | 'brand' | 'danger' | 'warning' | 'success';
    intentModifier?: 'default' | 'secondary' | 'brand' | 'danger' | 'warning' | 'success' | 'component' | 'component-secondary' | 'slot' | 'slot-secondary';
    variant?: 'default' | 'upscaled' | 'downscaled';
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
    tabIndex?: number;
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
    tabIndex?: number;
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
    alpha?: boolean;
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

type GradientPaint = {
    type: 'gradient-linear' | 'gradient-radial' | 'gradient-angular';
    gradientHandlePositions: [Vector, Vector, Vector];
    gradientStops: ColorStop[];
};
type ColorStop = {
    color: Color;
    position: number;
};
type Vector = {
    x: number;
    y: number;
};
type ColorSwatchFill = Color | GradientPaint | Array<Color | GradientPaint>;
interface ColorSwatchProps {
    id?: string;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    fill?: ColorSwatchFill;
    alpha?: boolean;
    disabled?: boolean;
    selected?: boolean;
    selection?: 'default' | 'rainbow';
    tooltip?: preact.ComponentChildren;
    children?: preact.ComponentChildren;
    tabIndex?: number;
    onClick?: (args: {
        event: MouseEvent;
        fill: ColorSwatchFill | undefined;
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
    disabled?: boolean;
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
    focusOnPrefix?: boolean;
    tooltip?: preact.ComponentChildren;
    minLength?: number;
    maxLength?: number;
    maxWidth?: number | string;
    autoFocus?: boolean;
    selectOnFocus?: boolean;
    tabIndex?: number;
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
    reorderItems: (itemIds: string[], targetIndex: number, targetParentPath?: number[]) => void;
    selectionMode?: 'single' | 'multi';
    registerRootElement?: (el: HTMLElement | null) => () => void;
    dragImage?: HTMLDivElement | null;
    onKeyDown?: (args: {
        event: KeyboardEvent;
        itemId: string;
    }) => void;
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
    onKeyDown?: (args: {
        event: KeyboardEvent;
        itemId: string;
    }) => void;
    children: preact.ComponentChildren;
}

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
        event: MouseEvent | KeyboardEvent;
        selected: boolean;
    }) => void;
    hoverable?: boolean;
    collapsed?: boolean;
    collapsable?: boolean;
    onCollapsedChange?: (args: {
        event: MouseEvent | KeyboardEvent;
        collapsed: boolean;
    }) => void;
    collapseIconIntent?: 'secondary' | 'component-secondary' | 'slot-secondary';
    items?: preact.ComponentChildren;
    children?: preact.ComponentChildren;
    tabIndex?: number;
}

type ListItemPropsPick = Pick<ListItemProps, 'variant' | 'padding' | 'draggable' | 'onDragStart' | 'onDragEnd' | 'acceptsChildren' | 'selectable' | 'selectionScope' | 'onSelect' | 'hoverable' | 'collapsed' | 'collapsable' | 'onCollapsedChange'>;
type ListContextPropsPick = Pick<ListContextProps, 'selectedItemIds' | 'selectionMode' | 'deselectOnClickOutside' | 'onItemsChange' | 'onSelectionChange' | 'onKeyDown'>;
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

declare const useListContext: () => ListContextValue;
declare const ListContext: (props: ListContextProps) => preact$1.JSX.Element;

declare const ListItem: (props: ListItemProps & {
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

interface MenuContainerProps {
    id?: string;
    className?: string;
    width?: number;
    height?: number;
    children: preact.ComponentChildren;
}
type MenuContainerPropsPick$1 = Pick<MenuContainerProps, 'width'>;

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
    tabIndex?: number;
    onClick?: (args: {
        event: MouseEvent;
        id: string;
    }) => void;
}

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
    tabIndex?: number;
    onSelectedChange?: (args: {
        event: MouseEvent;
        id: string;
        selected: boolean;
    }) => void;
}

interface MenuItemGroupProps {
    className?: string;
    children: preact.ComponentChildren;
    paddingLikeOption?: boolean;
}

interface MenuDividerProps {
    id?: string;
    className?: string;
    variant?: 'full' | 'inset';
}

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
    autoReposition?: boolean;
    constrainHeight?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    children: preact.ComponentChildren;
}

type MenuItemData = ({
    type: 'group';
} & Pick<MenuItemGroupProps, 'className' | 'children' | 'paddingLikeOption'>) | ({
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
type MenuContainerPropsPick = Pick<MenuContainerProps, 'width' | 'height'>;
type OverlayPositionerPropsPick$2 = Pick<OverlayPositionerProps, 'open' | 'defaultOpen' | 'placement' | 'placementFallback' | 'offsetX' | 'offsetY' | 'offsetEdge' | 'onOpen' | 'onClose'>;
interface MenuProps extends MenuContextPropsPick, MenuContainerPropsPick, OverlayPositionerPropsPick$2 {
    id?: string;
    className?: string;
    items: MenuItemData[];
}

declare const Menu: (props: MenuProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

declare const MenuContainer: (props: MenuContainerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

declare const useMenuContext: () => MenuContextValue;
declare const useMenuContextOptional: () => MenuContextValue | undefined;
declare const MenuContext: ({ triggerRef, anchorRef, open, setOpen, children }: MenuContextProps) => preact$1.JSX.Element;

declare const MenuDivider: (props: MenuDividerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

declare const MenuItemAction: (props: MenuItemActionProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

declare const MenuItemGroup: (props: MenuItemGroupProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

declare const MenuItemOption: (props: MenuItemOptionProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

declare const OverlayPositioner: (props: OverlayPositionerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

interface PopoverHeaderProps {
    id?: string;
    className?: string;
    children: preact.ComponentChildren;
    onClose?: () => void;
}

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

interface PopoverContainerProps {
    id?: string;
    className?: string;
    width?: number;
    height?: number;
    showArrow?: boolean;
    constrainHeight?: boolean;
    tabIndex?: number;
    children: preact.ComponentChildren;
}

type PopoverContextPropsPick = Pick<PopoverContextProps, 'triggerRef' | 'anchorRef'>;
type PopoverContainerPropsPick = Pick<PopoverContainerProps, 'width' | 'height' | 'showArrow' | 'constrainHeight' | 'tabIndex'>;
type OverlayPositionerPropsPick$1 = Pick<OverlayPositionerProps, 'defaultOpen' | 'open' | 'placement' | 'placementFallback' | 'draggable' | 'offsetX' | 'offsetY' | 'offsetEdge' | 'autoReposition' | 'onOpen' | 'onClose'>;
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

declare const PopoverContainer: (props: PopoverContainerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

declare const usePopoverContext: () => PopoverContextValue;
declare const PopoverContext: ({ triggerRef, anchorRef, open, setOpen, children }: PopoverContextProps) => preact$1.JSX.Element;

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
    hasScroll: boolean;
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

type SectionPropsPick = Pick<SectionProps, 'variant' | 'padding' | 'children'>;
interface SectionCollapsibleProps {
    id?: string;
    className?: string;
    collapsed?: boolean;
    onCollapsedChange?: (args: {
        event: MouseEvent | KeyboardEvent;
        collapsed: boolean;
    }) => void;
    sectionProps?: SectionPropsPick;
    children?: preact.ComponentChildren;
    tabIndex?: number;
}

declare const SectionCollapsible: (props: SectionCollapsibleProps & {
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
    tabIndex?: number;
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
    ghost?: boolean;
    error?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    tabIndex?: number;
    prefix?: preact.ComponentChildren;
    tooltip?: preact.ComponentChildren;
    onBlur?: (args: {
        event: FocusEvent;
        value?: string;
    }) => void;
    onFocus?: (args: {
        event: FocusEvent;
        value?: string;
    }) => void;
    onValueChange?: (args: {
        event: MouseEvent;
        value: string;
    }) => void;
    menuContainerProps?: MenuContainerPropsPick$1;
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
    tabIndex?: number;
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
    tooltip?: preact.ComponentChildren;
    children: preact.ComponentChildren;
    tabIndex?: number;
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
    scrollable?: boolean;
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
    intentModifier?: 'default' | 'secondary' | 'brand' | 'danger' | 'warning' | 'success' | 'component' | 'component-secondary' | 'slot' | 'slot-secondary';
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
    selectOnFocus?: boolean;
    tabIndex?: number;
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

interface TooltipContainerProps {
    id?: string;
    className?: string;
    width?: number;
    height?: number;
    showArrow?: boolean;
    children: preact.ComponentChildren;
}

declare const TOOLTIP_DEFAULT_SHOW_DELAY = 1200;
declare const TOOLTIP_DEFAULT_HIDE_DELAY = 480;
type TooltipTrigger = 'hover' | 'click';
type TooltipTimingOptions = {
    showDelay?: number;
    hideDelay?: number;
};
interface TooltipContextValue {
    registerHoverStart: (ref: preact.RefObject<HTMLElement>, setOpen: (open: boolean) => void, options?: TooltipTimingOptions) => void;
    registerHoverEnd: (ref: preact.RefObject<HTMLElement>, setOpen: (open: boolean) => void, options?: TooltipTimingOptions) => void;
    registerPointerDown: (ref: preact.RefObject<HTMLElement>, setOpen: (open: boolean) => void, options?: TooltipTimingOptions) => void;
    registerClick: (ref: preact.RefObject<HTMLElement>, setOpen: (open: boolean) => void, options?: TooltipTimingOptions) => void;
}
interface TooltipContextProps {
    children: preact.ComponentChildren;
}

type TooltipContainerPropsPick = Pick<TooltipContainerProps, 'width' | 'height' | 'showArrow'>;
type OverlayPositionerPropsPick = Pick<OverlayPositionerProps, 'anchorRef' | 'placement' | 'placementFallback' | 'offsetX' | 'offsetY' | 'offsetEdge' | 'onOpen' | 'onClose'>;
interface TooltipProps extends OverlayPositionerPropsPick, TooltipContainerPropsPick, TooltipTimingOptions {
    id?: string;
    className?: string;
    trigger?: TooltipTrigger;
    children: preact.ComponentChildren;
}

declare const Tooltip: (props: TooltipProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

declare const TooltipContainer: (props: TooltipContainerProps & {
    ref?: preact$1.Ref<HTMLDivElement> | undefined;
}) => preact$1.VNode | null;

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
    trimTrailingZeros?: boolean;
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

declare const clamp: (value: number, min: number, max: number) => number;
/** Converts a `Color` (r, g, b in 0–1) to a 6-digit hex string. */
declare const colorToHex: (color: Pick<Color, "r" | "g" | "b">) => string;
/** Converts a 6-digit hex string to a `Color` with r, g, b in 0–1. */
declare const hexToColor: (hex: string, alpha?: number) => Color | undefined;

/** Converts a `Color` (r, g, b, a all in 0–1) to an 8-digit hex string (#RRGGBBAA). */
declare const colorToHexAlpha: (color: Color) => string;
/** Converts a 6- or 8-digit hex string to a `Color` with all channels in 0–1. */
declare const hexAlphaToColor: (hex: string) => Color | undefined;
/** Rounds a 0–1 alpha value to two decimal places. */
declare const roundAlpha: (a: number) => number;
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

declare const adjust: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const ai: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const aiRewrite: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const arrowDown: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const arrowLeft: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const arrowRight: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const arrowUp: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const backgroundBlur: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const blendMode: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const blendModeFilled: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const blur: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const boolean: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const brokenLink: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const bullet: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const check: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const checkCircle: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const chevronDoubleDown: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const chevronDoubleLeft: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const chevronDoubleRight: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const chevronDoubleUp: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const chevronDown: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const chevronLeft: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const chevronRight: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const chevronUp: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const close: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const collapse: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const center: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const color: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const component: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const container: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const copy: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const corners: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const dragHandle: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const dropShadow: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const dropShadowBottom: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const dropShadowBottomLeft: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const dropShadowBottomRight: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const dropShadowLeft: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const dropShadowRight: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const dropShadowTop: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const dropShadowTopLeft: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const dropShadowTopRight: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const duplicate: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const easing: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const effect: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const eye: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const eyeDropper: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const home: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const image: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const imports: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const info: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const innerShadow: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const innerShadowBottomLeft: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const innerShadowBottom: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const innerShadowBottomRight: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const innerShadowLeft: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const innerShadowRight: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const innerShadowTop: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const innerShadowTopLeft: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const innerShadowTopRight: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const insert: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const instance: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const instanceSwap: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const key: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const fillStroke: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const filter: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const filterFilled: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const frame: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const fontSize: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const gradient: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const group: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const help: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const hidden: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const letterSpacing: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const lineHeight: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const link: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const lockLocked: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const lockLockedFilled: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const lockUnlocked: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const lowerCase: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const plus: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const pushToMainComponent: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const radiusBottomLeft: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const radiusBottomRight: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const radiusTopLeft: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const radiusTopRight: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const refresh: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const resetInstance: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const returns: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const rotate: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const minus: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const mixed: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const more: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const number: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const opacity: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const paddingBottom: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const paddingHorizontal: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const paddingLeft: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const paddingRight: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const paddingSides: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const paddingTop: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const paddingVertical: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const pattern: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const people: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const person: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const rotation: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const search: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const section: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const select: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const settings: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const slot: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const solid: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const spacingHorizontal: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const spacingVertical: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const spread: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const strikethrough: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const string: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const sidebarClosed: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const sidebarOpen: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const strokeDash: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const strokeSolid: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const strokeWidth: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const swap: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const text: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const time: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const titleCase: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const unlink: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const underline: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const upperCase: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const variant: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const video: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const viewGrid: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const viewList: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const warning: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const widget: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const x: ({ variant }: GlyphProps) => preact$1.JSX.Element;

declare const y: ({ variant }: GlyphProps) => preact$1.JSX.Element;

export { Avatar, Badge, Bar, Button, ButtonIcon, ButtonIconToggle, Calendar, Checkbox, Code, ColorPicker, ColorSwatch, ControlGroup, Divider, Fog, Icon, Input, List, ListContainer, ListContext, ListItem, Menu, MenuContainer, MenuContext, MenuDivider, MenuItemAction, MenuItemGroup, MenuItemOption, OverlayPositioner, Popover, PopoverContainer, PopoverContext, PopoverHeader, Progress, ScrollContainer, ScrollContext, Section, SectionCollapsible, SegmentedControl, Select, Spacing, Spinner, Stack, Switch, TOOLTIP_DEFAULT_HIDE_DELAY, TOOLTIP_DEFAULT_SHOW_DELAY, Tab, TabContext, TabList, TabPanel, Text, TextArea, TimePicker, Tooltip, TooltipContainer, TooltipContext, WindowResizer, adjust, ai, aiRewrite, arrowDown, arrowLeft, arrowRight, arrowUp, backgroundBlur, bem, blendMode, blendModeFilled, blur, boolean, brokenLink, bullet, center, check, checkCircle, chevronDoubleDown, chevronDoubleLeft, chevronDoubleRight, chevronDoubleUp, chevronDown, chevronLeft, chevronRight, chevronUp, clamp, close, collapse, color, colorToHex, colorToHexAlpha, colorToRgba, component, container, copy, corners, dragHandle, dropShadow, dropShadowBottom, dropShadowBottomLeft, dropShadowBottomRight, dropShadowLeft, dropShadowRight, dropShadowTop, dropShadowTopLeft, dropShadowTopRight, duplicate, easing, effect, eye, eyeDropper, figjamLight, figmaDark, figmaLight, fillStroke, filter, filterFilled, fontSize, frame, gradient, group, help, hexAlphaToColor, hexToColor, hidden, home, image, imports, info, innerShadow, innerShadowBottom, innerShadowBottomLeft, innerShadowBottomRight, innerShadowLeft, innerShadowRight, innerShadowTop, innerShadowTopLeft, innerShadowTopRight, insert, instance, instanceSwap, key, letterSpacing, lineHeight, link, lockLocked, lockLockedFilled, lockUnlocked, lowerCase, minus, mixed, more, number, opacity, paddingBottom, paddingHorizontal, paddingLeft, paddingRight, paddingSides, paddingTop, paddingVertical, pattern, people, person, plus, pushToMainComponent, radius, radiusBottomLeft, radiusBottomRight, radiusTopLeft, radiusTopRight, refresh, resetInstance, returns, rgbaToColor, rotate, rotation, roundAlpha, search, section, select, settings, sidebarClosed, sidebarOpen, slot, solid, spacing, spacingHorizontal, spacingVertical, spread, strikethrough, string, strokeDash, strokeSolid, strokeWidth, swap, text, time, titleCase, underline, unlink, upperCase, useListContext, useMenuContext, useMenuContextOptional, useNumericInput, usePopoverContext, useScrollContext, useScrollContextOptional, useStringInput, useTabContext, useTooltipContext, variant, video, viewGrid, viewList, warning, widget, x, y };
export type { AvatarProps, BadgeProps, BarProps, ButtonIconProps, ButtonIconToggleProps, ButtonProps, CalendarDate, CalendarProps, CheckboxProps, CheckboxValue, CodeProps, Color, ColorPickerProps, ColorPickerType, ColorStop, ColorSwatchProps, ControlGroupProps, DividerProps, FogProps, Glyph, GlyphProps, GradientPaint, IconProps, IconPropsPick, InputProps, ListContainerProps, ListContextProps, ListContextValue, ListItemData, ListItemProps, ListItemPropsPick, ListProps, MenuContainerProps, MenuContainerPropsPick$1 as MenuContainerPropsPick, MenuContextProps, MenuContextValue, MenuDividerProps, MenuItemActionProps, MenuItemData, MenuItemGroupProps, MenuItemOptionProps, MenuProps, NumericInputConfig, NumericInputError, NumericInputParseResult, OverlayPositionerPlacement, OverlayPositionerProps, PopoverContainerProps, PopoverContextProps, PopoverContextValue, PopoverHeaderProps, PopoverProps, ProgressProps, Rgba, ScrollContainerProps, ScrollContextProps, ScrollContextValue, SectionCollapsibleProps, SectionPadding, SectionProps, SegmentedControlOptionData, SegmentedControlProps, SelectOptionData, SelectProps, SpacingProps, SpinnerProps, StackProps, StringInputConfig, StringInputError, StringInputParseResult, SwitchProps, TabContextProps, TabContextValue, TabListProps, TabPanelProps, TabProps, TextAreaProps, TextProps, TimePickerDate, TimePickerProps, TooltipContainerProps, TooltipContextProps, TooltipContextValue, TooltipProps, TooltipTimingOptions, TooltipTrigger, Vector, WindowResizerProps };
