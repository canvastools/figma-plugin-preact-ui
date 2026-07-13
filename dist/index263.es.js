import "./index263.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index10.es.js";
import { jsx as n } from "./index14.es.js";
import { Text as r } from "./index15.es.js";
import { Tooltip as i } from "./index29.es.js";
import { Icon as a } from "./index33.es.js";
/* empty css            */
import { useEffect as o, useMemo as s, useRef as c, useState as l } from "preact/hooks";
import { Fragment as u } from "preact";
var d = t(({ id: t, className: d, options: f = [], value: p, defaultValue: m, disabled: h = !1, fullWidth: g = !1, onValueChange: _, tabIndex: v, ...y }, b) => {
	let [x, S] = l(m), C = p !== void 0, w = C ? p : x;
	o(() => {
		C && S(p);
	}, [C, p]);
	let T = e("SegmentedControl", void 0, { fullWidth: g }), E = c([]);
	E.current = f.map((e, t) => E.current[t] || null);
	let D = c([]);
	D.current = f.map((e, t) => D.current[t] || { current: null });
	let O = c(null), k = s(() => f.findIndex((e) => e.value === w), [f, w]), A = (e) => {
		let t = Math.max(0, Math.min(f.length - 1, e)), n = E.current[t];
		n && n.focus();
	}, j = (e, t) => {
		C || S(t), _?.({
			event: e,
			value: t
		});
	};
	o(() => {
		let e = (e) => {
			e.key === "Tab" && (O.current = e.shiftKey ? "backward" : "forward");
		}, t = () => {
			O.current = null;
		}, n = (e) => {
			let t = e.target;
			if (!t || E.current.findIndex((e) => e === t) === -1) return;
			let n = O.current;
			if (!n) return;
			let r = n === "backward" ? f.length - 1 : 0;
			if (r < 0) return;
			let i = E.current[r];
			i && i !== t && i.focus(), O.current = null;
		};
		return window.addEventListener("keydown", e), window.addEventListener("pointerdown", t, !0), window.addEventListener("focusin", n), () => {
			window.removeEventListener("keydown", e), window.removeEventListener("pointerdown", t, !0), window.removeEventListener("focusin", n);
		};
	}, [f.length]);
	let M = (e) => {
		if (h) return;
		let t = e, n = t.key, r = n === "ArrowLeft" || n === "ArrowRight" || n === "ArrowUp" || n === "ArrowDown", i = n === "Tab";
		if (r || i) {
			let e = t.target, r = e ? E.current.findIndex((t) => t === e) : -1, a = r >= 0 ? r : k >= 0 ? k : 0;
			if (i) {
				O.current = null;
				let e = f.length - 1;
				if (!t.shiftKey && a === e || t.shiftKey && a === 0) return;
				t.stopPropagation(), t.preventDefault();
				let n = a + (t.shiftKey ? -1 : 1);
				A(n);
				return;
			}
			t.stopPropagation(), t.preventDefault();
			let o = (a + (n === "ArrowRight" || n === "ArrowDown" ? 1 : -1) + f.length) % f.length;
			A(o);
			return;
		}
		if (n === "Enter" || n === " " || n === "Spacebar") {
			t.stopPropagation(), t.preventDefault();
			let e = t.target, n = e ? E.current.findIndex((t) => t === e) : -1, r = n >= 0 ? n : k >= 0 ? k : -1;
			if (r >= 0) {
				let e = f[r];
				e && j(t, e.value);
			}
			return;
		}
		if (n === "Escape" || n === "Esc") {
			t.stopPropagation(), t.preventDefault();
			let e = t.target;
			e && typeof e.blur == "function" && e.blur();
		}
	};
	return /* @__PURE__ */ n("div", {
		id: t,
		className: [T, d].join(" ").trim(),
		"data-pui-interactive": "true",
		ref: b,
		...y,
		onKeyDown: M,
		children: f.map((t, o) => {
			let s = t.value === w, c = D.current[o];
			return /* @__PURE__ */ n(u, { children: [/* @__PURE__ */ n("button", {
				className: e("SegmentedControl", "item", {
					selected: s,
					disabled: h,
					icon: !!t.icon
				}),
				ref: (e) => {
					E.current[o] = e, c.current = e;
				},
				tabIndex: v === void 0 ? s ? 0 : -1 : s ? v : -1,
				onClick: (e) => j(e, t.value),
				disabled: h,
				children: [t.icon && /* @__PURE__ */ n(a, {
					glyph: typeof t.icon.glyph == "function" ? t.icon.glyph : void 0,
					intent: "neutral",
					intentModifier: s ? "default" : "secondary",
					variant: t.icon.variant,
					size: t.icon.size,
					disabled: h,
					children: typeof t.icon.glyph == "function" ? void 0 : t.icon.glyph
				}), !t.icon && /* @__PURE__ */ n(r, {
					intent: "neutral",
					intentModifier: s ? "default" : "secondary",
					disabled: h,
					children: t.label
				})]
			}, t.value), t.icon && /* @__PURE__ */ n(i, {
				anchorRef: c,
				children: t.label
			})] }, t.value);
		})
	});
});
//#endregion
export { d as SegmentedControl };
