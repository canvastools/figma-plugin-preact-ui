import type { ScrollContextValue, ScrollContextProps } from './ScrollContext.types';
declare const useScrollContext: () => ScrollContextValue;
declare const useScrollContextOptional: () => ScrollContextValue | undefined;
declare const ScrollContext: ({ defaultPositionY, positionY: controlledPositionY, onScroll, spyThreshold, onSpyTargetChange, children, }: ScrollContextProps) => import("preact").JSX.Element;
export { ScrollContext, useScrollContext, useScrollContextOptional };
