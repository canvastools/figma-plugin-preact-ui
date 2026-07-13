import e from "./index200.es.js";
//#region ../node_modules/.pnpm/react-time-picker@8.0.3_@types+react@19.1.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-time-picker/dist/shared/dateFormatter.js
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
var r = /* @__PURE__ */ new Map();
function i(t) {
	return (n, i) => {
		let a = n || e();
		r.has(a) || r.set(a, /* @__PURE__ */ new Map());
		let o = r.get(a);
		if (!o.has(t)) {
			let e = new Intl.NumberFormat(a || void 0, t);
			o.set(t, e.format.bind(e));
		}
		return o.get(t)(i);
	};
}
//#endregion
export { n as getFormatter, i as getNumberFormatter };
