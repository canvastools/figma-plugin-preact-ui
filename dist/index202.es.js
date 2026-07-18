import e from "./index201.es.js";
//#region ../node_modules/.pnpm/react-calendar@6.0.1_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-calendar/dist/shared/dateFormatter.js
var t = /* @__PURE__ */ new Map();
function n(n) {
	return function(r, i) {
		let a = r || e();
		t.has(a) || t.set(a, /* @__PURE__ */ new Map());
		let o = t.get(a);
		if (!o.has(n)) {
			let e = new Intl.DateTimeFormat(a || void 0, n);
			o.set(n, e.format.bind(e));
		}
		return o.get(n)(i);
	};
}
function r(e) {
	let t = new Date(e);
	return new Date(t.setHours(12));
}
function i(e) {
	return (t, i) => n(e)(t, r(i));
}
var a = { day: "numeric" }, o = {
	day: "numeric",
	month: "long",
	year: "numeric"
}, s = { month: "long" }, c = {
	month: "long",
	year: "numeric"
}, l = { weekday: "short" }, u = { weekday: "long" }, d = { year: "numeric" }, f = i(a), p = i(o), m = i(s), h = i(c), g = i(l), _ = i(u), v = i(d);
//#endregion
export { f as formatDay, p as formatLongDate, m as formatMonth, h as formatMonthYear, g as formatShortWeekday, _ as formatWeekday, v as formatYear };
