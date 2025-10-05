import { cloneElement } from "preact"

export const override = (
  node: preact.ComponentChildren,
  props: Record<string, unknown>
): preact.ComponentChildren => {
  if (Array.isArray(node)) {
    return node.map((n) => override(n, props))
  }

  if (
    node &&
    typeof node === "object" &&
    "type" in node &&
    typeof node.type !== "string"
  ) {
    const vnode = node as preact.VNode
    const originalProps = vnode.props || {}

    const overrideProps: Record<string, unknown> = { ...props }

    return cloneElement(vnode, overrideProps, originalProps.children)
  }

  return node
}
