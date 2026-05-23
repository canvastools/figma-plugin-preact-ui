export interface TabProps {
    id: string;
    className?: string;
    variant?: 'default' | 'single';
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    tooltip?: preact.ComponentChildren;
    children: preact.ComponentChildren;
    onClick?: (args: {
        event: MouseEvent;
        id: string;
    }) => void;
}
