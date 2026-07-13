import "./index245.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { OverlayPositioner as r } from "./index23.es.js";
import { MenuContext as i, useMenuContext as a } from "./index181.es.js";
import { MenuContainer as o } from "./index183.es.js";
import { MenuItemOption as s } from "./index185.es.js";
import { MenuDivider as c } from "./index187.es.js";
import { MenuItemAction as l } from "./index241.es.js";
import { MenuItemGroup as u } from "./index243.es.js";
/* empty css            */
import { useState as d } from "preact/hooks";
import { cloneElement as f } from "preact";
//#region src/components/Menu/Menu.tsx
var p = ({ items: e, width: t, height: i, placement: d, placementFallback: p, offsetX: m, offsetY: h, offsetEdge: g }) => {
	let { anchorRef: _, open: v, focusedItemId: y, setOpen: b } = a(), x = () => {
		b(!1);
	}, S = (e, t) => {
		if (e.type === "group") {
			let { type: r, ...i } = e;
			return /* @__PURE__ */ n(u, { ...i }, t);
		}
		if (e.type === "action") {
			let { type: r, ...i } = e, a = (t) => {
				e.onClick?.(t), e.closeOnClick && x();
			};
			return /* @__PURE__ */ n(l, {
				...i,
				id: e.id,
				onClick: a,
				focused: e.id ? y === e.id : !1
			}, e.id ?? t);
		}
		if (e.type === "option") {
			let { type: r, ...i } = e, a = (t) => {
				e.onSelectedChange?.(t), e.closeOnClick && x();
			};
			return /* @__PURE__ */ n(s, {
				...i,
				id: e.id,
				onSelectedChange: a,
				focused: e.id ? y === e.id : !1
			}, e.id ?? t);
		}
		if (e.type === "custom") return e.children && typeof e.children != "string" ? f(e.children, {
			key: e.id ?? t,
			id: e.id,
			disabled: e.disabled,
			focused: e.id ? y === e.id : !1,
			onClick: (t) => {
				e.onClick?.(t), e.closeOnClick && x();
			}
		}) : null;
		if (e.type === "divider") {
			let { type: r, ...i } = e;
			return /* @__PURE__ */ n(c, { ...i }, t);
		}
		return null;
	};
	return /* @__PURE__ */ n(r, {
		anchorRef: _,
		open: v,
		placement: d,
		placementFallback: p ?? [],
		offsetX: m,
		offsetY: h,
		offsetEdge: g,
		onClose: x,
		closeOnClickOutside: !0,
		children: /* @__PURE__ */ n(o, {
			width: t,
			height: i,
			children: e.map((e, t) => S(e, t))
		})
	});
}, m = t(({ id: t, className: r, items: a, triggerRef: o, anchorRef: s, width: c, height: l, open: u, defaultOpen: f = !1, placement: m = "bottom-left", placementFallback: h = [
	"bottom-right",
	"top-left",
	"top-right"
], offsetX: g = 0, offsetY: _ = 4, offsetEdge: v = 16, onOpen: y, onClose: b, ...x }, S) => {
	let C = e("Menu", void 0, void 0), w = u !== void 0, [T, E] = d(f), D = w ? u : T;
	return /* @__PURE__ */ n(i, {
		triggerRef: o,
		anchorRef: s,
		open: D,
		setOpen: (e) => {
			e !== D && (w || E(e), e ? y?.() : b?.());
		},
		children: D && /* @__PURE__ */ n("div", {
			id: t,
			className: [C, r].join(" ").trim(),
			ref: S,
			...x,
			children: /* @__PURE__ */ n(p, {
				items: a,
				width: c,
				height: l,
				placement: m,
				placementFallback: h,
				offsetX: g,
				offsetY: _,
				offsetEdge: v
			})
		})
	});
});
//#endregion
export { m as Menu };
