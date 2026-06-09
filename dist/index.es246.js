function i(t, e, r) {
  return function(s, c = r) {
    const u = t(s) + c;
    return e(u);
  };
}
function f(t) {
  return function(r) {
    return new Date(t(r).getTime() - 1);
  };
}
function l(t, e) {
  return function(n) {
    return [t(n), e(n)];
  };
}
function o(t) {
  if (t instanceof Date)
    return t.getFullYear();
  if (typeof t == "number")
    return t;
  const e = Number.parseInt(t, 10);
  if (typeof t == "string" && !Number.isNaN(e))
    return e;
  throw new Error(`Failed to get year from date: ${t}.`);
}
function h(t) {
  if (t instanceof Date)
    return t.getMonth();
  throw new Error(`Failed to get month from date: ${t}.`);
}
function y(t) {
  if (t instanceof Date)
    return t.getDate();
  throw new Error(`Failed to get year from date: ${t}.`);
}
function p(t) {
  if (t instanceof Date)
    return t.getHours();
  if (typeof t == "string") {
    const e = t.split(":");
    if (e.length >= 2) {
      const r = e[0];
      if (r) {
        const n = Number.parseInt(r, 10);
        if (!Number.isNaN(n))
          return n;
      }
    }
  }
  throw new Error(`Failed to get hours from date: ${t}.`);
}
function M(t) {
  if (t instanceof Date)
    return t.getMinutes();
  if (typeof t == "string") {
    const e = t.split(":");
    if (e.length >= 2) {
      const r = e[1] || "0", n = Number.parseInt(r, 10);
      if (!Number.isNaN(n))
        return n;
    }
  }
  throw new Error(`Failed to get minutes from date: ${t}.`);
}
function $(t) {
  if (t instanceof Date)
    return t.getSeconds();
  if (typeof t == "string") {
    const e = t.split(":");
    if (e.length >= 2) {
      const r = e[2] || "0", n = Number.parseInt(r, 10);
      if (!Number.isNaN(n))
        return n;
    }
  }
  throw new Error(`Failed to get seconds from date: ${t}.`);
}
function C(t) {
  if (t instanceof Date)
    return t.getMilliseconds();
  if (typeof t == "string") {
    const e = t.split(":");
    if (e.length >= 2) {
      const n = (e[2] || "0").split(".")[1] || "0", s = Number.parseInt(n, 10);
      if (!Number.isNaN(s))
        return s;
    }
  }
  throw new Error(`Failed to get seconds from date: ${t}.`);
}
function D(t) {
  const e = o(t), r = e + (-e + 1) % 100, n = /* @__PURE__ */ new Date();
  return n.setFullYear(r, 0, 1), n.setHours(0, 0, 0, 0), n;
}
const O = i(o, D, -100), H = i(o, D, 100), b = f(H), W = i(o, b, -100), T = l(D, b);
function d(t) {
  const e = o(t), r = e + (-e + 1) % 10, n = /* @__PURE__ */ new Date();
  return n.setFullYear(r, 0, 1), n.setHours(0, 0, 0, 0), n;
}
const j = i(o, d, -10), I = i(o, d, 10), Y = f(I), q = i(o, Y, -10), z = l(d, Y);
function S(t) {
  const e = o(t), r = /* @__PURE__ */ new Date();
  return r.setFullYear(e, 0, 1), r.setHours(0, 0, 0, 0), r;
}
const A = i(o, S, -1), k = i(o, S, 1), F = f(k), B = i(o, F, -1), J = l(S, F);
function N(t, e) {
  return function(n, s = e) {
    const c = o(n), u = h(n) + s, a = /* @__PURE__ */ new Date();
    return a.setFullYear(c, u, 1), a.setHours(0, 0, 0, 0), t(a);
  };
}
function E(t) {
  const e = o(t), r = h(t), n = /* @__PURE__ */ new Date();
  return n.setFullYear(e, r, 1), n.setHours(0, 0, 0, 0), n;
}
const K = N(E, -1), v = N(E, 1), w = f(v), L = N(w, -1), Q = l(E, w);
function G(t, e) {
  return function(n, s = e) {
    const c = o(n), u = h(n), a = y(n) + s, m = /* @__PURE__ */ new Date();
    return m.setFullYear(c, u, a), m.setHours(0, 0, 0, 0), t(m);
  };
}
function P(t) {
  const e = o(t), r = h(t), n = y(t), s = /* @__PURE__ */ new Date();
  return s.setFullYear(e, r, n), s.setHours(0, 0, 0, 0), s;
}
const R = G(P, 1), x = f(R), U = l(P, x);
function V(t) {
  return y(w(t));
}
function g(t, e = 2) {
  const r = `${t}`;
  return r.length >= e ? t : `0000${r}`.slice(-e);
}
function X(t) {
  const e = g(p(t)), r = g(M(t));
  return `${e}:${r}`;
}
function Z(t) {
  const e = g(p(t)), r = g(M(t)), n = g($(t));
  return `${e}:${r}:${n}`;
}
export {
  b as getCenturyEnd,
  T as getCenturyRange,
  D as getCenturyStart,
  y as getDate,
  x as getDayEnd,
  U as getDayRange,
  P as getDayStart,
  V as getDaysInMonth,
  Y as getDecadeEnd,
  z as getDecadeRange,
  d as getDecadeStart,
  p as getHours,
  X as getHoursMinutes,
  Z as getHoursMinutesSeconds,
  C as getMilliseconds,
  M as getMinutes,
  h as getMonth,
  w as getMonthEnd,
  Q as getMonthRange,
  E as getMonthStart,
  H as getNextCenturyStart,
  R as getNextDayStart,
  I as getNextDecadeStart,
  v as getNextMonthStart,
  k as getNextYearStart,
  W as getPreviousCenturyEnd,
  O as getPreviousCenturyStart,
  q as getPreviousDecadeEnd,
  j as getPreviousDecadeStart,
  L as getPreviousMonthEnd,
  K as getPreviousMonthStart,
  B as getPreviousYearEnd,
  A as getPreviousYearStart,
  $ as getSeconds,
  o as getYear,
  F as getYearEnd,
  J as getYearRange,
  S as getYearStart
};
