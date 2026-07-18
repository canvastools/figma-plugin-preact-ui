import "./index186.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { uuid as n } from "./index12.es.js";
import { jsx as r } from "./index15.es.js";
import { Text as i } from "./index16.es.js";
import { Icon as a } from "./index34.es.js";
import { check as o } from "./index52.es.js";
import { useMenuContextOptional as s } from "./index182.es.js";
/* empty css            */
import { useEffect as c, useRef as l, useState as u } from "preact/hooks";
import { cloneElement as d } from "preact";
//#region src/components/MenuItemOption/MenuItemOption.tsx
var f = {
	intent: "brand",
	intentModifier: "default"
}, p = () => () => {}, m = () => {}, h = () => {}, g = () => {}, _ = t(({ className: t, id: _, defaultSelected: v = !1, selected: y, focused: b = !1, disabled: x = !1, prefix: S, suffix: C, children: w, onSelectedChange: T, tabIndex: E, ...D }, O) => {
	let [k, A] = u(v), { registerItem: j, clearFocus: M, setHoveredItem: N, setFocusedItem: P } = s() ?? {
		registerItem: p,
		clearFocus: m,
		setHoveredItem: h,
		setFocusedItem: g
	}, F = l(null), I = l(null);
	I.current === null && (I.current = n());
	let L = _ ?? I.current;
	c(() => j({
		id: L,
		ref: F,
		disabled: x
	}), [
		x,
		L,
		j
	]);
	let R = y === void 0 ? k : y, [z, B] = u(!1), V = z || b, H = e("MenuItemOption", void 0, {
		disabled: x,
		focused: b,
		prefix: !!S,
		suffix: !!C,
		selected: R
	}), U = (e) => {
		if (!x) {
			let t = !R;
			y === void 0 && A(t), e.stopPropagation(), T?.({
				event: e,
				id: L,
				selected: t
			}), L && P(L);
		}
	};
	c(() => {
		y !== void 0 && A(y);
	}, [y]);
	let W = () => {
		x || (M(), L && N(L), B(!0));
	}, G = () => {
		x || B(!1);
	}, K = (e, t) => {
		if (Array.isArray(e)) return e.map((e) => K(e, t));
		if (e && typeof e == "object" && "type" in e && typeof e.type != "string") {
			let n = e, r = n.props || {};
			return d(n, { ...t }, r.children);
		}
		return e;
	};
	return /* @__PURE__ */ r("div", {
		id: _,
		className: [H, t].join(" ").trim(),
		"data-pui-interactive": "true",
		ref: (e) => {
			typeof O == "function" ? O(e) : O && (O.current = e), F.current = e;
		},
		...D,
		"data-pui-selected": R ? "true" : void 0,
		tabIndex: E ?? -1,
		onClick: U,
		onMouseEnter: W,
		onMouseLeave: G,
		children: /* @__PURE__ */ r("div", {
			className: "MenuItemOption__content",
			children: [/* @__PURE__ */ r("div", {
				className: "MenuItemOption__selection",
				children: R && /* @__PURE__ */ r(a, {
					glyph: o,
					size: 16,
					intent: V ? "brand" : "neutral-inverted-fixed",
					disabled: x
				})
			}), /* @__PURE__ */ r("div", {
				className: "MenuItemOption__content-container",
				children: [
					S && /* @__PURE__ */ r("div", {
						className: "MenuItemOption__prefix",
						children: V ? K(S, { ...f }) : S
					}),
					w != null && w !== !1 && w !== !0 && /* @__PURE__ */ r("div", {
						className: "MenuItemOption__children",
						children: /* @__PURE__ */ r(i, {
							variant: "body",
							size: "medium",
							intent: V ? "brand" : "neutral-inverted-fixed",
							disabled: x,
							children: V ? K(w, { ...f }) : w
						})
					}),
					C && /* @__PURE__ */ r("div", {
						className: "MenuItemOption__suffix",
						children: V ? K(C, { ...f }) : C
					})
				]
			})]
		})
	});
});
//#endregion
export { _ as MenuItemOption };
