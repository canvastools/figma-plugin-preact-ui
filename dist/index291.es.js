"use client";
import { __toESM as e } from "./index2.es.js";
import { jsx as t } from "./index14.es.js";
import n from "./index289.es.js";
import { require_warning as r } from "./index290.es.js";
import { Children as i, useCallback as a, useEffect as o, useRef as s } from "preact/compat";
//#region ../node_modules/.pnpm/react-fit@3.0.0_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-fit/dist/Fit.js
var c = /* @__PURE__ */ e(r(), 1), l = function(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}, u = typeof window < "u" && "MutationObserver" in window;
function d(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function f(e) {
	let t = e.parentElement;
	for (; t;) {
		let { overflow: e } = window.getComputedStyle(t);
		if (e.split(" ").every((e) => e === "auto" || e === "scroll")) return t;
		t = t.parentElement;
	}
	return document.documentElement;
}
function p({ axis: e, container: t, element: r, invertAxis: i, scrollContainer: a, secondary: o, spacing: s }) {
	let l = window.getComputedStyle(r), u = t.parentElement;
	if (!u) return;
	let f = n(u, a), p = n(u, document.documentElement), m = e === "x", h = m ? "left" : "top", g = m ? "right" : "bottom", _ = m ? "width" : "height", v = `overflow${d(h)}`, y = `overflow${d(g)}`, b = `scroll${d(h)}`, x = d(_), S = `offset${x}`, C = `client${x}`, w = `min-${_}`, T = a[S] - a[C], E = typeof s == "object" ? s[h] : s, D = -Math.max(f[v], p[v] + document.documentElement[b]) - E, O = typeof s == "object" ? s[g] : s, k = -Math.max(f[y], p[y] - document.documentElement[b]) - O - T;
	o && (D += u[C], k += u[C]);
	let A = r[S];
	function j() {
		r.style[h] = "auto", r.style[g] = o ? "0" : "100%";
	}
	function M() {
		r.style[h] = o ? "0" : "100%", r.style[g] = "auto";
	}
	function N(e, t) {
		let n = A <= e;
		return n && t(), n;
	}
	function P() {
		return N(D, j);
	}
	function F() {
		return N(k, M);
	}
	function I() {
		let e = D > k, t = l.getPropertyValue(w), n = t ? Number.parseInt(t, 10) : null;
		function i(e) {
			(0, c.default)(!n || e >= n, `<Fit />'s child will not fit anywhere with its current ${w} of ${n}px.`);
			let t = Math.max(e, n || 0);
			(0, c.default)(!1, `<Fit />'s child needed to have its ${_} decreased to ${t}px.`), r.style[_] = `${t}px`;
		}
		e ? (i(D), j()) : (i(k), M());
	}
	let L;
	L = i ? P() || F() : F() || P(), L || I();
}
function m(e) {
	p(e);
}
function h(e) {
	p(Object.assign(Object.assign({}, e), {
		axis: e.axis === "x" ? "y" : "x",
		secondary: !0
	}));
}
function g(e) {
	let { invertAxis: t, invertSecondaryAxis: n } = e, r = l(e, ["invertAxis", "invertSecondaryAxis"]);
	m(Object.assign(Object.assign({}, r), { invertAxis: t })), h(Object.assign(Object.assign({}, r), { invertAxis: n }));
}
function _({ children: e, invertAxis: n, invertSecondaryAxis: r, mainAxis: c = "y", spacing: l = 8 }) {
	let d = s(void 0), p = s(void 0), m = s(void 0), h = s(void 0), _ = s(void 0), v = a(() => {
		if (!_.current || !d.current || !p.current) return;
		let e = p.current.clientWidth, t = p.current.clientHeight;
		if (m.current === e && h.current === t) return;
		m.current = e, h.current = t;
		let i = d.current.parentElement;
		if (!i) return;
		let { position: a } = window.getComputedStyle(p.current);
		a !== "absolute" && (p.current.style.position = "absolute");
		let { position: o } = window.getComputedStyle(i);
		o !== "relative" && o !== "absolute" && (i.style.position = "relative"), g({
			axis: c,
			container: d.current,
			element: p.current,
			invertAxis: n,
			invertSecondaryAxis: r,
			scrollContainer: _.current,
			spacing: l
		});
	}, [
		n,
		r,
		c,
		l
	]), y = i.only(e);
	o(() => {
		v();
		function e() {
			v();
		}
		u && p.current && new MutationObserver(e).observe(p.current, {
			attributes: !0,
			attributeFilter: ["class", "style"]
		});
	}, [v]);
	function b(e) {
		!e || !(e instanceof HTMLElement) || (p.current = e, _.current = f(e));
	}
	return t("span", {
		ref: (e) => {
			e && (d.current = e, b(e?.firstElementChild));
		},
		style: { display: "contents" },
		children: y
	});
}
//#endregion
export { _ as default };
