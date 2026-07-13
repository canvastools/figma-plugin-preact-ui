import { getRange as e } from "./index204.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/shared/utils.js
function t(e, t, n) {
	return t && t > e ? t : n && n < e ? n : e;
}
function n(e, t) {
	return t[0] <= e && t[1] >= e;
}
function r(e, t) {
	return e[0] <= t[0] && e[1] >= t[1];
}
function i(e, t) {
	return n(e[0], t) || n(e[1], t);
}
function a(e, t, r) {
	let a = i(t, e), o = [];
	if (a) {
		o.push(r);
		let i = n(e[0], t), a = n(e[1], t);
		i && o.push(`${r}Start`), a && o.push(`${r}End`), i && a && o.push(`${r}BothEnds`);
	}
	return o;
}
function o(e) {
	return Array.isArray(e) ? e[0] !== null && e[1] !== null : e !== null;
}
function s(t) {
	if (!t) throw Error("args is required");
	let { value: s, date: c, hover: l } = t, u = "react-calendar__tile", d = [u];
	if (!c) return d;
	let f = /* @__PURE__ */ new Date(), p = (() => {
		if (Array.isArray(c)) return c;
		let { dateType: n } = t;
		if (!n) throw Error("dateType is required when date is not an array of two dates");
		return e(n, c);
	})();
	if (n(f, p) && d.push(`${u}--now`), !s || !o(s)) return d;
	let m = (() => {
		if (Array.isArray(s)) return s;
		let { valueType: n } = t;
		if (!n) throw Error("valueType is required when value is not an array of two dates");
		return e(n, s);
	})();
	r(m, p) ? d.push(`${u}--active`) : i(m, p) && d.push(`${u}--hasActive`);
	let h = a(m, p, `${u}--range`);
	if (d.push(...h), l && (Array.isArray(s) ? s : [s]).length === 1) {
		let e = a(l > m[0] ? [m[0], l] : [l, m[0]], p, `${u}--hover`);
		d.push(...e);
	}
	return d;
}
//#endregion
export { t as between, i as doRangesOverlap, s as getTileClasses, r as isRangeWithinRange, n as isValueWithinRange };
