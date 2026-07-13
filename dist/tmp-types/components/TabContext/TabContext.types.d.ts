export interface TabContextValue {
    activeId: string;
    onTabChange: (id: string) => void;
    setActiveTab: (id: string) => void;
    registerTab: (id: string, ref: HTMLButtonElement | null) => void;
    setFocusedTab: (id?: string) => void;
}
export interface TabContextProps {
    defaultActiveId?: string;
    activeId?: string;
    children: preact.ComponentChildren;
    onTabChange?: (args: {
        id: string;
    }) => void;
}
