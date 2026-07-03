import "preact/compat";
import { jsx as f } from "./index.es203.js";
import { getDecadeStart as m } from "./index.es274.js";
import s from "./index.es275.js";
import h from "./index.es276.js";
import { getBeginOfCenturyYear as p } from "./index.es263.js";
var u = function() {
  return u = Object.assign || function(e) {
    for (var a, n = 1, t = arguments.length; n < t; n++) {
      a = arguments[n];
      for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
  }, u.apply(this, arguments);
}, d = function(e, a) {
  var n = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++)
      a.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (n[t[r]] = e[t[r]]);
  return n;
};
function D(e) {
  var a = e.activeStartDate, n = e.hover, t = e.showNeighboringCentury, r = e.value, l = e.valueType, v = d(e, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]), o = p(a), y = o + (t ? 119 : 99);
  return f(s, { className: "react-calendar__century-view__decades", dateTransform: m, dateType: "decade", end: y, hover: n, renderTile: function(i) {
    var c = i.date, g = d(i, ["date"]);
    return f(h, u({}, v, g, { activeStartDate: a, currentCentury: o, date: c }), c.getTime());
  }, start: o, step: 10, value: r, valueType: l });
}
export {
  D as default
};
