import "preact/compat";
import { jsx as d } from "./index.es203.js";
import { getCenturyStart as m, getDecadeStart as p, getDecadeEnd as y } from "./index.es274.js";
import g from "./index.es283.js";
import { getDecadeLabel as v } from "./index.es263.js";
import { formatYear as _ } from "./index.es272.js";
var s = function() {
  return s = Object.assign || function(e) {
    for (var a, n = 1, r = arguments.length; n < r; n++) {
      a = arguments[n];
      for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
    }
    return e;
  }, s.apply(this, arguments);
}, b = function(e, a) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && a.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, r = Object.getOwnPropertySymbols(e); t < r.length; t++)
      a.indexOf(r[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[t]) && (n[r[t]] = e[r[t]]);
  return n;
}, u = "react-calendar__century-view__decades__decade";
function x(e) {
  var a = e.classes, n = a === void 0 ? [] : a, r = e.currentCentury, t = e.formatYear, l = t === void 0 ? _ : t, c = b(e, ["classes", "currentCentury", "formatYear"]), f = c.date, i = c.locale, o = [];
  return n && o.push.apply(o, n), o.push(u), m(f).getFullYear() !== r && o.push("".concat(u, "--neighboringCentury")), d(g, s({}, c, { classes: o, maxDateTransform: y, minDateTransform: p, view: "century", children: v(i, l, f) }));
}
export {
  x as default
};
