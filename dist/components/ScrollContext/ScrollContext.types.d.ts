export interface ScrollContextValue {
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
export interface ScrollContextProps {
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
