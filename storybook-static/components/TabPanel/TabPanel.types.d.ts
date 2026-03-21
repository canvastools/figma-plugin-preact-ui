export interface TabPanelProps {
    id?: string;
    className?: string;
    tabId: string;
    fullHeight?: boolean;
    children: preact.ComponentChildren;
}
