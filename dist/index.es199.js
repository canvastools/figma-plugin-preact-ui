import "preact/compat";
import { jsx as o } from "./index.es143.js";
import { clsx as b } from "./index.es194.js";
import W from "./index.es204.js";
import O from "./index.es205.js";
import N from "./index.es206.js";
import { CALENDAR_TYPES as w, CALENDAR_TYPE_LOCALES as g } from "./index.es207.js";
var f = function() {
  return f = Object.assign || function(e) {
    for (var a, n = 1, r = arguments.length; n < r; n++) {
      a = arguments[n];
      for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
    }
    return e;
  }, f.apply(this, arguments);
}, S = function(e, a) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && a.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, r = Object.getOwnPropertySymbols(e); t < r.length; t++)
      a.indexOf(r[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[t]) && (n[r[t]] = e[r[t]]);
  return n;
};
function x(e) {
  if (e)
    for (var a = 0, n = Object.entries(g); a < n.length; a++) {
      var r = n[a], t = r[0], i = r[1];
      if (i.includes(e))
        return t;
    }
  return w.ISO_8601;
}
function P(e) {
  var a = e.activeStartDate, n = e.locale, r = e.onMouseLeave, t = e.showFixedNumberOfWeeks, i = e.calendarType, l = i === void 0 ? x(n) : i, d = e.formatShortWeekday, m = e.formatWeekday, s = e.onClickWeekNumber, u = e.showWeekNumbers, y = S(e, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function k() {
    return o(O, { calendarType: l, formatShortWeekday: d, formatWeekday: m, locale: n, onMouseLeave: r });
  }
  function v() {
    return u ? o(N, { activeStartDate: a, calendarType: l, onClickWeekNumber: s, onMouseLeave: r, showFixedNumberOfWeeks: t }) : null;
  }
  function h() {
    return o(W, f({ calendarType: l }, y));
  }
  var c = "react-calendar__month-view";
  return o("div", { className: b(c, u ? "".concat(c, "--weekNumbers") : ""), children: o("div", { style: {
    display: "flex",
    alignItems: "flex-end"
  }, children: [v(), o("div", { style: {
    flexGrow: 1,
    width: "100%"
  }, children: [k(), h()] })] }) });
}
export {
  P as default
};
