import { Fragment as e, jsx as t } from "./index14.es.js";
import { clsx as n } from "./index206.es.js";
import r, { getFontShorthand as i } from "./index298.es.js";
import { useEffect as a, useLayoutEffect as o } from "preact/compat";
//#region ../node_modules/.pnpm/react-time-picker@8.0.3_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-time-picker/dist/TimeInput/Input.js
var s = typeof window < "u", c = s ? o : a, l = s && /(MSIE|Trident\/|Edge\/)/.test(navigator.userAgent), u = s && /Firefox/.test(navigator.userAgent);
function d(e) {
	let { target: t } = e;
	l ? requestAnimationFrame(() => t.select()) : t.select();
}
function f(e) {
	if (document.readyState === "complete") return;
	function t() {
		r(e);
	}
	window.addEventListener("load", t);
}
function p(e) {
	if (!document.fonts) return;
	let t = i(e);
	if (!t || document.fonts.check(t)) return;
	function n() {
		r(e);
	}
	document.fonts.addEventListener("loadingdone", n);
}
function m(e) {
	return e && "selectionStart" in e && e.selectionStart !== null && "selectionEnd" in e && e.selectionEnd !== null ? e.value.slice(e.selectionStart, e.selectionEnd) : "getSelection" in window ? window.getSelection()?.toString() : null;
}
function h(e) {
	if (e !== null) return function(t) {
		if (u) return;
		let { key: n, target: r } = t, { value: i } = r, a = n.length === 1 && /\d/.test(n), o = m(r);
		(!a || !(o || i.length < e)) && t.preventDefault();
	};
}
function g({ ariaLabel: i, autoFocus: a, className: o, disabled: s, inputRef: l, max: u, min: m, name: g, nameForClass: _, onChange: v, onKeyDown: y, onKeyUp: b, placeholder: x = "--", required: S, showLeadingZeros: C, step: w, value: T }) {
	c(() => {
		!l || !l.current || (r(l.current), f(l.current), p(l.current));
	}, [l, T]);
	let E = C && T && Number(T) < 10 && (T === "0" || !T.toString().startsWith("0")), D = u ? u.toString().length : null;
	return t(e, { children: [E ? t("span", {
		className: `${o}__leadingZero`,
		children: "0"
	}) : null, t("input", {
		"aria-label": i,
		autoComplete: "off",
		autoFocus: a,
		className: n(`${o}__input`, `${o}__${_ || g}`, E && `${o}__input--hasLeadingZero`),
		"data-input": "true",
		disabled: s,
		inputMode: "numeric",
		max: u,
		min: m,
		name: g,
		onChange: v,
		onFocus: d,
		onKeyDown: y,
		onKeyPress: h(D),
		onKeyUp: (e) => {
			r(e.target), b && b(e);
		},
		placeholder: x,
		ref: l,
		required: S,
		step: w,
		type: "number",
		value: T === null ? "" : T
	})] });
}
//#endregion
export { g as default };
