import "preact/compat";
import { jsx as t } from "./index.es129.js";
import { clsx as _ } from "./index.es180.js";
import { getMonthStart as M, getYear as g, getMonth as x } from "./index.es197.js";
import p from "./index.es204.js";
import { getDayOfWeek as N, isWeekend as O, isCurrentDayOfWeek as S } from "./index.es186.js";
import { formatWeekday as b, formatShortWeekday as w } from "./index.es195.js";
var v = "react-calendar__month-view__weekdays", n = "".concat(v, "__weekday");
function I(e) {
  for (var m = e.calendarType, c = e.formatShortWeekday, h = c === void 0 ? w : c, l = e.formatWeekday, u = l === void 0 ? b : l, i = e.locale, d = e.onMouseLeave, y = /* @__PURE__ */ new Date(), o = M(y), W = g(o), k = x(o), f = [], a = 1; a <= 7; a += 1) {
    var r = new Date(W, k, a - N(o, m)), s = u(i, r);
    f.push(t("div", { className: _(n, S(r) && "".concat(n, "--current"), O(r, m) && "".concat(n, "--weekend")), children: t("abbr", { "aria-label": s, title: s, children: h(i, r).replace(".", "") }) }, a));
  }
  return t(p, { className: v, count: 7, onFocus: d, onMouseOver: d, children: f });
}
export {
  I as default
};
