export interface MenuItemActionProps {
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
