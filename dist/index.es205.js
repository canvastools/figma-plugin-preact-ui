import "preact/compat";
import { jsx as c } from "./index.es129.js";
var u = function() {
  return u = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, u.apply(this, arguments);
}, i = function(e, t) {
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
}, o = "react-calendar__tile";
function N(e) {
  var t = e.onClickWeekNumber, a = e.weekNumber, r = c("span", { children: a });
  if (t) {
    var n = e.date, m = e.onClickWeekNumber, b = e.weekNumber, l = i(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return c("button", u({}, l, { className: o, onClick: function(f) {
      return m(b, n, f);
    }, type: "button", children: r }));
  } else {
    e.date, e.onClickWeekNumber, e.weekNumber;
    var l = i(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return c("div", u({}, l, { className: o, children: r }));
  }
}
export {
  N as default
};
