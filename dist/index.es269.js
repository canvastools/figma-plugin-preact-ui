import "preact/compat";
import { jsx as f } from "./index.es203.js";
import { getDaysInMonth as d, getYear as b, getMonth as W, getDate as h } from "./index.es274.js";
import N from "./index.es279.js";
import y from "./index.es278.js";
import { getDayOfWeek as g, getBeginOfWeek as w, getWeekNumber as D } from "./index.es263.js";
function C(t) {
  var a = t.activeStartDate, o = t.calendarType, v = t.onClickWeekNumber, m = t.onMouseLeave, k = t.showFixedNumberOfWeeks, i = function() {
    if (k)
      return 6;
    var e = d(a), n = g(a, o), r = e - (7 - n);
    return 1 + Math.ceil(r / 7);
  }(), s = function() {
    for (var e = b(a), n = W(a), r = h(a), c = [], u = 0; u < i; u += 1)
      c.push(w(new Date(e, n, r + u * 7), o));
    return c;
  }(), l = s.map(function(e) {
    return D(e, o);
  });
  return f(y, { className: "react-calendar__month-view__weekNumbers", count: i, direction: "column", onFocus: m, onMouseOver: m, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 }, children: l.map(function(e, n) {
    var r = s[n];
    if (!r)
      throw new Error("date is not defined");
    return f(N, { date: r, onClickWeekNumber: v, weekNumber: e }, e);
  }) });
}
export {
  C as default
};
