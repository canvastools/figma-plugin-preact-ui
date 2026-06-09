const M = /[-+]?\d*\.?\d+/, O = /[0-9+\-*/().\s]/, $ = (e, r, t) => typeof r == "number" && e < r ? r : typeof t == "number" && e > t ? t : e, K = (e, r) => {
  if (r <= 0) return Math.round(e);
  const t = Math.pow(10, r);
  return Math.round(e * t) / t;
}, T = (e) => {
  let r;
  if (typeof e == "number") {
    if (!Number.isFinite(e) || Number.isInteger(e)) return 0;
    r = e.toFixed(20).replace(/0+$/, "").replace(/\.$/, "");
  } else
    r = String(e);
  const t = M.exec(r);
  if (!t) return 0;
  const [, l] = t[0].split(".");
  return l ? l.length : 0;
}, I = (e) => e >= "0" && e <= "9", U = (e) => {
  let r = "";
  for (const t of e)
    O.test(t) && (r += t);
  return r;
}, j = (e) => {
  const r = [];
  let t = 0;
  for (; t < e.length; ) {
    const l = e[t];
    if (l === " " || l === "	" || l === `
`) {
      t += 1;
      continue;
    }
    if (I(l) || l === ".") {
      const s = t;
      let o = l === ".";
      for (t += 1; t < e.length; ) {
        const d = e[t];
        if (I(d)) {
          t += 1;
          continue;
        }
        if (d === "." && !o) {
          o = !0, t += 1;
          continue;
        }
        break;
      }
      const p = e.slice(s, t);
      if (p !== ".") {
        const d = Number(p);
        Number.isFinite(d) && r.push({ type: "number", value: d });
      }
      continue;
    }
    if (l === "+" || l === "-" || l === "*" || l === "/") {
      r.push({ type: "op", value: l }), t += 1;
      continue;
    }
    if (l === "(" || l === ")") {
      r.push({ type: "paren", value: l }), t += 1;
      continue;
    }
    t += 1;
  }
  return r;
}, H = (e) => {
  const r = U(e), t = j(r);
  let l = 0;
  const s = () => t[l], o = () => {
    const n = t[l];
    return l += 1, n;
  }, p = () => {
    var u, m;
    const n = s();
    if (!n)
      return null;
    if (n.type === "op" && (n.value === "+" || n.value === "-")) {
      o();
      const i = p();
      return i === null ? null : n.value === "-" ? -i : i;
    }
    if (n.type === "paren" && n.value === "(") {
      o();
      const i = a();
      return ((u = s()) == null ? void 0 : u.type) === "paren" && ((m = s()) == null ? void 0 : m.value) === ")" && o(), i;
    }
    return n.type === "number" ? (o(), n.value) : (o(), null);
  }, d = () => {
    let n = p();
    if (n === null)
      return null;
    let u = s();
    for (; (u == null ? void 0 : u.type) === "op" && (u.value === "*" || u.value === "/"); ) {
      o();
      const m = u.value, i = p();
      if (i === null)
        return null;
      n = m === "*" ? n * i : n / i, u = s();
    }
    return n;
  }, a = () => {
    let n = d();
    if (n === null)
      return null;
    let u = s();
    for (; (u == null ? void 0 : u.type) === "op" && (u.value === "+" || u.value === "-"); ) {
      o();
      const m = u.value, i = d();
      if (i === null)
        return null;
      n = m === "+" ? n + i : n - i, u = s();
    }
    return n;
  };
  if (t.length === 0)
    return null;
  const v = a();
  return v === null || !Number.isFinite(v) || l !== t.length ? null : v;
}, A = (e, r, t) => {
  if (e == null)
    return {
      value: void 0,
      error: r ? "required" : null
    };
  const s = String(e).trim();
  if (s === "")
    return {
      value: void 0,
      error: r ? "required" : null
    };
  const o = t ? H(s) : null;
  if (t)
    return o === null ? {
      value: void 0,
      error: "invalid_number"
    } : { value: o, error: null };
  const p = M.exec(s);
  if (!p)
    return {
      value: void 0,
      error: "invalid_number"
    };
  const d = Number(p[0]);
  return Number.isFinite(d) ? { value: d, error: null } : {
    value: void 0,
    error: "invalid_number"
  };
}, V = (e, r) => {
  const { min: t, max: l, required: s, unit: o, normalizeOnError: p = !1, trimTrailingZeros: d = !1 } = r, { value: a, error: v } = A(e, s, r.math), n = typeof r.precision == "number" ? r.precision : T(r.value);
  if (v)
    return {
      rawValue: e,
      normalizedValue: void 0,
      formattedValue: void 0,
      error: v,
      unit: o
    };
  if (a === void 0)
    return {
      rawValue: e,
      normalizedValue: void 0,
      formattedValue: void 0,
      error: s ? "required" : null,
      unit: o
    };
  let u = null;
  typeof t == "number" && a < t ? u = "less_than_min" : typeof l == "number" && a > l && (u = "greater_than_max"), n === 0 && !Number.isInteger(a) && !u && (u = "not_integer");
  const m = $(a, t, l), i = K(m, n);
  if (u && !p)
    return {
      rawValue: e,
      normalizedValue: void 0,
      formattedValue: void 0,
      error: u,
      unit: o
    };
  const c = i;
  let f;
  n > 0 ? Number.isInteger(c) ? f = String(c) : f = c.toFixed(n) : f = String(c), d && f.includes(".") && (f = f.replace(/0+$/, "").replace(/\.$/, ""));
  const h = o ? `${f}${o}` : f;
  return {
    rawValue: e,
    normalizedValue: c,
    formattedValue: h,
    error: u,
    unit: o
  };
}, E = (e, r) => {
  const { unit: t, normalizeOnError: l = !1, doubleValue: s } = r;
  if (!s)
    return V(e, r);
  const o = e.split(",");
  if (o.length === 1)
    return V(e, r);
  if (o.length > 2)
    return {
      rawValue: e,
      normalizedValue: void 0,
      formattedValue: void 0,
      normalizedValues: void 0,
      formattedValues: void 0,
      error: "invalid_number",
      unit: t
    };
  const p = o[0].trim(), d = o.slice(1).join(",").trim(), a = V(p, r), v = V(d, r), n = a.error ?? v.error;
  if (n && !l)
    return {
      rawValue: e,
      normalizedValue: void 0,
      formattedValue: void 0,
      normalizedValues: void 0,
      formattedValues: void 0,
      error: n,
      unit: t
    };
  const u = typeof a.normalizedValue == "number" && typeof v.normalizedValue == "number" ? [a.normalizedValue, v.normalizedValue] : void 0, m = typeof a.formattedValue == "string" && typeof v.formattedValue == "string" ? [a.formattedValue, v.formattedValue] : void 0;
  return {
    rawValue: e,
    normalizedValue: a.normalizedValue,
    formattedValue: a.formattedValue,
    normalizedValues: u,
    formattedValues: m,
    error: n,
    unit: t
  };
}, B = (e) => {
  const { value: r, min: t, max: l, precision: s = 0, step: o = 1, stepLarge: p = 10, required: d } = e, a = (m, i) => i != null ? E(m, { ...e, unit: i }) : E(m, e), v = E(String(r), e), n = (m, i, c) => {
    const { value: f } = A(m, d, e.math), h = c != null && c.shiftKey && typeof p == "number" ? p : o, z = typeof f == "number" ? f : typeof t == "number" ? t : 0, y = i === "increment" ? h : -h, R = z + y, x = typeof s == "number" ? s : T(e.value), b = K(R, x);
    return $(b, t, l);
  };
  return {
    ...v,
    handleKeyDown: (m, i) => {
      const { event: c, value: f } = m;
      if (c.key !== "ArrowUp" && c.key !== "ArrowDown")
        return;
      const h = c.key === "ArrowUp" ? "increment" : "decrement";
      if (e.doubleValue && f.includes(",")) {
        const y = c.target;
        if (y) {
          c.preventDefault();
          const R = y.selectionStart ?? f.length, x = f.indexOf(",");
          if (x !== -1) {
            const b = R <= x, g = f.split(",");
            if (g.length > 1) {
              const N = g[0].trim(), S = g.slice(1).join(",").trim(), D = n(b ? N : S, h, {
                shiftKey: c.shiftKey
              }), k = V(b ? String(D) : N, e), F = V(b ? S : String(D), e), _ = k.formattedValue ?? k.rawValue ?? N, q = F.formattedValue ?? F.rawValue ?? S, w = `${_}, ${q}`;
              if (y.value = w, b)
                y.setSelectionRange(0, _.length);
              else {
                const L = _.length + 2;
                y.setSelectionRange(L, w.length);
              }
              i == null || i(w);
              return;
            }
          }
        }
      }
      c.preventDefault();
      const z = n(f, h, { shiftKey: c.shiftKey });
      i == null || i(z);
    },
    parse: a
  };
};
export {
  B as useNumericInput
};
