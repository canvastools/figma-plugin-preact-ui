//#region ../node_modules/.pnpm/mimic-function@5.0.1/node_modules/mimic-function/index.js
var e = (e, n, r, i) => {
	if (r === "length" || r === "prototype" || r === "arguments" || r === "caller") return;
	let a = Object.getOwnPropertyDescriptor(e, r), o = Object.getOwnPropertyDescriptor(n, r);
	!t(a, o) && i || Object.defineProperty(e, r, o);
}, t = function(e, t) {
	return e === void 0 || e.configurable || e.writable === t.writable && e.enumerable === t.enumerable && e.configurable === t.configurable && (e.writable || e.value === t.value);
}, n = (e, t) => {
	let n = Object.getPrototypeOf(t);
	n !== Object.getPrototypeOf(e) && Object.setPrototypeOf(e, n);
}, r = (e, t) => `/* Wrapped ${e}*/\n${t}`, i = Object.getOwnPropertyDescriptor(Function.prototype, "toString"), a = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"), o = (e, t, n) => {
	let o = n === "" ? "" : `with ${n.trim()}() `, s = r.bind(null, o, t.toString());
	Object.defineProperty(s, "name", a);
	let { writable: c, enumerable: l, configurable: u } = i;
	Object.defineProperty(e, "toString", {
		value: s,
		writable: c,
		enumerable: l,
		configurable: u
	});
};
function s(t, r, { ignoreNonConfigurable: i = !1 } = {}) {
	let { name: a } = t;
	for (let n of Reflect.ownKeys(r)) e(t, r, n, i);
	return n(t, r), o(t, r, a), t;
}
//#endregion
export { s as default };
