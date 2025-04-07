import { Ref } from 'preact';
export declare function typedForwardRef<Props, Element = unknown>(render: (props: Props, ref: Ref<Element>) => preact.VNode): (props: Props & {
    ref?: Ref<Element>;
}) => preact.VNode;
