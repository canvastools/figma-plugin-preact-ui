import w from "./index.es207.js";
const d = 2147483647, N = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap();
function l(o, i) {
  const t = o.get(i);
  if (t) {
    if (t.maxAge <= Date.now()) {
      o.delete(i);
      return;
    }
    return t;
  }
}
function E(o, { cacheKey: i, cache: t = /* @__PURE__ */ new Map(), maxAge: n } = {}) {
  if (n === 0)
    return o;
  if (typeof n == "number" && Number.isFinite(n)) {
    if (n > d)
      throw new TypeError(`The \`maxAge\` option cannot exceed ${d}.`);
    if (n < 0)
      throw new TypeError("The `maxAge` option should not be a negative number.");
  }
  const r = function(...u) {
    var c;
    const s = i ? i(u) : u[0], m = l(t, s);
    if (m)
      return m.data;
    const I = o.apply(this, u), e = typeof n == "function" ? n(...u) : n;
    if (e !== void 0 && e !== Number.POSITIVE_INFINITY) {
      if (!Number.isFinite(e))
        throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");
      if (e <= 0)
        return I;
      if (e > d)
        throw new TypeError(`The \`maxAge\` function result cannot exceed ${d}.`);
    }
    if (t.set(s, {
      data: I,
      maxAge: e === void 0 || e === Number.POSITIVE_INFINITY ? Number.POSITIVE_INFINITY : Date.now() + e
    }), e !== void 0 && e !== Number.POSITIVE_INFINITY) {
      const f = setTimeout(() => {
        var p;
        t.delete(s), (p = a.get(r)) == null || p.delete(f);
      }, e);
      (c = f.unref) == null || c.call(f);
      const T = a.get(r) ?? /* @__PURE__ */ new Set();
      T.add(f), a.set(r, T);
    }
    return I;
  };
  return w(r, o, {
    ignoreNonConfigurable: !0
  }), N.set(r, t), b.set(r, i ?? ((u) => u[0])), r;
}
export {
  E as default
};
