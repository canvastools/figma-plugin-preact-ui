import "preact/compat";
import { jsx as u } from "./index.es178.js";
import { getDecadeStart as m, getYearStart as p, getYearEnd as g } from "./index.es246.js";
import v from "./index.es255.js";
import { formatYear as y } from "./index.es244.js";
var s = function() {
  return s = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, s.apply(this, arguments);
}, _ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, l = "react-calendar__decade-view__years__year";
function D(e) {
  var t = e.classes, n = t === void 0 ? [] : t, r = e.currentDecade, a = e.formatYear, i = a === void 0 ? y : a, c = _(e, ["classes", "currentDecade", "formatYear"]), f = c.date, d = c.locale, o = [];
  return n && o.push.apply(o, n), o.push(l), m(f).getFullYear() !== r && o.push("".concat(l, "--neighboringDecade")), u(v, s({}, c, { classes: o, maxDateTransform: g, minDateTransform: p, view: "decade", children: i(d, f) }));
}
export {
  D as default
};
