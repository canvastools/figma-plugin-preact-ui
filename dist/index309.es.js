import "./index309.es.css";
import { bem as e } from "./index8.es.js";
import { typedForwardRef as t } from "./index11.es.js";
import { jsx as n } from "./index15.es.js";
import { Text as r } from "./index16.es.js";
import { Tooltip as i } from "./index30.es.js";
import a from "./index307.es.js";
/* empty css            */
import { useEffect as o, useRef as s, useState as c } from "preact/hooks";
import { Fragment as l } from "preact";
var u = t(({ id: t, className: u, locale: d = "en-US", variant: f = "default", label: p, maxWidth: m, defaultDate: h = void 0, date: g, format: _ = "HH:mm", hourPlaceholder: v = "HH", minutePlaceholder: y = "mm", maxTime: b = "23:59:59", minTime: x = "00:00:00", disabled: S = !1, autoFocus: C = !1, tooltip: w, grouped: T, onTimeChange: E, onBlur: D, onFocus: O, onKeyDown: k, ...A }, j) => {
	let M = g !== void 0, N = (e) => e == null || e === "" ? null : typeof e == "number" ? new Date(e) : e, P = (e) => {
		let t = N(e);
		return t ? typeof t == "string" ? t : `${t.getHours().toString().padStart(2, "0")}:${t.getMinutes().toString().padStart(2, "0")}` : "";
	}, F = (e, t) => {
		let n = P(t);
		if (!n) return null;
		let [r, i, a] = n.split(":"), o = Number(r ?? 0), s = Number(i ?? 0), c = Number(a ?? 0), l = new Date(e);
		return l.setHours(o, s, c, 0), l;
	}, [I, L] = c(() => N(h ?? null)), R = M ? g : I, z = (e) => e != null && e !== "", [B, V] = c(() => z(R)), H = e("TimePicker", void 0, {
		filled: B,
		disabled: !!S,
		variant: f,
		label: !!p,
		grouped: !!T,
		groupedPosition: T ?? void 0
	}), U = s(null), W = (e, t) => {
		if (e) {
			if (typeof e == "function") {
				e(t);
				return;
			}
			e.current = t;
		}
	}, G = (e) => {
		U.current = e, W(j, e);
	}, K = (e) => {
		let t = M ? g : I, n = N(e), r = P(n), i = N(t) instanceof Date && n !== null && t instanceof Date ? F(t, n) : n;
		M || L(i), V(z(i)), E?.({
			date: i,
			time: r
		});
	};
	o(() => {
		M && V(z(g));
	}, [M, g]), o(() => {
		if (!C || S) return;
		let e = setTimeout(() => {
			(U.current?.querySelector(".react-time-picker__inputGroup__hour"))?.focus();
		}, 0);
		return () => clearTimeout(e);
	}, [C, S]);
	let q = (e) => {
		let t = e.target, n = t?.closest(".react-time-picker__inputGroup");
		if (!n || t?.closest("input, select, textarea, button")) return;
		let r = n.querySelector(".react-time-picker__inputGroup__hour");
		r && (e.preventDefault(), r.focus());
	}, J = (e) => {
		let t = e.currentTarget ?? void 0, n = e.relatedTarget;
		n && t?.contains(n) || O?.({
			...X(),
			event: e
		});
	}, Y = (e) => {
		let t = e.currentTarget ?? void 0, n = e.relatedTarget;
		n && t?.contains(n) || D?.({
			...X(),
			event: e
		});
		let r = e.target;
		if (!r) return;
		let i = r.classList.contains("react-time-picker__inputGroup__hour"), a = r.classList.contains("react-time-picker__inputGroup__minute");
		if (!i && !a) return;
		if (i) {
			if (r.value !== "") return;
			K(null);
			return;
		}
		if (r.value !== "") return;
		let o = r.closest(".react-time-picker__inputGroup")?.querySelector(".react-time-picker__inputGroup__hour");
		if (!o || o.value === "") return;
		let s = o.value.padStart(2, "0");
		K(`${s}:00`);
	}, X = () => {
		let e = M ? g : I;
		return {
			date: N(e) ?? void 0,
			time: P(e)
		};
	};
	return /* @__PURE__ */ n(l, { children: [/* @__PURE__ */ n("div", {
		id: t,
		className: [H, u].join(" ").trim(),
		ref: G,
		children: [p && /* @__PURE__ */ n(r, {
			className: "TimePicker__label",
			intentModifier: "secondary",
			size: f === "list" ? "medium" : "small",
			truncate: !0,
			children: p
		}), /* @__PURE__ */ n("div", {
			className: "TimePicker__container",
			"data-pui-interactive": "true",
			onKeyDown: (e) => {
				let t = e.key;
				if (k?.({
					...X(),
					event: e
				}), t === "Escape" || t === "Esc" || t === "Enter") {
					e.stopPropagation(), e.preventDefault();
					let t = e.target;
					t && typeof t.blur == "function" && t.blur();
				}
			},
			onMouseDown: q,
			onFocus: J,
			onBlur: Y,
			style: {
				maxWidth: f === "default" ? void 0 : typeof m == "number" ? `${m}px` : m,
				flexShrink: f === "default" ? void 0 : m ? 0 : void 0
			},
			children: /* @__PURE__ */ n(a, {
				...A,
				locale: d,
				value: N(M ? g : I),
				format: _,
				hourPlaceholder: v,
				minutePlaceholder: y,
				maxTime: b,
				minTime: x,
				disabled: S,
				onChange: (e) => {
					K(e);
				},
				disableClock: !0,
				clearIcon: null
			})
		})]
	}), w && /* @__PURE__ */ n(i, {
		anchorRef: U,
		children: w
	})] });
});
//#endregion
export { u as TimePicker };
