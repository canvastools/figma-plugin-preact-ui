import type { SectionProps } from '../Section/Section.types';
type SectionPropsPick = Pick<SectionProps, 'variant' | 'padding' | 'children'>;
export interface SectionCollapsibleProps {
    id?: string;
    className?: string;
    collapsed?: boolean;
    onCollapsedChange?: (args: {
        event: MouseEvent | KeyboardEvent;
        collapsed: boolean;
    }) => void;
    sectionProps?: SectionPropsPick;
    children?: preact.ComponentChildren;
    tabIndex?: number;
}
export {};
