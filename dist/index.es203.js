import "preact/compat";
import { jsx as f } from "./index.es143.js";
import { getYearStart as y } from "./index.es211.js";
import s from "./index.es212.js";
import h from "./index.es213.js";
import { getBeginOfDecadeYear as p } from "./index.es200.js";
var i = function() {
  return i = Object.assign || function(e) {
    for (var a, n = 1, r = arguments.length; n < r; n++) {
      a = arguments[n];
      for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
    }
    return e;
  }, i.apply(this, arguments);
}, d = function(e, a) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && a.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, r = Object.getOwnPropertySymbols(e); t < r.length; t++)
      a.indexOf(r[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[t]) && (n[r[t]] = e[r[t]]);
  return n;
};
function j(e) {
  var a = e.activeStartDate, n = e.hover, r = e.showNeighboringDecade, t = e.value, l = e.valueType, v = d(e, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]), o = p(a), g = o + (r ? 11 : 9);
  return f(s, { className: "react-calendar__decade-view__years", dateTransform: y, dateType: "year", end: g, hover: n, renderTile: function(u) {
    var c = u.date, m = d(u, ["date"]);
    return f(h, i({}, v, m, { activeStartDate: a, currentDecade: o, date: c }), c.getTime());
  }, start: o, value: t, valueType: l });
}
export {
  j as default
};
