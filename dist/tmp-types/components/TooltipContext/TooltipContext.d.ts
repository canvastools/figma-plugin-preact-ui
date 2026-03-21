import type { TooltipContextProps, TooltipContextValue } from './TooltipContext.types';
declare const useTooltipContext: () => TooltipContextValue | undefined;
declare const TooltipContext: ({ children }: TooltipContextProps) => import("preact").JSX.Element;
export { TooltipContext, useTooltipContext };
