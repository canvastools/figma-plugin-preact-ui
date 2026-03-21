const K = /[-+]?\d*\.?\d+/, O = /[0-9+\-*/().\s]/, A = (e, n, t) => typeof n == "number" && e < n ? n : typeof t == "number" && e > t ? t : e, T = (e, n) => {
  if (n <= 0) return Math.round(e);
  const t = Math.pow(10, n);
  return Math.round(e * t) / t;
}, $ = (e) => {
  let n;
  if (typeof e == "number") {
    if (!Number.isFinite(e) || Number.isInteger(e)) return 0;
    n = e.toFixed(20).replace(/0+$/, "").replace(/\.$/, "");
  } else
    n = String(e);
  const t = K.exec(n);
  if (!t) return 0;
  const [, u] = t[0].split(".");
  return u ? u.length : 0;
}, M = (e) => e >= "0" && e <= "9", U = (e) => {
  let n = "";
  for (const t of e)
    O.test(t) && (n += t);
  return n;
}, j = (e) => {
  const n = [];
  let t = 0;
  for (; t < e.length; ) {
    const u = e[t];
    if (u === " " || u === "	" || u === `
`) {
      t += 1;
      continue;
    }
    if (M(u) || u === ".") {
      const s = t;
      let o = u === ".";
      for (t += 1; t < e.length; ) {
        const a = e[t];
        if (M(a)) {
          t += 1;
          continue;
        }
        if (a === "." && !o) {
          o = !0, t += 1;
          continue;
        }
        break;
      }
      const m = e.slice(s, t);
      if (m !== ".") {
        const a = Number(m);
        Number.isFinite(a) && n.push({ type: "number", value: a });
      }
      continue;
    }
    if (u === "+" || u === "-" || u === "*" || u === "/") {
      n.push({ type: "op", value: u }), t += 1;
      continue;
    }
    if (u === "(" || u === ")") {
      n.push({ type: "paren", value: u }), t += 1;
      continue;
    }
    t += 1;
  }
  return n;
}, H = (e) => {
  const n = U(e), t = j(n);
  let u = 0;
  const s = () => t[u], o = () => {
    const r = t[u];
    return u += 1, r;
  }, m = () => {
    var i, d;
    const r = s();
    if (!r)
      return null;
    if (r.type === "op" && (r.value === "+" || r.value === "-")) {
      o();
      const l = m();
      return l === null ? null : r.value === "-" ? -l : l;
    }
    if (r.type === "paren" && r.value === "(") {
      o();
      const l = p();
      return ((i = s()) == null ? void 0 : i.type) === "paren" && ((d = s()) == null ? void 0 : d.value) === ")" && o(), l;
    }
    return r.type === "number" ? (o(), r.value) : (o(), null);
  }, a = () => {
    let r = m();
    if (r === null)
      return null;
    let i = s();
    for (; (i == null ? void 0 : i.type) === "op" && (i.value === "*" || i.value === "/"); ) {
      o();
      const d = i.value, l = m();
      if (l === null)
        return null;
      r = d === "*" ? r * l : r / l, i = s();
    }
    return r;
  }, p = () => {
    let r = a();
    if (r === null)
      return null;
    let i = s();
    for (; (i == null ? void 0 : i.type) === "op" && (i.value === "+" || i.value === "-"); ) {
      o();
      const d = i.value, l = a();
      if (l === null)
        return null;
      r = d === "+" ? r + l : r - l, i = s();
    }
    return r;
  };
  if (t.length === 0)
    return null;
  const f = p();
  return f === null || !Number.isFinite(f) || u !== t.length ? null : f;
}, q = (e, n, t) => {
  if (e == null)
    return {
      value: void 0,
      error: n ? "required" : null
    };
  const s = String(e).trim();
  if (s === "")
    return {
      value: void 0,
      error: n ? "required" : null
    };
  const o = t ? H(s) : null;
  if (t)
    return o === null ? {
      value: void 0,
      error: "invalid_number"
    } : { value: o, error: null };
  const m = K.exec(s);
  if (!m)
    return {
      value: void 0,
      error: "invalid_number"
    };
  const a = Number(m[0]);
  return Number.isFinite(a) ? { value: a, error: null } : {
    value: void 0,
    error: "invalid_number"
  };
}, V = (e, n) => {
  const { min: t, max: u, required: s, unit: o, normalizeOnError: m = !1 } = n, { value: a, error: p } = q(e, s, n.math), f = typeof n.precision == "number" ? n.precision : $(n.value);
  if (p)
    return {
      rawValue: e,
      normalizedValue: void 0,
      formattedValue: void 0,
      error: p,
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
  let r = null;
  typeof t == "number" && a < t ? r = "less_than_min" : typeof u == "number" && a > u && (r = "greater_than_max"), f === 0 && !Number.isInteger(a) && !r && (r = "not_integer");
  const i = A(a, t, u), d = T(i, f);
  if (r && !m)
    return {
      rawValue: e,
      normalizedValue: void 0,
      formattedValue: void 0,
      error: r,
      unit: o
    };
  const l = d;
  let c;
  f > 0 ? Number.isInteger(l) ? c = String(l) : c = l.toFixed(f) : c = String(l);
  const v = o ? `${c}${o}` : c;
  return {
    rawValue: e,
    normalizedValue: l,
    formattedValue: v,
    error: r,
    unit: o
  };
}, E = (e, n) => {
  const { unit: t, normalizeOnError: u = !1, doubleValue: s } = n;
  if (!s)
    return V(e, n);
  const o = e.split(",");
  if (o.length === 1)
    return V(e, n);
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
  const m = o[0].trim(), a = o.slice(1).join(",").trim(), p = V(m, n), f = V(a, n), r = p.error ?? f.error;
  if (r && !u)
    return {
      rawValue: e,
      normalizedValue: void 0,
      formattedValue: void 0,
      normalizedValues: void 0,
      formattedValues: void 0,
      error: r,
      unit: t
    };
  const i = typeof p.normalizedValue == "number" && typeof f.normalizedValue == "number" ? [p.normalizedValue, f.normalizedValue] : void 0, d = typeof p.formattedValue == "string" && typeof f.formattedValue == "string" ? [p.formattedValue, f.formattedValue] : void 0;
  return {
    rawValue: e,
    normalizedValue: p.normalizedValue,
    formattedValue: p.formattedValue,
    normalizedValues: i,
    formattedValues: d,
    error: r,
    unit: t
  };
}, B = (e) => {
  const { value: n, min: t, max: u, precision: s = 0, step: o = 1, stepLarge: m = 10, required: a } = e, p = (d, l) => l != null ? E(d, { ...e, unit: l }) : E(d, e), f = E(String(n), e), r = (d, l, c) => {
    const { value: v } = q(d, a, e.math), h = c != null && c.shiftKey && typeof m == "number" ? m : o, R = typeof v == "number" ? v : typeof t == "number" ? t : 0, y = l === "increment" ? h : -h, g = R + y, z = typeof s == "number" ? s : $(e.value), b = T(g, z);
    return A(b, t, u);
  };
  return {
    ...f,
    handleKeyDown: (d, l) => {
      const { event: c, value: v } = d;
      if (c.key !== "ArrowUp" && c.key !== "ArrowDown")
        return;
      const h = c.key === "ArrowUp" ? "increment" : "decrement";
      if (e.doubleValue && v.includes(",")) {
        const y = c.target;
        if (y) {
          c.preventDefault();
          const g = y.selectionStart ?? v.length, z = v.indexOf(",");
          if (z !== -1) {
            const b = g <= z, N = v.split(",");
            if (N.length > 1) {
              const S = N[0].trim(), _ = N.slice(1).join(",").trim(), D = r(b ? S : _, h, {
                shiftKey: c.shiftKey
              }), k = V(b ? String(D) : S, e), F = V(b ? _ : String(D), e), I = k.formattedValue ?? k.rawValue ?? S, L = F.formattedValue ?? F.rawValue ?? _, w = `${I}, ${L}`;
              if (y.value = w, b) {
                const x = I.length;
                y.setSelectionRange(x, x);
              } else {
                const x = w.length;
                y.setSelectionRange(x, x);
              }
              l == null || l(w);
              return;
            }
          }
        }
      }
      c.preventDefault();
      const R = r(v, h, { shiftKey: c.shiftKey });
      l == null || l(R);
    },
    parse: p
  };
};
export {
  B as useNumericInput
};
