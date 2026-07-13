export interface TextProps {
    id?: string;
    className?: string;
    intent?: 'neutral' | 'neutral-inverted' | 'neutral-inverted-fixed' | 'brand' | 'danger' | 'warning' | 'success';
    intentModifier?: 'default' | 'secondary' | 'brand' | 'danger' | 'warning' | 'success' | 'component' | 'component-secondary' | 'slot' | 'slot-secondary';
    variant?: 'heading' | 'body';
    size?: 'small' | 'medium' | 'large';
    strong?: boolean;
    align?: 'left' | 'center' | 'right';
    disabled?: boolean;
    selected?: boolean;
    textColor?: string;
    wrap?: boolean;
    truncate?: boolean;
    inline?: boolean;
    fullWidth?: boolean;
    children: preact.ComponentChildren;
}
