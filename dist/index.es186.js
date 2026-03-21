import { getDayStart as C, getMonthStart as P, getYearStart as W, getDecadeStart as h, getCenturyStart as v, getDayEnd as k, getMonthEnd as N, getYearEnd as B, getDecadeEnd as M, getCenturyEnd as b, getPreviousMonthStart as w, getPreviousYearStart as d, getPreviousDecadeStart as E, getPreviousCenturyStart as x, getNextMonthStart as y, getNextYearStart as D, getNextDecadeStart as S, getNextCenturyStart as A, getPreviousMonthEnd as m, getPreviousYearEnd as I, getPreviousDecadeEnd as O, getPreviousCenturyEnd as _, getYear as o, getMonth as G, getDecadeRange as R, getCenturyRange as Y, getDayRange as L, getMonthRange as U, getYearRange as F } from "./index.es197.js";
import { CALENDAR_TYPES as n, WEEKDAYS as g } from "./index.es193.js";
import { formatYear as H } from "./index.es195.js";
var V = g[0], j = g[5], s = g[6];
function p(r, e) {
  e === void 0 && (e = n.ISO_8601);
  var t = r.getDay();
  switch (e) {
    case n.ISO_8601:
      return (t + 6) % 7;
    case n.ISLAMIC:
      return (t + 1) % 7;
    case n.HEBREW:
    case n.GREGORY:
      return t;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function X(r) {
  var e = v(r);
  return o(e);
}
function Z(r) {
  var e = h(r);
  return o(e);
}
function f(r, e) {
  e === void 0 && (e = n.ISO_8601);
  var t = o(r), a = G(r), u = r.getDate() - p(r, e);
  return new Date(t, a, u);
}
function $(r, e) {
  e === void 0 && (e = n.ISO_8601);
  var t = e === n.GREGORY ? n.GREGORY : n.ISO_8601, a = f(r, e), u = o(r) + 1, c, i;
  do
    c = new Date(u, 0, t === n.ISO_8601 ? 4 : 1), i = f(c, e), u -= 1;
  while (r < i);
  return Math.round((a.getTime() - i.getTime()) / (864e5 * 7)) + 1;
}
function K(r, e) {
  switch (r) {
    case "century":
      return v(e);
    case "decade":
      return h(e);
    case "year":
      return W(e);
    case "month":
      return P(e);
    case "day":
      return C(e);
    default:
      throw new Error("Invalid rangeType: ".concat(r));
  }
}
function T(r, e) {
  switch (r) {
    case "century":
      return x(e);
    case "decade":
      return E(e);
    case "year":
      return d(e);
    case "month":
      return w(e);
    default:
      throw new Error("Invalid rangeType: ".concat(r));
  }
}
function ee(r, e) {
  switch (r) {
    case "century":
      return A(e);
    case "decade":
      return S(e);
    case "year":
      return D(e);
    case "month":
      return y(e);
    default:
      throw new Error("Invalid rangeType: ".concat(r));
  }
}
function re(r, e) {
  switch (r) {
    case "decade":
      return E(e, -100);
    case "year":
      return d(e, -10);
    case "month":
      return w(e, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(r));
  }
}
function te(r, e) {
  switch (r) {
    case "decade":
      return S(e, 100);
    case "year":
      return D(e, 10);
    case "month":
      return y(e, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(r));
  }
}
function q(r, e) {
  switch (r) {
    case "century":
      return b(e);
    case "decade":
      return M(e);
    case "year":
      return B(e);
    case "month":
      return N(e);
    case "day":
      return k(e);
    default:
      throw new Error("Invalid rangeType: ".concat(r));
  }
}
function ne(r, e) {
  switch (r) {
    case "century":
      return _(e);
    case "decade":
      return O(e);
    case "year":
      return I(e);
    case "month":
      return m(e);
    default:
      throw new Error("Invalid rangeType: ".concat(r));
  }
}
function ae(r, e) {
  switch (r) {
    case "decade":
      return O(e, -100);
    case "year":
      return I(e, -10);
    case "month":
      return m(e, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(r));
  }
}
function ue(r, e) {
  switch (r) {
    case "century":
      return Y(e);
    case "decade":
      return R(e);
    case "year":
      return F(e);
    case "month":
      return U(e);
    case "day":
      return L(e);
    default:
      throw new Error("Invalid rangeType: ".concat(r));
  }
}
function ce(r, e, t) {
  var a = [e, t].sort(function(u, c) {
    return u.getTime() - c.getTime();
  });
  return [K(r, a[0]), q(r, a[1])];
}
function l(r, e, t) {
  return t.map(function(a) {
    return (e || H)(r, a);
  }).join(" – ");
}
function oe(r, e, t) {
  return l(r, e, Y(t));
}
function ie(r, e, t) {
  return l(r, e, R(t));
}
function ge(r) {
  return r.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function se(r, e) {
  e === void 0 && (e = n.ISO_8601);
  var t = r.getDay();
  switch (e) {
    case n.ISLAMIC:
    case n.HEBREW:
      return t === j || t === s;
    case n.ISO_8601:
    case n.GREGORY:
      return t === s || t === V;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
export {
  K as getBegin,
  ee as getBeginNext,
  te as getBeginNext2,
  X as getBeginOfCenturyYear,
  Z as getBeginOfDecadeYear,
  f as getBeginOfWeek,
  T as getBeginPrevious,
  re as getBeginPrevious2,
  oe as getCenturyLabel,
  p as getDayOfWeek,
  ie as getDecadeLabel,
  q as getEnd,
  ne as getEndPrevious,
  ae as getEndPrevious2,
  ue as getRange,
  ce as getValueRange,
  $ as getWeekNumber,
  ge as isCurrentDayOfWeek,
  se as isWeekend
};
