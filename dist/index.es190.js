import "preact/compat";
import { jsx as c } from "./index.es129.js";
import { getYear as _, getMonth as x, getDaysInMonth as D, getDayStart as N } from "./index.es197.js";
import j from "./index.es198.js";
import M from "./index.es203.js";
import { getDayOfWeek as m } from "./index.es186.js";
var l = function() {
  return l = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, l.apply(this, arguments);
}, g = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Y(e) {
  var t = e.activeStartDate, n = e.calendarType, r = e.hover, a = e.showFixedNumberOfWeeks, v = e.showNeighboringMonth, O = e.value, b = e.valueType, p = g(e, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]), d = _(t), f = x(t), s = a || v, y = m(t, n), T = s ? 0 : y, h = (s ? -y : 0) + 1, w = function() {
    if (a)
      return h + 6 * 7 - 1;
    var u = D(t);
    if (v) {
      var o = /* @__PURE__ */ new Date();
      o.setFullYear(d, f, u), o.setHours(0, 0, 0, 0);
      var i = 7 - m(o, n) - 1;
      return u + i;
    }
    return u;
  }();
  return c(j, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(u) {
    var o = /* @__PURE__ */ new Date();
    return o.setFullYear(d, f, u), N(o);
  }, dateType: "day", hover: r, end: w, renderTile: function(u) {
    var o = u.date, i = g(u, ["date"]);
    return c(M, l({}, p, i, { activeStartDate: t, calendarType: n, currentMonthIndex: f, date: o }), o.getTime());
  }, offset: T, start: h, value: O, valueType: b });
}
export {
  Y as default
};
