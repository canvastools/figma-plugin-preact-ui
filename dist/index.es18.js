import "./index.es18.css";
import { jsx as o } from "./index.es143.js";
import { ListContainer as z } from "./index.es19.js";
import { ListContext as A } from "./index.es20.js";
import { ListItem as B } from "./index.es21.js";
/* empty css            */
import { typedForwardRef as G } from "./index.es145.js";
import { bem as H } from "./index.es62.js";
const J = ({
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
  ...v
}, L) => {
  const C = H("List", void 0, void 0), s = (b, a) => /* @__PURE__ */ o(z, { children: b.map((e) => {
    const { id: c, items: n } = e, u = typeof t == "function" ? t(e) : t, {
      variant: x,
      padding: S,
      draggable: j,
      onDragStart: y,
      onDragEnd: D,
      acceptsChildren: N,
      selectable: w,
      selectionScope: E,
      onSelect: F,
      hoverable: I,
      collapsed: R,
      collapsable: _,
      onCollapsedChange: k
    } = u, q = i ? i(e) : void 0;
    return /* @__PURE__ */ o(
      B,
      {
        id: c,
        variant: x,
        padding: S,
        nestingLevel: a,
        draggable: j,
        onDragStart: y,
        onDragEnd: D,
        acceptsChildren: N,
        selectable: w,
        selectionScope: E,
        onSelect: F,
        hoverable: I,
        collapsed: R,
        collapsable: _,
        onCollapsedChange: k,
        items: n && n.length ? s(n, a + 1) : void 0,
        children: q
      },
      c
    );
  }) });
  return /* @__PURE__ */ o(
    A,
    {
      items: r,
      selectedItemIds: m,
      selectionMode: p,
      deselectOnClickOutside: f,
      onItemsChange: g,
      onSelectionChange: h,
      children: /* @__PURE__ */ o("div", { id: d, className: [C, l].join(" ").trim(), ref: L, ...v, children: s(r, 0) })
    }
  );
}, W = G(J);
export {
  W as List
};
