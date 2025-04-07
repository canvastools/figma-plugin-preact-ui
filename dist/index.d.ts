import * as preact from 'preact';
import { ComponentChildren } from 'preact';

interface ButtonProps {
    children?: ComponentChildren;
    onClick: () => void;
}

declare const Button: (props: ButtonProps & {
    ref?: preact.Ref<HTMLButtonElement> | undefined;
}) => preact.VNode;

declare const Loader: () => preact.JSX.Element;

type LoaderProps = Record<string, never>;

export { Button, Loader };
export type { ButtonProps, LoaderProps };
