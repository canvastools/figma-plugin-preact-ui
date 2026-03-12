import { forwardRef } from 'preact/compat'
import type { Ref } from 'preact'

function typedForwardRef<Props, Element = unknown>(render: (props: Props, ref: Ref<Element>) => preact.VNode | null) {
  return forwardRef(render) as (props: Props & { ref?: Ref<Element> }) => preact.VNode | null
}

export { typedForwardRef }
