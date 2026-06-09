import { getUserLocale as i } from "./index.es243.js";
var m = /* @__PURE__ */ new Map();
function u(a) {
  return function(o, f) {
    var e = o || i();
    m.has(e) || m.set(e, /* @__PURE__ */ new Map());
    var n = m.get(e);
    return n.has(a) || n.set(a, new Intl.DateTimeFormat(e || void 0, a).format), n.get(a)(f);
  };
}
function v(a) {
  var t = new Date(a);
  return new Date(t.setHours(12));
}
function r(a) {
  return function(t, o) {
    return u(a)(t, v(o));
  };
}
var c = { day: "numeric" }, h = {
  day: "numeric",
  month: "long",
  year: "numeric"
}, s = { month: "long" }, y = {
  month: "long",
  year: "numeric"
}, g = { weekday: "short" }, d = { weekday: "long" }, l = { year: "numeric" }, p = r(c), w = r(h), O = r(s), k = r(y), M = r(g), W = r(d), L = r(l);
export {
  p as formatDay,
  w as formatLongDate,
  O as formatMonth,
  k as formatMonthYear,
  M as formatShortWeekday,
  W as formatWeekday,
  L as formatYear
};
