import type { Ref } from 'preact';
declare function typedForwardRef<Props, Element = unknown>(render: (props: Props, ref: Ref<Element>) => preact.VNode | null): (props: Props & {
    ref?: Ref<Element>;
}) => preact.VNode | null;
export { typedForwardRef };
