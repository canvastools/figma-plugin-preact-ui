import "./index240.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
import { ListContext as r } from "./index234.es.js";
import { ListContainer as i } from "./index236.es.js";
import { ListItem as a } from "./index238.es.js";
/* empty css            */
var o = t(({ id: t, className: o, items: s, listItemProps: c, renderItem: l, selectedItemIds: u, selectionMode: d, deselectOnClickOutside: f, onItemsChange: p, onSelectionChange: m, onKeyDown: h, ...g }, _) => {
	let v = e("List", void 0, void 0), y = (e, t) => /* @__PURE__ */ n(i, { children: e.map((e) => {
		let { id: r, items: i } = e, { variant: o, draggable: s, onDragStart: u, onDragEnd: d, acceptsChildren: f, selectable: p, selectionScope: m, onSelect: h, hoverable: g, collapsed: _, collapsable: v, onCollapsedChange: b } = typeof c == "function" ? c(e) : c, x = l ? l(e) : void 0;
		return /* @__PURE__ */ n(a, {
			id: r,
			variant: o,
			nestingLevel: t,
			draggable: s,
			onDragStart: u,
			onDragEnd: d,
			acceptsChildren: f,
			selectable: p,
			selectionScope: m,
			onSelect: h,
			hoverable: g,
			collapsed: _,
			collapsable: v,
			onCollapsedChange: b,
			items: i && i.length ? y(i, t + 1) : void 0,
			children: x
		}, r);
	}) });
	return /* @__PURE__ */ n(r, {
		items: s,
		selectedItemIds: u,
		selectionMode: d,
		deselectOnClickOutside: f,
		onItemsChange: p,
		onSelectionChange: m,
		onKeyDown: h,
		children: /* @__PURE__ */ n("div", {
			id: t,
			className: [v, o].join(" ").trim(),
			ref: _,
			...g,
			children: y(s, 0)
		})
	});
});
//#endregion
export { o as List };
