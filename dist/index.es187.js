import { getRange as p } from "./index.es186.js";
function q(r, e, t) {
  return e && e > r ? e : t && t < r ? t : r;
}
function f(r, e) {
  return e[0] <= r && e[1] >= r;
}
function A(r, e) {
  return r[0] <= e[0] && r[1] >= e[1];
}
function h(r, e) {
  return f(r[0], e) || f(r[1], e);
}
function v(r, e, t) {
  var i = h(e, r), a = [];
  if (i) {
    a.push(t);
    var n = f(r[0], e), s = f(r[1], e);
    n && a.push("".concat(t, "Start")), s && a.push("".concat(t, "End")), n && s && a.push("".concat(t, "BothEnds"));
  }
  return a;
}
function T(r) {
  return Array.isArray(r) ? r[0] !== null && r[1] !== null : r !== null;
}
function R(r) {
  if (!r)
    throw new Error("args is required");
  var e = r.value, t = r.date, i = r.hover, a = "react-calendar__tile", n = [a];
  if (!t)
    return n;
  var s = /* @__PURE__ */ new Date(), o = function() {
    if (Array.isArray(t))
      return t;
    var c = r.dateType;
    if (!c)
      throw new Error("dateType is required when date is not an array of two dates");
    return p(c, t);
  }();
  if (f(s, o) && n.push("".concat(a, "--now")), !e || !T(e))
    return n;
  var u = function() {
    if (Array.isArray(e))
      return e;
    var c = r.valueType;
    if (!c)
      throw new Error("valueType is required when value is not an array of two dates");
    return p(c, e);
  }();
  A(u, o) ? n.push("".concat(a, "--active")) : h(u, o) && n.push("".concat(a, "--hasActive"));
  var l = v(u, o, "".concat(a, "--range"));
  n.push.apply(n, l);
  var y = Array.isArray(e) ? e : [e];
  if (i && y.length === 1) {
    var w = i > u[0] ? [u[0], i] : [i, u[0]], d = v(w, o, "".concat(a, "--hover"));
    n.push.apply(n, d);
  }
  return n;
}
export {
  q as between,
  h as doRangesOverlap,
  R as getTileClasses,
  A as isRangeWithinRange,
  f as isValueWithinRange
};
