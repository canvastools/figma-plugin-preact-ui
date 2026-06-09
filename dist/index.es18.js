import "./index.es18.css";
import { jsx as o } from "./index.es178.js";
import { ListContainer as A } from "./index.es19.js";
import { ListContext as B } from "./index.es20.js";
import { ListItem as G } from "./index.es21.js";
/* empty css            */
import { typedForwardRef as H } from "./index.es180.js";
import { bem as J } from "./index.es63.js";
const K = ({
  id: d,
  className: l,
  items: r,
  listItemProps: t,
  renderItem: i,
  selectedItemIds: m,
  selectionMode: p,
  deselectOnClickOutside: f,
  onItemsChange: g,
  onSelectionChange: h,
  onKeyDown: v,
  ...L
}, C) => {
  const b = J("List", void 0, void 0), s = (u, a) => /* @__PURE__ */ o(A, { children: u.map((e) => {
    const { id: c, items: n } = e, x = typeof t == "function" ? t(e) : t, {
      variant: S,
      padding: j,
      draggable: y,
      onDragStart: D,
      onDragEnd: N,
      acceptsChildren: w,
      selectable: E,
      selectionScope: F,
      onSelect: I,
      hoverable: R,
      collapsed: _,
      collapsable: k,
      onCollapsedChange: q
    } = x, z = i ? i(e) : void 0;
    return /* @__PURE__ */ o(
      G,
      {
        id: c,
        variant: S,
        padding: j,
        nestingLevel: a,
        draggable: y,
        onDragStart: D,
        onDragEnd: N,
        acceptsChildren: w,
        selectable: E,
        selectionScope: F,
        onSelect: I,
        hoverable: R,
        collapsed: _,
        collapsable: k,
        onCollapsedChange: q,
        items: n && n.length ? s(n, a + 1) : void 0,
        children: z
      },
      c
    );
  }) });
  return /* @__PURE__ */ o(
    B,
    {
      items: r,
      selectedItemIds: m,
      selectionMode: p,
      deselectOnClickOutside: f,
      onItemsChange: g,
      onSelectionChange: h,
      onKeyDown: v,
      children: /* @__PURE__ */ o("div", { id: d, className: [b, l].join(" ").trim(), ref: C, ...L, children: s(r, 0) })
    }
  );
}, X = H(K);
export {
  X as List
};
