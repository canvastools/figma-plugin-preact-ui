import "preact/compat";
import { jsx as y } from "./index.es203.js";
import { getDayStart as g, getDayEnd as h } from "./index.es274.js";
import v from "./index.es283.js";
import { isWeekend as b } from "./index.es263.js";
import { formatDay as D, formatLongDate as O } from "./index.es272.js";
var i = function() {
  return i = Object.assign || function(e) {
    for (var n, a = 1, r = arguments.length; a < r; a++) {
      n = arguments[a];
      for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
    }
    return e;
  }, i.apply(this, arguments);
}, _ = function(e, n) {
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, r = Object.getOwnPropertySymbols(e); t < r.length; t++)
      n.indexOf(r[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[t]) && (a[r[t]] = e[r[t]]);
  return a;
}, c = "react-calendar__month-view__days__day";
function I(e) {
  var n = e.calendarType, a = e.classes, r = a === void 0 ? [] : a, t = e.currentMonthIndex, m = e.formatDay, d = m === void 0 ? D : m, l = e.formatLongDate, p = l === void 0 ? O : l, f = _(e, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]), s = f.date, u = f.locale, o = [];
  return r && o.push.apply(o, r), o.push(c), b(s, n) && o.push("".concat(c, "--weekend")), s.getMonth() !== t && o.push("".concat(c, "--neighboringMonth")), y(v, i({}, f, { classes: o, formatAbbr: p, maxDateTransform: h, minDateTransform: g, view: "month", children: d(u, s) }));
}
export {
  I as default
};
