import "preact/compat";
import { jsx as l } from "./index.es203.js";
import { getYear as p, getMonthStart as s } from "./index.es274.js";
import h from "./index.es275.js";
import g from "./index.es282.js";
var i = function() {
  return i = Object.assign || function(e) {
    for (var a, n = 1, t = arguments.length; n < t; n++) {
      a = arguments[n];
      for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
  }, i.apply(this, arguments);
}, v = function(e, a) {
  var n = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++)
      a.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (n[t[r]] = e[t[r]]);
  return n;
};
function S(e) {
  var a = e.activeStartDate, n = e.hover, t = e.value, r = e.valueType, f = v(e, ["activeStartDate", "hover", "value", "valueType"]), c = 0, d = 11, m = p(a);
  return l(h, { className: "react-calendar__year-view__months", dateTransform: function(u) {
    var o = /* @__PURE__ */ new Date();
    return o.setFullYear(m, u, 1), s(o);
  }, dateType: "month", end: d, hover: n, renderTile: function(u) {
    var o = u.date, y = v(u, ["date"]);
    return l(g, i({}, f, y, { activeStartDate: a, date: o }), o.getTime());
  }, start: c, value: t, valueType: r });
}
export {
  S as default
};
