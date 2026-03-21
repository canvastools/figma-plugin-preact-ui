import { TabContextValue, TabContextProps } from './TabContext.types';
declare const useTabContext: () => TabContextValue;
declare const TabContext: ({ defaultActiveId, activeId: controlledActiveId, onTabChange, children }: TabContextProps) => import("preact").JSX.Element;
export { TabContext, useTabContext };
