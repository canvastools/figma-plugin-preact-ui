import "./index239.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { ListContext as r } from "./index233.es.js";
import { ListContainer as i } from "./index235.es.js";
import { ListItem as a } from "./index237.es.js";
/* empty css            */
var o = t(({ id: t, className: o, items: s, listItemProps: c, renderItem: l, selectedItemIds: u, selectionMode: d, deselectOnClickOutside: f, onItemsChange: p, onSelectionChange: m, onKeyDown: h, ...g }, _) => {
	let v = e("List", void 0, void 0), y = (e, t) => /* @__PURE__ */ n(i, { children: e.map((e) => {
		let { id: r, items: i } = e, { variant: o, padding: s, draggable: u, onDragStart: d, onDragEnd: f, acceptsChildren: p, selectable: m, selectionScope: h, onSelect: g, hoverable: _, collapsed: v, collapsable: b, onCollapsedChange: x } = typeof c == "function" ? c(e) : c, S = l ? l(e) : void 0;
		return /* @__PURE__ */ n(a, {
			id: r,
			variant: o,
			padding: s,
			nestingLevel: t,
			draggable: u,
			onDragStart: d,
			onDragEnd: f,
			acceptsChildren: p,
			selectable: m,
			selectionScope: h,
			onSelect: g,
			hoverable: _,
			collapsed: v,
			collapsable: b,
			onCollapsedChange: x,
			items: i && i.length ? y(i, t + 1) : void 0,
			children: S
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
