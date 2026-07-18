import e from "./index199.es.js";
//#region ../node_modules/.pnpm/memoize@10.2.0/node_modules/memoize/distribution/index.js
var t = 2147483647, n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap();
function a(e, t) {
	let n = e.get(t);
	if (n) {
		if (n.maxAge <= Date.now()) {
			e.delete(t);
			return;
		}
		return n;
	}
}
function o(o, { cacheKey: s, cache: c = /* @__PURE__ */ new Map(), maxAge: l } = {}) {
	if (l === 0) return o;
	if (typeof l == "number" && Number.isFinite(l)) {
		if (l > t) throw TypeError(`The \`maxAge\` option cannot exceed ${t}.`);
		if (l < 0) throw TypeError("The `maxAge` option should not be a negative number.");
	}
	let u = function(...e) {
		let n = s ? s(e) : e[0], i = a(c, n);
		if (i) return i.data;
		let d = o.apply(this, e), f = typeof l == "function" ? l(...e) : l;
		if (f !== void 0 && f !== Infinity) {
			if (!Number.isFinite(f)) throw TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");
			if (f <= 0) return d;
			if (f > t) throw TypeError(`The \`maxAge\` function result cannot exceed ${t}.`);
		}
		if (c.set(n, {
			data: d,
			maxAge: f === void 0 || f === Infinity ? Infinity : Date.now() + f
		}), f !== void 0 && f !== Infinity) {
			let e = setTimeout(() => {
				c.delete(n), r.get(u)?.delete(e);
			}, f);
			e.unref?.();
			let t = r.get(u) ?? /* @__PURE__ */ new Set();
			t.add(e), r.set(u, t);
		}
		return d;
	};
	return e(u, o, { ignoreNonConfigurable: !0 }), n.set(u, c), i.set(u, s ?? ((e) => e[0])), u;
}
//#endregion
export { o as default };
