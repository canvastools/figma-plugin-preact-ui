export interface TabListProps {
    id?: string;
    className?: string;
    variant?: 'default' | 'list';
    scrollable?: boolean;
    children: preact.ComponentChildren;
}
