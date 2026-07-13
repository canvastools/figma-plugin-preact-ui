"use client";
import { jsx as e } from "./index14.es.js";
import { getHours as t, getHoursMinutes as n, getHoursMinutesSeconds as r, getMinutes as i, getSeconds as a } from "./index202.es.js";
import o from "./index293.es.js";
import { convert12to24 as s, convert24to12 as c } from "./index294.es.js";
import { getFormatter as l, getNumberFormatter as u } from "./index295.es.js";
import { getAmPmLabels as ee } from "./index296.es.js";
import te from "./index297.es.js";
import ne from "./index300.es.js";
import re from "./index301.es.js";
import ie from "./index302.es.js";
import ae from "./index303.es.js";
import oe from "./index304.es.js";
import { useEffect as d, useRef as f, useState as p } from "preact/compat";
//#region ../node_modules/.pnpm/react-time-picker@8.0.3_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-time-picker/dist/TimeInput.js
var m = {}, se = [
	"hour",
	"minute",
	"second"
];
function h(e) {
	return e.dataset.input === "true";
}
function g(e, t) {
	let n = e;
	do
		n = n[t];
	while (n && !h(n));
	return n;
}
function _(e) {
	e && e.focus();
}
function ce(t, n, r) {
	let i = [], a = new RegExp(Object.keys(n).map((e) => `${e}+`).join("|"), "g"), s = t.match(a);
	return t.split(a).reduce((t, a, c) => {
		let l = a && e(o, { children: a }, `separator_${c}`);
		t.push(l);
		let u = s?.[c];
		if (u) {
			let e = n[u] || n[Object.keys(n).find((e) => u.match(e))];
			if (!e) return t;
			!r && i.includes(e) ? t.push(u) : (t.push(e(u, c)), i.push(e));
		}
		return t;
	}, []);
}
var v = u({ useGrouping: !1 });
function y({ amPmAriaLabel: o, autoFocus: u, className: h, disabled: y, format: b, hourAriaLabel: x, hourPlaceholder: S, isClockOpen: C = null, locale: w, maxDetail: T = "minute", maxTime: E, minTime: D, minuteAriaLabel: le, minutePlaceholder: ue, name: de = "time", nativeInputAriaLabel: fe, onChange: O, onInvalidChange: k, required: A, secondAriaLabel: pe, secondPlaceholder: me, value: j }) {
	let [M, N] = p(null), [P, F] = p(null), [I, L] = p(null), [R, z] = p(null), [he, B] = p(null), V = f(null), H = f(null), U = f(null), W = f(null), G = f(null), [K, ge] = p(C), q = f(void 0);
	d(() => {
		ge(C);
	}, [C]), d(() => {
		let e = j;
		e ? (N(c(t(e))[1]), F(t(e).toString()), L(i(e).toString()), z(a(e).toString()), B(e)) : (N(null), F(null), L(null), z(null), B(null));
	}, [
		j,
		D,
		E,
		T,
		K
	]);
	let J = T, _e = (() => {
		let e = se.indexOf(T);
		return l(m[e] || (() => {
			let t = { hour: "numeric" };
			return e >= 1 && (t.minute = "numeric"), e >= 2 && (t.second = "numeric"), m[e] = t, t;
		})());
	})();
	function ve(e) {
		return (() => {
			switch (J) {
				case "hour":
				case "minute": return n;
				case "second": return r;
				default: throw Error("Invalid valueType");
			}
		})()(e);
	}
	let Y = b || _e(w, new Date(2017, 0, 1, 21, 13, 14)).replace(v(w, 9), "h").replace(v(w, 21), "H").replace(v(w, 13), "mm").replace(v(w, 14), "ss").replace(new RegExp(ee(w).join("|")), "a"), ye = (() => {
		let e = Y.match(/[^0-9a-z]/i);
		return e ? e[0] : null;
	})();
	function be(e) {
		if (e.target === e.currentTarget) {
			let t = e.target.children[1];
			_(t);
		}
	}
	function xe(e) {
		switch (q.current = e.key, e.key) {
			case "ArrowLeft":
			case "ArrowRight":
			case ye: {
				e.preventDefault();
				let { target: t } = e;
				_(g(t, e.key === "ArrowLeft" ? "previousElementSibling" : "nextElementSibling"));
				break;
			}
			default:
		}
	}
	function Se(e) {
		let { key: t, target: n } = e;
		if (q.current !== t || Number.isNaN(Number(t))) return;
		let r = n.getAttribute("max");
		if (!r) return;
		let { value: i } = n;
		(Number(i) * 10 > Number(r) || i.length >= r.length) && _(g(n, "nextElementSibling"));
	}
	function Ce() {
		if (!O) return;
		function e(e) {
			return !!e;
		}
		let t = [
			V.current,
			H.current,
			U.current,
			W.current,
			G.current
		].filter(e), n = t.slice(1), r = {};
		for (let e of t) r[e.name] = e.type === "number" ? e.valueAsNumber : e.value;
		if (n.every((e) => !e.value)) {
			O(null, !1);
			return;
		}
		let i = t.every((e) => e.value), a = t.every((e) => e.validity.valid);
		if (i && a) {
			let e = Number(r.hour24 || r.hour12 && r.amPm && s(r.hour12, r.amPm) || 0), t = Number(r.minute || 0), n = Number(r.second || 0), i = (e) => `0${e}`.slice(-2);
			O(ve(`${i(e)}:${i(t)}:${i(n)}`), !1);
			return;
		}
		k && k();
	}
	function X(e) {
		let { name: t, value: n } = e.target;
		switch (t) {
			case "amPm":
				N(n);
				break;
			case "hour12":
				F(n ? s(n, M || "am").toString() : "");
				break;
			case "hour24":
				F(n);
				break;
			case "minute":
				L(n);
				break;
			case "second":
				z(n);
				break;
		}
		Ce();
	}
	function we(e) {
		let { value: t } = e.target;
		O && O(t || null, !1);
	}
	let Z = {
		className: h,
		disabled: y,
		maxTime: E,
		minTime: D,
		onChange: X,
		onKeyDown: xe,
		onKeyUp: Se,
		required: !!(A || K)
	};
	function Q(t, n) {
		if (t && t.length > 2) throw Error(`Unsupported token: ${t}`);
		let r = t ? t.length === 2 : !1;
		return e(ne, {
			...Z,
			amPm: M,
			ariaLabel: x,
			autoFocus: n === 0 && u,
			inputRef: H,
			placeholder: S,
			showLeadingZeros: r,
			value: P
		}, "hour12");
	}
	function Te(t, n) {
		if (t && t.length > 2) throw Error(`Unsupported token: ${t}`);
		let r = t ? t.length === 2 : !1;
		return e(re, {
			...Z,
			ariaLabel: x,
			autoFocus: n === 0 && u,
			inputRef: U,
			placeholder: S,
			showLeadingZeros: r,
			value: P
		}, "hour24");
	}
	function $(e, t) {
		return /h/.test(e) ? Q(e, t) : Te(e, t);
	}
	function Ee(t, n) {
		if (t && t.length > 2) throw Error(`Unsupported token: ${t}`);
		let r = t ? t.length === 2 : !1;
		return e(ie, {
			...Z,
			ariaLabel: le,
			autoFocus: n === 0 && u,
			hour: P,
			inputRef: W,
			placeholder: ue,
			showLeadingZeros: r,
			value: I
		}, "minute");
	}
	function De(t, n) {
		if (t && t.length > 2) throw Error(`Unsupported token: ${t}`);
		let r = !t || t.length === 2;
		return e(oe, {
			...Z,
			ariaLabel: pe,
			autoFocus: n === 0 && u,
			hour: P,
			inputRef: G,
			minute: I,
			placeholder: me,
			showLeadingZeros: r,
			value: R
		}, "second");
	}
	function Oe(t, n) {
		return e(te, {
			...Z,
			ariaLabel: o,
			autoFocus: n === 0 && u,
			inputRef: V,
			locale: w,
			onChange: X,
			value: M
		}, "ampm");
	}
	function ke() {
		return ce(Y, {
			h: $,
			H: $,
			m: Ee,
			s: De,
			a: Oe
		}, b !== void 0);
	}
	function Ae() {
		return e(ae, {
			ariaLabel: fe,
			disabled: y,
			maxTime: E,
			minTime: D,
			name: de,
			onChange: we,
			required: A,
			value: he,
			valueType: J
		}, "time");
	}
	return e("div", {
		className: h,
		onClick: be,
		children: [Ae(), ke()]
	});
}
//#endregion
export { y as default };
