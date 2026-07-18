import "./index189.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
import { OverlayPositioner as r } from "./index24.es.js";
import { Tooltip as i } from "./index30.es.js";
import { Icon as a } from "./index34.es.js";
import { chevronDown as o } from "./index58.es.js";
/* empty css            */
import { MenuContext as s, useMenuContext as c } from "./index182.es.js";
import { MenuContainer as l } from "./index184.es.js";
import { MenuItemOption as u } from "./index186.es.js";
import { MenuDivider as d } from "./index188.es.js";
import { useEffect as f, useMemo as p, useRef as m, useState as h } from "preact/hooks";
import { Fragment as g, cloneElement as _ } from "preact";
//#region src/components/Select/Select.tsx
var v = ({ id: t, className: r, options: c, placeholder: l, defaultValue: u, value: d, grouped: _, ghost: v = !1, error: b = !1, disabled: x = !1, fullWidth: S = !1, tabIndex: C, prefix: w, menuContainerProps: T, tooltip: E, onBlur: D, onFocus: O, onValueChange: k, ...A }, j) => {
	let [M, N] = h(!1), [P, F] = h(!1), [I, L] = h(d === void 0 ? u : d), R = m(null), z = !!(d ?? I ?? "").length, B = p(() => {
		let e = c ?? [];
		return Array.isArray(e) && e.length > 0 && Array.isArray(e[0]) ? e : [e];
	}, [c]), V = p(() => B.reduce((e, t) => e.concat(t), []), [B]);
	f(() => {
		d !== void 0 && L(d);
	}, [d]);
	let H = (e) => {
		x || (N(!0), O?.({
			event: e,
			value: d ?? I
		}));
	}, U = (e) => {
		x || (N(!1), D?.({
			event: e,
			value: d ?? I
		}));
	}, W = (e) => {
		(e.key === "Escape" || e.key === "Esc") && !P && e.currentTarget.blur();
	}, G = (e) => {
		let t = e.currentTarget, n = e.target;
		for (; n && n !== t;) {
			let t = n.getAttribute("data-pui-interactive");
			if (t === "true") {
				e.stopPropagation();
				return;
			}
			if (t === "false") return;
			n = n.parentElement;
		}
	};
	return /* @__PURE__ */ n(g, { children: [
		/* @__PURE__ */ n("div", {
			id: t,
			className: [e("Select", void 0, {
				filled: z,
				grouped: !!_,
				groupedPosition: _ ?? void 0,
				prefix: !!w,
				ghost: v,
				fullWidth: S,
				error: b,
				disabled: x,
				focused: M,
				open: P
			}), r].join(" ").trim(),
			"data-pui-interactive": "true",
			ref: (e) => {
				if (R.current = e, j) if (typeof j == "function") j(e);
				else {
					let t = j;
					t.current = e;
				}
			},
			...A,
			tabIndex: C ?? (x ? -1 : 0),
			onFocus: H,
			onBlur: U,
			onKeyDown: W,
			children: [
				w && /* @__PURE__ */ n("div", {
					className: "Select__prefix",
					onMouseDown: G,
					children: w
				}),
				/* @__PURE__ */ n("div", {
					className: "Select__content",
					children: z ? V.find((e) => e.value === I)?.label : l
				}),
				/* @__PURE__ */ n("div", {
					className: "Select__suffix",
					children: /* @__PURE__ */ n(a, {
						glyph: o,
						size: 16,
						intent: "neutral",
						disabled: x,
						variant: "downscaled"
					})
				})
			]
		}),
		/* @__PURE__ */ n(s, {
			triggerRef: R,
			open: P,
			setOpen: (e) => {
				x || F(e);
			},
			children: /* @__PURE__ */ n(y, {
				menuContainerProps: T,
				groups: B,
				selectedValue: I,
				onSelectedChange: ({ event: e, value: t }) => {
					t !== void 0 && L(t), k?.({
						event: e,
						value: t
					}), F(!1), e && e.detail === 0 && requestAnimationFrame(() => {
						R.current?.focus();
					});
				}
			})
		}),
		E && /* @__PURE__ */ n(i, {
			anchorRef: R,
			children: E
		})
	] });
}, y = ({ menuContainerProps: e, groups: t, selectedValue: i, onSelectedChange: a }) => {
	let o = c();
	return /* @__PURE__ */ n(r, {
		anchorRef: o.anchorRef,
		placement: "over",
		offsetEdge: 16,
		open: o.open,
		closeOnClickOutside: !0,
		onClose: () => o.setOpen(!1),
		children: /* @__PURE__ */ n(l, {
			...e,
			children: t.map((e, t) => /* @__PURE__ */ n(g, { children: [t > 0 ? /* @__PURE__ */ n(d, { variant: "inset" }) : null, e.map((e) => e.children && typeof e.children != "string" ? _(e.children, {
				key: `${t}-${e.value}`,
				id: e.value,
				label: e.label,
				value: e.value,
				disabled: e.disabled,
				focused: o.focusedItemId === e.value,
				selected: e.value === i,
				onSelectedChange: ({ event: t }) => a?.({
					event: t,
					value: e.value
				})
			}) : /* @__PURE__ */ n(u, {
				disabled: e.disabled,
				id: e.value,
				focused: o.focusedItemId === e.value,
				selected: e.value === i,
				onSelectedChange: ({ event: t }) => a?.({
					event: t,
					value: e.value
				}),
				children: e.label
			}, `${t}-${e.value}`))] }, `group-${t}`))
		})
	});
}, b = t(v);
//#endregion
export { b as Select };
