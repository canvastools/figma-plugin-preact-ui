import "preact/compat";
import { jsx as d } from "./index.es129.js";
import { getMonthStart as u, getMonthEnd as p } from "./index.es197.js";
import h from "./index.es206.js";
import { formatMonth as y, formatMonthYear as _ } from "./index.es195.js";
var l = function() {
  return l = Object.assign || function(t) {
    for (var e, o = 1, r = arguments.length; o < r; o++) {
      e = arguments[o];
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }, l.apply(this, arguments);
}, v = function(t, e) {
  var o = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (o[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(t); n < r.length; n++)
      e.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[n]) && (o[r[n]] = t[r[n]]);
  return o;
}, s = function(t, e, o) {
  if (o || arguments.length === 2) for (var r = 0, n = e.length, a; r < n; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}, g = "react-calendar__year-view__months__month";
function x(t) {
  var e = t.classes, o = e === void 0 ? [] : e, r = t.formatMonth, n = r === void 0 ? y : r, a = t.formatMonthYear, c = a === void 0 ? _ : a, f = v(t, ["classes", "formatMonth", "formatMonthYear"]), i = f.date, m = f.locale;
  return d(h, l({}, f, { classes: s(s([], o, !0), [g], !1), formatAbbr: c, maxDateTransform: p, minDateTransform: u, view: "year", children: n(m, i) }));
}
export {
  x as default
};
