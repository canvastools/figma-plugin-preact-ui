import "./index242.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { uuid as n } from "./index12.es.js";
import { jsx as r } from "./index15.es.js";
import { Text as i } from "./index16.es.js";
import { useMenuContextOptional as a } from "./index182.es.js";
/* empty css            */
import { useEffect as o, useRef as s, useState as c } from "preact/hooks";
import { Fragment as l, cloneElement as u } from "preact";
//#region src/components/MenuItemAction/MenuItemAction.tsx
var d = {
	intent: "brand",
	intentModifier: "default"
}, f = () => () => {}, p = () => {}, m = () => {}, h = () => {}, g = t(({ className: t, id: g, intentModifier: _ = "default", disabled: v = !1, focused: y = !1, prefix: b, suffix: x, children: S, paddingLikeOption: C = !1, onClick: w, tabIndex: T, ...E }, D) => {
	let { registerItem: O, clearFocus: k, setHoveredItem: A, setFocusedItem: j } = a() ?? {
		registerItem: f,
		clearFocus: p,
		setHoveredItem: m,
		setFocusedItem: h
	}, M = s(null), N = s(null);
	N.current === null && (N.current = n());
	let P = g ?? N.current;
	o(() => O({
		id: P,
		ref: M,
		disabled: v
	}), [
		v,
		P,
		O
	]);
	let [F, I] = c(!1), L = F || y, R = e("MenuItemAction", void 0, {
		intentModifier: _,
		disabled: v,
		focused: y,
		prefix: !!b,
		suffix: !!x,
		paddingLikeOption: C
	}), z = (e) => {
		if (v) {
			e.preventDefault();
			return;
		}
		e.stopPropagation(), w?.({
			event: e,
			id: P
		}), P && j(P);
	}, B = () => {
		v || (k(), P && A(P), I(!0));
	}, V = () => {
		v || I(!1);
	}, H = (e, t) => {
		if (Array.isArray(e)) return e.map((e) => H(e, t));
		if (e && typeof e == "object" && "type" in e && typeof e.type != "string") {
			let n = e, r = n.props || {};
			return u(n, { ...t }, r.children);
		}
		return e;
	};
	return /* @__PURE__ */ r(l, { children: /* @__PURE__ */ r("div", {
		id: g,
		className: [R, t].join(" ").trim(),
		"data-pui-interactive": "true",
		ref: (e) => {
			typeof D == "function" ? D(e) : D && (D.current = e), M.current = e;
		},
		...E,
		tabIndex: T ?? -1,
		onClick: z,
		onMouseEnter: B,
		onMouseLeave: V,
		children: /* @__PURE__ */ r("div", {
			className: "MenuItemAction__content",
			children: [
				b && /* @__PURE__ */ r("div", {
					className: "MenuItemAction__prefix",
					children: L ? H(b, { ...d }) : b
				}),
				S != null && S !== !1 && S !== !0 && /* @__PURE__ */ r("div", {
					className: "MenuItemAction__children",
					children: /* @__PURE__ */ r(i, {
						variant: "body",
						size: "medium",
						intent: L ? _ === "danger" ? "danger" : "brand" : "neutral-inverted-fixed",
						intentModifier: L ? "default" : _,
						disabled: v,
						children: L ? H(S, { ...d }) : S
					})
				}),
				x && /* @__PURE__ */ r("div", {
					className: "MenuItemAction__suffix",
					children: L ? H(x, { ...d }) : x
				})
			]
		})
	}) });
});
//#endregion
export { g as MenuItemAction };
