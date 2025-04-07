import { ComponentChildren } from 'preact';
export interface ButtonProps {
    children?: ComponentChildren;
    onClick: () => void;
}
