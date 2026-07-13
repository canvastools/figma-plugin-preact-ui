import type { MenuContextValue, MenuContextProps } from './MenuContext.types';
declare const RawMenuContext: import("preact").Context<MenuContextValue | undefined>;
declare const useMenuContext: () => MenuContextValue;
declare const useMenuContextOptional: () => MenuContextValue | undefined;
declare const MenuContext: ({ triggerRef, anchorRef, open, setOpen, children }: MenuContextProps) => import("preact").JSX.Element;
export { MenuContext, useMenuContext, useMenuContextOptional, RawMenuContext };
