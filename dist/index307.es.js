"use client";
import { jsx as e } from "./index15.es.js";
import { clsx as t } from "./index207.es.js";
import n from "./index282.es.js";
import r from "./index289.es.js";
import i from "./index293.es.js";
import a from "./index306.es.js";
import { createElement as o, createPortal as ee, useCallback as s, useEffect as c, useMemo as l, useRef as u, useState as te } from "preact/compat";
//#region ../node_modules/.pnpm/react-time-picker@8.0.3_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-time-picker/dist/TimePicker.js
var d = "react-time-picker", f = [
	"mousedown",
	"focusin",
	"touchstart"
], p = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 19,
	height: 19,
	viewBox: "0 0 19 19",
	stroke: "black",
	strokeWidth: 2
}, ne = e("svg", {
	...p,
	"aria-hidden": "true",
	className: `${d}__clock-button__icon ${d}__button__icon`,
	fill: "none",
	children: [e("circle", {
		cx: "9.5",
		cy: "9.5",
		r: "7.5"
	}), e("path", { d: "M9.5 4.5 v5 h4" })]
}), re = e("svg", {
	...p,
	"aria-hidden": "true",
	className: `${d}__clear-button__icon ${d}__button__icon`,
	children: [e("line", {
		x1: "4",
		x2: "15",
		y1: "4",
		y2: "15"
	}), e("line", {
		x1: "15",
		x2: "4",
		y1: "4",
		y2: "15"
	})]
});
function m(p) {
	let { amPmAriaLabel: m, autoFocus: h, className: g, clearAriaLabel: _, clearIcon: v = re, clockAriaLabel: y, clockIcon: b = ne, closeClock: x = !0, "data-testid": S, hourAriaLabel: C, hourPlaceholder: ie, disableClock: w, disabled: T, format: ae, id: oe, isOpen: E = null, locale: D, maxTime: se, maxDetail: ce = "minute", minTime: le, minuteAriaLabel: ue, minutePlaceholder: de, name: O = "time", nativeInputAriaLabel: k, onClockClose: A, onClockOpen: j, onChange: M, onFocus: N, onInvalidChange: P, openClockOnFocus: F = !0, required: I, value: L, secondAriaLabel: R, secondPlaceholder: z, shouldCloseClock: B, shouldOpenClock: V, ...H } = p, [U, W] = te(E), G = u(null), K = u(null);
	c(() => {
		W(E);
	}, [E]);
	function q({ reason: e }) {
		V && !V({ reason: e }) || (W(!0), j && j());
	}
	let J = s(({ reason: e }) => {
		B && !B({ reason: e }) || (W(!1), A && A());
	}, [A, B]);
	function fe() {
		U ? J({ reason: "buttonClick" }) : q({ reason: "buttonClick" });
	}
	function Y(e, t = x) {
		t && J({ reason: "select" }), M && M(e);
	}
	function pe(e) {
		N && N(e), !(T || U || !F || e.target.dataset.select === "true") && q({ reason: "focus" });
	}
	let X = s((e) => {
		e.key === "Escape" && J({ reason: "escape" });
	}, [J]);
	function me() {
		Y(null);
	}
	function Z(e) {
		e.stopPropagation();
	}
	let Q = s((e) => {
		let { current: t } = G, { current: n } = K, r = "composedPath" in e ? e.composedPath()[0] : e.target;
		r && t && !t.contains(r) && (!n || !n.contains(r)) && J({ reason: "outsideAction" });
	}, [J]), $ = s((e = U) => {
		for (let t of f) e ? document.addEventListener(t, Q) : document.removeEventListener(t, Q);
		e ? document.addEventListener("keydown", X) : document.removeEventListener("keydown", X);
	}, [
		U,
		Q,
		X
	]);
	c(() => ($(), () => {
		$(!1);
	}), [$]);
	function he() {
		let [t] = Array.isArray(L) ? L : [L], n = {
			amPmAriaLabel: m,
			hourAriaLabel: C,
			minuteAriaLabel: ue,
			nativeInputAriaLabel: k,
			secondAriaLabel: R
		}, r = {
			hourPlaceholder: ie,
			minutePlaceholder: de,
			secondPlaceholder: z
		};
		return e("div", {
			className: `${d}__wrapper`,
			children: [
				e(a, {
					...n,
					...r,
					autoFocus: h,
					className: `${d}__inputGroup`,
					disabled: T,
					format: ae,
					isClockOpen: U,
					locale: D,
					maxDetail: ce,
					maxTime: se,
					minTime: le,
					name: O,
					onChange: Y,
					onInvalidChange: P,
					required: I,
					value: t
				}),
				v !== null && e("button", {
					"aria-label": _,
					className: `${d}__clear-button ${d}__button`,
					"data-testid": "clear-button",
					disabled: T,
					onClick: me,
					onFocus: Z,
					type: "button",
					children: typeof v == "function" ? o(v) : v
				}),
				b !== null && !w && e("button", {
					"aria-expanded": U || !1,
					"aria-label": y,
					className: `${d}__clock-button ${d}__button`,
					"data-testid": "clock-button",
					disabled: T,
					onClick: fe,
					onFocus: Z,
					type: "button",
					children: typeof b == "function" ? o(b) : b
				})
			]
		});
	}
	function ge() {
		if (U === null || w) return null;
		let { clockProps: n, portalContainer: a, value: o } = p, s = `${d}__clock`, c = t(s, `${s}--${U ? "open" : "closed"}`), [l] = Array.isArray(o) ? o : [o], u = e(r, {
			locale: D,
			value: l,
			...n
		});
		return a ? ee(e("div", {
			ref: K,
			className: c,
			children: u
		}), a) : e(i, { children: e("div", {
			ref: (e) => {
				e && !U && e.removeAttribute("style");
			},
			className: c,
			children: u
		}) });
	}
	let _e = l(() => n(H), [H]);
	return e("div", {
		className: t(d, `${d}--${U ? "open" : "closed"}`, `${d}--${T ? "disabled" : "enabled"}`, g),
		"data-testid": S,
		id: oe,
		..._e,
		onFocus: pe,
		ref: G,
		children: [he(), ge()]
	});
}
//#endregion
export { m as default };
